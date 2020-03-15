const env = 'dev';

const getBaseUrl = (env) => {
  switch (env) {
    case 'dev':
      return {
        apiBaseUrl: 'http://47.105.164.12/school/web/index.php?s='
      }
    case 'prod':
      return {
        apiBaseUrl: ''
      }
  }
}

module.exports = {
  env,
  ...getBaseUrl(env)
}