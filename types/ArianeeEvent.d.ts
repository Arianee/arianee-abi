/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import BN from "bn.js";
import { Contract, ContractOptions, EventOptions } from "web3-eth-contract";
import { EventLog } from "web3-core";
import { TransactionObject, ContractEvent, Callback } from "./types";

export class ArianeeEvent extends Contract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  );
  clone(): ArianeeEvent;
  methods: {
    idToPendingEvents(arg0: number | string): TransactionObject<BN>;

    tokenEventsList(
      arg0: number | string,
      arg1: number | string
    ): TransactionObject<BN>;

    create(
      _eventId: number | string,
      _tokenId: number | string,
      _imprint: string | number[],
      _uri: string,
      _reward: number | string,
      _provider: string
    ): TransactionObject<void>;

    pendingEventsLength(_tokenId: number | string): TransactionObject<BN>;

    unpause(): TransactionObject<void>;

    updateDestroyRequest(
      _eventId: number | string,
      _active: boolean
    ): TransactionObject<void>;

    accept(_eventId: number | string, _sender: string): TransactionObject<BN>;

    paused(): TransactionObject<boolean>;

    setStoreAddress(_storeAddress: string): TransactionObject<void>;

    getEvent(
      _eventId: number | string
    ): TransactionObject<{
      0: string;
      1: string;
      2: string;
      3: BN;
    }>;

    eventsLength(_tokenId: number | string): TransactionObject<BN>;

    pause(): TransactionObject<void>;

    owner(): TransactionObject<string>;

    destroy(_eventId: number | string): TransactionObject<void>;

    eventIdToToken(arg0: number | string): TransactionObject<BN>;

    idToTokenEventIndex(arg0: number | string): TransactionObject<BN>;

    validDestroyRequest(_eventId: number | string): TransactionObject<void>;

    refuse(_eventId: number | string, _sender: string): TransactionObject<BN>;

    pendingEvents(
      arg0: number | string,
      arg1: number | string
    ): TransactionObject<BN>;

    updateEventDestroyDelay(
      _newDelay: number | string
    ): TransactionObject<void>;

    transferOwnership(_newOwner: string): TransactionObject<void>;

    rewards(arg0: number | string): TransactionObject<BN>;
  };
  events: {
    EventCreated: ContractEvent<{
      _tokenId: BN;
      _eventId: BN;
      _imprint: string;
      _uri: string;
      _provider: string;
      0: BN;
      1: BN;
      2: string;
      3: string;
      4: string;
    }>;
    EventAccepted: ContractEvent<{
      _eventId: BN;
      _sender: string;
      0: BN;
      1: string;
    }>;
    EventRefused: ContractEvent<{
      _eventId: BN;
      _sender: string;
      0: BN;
      1: string;
    }>;
    EventDestroyed: ContractEvent<BN>;
    DestroyRequestUpdated: ContractEvent<{
      _eventId: BN;
      _active: boolean;
      0: BN;
      1: boolean;
    }>;
    EventDestroyDelayUpdated: ContractEvent<BN>;
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
