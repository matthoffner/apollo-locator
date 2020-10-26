import Locator from 'locator';
import parsePackageJsonName from 'parse-packagejson-name';
import fs from 'fs';

const { scope } = parsePackageJsonName(`${process.cwd()}/package.json`);

const isPackage = (p) => p.match(/node_modules/);

const isScopedPackage = (p, scope) => {
    const match = p.match(/(node_modules)(?!.*\1)[\\\/]([^\\\/]*)/);
    return match && match[2] === scope;
};

class ScopedLocator extends Locator {
    _walkNPMTree(dir, _depth) {
        // we want to walk both the root application code
        // as well as any installed node_modules that we own
        if (isPackage(dir) && !isScopedPackage(dir, scope)) {
            return [];
        }
        return super._walkNPMTree(dir, _depth);
    }
}

const locator = new ScopedLocator();
locator.parseBundle(process.cwd());
const resolverResources = locator.getAllResources({ types: ['resolvers'] }).map(resolver => () => import(resolver.fullPath).default());
const typeDefResources = locator.getAllResources({ types: ['typeDefs'] }).map(typeDef => fs.readFileSync(typeDef.fullPath, 'utf8'));

export const typeDefs = typeDefResources;
export const resolvers = resolverResources;
