import { WasmFs } from '@wasmer/wasmfs';
export interface IDependency {
    git?: string;
    rev?: string;
    local?: string;
}
export interface IMovePackage {
    name?: string;
    version?: string;
    addresses?: Map<string, string>;
    dependencies?: Map<string, IDependency>;
    devDependencies?: Map<string, IDependency>;
    build(): void;
}
export declare type MoveOptions = {
    packagePath: string;
    test: boolean;
    alias?: Map<string, string>;
    initFunction?: string;
};
export declare class MovePackage implements IMovePackage {
    name?: string;
    version?: string;
    addresses?: Map<string, string>;
    devDependencies?: Map<string, IDependency>;
    dependencies?: Map<string, IDependency>;
    private wasmfs;
    private packagePath;
    private packageAlias;
    private test;
    private initFunction?;
    constructor(wasmfs: WasmFs, opts: MoveOptions);
    parseToml(tomlContent: string): void;
    parseDeps(thisDeps: Map<string, IDependency>, tomlDeps: any): void;
    build(): Promise<void>;
    getAllDeps(): string[];
    collectDependencies(allDeps: string[], modules: Map<string, IDependency>): void;
    getAllAddresses(): Map<string, string>;
    collectAddresses(allAddresss: Map<string, string>, modules: Map<string, IDependency>): void;
    buildPackage(wasmfs: WasmFs, packagePath: string, deps: string[], addresses: Map<string, string>): Promise<void>;
}
