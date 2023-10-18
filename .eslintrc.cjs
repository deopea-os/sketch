/**
 * @type {import("@typescript-eslint/utils").TSESLint.Linter.Config}
 */
module.exports = {
  root: true,
  extends: ["@deopea.os/eslint-config", "turbo"],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: "./tsconfig.json",
  },
};
