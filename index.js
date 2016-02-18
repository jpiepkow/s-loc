module.exports = () => {
    var dependencies = {};
    var factories = {};
    var sLoc = {};
    sLoc.factory = (name, factory) => {
        factories[name] = factory;
    };
    sLoc.register = (name, instance) => {
        dependencies[name] = instance;
    };

    sLoc.get = (name) => {
        if(!dependencies[name]) {
            var factory = factories[name];
            dependencies[name] = factory && factory(sLoc);
            if(dependencies[name]) {
                throw new Error (`Cannot locate ${name}`)
            }
        }
        return dependencies[name]
    };
    return sLoc;

};
