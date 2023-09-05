import { WasmFs } from '@wasmer/wasmfs';
/**
 * Git interface
 */
export interface IGit {
    /**
     * Download code to dest path
     *
     * @param repoUrl
     * @param destPath
     */
    download(repoUrl: string, destPath: string): Promise<void>;
}
/**
 * Git
 *
 */
export declare class Git implements IGit {
    wasmfs?: WasmFs;
    constructor(wasmfs: WasmFs);
    download(zipURL: string, destPath: string): Promise<void>;
}
