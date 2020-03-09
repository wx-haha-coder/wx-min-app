const env = 'dev';

const getBaseUrl = (env) => {
  switch (env) {
    case 'dev':
      return {
        apiBaseUrl: 'http://47.105.164.12'
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