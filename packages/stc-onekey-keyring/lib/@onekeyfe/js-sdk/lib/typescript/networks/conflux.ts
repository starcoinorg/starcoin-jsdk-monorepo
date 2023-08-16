// sign transaction
// get address

export interface ConfluxGetAddress {
    path: string | number[];
    chainId: number;
    address?: string;
    showOnTrezor?: boolean;
}

export interface ConfluxTransaction {
    to: string;
    value: string;
    gasPrice: string;
    gasLimit: string;
    nonce: string;
    epochHeight: string;
    storageLimit: string;
    chainId: number;
    data?: string;
}

export interface ConfluxSignTransaction  {
    path: string | number[];
    transaction: ConfluxTransaction;
}

interface MessageTypeProperty {
  name: string;
  type: string;
}

export interface MessageTypes {
  CIP23Domain: MessageTypeProperty[];
  [additionalProperties: string]: MessageTypeProperty[];
}

interface TypedMessage<T extends MessageTypes> {
  types: T;
  primaryType: keyof T;
  domain: {
    name?: string;
    version?: string;
    chainId?: number;
    verifyingContract?: string;
  };
  message: Record<string, unknown>;
}

export interface ConfluxSignMessageEIP712<T extends MessageTypes> {
  path: string | number[];
  version: "V3" | "V4";
  data: TypedMessage<T>
}
