module.exports = [
    {
      mode: 'development',
      entry: './app/main.ts',
      target: 'electron-main',
      module: {
        rules: [{
          test: /\.ts$/,
          include: /src/,
          use: [{ loader: 'ts-loader' }]
        }]
      },
      output: {
        path: __dirname + '/src',
        filename: 'main.js'
      }
    }
  ];