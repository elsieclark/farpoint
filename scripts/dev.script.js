const label = 'dev';
console.time(label);

const _ = require('lodash');
const steps = require('vitreum/steps');
const Proj = require('./project.js');

Promise.resolve()
    .then(() => Promise.all(_.map(Proj.entryPoints, (path, name) => {
        return steps.jsxWatch(name, path, {
            libs: Proj.libs,
            shared: Proj.shared,
            transforms: []
        })
            .then((deps) => steps.lessWatch(name, { shared: Proj.shared }, deps));
    })))
    .then(() => steps.assetsWatch(Proj.assetExts, Proj.shared))
    .then(() => steps.livereload())
    .then(() => steps.serverWatch('./app.js', ['server']))
    .then(() => console.timeEnd(label))
    .catch((err) => console.error(err));