# Typescript-Algorithms

基于 Bun + Typescript 实现常见算法、数据结构以及 Leetcode 经典题目

## 使用 Dev Container

如果你想使用dev container来启动这个项目，你只需要在你的电脑本机下载 Docker + VSCode Dev Container 插件，就可以使用这个项目的 Dev Container 进行代码开发和书写了。

## 项目开发流程

整个项目用来练习算法数据结构，从`造轮子 -> 测轮子 -> 用轮子`的流程进行：

- 造轮子：造轮子又可以继续划分出定义轮子（表明你的轮子要做啥用的）和实现轮子（将你的轮子用代码实现出来）两个环节
- 测轮子：轮子造完了，怎么知道轮子造的对不对，好不好用？搞测试用例测试你的轮子（bun 天然支持 test）
- 用轮子：随便想些场景数据去使用你自己造的轮子（其实跟测轮子本质一样都是在使用自己造的轮子）

## 使用 Leetcode 插件

### 配置 leetcode 环境

复制如下到用户settings.json

```json
"leetcode-problem-rating.defaultLanguage": "typescript",
```

复制如下到开发容器settings.json

```json
  "leetcode-problem-rating.workspaceFolder": "/root/tsalg/src/leetcode",
  "leetcode-problem-rating.nodePath": "/usr/local/bin/bun",
  "leetcode-problem-rating.filePath": {
    "default": {
      "folder": "${tag}/[${id}]${cn_name}",
      "filename": "index.${ext}",
    }
  }
```

### 解决登录 Leetcode 的问题

项目使用了扩展 ID 为`ccagml.vscode-leetcode-problem-rating`的 LeetCode 插件，并将其放到了 Dev Container 的远程 VSCode 当中作为插件了。登录如果使用账号密码可能有问题，解决的方式就是使用 cookie 的登录方式，输入自己的用户名或者邮箱之后，到了 coolie 这个输入步骤按照如下格式复制粘贴，修改成你自己的`csrftoken`+ `LEETCODE_SESSION`（这两个可以到 leetcode.cn 打开控制台 Application 找到 cookie 中可以看到），下面给出格式：

```shell
csrftoken="你的csrftoken"; LEETCODE_SESSION="你的LEETCODE_SESSION";
```

## Git提交代码

找到你放到github上的本地公钥所在文件（一般在.ssh文件夹对应的磁盘目录下），然后根据尝试在自己操作系统主机终端执行以下命令：
`ssh-add $HOME/.ssh/github_rsa`。

- macos：默认会运行本地的SSH代理，一般不会出错
- windows：启动本地管理员PowerShell并运行以下命令
  - `Set-Service ssh-agent -StartupType Automatic`
  - `Start-Service ssh-agent`
  - `Get-Service ssh-agent`
- Linux: 在终端先运行启动本地的SSH代理`eval "$(ssh-agent -s)"`，然后在`~/.bash_profile`或者`~/.zprofile（对于使用Zsh shell）`文件加入下面代码，以便能够在登录时启动本地的SSH代理

  ```shell
  if [ -z "$SSH_AUTH_SOCK" ]; then
   # Check for a currently running instance of the agent
   RUNNING_AGENT="`ps -ax | grep 'ssh-agent -s' | grep -v grep | wc -l | tr -d '[:space:]'`"
   if [ "$RUNNING_AGENT" = "0" ]; then
        # Launch a new instance of the agent
        ssh-agent -s &> $HOME/.ssh/ssh-agent
   fi
   eval `cat $HOME/.ssh/ssh-agent`
  fi
  ```

接下来，就像你在本地提交代码一样使用git就好了。
