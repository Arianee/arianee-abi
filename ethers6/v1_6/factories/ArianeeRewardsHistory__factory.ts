/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../common";
import type {
  ArianeeRewardsHistory,
  ArianeeRewardsHistoryInterface,
} from "../ArianeeRewardsHistory";

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
    name: "ArianeeRewardsHistoryStorageV0Location",
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
    name: "getTokenNmpProvider",
    inputs: [
      {
        name: "_tokenId",
        type: "uint256",
        internalType: "uint256",
      },
    ],
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
    name: "getTokenReward",
    inputs: [
      {
        name: "_tokenId",
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
    name: "getTokenWalletProvider",
    inputs: [
      {
        name: "_tokenId",
        type: "uint256",
        internalType: "uint256",
      },
    ],
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
        name: "_storeAddress",
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
    name: "resetTokenReward",
    inputs: [
      {
        name: "_tokenId",
        type: "uint256",
        internalType: "uint256",
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
    name: "setTokenNmpProvider",
    inputs: [
      {
        name: "_tokenId",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_nmpProvider",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "setTokenReward",
    inputs: [
      {
        name: "_tokenId",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_rewards",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "setTokenWalletProvider",
    inputs: [
      {
        name: "_tokenId",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_walletProvider",
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

const _bytecode =
  "0x60a03461011057601f610df338819003918201601f19168301916001600160401b038311848410176101145780849260209460405283398101031261011057516001600160a01b0381168103610110576080525f516020610dd35f395f51905f525460ff8160401c16610101576002600160401b03196001600160401b038216016100ab575b604051610caa908161012982396080518181816102c30152818161039d0152610bca0152f35b6001600160401b0319166001600160401b039081175f516020610dd35f395f51905f52556040519081527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d290602090a15f610085565b63f92ee8a960e01b5f5260045ffd5b5f80fd5b634e487b7160e01b5f52604160045260245ffdfe6080806040526004361015610012575f80fd5b5f3560e01c90816301ffc9a714610765575080630eb452a61461071c578063248a9ca3146106dd57806326c9b6a81461066e5780632f2ff15d1461062457806336568abe146105d0578063485cc955146104225780634fde0960146103d1578063572b6c051461037d5780636c8263891461034357806379877b24146102f25780637da0a877146102ae57806391d148541461025957806392c813d31461020e578063a217fddf146101f4578063d547741f146101a3578063e8395513146101555763fad29fd7146100e2575f80fd5b34610151576040366003190112610151576100fb6107b8565b6101036107e4565b6004355f9081527f7faf6f74b76958ea97a8c9b56ffb6dd8afa982db0a811ac90b4a5c0398f26a026020526040902080546001600160a01b0319166001600160a01b03909216919091179055005b5f80fd5b346101515760403660031901126101515761016e6107e4565b6004355f527f7faf6f74b76958ea97a8c9b56ffb6dd8afa982db0a811ac90b4a5c0398f26a0160205260243560405f20555f80f35b34610151576040366003190112610151576101f26004356101c26107b8565b906101ed6101e8825f525f516020610c355f395f51905f52602052600160405f20015490565b610872565b610b1e565b005b34610151575f3660031901126101515760206040515f8152f35b34610151576020366003190112610151576102276107e4565b6004355f9081527f7faf6f74b76958ea97a8c9b56ffb6dd8afa982db0a811ac90b4a5c0398f26a016020526040812055005b34610151576040366003190112610151576102726107b8565b6004355f525f516020610c355f395f51905f5260205260405f209060018060a01b03165f52602052602060ff60405f2054166040519015158152f35b34610151575f366003190112610151576040517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602090f35b34610151576020366003190112610151576004355f527f7faf6f74b76958ea97a8c9b56ffb6dd8afa982db0a811ac90b4a5c0398f26a03602052602060018060a01b0360405f205416604051908152f35b34610151575f3660031901126101515760206040517f7faf6f74b76958ea97a8c9b56ffb6dd8afa982db0a811ac90b4a5c0398f26a008152f35b346101515760203660031901126101515760206103986107ce565b6040517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b039081169216919091148152f35b34610151576020366003190112610151576004355f527f7faf6f74b76958ea97a8c9b56ffb6dd8afa982db0a811ac90b4a5c0398f26a02602052602060018060a01b0360405f205416604051908152f35b346101515760403660031901126101515761043b6107ce565b6104436107b8565b5f516020610c555f395f51905f525460ff8160401c16159267ffffffffffffffff8216801590816105c8575b60011490816105be575b1590816105b5575b506105a65767ffffffffffffffff1982166001175f516020610c555f395f51905f52556104b4918461057a575b506108ce565b506104be81610990565b5060018060a01b03166bffffffffffffffffffffffff60a01b7f7faf6f74b76958ea97a8c9b56ffb6dd8afa982db0a811ac90b4a5c0398f26a005416177f7faf6f74b76958ea97a8c9b56ffb6dd8afa982db0a811ac90b4a5c0398f26a005561052357005b68ff0000000000000000195f516020610c555f395f51905f5254165f516020610c555f395f51905f52557fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d2602060405160018152a1005b68ffffffffffffffffff191668010000000000000001175f516020610c555f395f51905f5255846104ae565b63f92ee8a960e01b5f5260045ffd5b90501585610481565b303b159150610479565b85915061046f565b34610151576040366003190112610151576105e96107b8565b6001600160a01b036105f9610bc7565b166001600160a01b03821603610615576101f290600435610b1e565b63334bd91960e11b5f5260045ffd5b34610151576040366003190112610151576101f26004356106436107b8565b906106696101e8825f525f516020610c355f395f51905f52602052600160405f20015490565b610a6d565b34610151576040366003190112610151576106876107b8565b61068f6107e4565b6004355f9081527f7faf6f74b76958ea97a8c9b56ffb6dd8afa982db0a811ac90b4a5c0398f26a036020526040902080546001600160a01b0319166001600160a01b03909216919091179055005b346101515760203660031901126101515760206107146004355f525f516020610c355f395f51905f52602052600160405f20015490565b604051908152f35b34610151576020366003190112610151576004355f527f7faf6f74b76958ea97a8c9b56ffb6dd8afa982db0a811ac90b4a5c0398f26a01602052602060405f2054604051908152f35b34610151576020366003190112610151576004359063ffffffff60e01b821680920361015157602091637965db0b60e01b81149081156107a7575b5015158152f35b6301ffc9a760e01b149050836107a0565b602435906001600160a01b038216820361015157565b600435906001600160a01b038216820361015157565b6107ec610bc7565b6001600160a01b0381165f9081527f31058941e1e7e2206d669e73d9d8ec62b5a5d91fe10b4e31bec209835d52156f602052604090205460ff161561082e5750565b63e2517d3f60e01b5f9081526001600160a01b03919091166004527f7c58c52c6ee36b58d66053b60f9071543575bb40c49fb6188a64738ae98ca57b602452604490fd5b61087a610bc7565b815f525f516020610c355f395f51905f5260205260405f2060018060a01b0382165f5260205260ff60405f205416156108b1575050565b63e2517d3f60e01b5f5260018060a01b031660045260245260445ffd5b6001600160a01b0381165f9081527fb7db2dd08fcb62d0c9e08c51941cae53c267786a0b75803fb7960902fc8ef97d602052604090205460ff1661098b576001600160a01b038181165f9081527fb7db2dd08fcb62d0c9e08c51941cae53c267786a0b75803fb7960902fc8ef97d60205260409020805460ff19166001179055610956610bc7565b16906001600160a01b03165f7f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d8180a4600190565b505f90565b6001600160a01b0381165f9081527f31058941e1e7e2206d669e73d9d8ec62b5a5d91fe10b4e31bec209835d52156f602052604090205460ff1661098b576001600160a01b038181165f9081527f31058941e1e7e2206d669e73d9d8ec62b5a5d91fe10b4e31bec209835d52156f60205260409020805460ff19166001179055610a18610bc7565b16906001600160a01b03167f7c58c52c6ee36b58d66053b60f9071543575bb40c49fb6188a64738ae98ca57b7f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d5f80a4600190565b5f8181525f516020610c355f395f51905f52602090815260408083206001600160a01b038616845290915290205460ff16610b18575f8181525f516020610c355f395f51905f52602090815260408083206001600160a01b0386811685529252909120805460ff19166001179055610ae3610bc7565b16916001600160a01b0316907f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d5f80a4600190565b50505f90565b5f8181525f516020610c355f395f51905f52602090815260408083206001600160a01b038616845290915290205460ff1615610b18575f8181525f516020610c355f395f51905f52602090815260408083206001600160a01b0386811685529252909120805460ff19169055610b92610bc7565b16916001600160a01b0316907ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b5f80a4600190565b337f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03161480610c29575b15610c25576013193601368111610c11573560601c90565b634e487b7160e01b5f52601160045260245ffd5b3390565b506014361015610bf956fe02dd7bc7dec4dceedda775e58dd541e08a116c6c53815c0bd028192f7b626800f0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a00a264697066735822122099bdee262b278a0485f22dfecbb9ac2bcb7f8bd63a16074bc6641275423de1df64736f6c634300081c0033f0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a00";

type ArianeeRewardsHistoryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ArianeeRewardsHistoryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ArianeeRewardsHistory__factory extends ContractFactory {
  constructor(...args: ArianeeRewardsHistoryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _trustedForwarder: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(_trustedForwarder, overrides || {});
  }
  override deploy(
    _trustedForwarder: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(_trustedForwarder, overrides || {}) as Promise<
      ArianeeRewardsHistory & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(
    runner: ContractRunner | null
  ): ArianeeRewardsHistory__factory {
    return super.connect(runner) as ArianeeRewardsHistory__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ArianeeRewardsHistoryInterface {
    return new Interface(_abi) as ArianeeRewardsHistoryInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): ArianeeRewardsHistory {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as ArianeeRewardsHistory;
  }
}
