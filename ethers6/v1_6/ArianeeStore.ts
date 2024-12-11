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

export interface ArianeeStoreInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "ArianeeStoreStorageV0Location"
      | "DEFAULT_ADMIN_ROLE"
      | "acceptEvent"
      | "buyCredit"
      | "createEvent"
      | "createMessage"
      | "creditPriceUSD"
      | "dispatchRewardsAtFirstTransfer"
      | "getCreditPrice"
      | "getRoleAdmin"
      | "grantRole"
      | "hasRole"
      | "hydrateToken"
      | "initialize"
      | "isTrustedForwarder"
      | "paused"
      | "percentOfDispatch"
      | "readMessage"
      | "readUpdateSmartAsset"
      | "refuseEvent"
      | "renounceRole"
      | "requestToken(uint256,bytes32,bool,address,bytes,address)"
      | "requestToken(uint256,bytes32,bool,address,bytes)"
      | "reserveToken"
      | "revokeRole"
      | "setAriaUSDExchange"
      | "setArianeeProjectAddress"
      | "setAuthorizedExchangeAddress"
      | "setCreditPrice"
      | "setDispatchPercent"
      | "setProtocolInfraAddress"
      | "supportsInterface"
      | "trustedForwarder"
      | "updateSmartAsset"
      | "withdrawAll"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "CreditBought"
      | "CreditSpended"
      | "Initialized"
      | "NewAriaUSDExchange"
      | "NewCreditPrice"
      | "NewDispatchPercent"
      | "Paused"
      | "RoleAdminChanged"
      | "RoleGranted"
      | "RoleRevoked"
      | "SetAddress"
      | "Unpaused"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "ArianeeStoreStorageV0Location",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "DEFAULT_ADMIN_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "acceptEvent",
    values: [BigNumberish, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "buyCredit",
    values: [BigNumberish, BigNumberish, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "createEvent",
    values: [BigNumberish, BigNumberish, BytesLike, string, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "createMessage",
    values: [BigNumberish, BigNumberish, BytesLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "creditPriceUSD",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "dispatchRewardsAtFirstTransfer",
    values: [BigNumberish, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getCreditPrice",
    values: [BigNumberish]
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
    functionFragment: "hydrateToken",
    values: [
      BigNumberish,
      BytesLike,
      string,
      AddressLike,
      BigNumberish,
      boolean,
      AddressLike,
      boolean
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [
      AddressLike,
      AddressLike,
      AddressLike,
      AddressLike,
      AddressLike,
      AddressLike,
      AddressLike,
      AddressLike,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "isTrustedForwarder",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "paused", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "percentOfDispatch",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "readMessage",
    values: [BigNumberish, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "readUpdateSmartAsset",
    values: [BigNumberish, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "refuseEvent",
    values: [BigNumberish, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceRole",
    values: [BytesLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "requestToken(uint256,bytes32,bool,address,bytes,address)",
    values: [
      BigNumberish,
      BytesLike,
      boolean,
      AddressLike,
      BytesLike,
      AddressLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "requestToken(uint256,bytes32,bool,address,bytes)",
    values: [BigNumberish, BytesLike, boolean, AddressLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "reserveToken",
    values: [BigNumberish, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "revokeRole",
    values: [BytesLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setAriaUSDExchange",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setArianeeProjectAddress",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setAuthorizedExchangeAddress",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setCreditPrice",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setDispatchPercent",
    values: [
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "setProtocolInfraAddress",
    values: [AddressLike]
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
    functionFragment: "updateSmartAsset",
    values: [BigNumberish, BytesLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawAll",
    values: [AddressLike, AddressLike[]]
  ): string;

  decodeFunctionResult(
    functionFragment: "ArianeeStoreStorageV0Location",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "DEFAULT_ADMIN_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "acceptEvent",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "buyCredit", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "createEvent",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createMessage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "creditPriceUSD",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "dispatchRewardsAtFirstTransfer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCreditPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRoleAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "grantRole", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "hasRole", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "hydrateToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isTrustedForwarder",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "percentOfDispatch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "readMessage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "readUpdateSmartAsset",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "refuseEvent",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceRole",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "requestToken(uint256,bytes32,bool,address,bytes,address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "requestToken(uint256,bytes32,bool,address,bytes)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "reserveToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "revokeRole", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setAriaUSDExchange",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setArianeeProjectAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setAuthorizedExchangeAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setCreditPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setDispatchPercent",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setProtocolInfraAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "trustedForwarder",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateSmartAsset",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawAll",
    data: BytesLike
  ): Result;
}

export namespace CreditBoughtEvent {
  export type InputTuple = [
    buyer: AddressLike,
    _receiver: AddressLike,
    _creditType: BigNumberish,
    quantity: BigNumberish
  ];
  export type OutputTuple = [
    buyer: string,
    _receiver: string,
    _creditType: bigint,
    quantity: bigint
  ];
  export interface OutputObject {
    buyer: string;
    _receiver: string;
    _creditType: bigint;
    quantity: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace CreditSpendedEvent {
  export type InputTuple = [_type: BigNumberish, _quantity: BigNumberish];
  export type OutputTuple = [_type: bigint, _quantity: bigint];
  export interface OutputObject {
    _type: bigint;
    _quantity: bigint;
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

export namespace NewAriaUSDExchangeEvent {
  export type InputTuple = [_ariaUSDExchange: BigNumberish];
  export type OutputTuple = [_ariaUSDExchange: bigint];
  export interface OutputObject {
    _ariaUSDExchange: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace NewCreditPriceEvent {
  export type InputTuple = [_creditType: BigNumberish, _price: BigNumberish];
  export type OutputTuple = [_creditType: bigint, _price: bigint];
  export interface OutputObject {
    _creditType: bigint;
    _price: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace NewDispatchPercentEvent {
  export type InputTuple = [
    _percentInfra: BigNumberish,
    _percentBrandsProvider: BigNumberish,
    _percentOwnerProvider: BigNumberish,
    _arianeeProject: BigNumberish,
    _assetHolder: BigNumberish
  ];
  export type OutputTuple = [
    _percentInfra: bigint,
    _percentBrandsProvider: bigint,
    _percentOwnerProvider: bigint,
    _arianeeProject: bigint,
    _assetHolder: bigint
  ];
  export interface OutputObject {
    _percentInfra: bigint;
    _percentBrandsProvider: bigint;
    _percentOwnerProvider: bigint;
    _arianeeProject: bigint;
    _assetHolder: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace PausedEvent {
  export type InputTuple = [account: AddressLike];
  export type OutputTuple = [account: string];
  export interface OutputObject {
    account: string;
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

export namespace SetAddressEvent {
  export type InputTuple = [_addressType: string, _newAddress: AddressLike];
  export type OutputTuple = [_addressType: string, _newAddress: string];
  export interface OutputObject {
    _addressType: string;
    _newAddress: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace UnpausedEvent {
  export type InputTuple = [account: AddressLike];
  export type OutputTuple = [account: string];
  export interface OutputObject {
    account: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface ArianeeStore extends BaseContract {
  connect(runner?: ContractRunner | null): ArianeeStore;
  waitForDeployment(): Promise<this>;

  interface: ArianeeStoreInterface;

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

  ArianeeStoreStorageV0Location: TypedContractMethod<[], [string], "view">;

  DEFAULT_ADMIN_ROLE: TypedContractMethod<[], [string], "view">;

  acceptEvent: TypedContractMethod<
    [_eventId: BigNumberish, _rewardsReceiver: AddressLike],
    [void],
    "nonpayable"
  >;

  buyCredit: TypedContractMethod<
    [_creditType: BigNumberish, _quantity: BigNumberish, _to: AddressLike],
    [void],
    "nonpayable"
  >;

  createEvent: TypedContractMethod<
    [
      _eventId: BigNumberish,
      _tokenId: BigNumberish,
      _imprint: BytesLike,
      _uri: string,
      _rewardsReceiver: AddressLike
    ],
    [void],
    "nonpayable"
  >;

  createMessage: TypedContractMethod<
    [
      _messageId: BigNumberish,
      _tokenId: BigNumberish,
      _imprint: BytesLike,
      _rewardsReceiver: AddressLike
    ],
    [void],
    "nonpayable"
  >;

  creditPriceUSD: TypedContractMethod<
    [_creditType: BigNumberish],
    [bigint],
    "view"
  >;

  dispatchRewardsAtFirstTransfer: TypedContractMethod<
    [_tokenId: BigNumberish, _newOwner: AddressLike],
    [void],
    "nonpayable"
  >;

  getCreditPrice: TypedContractMethod<
    [_creditType: BigNumberish],
    [bigint],
    "view"
  >;

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

  hydrateToken: TypedContractMethod<
    [
      _tokenId: BigNumberish,
      _imprint: BytesLike,
      _uri: string,
      _initialKey: AddressLike,
      _tokenRecoveryTimestamp: BigNumberish,
      _initialKeyIsRequestKey: boolean,
      _rewardsReceiver: AddressLike,
      _soulbound: boolean
    ],
    [void],
    "nonpayable"
  >;

  initialize: TypedContractMethod<
    [
      _initialAdmin: AddressLike,
      _ariaAddress: AddressLike,
      _smartAssetAddress: AddressLike,
      _smartAssetUpdateAddress: AddressLike,
      _arianeeEventAddress: AddressLike,
      _arianeeMessageAddress: AddressLike,
      _creditHistoryAddress: AddressLike,
      _rewardsHistoryAddress: AddressLike,
      _ariaUSDExchange: BigNumberish,
      _creditPricesUSD0: BigNumberish,
      _creditPricesUSD1: BigNumberish,
      _creditPricesUSD2: BigNumberish,
      _creditPricesUSD3: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  isTrustedForwarder: TypedContractMethod<
    [forwarder: AddressLike],
    [boolean],
    "view"
  >;

  paused: TypedContractMethod<[], [boolean], "view">;

  percentOfDispatch: TypedContractMethod<
    [_actorIndex: BigNumberish],
    [bigint],
    "view"
  >;

  readMessage: TypedContractMethod<
    [_messageId: BigNumberish, _rewardsReceiver: AddressLike],
    [void],
    "nonpayable"
  >;

  readUpdateSmartAsset: TypedContractMethod<
    [_tokenId: BigNumberish, _rewardsReceiver: AddressLike],
    [void],
    "nonpayable"
  >;

  refuseEvent: TypedContractMethod<
    [_eventId: BigNumberish, _rewardsReceiver: AddressLike],
    [void],
    "nonpayable"
  >;

  renounceRole: TypedContractMethod<
    [role: BytesLike, callerConfirmation: AddressLike],
    [void],
    "nonpayable"
  >;

  "requestToken(uint256,bytes32,bool,address,bytes,address)": TypedContractMethod<
    [
      _tokenId: BigNumberish,
      _hash: BytesLike,
      _keepCurrentAccess: boolean,
      _rewardsReceiver: AddressLike,
      _signature: BytesLike,
      _newOwner: AddressLike
    ],
    [void],
    "nonpayable"
  >;

  "requestToken(uint256,bytes32,bool,address,bytes)": TypedContractMethod<
    [
      _tokenId: BigNumberish,
      _hash: BytesLike,
      _keepCurrentAccess: boolean,
      _rewardsReceiver: AddressLike,
      _signature: BytesLike
    ],
    [void],
    "nonpayable"
  >;

  reserveToken: TypedContractMethod<
    [_tokenId: BigNumberish, _to: AddressLike],
    [void],
    "nonpayable"
  >;

  revokeRole: TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [void],
    "nonpayable"
  >;

  setAriaUSDExchange: TypedContractMethod<
    [_ariaUSDExchange: BigNumberish],
    [void],
    "nonpayable"
  >;

  setArianeeProjectAddress: TypedContractMethod<
    [_arianeeProjectAddress: AddressLike],
    [void],
    "nonpayable"
  >;

  setAuthorizedExchangeAddress: TypedContractMethod<
    [_authorizedExchangeAddress: AddressLike],
    [void],
    "nonpayable"
  >;

  setCreditPrice: TypedContractMethod<
    [_creditType: BigNumberish, _price: BigNumberish],
    [void],
    "nonpayable"
  >;

  setDispatchPercent: TypedContractMethod<
    [
      _percentInfra: BigNumberish,
      _percentBrandsProvider: BigNumberish,
      _percentOwnerProvider: BigNumberish,
      _arianeeProject: BigNumberish,
      _smartAssetHolder: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  setProtocolInfraAddress: TypedContractMethod<
    [_protocolInfraAddress: AddressLike],
    [void],
    "nonpayable"
  >;

  supportsInterface: TypedContractMethod<
    [interfaceId: BytesLike],
    [boolean],
    "view"
  >;

  trustedForwarder: TypedContractMethod<[], [string], "view">;

  updateSmartAsset: TypedContractMethod<
    [
      _tokenId: BigNumberish,
      _imprint: BytesLike,
      _rewardsReceiver: AddressLike
    ],
    [void],
    "nonpayable"
  >;

  withdrawAll: TypedContractMethod<
    [withdrawAddress: AddressLike, tokenAddresses: AddressLike[]],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "ArianeeStoreStorageV0Location"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "DEFAULT_ADMIN_ROLE"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "acceptEvent"
  ): TypedContractMethod<
    [_eventId: BigNumberish, _rewardsReceiver: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "buyCredit"
  ): TypedContractMethod<
    [_creditType: BigNumberish, _quantity: BigNumberish, _to: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "createEvent"
  ): TypedContractMethod<
    [
      _eventId: BigNumberish,
      _tokenId: BigNumberish,
      _imprint: BytesLike,
      _uri: string,
      _rewardsReceiver: AddressLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "createMessage"
  ): TypedContractMethod<
    [
      _messageId: BigNumberish,
      _tokenId: BigNumberish,
      _imprint: BytesLike,
      _rewardsReceiver: AddressLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "creditPriceUSD"
  ): TypedContractMethod<[_creditType: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "dispatchRewardsAtFirstTransfer"
  ): TypedContractMethod<
    [_tokenId: BigNumberish, _newOwner: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "getCreditPrice"
  ): TypedContractMethod<[_creditType: BigNumberish], [bigint], "view">;
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
    nameOrSignature: "hydrateToken"
  ): TypedContractMethod<
    [
      _tokenId: BigNumberish,
      _imprint: BytesLike,
      _uri: string,
      _initialKey: AddressLike,
      _tokenRecoveryTimestamp: BigNumberish,
      _initialKeyIsRequestKey: boolean,
      _rewardsReceiver: AddressLike,
      _soulbound: boolean
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "initialize"
  ): TypedContractMethod<
    [
      _initialAdmin: AddressLike,
      _ariaAddress: AddressLike,
      _smartAssetAddress: AddressLike,
      _smartAssetUpdateAddress: AddressLike,
      _arianeeEventAddress: AddressLike,
      _arianeeMessageAddress: AddressLike,
      _creditHistoryAddress: AddressLike,
      _rewardsHistoryAddress: AddressLike,
      _ariaUSDExchange: BigNumberish,
      _creditPricesUSD0: BigNumberish,
      _creditPricesUSD1: BigNumberish,
      _creditPricesUSD2: BigNumberish,
      _creditPricesUSD3: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "isTrustedForwarder"
  ): TypedContractMethod<[forwarder: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "paused"
  ): TypedContractMethod<[], [boolean], "view">;
  getFunction(
    nameOrSignature: "percentOfDispatch"
  ): TypedContractMethod<[_actorIndex: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "readMessage"
  ): TypedContractMethod<
    [_messageId: BigNumberish, _rewardsReceiver: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "readUpdateSmartAsset"
  ): TypedContractMethod<
    [_tokenId: BigNumberish, _rewardsReceiver: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "refuseEvent"
  ): TypedContractMethod<
    [_eventId: BigNumberish, _rewardsReceiver: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "renounceRole"
  ): TypedContractMethod<
    [role: BytesLike, callerConfirmation: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "requestToken(uint256,bytes32,bool,address,bytes,address)"
  ): TypedContractMethod<
    [
      _tokenId: BigNumberish,
      _hash: BytesLike,
      _keepCurrentAccess: boolean,
      _rewardsReceiver: AddressLike,
      _signature: BytesLike,
      _newOwner: AddressLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "requestToken(uint256,bytes32,bool,address,bytes)"
  ): TypedContractMethod<
    [
      _tokenId: BigNumberish,
      _hash: BytesLike,
      _keepCurrentAccess: boolean,
      _rewardsReceiver: AddressLike,
      _signature: BytesLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "reserveToken"
  ): TypedContractMethod<
    [_tokenId: BigNumberish, _to: AddressLike],
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
    nameOrSignature: "setAriaUSDExchange"
  ): TypedContractMethod<
    [_ariaUSDExchange: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setArianeeProjectAddress"
  ): TypedContractMethod<
    [_arianeeProjectAddress: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setAuthorizedExchangeAddress"
  ): TypedContractMethod<
    [_authorizedExchangeAddress: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setCreditPrice"
  ): TypedContractMethod<
    [_creditType: BigNumberish, _price: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setDispatchPercent"
  ): TypedContractMethod<
    [
      _percentInfra: BigNumberish,
      _percentBrandsProvider: BigNumberish,
      _percentOwnerProvider: BigNumberish,
      _arianeeProject: BigNumberish,
      _smartAssetHolder: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setProtocolInfraAddress"
  ): TypedContractMethod<
    [_protocolInfraAddress: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "supportsInterface"
  ): TypedContractMethod<[interfaceId: BytesLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "trustedForwarder"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "updateSmartAsset"
  ): TypedContractMethod<
    [
      _tokenId: BigNumberish,
      _imprint: BytesLike,
      _rewardsReceiver: AddressLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "withdrawAll"
  ): TypedContractMethod<
    [withdrawAddress: AddressLike, tokenAddresses: AddressLike[]],
    [void],
    "nonpayable"
  >;

  getEvent(
    key: "CreditBought"
  ): TypedContractEvent<
    CreditBoughtEvent.InputTuple,
    CreditBoughtEvent.OutputTuple,
    CreditBoughtEvent.OutputObject
  >;
  getEvent(
    key: "CreditSpended"
  ): TypedContractEvent<
    CreditSpendedEvent.InputTuple,
    CreditSpendedEvent.OutputTuple,
    CreditSpendedEvent.OutputObject
  >;
  getEvent(
    key: "Initialized"
  ): TypedContractEvent<
    InitializedEvent.InputTuple,
    InitializedEvent.OutputTuple,
    InitializedEvent.OutputObject
  >;
  getEvent(
    key: "NewAriaUSDExchange"
  ): TypedContractEvent<
    NewAriaUSDExchangeEvent.InputTuple,
    NewAriaUSDExchangeEvent.OutputTuple,
    NewAriaUSDExchangeEvent.OutputObject
  >;
  getEvent(
    key: "NewCreditPrice"
  ): TypedContractEvent<
    NewCreditPriceEvent.InputTuple,
    NewCreditPriceEvent.OutputTuple,
    NewCreditPriceEvent.OutputObject
  >;
  getEvent(
    key: "NewDispatchPercent"
  ): TypedContractEvent<
    NewDispatchPercentEvent.InputTuple,
    NewDispatchPercentEvent.OutputTuple,
    NewDispatchPercentEvent.OutputObject
  >;
  getEvent(
    key: "Paused"
  ): TypedContractEvent<
    PausedEvent.InputTuple,
    PausedEvent.OutputTuple,
    PausedEvent.OutputObject
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
    key: "SetAddress"
  ): TypedContractEvent<
    SetAddressEvent.InputTuple,
    SetAddressEvent.OutputTuple,
    SetAddressEvent.OutputObject
  >;
  getEvent(
    key: "Unpaused"
  ): TypedContractEvent<
    UnpausedEvent.InputTuple,
    UnpausedEvent.OutputTuple,
    UnpausedEvent.OutputObject
  >;

  filters: {
    "CreditBought(address,address,uint256,uint256)": TypedContractEvent<
      CreditBoughtEvent.InputTuple,
      CreditBoughtEvent.OutputTuple,
      CreditBoughtEvent.OutputObject
    >;
    CreditBought: TypedContractEvent<
      CreditBoughtEvent.InputTuple,
      CreditBoughtEvent.OutputTuple,
      CreditBoughtEvent.OutputObject
    >;

    "CreditSpended(uint256,uint256)": TypedContractEvent<
      CreditSpendedEvent.InputTuple,
      CreditSpendedEvent.OutputTuple,
      CreditSpendedEvent.OutputObject
    >;
    CreditSpended: TypedContractEvent<
      CreditSpendedEvent.InputTuple,
      CreditSpendedEvent.OutputTuple,
      CreditSpendedEvent.OutputObject
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

    "NewAriaUSDExchange(uint256)": TypedContractEvent<
      NewAriaUSDExchangeEvent.InputTuple,
      NewAriaUSDExchangeEvent.OutputTuple,
      NewAriaUSDExchangeEvent.OutputObject
    >;
    NewAriaUSDExchange: TypedContractEvent<
      NewAriaUSDExchangeEvent.InputTuple,
      NewAriaUSDExchangeEvent.OutputTuple,
      NewAriaUSDExchangeEvent.OutputObject
    >;

    "NewCreditPrice(uint256,uint256)": TypedContractEvent<
      NewCreditPriceEvent.InputTuple,
      NewCreditPriceEvent.OutputTuple,
      NewCreditPriceEvent.OutputObject
    >;
    NewCreditPrice: TypedContractEvent<
      NewCreditPriceEvent.InputTuple,
      NewCreditPriceEvent.OutputTuple,
      NewCreditPriceEvent.OutputObject
    >;

    "NewDispatchPercent(uint8,uint8,uint8,uint8,uint8)": TypedContractEvent<
      NewDispatchPercentEvent.InputTuple,
      NewDispatchPercentEvent.OutputTuple,
      NewDispatchPercentEvent.OutputObject
    >;
    NewDispatchPercent: TypedContractEvent<
      NewDispatchPercentEvent.InputTuple,
      NewDispatchPercentEvent.OutputTuple,
      NewDispatchPercentEvent.OutputObject
    >;

    "Paused(address)": TypedContractEvent<
      PausedEvent.InputTuple,
      PausedEvent.OutputTuple,
      PausedEvent.OutputObject
    >;
    Paused: TypedContractEvent<
      PausedEvent.InputTuple,
      PausedEvent.OutputTuple,
      PausedEvent.OutputObject
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

    "SetAddress(string,address)": TypedContractEvent<
      SetAddressEvent.InputTuple,
      SetAddressEvent.OutputTuple,
      SetAddressEvent.OutputObject
    >;
    SetAddress: TypedContractEvent<
      SetAddressEvent.InputTuple,
      SetAddressEvent.OutputTuple,
      SetAddressEvent.OutputObject
    >;

    "Unpaused(address)": TypedContractEvent<
      UnpausedEvent.InputTuple,
      UnpausedEvent.OutputTuple,
      UnpausedEvent.OutputObject
    >;
    Unpaused: TypedContractEvent<
      UnpausedEvent.InputTuple,
      UnpausedEvent.OutputTuple,
      UnpausedEvent.OutputObject
    >;
  };
}
