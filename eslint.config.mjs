import antfu from '@antfu/eslint-config'

export default antfu(
  {
    markdown: false,
  },
  {
    // 针对全局的指定（文件夹/文件）进行忽略
    ignores: ['**/dist'],
  },
  {
    rules: {
      'eslint-comments/no-unlimited-disable': 'off',
      'style/quotes': 'off',
      'style/semi': 'off',
      'ts/no-redeclare': 'off',
      'node/prefer-global/process': 'off',
      'ts/consistent-type-imbports': 'off',
      "unicorn/no-new-array": "off",
      "unused-imports/no-unused-vars": "off",
      "style/no-tabs": "off"
    },
  },
)
