const ENV = process.env.NODE_ENV
const isDev = ENV !== 'production';

module.exports = {
  isDev: isDev,
};
