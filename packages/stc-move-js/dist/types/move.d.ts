import { WasmFs } from '@wasmer/wasmfs';
export interface IMove {
    run(args?: string[]): Promise<any>;
}
export interface IMoveOption {
    pwd?: string;
    preopens?: [string];
}
export declare class Move implements IMove {
    private wasmFs;
    private opts?;
    constructor(wasmFs: WasmFs, opts?: IMoveOption);
    run(args?: string[]): Promise<any>;
    getStdErr(): Promise<unknown>;
}
