export * from "./FundCard";

export * from "./VideoCard";

export * from "./Button";

export * from "./Input";

export * from "./UtilHeader";

export * from "./Card";

export * from "./LoadingSpinner";

export * from "./Table";

export * from "./PrintHero";

export * from "./TabGroup";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
function styleInject(css, { insertAt } = {}) {
  if (!css || typeof document === "undefined") return;
  const head = document.head || document.getElementsByTagName("head")[0];
  const style = document.createElement("style");
  style.type = "text/css";
  if (insertAt === "top") {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  if (style.styleSheet) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

// components/index.css
styleInject(
  '@tailwind base;\n@tailwind components;\n@tailwind utilities;\n@font-face {\n  font-family: "Brown";\n  src: url(/fonts/lineto-brown-regular.woff) format("woff");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: "Brown";\n  src: url(/fonts/lineto-brown-bold.woff) format("woff");\n  font-weight: bold;\n  font-style: normal;\n}\n@font-face {\n  font-family: "Brown";\n  src: url(/fonts/lineto-brown-light.woff) format("woff");\n  font-weight: 300;\n  font-style: normal;\n}\n@font-face {\n  font-family: "Brown";\n  src: url(/fonts/lineto-brown-thin.woff) format("woff");\n  font-weight: 100;\n  font-style: normal;\n}\n@font-face {\n  font-family: "Brown";\n  src: url(/fonts/lineto-brown-thinitalic.woff) format("woff");\n  font-weight: 100;\n  font-style: italic;\n}\n@font-face {\n  font-family: "Brown";\n  src: url(/fonts/lineto-brown-lightitalic.woff) format("woff");\n  font-weight: 300;\n  font-style: italic;\n}\n@font-face {\n  font-family: "Brown";\n  src: url(/fonts/lineto-brown-bolditalic.woff) format("woff");\n  font-weight: bold;\n  font-style: italic;\n}\n@font-face {\n  font-family: "Brown";\n  src: url(/fonts/lineto-brown-blackitalic.woff) format("woff");\n  font-weight: 900;\n  font-style: italic;\n}\n@font-face {\n  font-family: "ProximaNova";\n  src: url(/fonts/ProximaNova-CondensedRegular.otf) format("opentype");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: "ProximaNova";\n  src: url(/fonts/ProximaNova-CondensedBold.otf) format("opentype");\n  font-weight: 700;\n  font-style: normal;\n}\n@font-face {\n  font-family: "ProximaNova";\n  src: url(/fonts/ProximaNova-RegularItalic.otf) format("opentype");\n  font-weight: normal;\n  font-style: italic;\n}\n',
);
