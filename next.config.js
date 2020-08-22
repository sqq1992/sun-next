/**
 * @fileOverview
 * @author crow
 * @time 2018/4/8
 */
const withCSS  = require('@zeit/next-css');
const withLess = require('@zeit/next-less');

// fix: prevents error when .css files are required by node
if (typeof require !== 'undefined') {
    require.extensions['.css'] = (file) => {
    }
}

module.exports = withLess(withCSS({}));


