const loaderUtils = require("loader-utils");
module.exports = function (source) {
  // 获取 options
  const options = loaderUtils.getOptions(this);
  return source.replace(options.str, options.replaceStr);
};