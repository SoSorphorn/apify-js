import _ from 'underscore';
import Actor from './actor';


const Apifier = {};
_.extend(Apifier, Actor);

// export this way so the we can import as:
// const Apifier = require('apifier');
module.exports = Apifier;