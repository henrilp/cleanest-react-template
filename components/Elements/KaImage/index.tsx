import { KapixElement, KapixImage } from "@henrilp/test-package";
import React from "react";

export interface KaImageProps {
  children: string;
  code: string;
  options?: any;
}
/**
 * @value a string or a stringified html component
 * @returns a component
 */
export const KaImage = ({ children, code, options }: KaImageProps) => {
  return (
    <KapixElement
      code={code}
      value={children}
      Element={KapixImage}
      options={options}
    />
  );
};
