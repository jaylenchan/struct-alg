## 使用 Leetcode 插件

本地vscode当中搜索leetcode插件`ccagml.vscode-leetcode-problem-rating`并安装

### 如何配置 leetcode 环境？

本地开发复制如下配置到用户settings.json

  ```json
  "leetcode-problem-rating.defaultLanguage": "typescript",
  "leetcode-problem-rating.workspaceFolder": "/root/tsalg/src/leetcode",
  "leetcode-problem-rating.nodePath": "/usr/local/bin/bun",
  "leetcode-problem-rating.filePath": {
    "default": {
      "folder": "${tag}/[${id}]${cn_name}",
      "filename": "index.${ext}",
    }
  }
  ```