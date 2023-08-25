/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import Long = require("long");

export const protobufPackage = "pingpong";

export interface Ping {
  mID: number;
}

export interface Pong {
  mID: number;
}

function createBasePing(): Ping {
  return { mID: 0 };
}

export const Ping = {
  encode(message: Ping, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.mID !== 0) {
      writer.uint32(8).int64(message.mID);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Ping {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePing();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.mID = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Ping {
    return { mID: isSet(object.mID) ? Number(object.mID) : 0 };
  },

  toJSON(message: Ping): unknown {
    const obj: any = {};
    if (message.mID !== 0) {
      obj.mID = Math.round(message.mID);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Ping>, I>>(base?: I): Ping {
    return Ping.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Ping>, I>>(object: I): Ping {
    const message = createBasePing();
    message.mID = object.mID ?? 0;
    return message;
  },
};

function createBasePong(): Pong {
  return { mID: 0 };
}

export const Pong = {
  encode(message: Pong, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.mID !== 0) {
      writer.uint32(16).int64(message.mID);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Pong {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePong();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag !== 16) {
            break;
          }

          message.mID = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Pong {
    return { mID: isSet(object.mID) ? Number(object.mID) : 0 };
  },

  toJSON(message: Pong): unknown {
    const obj: any = {};
    if (message.mID !== 0) {
      obj.mID = Math.round(message.mID);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Pong>, I>>(base?: I): Pong {
    return Pong.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Pong>, I>>(object: I): Pong {
    const message = createBasePong();
    message.mID = object.mID ?? 0;
    return message;
  },
};

declare const self: any | undefined;
declare const window: any | undefined;
declare const global: any | undefined;
const tsProtoGlobalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new tsProtoGlobalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
