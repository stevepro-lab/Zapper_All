// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class Curve_ZapIn_General_V1_9__curvePoolsResult {
  value0: Address;
  value1: Address;
  value2: boolean;

  constructor(value0: Address, value1: Address, value2: boolean) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromAddress(this.value0));
    map.set("value1", ethereum.Value.fromAddress(this.value1));
    map.set("value2", ethereum.Value.fromBoolean(this.value2));
    return map;
  }
}

export class Curve_ZapIn_General_V1_9 extends ethereum.SmartContract {
  static bind(address: Address): Curve_ZapIn_General_V1_9 {
    return new Curve_ZapIn_General_V1_9("Curve_ZapIn_General_V1_9", address);
  }

  _owner(): Address {
    let result = super.call("_owner", "_owner():(address)", []);

    return result[0].toAddress();
  }

  try__owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("_owner", "_owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  curvePools(param0: Address): Curve_ZapIn_General_V1_9__curvePoolsResult {
    let result = super.call(
      "curvePools",
      "curvePools(address):(address,address,bool)",
      [ethereum.Value.fromAddress(param0)]
    );

    return new Curve_ZapIn_General_V1_9__curvePoolsResult(
      result[0].toAddress(),
      result[1].toAddress(),
      result[2].toBoolean()
    );
  }

