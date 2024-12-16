/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type { ArianeeStore, ArianeeStoreInterface } from "../ArianeeStore";

const _abi = [
  {
    type: "constructor",
    inputs: [
      {
        name: "_trustedForwarder",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "ArianeeStoreStorageV0Location",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "bytes32",
        internalType: "bytes32",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "DEFAULT_ADMIN_ROLE",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "bytes32",
        internalType: "bytes32",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "acceptEvent",
    inputs: [
      {
        name: "_eventId",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_rewardsReceiver",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "buyCredit",
    inputs: [
      {
        name: "_creditType",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_quantity",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_to",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "createEvent",
    inputs: [
      {
        name: "_eventId",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_tokenId",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_imprint",
        type: "bytes32",
        internalType: "bytes32",
      },
      {
        name: "_uri",
        type: "string",
        internalType: "string",
      },
      {
        name: "_rewardsReceiver",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "createMessage",
    inputs: [
      {
        name: "_messageId",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_tokenId",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_imprint",
        type: "bytes32",
        internalType: "bytes32",
      },
      {
        name: "_rewardsReceiver",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "creditPriceUSD",
    inputs: [
      {
        name: "_creditType",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "_creditPriceUSD",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "dispatchRewardsAtFirstTransfer",
    inputs: [
      {
        name: "_tokenId",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_newOwner",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "getCreditPrice",
    inputs: [
      {
        name: "_creditType",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getRoleAdmin",
    inputs: [
      {
        name: "role",
        type: "bytes32",
        internalType: "bytes32",
      },
    ],
    outputs: [
      {
        name: "",
        type: "bytes32",
        internalType: "bytes32",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "grantRole",
    inputs: [
      {
        name: "role",
        type: "bytes32",
        internalType: "bytes32",
      },
      {
        name: "account",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "hasRole",
    inputs: [
      {
        name: "role",
        type: "bytes32",
        internalType: "bytes32",
      },
      {
        name: "account",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "hydrateToken",
    inputs: [
      {
        name: "_tokenId",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_imprint",
        type: "bytes32",
        internalType: "bytes32",
      },
      {
        name: "_uri",
        type: "string",
        internalType: "string",
      },
      {
        name: "_initialKey",
        type: "address",
        internalType: "address",
      },
      {
        name: "_tokenRecoveryTimestamp",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_initialKeyIsRequestKey",
        type: "bool",
        internalType: "bool",
      },
      {
        name: "_rewardsReceiver",
        type: "address",
        internalType: "address",
      },
      {
        name: "_soulbound",
        type: "bool",
        internalType: "bool",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "initialize",
    inputs: [
      {
        name: "_initialAdmin",
        type: "address",
        internalType: "address",
      },
      {
        name: "_ariaAddress",
        type: "address",
        internalType: "address",
      },
      {
        name: "_smartAssetAddress",
        type: "address",
        internalType: "address",
      },
      {
        name: "_smartAssetUpdateAddress",
        type: "address",
        internalType: "address",
      },
      {
        name: "_arianeeEventAddress",
        type: "address",
        internalType: "address",
      },
      {
        name: "_arianeeMessageAddress",
        type: "address",
        internalType: "address",
      },
      {
        name: "_creditHistoryAddress",
        type: "address",
        internalType: "address",
      },
      {
        name: "_rewardsHistoryAddress",
        type: "address",
        internalType: "address",
      },
      {
        name: "_ariaUSDExchange",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_creditPricesUSD0",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_creditPricesUSD1",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_creditPricesUSD2",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_creditPricesUSD3",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "isTrustedForwarder",
    inputs: [
      {
        name: "forwarder",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "paused",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "percentOfDispatch",
    inputs: [
      {
        name: "_actorIndex",
        type: "uint8",
        internalType: "uint8",
      },
    ],
    outputs: [
      {
        name: "_percent",
        type: "uint8",
        internalType: "uint8",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "readMessage",
    inputs: [
      {
        name: "_messageId",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_rewardsReceiver",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "readUpdateSmartAsset",
    inputs: [
      {
        name: "_tokenId",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_rewardsReceiver",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "refuseEvent",
    inputs: [
      {
        name: "_eventId",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_rewardsReceiver",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "renounceRole",
    inputs: [
      {
        name: "role",
        type: "bytes32",
        internalType: "bytes32",
      },
      {
        name: "callerConfirmation",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "requestToken",
    inputs: [
      {
        name: "_tokenId",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_hash",
        type: "bytes32",
        internalType: "bytes32",
      },
      {
        name: "_keepCurrentAccess",
        type: "bool",
        internalType: "bool",
      },
      {
        name: "_rewardsReceiver",
        type: "address",
        internalType: "address",
      },
      {
        name: "_signature",
        type: "bytes",
        internalType: "bytes",
      },
      {
        name: "_newOwner",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "requestToken",
    inputs: [
      {
        name: "_tokenId",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_hash",
        type: "bytes32",
        internalType: "bytes32",
      },
      {
        name: "_keepCurrentAccess",
        type: "bool",
        internalType: "bool",
      },
      {
        name: "_rewardsReceiver",
        type: "address",
        internalType: "address",
      },
      {
        name: "_signature",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "reserveToken",
    inputs: [
      {
        name: "_tokenId",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_to",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "revokeRole",
    inputs: [
      {
        name: "role",
        type: "bytes32",
        internalType: "bytes32",
      },
      {
        name: "account",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "setAriaUSDExchange",
    inputs: [
      {
        name: "_ariaUSDExchange",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "setArianeeProjectAddress",
    inputs: [
      {
        name: "_arianeeProjectAddress",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "setAuthorizedExchangeAddress",
    inputs: [
      {
        name: "_authorizedExchangeAddress",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "setCreditPrice",
    inputs: [
      {
        name: "_creditType",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_price",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "setDispatchPercent",
    inputs: [
      {
        name: "_percentInfra",
        type: "uint8",
        internalType: "uint8",
      },
      {
        name: "_percentBrandsProvider",
        type: "uint8",
        internalType: "uint8",
      },
      {
        name: "_percentOwnerProvider",
        type: "uint8",
        internalType: "uint8",
      },
      {
        name: "_arianeeProject",
        type: "uint8",
        internalType: "uint8",
      },
      {
        name: "_smartAssetHolder",
        type: "uint8",
        internalType: "uint8",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "setProtocolInfraAddress",
    inputs: [
      {
        name: "_protocolInfraAddress",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "supportsInterface",
    inputs: [
      {
        name: "interfaceId",
        type: "bytes4",
        internalType: "bytes4",
      },
    ],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "trustedForwarder",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "updateSmartAsset",
    inputs: [
      {
        name: "_tokenId",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_imprint",
        type: "bytes32",
        internalType: "bytes32",
      },
      {
        name: "_rewardsReceiver",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "withdrawAll",
    inputs: [
      {
        name: "withdrawAddress",
        type: "address",
        internalType: "address",
      },
      {
        name: "tokenAddresses",
        type: "address[]",
        internalType: "address[]",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    name: "CreditBought",
    inputs: [
      {
        name: "buyer",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "_receiver",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "_creditType",
        type: "uint256",
        indexed: true,
        internalType: "uint256",
      },
      {
        name: "quantity",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "CreditSpended",
    inputs: [
      {
        name: "_type",
        type: "uint256",
        indexed: true,
        internalType: "uint256",
      },
      {
        name: "_quantity",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "Initialized",
    inputs: [
      {
        name: "version",
        type: "uint64",
        indexed: false,
        internalType: "uint64",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "NewAriaUSDExchange",
    inputs: [
      {
        name: "_ariaUSDExchange",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "NewCreditPrice",
    inputs: [
      {
        name: "_creditType",
        type: "uint256",
        indexed: true,
        internalType: "uint256",
      },
      {
        name: "_price",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "NewDispatchPercent",
    inputs: [
      {
        name: "_percentInfra",
        type: "uint8",
        indexed: false,
        internalType: "uint8",
      },
      {
        name: "_percentBrandsProvider",
        type: "uint8",
        indexed: false,
        internalType: "uint8",
      },
      {
        name: "_percentOwnerProvider",
        type: "uint8",
        indexed: false,
        internalType: "uint8",
      },
      {
        name: "_arianeeProject",
        type: "uint8",
        indexed: false,
        internalType: "uint8",
      },
      {
        name: "_assetHolder",
        type: "uint8",
        indexed: false,
        internalType: "uint8",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "Paused",
    inputs: [
      {
        name: "account",
        type: "address",
        indexed: false,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "RoleAdminChanged",
    inputs: [
      {
        name: "role",
        type: "bytes32",
        indexed: true,
        internalType: "bytes32",
      },
      {
        name: "previousAdminRole",
        type: "bytes32",
        indexed: true,
        internalType: "bytes32",
      },
      {
        name: "newAdminRole",
        type: "bytes32",
        indexed: true,
        internalType: "bytes32",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "RoleGranted",
    inputs: [
      {
        name: "role",
        type: "bytes32",
        indexed: true,
        internalType: "bytes32",
      },
      {
        name: "account",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "sender",
        type: "address",
        indexed: true,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "RoleRevoked",
    inputs: [
      {
        name: "role",
        type: "bytes32",
        indexed: true,
        internalType: "bytes32",
      },
      {
        name: "account",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "sender",
        type: "address",
        indexed: true,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "SetAddress",
    inputs: [
      {
        name: "_addressType",
        type: "string",
        indexed: false,
        internalType: "string",
      },
      {
        name: "_newAddress",
        type: "address",
        indexed: false,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "Unpaused",
    inputs: [
      {
        name: "account",
        type: "address",
        indexed: false,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "error",
    name: "AccessControlBadConfirmation",
    inputs: [],
  },
  {
    type: "error",
    name: "AccessControlUnauthorizedAccount",
    inputs: [
      {
        name: "account",
        type: "address",
        internalType: "address",
      },
      {
        name: "neededRole",
        type: "bytes32",
        internalType: "bytes32",
      },
    ],
  },
  {
    type: "error",
    name: "EnforcedPause",
    inputs: [],
  },
  {
    type: "error",
    name: "ExpectedPause",
    inputs: [],
  },
  {
    type: "error",
    name: "InvalidInitialization",
    inputs: [],
  },
  {
    type: "error",
    name: "NotInitializing",
    inputs: [],
  },
] as const;

export class ArianeeStore__factory {
  static readonly abi = _abi;
  static createInterface(): ArianeeStoreInterface {
    return new Interface(_abi) as ArianeeStoreInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): ArianeeStore {
    return new Contract(address, _abi, runner) as unknown as ArianeeStore;
  }
}
