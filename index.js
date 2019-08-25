const { exec } = require('child_process');

exec(
    `${path.resolve(__dirname,'node_modules','electron-forge')} start`
  );
