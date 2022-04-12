import { generateScript } from "CODE-GEN";
import fs from "fs";

// separated file for functions that run "on server side" (i.e. "fs" in Node)
export const writeReact = () => {
  fs.writeFile("./CODE-GEN/GENERATED/hello.tsx", generateScript(), () =>
    console.log("========= file written =========")
  );
};
