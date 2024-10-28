import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const parseVariants = (code) => {
  const variantGroupsRegex = /([a-z\-0-9:]+:)\((.*?)\)/g;
  const variantGroupMatches = [...code.matchAll(variantGroupsRegex)];

  variantGroupMatches.forEach(([matchStr, variants, classes]) => {
    const parsedClasses = classes
      .split(" ")
      .map((cls) => variants + cls)
      .join(" ");

    code = code.replace(matchStr, parsedClasses);
  });

  return code;
};

function twVariantGroups() {
  return {
    name: "tw-variant-groups",
    transform(code) {
      const classNameRegex = /className\s*:\s*"(.*?)"/gm;
      const classNameMatches = [...code.matchAll(classNameRegex)].filter(
        (match) => match && match.length,
      );

      classNameMatches.forEach(([matchStr, className]) => {
        const parsedClasses = parseVariants(className); // Use `className` to generate the expanded classes
        code = code.replace(matchStr, `className: "${parsedClasses}"`);
      });

      return code;
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [twVariantGroups(), react()],
});
