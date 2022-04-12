import { KapixContainer } from "@henrilp/test-package";
import React, { FunctionComponent } from "react";

export interface KaContainerProps {
  children: JSX.Element[];
  code: string;
  options?: any;
}

export const KaContainer = ({ children, code, options }: KaContainerProps) => {
  return (
    <KapixContainer code={code} options={options}>
      {children}
    </KapixContainer>
  );
};
