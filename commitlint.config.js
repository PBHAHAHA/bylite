// module.exports = { extends: ['@commitlint/config-conventional'] }

// eslint-disable-next-line no-undef
module.exports = {
    extends: ['@commitlint/config-conventional'], // extends can be nested
    parserPreset: 'conventional-changelog-conventionalcommits',
    prompt: {
      settings: {},
      messages: {
        skip: ':skip',
        max: 'upper %d chars',
        min: '%d chars at least',
        emptyWarning: 'can not be empty',
        upperLimitWarning: 'over limit',
        lowerLimitWarning: 'below limit'
      },
      types: [
        { value: 'feat', name: 'feat:     ✨  新功能', emoji: '✨ ' },
        { value: 'fix', name: 'fix:      🐛  修复一个Bug', emoji: '🐛 ' },
        { value: 'docs', name: 'docs:     📝  文档变更', emoji: '📝 ' },
        {
          value: 'style',
          name: 'style:    💄  代码风格，格式修复',
          emoji: '💄 '
        },
        {
          value: 'refactor',
          name: 'refactor: 📦️   代码重构',
          emoji: '📦️ '
        },
        {
          value: 'perf',
          name: 'perf:     🚀  代码优化,改善性能',
          emoji: '🚀 '
        },
        {
          value: 'test',
          name: 'test:     🚨  测试',
          emoji: '🚨 '
        },
        {
          value: 'build',
          name: 'build:    🛠   变更项目构建或外部依赖',
          emoji: '🛠 '
        },
        {
          value: 'ci',
          name: 'ci:       🎡  对CI配置文件和脚本的更改',
          emoji: '🎡 '
        },
        {
          value: 'chore',
          name: "chore:    🔨  变更构建流程或辅助工具",
          emoji: '🔨 '
        },
        { value: 'revert', name: 'revert:   ⏪️  代码回退', emoji: ':rewind:' }
      ],
      useEmoji: true,
      confirmColorize: true,
      emojiAlign: 'center',
      questions: {
        scope: {
          description: 'What is the scope of this change (e.g. component or file name)'
        },
        subject: {
          description: 'Write a short, imperative tense description of the change'
        },
        body: {
          description: 'Provide a longer description of the change'
        },
        isBreaking: {
          description: 'Are there any breaking changes?'
        },
        breakingBody: {
          description:
            'A BREAKING CHANGE commit requires a body. Please enter a longer description of the commit itself'
        },
        breaking: {
          description: 'Describe the breaking changes'
        },
        isIssueAffected: {
          description: 'Does this change affect any open issues?'
        },
        issuesBody: {
          description:
            'If issues are closed, the commit requires a body. Please enter a longer description of the commit itself'
        },
        issues: {
          description: 'Add issue references (e.g. "fix #123", "re #123".)'
        }
      }
    }
  }
  