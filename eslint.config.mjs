// @ts-check

import { config, configs } from 'typescript-eslint'
import pluginPerfectionist from 'eslint-plugin-perfectionist'

export default config(
  {
    extends: configs.recommended,
  },
  {
    plugins: {
      perfectionist: pluginPerfectionist,
    },
    rules: {
      'perfectionist/sort-exports': [
        'error',
        {
          fallbackSort: { type: 'alphabetical' },
          type: 'line-length',
        },
      ],
    },
  },
)
