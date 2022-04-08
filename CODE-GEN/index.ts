import rowItem from "./devMaterial/rowItem.json";
import { itemToReact } from "./lib/generationStructure";

export const generateScript = () => itemToReact(rowItem);
