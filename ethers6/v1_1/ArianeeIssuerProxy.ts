/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "./common";

export type CreditNoteProofStruct = {
  _pA: [BigNumberish, BigNumberish];
  _pB: [[BigNumberish, BigNumberish], [BigNumberish, BigNumberish]];
  _pC: [BigNumberish, BigNumberish];
  _pubSignals: [BigNumberish, BigNumberish, BigNumberish];
};

export type CreditNoteProofStructOutput = [
  _pA: [bigint, bigint],
  _pB: [[bigint, bigint], [bigint, bigint]],
  _pC: [bigint, bigint],
  _pubSignals: [bigint, bigint, bigint]
] & {
  _pA: [bigint, bigint];
  _pB: [[bigint, bigint], [bigint, bigint]];
  _pC: [bigint, bigint];
  _pubSignals: [bigint, bigint, bigint];
};

export declare namespace ArianeeIssuerProxy {
  export type OwnershipProofStruct = {
    _pA: [BigNumberish, BigNumberish];
    _pB: [[BigNumberish, BigNumberish], [BigNumberish, BigNumberish]];
    _pC: [BigNumberish, BigNumberish];
    _pubSignals: [BigNumberish, BigNumberish, BigNumberish];
  };

  export type OwnershipProofStructOutput = [
    _pA: [bigint, bigint],
    _pB: [[bigint, bigint], [bigint, bigint]],
    _pC: [bigint, bigint],
    _pubSignals: [bigint, bigint, bigint]
  ] & {
    _pA: [bigint, bigint];
    _pB: [[bigint, bigint], [bigint, bigint]];
    _pC: [bigint, bigint];
    _pubSignals: [bigint, bigint, bigint];
  };
}

export interface ArianeeIssuerProxyInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "CREDIT_NOTE_PROOF_SIZE"
      | "OWNERSHIP_PROOF_SIZE"
      | "SELECTOR_SIZE"
      | "ZK_CREDIT_TYPE_CERTIFICATE"
      | "ZK_CREDIT_TYPE_EVENT"
      | "ZK_CREDIT_TYPE_MESSAGE"
      | "ZK_CREDIT_TYPE_UPDATE"
      | "acceptOwnership"
      | "arianeeEvent"
      | "arianeeLost"
      | "commitmentHashes"
      | "creditFreeSenders"
      | "creditNotePools"
      | "getTrustedForwarder"
      | "isTrustedForwarder"
      | "nonceBitmap"
      | "owner"
      | "pendingOwner"
      | "poseidon"
      | "renounceOwnership"
      | "smartAsset"
      | "store"
      | "transferOwnership"
      | "verifier"
      | "addCreditNotePool"
      | "addCreditFreeSender"
      | "removeCreditFreeSender"
      | "reserveToken"
      | "hydrateToken"
      | "invalidateUnorderedNonces"
      | "addTokenAccess"
      | "recoverTokenToIssuer"
      | "updateRecoveryRequest"
      | "destroy"
      | "updateTokenURI"
      | "safeTransferFrom"
      | "transferFrom"
      | "approve"
      | "updateSmartAsset"
      | "createEvent"
      | "acceptEvent"
      | "destroyEvent"
      | "updateDestroyEventRequest"
      | "createMessage"
      | "setStolenStatus"
      | "unsetStolenStatus"
      | "setMissingStatus"
      | "unsetMissingStatus"
      | "updateCommitment"
      | "updateCommitmentBatch"
      | "isDefaultCreditNoteProof"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "CreditFreeSenderLog"
      | "OwnershipTransferStarted"
      | "OwnershipTransferred"
      | "UnorderedNonceInvalidation"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "CREDIT_NOTE_PROOF_SIZE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "OWNERSHIP_PROOF_SIZE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "SELECTOR_SIZE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "ZK_CREDIT_TYPE_CERTIFICATE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "ZK_CREDIT_TYPE_EVENT",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "ZK_CREDIT_TYPE_MESSAGE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "ZK_CREDIT_TYPE_UPDATE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "acceptOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "arianeeEvent",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "arianeeLost",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "commitmentHashes",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "creditFreeSenders",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "creditNotePools",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getTrustedForwarder",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "isTrustedForwarder",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "nonceBitmap",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "pendingOwner",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "poseidon", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "smartAsset",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "store", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "verifier", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "addCreditNotePool",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "addCreditFreeSender",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "removeCreditFreeSender",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "reserveToken",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "hydrateToken",
    values: [
      ArianeeIssuerProxy.OwnershipProofStruct,
      CreditNoteProofStruct,
      AddressLike,
      BigNumberish,
      BigNumberish,
      BytesLike,
      string,
      AddressLike,
      BigNumberish,
      boolean,
      AddressLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "invalidateUnorderedNonces",
    values: [
      ArianeeIssuerProxy.OwnershipProofStruct,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "addTokenAccess",
    values: [
      ArianeeIssuerProxy.OwnershipProofStruct,
      BigNumberish,
      AddressLike,
      boolean,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "recoverTokenToIssuer",
    values: [ArianeeIssuerProxy.OwnershipProofStruct, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "updateRecoveryRequest",
    values: [ArianeeIssuerProxy.OwnershipProofStruct, BigNumberish, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "destroy",
    values: [ArianeeIssuerProxy.OwnershipProofStruct, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "updateTokenURI",
    values: [ArianeeIssuerProxy.OwnershipProofStruct, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "safeTransferFrom",
    values: [
      ArianeeIssuerProxy.OwnershipProofStruct,
      AddressLike,
      AddressLike,
      BigNumberish,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "transferFrom",
    values: [
      ArianeeIssuerProxy.OwnershipProofStruct,
      AddressLike,
      AddressLike,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "approve",
    values: [ArianeeIssuerProxy.OwnershipProofStruct, AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "updateSmartAsset",
    values: [
      ArianeeIssuerProxy.OwnershipProofStruct,
      CreditNoteProofStruct,
      AddressLike,
      BigNumberish,
      BytesLike,
      AddressLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "createEvent",
    values: [
      ArianeeIssuerProxy.OwnershipProofStruct,
      CreditNoteProofStruct,
      AddressLike,
      BigNumberish,
      BigNumberish,
      BytesLike,
      string,
      AddressLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "acceptEvent",
    values: [ArianeeIssuerProxy.OwnershipProofStruct, BigNumberish, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "destroyEvent",
    values: [ArianeeIssuerProxy.OwnershipProofStruct, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "updateDestroyEventRequest",
    values: [ArianeeIssuerProxy.OwnershipProofStruct, BigNumberish, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "createMessage",
    values: [
      ArianeeIssuerProxy.OwnershipProofStruct,
      CreditNoteProofStruct,
      AddressLike,
      BigNumberish,
      BigNumberish,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "setStolenStatus",
    values: [ArianeeIssuerProxy.OwnershipProofStruct, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "unsetStolenStatus",
    values: [ArianeeIssuerProxy.OwnershipProofStruct, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setMissingStatus",
    values: [ArianeeIssuerProxy.OwnershipProofStruct, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "unsetMissingStatus",
    values: [ArianeeIssuerProxy.OwnershipProofStruct, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "updateCommitment",
    values: [
      ArianeeIssuerProxy.OwnershipProofStruct,
      BigNumberish,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "updateCommitmentBatch",
    values: [
      ArianeeIssuerProxy.OwnershipProofStruct[],
      BigNumberish[],
      BigNumberish[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "isDefaultCreditNoteProof",
    values: [CreditNoteProofStruct]
  ): string;

  decodeFunctionResult(
    functionFragment: "CREDIT_NOTE_PROOF_SIZE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "OWNERSHIP_PROOF_SIZE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "SELECTOR_SIZE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "ZK_CREDIT_TYPE_CERTIFICATE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "ZK_CREDIT_TYPE_EVENT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "ZK_CREDIT_TYPE_MESSAGE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "ZK_CREDIT_TYPE_UPDATE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "acceptOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "arianeeEvent",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "arianeeLost",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "commitmentHashes",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "creditFreeSenders",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "creditNotePools",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTrustedForwarder",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isTrustedForwarder",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "nonceBitmap",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "pendingOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "poseidon", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "smartAsset", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "store", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "verifier", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "addCreditNotePool",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addCreditFreeSender",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeCreditFreeSender",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "reserveToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "hydrateToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "invalidateUnorderedNonces",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addTokenAccess",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "recoverTokenToIssuer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateRecoveryRequest",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "destroy", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "updateTokenURI",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "safeTransferFrom",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferFrom",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "updateSmartAsset",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createEvent",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "acceptEvent",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "destroyEvent",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateDestroyEventRequest",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createMessage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setStolenStatus",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "unsetStolenStatus",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setMissingStatus",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "unsetMissingStatus",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateCommitment",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateCommitmentBatch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isDefaultCreditNoteProof",
    data: BytesLike
  ): Result;
}

export namespace CreditFreeSenderLogEvent {
  export type InputTuple = [sender: AddressLike, creditType: BigNumberish];
  export type OutputTuple = [sender: string, creditType: bigint];
  export interface OutputObject {
    sender: string;
    creditType: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace OwnershipTransferStartedEvent {
  export type InputTuple = [previousOwner: AddressLike, newOwner: AddressLike];
  export type OutputTuple = [previousOwner: string, newOwner: string];
  export interface OutputObject {
    previousOwner: string;
    newOwner: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace OwnershipTransferredEvent {
  export type InputTuple = [previousOwner: AddressLike, newOwner: AddressLike];
  export type OutputTuple = [previousOwner: string, newOwner: string];
  export interface OutputObject {
    previousOwner: string;
    newOwner: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace UnorderedNonceInvalidationEvent {
  export type InputTuple = [
    tokenId: BigNumberish,
    word: BigNumberish,
    mask: BigNumberish
  ];
  export type OutputTuple = [tokenId: bigint, word: bigint, mask: bigint];
  export interface OutputObject {
    tokenId: bigint;
    word: bigint;
    mask: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface ArianeeIssuerProxy extends BaseContract {
  connect(runner?: ContractRunner | null): ArianeeIssuerProxy;
  waitForDeployment(): Promise<this>;

  interface: ArianeeIssuerProxyInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  CREDIT_NOTE_PROOF_SIZE: TypedContractMethod<[], [bigint], "view">;

  OWNERSHIP_PROOF_SIZE: TypedContractMethod<[], [bigint], "view">;

  SELECTOR_SIZE: TypedContractMethod<[], [bigint], "view">;

  ZK_CREDIT_TYPE_CERTIFICATE: TypedContractMethod<[], [bigint], "view">;

  ZK_CREDIT_TYPE_EVENT: TypedContractMethod<[], [bigint], "view">;

  ZK_CREDIT_TYPE_MESSAGE: TypedContractMethod<[], [bigint], "view">;

  ZK_CREDIT_TYPE_UPDATE: TypedContractMethod<[], [bigint], "view">;

  acceptOwnership: TypedContractMethod<[], [void], "nonpayable">;

  arianeeEvent: TypedContractMethod<[], [string], "view">;

  arianeeLost: TypedContractMethod<[], [string], "view">;

  commitmentHashes: TypedContractMethod<
    [tokenId: BigNumberish],
    [bigint],
    "view"
  >;

  creditFreeSenders: TypedContractMethod<
    [arg0: AddressLike],
    [boolean],
    "view"
  >;

  creditNotePools: TypedContractMethod<[arg0: AddressLike], [boolean], "view">;

  getTrustedForwarder: TypedContractMethod<[], [string], "view">;

  isTrustedForwarder: TypedContractMethod<
    [forwarder: AddressLike],
    [boolean],
    "view"
  >;

  nonceBitmap: TypedContractMethod<
    [arg0: BigNumberish, arg1: BigNumberish],
    [bigint],
    "view"
  >;

  owner: TypedContractMethod<[], [string], "view">;

  pendingOwner: TypedContractMethod<[], [string], "view">;

  poseidon: TypedContractMethod<[], [string], "view">;

  renounceOwnership: TypedContractMethod<[], [void], "nonpayable">;

  smartAsset: TypedContractMethod<[], [string], "view">;

  store: TypedContractMethod<[], [string], "view">;

  transferOwnership: TypedContractMethod<
    [newOwner: AddressLike],
    [void],
    "nonpayable"
  >;

  verifier: TypedContractMethod<[], [string], "view">;

  addCreditNotePool: TypedContractMethod<
    [_creditNotePool: AddressLike],
    [void],
    "nonpayable"
  >;

  addCreditFreeSender: TypedContractMethod<
    [_sender: AddressLike],
    [void],
    "nonpayable"
  >;

  removeCreditFreeSender: TypedContractMethod<
    [_sender: AddressLike],
    [void],
    "nonpayable"
  >;

  reserveToken: TypedContractMethod<
    [_commitmentHash: BigNumberish, _tokenId: BigNumberish],
    [void],
    "nonpayable"
  >;

  hydrateToken: TypedContractMethod<
    [
      _ownershipProof: ArianeeIssuerProxy.OwnershipProofStruct,
      _creditNoteProof: CreditNoteProofStruct,
      _creditNotePool: AddressLike,
      _commitmentHash: BigNumberish,
      _tokenId: BigNumberish,
      _imprint: BytesLike,
      _uri: string,
      _encryptedInitialKey: AddressLike,
      _tokenRecoveryTimestamp: BigNumberish,
      _initialKeyIsRequestKey: boolean,
      _interfaceProvider: AddressLike
    ],
    [void],
    "nonpayable"
  >;

  invalidateUnorderedNonces: TypedContractMethod<
    [
      _ownershipProof: ArianeeIssuerProxy.OwnershipProofStruct,
      _tokenId: BigNumberish,
      _wordPos: BigNumberish,
      _mask: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  addTokenAccess: TypedContractMethod<
    [
      _ownershipProof: ArianeeIssuerProxy.OwnershipProofStruct,
      _tokenId: BigNumberish,
      _key: AddressLike,
      _enable: boolean,
      _tokenType: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  recoverTokenToIssuer: TypedContractMethod<
    [
      _ownershipProof: ArianeeIssuerProxy.OwnershipProofStruct,
      _tokenId: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  updateRecoveryRequest: TypedContractMethod<
    [
      _ownershipProof: ArianeeIssuerProxy.OwnershipProofStruct,
      _tokenId: BigNumberish,
      _active: boolean
    ],
    [void],
    "nonpayable"
  >;

  destroy: TypedContractMethod<
    [
      _ownershipProof: ArianeeIssuerProxy.OwnershipProofStruct,
      _tokenId: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  updateTokenURI: TypedContractMethod<
    [
      _ownershipProof: ArianeeIssuerProxy.OwnershipProofStruct,
      _tokenId: BigNumberish,
      _uri: string
    ],
    [void],
    "nonpayable"
  >;

  safeTransferFrom: TypedContractMethod<
    [
      _ownershipProof: ArianeeIssuerProxy.OwnershipProofStruct,
      _from: AddressLike,
      _to: AddressLike,
      _tokenId: BigNumberish,
      _data: BytesLike
    ],
    [void],
    "nonpayable"
  >;

  transferFrom: TypedContractMethod<
    [
      _ownershipProof: ArianeeIssuerProxy.OwnershipProofStruct,
      _from: AddressLike,
      _to: AddressLike,
      _tokenId: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  approve: TypedContractMethod<
    [
      _ownershipProof: ArianeeIssuerProxy.OwnershipProofStruct,
      _approved: AddressLike,
      _tokenId: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  updateSmartAsset: TypedContractMethod<
    [
      _ownershipProof: ArianeeIssuerProxy.OwnershipProofStruct,
      _creditNoteProof: CreditNoteProofStruct,
      _creditNotePool: AddressLike,
      _tokenId: BigNumberish,
      _imprint: BytesLike,
      _interfaceProvider: AddressLike
    ],
    [void],
    "nonpayable"
  >;

  createEvent: TypedContractMethod<
    [
      _ownershipProof: ArianeeIssuerProxy.OwnershipProofStruct,
      _creditNoteProof: CreditNoteProofStruct,
      _creditNotePool: AddressLike,
      _tokenId: BigNumberish,
      _eventId: BigNumberish,
      _imprint: BytesLike,
      _uri: string,
      _interfaceProvider: AddressLike
    ],
    [void],
    "nonpayable"
  >;

  acceptEvent: TypedContractMethod<
    [
      _ownershipProof: ArianeeIssuerProxy.OwnershipProofStruct,
      _eventId: BigNumberish,
      _interfaceProvider: AddressLike
    ],
    [void],
    "nonpayable"
  >;

  destroyEvent: TypedContractMethod<
    [
      _ownershipProof: ArianeeIssuerProxy.OwnershipProofStruct,
      _eventId: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  updateDestroyEventRequest: TypedContractMethod<
    [
      _ownershipProof: ArianeeIssuerProxy.OwnershipProofStruct,
      _eventId: BigNumberish,
      _active: boolean
    ],
    [void],
    "nonpayable"
  >;

  createMessage: TypedContractMethod<
    [
      _ownershipProof: ArianeeIssuerProxy.OwnershipProofStruct,
      _creditNoteProof: CreditNoteProofStruct,
      _creditNotePool: AddressLike,
      _messageId: BigNumberish,
      _tokenId: BigNumberish,
      _imprint: BytesLike
    ],
    [void],
    "nonpayable"
  >;

  setStolenStatus: TypedContractMethod<
    [
      _ownershipProof: ArianeeIssuerProxy.OwnershipProofStruct,
      _tokenId: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  unsetStolenStatus: TypedContractMethod<
    [
      _ownershipProof: ArianeeIssuerProxy.OwnershipProofStruct,
      _tokenId: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  setMissingStatus: TypedContractMethod<
    [
      _ownershipProof: ArianeeIssuerProxy.OwnershipProofStruct,
      _tokenId: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  unsetMissingStatus: TypedContractMethod<
    [
      _ownershipProof: ArianeeIssuerProxy.OwnershipProofStruct,
      _tokenId: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  updateCommitment: TypedContractMethod<
    [
      _ownershipProof: ArianeeIssuerProxy.OwnershipProofStruct,
      _tokenId: BigNumberish,
      _newCommitmentHash: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  updateCommitmentBatch: TypedContractMethod<
    [
      _ownershipProofs: ArianeeIssuerProxy.OwnershipProofStruct[],
      _tokenIds: BigNumberish[],
      _newCommitmentHashes: BigNumberish[]
    ],
    [void],
    "nonpayable"
  >;

  isDefaultCreditNoteProof: TypedContractMethod<
    [_proof: CreditNoteProofStruct],
    [boolean],
    "view"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "CREDIT_NOTE_PROOF_SIZE"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "OWNERSHIP_PROOF_SIZE"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "SELECTOR_SIZE"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "ZK_CREDIT_TYPE_CERTIFICATE"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "ZK_CREDIT_TYPE_EVENT"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "ZK_CREDIT_TYPE_MESSAGE"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "ZK_CREDIT_TYPE_UPDATE"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "acceptOwnership"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "arianeeEvent"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "arianeeLost"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "commitmentHashes"
  ): TypedContractMethod<[tokenId: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "creditFreeSenders"
  ): TypedContractMethod<[arg0: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "creditNotePools"
  ): TypedContractMethod<[arg0: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "getTrustedForwarder"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "isTrustedForwarder"
  ): TypedContractMethod<[forwarder: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "nonceBitmap"
  ): TypedContractMethod<
    [arg0: BigNumberish, arg1: BigNumberish],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "pendingOwner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "poseidon"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "renounceOwnership"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "smartAsset"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "store"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "transferOwnership"
  ): TypedContractMethod<[newOwner: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "verifier"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "addCreditNotePool"
  ): TypedContractMethod<[_creditNotePool: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "addCreditFreeSender"
  ): TypedContractMethod<[_sender: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "removeCreditFreeSender"
  ): TypedContractMethod<[_sender: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "reserveToken"
  ): TypedContractMethod<
    [_commitmentHash: BigNumberish, _tokenId: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "hydrateToken"
  ): TypedContractMethod<
    [
      _ownershipProof: ArianeeIssuerProxy.OwnershipProofStruct,
      _creditNoteProof: CreditNoteProofStruct,
      _creditNotePool: AddressLike,
      _commitmentHash: BigNumberish,
      _tokenId: BigNumberish,
      _imprint: BytesLike,
      _uri: string,
      _encryptedInitialKey: AddressLike,
      _tokenRecoveryTimestamp: BigNumberish,
      _initialKeyIsRequestKey: boolean,
      _interfaceProvider: AddressLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "invalidateUnorderedNonces"
  ): TypedContractMethod<
    [
      _ownershipProof: ArianeeIssuerProxy.OwnershipProofStruct,
      _tokenId: BigNumberish,
      _wordPos: BigNumberish,
      _mask: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "addTokenAccess"
  ): TypedContractMethod<
    [
      _ownershipProof: ArianeeIssuerProxy.OwnershipProofStruct,
      _tokenId: BigNumberish,
      _key: AddressLike,
      _enable: boolean,
      _tokenType: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "recoverTokenToIssuer"
  ): TypedContractMethod<
    [
      _ownershipProof: ArianeeIssuerProxy.OwnershipProofStruct,
      _tokenId: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "updateRecoveryRequest"
  ): TypedContractMethod<
    [
      _ownershipProof: ArianeeIssuerProxy.OwnershipProofStruct,
      _tokenId: BigNumberish,
      _active: boolean
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "destroy"
  ): TypedContractMethod<
    [
      _ownershipProof: ArianeeIssuerProxy.OwnershipProofStruct,
      _tokenId: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "updateTokenURI"
  ): TypedContractMethod<
    [
      _ownershipProof: ArianeeIssuerProxy.OwnershipProofStruct,
      _tokenId: BigNumberish,
      _uri: string
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "safeTransferFrom"
  ): TypedContractMethod<
    [
      _ownershipProof: ArianeeIssuerProxy.OwnershipProofStruct,
      _from: AddressLike,
      _to: AddressLike,
      _tokenId: BigNumberish,
      _data: BytesLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "transferFrom"
  ): TypedContractMethod<
    [
      _ownershipProof: ArianeeIssuerProxy.OwnershipProofStruct,
      _from: AddressLike,
      _to: AddressLike,
      _tokenId: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "approve"
  ): TypedContractMethod<
    [
      _ownershipProof: ArianeeIssuerProxy.OwnershipProofStruct,
      _approved: AddressLike,
      _tokenId: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "updateSmartAsset"
  ): TypedContractMethod<
    [
      _ownershipProof: ArianeeIssuerProxy.OwnershipProofStruct,
      _creditNoteProof: CreditNoteProofStruct,
      _creditNotePool: AddressLike,
      _tokenId: BigNumberish,
      _imprint: BytesLike,
      _interfaceProvider: AddressLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "createEvent"
  ): TypedContractMethod<
    [
      _ownershipProof: ArianeeIssuerProxy.OwnershipProofStruct,
      _creditNoteProof: CreditNoteProofStruct,
      _creditNotePool: AddressLike,
      _tokenId: BigNumberish,
      _eventId: BigNumberish,
      _imprint: BytesLike,
      _uri: string,
      _interfaceProvider: AddressLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "acceptEvent"
  ): TypedContractMethod<
    [
      _ownershipProof: ArianeeIssuerProxy.OwnershipProofStruct,
      _eventId: BigNumberish,
      _interfaceProvider: AddressLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "destroyEvent"
  ): TypedContractMethod<
    [
      _ownershipProof: ArianeeIssuerProxy.OwnershipProofStruct,
      _eventId: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "updateDestroyEventRequest"
  ): TypedContractMethod<
    [
      _ownershipProof: ArianeeIssuerProxy.OwnershipProofStruct,
      _eventId: BigNumberish,
      _active: boolean
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "createMessage"
  ): TypedContractMethod<
    [
      _ownershipProof: ArianeeIssuerProxy.OwnershipProofStruct,
      _creditNoteProof: CreditNoteProofStruct,
      _creditNotePool: AddressLike,
      _messageId: BigNumberish,
      _tokenId: BigNumberish,
      _imprint: BytesLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setStolenStatus"
  ): TypedContractMethod<
    [
      _ownershipProof: ArianeeIssuerProxy.OwnershipProofStruct,
      _tokenId: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "unsetStolenStatus"
  ): TypedContractMethod<
    [
      _ownershipProof: ArianeeIssuerProxy.OwnershipProofStruct,
      _tokenId: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setMissingStatus"
  ): TypedContractMethod<
    [
      _ownershipProof: ArianeeIssuerProxy.OwnershipProofStruct,
      _tokenId: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "unsetMissingStatus"
  ): TypedContractMethod<
    [
      _ownershipProof: ArianeeIssuerProxy.OwnershipProofStruct,
      _tokenId: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "updateCommitment"
  ): TypedContractMethod<
    [
      _ownershipProof: ArianeeIssuerProxy.OwnershipProofStruct,
      _tokenId: BigNumberish,
      _newCommitmentHash: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "updateCommitmentBatch"
  ): TypedContractMethod<
    [
      _ownershipProofs: ArianeeIssuerProxy.OwnershipProofStruct[],
      _tokenIds: BigNumberish[],
      _newCommitmentHashes: BigNumberish[]
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "isDefaultCreditNoteProof"
  ): TypedContractMethod<[_proof: CreditNoteProofStruct], [boolean], "view">;

  getEvent(
    key: "CreditFreeSenderLog"
  ): TypedContractEvent<
    CreditFreeSenderLogEvent.InputTuple,
    CreditFreeSenderLogEvent.OutputTuple,
    CreditFreeSenderLogEvent.OutputObject
  >;
  getEvent(
    key: "OwnershipTransferStarted"
  ): TypedContractEvent<
    OwnershipTransferStartedEvent.InputTuple,
    OwnershipTransferStartedEvent.OutputTuple,
    OwnershipTransferStartedEvent.OutputObject
  >;
  getEvent(
    key: "OwnershipTransferred"
  ): TypedContractEvent<
    OwnershipTransferredEvent.InputTuple,
    OwnershipTransferredEvent.OutputTuple,
    OwnershipTransferredEvent.OutputObject
  >;
  getEvent(
    key: "UnorderedNonceInvalidation"
  ): TypedContractEvent<
    UnorderedNonceInvalidationEvent.InputTuple,
    UnorderedNonceInvalidationEvent.OutputTuple,
    UnorderedNonceInvalidationEvent.OutputObject
  >;

  filters: {
    "CreditFreeSenderLog(address,uint256)": TypedContractEvent<
      CreditFreeSenderLogEvent.InputTuple,
      CreditFreeSenderLogEvent.OutputTuple,
      CreditFreeSenderLogEvent.OutputObject
    >;
    CreditFreeSenderLog: TypedContractEvent<
      CreditFreeSenderLogEvent.InputTuple,
      CreditFreeSenderLogEvent.OutputTuple,
      CreditFreeSenderLogEvent.OutputObject
    >;

    "OwnershipTransferStarted(address,address)": TypedContractEvent<
      OwnershipTransferStartedEvent.InputTuple,
      OwnershipTransferStartedEvent.OutputTuple,
      OwnershipTransferStartedEvent.OutputObject
    >;
    OwnershipTransferStarted: TypedContractEvent<
      OwnershipTransferStartedEvent.InputTuple,
      OwnershipTransferStartedEvent.OutputTuple,
      OwnershipTransferStartedEvent.OutputObject
    >;

    "OwnershipTransferred(address,address)": TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;
    OwnershipTransferred: TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;

    "UnorderedNonceInvalidation(uint256,uint256,uint256)": TypedContractEvent<
      UnorderedNonceInvalidationEvent.InputTuple,
      UnorderedNonceInvalidationEvent.OutputTuple,
      UnorderedNonceInvalidationEvent.OutputObject
    >;
    UnorderedNonceInvalidation: TypedContractEvent<
      UnorderedNonceInvalidationEvent.InputTuple,
      UnorderedNonceInvalidationEvent.OutputTuple,
      UnorderedNonceInvalidationEvent.OutputObject
    >;
  };
}
