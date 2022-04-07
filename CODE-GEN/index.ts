import { APP_PREFIX, breakline, tabValue } from "./constants";
import item from "./devMaterial/odysseyItem.json";
import { IVirtualElement, KeyValuePair } from "./types";
import { strReactPrefix, strReactSuffix, upperFirstLetter } from "./utils";

/**
 * get the component name from the virtual element's field then widget property
 * @param item a json virtual element
 * @returns
 */
export const getComponentName = (item: IVirtualElement): string => {
  return upperFirstLetter(APP_PREFIX) + upperFirstLetter(item.field.widget);
};

/**
 * get the component props
 * @param item a json virtual element
 * @returns
 */
export const getComponentProps = (item: IVirtualElement): KeyValuePair => {
  return {
    code: "k-texte",
  };
};

/**
 * get the component children, which is always a string here
 * @param item a json virtual element
 * @returns
 */
export const getComponentChildren = (item: IVirtualElement): string => {
  return item.data;
};

export const parseComponent = (
  name: string,
  props: KeyValuePair,
  children: string,
  level: number = 2
) => {
  const resultArray = []; // each array item is a line of code

  // first line: "<ComponentName"
  const firstLine = "<" + name;
  resultArray.push(firstLine);

  // intermediate lines: props (not children)
  for (var key in props) {
    let line = tabValue + key + " = ";
    if (typeof props[key] === "string") {
      line += `"` + props[key] + `"`; // string
    } else {
      line += "{" + props[key] + "}"; // object
    }
    resultArray.push(line);
  }

  // the end depends if component has children or not
  if (children) {
    // last lines: ">" + children + "</ComponentName>"
    resultArray.push(">");
    resultArray.push(tabValue + `{"` + children + `"}`);
    resultArray.push("</" + name + ">");
  } else {
    // last line: close the component "/>"
    resultArray.push("/>");
  }

  // add prefix to all lines
  const prefix = tabValue.repeat(level);

  // return the result as a string  (one line per array item)
  return resultArray.map((line) => prefix + line).join(breakline);
};

export const getGeneratedReact = () => {
  const componentName = getComponentName(item);

  const componentProps = getComponentProps(item);

  const componentChildren = getComponentChildren(item);

  const strJsxComponent = parseComponent(
    componentName,
    componentProps,
    componentChildren
  );

  const strReactComponent = [
    strReactPrefix,
    strJsxComponent,
    strReactSuffix,
  ].join(breakline);

  return strReactComponent;
};
