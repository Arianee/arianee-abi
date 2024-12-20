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

export interface ArianeeLostInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "ArianeeLostStorageV0Location"
      | "DEFAULT_ADMIN_ROLE"
      | "getManagerIdentity"
      | "getRoleAdmin"
      | "grantRole"
      | "hasRole"
      | "initialize"
      | "isAddressAuthorized"
      | "isMissing"
      | "isStolen"
      | "isTrustedForwarder"
      | "renounceRole"
      | "revokeRole"
      | "setAuthorizedIdentity"
      | "setManagerIdentity"
      | "setMissingStatus"
      | "setStolenStatus"
      | "smartAsset"
      | "supportsInterface"
      | "trustedForwarder"
      | "unsetAuthorizedIdentity"
      | "unsetMissingStatus"
      | "unsetStolenStatus"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "AuthorizedIdentityAdded"
      | "AuthorizedIdentityRemoved"
      | "Initialized"
      | "Missing"
      | "NewManagerIdentity"
      | "RoleAdminChanged"
      | "RoleGranted"
      | "RoleRevoked"
      | "Stolen"
      | "UnMissing"
      | "UnStolen"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "ArianeeLostStorageV0Location",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "DEFAULT_ADMIN_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getManagerIdentity",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getRoleAdmin",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "grantRole",
    values: [BytesLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "hasRole",
    values: [BytesLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [AddressLike, AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "isAddressAuthorized",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "isMissing",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "isStolen",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "isTrustedForwarder",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceRole",
    values: [BytesLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "revokeRole",
    values: [BytesLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setAuthorizedIdentity",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setManagerIdentity",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setMissingStatus",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setStolenStatus",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "smartAsset",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "trustedForwarder",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "unsetAuthorizedIdentity",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "unsetMissingStatus",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "unsetStolenStatus",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "ArianeeLostStorageV0Location",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "DEFAULT_ADMIN_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getManagerIdentity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRoleAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "grantRole", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "hasRole", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isAddressAuthorized",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isMissing", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isStolen", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isTrustedForwarder",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceRole",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "revokeRole", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setAuthorizedIdentity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setManagerIdentity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setMissingStatus",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setStolenStatus",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "smartAsset", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "trustedForwarder",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "unsetAuthorizedIdentity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "unsetMissingStatus",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "unsetStolenStatus",
    data: BytesLike
  ): Result;
}

export namespace AuthorizedIdentityAddedEvent {
  export type InputTuple = [_newIdentityAuthorized: AddressLike];
  export type OutputTuple = [_newIdentityAuthorized: string];
  export interface OutputObject {
    _newIdentityAuthorized: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace AuthorizedIdentityRemovedEvent {
  export type InputTuple = [_newIdentityUnauthorized: AddressLike];
  export type OutputTuple = [_newIdentityUnauthorized: string];
  export interface OutputObject {
    _newIdentityUnauthorized: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace InitializedEvent {
  export type InputTuple = [version: BigNumberish];
  export type OutputTuple = [version: bigint];
  export interface OutputObject {
    version: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace MissingEvent {
  export type InputTuple = [_tokenId: BigNumberish];
  export type OutputTuple = [_tokenId: bigint];
  export interface OutputObject {
    _tokenId: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace NewManagerIdentityEvent {
  export type InputTuple = [_newManagerIdentity: AddressLike];
  export type OutputTuple = [_newManagerIdentity: string];
  export interface OutputObject {
    _newManagerIdentity: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RoleAdminChangedEvent {
  export type InputTuple = [
    role: BytesLike,
    previousAdminRole: BytesLike,
    newAdminRole: BytesLike
  ];
  export type OutputTuple = [
    role: string,
    previousAdminRole: string,
    newAdminRole: string
  ];
  export interface OutputObject {
    role: string;
    previousAdminRole: string;
    newAdminRole: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RoleGrantedEvent {
  export type InputTuple = [
    role: BytesLike,
    account: AddressLike,
    sender: AddressLike
  ];
  export type OutputTuple = [role: string, account: string, sender: string];
  export interface OutputObject {
    role: string;
    account: string;
    sender: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RoleRevokedEvent {
  export type InputTuple = [
    role: BytesLike,
    account: AddressLike,
    sender: AddressLike
  ];
  export type OutputTuple = [role: string, account: string, sender: string];
  export interface OutputObject {
    role: string;
    account: string;
    sender: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace StolenEvent {
  export type InputTuple = [_tokenId: BigNumberish];
  export type OutputTuple = [_tokenId: bigint];
  export interface OutputObject {
    _tokenId: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace UnMissingEvent {
  export type InputTuple = [_tokenId: BigNumberish];
  export type OutputTuple = [_tokenId: bigint];
  export interface OutputObject {
    _tokenId: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace UnStolenEvent {
  export type InputTuple = [_tokenId: BigNumberish];
  export type OutputTuple = [_tokenId: bigint];
  export interface OutputObject {
    _tokenId: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface ArianeeLost extends BaseContract {
  connect(runner?: ContractRunner | null): ArianeeLost;
  waitForDeployment(): Promise<this>;

  interface: ArianeeLostInterface;

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

  ArianeeLostStorageV0Location: TypedContractMethod<[], [string], "view">;

  DEFAULT_ADMIN_ROLE: TypedContractMethod<[], [string], "view">;

  getManagerIdentity: TypedContractMethod<[], [string], "view">;

  getRoleAdmin: TypedContractMethod<[role: BytesLike], [string], "view">;

  grantRole: TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [void],
    "nonpayable"
  >;

  hasRole: TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [boolean],
    "view"
  >;

  initialize: TypedContractMethod<
    [
      _initialAdmin: AddressLike,
      _smartAssetAddress: AddressLike,
      _managerIdentity: AddressLike
    ],
    [void],
    "nonpayable"
  >;

  isAddressAuthorized: TypedContractMethod<
    [_address: AddressLike],
    [boolean],
    "view"
  >;

  isMissing: TypedContractMethod<[_tokenId: BigNumberish], [boolean], "view">;

  isStolen: TypedContractMethod<[_tokenId: BigNumberish], [boolean], "view">;

  isTrustedForwarder: TypedContractMethod<
    [forwarder: AddressLike],
    [boolean],
    "view"
  >;

  renounceRole: TypedContractMethod<
    [role: BytesLike, callerConfirmation: AddressLike],
    [void],
    "nonpayable"
  >;

  revokeRole: TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [void],
    "nonpayable"
  >;

  setAuthorizedIdentity: TypedContractMethod<
    [_newIdentityAuthorized: AddressLike],
    [void],
    "nonpayable"
  >;

  setManagerIdentity: TypedContractMethod<
    [_managerIdentity: AddressLike],
    [void],
    "nonpayable"
  >;

  setMissingStatus: TypedContractMethod<
    [_tokenId: BigNumberish],
    [void],
    "nonpayable"
  >;

  setStolenStatus: TypedContractMethod<
    [_tokenId: BigNumberish],
    [void],
    "nonpayable"
  >;

  smartAsset: TypedContractMethod<[], [string], "view">;

  supportsInterface: TypedContractMethod<
    [interfaceId: BytesLike],
    [boolean],
    "view"
  >;

  trustedForwarder: TypedContractMethod<[], [string], "view">;

  unsetAuthorizedIdentity: TypedContractMethod<
    [_newIdentityUnauthorized: AddressLike],
    [void],
    "nonpayable"
  >;

  unsetMissingStatus: TypedContractMethod<
    [_tokenId: BigNumberish],
    [void],
    "nonpayable"
  >;

  unsetStolenStatus: TypedContractMethod<
    [_tokenId: BigNumberish],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "ArianeeLostStorageV0Location"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "DEFAULT_ADMIN_ROLE"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "getManagerIdentity"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "getRoleAdmin"
  ): TypedContractMethod<[role: BytesLike], [string], "view">;
  getFunction(
    nameOrSignature: "grantRole"
  ): TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "hasRole"
  ): TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [boolean],
    "view"
  >;
  getFunction(
    nameOrSignature: "initialize"
  ): TypedContractMethod<
    [
      _initialAdmin: AddressLike,
      _smartAssetAddress: AddressLike,
      _managerIdentity: AddressLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "isAddressAuthorized"
  ): TypedContractMethod<[_address: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "isMissing"
  ): TypedContractMethod<[_tokenId: BigNumberish], [boolean], "view">;
  getFunction(
    nameOrSignature: "isStolen"
  ): TypedContractMethod<[_tokenId: BigNumberish], [boolean], "view">;
  getFunction(
    nameOrSignature: "isTrustedForwarder"
  ): TypedContractMethod<[forwarder: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "renounceRole"
  ): TypedContractMethod<
    [role: BytesLike, callerConfirmation: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "revokeRole"
  ): TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setAuthorizedIdentity"
  ): TypedContractMethod<
    [_newIdentityAuthorized: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setManagerIdentity"
  ): TypedContractMethod<[_managerIdentity: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setMissingStatus"
  ): TypedContractMethod<[_tokenId: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setStolenStatus"
  ): TypedContractMethod<[_tokenId: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "smartAsset"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "supportsInterface"
  ): TypedContractMethod<[interfaceId: BytesLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "trustedForwarder"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "unsetAuthorizedIdentity"
  ): TypedContractMethod<
    [_newIdentityUnauthorized: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "unsetMissingStatus"
  ): TypedContractMethod<[_tokenId: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "unsetStolenStatus"
  ): TypedContractMethod<[_tokenId: BigNumberish], [void], "nonpayable">;

  getEvent(
    key: "AuthorizedIdentityAdded"
  ): TypedContractEvent<
    AuthorizedIdentityAddedEvent.InputTuple,
    AuthorizedIdentityAddedEvent.OutputTuple,
    AuthorizedIdentityAddedEvent.OutputObject
  >;
  getEvent(
    key: "AuthorizedIdentityRemoved"
  ): TypedContractEvent<
    AuthorizedIdentityRemovedEvent.InputTuple,
    AuthorizedIdentityRemovedEvent.OutputTuple,
    AuthorizedIdentityRemovedEvent.OutputObject
  >;
  getEvent(
    key: "Initialized"
  ): TypedContractEvent<
    InitializedEvent.InputTuple,
    InitializedEvent.OutputTuple,
    InitializedEvent.OutputObject
  >;
  getEvent(
    key: "Missing"
  ): TypedContractEvent<
    MissingEvent.InputTuple,
    MissingEvent.OutputTuple,
    MissingEvent.OutputObject
  >;
  getEvent(
    key: "NewManagerIdentity"
  ): TypedContractEvent<
    NewManagerIdentityEvent.InputTuple,
    NewManagerIdentityEvent.OutputTuple,
    NewManagerIdentityEvent.OutputObject
  >;
  getEvent(
    key: "RoleAdminChanged"
  ): TypedContractEvent<
    RoleAdminChangedEvent.InputTuple,
    RoleAdminChangedEvent.OutputTuple,
    RoleAdminChangedEvent.OutputObject
  >;
  getEvent(
    key: "RoleGranted"
  ): TypedContractEvent<
    RoleGrantedEvent.InputTuple,
    RoleGrantedEvent.OutputTuple,
    RoleGrantedEvent.OutputObject
  >;
  getEvent(
    key: "RoleRevoked"
  ): TypedContractEvent<
    RoleRevokedEvent.InputTuple,
    RoleRevokedEvent.OutputTuple,
    RoleRevokedEvent.OutputObject
  >;
  getEvent(
    key: "Stolen"
  ): TypedContractEvent<
    StolenEvent.InputTuple,
    StolenEvent.OutputTuple,
    StolenEvent.OutputObject
  >;
  getEvent(
    key: "UnMissing"
  ): TypedContractEvent<
    UnMissingEvent.InputTuple,
    UnMissingEvent.OutputTuple,
    UnMissingEvent.OutputObject
  >;
  getEvent(
    key: "UnStolen"
  ): TypedContractEvent<
    UnStolenEvent.InputTuple,
    UnStolenEvent.OutputTuple,
    UnStolenEvent.OutputObject
  >;

  filters: {
    "AuthorizedIdentityAdded(address)": TypedContractEvent<
      AuthorizedIdentityAddedEvent.InputTuple,
      AuthorizedIdentityAddedEvent.OutputTuple,
      AuthorizedIdentityAddedEvent.OutputObject
    >;
    AuthorizedIdentityAdded: TypedContractEvent<
      AuthorizedIdentityAddedEvent.InputTuple,
      AuthorizedIdentityAddedEvent.OutputTuple,
      AuthorizedIdentityAddedEvent.OutputObject
    >;

    "AuthorizedIdentityRemoved(address)": TypedContractEvent<
      AuthorizedIdentityRemovedEvent.InputTuple,
      AuthorizedIdentityRemovedEvent.OutputTuple,
      AuthorizedIdentityRemovedEvent.OutputObject
    >;
    AuthorizedIdentityRemoved: TypedContractEvent<
      AuthorizedIdentityRemovedEvent.InputTuple,
      AuthorizedIdentityRemovedEvent.OutputTuple,
      AuthorizedIdentityRemovedEvent.OutputObject
    >;

    "Initialized(uint64)": TypedContractEvent<
      InitializedEvent.InputTuple,
      InitializedEvent.OutputTuple,
      InitializedEvent.OutputObject
    >;
    Initialized: TypedContractEvent<
      InitializedEvent.InputTuple,
      InitializedEvent.OutputTuple,
      InitializedEvent.OutputObject
    >;

    "Missing(uint256)": TypedContractEvent<
      MissingEvent.InputTuple,
      MissingEvent.OutputTuple,
      MissingEvent.OutputObject
    >;
    Missing: TypedContractEvent<
      MissingEvent.InputTuple,
      MissingEvent.OutputTuple,
      MissingEvent.OutputObject
    >;

    "NewManagerIdentity(address)": TypedContractEvent<
      NewManagerIdentityEvent.InputTuple,
      NewManagerIdentityEvent.OutputTuple,
      NewManagerIdentityEvent.OutputObject
    >;
    NewManagerIdentity: TypedContractEvent<
      NewManagerIdentityEvent.InputTuple,
      NewManagerIdentityEvent.OutputTuple,
      NewManagerIdentityEvent.OutputObject
    >;

    "RoleAdminChanged(bytes32,bytes32,bytes32)": TypedContractEvent<
      RoleAdminChangedEvent.InputTuple,
      RoleAdminChangedEvent.OutputTuple,
      RoleAdminChangedEvent.OutputObject
    >;
    RoleAdminChanged: TypedContractEvent<
      RoleAdminChangedEvent.InputTuple,
      RoleAdminChangedEvent.OutputTuple,
      RoleAdminChangedEvent.OutputObject
    >;

    "RoleGranted(bytes32,address,address)": TypedContractEvent<
      RoleGrantedEvent.InputTuple,
      RoleGrantedEvent.OutputTuple,
      RoleGrantedEvent.OutputObject
    >;
    RoleGranted: TypedContractEvent<
      RoleGrantedEvent.InputTuple,
      RoleGrantedEvent.OutputTuple,
      RoleGrantedEvent.OutputObject
    >;

    "RoleRevoked(bytes32,address,address)": TypedContractEvent<
      RoleRevokedEvent.InputTuple,
      RoleRevokedEvent.OutputTuple,
      RoleRevokedEvent.OutputObject
    >;
    RoleRevoked: TypedContractEvent<
      RoleRevokedEvent.InputTuple,
      RoleRevokedEvent.OutputTuple,
      RoleRevokedEvent.OutputObject
    >;

    "Stolen(uint256)": TypedContractEvent<
      StolenEvent.InputTuple,
      StolenEvent.OutputTuple,
      StolenEvent.OutputObject
    >;
    Stolen: TypedContractEvent<
      StolenEvent.InputTuple,
      StolenEvent.OutputTuple,
      StolenEvent.OutputObject
    >;

    "UnMissing(uint256)": TypedContractEvent<
      UnMissingEvent.InputTuple,
      UnMissingEvent.OutputTuple,
      UnMissingEvent.OutputObject
    >;
    UnMissing: TypedContractEvent<
      UnMissingEvent.InputTuple,
      UnMissingEvent.OutputTuple,
      UnMissingEvent.OutputObject
    >;

    "UnStolen(uint256)": TypedContractEvent<
      UnStolenEvent.InputTuple,
      UnStolenEvent.OutputTuple,
      UnStolenEvent.OutputObject
    >;
    UnStolen: TypedContractEvent<
      UnStolenEvent.InputTuple,
      UnStolenEvent.OutputTuple,
      UnStolenEvent.OutputObject
    >;
  };
}
