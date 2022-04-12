import { KapixButton, KapixElement } from "@henrilp/test-package";
import React from "react";

export interface KaButtonProps {
  children: string;
  code: string;
  options?: any;
}
/**
 * @value a string or a stringified html component
 * @returns a component
 */
export const KaButton = ({ children, code, options }: KaButtonProps) => {
  return (
    <KapixElement
      code={code}
      value={children}
      Element={KapixButton}
      options={options}
    />
  );
};
