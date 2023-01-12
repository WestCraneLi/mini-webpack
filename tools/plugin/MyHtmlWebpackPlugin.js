class MyHtmlWebpackPlugin {
  apply(complier) {
    const filename = complier.options.output.filename;
    complier.hooks.emit.tapAsync(pluginName, (comliation, callback) => {
      const content = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>Webpack</title>
          <script defer src="./${filename}"></script>
        </head>
        <body>
        </body>
      </html>`;
      comliation.assests['index.html'] = {
        source: function () {
          return content;
        },
        size: function () {
          return content.length;
        },
      };
      callback();
    });
  }
}
module.exports = MyHtmlWebpackPlugin;
