import fs from 'fs/promises';

const orderConfig = config => {
  const newConfig = {};
  newConfig.whirls = [];
  const ordered = config.whirls.sort((a, b) => a.name.localeCompare(b.name));
  for (let i = 0; i < ordered.length; i++) {
    newConfig.whirls.push(config.whirls[i]);
  }
  fs.writeFile(
    `${process.cwd()}/src/whirl.config.json`,
    JSON.stringify(newConfig, null, 2)
  );
};

export default orderConfig;
