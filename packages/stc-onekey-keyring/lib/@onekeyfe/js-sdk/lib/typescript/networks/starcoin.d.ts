// StarcoinGetAddress
export interface StarcoinGetAddress {
    path: string | number[];
    showOnDevice?: boolean;
    address?: string;
}

// StarcoinAddress
export interface StarcoinAddress {
    address: string;
    path: number[];
    serializedPath: string;
}

// StarcoinGetPublicKey
export interface StarcoinGetPublicKey {
    path: string | number[];
    showOnDevice?: boolean;
}

// StarcoinPublicKey
export interface StarcoinPublicKey {
    path: number[];
    serializedPath: string;
    publicKey: string;
}

// StarcoinSignTx
export interface StarcoinSignTx {
    path: string | number[];
    rawTx: string;
}

// StarcoinSignedTx
export interface StarcoinSignedTx {
    public_key?: string;
    signature?: string;
}

// StarcoinSignMessage
export interface StarcoinSignMessage {
    path: string | number[];
    message: string;
}

// StarcoinMessageSignature
export interface StarcoinMessageSignature {
    publicKey?: string;
    signature?: string;
}

// StarcoinVerifyMessage
export interface StarcoinVerifyMessage {
    publicKey: string;
    signature: string;
    message: string;
}
