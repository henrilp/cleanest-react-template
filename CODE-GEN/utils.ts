import { tabValue } from "./constants";

export const upperFirstLetter = (str: string | undefined): string => {
  if (!str) return "";
  if (str.length === 0) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const camelCase = (str: string) => {
  return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function (match, index) {
    if (+match === 0) return ""; // or if (/\s+/.test(match)) for white spaces
    return index === 0 ? match.toLowerCase() : match.toUpperCase();
  });
};

/**
 * Convert a label to a JavaScript name
 * @param {string} label - the name of the parameter
 * @returns The normalized label.
 */
export function normalizedJsName(label: string) {
  return camelCase(label);
  // return lowerFirstLetter(pascalCase(label))
}

export const strReactPrefix = `import React from "react";
import { KaText } from "components/Elements/KaText";

export const Generated = ()=>{
  return (`;

export const strReactSuffix = `  );
}`;
