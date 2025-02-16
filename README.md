# repro-perfectionist-fallback-sort

## Repro steps

```shell
pnpm run lint
```

## Output

```shell
RangeError: Maximum call stack size exceeded
Occurred while linting /Users/ntnyq/Desktop/github/eslint/repro-perfectionist-fallback-sort/index.ts:3
Rule: "perfectionist/sort-exports"
    at [Symbol.replace] (<anonymous>)
    at String.replaceAll (<anonymous>)
    at /Users/ntnyq/Desktop/github/eslint/repro-perfectionist-fallback-sort/node_modules/.pnpm/eslint-plugin-perfectionist@4.9.0_eslint@9.20.1_typescript@5.7.3/node_modules/eslint-plugin-perfectionist/dist/utils/compare.js:138:25
    at /Users/ntnyq/Desktop/github/eslint/repro-perfectionist-fallback-sort/node_modules/.pnpm/eslint-plugin-perfectionist@4.9.0_eslint@9.20.1_typescript@5.7.3/node_modules/eslint-plugin-perfectionist/dist/utils/compare.js:45:5
    at compare (/Users/ntnyq/Desktop/github/eslint/repro-perfectionist-fallback-sort/node_modules/.pnpm/eslint-plugin-perfectionist@4.9.0_eslint@9.20.1_typescript@5.7.3/node_modules/eslint-plugin-perfectionist/dist/utils/compare.js:27:5)
    at compare (/Users/ntnyq/Desktop/github/eslint/repro-perfectionist-fallback-sort/node_modules/.pnpm/eslint-plugin-perfectionist@4.9.0_eslint@9.20.1_typescript@5.7.3/node_modules/eslint-plugin-perfectionist/dist/utils/compare.js:32:10)
    at compare (/Users/ntnyq/Desktop/github/eslint/repro-perfectionist-fallback-sort/node_modules/.pnpm/eslint-plugin-perfectionist@4.9.0_eslint@9.20.1_typescript@5.7.3/node_modules/eslint-plugin-perfectionist/dist/utils/compare.js:32:10)
    at compare (/Users/ntnyq/Desktop/github/eslint/repro-perfectionist-fallback-sort/node_modules/.pnpm/eslint-plugin-perfectionist@4.9.0_eslint@9.20.1_typescript@5.7.3/node_modules/eslint-plugin-perfectionist/dist/utils/compare.js:32:10)
    at compare (/Users/ntnyq/Desktop/github/eslint/repro-perfectionist-fallback-sort/node_modules/.pnpm/eslint-plugin-perfectionist@4.9.0_eslint@9.20.1_typescript@5.7.3/node_modules/eslint-plugin-perfectionist/dist/utils/compare.js:32:10)
    at compare (/Users/ntnyq/Desktop/github/eslint/repro-perfectionist-fallback-sort/node_modules/.pnpm/eslint-plugin-perfectionist@4.9.0_eslint@9.20.1_typescript@5.7.3/node_modules/eslint-plugin-perfectionist/dist/utils/compare.js:32:10)
```
