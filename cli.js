const { execSync } = require('child_process');
const path = require('path');

execSync(
    'yarn start',
    {
      stdio: ['inherit','inherit','inherit'],
      cwd: __dirname
    }
  );
