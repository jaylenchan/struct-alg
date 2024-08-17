# 使用 Vscode Leetcode 插件

本地vscode当中搜索leetcode插件`ccagml.vscode-leetcode-problem-rating`并安装

### 如何配置 leetcode 环境？

本地开发复制如下配置到用户settings.json

  ```json
  "leetcode-problem-rating.defaultLanguage": "typescript",
  "leetcode-problem-rating.workspaceFolder": "${struct-alg项目所在目录}/struct-alg/ts/leetcode",
  "leetcode-problem-rating.nodePath": "/usr/local/bin/bun",
  "leetcode-problem-rating.filePath": {
    "default": {
      "folder": "${tag}/${kebab-case-name}",
      "filename": "index.${ext}",
    }
  }
  ```
