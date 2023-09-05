import { WasmFs } from '@wasmer/wasmfs';
export interface IDisassemble {
    disassemble(name: string, bytecode: string, callback: (ok: boolean, data: string) => void): Promise<void>;
}
export declare class Disassemble implements IDisassemble {
    private wasmfs;
    constructor(wasmfs: WasmFs);
    disassemble(name: string, bytecode: string, callback: (ok: boolean, data: string) => void): Promise<void>;
}
