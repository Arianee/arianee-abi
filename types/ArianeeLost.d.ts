/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import BN from "bn.js";
import { Contract, ContractOptions, EventOptions } from "web3-eth-contract";
import { EventLog } from "web3-core";
import { TransactionObject, ContractEvent, Callback } from "./types";

export class ArianeeLost extends Contract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  );
  clone(): ArianeeLost;
  methods: {
    setAuthorizedIdentity(
      _newIdentityAuthorized: string
    ): TransactionObject<void>;

    setManagerIdentity(_managerIdentity: string): TransactionObject<void>;

    setMissingStatus(_tokenId: number | string): TransactionObject<void>;

    setStolenStatus(_tokenId: number | string): TransactionObject<void>;

    transferOwnership(_newOwner: string): TransactionObject<void>;

    unsetAuthorizedIdentity(
      _newIdentityUnauthorized: string
    ): TransactionObject<void>;

    unsetMissingStatus(_tokenId: number | string): TransactionObject<void>;

    unsetStolenStatus(_tokenId: number | string): TransactionObject<void>;

    getManagerIdentity(): TransactionObject<string>;

    isAddressAuthorized(_address: string): TransactionObject<boolean>;

    isMissing(_tokenId: number | string): TransactionObject<boolean>;

    isStolen(_tokenId: number | string): TransactionObject<boolean>;

    owner(): TransactionObject<string>;

    smartAsset(): TransactionObject<string>;
  };
  events: {
    NewManagerIdentity: ContractEvent<string>;
    Missing: ContractEvent<BN>;
    UnMissing: ContractEvent<BN>;
    AuthorizedIdentityAdded: ContractEvent<string>;
    AuthorizedIdentityRemoved: ContractEvent<string>;
    Stolen: ContractEvent<BN>;
    UnStolen: ContractEvent<BN>;
    OwnershipTransferred: ContractEvent<{
      previousOwner: string;
      newOwner: string;
      0: string;
      1: string;
    }>;
    allEvents: (options?: EventOptions, cb?: Callback<EventLog>) => any;
  };
}
