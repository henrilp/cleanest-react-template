import { KapixElement, KapixText } from "@henrilp/test-package";
import React from "react";

export interface KaTextProps {
  children: string;
  code: string;
  options?: any;
}
/**
 * @value a string or a stringified html component
 * @returns a component
 */
export const KaText = ({ children, code, options }: KaTextProps) => {
  return (
    <KapixElement
      code={code}
      value={children}
      Element={KapixText}
      options={options}
    />
  );
};
