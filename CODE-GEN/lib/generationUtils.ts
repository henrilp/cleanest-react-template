import { APP_PREFIX, breakline, tabValue } from "CODE-GEN/constants";
import { IVirtualElement, KeyValuePair } from "CODE-GEN/types";
import { upperFirstLetter } from "CODE-GEN/lib/utils";

export const suffix = `  );
}`;

export const isContainer = (item: IVirtualElement) =>
  item.field.widget === "container";

/**
 * Checks if item is already in the list. If not, add it.
 * @param item
 * @param componentsToImport
 * @returns a list of components to import
 */
export const addToImports = (
  item: IVirtualElement,
  componentsToImport: string[]
) => {
  const componentName = getNodeName(item);
  if (!componentsToImport.includes(componentName)) {
    componentsToImport.push(componentName);
  }
  return;
};

/**
 * get the Node name (component or container) from the virtual element's field then widget property
 * @param item a json virtual element
 * @returns
 */
export const getNodeName = (item: IVirtualElement): string => {
  return upperFirstLetter(APP_PREFIX) + upperFirstLetter(item.field.widget);
};

/**
 * get the component children, which is always a string here
 * @param item a json virtual element
 * @returns
 */
export const getComponentChildren = (item: IVirtualElement): string => {
  return `{"${item.data}"}`;
};

/**
 * get the component props
 * @param item a json virtual element
 * @returns
 */

export const getComponentProps = (item: IVirtualElement): KeyValuePair => {
  // TODO: add support for other props

  return {
    code: "k-button",
  };
};

/**
 * get the component props
 * @param item a json virtual element
 * @returns
 */
export const getContainerProps = (item: IVirtualElement): KeyValuePair => {
  return {
    code: "k-texte",
  };
};

/**
 * generic print of the full react Node, may it be a container or a component
 * @param name
 * @param props
 * @param tabbedChildren string of tabbed children, may it be a string or tree of components
 * @param level
 * @returns a JSX tree of containers and components
 */
export const parseReactNode = (
  name: string,
  props: KeyValuePair,
  tabbedChildren?: string,
  level: number = 2
) => {
  const resultArray = []; // each array item is a line of code
  const prefix = tabs(level);

  // first line: "<ComponentName"
  const firstLine = "<" + name;
  resultArray.push(prefix + firstLine);

  // intermediate lines: props (not children)
  for (var key in props) {
    let line = tabValue + key + " = ";
    if (typeof props[key] === "string") {
      line += `"` + props[key] + `"`; // string
    } else {
      line += "{" + props[key] + "}"; // object
    }
    resultArray.push(prefix + line);
  }

  // the end depends if component has children or not
  if (tabbedChildren) {
    // last lines: ">" + children + "</ComponentName>"
    resultArray.push(prefix + ">");
    resultArray.push(tabbedChildren); // children are already tabbed
    // this allows to manipulate a string that represent several lines
    resultArray.push(prefix + "</" + name + ">");
  } else {
    // last line: close the component "/>"
    resultArray.push(prefix + "/>");
  }

  // return the result as a string  (one line per array item)
  return resultArray.join(breakline);
};

export const tabs = (level: number) => {
  return tabValue.repeat(level);
};
