const config = require('../src/whirl.config.json')
const path = require('path')
const fs = require('fs')
const fsp = require('fs-extra')
const sass = require('sass')
const postcss = require('postcss')
const autoprefixer = require('autoprefixer')

const distDir = path.join(process.cwd(), 'dist')
const defaultIndex = path.join(distDir, 'index.js')

fsp.ensureDirSync(distDir)
fsp.ensureDirSync(path.join(distDir, 'css'))

fsp.writeFile(
  defaultIndex,
  "throw new Error('Do not import whirl directly. Import only css/sass you need!')"
)

const processStyles = async (name) => {
  sass.render(
    {
      file: `${process.cwd()}/src/whirls/${name}.scss`,
    },
    (err, result) => {
      if (err) throw Error(err)
      postcss([autoprefixer])
        // Necessary to pass "undefined" to avoid warnings
        .process(result.css.toString(), { from: undefined })
        .then((result) => {
          result.warnings().forEach((w) => console.warn(w))
          return fsp.writeFile(
            `${process.cwd()}/${
              process.env.FOR_PACKAGE && process.env.FOR_PACKAGE === 'true'
                ? ''
                : 'dist/'
            }css/${name}.css`,
            result.css
          )
        })
    }
  )
}

for (const whirl of config.whirls) {
  if (whirl.active) processStyles(whirl.name)
}

fsp.copy(path.join(process.cwd(), 'src/whirls'), path.join(distDir, 'sass'))
