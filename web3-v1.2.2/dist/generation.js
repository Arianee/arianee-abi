"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
function codegen(contract) {
  const template = `
  import BN from "bn.js";
  import { Contract,  ContractOptions, EventOptions } from "web3-eth-contract";
  import { EventLog } from "web3-core";
  import { TransactionObject, ContractEvent, Callback } from "./types";


  export class ${contract.name} extends Contract {
    constructor(jsonInterface: any[], address?: string, options?: ContractOptions);
    clone(): ${contract.name};
    methods: {
      ${codegenForFunctions(contract.functions)}
    };
    events: {
      ${codegenForEvents(contract.events)}
      allEvents: (
          options?: EventOptions,
          cb?: Callback<EventLog>
      ) => any;
    };
  }
  `;
    return template;
}
exports.codegen = codegen;
function codegenForFunctions(fns) {
    return lodash_1.values(fns)
        .map(v => v[0])
        .map(generateFunction)
        .join("\n");
}
function generateFunction(fn) {
    return `
  ${fn.name}(${generateInputTypes(fn.inputs)}): TransactionObject<${generateOutputTypes(fn.outputs)}>;
`;
}
function generateInputTypes(input) {
    if (input.length === 0) {
        return "";
    }
    return (input
        .map((input, index) => `${input.name || `arg${index}`}: ${generateInputType(input.type)}`)
        .join(", ") + ", ");
}
function generateOutputTypes(outputs) {
    if (outputs.length === 1) {
        return generateOutputType(outputs[0].type);
    }
    else {
        return `{
      ${outputs.map(t => t.name && `${t.name}: ${generateOutputType(t.type)}, `).join("")}
      ${outputs.map((t, i) => `${i}: ${generateOutputType(t.type)}`).join(", ")}
      }`;
    }
}
function codegenForEvents(events) {
    return lodash_1.values(events)
        .map(e => e[0])
        .map(generateEvent)
        .join("\n");
}
function generateEvent(event) {
    return `${event.name}: ContractEvent<${generateOutputTypes(event.inputs)}>`;
}
function generateInputType(evmType) {
    switch (evmType.type) {
        case "integer":
        case "uinteger":
            return "number | string";
        case "address":
            return "string";
        case "bytes":
        case "dynamic-bytes":
            return "string | number[]";
        case "array":
            return `(${generateInputType(evmType.itemType)})[]`;
        case "boolean":
            return "boolean";
        case "string":
            return "string";
        case "tuple":
            return generateTupleType(evmType, generateInputType);
    }
}
function generateOutputType(evmType) {
    switch (evmType.type) {
        case "integer":
            return "BN";
        case "uinteger":
            return "BN";
        case "address":
            return "string";
        case "void":
            return "void";
        case "bytes":
        case "dynamic-bytes":
            return "string";
        case "array":
            return `(${generateOutputType(evmType.itemType)})[]`;
        case "boolean":
            return "boolean";
        case "string":
            return "string";
        case "tuple":
            return generateTupleType(evmType, generateOutputType);
    }
}
function generateTupleType(tuple, generator) {
    return ("{" +
        tuple.components
            .map(component => `${component.name}: ${generator(component.type)}`)
            .join(", ") +
        "}");
}
