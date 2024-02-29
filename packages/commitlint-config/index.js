module.exports = {
  // ignores: [(commit) => commit === ""], // 忽略的提交
  // defaultIgnores: false, // 是否使用默认忽略规则
  // conventional-changelog-conventionalcommits的作用是？
  // 1. 解析提交信息
  // 2. 生成changelog
  // 3. 生成版本号
  // 4. 生成发布日志
  parserPreset: "conventional-changelog-conventionalcommits",
  rules: {
    "type-case": [2, "always", "lower-case"], // type 是否是小写
    "type-empty": [2, "never"], // type 是否为空
    "type-enum": [
      2,
      "always",
      [
        "feat", // 新增功能
        "fix", //bug 修复
        "build", // 主要目的是修改项目构建系统(例如 glup，webpack，rollup 的配置等)的提交
        "perf", //性能优化
        "style", // 不影响程序逻辑的代码修改(修改空白字符，补全缺失的分号等)
        "test", // 新增测试用例或是更新现有测试
        "refactor", // 重构代码(既没有新增功能，也没有修复 bug)
        "ci", // 主要目的是修改项目继续集成流程(例如 Travis，Jenkins，GitLab CI，Circle等)的提交
        "docs", // 档更新
        "revert", // 回滚某个更早之前的提交
        "chore", // 不属于以上类型的其他类型(日常事务)
      ],
    ], // 类型枚举
    "subject-empty": [2, "never"], // subject 是否为空
    "subject-full-stop": [2, "never", "."], // subject 结尾是否以指定字符结束
    "subject-case": [
      2,
      "always",
      [
        "lower-case",
        "sentence-case",
        "start-case",
        "pascal-case",
        "upper-case",
      ],
    ], // subject 是否符合指定的 case
    "header-max-length": [2, "always", 100], // header 最大长度
    "body-full-stop": [2, "never", "."], // body 结尾是否以指定字符结束
    "body-max-length": [2, "always", 100], // body 最大长度
    "body-leading-blank": [2, "always"], // body 前面是否需要空一行
    "footer-leading-blank": [2, "always"], // footer 前面是否需要空一行
    "footer-max-line-length": [2, "always", 100], // footer 最大长度
    "scope-empty": [2, "never"], // scope 是否为空
    "scope-case": [2, "always", "lower-case"], // scope 是否是小写
  },
};
