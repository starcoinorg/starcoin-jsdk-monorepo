// SolanaGetAddress
export interface SolanaGetAddress {
    path: string | number[];
    showOnDevice?: boolean;
    address?: string;
}

// SolanaAddress
export interface SolanaAddress {
  serializedPath: string;
  address?: string;
}

// SolanaSignTx
export interface SolanaSignTx {
    path: string | number[];
    rawTx: string;
}

// SolanaSignedTx
export interface SolanaSignedTx {
    signature: string;
}
