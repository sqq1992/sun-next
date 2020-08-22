const next = require('next')

const ENV = process.env.NODE_ENV
const isDev = ENV !== 'production';
const nextApp = next({ isDev })
const nextHandle = nextApp.getRequestHandler()

module.exports = {
  isDev: isDev,
  nextApp: nextApp,
  nextHandle: nextHandle
};
