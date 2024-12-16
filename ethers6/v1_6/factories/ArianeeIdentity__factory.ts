/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  ArianeeIdentity,
  ArianeeIdentityInterface,
} from "../ArianeeIdentity";

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
    name: "ArianeeIdentityStorageV0Location",
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
    name: "addAddressToApprovedList",
    inputs: [
      {
        name: "_newIdentity",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [
      {
        name: "",
        type: "bytes3",
        internalType: "bytes3",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "addressFromId",
    inputs: [
      {
        name: "_id",
        type: "bytes3",
        internalType: "bytes3",
      },
    ],
    outputs: [
      {
        name: "_identity",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "addressImprint",
    inputs: [
      {
        name: "_identity",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [
      {
        name: "_imprint",
        type: "bytes32",
        internalType: "bytes32",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "addressIsApproved",
    inputs: [
      {
        name: "_identity",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [
      {
        name: "_isApproved",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "addressURI",
    inputs: [
      {
        name: "_identity",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [
      {
        name: "_uri",
        type: "string",
        internalType: "string",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "compromiseIdentityDate",
    inputs: [
      {
        name: "_identity",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [
      {
        name: "_compromiseDate",
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
    name: "initialize",
    inputs: [
      {
        name: "_initialAdmin",
        type: "address",
        internalType: "address",
      },
      {
        name: "_newBouncerAddress",
        type: "address",
        internalType: "address",
      },
      {
        name: "_newValidatorAddress",
        type: "address",
        internalType: "address",
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
    name: "removeAddressFromApprovedList",
    inputs: [
      {
        name: "_identity",
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
    name: "updateBouncerAddress",
    inputs: [
      {
        name: "_newBouncerAddress",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "updateCompromiseDate",
    inputs: [
      {
        name: "_identity",
        type: "address",
        internalType: "address",
      },
      {
        name: "_compromiseDate",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "updateInformations",
    inputs: [
      {
        name: "_uri",
        type: "string",
        internalType: "string",
      },
      {
        name: "_imprint",
        type: "bytes32",
        internalType: "bytes32",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "updateValidatorAddress",
    inputs: [
      {
        name: "_newValidatorAddress",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "validateInformation",
    inputs: [
      {
        name: "_identity",
        type: "address",
        internalType: "address",
      },
      {
        name: "_uriToValidate",
        type: "string",
        internalType: "string",
      },
      {
        name: "_imprintToValidate",
        type: "bytes32",
        internalType: "bytes32",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "waitingImprint",
    inputs: [
      {
        name: "_identity",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [
      {
        name: "_waitingImprint",
        type: "bytes32",
        internalType: "bytes32",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "waitingURI",
    inputs: [
      {
        name: "_identity",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [
      {
        name: "_waitingUri",
        type: "string",
        internalType: "string",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "event",
    name: "AddressApprovedAdded",
    inputs: [
      {
        name: "_newIdentity",
        type: "address",
        indexed: false,
        internalType: "address",
      },
      {
        name: "_addressId",
        type: "bytes3",
        indexed: false,
        internalType: "bytes3",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "AddressApprovedRemoved",
    inputs: [
      {
        name: "_newIdentity",
        type: "address",
        indexed: false,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "IdentityCompromised",
    inputs: [
      {
        name: "_identity",
        type: "address",
        indexed: false,
        internalType: "address",
      },
      {
        name: "_compromiseDate",
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
    name: "URIUpdated",
    inputs: [
      {
        name: "_identity",
        type: "address",
        indexed: false,
        internalType: "address",
      },
      {
        name: "_uri",
        type: "string",
        indexed: false,
        internalType: "string",
      },
      {
        name: "_imprint",
        type: "bytes32",
        indexed: false,
        internalType: "bytes32",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "URIValidate",
    inputs: [
      {
        name: "_identity",
        type: "address",
        indexed: false,
        internalType: "address",
      },
      {
        name: "_uri",
        type: "string",
        indexed: false,
        internalType: "string",
      },
      {
        name: "_imprint",
        type: "bytes32",
        indexed: false,
        internalType: "bytes32",
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
    name: "InvalidInitialization",
    inputs: [],
  },
  {
    type: "error",
    name: "NotInitializing",
    inputs: [],
  },
] as const;

export class ArianeeIdentity__factory {
  static readonly abi = _abi;
  static createInterface(): ArianeeIdentityInterface {
    return new Interface(_abi) as ArianeeIdentityInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): ArianeeIdentity {
    return new Contract(address, _abi, runner) as unknown as ArianeeIdentity;
  }
}