var camelCase = require('camelcase')
module.exports = {
  prompts: {
    name: {
      message: 'What is the name of the new project?',
      default: ':folderName:'
    },
    description: {
      message: 'How would you descripe the new project?',
      default: `my project`
    },
    bili: {
      type: 'confirm',
      message: 'Use bili to build a umd module?'
    }
  },
  data(answers) {
    return {
      moduleName: camelCase(answers.name)
    }
  },
  complete({log, chalk, isNewFolder, folderName}) {
    log.success('Done!')
    if (isNewFolder) {
      log.info(`cd ${chalk.yellow(folderName)} to get started!`)
    }
  }
}