  try_curvePools(
    param0: Address
  ): ethereum.CallResult<Curve_ZapIn_General_V1_9__curvePoolsResult> {
    let result = super.tryCall(
      "curvePools",
      "curvePools(address):(address,address,bool)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Curve_ZapIn_General_V1_9__curvePoolsResult(
        value[0].toAddress(),
        value[1].toAddress(),
        value[2].toBoolean()
      )
    );
  }

  getPoolTokens(swapAddress: Address): Array<Address> {
    let result = super.call(
      "getPoolTokens",
      "getPoolTokens(address):(address[4])",
      [ethereum.Value.fromAddress(swapAddress)]
    );

    return result[0].toAddressArray();
  }

  try_getPoolTokens(swapAddress: Address): ethereum.CallResult<Array<Address>> {
    let result = super.tryCall(
      "getPoolTokens",
      "getPoolTokens(address):(address[4])",
      [ethereum.Value.fromAddress(swapAddress)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddressArray());
  }

  goodwill(): i32 {
    let result = super.call("goodwill", "goodwill():(uint16)", []);

    return result[0].toI32();
  }

  try_goodwill(): ethereum.CallResult<i32> {
    let result = super.tryCall("goodwill", "goodwill():(uint16)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }

  intermediateStable(): Address {
    let result = super.call(
      "intermediateStable",
      "intermediateStable():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_intermediateStable(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "intermediateStable",
      "intermediateStable():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  isOwner(): boolean {
    let result = super.call("isOwner", "isOwner():(bool)", []);

    return result[0].toBoolean();
  }

  try_isOwner(): ethereum.CallResult<boolean> {
    let result = super.tryCall("isOwner", "isOwner():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  stopped(): boolean {
    let result = super.call("stopped", "stopped():(bool)", []);

    return result[0].toBoolean();
  }

  try_stopped(): ethereum.CallResult<boolean> {
    let result = super.tryCall("stopped", "stopped():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  zgoodwillAddress(): Address {
    let result = super.call(
      "zgoodwillAddress",
      "zgoodwillAddress():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_zgoodwillAddress(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "zgoodwillAddress",
      "zgoodwillAddress():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }
}

export class DefaultCall extends ethereum.Call {
  get inputs(): DefaultCall__Inputs {
    return new DefaultCall__Inputs(this);
  }

  get outputs(): DefaultCall__Outputs {
    return new DefaultCall__Outputs(this);
  }
}

export class DefaultCall__Inputs {
  _call: DefaultCall;

  constructor(call: DefaultCall) {
    this._call = call;
  }
}

export class DefaultCall__Outputs {
  _call: DefaultCall;

  constructor(call: DefaultCall) {
    this._call = call;
  }
}

export class ZapInCall extends ethereum.Call {
  get inputs(): ZapInCall__Inputs {
    return new ZapInCall__Inputs(this);
  }

  get outputs(): ZapInCall__Outputs {
    return new ZapInCall__Outputs(this);
  }
}

export class ZapInCall__Inputs {
  _call: ZapInCall;

  constructor(call: ZapInCall) {
    this._call = call;
  }

  get toWhomToIssue(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get fromToken(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get swapAddress(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get incomingTokenQty(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get minPoolTokens(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }
}

export class ZapInCall__Outputs {
  _call: ZapInCall;

  constructor(call: ZapInCall) {
    this._call = call;
  }

  get crvTokensBought(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class AddPoolCall extends ethereum.Call {
  get inputs(): AddPoolCall__Inputs {
    return new AddPoolCall__Inputs(this);
  }

  get outputs(): AddPoolCall__Outputs {
    return new AddPoolCall__Outputs(this);
  }
}

export class AddPoolCall__Inputs {
  _call: AddPoolCall;

  constructor(call: AddPoolCall) {
    this._call = call;
  }

  get swapAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get tokenAddress(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get poolTokens(): Array<Address> {
    return this._call.inputValues[2].value.toAddressArray();
  }

  get isMetaPool(): boolean {
    return this._call.inputValues[3].value.toBoolean();
  }
}

export class AddPoolCall__Outputs {
  _call: AddPoolCall;

  constructor(call: AddPoolCall) {
    this._call = call;
  }
}

export class InCaseTokengetsStuckCall extends ethereum.Call {
  get inputs(): InCaseTokengetsStuckCall__Inputs {
    return new InCaseTokengetsStuckCall__Inputs(this);
  }

  get outputs(): InCaseTokengetsStuckCall__Outputs {
    return new InCaseTokengetsStuckCall__Outputs(this);
  }
}

export class InCaseTokengetsStuckCall__Inputs {
  _call: InCaseTokengetsStuckCall;

  constructor(call: InCaseTokengetsStuckCall) {
    this._call = call;
  }

  get _TokenAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class InCaseTokengetsStuckCall__Outputs {
  _call: InCaseTokengetsStuckCall;

  constructor(call: InCaseTokengetsStuckCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class SetnewgoodwillCall extends ethereum.Call {
  get inputs(): SetnewgoodwillCall__Inputs {
    return new SetnewgoodwillCall__Inputs(this);
  }

  get outputs(): SetnewgoodwillCall__Outputs {
    return new SetnewgoodwillCall__Outputs(this);
  }
}

export class SetnewgoodwillCall__Inputs {
  _call: SetnewgoodwillCall;

  constructor(call: SetnewgoodwillCall) {
    this._call = call;
  }

  get _new_goodwill(): i32 {
    return this._call.inputValues[0].value.toI32();
  }
}

export class SetnewgoodwillCall__Outputs {
  _call: SetnewgoodwillCall;

  constructor(call: SetnewgoodwillCall) {
    this._call = call;
  }
}

export class SetnewzgoodwillAddressCall extends ethereum.Call {
  get inputs(): SetnewzgoodwillAddressCall__Inputs {
    return new SetnewzgoodwillAddressCall__Inputs(this);
  }

  get outputs(): SetnewzgoodwillAddressCall__Outputs {
    return new SetnewzgoodwillAddressCall__Outputs(this);
  }
}

export class SetnewzgoodwillAddressCall__Inputs {
  _call: SetnewzgoodwillAddressCall;

  constructor(call: SetnewzgoodwillAddressCall) {
    this._call = call;
  }

  get _new_zgoodwillAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetnewzgoodwillAddressCall__Outputs {
  _call: SetnewzgoodwillAddressCall;

  constructor(call: SetnewzgoodwillAddressCall) {
    this._call = call;
  }
}

export class ToggleContractActiveCall extends ethereum.Call {
  get inputs(): ToggleContractActiveCall__Inputs {
    return new ToggleContractActiveCall__Inputs(this);
  }

  get outputs(): ToggleContractActiveCall__Outputs {
    return new ToggleContractActiveCall__Outputs(this);
  }
}

export class ToggleContractActiveCall__Inputs {
  _call: ToggleContractActiveCall;

  constructor(call: ToggleContractActiveCall) {
    this._call = call;
  }
}

export class ToggleContractActiveCall__Outputs {
  _call: ToggleContractActiveCall;

  constructor(call: ToggleContractActiveCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class UpdateIntermediateStableCall extends ethereum.Call {
  get inputs(): UpdateIntermediateStableCall__Inputs {
    return new UpdateIntermediateStableCall__Inputs(this);
  }

  get outputs(): UpdateIntermediateStableCall__Outputs {
    return new UpdateIntermediateStableCall__Outputs(this);
  }
}

export class UpdateIntermediateStableCall__Inputs {
  _call: UpdateIntermediateStableCall;

  constructor(call: UpdateIntermediateStableCall) {
    this._call = call;
  }

  get newIntermediate(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class UpdateIntermediateStableCall__Outputs {
  _call: UpdateIntermediateStableCall;

  constructor(call: UpdateIntermediateStableCall) {
    this._call = call;
  }
}

export class UpdatePoolCall extends ethereum.Call {
  get inputs(): UpdatePoolCall__Inputs {
    return new UpdatePoolCall__Inputs(this);
  }

  get outputs(): UpdatePoolCall__Outputs {
    return new UpdatePoolCall__Outputs(this);
  }
}

export class UpdatePoolCall__Inputs {
  _call: UpdatePoolCall;

  constructor(call: UpdatePoolCall) {
    this._call = call;
  }

  get swapAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get tokenAddress(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get poolTokens(): Array<Address> {
    return this._call.inputValues[2].value.toAddressArray();
  }

  get isMetaPool(): boolean {
    return this._call.inputValues[3].value.toBoolean();
  }
}

export class UpdatePoolCall__Outputs {
  _call: UpdatePoolCall;

  constructor(call: UpdatePoolCall) {
    this._call = call;
  }
}

export class WithdrawCall extends ethereum.Call {
  get inputs(): WithdrawCall__Inputs {
    return new WithdrawCall__Inputs(this);
  }

  get outputs(): WithdrawCall__Outputs {
    return new WithdrawCall__Outputs(this);
  }
}

export class WithdrawCall__Inputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }
}

export class WithdrawCall__Outputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }
}