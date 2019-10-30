/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import BN from "bn.js";
import { Contract, ContractOptions, EventOptions } from "web3-eth-contract";
import { EventLog } from "web3-core";
import { TransactionObject, ContractEvent, Callback } from "./types";

export class ArianeeStore extends Contract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  );
  clone(): ArianeeStore;
  methods: {
    percentOfDispatch(_receiver: number | string): TransactionObject<BN>;

    buyCredit(
      _creditType: number | string,
      _quantity: number | string,
      _to: string
    ): TransactionObject<void>;

    setAriaUSDExchange(
      _ariaUSDExchange: number | string
    ): TransactionObject<void>;

    getAriaFromOldStore(_oldStoreAddress: string): TransactionObject<void>;

    nonFungibleRegistry(): TransactionObject<string>;

    reserveToken(_id: number | string, _to: string): TransactionObject<void>;

    creditHistory(): TransactionObject<string>;

    ariaUSDExchange(): TransactionObject<BN>;

    acceptEvent(
      _eventId: number | string,
      _providerOwner: string
    ): TransactionObject<void>;

    setAuthorizedExchangeAddress(
      _authorizedExchangeAddress: string
    ): TransactionObject<void>;

    unpause(): TransactionObject<void>;

    setDispatchPercent(
      _percentInfra: number | string,
      _percentBrandsProvider: number | string,
      _percentOwnerProvider: number | string,
      _arianeeProject: number | string,
      _assetHolder: number | string
    ): TransactionObject<void>;

    acceptedToken(): TransactionObject<string>;

    arianeeProjectAddress(): TransactionObject<string>;

    refuseEvent(
      _eventId: number | string,
      _providerOwner: string
    ): TransactionObject<void>;

    paused(): TransactionObject<boolean>;

    setArianeeProjectAddress(
      _arianeeProjectAddress: string
    ): TransactionObject<void>;

    protocolInfraAddress(): TransactionObject<string>;

    withdrawArias(): TransactionObject<void>;

    canDestroy(
      _tokenId: number | string,
      _sender: string
    ): TransactionObject<boolean>;

    pause(): TransactionObject<void>;

    setProtocolInfraAddress(
      _protocolInfraAddress: string
    ): TransactionObject<void>;

    owner(): TransactionObject<string>;

    arianeeEvent(): TransactionObject<string>;

    creditPriceUSD(_creditType: number | string): TransactionObject<BN>;

    requestToken(
      _tokenId: number | string,
      _hash: string | number[],
      _keepRequestToken: boolean,
      _providerOwner: string,
      _signature: string | number[]
    ): TransactionObject<void>;

    canTransfer(
      _to: string,
      _from: string,
      _tokenId: number | string
    ): TransactionObject<boolean>;

    createEvent(
      _eventId: number | string,
      _tokenId: number | string,
      _imprint: string | number[],
      _uri: string,
      _providerBrand: string
    ): TransactionObject<void>;

    hydrateToken(
      _tokenId: number | string,
      _imprint: string | number[],
      _uri: string,
      _encryptedInitialKey: string,
      _tokenRecoveryTimestamp: number | string,
      _initialKeyIsRequestKey: boolean,
      _providerBrand: string
    ): TransactionObject<void>;

    transferOwnership(_newOwner: string): TransactionObject<void>;

    authorizedExchangeAddress(): TransactionObject<string>;

    getCreditPrice(_creditType: number | string): TransactionObject<BN>;

    setCreditPrice(
      _creditType: number | string,
      _price: number | string
    ): TransactionObject<void>;
  };
  events: {
    SetAddress: ContractEvent<{
      _addressType: string;
      _newAddress: string;
      0: string;
      1: string;
    }>;
    NewCreditPrice: ContractEvent<{
      _creditType: BN;
      _price: BN;
      0: BN;
      1: BN;
    }>;
    NewAriaUSDExchange: ContractEvent<BN>;
    CreditBuyed: ContractEvent<{
      buyer: string;
      _receiver: string;
      _creditType: BN;
      quantity: BN;
      0: string;
      1: string;
      2: BN;
      3: BN;
    }>;
    NewDispatchPercent: ContractEvent<{
      _percentInfra: BN;
      _percentBrandsProvider: BN;
      _percentOwnerProvider: BN;
      _arianeeProject: BN;
      _assetHolder: BN;
      0: BN;
      1: BN;
      2: BN;
      3: BN;
      4: BN;
    }>;
    CreditSpended: ContractEvent<{
      _type: BN;
      _quantity: BN;
      0: BN;
      1: BN;
    }>;
    Pause: ContractEvent<{}>;
    Unpause: ContractEvent<{}>;
    OwnershipTransferred: ContractEvent<{
      previousOwner: string;
      newOwner: string;
      0: string;
      1: string;
    }>;
    allEvents: (options?: EventOptions, cb?: Callback<EventLog>) => any;
  };
}
