const env = 'dev';

const getBaseUrl = (env) => {
  switch (env) {
    case 'dev':
      return {
        apiBaseUrl: ''
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