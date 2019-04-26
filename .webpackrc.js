const path = require('path');
export default {
  entry: './src/index.js',
  commons: [{
      name: 'vendor',
      filename: '[name].js',
      minChunks: function (module, count) {
        console.log(module.resource, `引用次数${count}`);
        //"有正在处理文件" + "这个文件是 .js 后缀" + "这个文件是在 node_modules 中"
        return (
          module.resource &&
          /\.js$/.test(module.resource) &&
          module.resource.indexOf(path.join(__dirname, './node_modules')) === 0
        )
      }
    },
    {
      name: 'runtime',
      filename: '[name].js',
      chunks: ['vendor']
    }
  ],
  devtool: 'none',
  html: {
    template: './src/index.ejs',
  },
}
