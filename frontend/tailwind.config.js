import flowbite from "flowbite-react/tailwind";

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

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {},
  },
  plugins: [flowbite.plugin()],
  transform: parseVariants,
};
