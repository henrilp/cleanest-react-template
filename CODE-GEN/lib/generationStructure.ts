import { breakline, tabValue } from "CODE-GEN/constants";
import { IVirtualElement } from "CODE-GEN/types";
import {
  addToImports,
  getComponentChildren,
  getComponentProps,
  getContainerProps,
  getNodeName,
  isContainer,
  parseReactNode,
  suffix,
  tabs,
} from "./generationUtils";

/*************************************  MAIN SCRIPT *******************************
 *
 * Main generation function that works on any item (even big ones)
 * @param item
 * @returns a react script
 */
export const itemToReact = (item: IVirtualElement) => {
  const componentsToImport: string[] = [];

  // JSX
  // this is recursive over items, and it fills the componentsToImport array
  const jsx = generateJsxItem(item, componentsToImport);

  // IMPORTS
  const imports = generateImports(componentsToImport);

  // FUNCTIONAL COMPONENT NAME
  const name = generateName(item);

  // RESULT
  const script = [imports, name, jsx, suffix].join(breakline);

  return script;
};

/**************************************  MAIN JSX  ****************************************
 *
 * Generates the JSX script for a given item, while filling the componentsToImport array
 * @param item
 * @param componentsToImport
 * @param level the depths of the item in the tree, used for indentation
 * @returns a JSX tree of containers and components
 */
const generateJsxItem = (
  item: IVirtualElement,
  componentsToImport: string[],
  level: number = 1
): string => {
  addToImports(item, componentsToImport);
  if (isContainer(item)) {
    return generateJsxContainer(item, componentsToImport, level);
  } else {
    return generateJsxComponent(item, level);
  }
};

/*********************************** CONTAINER JSX ********************************
 *
 * Generates the JSX script for a given container (and recursively all its descendants)
 * while keeping track of the components to import (mutable argument)
 * @param item
 * @param componentsToImport
 * @param level
 * @returns a JSX tree of containers and components
 */
const generateJsxContainer = (
  item: IVirtualElement,
  componentsToImport: string[],
  level: number
): string => {
  const containerProps = getContainerProps(item);

  // recursive call on children
  const childrenScript = item.items
    // add a tabbed depth-level to all children items
    ?.map((item) => generateJsxItem(item, componentsToImport, level + 1))
    .join(breakline);

  const name = getNodeName(item);
  const props = getContainerProps(item);
  return parseReactNode(name, containerProps, childrenScript, level);
};

/*********************************** COMPONENT JSX ********************************
 *
 * Generates the JSX script for a given component
 * @param item
 * @returns
 */
const generateJsxComponent = (item: IVirtualElement, level: number): string => {
  const componentName = getNodeName(item);

  const componentProps = getComponentProps(item); // children is not counted as a prop

  const componentChildren = getComponentChildren(item); // children should be a string

  return parseReactNode(
    componentName,
    componentProps,
    tabs(level + 1) + componentChildren, // this is a "tabbed children" argument
    level
  );
};

/********************************** JS IMPORTS ****************************************
 *
 * Generates the JS imports for the components to import
 * @param componentsToImport
 * @returns js script with imports
 */
const generateImports = (componentsToImport: string[]) => {
  const imports = componentsToImport.map((componentName) => {
    if (componentName === "KaContainer") {
      return `import { KaContainer } from "components/Container";`;
    }
    return `import { ${componentName} } from "components/Elements/${componentName}";`;
  });
  return imports.join(breakline) + breakline;
};

/********************************** JS FUNCTION NAME *********************************
 *
 * Generates the JS function name for the given item
 * @param item
 * @returns js script with function name
 */
const generateName = (item: IVirtualElement) => {
  return "export const Generated = () => {" + breakline + tabValue + "return(";
};
