const path = require('path');
const jest = require('jest');
const fs = require('fs');

const rootTest = new jest();

const argPath = process.argv[2];

if (!argPath.includes('.js')) {
  fs.readdirSync(path.join(__dirname, `./${argPath}`))
    .filter(file => file.indexOf('.test') !== 0)
    .forEach(file => {
      rootTest.addFile(path.join(__dirname, `./${argPath}`, file));
    });
} else {
  rootTest.addFile(path.join(__dirname, `./${argPath}`));
}

rootTest.run(failed_count => {
  if (failed_count !== 0) {
    return console.log(':(');
  }

  console.log('Done :)');
});
