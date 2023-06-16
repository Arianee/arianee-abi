/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  ArianeeUserAction,
  ArianeeUserActionInterface,
} from "../ArianeeUserAction";

const _abi = [
  {
    constant: false,
    inputs: [
      {
        name: "_tokenId",
        type: "uint256",
      },
      {
        name: "_address",
        type: "address",
      },
    ],
    name: "addAddressToWhitelist",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        name: "_whitelistAddress",
        type: "address",
      },
      {
        name: "_smartAssetAddress",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor",
  },
] as const;

export class ArianeeUserAction__factory {
  static readonly abi = _abi;
  static createInterface(): ArianeeUserActionInterface {
    return new Interface(_abi) as ArianeeUserActionInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): ArianeeUserAction {
    return new Contract(address, _abi, runner) as unknown as ArianeeUserAction;
  }
}