var dependencies = {};
var factories = {};
var sLoc = {
    factory: (name, factory) => {
        factories[name] = {};
        factories[name] = factory
    },
    register: (name, instance) => {
        dependencies[name] = {};
        dependencies[name] = instance
        console.log(dependencies);
    },
    get: (name, override, overrideName) => {
        if (!dependencies[name]) {
            var factory = factories[name];
            dependencies[name] = factory && factory(sLoc);
            if (dependencies[name]) {
                throw new Error(`Cannot locate ${name}`)
            }
        }
        return dependencies[name]
    }
}
module.exports = sLoc;
