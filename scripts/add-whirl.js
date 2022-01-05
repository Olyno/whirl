import config from '../src/whirl.config.json';
import create from './create-whirl.js';
import order from './order-config.js';

/**
 * Process passed in args to grab name and required elements
 * @param {Array} args - args passed into script
 * @returns {Object} - options object to be used by scripts
 */
const getArgs = args => {
  var opts = {};
  args = args.slice(2);
  while (args.length > 0) {
    var opt = args.shift();
    if (opt.indexOf('--') !== -1 || opt.indexOf('-') !== -1) {
      opt = opt.replace(new RegExp('-', 'g'), '');
      if (args[0].indexOf('--') === -1 || args[0].indexOf('-') === -1) {
        opts[opt] = args.shift();
      } else {
        opts[opt] = true;
      }
    } else {
      opts.input = opt;
    }
  }
  return opts;
};

// Process args
const args = getArgs(process.argv);

// Calculate whether a whirl with that name already exists
const exists = config.whirls.find(w => w.name === args.name);
if (!exists) {
  if (!args.required.split) {
    throw Error(
      'whirl: required elements must be either a number or comma separated numbers'
    );
  }
  // TODO: Make a better requierd elements system
  const requiredElements = args.required.split(',').map(e => parseInt(e, 10));
  const updatedConfig = create(args.name, requiredElements, config);
  order(updatedConfig);
} else {
  throw Error('whirl: a whirl with that name already exists');
}
