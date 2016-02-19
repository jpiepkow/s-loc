module.exports = () => {
    var dependencies = {};
    var factories = {};
    var sLoc = {};
    sLoc.factory = (name, factory) => {
        if(typeof factory === 'object') {
            factories[name] = {};
            factories[name].orig = factory[Object.keys(factory)[0]];
            if(factory[Object.keys(factory)[1]]) {
                factories[name].second = factory[Object.keys(factory)[1]];
            }
            factories[name].parent = factory
        } else {
            factories[name] = {};
            factories[name].orig = factory
        }
    };
    sLoc.register = (name, instance) => {
        if(typeof instance === 'object') {
            dependencies[name] = {};
            dependencies[name].orig = instance[Object.keys(instance)[0]];
            if(instance[Object.keys(instance)[1]]) {
                dependencies[name].second = instance[Object.keys(instance)[1]];
            }
            dependencies[name].parent = instance
        } else {
            dependencies[name] = {};
            dependencies[name].orig = instance
        }
    };

    sLoc.get = (name,override, overrideName) => {
        if(overrideName){
            return dependencies[name].parent[overrideName];
        }
        else if(override === true) {
            return dependencies[name].second
        }
        else {
        if(!dependencies[name].orig) {
            var factory = factories[name];
            dependencies[name].orig = factory && factory(sLoc);
            if(dependencies[name].orig) {
                throw new Error (`Cannot locate ${name}`)
            }
        }
        return dependencies[name].orig
        }
    };
    return sLoc;

};
