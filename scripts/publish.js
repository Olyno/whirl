import autoprefixer from 'autoprefixer';
import fsp from 'fs-extra';
import path from 'path';
import postcss from 'postcss';
import sass from 'sass';
import config from '../src/whirl.config.json';

const distDir = path.join(process.cwd(), 'dist');
const defaultIndex = path.join(distDir, 'index.js');

fsp.ensureDirSync(distDir);
fsp.ensureDirSync(path.join(distDir, 'css'));

fsp.writeFile(
  defaultIndex,
  "throw new Error('Do not import whirl directly. Import only css/sass you need!')"
);

const processStyles = async name => {
  const result = sass.compile(`${process.cwd()}/src/whirls/${name}.scss`);
  postcss([autoprefixer])
    // Necessary to pass "undefined" to avoid warnings
    .process(result.css.toString(), { from: undefined })
    .then(result => {
      result.warnings().forEach(w => console.warn(w));
      return fsp.writeFile(
        `${process.cwd()}/${
          process.env.FOR_PACKAGE && process.env.FOR_PACKAGE === 'true'
            ? ''
            : 'dist/'
        }css/${name}.css`,
        result.css
      );
    });
};

for (const whirl of config.whirls) {
  if (whirl.active) processStyles(whirl.name);
}

fsp.copy(path.join(process.cwd(), 'src/whirls'), path.join(distDir, 'sass'));
