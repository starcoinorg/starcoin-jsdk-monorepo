// Ethereum types
// https://github.com/ethereumjs/ethereumjs-tx

// get address

import { TypedMessage } from "eth-sig-util";

export interface EthereumGetAddress {
    path: string | number[];
    address?: string;
    showOnTrezor?: boolean;
}

export interface EthereumAddress {
    address: string;
    path: number[];
    serializedPath: string;
}

// get public key

export interface EthereumGetPublicKey {
    path: string | number[];
    showOnTrezor?: boolean;
}

// sign transaction

export interface EthereumTransaction {
    to: string;
    value: string;
    gasPrice: string;
    gasLimit: string;
    nonce: string;
    data?: string;
    chainId?: number;
    txType?: number;
}

export interface EthereumSignTransaction {
    path: string | number[];
    transaction: EthereumTransaction;
}

export interface EthereumSignedTx {
    v: string;
    r: string;
    s: string;
}

// sign message

export interface EthereumSignMessage {
    path: string | number[];
    message: string;
    hex?: boolean;
}

interface MessageTypeProperty {
  name: string;
  type: string;
}

export interface EthereumSignMessageEIP712 {
    path: string | number[];
    version: "V3" | "V4";
    data: TypedMessage<{EIP712Domain: MessageTypeProperty[], [p: string]: MessageTypeProperty[]}>
}

// verify message

export interface EthereumVerifyMessage {
    address: string;
    message: string;
    hex?: boolean;
    signature: string;
}

// sign typed message (eip-712)

interface EthereumSignTypedDataTypeProperty {
    name: string;
    type: string;
}

interface EthereumSignTypedDataTypes {
    EIP712Domain: EthereumSignTypedDataTypeProperty[];
    [additionalProperties: string]: EthereumSignTypedDataTypeProperty[];
}

interface EthereumSignTypedDataMessage<T extends EthereumSignTypedDataTypes> {
    types: T;
    primaryType: keyof T;
    domain: {
        name?: string;
        version?: string;
        chainId?: number | bigint;
        verifyingContract?: string;
        salt?: ArrayBuffer;
    };
    message: { [fieldName: string]: any };
}

export interface EthereumSignTypedData<T extends EthereumSignTypedDataTypes> {
    path: string | number[];
    data: EthereumSignTypedDataMessage<T>;
    metamask_v4_compat: boolean;
    version?: string;
}