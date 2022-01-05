import fs from 'fs/promises';

const createWhirl = (name, requiredElements, config) => {
  config.whirls.push({
    name,
    className: name,
    requiredElements: requiredElements ? requiredElements : 0,
    active: true,
  });
  const content = `
/**
  * ${name}
  *
  * @author { AUTHOR_NAME }
*/
`;
  fs.writeFile(`${process.cwd()}/src/whirls/${name}.scss`, content);
  return config;
};

module.exports = createWhirl;
