import { getGeneratedReact } from "CODE-GEN";
import fs from "fs";

export const writeReact = () => {
  fs.writeFile("./CODE-GEN/GENERATED/hello.tsx", getGeneratedReact(), () =>
    console.log("========= file written =========")
  );
};
