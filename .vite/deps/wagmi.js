import {
  Chi,
  HashMD,
  Maj,
  secp256k1,
  sha256
} from "./chunk-GWIBZ34G.js";
import {
  replaceEqualDeep,
  useInfiniteQuery,
  useMutation,
  useQuery,
  useQueryClient
} from "./chunk-HPN6G4W4.js";
import {
  require_react
} from "./chunk-E55NSNTN.js";
import {
  AbiDecodingDataSizeTooSmallError,
  AbiDecodingZeroDataError,
  AbiEventNotFoundError,
  AbiEventSignatureEmptyTopicsError,
  AbiEventSignatureNotFoundError,
  AtomicReadyWalletRejectedUpgradeError,
  AtomicityNotSupportedError,
  BaseError,
  BaseError2,
  BundleTooLargeError,
  BytesSizeMismatchError,
  CallExecutionError,
  ChainDisconnectedError,
  ChainMismatchError,
  ChainNotFoundError,
  ContractFunctionExecutionError,
  ContractFunctionRevertedError,
  ContractFunctionZeroDataError,
  DecodeLogDataMismatch,
  DecodeLogTopicsMismatch,
  DuplicateIdError,
  ExecutionRevertedError,
  FeePayerNonceMismatchError,
  HttpRequestError,
  IntegerOutOfRangeError,
  InternalRpcError,
  InvalidAddressError,
  InvalidInputRpcError,
  InvalidParamsRpcError,
  InvalidRequestRpcError,
  InvalidSerializableTransactionError,
  JsonRpcVersionUnsupportedError,
  LimitExceededRpcError,
  LruMap,
  MethodNotFoundRpcError,
  MethodNotSupportedRpcError,
  ParseRpcError,
  PositionOutOfBoundsError,
  ProviderDisconnectedError,
  RawContractError,
  ResourceNotFoundRpcError,
  ResourceUnavailableRpcError,
  ResponseBodyTooLargeError,
  RpcRequestError,
  SocketClosedError,
  SwitchChainError,
  TimeoutError,
  TransactionExecutionError,
  TransactionNotFoundError,
  TransactionReceiptNotFoundError,
  TransactionReceiptRevertedError,
  TransactionRejectedRpcError,
  UnauthorizedProviderError,
  UnknownBundleIdError,
  UnknownNodeError,
  UnknownRpcError,
  UnsupportedChainIdError,
  UnsupportedNonOptionalCapabilityError,
  UnsupportedProviderMethodError,
  UserRejectedRequestError,
  WaitForTransactionReceiptTimeoutError,
  WalletConnectSessionSettlementError,
  WebSocketRequestError,
  addressResolverAbi,
  assertRequest,
  bytesRegex,
  bytesToHex,
  call,
  checksumAddress,
  concat,
  concat2,
  concatHex,
  createBatchScheduler,
  createCursor,
  decodeAbiParameters,
  decodeFunctionResult,
  defineFormatter,
  deploylessCallViaBytecodeBytecode,
  encodeAbiParameters,
  encodeDeployData,
  encodeFunctionData,
  erc1271Abi,
  erc20Abi,
  erc6492SignatureValidatorAbi,
  erc6492SignatureValidatorByteCode,
  extract,
  format,
  formatAbiItem,
  formatAbiItem2,
  formatAbiParameters,
  formatBlockParameter,
  formatEther,
  formatGwei,
  formatTransactionRequest,
  from,
  from2,
  from3,
  fromBoolean,
  fromBytes,
  fromHex,
  fromHex2,
  fromNumber,
  fromString,
  fromString2,
  getAbiItem,
  getAbortError,
  getAddress,
  getCallError,
  getChainContractAddress,
  getNodeError,
  hexToBigInt,
  hexToBool,
  hexToBytes,
  hexToNumber,
  hexToString,
  integerRegex,
  isAbortError,
  isAddress,
  isAddressEqual,
  isHex,
  keccak256,
  keccak_256,
  localBatchGatewayUrl,
  multicall3Abi,
  multicall3Bytecode,
  numberToHex,
  pad,
  padLeft,
  padRight,
  parseAbiItem,
  parseAbiParameters,
  parseAccount,
  prettyPrint,
  serializeStateOverride,
  size,
  size2,
  size3,
  slice,
  slice2,
  slice3,
  sliceHex,
  stringToBytes,
  stringToHex,
  stringify,
  stringify2,
  textResolverAbi,
  toBigInt,
  toBoolean,
  toBytes,
  toEventSelector,
  toHex,
  toNumber,
  toNumber2,
  toRpc,
  toString,
  trim,
  trimLeft,
  trimLeft2,
  universalResolverResolveAbi,
  universalResolverReverseAbi,
  validate,
  validate2,
  withResolvers
} from "./chunk-RM6LUHYN.js";
import {
  clean,
  createHasher,
  rotl,
  utf8ToBytes
} from "./chunk-HEP75LRA.js";
import {
  __commonJS,
  __export,
  __toESM
} from "./chunk-4MBMRILA.js";

// node_modules/eventemitter3/index.js
var require_eventemitter3 = __commonJS({
  "node_modules/eventemitter3/index.js"(exports, module) {
    "use strict";
    var has = Object.prototype.hasOwnProperty;
    var prefix = "~";
    function Events() {
    }
    if (Object.create) {
      Events.prototype = /* @__PURE__ */ Object.create(null);
      if (!new Events().__proto__) prefix = false;
    }
    function EE(fn, context, once) {
      this.fn = fn;
      this.context = context;
      this.once = once || false;
    }
    function addListener(emitter, event, fn, context, once) {
      if (typeof fn !== "function") {
        throw new TypeError("The listener must be a function");
      }
      var listener = new EE(fn, context || emitter, once), evt = prefix ? prefix + event : event;
      if (!emitter._events[evt]) emitter._events[evt] = listener, emitter._eventsCount++;
      else if (!emitter._events[evt].fn) emitter._events[evt].push(listener);
      else emitter._events[evt] = [emitter._events[evt], listener];
      return emitter;
    }
    function clearEvent(emitter, evt) {
      if (--emitter._eventsCount === 0) emitter._events = new Events();
      else delete emitter._events[evt];
    }
    function EventEmitter2() {
      this._events = new Events();
      this._eventsCount = 0;
    }
    EventEmitter2.prototype.eventNames = function eventNames() {
      var names = [], events, name;
      if (this._eventsCount === 0) return names;
      for (name in events = this._events) {
        if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
      }
      if (Object.getOwnPropertySymbols) {
        return names.concat(Object.getOwnPropertySymbols(events));
      }
      return names;
    };
    EventEmitter2.prototype.listeners = function listeners(event) {
      var evt = prefix ? prefix + event : event, handlers = this._events[evt];
      if (!handlers) return [];
      if (handlers.fn) return [handlers.fn];
      for (var i = 0, l = handlers.length, ee = new Array(l); i < l; i++) {
        ee[i] = handlers[i].fn;
      }
      return ee;
    };
    EventEmitter2.prototype.listenerCount = function listenerCount(event) {
      var evt = prefix ? prefix + event : event, listeners = this._events[evt];
      if (!listeners) return 0;
      if (listeners.fn) return 1;
      return listeners.length;
    };
    EventEmitter2.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
      var evt = prefix ? prefix + event : event;
      if (!this._events[evt]) return false;
      var listeners = this._events[evt], len = arguments.length, args, i;
      if (listeners.fn) {
        if (listeners.once) this.removeListener(event, listeners.fn, void 0, true);
        switch (len) {
          case 1:
            return listeners.fn.call(listeners.context), true;
          case 2:
            return listeners.fn.call(listeners.context, a1), true;
          case 3:
            return listeners.fn.call(listeners.context, a1, a2), true;
          case 4:
            return listeners.fn.call(listeners.context, a1, a2, a3), true;
          case 5:
            return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
          case 6:
            return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
        }
        for (i = 1, args = new Array(len - 1); i < len; i++) {
          args[i - 1] = arguments[i];
        }
        listeners.fn.apply(listeners.context, args);
      } else {
        var length = listeners.length, j;
        for (i = 0; i < length; i++) {
          if (listeners[i].once) this.removeListener(event, listeners[i].fn, void 0, true);
          switch (len) {
            case 1:
              listeners[i].fn.call(listeners[i].context);
              break;
            case 2:
              listeners[i].fn.call(listeners[i].context, a1);
              break;
            case 3:
              listeners[i].fn.call(listeners[i].context, a1, a2);
              break;
            case 4:
              listeners[i].fn.call(listeners[i].context, a1, a2, a3);
              break;
            default:
              if (!args) for (j = 1, args = new Array(len - 1); j < len; j++) {
                args[j - 1] = arguments[j];
              }
              listeners[i].fn.apply(listeners[i].context, args);
          }
        }
      }
      return true;
    };
    EventEmitter2.prototype.on = function on(event, fn, context) {
      return addListener(this, event, fn, context, false);
    };
    EventEmitter2.prototype.once = function once(event, fn, context) {
      return addListener(this, event, fn, context, true);
    };
    EventEmitter2.prototype.removeListener = function removeListener(event, fn, context, once) {
      var evt = prefix ? prefix + event : event;
      if (!this._events[evt]) return this;
      if (!fn) {
        clearEvent(this, evt);
        return this;
      }
      var listeners = this._events[evt];
      if (listeners.fn) {
        if (listeners.fn === fn && (!once || listeners.once) && (!context || listeners.context === context)) {
          clearEvent(this, evt);
        }
      } else {
        for (var i = 0, events = [], length = listeners.length; i < length; i++) {
          if (listeners[i].fn !== fn || once && !listeners[i].once || context && listeners[i].context !== context) {
            events.push(listeners[i]);
          }
        }
        if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;
        else clearEvent(this, evt);
      }
      return this;
    };
    EventEmitter2.prototype.removeAllListeners = function removeAllListeners(event) {
      var evt;
      if (event) {
        evt = prefix ? prefix + event : event;
        if (this._events[evt]) clearEvent(this, evt);
      } else {
        this._events = new Events();
        this._eventsCount = 0;
      }
      return this;
    };
    EventEmitter2.prototype.off = EventEmitter2.prototype.removeListener;
    EventEmitter2.prototype.addListener = EventEmitter2.prototype.on;
    EventEmitter2.prefixed = prefix;
    EventEmitter2.EventEmitter = EventEmitter2;
    if ("undefined" !== typeof module) {
      module.exports = EventEmitter2;
    }
  }
});

// node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js
var require_use_sync_external_store_shim_development = __commonJS({
  "node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js"(exports) {
    "use strict";
    (function() {
      function is(x, y) {
        return x === y && (0 !== x || 1 / x === 1 / y) || x !== x && y !== y;
      }
      function useSyncExternalStore$2(subscribe, getSnapshot) {
        didWarnOld18Alpha || void 0 === React.startTransition || (didWarnOld18Alpha = true, console.error(
          "You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."
        ));
        var value = getSnapshot();
        if (!didWarnUncachedGetSnapshot) {
          var cachedValue = getSnapshot();
          objectIs(value, cachedValue) || (console.error(
            "The result of getSnapshot should be cached to avoid an infinite loop"
          ), didWarnUncachedGetSnapshot = true);
        }
        cachedValue = useState({
          inst: { value, getSnapshot }
        });
        var inst = cachedValue[0].inst, forceUpdate = cachedValue[1];
        useLayoutEffect(
          function() {
            inst.value = value;
            inst.getSnapshot = getSnapshot;
            checkIfSnapshotChanged(inst) && forceUpdate({ inst });
          },
          [subscribe, value, getSnapshot]
        );
        useEffect10(
          function() {
            checkIfSnapshotChanged(inst) && forceUpdate({ inst });
            return subscribe(function() {
              checkIfSnapshotChanged(inst) && forceUpdate({ inst });
            });
          },
          [subscribe]
        );
        useDebugValue(value);
        return value;
      }
      function checkIfSnapshotChanged(inst) {
        var latestGetSnapshot = inst.getSnapshot;
        inst = inst.value;
        try {
          var nextValue = latestGetSnapshot();
          return !objectIs(inst, nextValue);
        } catch (error) {
          return true;
        }
      }
      function useSyncExternalStore$1(subscribe, getSnapshot) {
        return getSnapshot();
      }
      "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
      var React = require_react(), objectIs = "function" === typeof Object.is ? Object.is : is, useState = React.useState, useEffect10 = React.useEffect, useLayoutEffect = React.useLayoutEffect, useDebugValue = React.useDebugValue, didWarnOld18Alpha = false, didWarnUncachedGetSnapshot = false, shim = "undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement ? useSyncExternalStore$1 : useSyncExternalStore$2;
      exports.useSyncExternalStore = void 0 !== React.useSyncExternalStore ? React.useSyncExternalStore : shim;
      "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    })();
  }
});

// node_modules/use-sync-external-store/shim/index.js
var require_shim = __commonJS({
  "node_modules/use-sync-external-store/shim/index.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_use_sync_external_store_shim_development();
    }
  }
});

// node_modules/use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.development.js
var require_with_selector_development = __commonJS({
  "node_modules/use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.development.js"(exports) {
    "use strict";
    (function() {
      function is(x, y) {
        return x === y && (0 !== x || 1 / x === 1 / y) || x !== x && y !== y;
      }
      "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
      var React = require_react(), shim = require_shim(), objectIs = "function" === typeof Object.is ? Object.is : is, useSyncExternalStore5 = shim.useSyncExternalStore, useRef9 = React.useRef, useEffect10 = React.useEffect, useMemo3 = React.useMemo, useDebugValue = React.useDebugValue;
      exports.useSyncExternalStoreWithSelector = function(subscribe, getSnapshot, getServerSnapshot, selector, isEqual2) {
        var instRef = useRef9(null);
        if (null === instRef.current) {
          var inst = { hasValue: false, value: null };
          instRef.current = inst;
        } else inst = instRef.current;
        instRef = useMemo3(
          function() {
            function memoizedSelector(nextSnapshot) {
              if (!hasMemo) {
                hasMemo = true;
                memoizedSnapshot = nextSnapshot;
                nextSnapshot = selector(nextSnapshot);
                if (void 0 !== isEqual2 && inst.hasValue) {
                  var currentSelection = inst.value;
                  if (isEqual2(currentSelection, nextSnapshot))
                    return memoizedSelection = currentSelection;
                }
                return memoizedSelection = nextSnapshot;
              }
              currentSelection = memoizedSelection;
              if (objectIs(memoizedSnapshot, nextSnapshot))
                return currentSelection;
              var nextSelection = selector(nextSnapshot);
              if (void 0 !== isEqual2 && isEqual2(currentSelection, nextSelection))
                return memoizedSnapshot = nextSnapshot, currentSelection;
              memoizedSnapshot = nextSnapshot;
              return memoizedSelection = nextSelection;
            }
            var hasMemo = false, memoizedSnapshot, memoizedSelection, maybeGetServerSnapshot = void 0 === getServerSnapshot ? null : getServerSnapshot;
            return [
              function() {
                return memoizedSelector(getSnapshot());
              },
              null === maybeGetServerSnapshot ? void 0 : function() {
                return memoizedSelector(maybeGetServerSnapshot());
              }
            ];
          },
          [getSnapshot, getServerSnapshot, selector, isEqual2]
        );
        var value = useSyncExternalStore5(subscribe, instRef[0], instRef[1]);
        useEffect10(
          function() {
            inst.hasValue = true;
            inst.value = value;
          },
          [value]
        );
        useDebugValue(value);
        return value;
      };
      "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    })();
  }
});

// node_modules/use-sync-external-store/shim/with-selector.js
var require_with_selector = __commonJS({
  "node_modules/use-sync-external-store/shim/with-selector.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_with_selector_development();
    }
  }
});

// node_modules/wagmi/dist/esm/context.js
var import_react2 = __toESM(require_react(), 1);

// node_modules/viem/_esm/utils/ens/errors.js
function isNullUniversalResolverError(err) {
  var _a, _b, _c, _d, _e, _f;
  if (!(err instanceof BaseError))
    return false;
  const cause = err.walk((e) => e instanceof ContractFunctionRevertedError);
  if (!(cause instanceof ContractFunctionRevertedError))
    return false;
  if (((_a = cause.data) == null ? void 0 : _a.errorName) === "HttpError")
    return true;
  if (((_b = cause.data) == null ? void 0 : _b.errorName) === "ResolverError")
    return true;
  if (((_c = cause.data) == null ? void 0 : _c.errorName) === "ResolverNotContract")
    return true;
  if (((_d = cause.data) == null ? void 0 : _d.errorName) === "ResolverNotFound")
    return true;
  if (((_e = cause.data) == null ? void 0 : _e.errorName) === "ReverseAddressMismatch")
    return true;
  if (((_f = cause.data) == null ? void 0 : _f.errorName) === "UnsupportedResolverProfile")
    return true;
  return false;
}

// node_modules/viem/_esm/utils/ens/encodedLabelToLabelhash.js
function encodedLabelToLabelhash(label) {
  if (label.length !== 66)
    return null;
  if (label.indexOf("[") !== 0)
    return null;
  if (label.indexOf("]") !== 65)
    return null;
  const hash2 = `0x${label.slice(1, 65)}`;
  if (!isHex(hash2))
    return null;
  return hash2;
}

// node_modules/viem/_esm/utils/ens/namehash.js
function namehash(name) {
  let result = new Uint8Array(32).fill(0);
  if (!name)
    return bytesToHex(result);
  const labels = name.split(".");
  for (let i = labels.length - 1; i >= 0; i -= 1) {
    const hashFromEncodedLabel = encodedLabelToLabelhash(labels[i]);
    const hashed = hashFromEncodedLabel ? toBytes(hashFromEncodedLabel) : keccak256(stringToBytes(labels[i]), "bytes");
    result = keccak256(concat([result, hashed]), "bytes");
  }
  return bytesToHex(result);
}

// node_modules/viem/_esm/utils/ens/encodeLabelhash.js
function encodeLabelhash(hash2) {
  return `[${hash2.slice(2)}]`;
}

// node_modules/viem/_esm/utils/ens/labelhash.js
function labelhash(label) {
  const result = new Uint8Array(32).fill(0);
  if (!label)
    return bytesToHex(result);
  return encodedLabelToLabelhash(label) || keccak256(stringToBytes(label));
}

// node_modules/viem/_esm/utils/ens/packetToBytes.js
function packetToBytes(packet) {
  const value = packet.replace(/^\.|\.$/gm, "");
  if (value.length === 0)
    return new Uint8Array(1);
  const bytes = new Uint8Array(stringToBytes(value).byteLength + 2);
  let offset = 0;
  const list = value.split(".");
  for (let i = 0; i < list.length; i++) {
    let encoded = stringToBytes(list[i]);
    if (encoded.byteLength > 255)
      encoded = stringToBytes(encodeLabelhash(labelhash(list[i])));
    bytes[offset] = encoded.length;
    bytes.set(encoded, offset + 1);
    offset += encoded.length + 1;
  }
  if (bytes.byteLength !== offset + 1)
    return bytes.slice(0, offset + 1);
  return bytes;
}

// node_modules/viem/_esm/utils/getAction.js
function getAction(client, actionFn, name) {
  const action_implicit = client[actionFn.name];
  if (typeof action_implicit === "function")
    return action_implicit;
  const action_explicit = client[name];
  if (typeof action_explicit === "function")
    return action_explicit;
  return (params) => actionFn(client, params);
}

// node_modules/viem/_esm/utils/errors/getContractError.js
var EXECUTION_REVERTED_ERROR_CODE = 3;
function getContractError(err, { abi: abi2, address, args, docsPath: docsPath3, functionName, sender }) {
  const error = err instanceof RawContractError ? err : err instanceof BaseError ? err.walk((err2) => typeof err2 === "object" && err2 !== null && "data" in err2) || err.walk() : {};
  const { code, data, details, message, shortMessage } = error;
  const cause = (() => {
    if (err instanceof AbiDecodingZeroDataError)
      return new ContractFunctionZeroDataError({ functionName, cause: err });
    if ([EXECUTION_REVERTED_ERROR_CODE, InternalRpcError.code].includes(code) && (data || details || message || shortMessage) || code === InvalidInputRpcError.code && details === "execution reverted" && data) {
      return new ContractFunctionRevertedError({
        abi: abi2,
        data: typeof data === "object" ? data.data : data,
        functionName,
        message: error instanceof RpcRequestError ? details : shortMessage ?? message,
        cause: err
      });
    }
    return err;
  })();
  return new ContractFunctionExecutionError(cause, {
    abi: abi2,
    args,
    contractAddress: address,
    docsPath: docsPath3,
    functionName,
    sender
  });
}

// node_modules/viem/_esm/actions/public/readContract.js
async function readContract(client, parameters) {
  const { abi: abi2, address, args, functionName, ...rest } = parameters;
  const calldata = encodeFunctionData({
    abi: abi2,
    args,
    functionName
  });
  try {
    const { data } = await getAction(client, call, "call")({
      ...rest,
      data: calldata,
      to: address
    });
    return decodeFunctionResult({
      abi: abi2,
      args,
      functionName,
      data: data || "0x"
    });
  } catch (error) {
    throw getContractError(error, {
      abi: abi2,
      address,
      args,
      docsPath: "/docs/contract/readContract",
      functionName
    });
  }
}

// node_modules/viem/_esm/actions/ens/getEnsAddress.js
async function getEnsAddress(client, parameters) {
  const { blockNumber, blockTag, coinType, name, gatewayUrls, strict } = parameters;
  const { chain: chain2 } = client;
  const universalResolverAddress = (() => {
    if (parameters.universalResolverAddress)
      return parameters.universalResolverAddress;
    if (!chain2)
      throw new Error("client chain not configured. universalResolverAddress is required.");
    return getChainContractAddress({
      blockNumber,
      chain: chain2,
      contract: "ensUniversalResolver"
    });
  })();
  const tlds = chain2 == null ? void 0 : chain2.ensTlds;
  if (tlds && !tlds.some((tld) => name.endsWith(tld)))
    return null;
  const args = (() => {
    if (coinType != null)
      return [namehash(name), BigInt(coinType)];
    return [namehash(name)];
  })();
  try {
    const functionData = encodeFunctionData({
      abi: addressResolverAbi,
      functionName: "addr",
      args
    });
    const readContractParameters = {
      address: universalResolverAddress,
      abi: universalResolverResolveAbi,
      functionName: "resolveWithGateways",
      args: [
        toHex(packetToBytes(name)),
        functionData,
        gatewayUrls ?? [localBatchGatewayUrl]
      ],
      blockNumber,
      blockTag
    };
    const readContractAction = getAction(client, readContract, "readContract");
    const res = await readContractAction(readContractParameters);
    if (res[0] === "0x")
      return null;
    const address = decodeAddress({ coinType, data: res[0], args });
    if (address === "0x")
      return null;
    if (trim(address) === "0x00")
      return null;
    return address;
  } catch (err) {
    if (strict)
      throw err;
    if (isNullUniversalResolverError(err))
      return null;
    throw err;
  }
}
function decodeAddress({ coinType, data, args }) {
  try {
    return decodeFunctionResult({
      abi: addressResolverAbi,
      args,
      functionName: "addr",
      data
    });
  } catch (err) {
    if (coinType == null)
      throw err;
    const address = trim(data);
    if (size(address) === 20)
      return getAddress(address);
    throw err;
  }
}

// node_modules/ox/_esm/core/Base64.js
var encoder = new TextEncoder();
var decoder = new TextDecoder();
var integerToCharacter = Object.fromEntries(Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/").map((a, i) => [i, a.charCodeAt(0)]));
var characterToInteger = {
  ...Object.fromEntries(Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/").map((a, i) => [a.charCodeAt(0), i])),
  ["=".charCodeAt(0)]: 0,
  ["-".charCodeAt(0)]: 62,
  ["_".charCodeAt(0)]: 63
};
function fromBytes2(value, options = {}) {
  const { pad: pad2 = true, url = false } = options;
  const encoded = new Uint8Array(Math.ceil(value.length / 3) * 4);
  for (let i = 0, j = 0; j < value.length; i += 4, j += 3) {
    const y = (value[j] << 16) + (value[j + 1] << 8) + (value[j + 2] | 0);
    encoded[i] = integerToCharacter[y >> 18];
    encoded[i + 1] = integerToCharacter[y >> 12 & 63];
    encoded[i + 2] = integerToCharacter[y >> 6 & 63];
    encoded[i + 3] = integerToCharacter[y & 63];
  }
  const k = value.length % 3;
  const end = Math.floor(value.length / 3) * 4 + (k && k + 1);
  let base642 = decoder.decode(new Uint8Array(encoded.buffer, 0, end));
  if (pad2 && k === 1)
    base642 += "==";
  if (pad2 && k === 2)
    base642 += "=";
  if (url)
    base642 = base642.replaceAll("+", "-").replaceAll("/", "_");
  return base642;
}
function fromString3(value, options = {}) {
  return fromBytes2(fromString(value), options);
}
function toBytes2(value) {
  const base642 = value.replace(/=+$/, "");
  const size6 = base642.length;
  const decoded = new Uint8Array(size6 + 3);
  encoder.encodeInto(base642 + "===", decoded);
  for (let i = 0, j = 0; i < base642.length; i += 4, j += 3) {
    const x = (characterToInteger[decoded[i]] << 18) + (characterToInteger[decoded[i + 1]] << 12) + (characterToInteger[decoded[i + 2]] << 6) + characterToInteger[decoded[i + 3]];
    decoded[j] = x >> 16;
    decoded[j + 1] = x >> 8 & 255;
    decoded[j + 2] = x & 255;
  }
  const decodedSize = (size6 >> 2) * 3 + (size6 % 4 && size6 % 4 - 1);
  return new Uint8Array(decoded.buffer, 0, decodedSize);
}
function toString2(value) {
  return toString(toBytes2(value));
}

// node_modules/viem/_esm/errors/ens.js
var EnsAvatarInvalidMetadataError = class extends BaseError {
  constructor({ data }) {
    super("Unable to extract image from metadata. The metadata may be malformed or invalid.", {
      metaMessages: [
        "- Metadata must be a JSON object with at least an `image`, `image_url` or `image_data` property.",
        "",
        `Provided data: ${JSON.stringify(data)}`
      ],
      name: "EnsAvatarInvalidMetadataError"
    });
  }
};
var EnsAvatarInvalidNftUriError = class extends BaseError {
  constructor({ reason }) {
    super(`ENS NFT avatar URI is invalid. ${reason}`, {
      name: "EnsAvatarInvalidNftUriError"
    });
  }
};
var EnsAvatarUriResolutionError = class extends BaseError {
  constructor({ uri }) {
    super(`Unable to resolve ENS avatar URI "${uri}". The URI may be malformed, invalid, or does not respond with a valid image.`, { name: "EnsAvatarUriResolutionError" });
  }
};
var EnsAvatarUnsupportedNamespaceError = class extends BaseError {
  constructor({ namespace }) {
    super(`ENS NFT avatar namespace "${namespace}" is not supported. Must be "erc721" or "erc1155".`, { name: "EnsAvatarUnsupportedNamespaceError" });
  }
};

// node_modules/viem/_esm/utils/ens/avatar/utils.js
var networkRegex = /(?<protocol>https?:\/\/[^/]*|ipfs:\/|ipns:\/|ar:\/)?(?<root>\/)?(?<subpath>ipfs\/|ipns\/)?(?<target>[\w\-.]+)(?<subtarget>\/.*)?/;
var ipfsHashRegex = /^(Qm[1-9A-HJ-NP-Za-km-z]{44,}|b[A-Za-z2-7]{58,}|B[A-Z2-7]{58,}|z[1-9A-HJ-NP-Za-km-z]{48,}|F[0-9A-F]{50,})(\/(?<target>[\w\-.]+))?(?<subtarget>\/.*)?$/;
var base64Regex = /^data:([a-zA-Z\-/+]*);base64,([^"].*)/;
var dataURIRegex = /^data:([a-zA-Z\-/+]*)?(;[a-zA-Z0-9].*?)?(,)/;
async function isImageUri(uri) {
  try {
    const res = await fetch(uri, { method: "HEAD" });
    if (res.status === 200) {
      const contentType = res.headers.get("content-type");
      return contentType == null ? void 0 : contentType.startsWith("image/");
    }
    return false;
  } catch (error) {
    if (typeof error === "object" && typeof error.response !== "undefined") {
      return false;
    }
    if (!Object.hasOwn(globalThis, "Image"))
      return false;
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => {
        resolve(true);
      };
      img.onerror = () => {
        resolve(false);
      };
      img.src = uri;
    });
  }
}
function getGateway(custom2, defaultGateway) {
  if (!custom2)
    return defaultGateway;
  if (custom2.endsWith("/"))
    return custom2.slice(0, -1);
  return custom2;
}
function resolveAvatarUri({ uri, gatewayUrls }) {
  const isEncoded = base64Regex.test(uri);
  if (isEncoded)
    return { uri, isOnChain: true, isEncoded };
  const ipfsGateway = getGateway(gatewayUrls == null ? void 0 : gatewayUrls.ipfs, "https://ipfs.io");
  const arweaveGateway = getGateway(gatewayUrls == null ? void 0 : gatewayUrls.arweave, "https://arweave.net");
  const networkRegexMatch = uri.match(networkRegex);
  const { protocol, subpath, target, subtarget = "" } = (networkRegexMatch == null ? void 0 : networkRegexMatch.groups) || {};
  const isIPNS = protocol === "ipns:/" || subpath === "ipns/";
  const isIPFS = protocol === "ipfs:/" || subpath === "ipfs/" || ipfsHashRegex.test(uri);
  if (uri.startsWith("http") && !isIPNS && !isIPFS) {
    let replacedUri = uri;
    if (gatewayUrls == null ? void 0 : gatewayUrls.arweave)
      replacedUri = uri.replace(/https:\/\/arweave.net/g, gatewayUrls == null ? void 0 : gatewayUrls.arweave);
    return { uri: replacedUri, isOnChain: false, isEncoded: false };
  }
  if ((isIPNS || isIPFS) && target) {
    return {
      uri: `${ipfsGateway}/${isIPNS ? "ipns" : "ipfs"}/${target}${subtarget}`,
      isOnChain: false,
      isEncoded: false
    };
  }
  if (protocol === "ar:/" && target) {
    return {
      uri: `${arweaveGateway}/${target}${subtarget || ""}`,
      isOnChain: false,
      isEncoded: false
    };
  }
  let parsedUri = uri.replace(dataURIRegex, "");
  if (parsedUri.startsWith("<svg")) {
    parsedUri = `data:image/svg+xml;base64,${fromString3(parsedUri)}`;
  }
  if (parsedUri.startsWith("data:") || parsedUri.startsWith("{")) {
    return {
      uri: parsedUri,
      isOnChain: true,
      isEncoded: false
    };
  }
  throw new EnsAvatarUriResolutionError({ uri });
}
function getJsonImage(data) {
  if (typeof data !== "object" || !("image" in data) && !("image_url" in data) && !("image_data" in data)) {
    throw new EnsAvatarInvalidMetadataError({ data });
  }
  return data.image || data.image_url || data.image_data;
}
async function getMetadataAvatarUri({ gatewayUrls, uri }) {
  try {
    const res = await fetch(uri).then((res2) => res2.json());
    const image = await parseAvatarUri({
      gatewayUrls,
      uri: getJsonImage(res)
    });
    return image;
  } catch {
    throw new EnsAvatarUriResolutionError({ uri });
  }
}
async function parseAvatarUri({ gatewayUrls, uri }) {
  const { uri: resolvedURI, isOnChain } = resolveAvatarUri({ uri, gatewayUrls });
  if (isOnChain)
    return resolvedURI;
  const isImage = await isImageUri(resolvedURI);
  if (isImage)
    return resolvedURI;
  throw new EnsAvatarUriResolutionError({ uri });
}
function parseNftUri(uri_) {
  let uri = uri_;
  if (uri.startsWith("did:nft:")) {
    uri = uri.replace("did:nft:", "").replace(/_/g, "/");
  }
  const [reference, asset_namespace, tokenID] = uri.split("/");
  const [eip_namespace, chainID] = reference.split(":");
  const [erc_namespace, contractAddress] = asset_namespace.split(":");
  if (!eip_namespace || eip_namespace.toLowerCase() !== "eip155")
    throw new EnsAvatarInvalidNftUriError({ reason: "Only EIP-155 supported" });
  if (!chainID)
    throw new EnsAvatarInvalidNftUriError({ reason: "Chain ID not found" });
  if (!contractAddress)
    throw new EnsAvatarInvalidNftUriError({
      reason: "Contract address not found"
    });
  if (!tokenID)
    throw new EnsAvatarInvalidNftUriError({ reason: "Token ID not found" });
  if (!erc_namespace)
    throw new EnsAvatarInvalidNftUriError({ reason: "ERC namespace not found" });
  return {
    chainID: Number.parseInt(chainID, 10),
    namespace: erc_namespace.toLowerCase(),
    contractAddress,
    tokenID
  };
}
async function getNftTokenUri(client, { nft }) {
  if (nft.namespace === "erc721") {
    return readContract(client, {
      address: nft.contractAddress,
      abi: [
        {
          name: "tokenURI",
          type: "function",
          stateMutability: "view",
          inputs: [{ name: "tokenId", type: "uint256" }],
          outputs: [{ name: "", type: "string" }]
        }
      ],
      functionName: "tokenURI",
      args: [BigInt(nft.tokenID)]
    });
  }
  if (nft.namespace === "erc1155") {
    return readContract(client, {
      address: nft.contractAddress,
      abi: [
        {
          name: "uri",
          type: "function",
          stateMutability: "view",
          inputs: [{ name: "_id", type: "uint256" }],
          outputs: [{ name: "", type: "string" }]
        }
      ],
      functionName: "uri",
      args: [BigInt(nft.tokenID)]
    });
  }
  throw new EnsAvatarUnsupportedNamespaceError({ namespace: nft.namespace });
}
function getNftMetadataUri({ nft, uri }) {
  const tokenId = nft.namespace === "erc1155" ? numberToHex(BigInt(nft.tokenID), { size: 32 }).slice(2) : nft.tokenID;
  return uri.replace(/(?:0x)?{id}/, tokenId);
}

// node_modules/viem/_esm/utils/ens/avatar/parseAvatarRecord.js
async function parseAvatarRecord(client, { gatewayUrls, record }) {
  if (/eip155:/i.test(record))
    return parseNftAvatarUri(client, { gatewayUrls, record });
  return parseAvatarUri({ uri: record, gatewayUrls });
}
async function parseNftAvatarUri(client, { gatewayUrls, record }) {
  const nft = parseNftUri(record);
  const nftUri = await getNftTokenUri(client, { nft });
  const { uri: resolvedNftUri, isOnChain, isEncoded } = resolveAvatarUri({ uri: nftUri, gatewayUrls });
  if (isOnChain && (resolvedNftUri.includes("data:application/json;base64,") || resolvedNftUri.startsWith("{"))) {
    const encodedJson = isEncoded ? (
      // if it is encoded, decode it
      toString2(resolvedNftUri.replace("data:application/json;base64,", "").replace(/\s/g, ""))
    ) : (
      // if it isn't encoded assume it is a JSON string, but it could be anything (it will error if it is)
      resolvedNftUri
    );
    const decoded = JSON.parse(encodedJson);
    return parseAvatarUri({ uri: getJsonImage(decoded), gatewayUrls });
  }
  return getMetadataAvatarUri({
    gatewayUrls,
    uri: getNftMetadataUri({ nft, uri: resolvedNftUri })
  });
}

// node_modules/viem/_esm/actions/ens/getEnsText.js
async function getEnsText(client, parameters) {
  const { blockNumber, blockTag, key, name, gatewayUrls, strict } = parameters;
  const { chain: chain2 } = client;
  const universalResolverAddress = (() => {
    if (parameters.universalResolverAddress)
      return parameters.universalResolverAddress;
    if (!chain2)
      throw new Error("client chain not configured. universalResolverAddress is required.");
    return getChainContractAddress({
      blockNumber,
      chain: chain2,
      contract: "ensUniversalResolver"
    });
  })();
  const tlds = chain2 == null ? void 0 : chain2.ensTlds;
  if (tlds && !tlds.some((tld) => name.endsWith(tld)))
    return null;
  try {
    const readContractParameters = {
      address: universalResolverAddress,
      abi: universalResolverResolveAbi,
      args: [
        toHex(packetToBytes(name)),
        encodeFunctionData({
          abi: textResolverAbi,
          functionName: "text",
          args: [namehash(name), key]
        }),
        gatewayUrls ?? [localBatchGatewayUrl]
      ],
      functionName: "resolveWithGateways",
      blockNumber,
      blockTag
    };
    const readContractAction = getAction(client, readContract, "readContract");
    const res = await readContractAction(readContractParameters);
    if (res[0] === "0x")
      return null;
    const record = decodeFunctionResult({
      abi: textResolverAbi,
      functionName: "text",
      data: res[0]
    });
    return record === "" ? null : record;
  } catch (err) {
    if (strict)
      throw err;
    if (isNullUniversalResolverError(err))
      return null;
    throw err;
  }
}

// node_modules/viem/_esm/actions/ens/getEnsAvatar.js
async function getEnsAvatar(client, { blockNumber, blockTag, assetGatewayUrls, name, gatewayUrls, strict, universalResolverAddress }) {
  const record = await getAction(client, getEnsText, "getEnsText")({
    blockNumber,
    blockTag,
    key: "avatar",
    name,
    universalResolverAddress,
    gatewayUrls,
    strict
  });
  if (!record)
    return null;
  try {
    return await parseAvatarRecord(client, {
      record,
      gatewayUrls: assetGatewayUrls
    });
  } catch {
    return null;
  }
}

// node_modules/viem/_esm/actions/ens/getEnsName.js
async function getEnsName(client, parameters) {
  const { address, blockNumber, blockTag, coinType = 60n, gatewayUrls, strict } = parameters;
  const { chain: chain2 } = client;
  const universalResolverAddress = (() => {
    if (parameters.universalResolverAddress)
      return parameters.universalResolverAddress;
    if (!chain2)
      throw new Error("client chain not configured. universalResolverAddress is required.");
    return getChainContractAddress({
      blockNumber,
      chain: chain2,
      contract: "ensUniversalResolver"
    });
  })();
  try {
    const readContractParameters = {
      address: universalResolverAddress,
      abi: universalResolverReverseAbi,
      args: [address, coinType, gatewayUrls ?? [localBatchGatewayUrl]],
      functionName: "reverseWithGateways",
      blockNumber,
      blockTag
    };
    const readContractAction = getAction(client, readContract, "readContract");
    const [name] = await readContractAction(readContractParameters);
    return name || null;
  } catch (err) {
    if (strict)
      throw err;
    if (isNullUniversalResolverError(err))
      return null;
    throw err;
  }
}

// node_modules/viem/_esm/actions/ens/getEnsResolver.js
async function getEnsResolver(client, parameters) {
  const { blockNumber, blockTag, name } = parameters;
  const { chain: chain2 } = client;
  const universalResolverAddress = (() => {
    if (parameters.universalResolverAddress)
      return parameters.universalResolverAddress;
    if (!chain2)
      throw new Error("client chain not configured. universalResolverAddress is required.");
    return getChainContractAddress({
      blockNumber,
      chain: chain2,
      contract: "ensUniversalResolver"
    });
  })();
  const tlds = chain2 == null ? void 0 : chain2.ensTlds;
  if (tlds && !tlds.some((tld) => name.endsWith(tld)))
    throw new Error(`${name} is not a valid ENS TLD (${tlds == null ? void 0 : tlds.join(", ")}) for chain "${chain2.name}" (id: ${chain2.id}).`);
  const [resolverAddress] = await getAction(client, readContract, "readContract")({
    address: universalResolverAddress,
    abi: [
      {
        inputs: [{ type: "bytes" }],
        name: "findResolver",
        outputs: [
          { type: "address" },
          { type: "bytes32" },
          { type: "uint256" }
        ],
        stateMutability: "view",
        type: "function"
      }
    ],
    functionName: "findResolver",
    args: [toHex(packetToBytes(name))],
    blockNumber,
    blockTag
  });
  return resolverAddress;
}

// node_modules/viem/_esm/actions/public/createAccessList.js
async function createAccessList(client, args) {
  var _a, _b, _c;
  const { account: account_ = client.account, blockNumber, blockTag = "latest", blobs, data, gas, gasPrice, maxFeePerBlobGas, maxFeePerGas, maxPriorityFeePerGas, to, value, ...rest } = args;
  const account = account_ ? parseAccount(account_) : void 0;
  try {
    assertRequest(args);
    const blockNumberHex = typeof blockNumber === "bigint" ? numberToHex(blockNumber) : void 0;
    const block = blockNumberHex || blockTag;
    const chainFormat = (_c = (_b = (_a = client.chain) == null ? void 0 : _a.formatters) == null ? void 0 : _b.transactionRequest) == null ? void 0 : _c.format;
    const format3 = chainFormat || formatTransactionRequest;
    const request = format3({
      // Pick out extra data that might exist on the chain's transaction request type.
      ...extract(rest, { format: chainFormat }),
      account,
      blobs,
      data,
      gas,
      gasPrice,
      maxFeePerBlobGas,
      maxFeePerGas,
      maxPriorityFeePerGas,
      to,
      value
    }, "createAccessList");
    const response = await client.request({
      method: "eth_createAccessList",
      params: [request, block]
    });
    if (response.error)
      throw new BaseError(response.error, { details: response.error });
    return {
      accessList: response.accessList,
      gasUsed: BigInt(response.gasUsed)
    };
  } catch (err) {
    throw getCallError(err, {
      ...args,
      account,
      chain: client.chain
    });
  }
}

// node_modules/viem/_esm/utils/filters/createFilterRequestScope.js
function createFilterRequestScope(client, { method }) {
  var _a, _b;
  const requestMap = {};
  if (client.transport.type === "fallback")
    (_b = (_a = client.transport).onResponse) == null ? void 0 : _b.call(_a, ({ method: method_, response: id, status, transport }) => {
      if (status === "success" && method === method_)
        requestMap[id] = transport.request;
    });
  return (id) => requestMap[id] || client.request;
}

// node_modules/viem/_esm/actions/public/createBlockFilter.js
async function createBlockFilter(client) {
  const getRequest = createFilterRequestScope(client, {
    method: "eth_newBlockFilter"
  });
  const id = await client.request({
    method: "eth_newBlockFilter"
  });
  return { id, request: getRequest(id), type: "block" };
}

// node_modules/viem/_esm/errors/log.js
var FilterTypeNotSupportedError = class extends BaseError {
  constructor(type) {
    super(`Filter type "${type}" is not supported.`, {
      name: "FilterTypeNotSupportedError"
    });
  }
};

// node_modules/viem/_esm/utils/abi/encodeEventTopics.js
var docsPath = "/docs/contract/encodeEventTopics";
function encodeEventTopics(parameters) {
  var _a;
  const { abi: abi2, eventName, args } = parameters;
  let abiItem = abi2[0];
  if (eventName) {
    const item = getAbiItem({ abi: abi2, name: eventName });
    if (!item)
      throw new AbiEventNotFoundError(eventName, { docsPath });
    abiItem = item;
  }
  if (abiItem.type !== "event")
    throw new AbiEventNotFoundError(void 0, { docsPath });
  let topics = [];
  if (args && "inputs" in abiItem) {
    const indexedInputs = (_a = abiItem.inputs) == null ? void 0 : _a.filter((param) => "indexed" in param && param.indexed);
    const args_ = Array.isArray(args) ? args : Object.values(args).length > 0 ? (indexedInputs == null ? void 0 : indexedInputs.map((x) => args[x.name])) ?? [] : [];
    if (args_.length > 0) {
      topics = (indexedInputs == null ? void 0 : indexedInputs.map((param, i) => {
        if (Array.isArray(args_[i]))
          return args_[i].map((_, j) => encodeArg({ param, value: args_[i][j] }));
        return typeof args_[i] !== "undefined" && args_[i] !== null ? encodeArg({ param, value: args_[i] }) : null;
      })) ?? [];
    }
  }
  if (abiItem.anonymous)
    return topics;
  const definition = formatAbiItem(abiItem);
  const signature = toEventSelector(definition);
  return [signature, ...topics];
}
function encodeArg({ param, value }) {
  if (param.type === "string")
    return keccak256(stringToBytes(value));
  if (param.type === "bytes")
    return keccak256(toBytes(value));
  if (param.type === "tuple" || param.type.match(/^(.*)\[(\d+)?\]$/))
    throw new FilterTypeNotSupportedError(param.type);
  return encodeAbiParameters([param], [value]);
}

// node_modules/viem/_esm/actions/public/createContractEventFilter.js
async function createContractEventFilter(client, parameters) {
  const { address, abi: abi2, args, eventName, fromBlock, strict, toBlock } = parameters;
  const getRequest = createFilterRequestScope(client, {
    method: "eth_newFilter"
  });
  const topics = eventName ? encodeEventTopics({
    abi: abi2,
    args,
    eventName
  }) : void 0;
  const id = await client.request({
    method: "eth_newFilter",
    params: [
      {
        address,
        fromBlock: typeof fromBlock === "bigint" ? numberToHex(fromBlock) : fromBlock,
        toBlock: typeof toBlock === "bigint" ? numberToHex(toBlock) : toBlock,
        topics
      }
    ]
  });
  return {
    abi: abi2,
    args,
    eventName,
    id,
    request: getRequest(id),
    strict: Boolean(strict),
    type: "event"
  };
}

// node_modules/viem/_esm/actions/public/createEventFilter.js
async function createEventFilter(client, { address, args, event, events: events_, fromBlock, strict, toBlock } = {}) {
  const events = events_ ?? (event ? [event] : void 0);
  const getRequest = createFilterRequestScope(client, {
    method: "eth_newFilter"
  });
  let topics = [];
  if (events) {
    const encoded = events.flatMap((event2) => encodeEventTopics({
      abi: [event2],
      eventName: event2.name,
      args
    }));
    topics = [encoded];
    if (event)
      topics = topics[0];
  }
  const id = await client.request({
    method: "eth_newFilter",
    params: [
      {
        address,
        fromBlock: typeof fromBlock === "bigint" ? numberToHex(fromBlock) : fromBlock,
        toBlock: typeof toBlock === "bigint" ? numberToHex(toBlock) : toBlock,
        ...topics.length ? { topics } : {}
      }
    ]
  });
  return {
    abi: events,
    args,
    eventName: event ? event.name : void 0,
    fromBlock,
    id,
    request: getRequest(id),
    strict: Boolean(strict),
    toBlock,
    type: "event"
  };
}

// node_modules/viem/_esm/actions/public/createPendingTransactionFilter.js
async function createPendingTransactionFilter(client) {
  const getRequest = createFilterRequestScope(client, {
    method: "eth_newPendingTransactionFilter"
  });
  const id = await client.request({
    method: "eth_newPendingTransactionFilter"
  });
  return { id, request: getRequest(id), type: "transaction" };
}

// node_modules/viem/_esm/accounts/utils/publicKeyToAddress.js
function publicKeyToAddress(publicKey) {
  const address = keccak256(`0x${publicKey.substring(4)}`).substring(26);
  return checksumAddress(`0x${address}`);
}

// node_modules/viem/_esm/utils/signature/recoverPublicKey.js
async function recoverPublicKey({ hash: hash2, signature }) {
  const hashHex = isHex(hash2) ? hash2 : toHex(hash2);
  const { secp256k1: secp256k12 } = await import("./secp256k1-E6QAHRO2.js");
  const signature_ = (() => {
    if (typeof signature === "object" && "r" in signature && "s" in signature) {
      const { r, s, v, yParity } = signature;
      const yParityOrV2 = Number(yParity ?? v);
      const recoveryBit2 = toRecoveryBit(yParityOrV2);
      return new secp256k12.Signature(hexToBigInt(r), hexToBigInt(s)).addRecoveryBit(recoveryBit2);
    }
    const signatureHex = isHex(signature) ? signature : toHex(signature);
    if (size(signatureHex) !== 65)
      throw new Error("invalid signature length");
    const yParityOrV = hexToNumber(`0x${signatureHex.slice(130)}`);
    const recoveryBit = toRecoveryBit(yParityOrV);
    return secp256k12.Signature.fromCompact(signatureHex.substring(2, 130)).addRecoveryBit(recoveryBit);
  })();
  const publicKey = signature_.recoverPublicKey(hashHex.substring(2)).toHex(false);
  return `0x${publicKey}`;
}
function toRecoveryBit(yParityOrV) {
  if (yParityOrV === 0 || yParityOrV === 1)
    return yParityOrV;
  if (yParityOrV === 27)
    return 0;
  if (yParityOrV === 28)
    return 1;
  throw new Error("Invalid yParityOrV value");
}

// node_modules/viem/_esm/utils/signature/recoverAddress.js
async function recoverAddress({ hash: hash2, signature }) {
  return publicKeyToAddress(await recoverPublicKey({ hash: hash2, signature }));
}

// node_modules/viem/_esm/utils/encoding/toRlp.js
function toRlp(bytes, to = "hex") {
  const encodable = getEncodable(bytes);
  const cursor = createCursor(new Uint8Array(encodable.length));
  encodable.encode(cursor);
  if (to === "hex")
    return bytesToHex(cursor.bytes);
  return cursor.bytes;
}
function getEncodable(bytes) {
  if (Array.isArray(bytes))
    return getEncodableList(bytes.map((x) => getEncodable(x)));
  return getEncodableBytes(bytes);
}
function getEncodableList(list) {
  const bodyLength = list.reduce((acc, x) => acc + x.length, 0);
  const sizeOfBodyLength = getSizeOfLength(bodyLength);
  const length = (() => {
    if (bodyLength <= 55)
      return 1 + bodyLength;
    return 1 + sizeOfBodyLength + bodyLength;
  })();
  return {
    length,
    encode(cursor) {
      if (bodyLength <= 55) {
        cursor.pushByte(192 + bodyLength);
      } else {
        cursor.pushByte(192 + 55 + sizeOfBodyLength);
        if (sizeOfBodyLength === 1)
          cursor.pushUint8(bodyLength);
        else if (sizeOfBodyLength === 2)
          cursor.pushUint16(bodyLength);
        else if (sizeOfBodyLength === 3)
          cursor.pushUint24(bodyLength);
        else
          cursor.pushUint32(bodyLength);
      }
      for (const { encode: encode4 } of list) {
        encode4(cursor);
      }
    }
  };
}
function getEncodableBytes(bytesOrHex) {
  const bytes = typeof bytesOrHex === "string" ? hexToBytes(bytesOrHex) : bytesOrHex;
  const sizeOfBytesLength = getSizeOfLength(bytes.length);
  const length = (() => {
    if (bytes.length === 1 && bytes[0] < 128)
      return 1;
    if (bytes.length <= 55)
      return 1 + bytes.length;
    return 1 + sizeOfBytesLength + bytes.length;
  })();
  return {
    length,
    encode(cursor) {
      if (bytes.length === 1 && bytes[0] < 128) {
        cursor.pushBytes(bytes);
      } else if (bytes.length <= 55) {
        cursor.pushByte(128 + bytes.length);
        cursor.pushBytes(bytes);
      } else {
        cursor.pushByte(128 + 55 + sizeOfBytesLength);
        if (sizeOfBytesLength === 1)
          cursor.pushUint8(bytes.length);
        else if (sizeOfBytesLength === 2)
          cursor.pushUint16(bytes.length);
        else if (sizeOfBytesLength === 3)
          cursor.pushUint24(bytes.length);
        else
          cursor.pushUint32(bytes.length);
        cursor.pushBytes(bytes);
      }
    }
  };
}
function getSizeOfLength(length) {
  if (length < 2 ** 8)
    return 1;
  if (length < 2 ** 16)
    return 2;
  if (length < 2 ** 24)
    return 3;
  if (length < 2 ** 32)
    return 4;
  throw new BaseError("Length is too large.");
}

// node_modules/viem/_esm/utils/authorization/hashAuthorization.js
function hashAuthorization(parameters) {
  const { chainId, nonce, to } = parameters;
  const address = parameters.contractAddress ?? parameters.address;
  const hash2 = keccak256(concatHex([
    "0x05",
    toRlp([
      chainId ? numberToHex(chainId) : "0x",
      address,
      nonce ? numberToHex(nonce) : "0x"
    ])
  ]));
  if (to === "bytes")
    return hexToBytes(hash2);
  return hash2;
}

// node_modules/viem/_esm/utils/authorization/recoverAuthorizationAddress.js
async function recoverAuthorizationAddress(parameters) {
  const { authorization, signature } = parameters;
  return recoverAddress({
    hash: hashAuthorization(authorization),
    signature: signature ?? authorization
  });
}

// node_modules/viem/_esm/errors/estimateGas.js
var EstimateGasExecutionError = class extends BaseError {
  constructor(cause, { account, docsPath: docsPath3, chain: chain2, data, gas, gasPrice, maxFeePerGas, maxPriorityFeePerGas, nonce, to, value }) {
    var _a;
    const prettyArgs = prettyPrint({
      from: account == null ? void 0 : account.address,
      to,
      value: typeof value !== "undefined" && `${formatEther(value)} ${((_a = chain2 == null ? void 0 : chain2.nativeCurrency) == null ? void 0 : _a.symbol) || "ETH"}`,
      data,
      gas,
      gasPrice: typeof gasPrice !== "undefined" && `${formatGwei(gasPrice)} gwei`,
      maxFeePerGas: typeof maxFeePerGas !== "undefined" && `${formatGwei(maxFeePerGas)} gwei`,
      maxPriorityFeePerGas: typeof maxPriorityFeePerGas !== "undefined" && `${formatGwei(maxPriorityFeePerGas)} gwei`,
      nonce
    });
    super(cause.shortMessage, {
      cause,
      docsPath: docsPath3,
      metaMessages: [
        ...cause.metaMessages ? [...cause.metaMessages, " "] : [],
        "Estimate Gas Arguments:",
        prettyArgs
      ].filter(Boolean),
      name: "EstimateGasExecutionError"
    });
    Object.defineProperty(this, "cause", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    this.cause = cause;
  }
};

// node_modules/viem/_esm/utils/errors/getEstimateGasError.js
function getEstimateGasError(err, { docsPath: docsPath3, ...args }) {
  const cause = (() => {
    const cause2 = getNodeError(err, args);
    if (cause2 instanceof UnknownNodeError)
      return err;
    return cause2;
  })();
  return new EstimateGasExecutionError(cause, {
    docsPath: docsPath3,
    ...args
  });
}

// node_modules/viem/_esm/errors/fee.js
var BaseFeeScalarError = class extends BaseError {
  constructor() {
    super("`baseFeeMultiplier` must be greater than 1.", {
      name: "BaseFeeScalarError"
    });
  }
};
var Eip1559FeesNotSupportedError = class extends BaseError {
  constructor() {
    super("Chain does not support EIP-1559 fees.", {
      name: "Eip1559FeesNotSupportedError"
    });
  }
};
var MaxFeePerGasTooLowError = class extends BaseError {
  constructor({ maxPriorityFeePerGas }) {
    super(`\`maxFeePerGas\` cannot be less than the \`maxPriorityFeePerGas\` (${formatGwei(maxPriorityFeePerGas)} gwei).`, { name: "MaxFeePerGasTooLowError" });
  }
};

// node_modules/viem/_esm/errors/block.js
var BlockNotFoundError = class extends BaseError {
  constructor({ blockHash, blockNumber }) {
    let identifier = "Block";
    if (blockHash)
      identifier = `Block at hash "${blockHash}"`;
    if (blockNumber)
      identifier = `Block at number "${blockNumber}"`;
    super(`${identifier} could not be found.`, { name: "BlockNotFoundError" });
  }
};

// node_modules/viem/_esm/utils/formatters/transaction.js
var transactionType = {
  "0x0": "legacy",
  "0x1": "eip2930",
  "0x2": "eip1559",
  "0x3": "eip4844",
  "0x4": "eip7702"
};
function formatTransaction(transaction, _) {
  const transaction_ = {
    ...transaction,
    blockHash: transaction.blockHash ? transaction.blockHash : null,
    blockNumber: transaction.blockNumber ? BigInt(transaction.blockNumber) : null,
    ...transaction.blockTimestamp != null && {
      blockTimestamp: BigInt(transaction.blockTimestamp)
    },
    chainId: transaction.chainId ? hexToNumber(transaction.chainId) : void 0,
    gas: transaction.gas ? BigInt(transaction.gas) : void 0,
    gasPrice: transaction.gasPrice ? BigInt(transaction.gasPrice) : void 0,
    maxFeePerBlobGas: transaction.maxFeePerBlobGas ? BigInt(transaction.maxFeePerBlobGas) : void 0,
    maxFeePerGas: transaction.maxFeePerGas ? BigInt(transaction.maxFeePerGas) : void 0,
    maxPriorityFeePerGas: transaction.maxPriorityFeePerGas ? BigInt(transaction.maxPriorityFeePerGas) : void 0,
    nonce: transaction.nonce ? hexToNumber(transaction.nonce) : void 0,
    to: transaction.to ? transaction.to : null,
    transactionIndex: transaction.transactionIndex ? Number(transaction.transactionIndex) : null,
    type: transaction.type ? transactionType[transaction.type] : void 0,
    typeHex: transaction.type ? transaction.type : void 0,
    value: transaction.value ? BigInt(transaction.value) : void 0,
    v: transaction.v ? BigInt(transaction.v) : void 0
  };
  if (transaction.authorizationList)
    transaction_.authorizationList = formatAuthorizationList(transaction.authorizationList);
  transaction_.yParity = (() => {
    if (transaction.yParity)
      return Number(transaction.yParity);
    if (typeof transaction_.v === "bigint") {
      if (transaction_.v === 0n || transaction_.v === 27n)
        return 0;
      if (transaction_.v === 1n || transaction_.v === 28n)
        return 1;
      if (transaction_.v >= 35n)
        return transaction_.v % 2n === 0n ? 1 : 0;
    }
    return void 0;
  })();
  if (transaction_.type === "legacy") {
    delete transaction_.accessList;
    delete transaction_.maxFeePerBlobGas;
    delete transaction_.maxFeePerGas;
    delete transaction_.maxPriorityFeePerGas;
    delete transaction_.yParity;
  }
  if (transaction_.type === "eip2930") {
    delete transaction_.maxFeePerBlobGas;
    delete transaction_.maxFeePerGas;
    delete transaction_.maxPriorityFeePerGas;
  }
  if (transaction_.type === "eip1559")
    delete transaction_.maxFeePerBlobGas;
  return transaction_;
}
var defineTransaction = defineFormatter("transaction", formatTransaction);
function formatAuthorizationList(authorizationList) {
  return authorizationList.map((authorization) => ({
    address: authorization.address,
    chainId: Number(authorization.chainId),
    nonce: Number(authorization.nonce),
    r: authorization.r,
    s: authorization.s,
    yParity: Number(authorization.yParity)
  }));
}

// node_modules/viem/_esm/utils/formatters/block.js
function formatBlock(block, _) {
  const transactions = (block.transactions ?? []).map((transaction) => {
    if (typeof transaction === "string")
      return transaction;
    return formatTransaction(transaction);
  });
  return {
    ...block,
    baseFeePerGas: block.baseFeePerGas ? BigInt(block.baseFeePerGas) : null,
    blobGasUsed: block.blobGasUsed ? BigInt(block.blobGasUsed) : void 0,
    difficulty: block.difficulty ? BigInt(block.difficulty) : void 0,
    excessBlobGas: block.excessBlobGas ? BigInt(block.excessBlobGas) : void 0,
    gasLimit: block.gasLimit ? BigInt(block.gasLimit) : void 0,
    gasUsed: block.gasUsed ? BigInt(block.gasUsed) : void 0,
    hash: block.hash ? block.hash : null,
    logsBloom: block.logsBloom ? block.logsBloom : null,
    nonce: block.nonce ? block.nonce : null,
    number: block.number ? BigInt(block.number) : null,
    size: block.size ? BigInt(block.size) : void 0,
    timestamp: block.timestamp ? BigInt(block.timestamp) : void 0,
    transactions,
    totalDifficulty: block.totalDifficulty ? BigInt(block.totalDifficulty) : null
  };
}
var defineBlock = defineFormatter("block", formatBlock);

// node_modules/viem/_esm/actions/public/getBlock.js
async function getBlock(client, { blockHash, blockNumber, blockTag = client.experimental_blockTag ?? "latest", includeTransactions: includeTransactions_ } = {}) {
  var _a, _b, _c;
  const includeTransactions = includeTransactions_ ?? false;
  const blockNumberHex = blockNumber !== void 0 ? numberToHex(blockNumber) : void 0;
  let block = null;
  if (blockHash) {
    block = await client.request({
      method: "eth_getBlockByHash",
      params: [blockHash, includeTransactions]
    }, { dedupe: true });
  } else {
    block = await client.request({
      method: "eth_getBlockByNumber",
      params: [blockNumberHex || blockTag, includeTransactions]
    }, { dedupe: Boolean(blockNumberHex) });
  }
  if (!block)
    throw new BlockNotFoundError({ blockHash, blockNumber });
  const format3 = ((_c = (_b = (_a = client.chain) == null ? void 0 : _a.formatters) == null ? void 0 : _b.block) == null ? void 0 : _c.format) || formatBlock;
  return format3(block, "getBlock");
}

// node_modules/viem/_esm/actions/public/getGasPrice.js
async function getGasPrice(client) {
  const gasPrice = await client.request({
    method: "eth_gasPrice"
  });
  return BigInt(gasPrice);
}

// node_modules/viem/_esm/actions/public/estimateMaxPriorityFeePerGas.js
async function estimateMaxPriorityFeePerGas(client, args) {
  return internal_estimateMaxPriorityFeePerGas(client, args);
}
async function internal_estimateMaxPriorityFeePerGas(client, args) {
  var _a, _b;
  const { block: block_, chain: chain2 = client.chain, request } = args || {};
  try {
    const maxPriorityFeePerGas = ((_a = chain2 == null ? void 0 : chain2.fees) == null ? void 0 : _a.maxPriorityFeePerGas) ?? ((_b = chain2 == null ? void 0 : chain2.fees) == null ? void 0 : _b.defaultPriorityFee);
    if (typeof maxPriorityFeePerGas === "function") {
      const block = block_ || await getAction(client, getBlock, "getBlock")({});
      const maxPriorityFeePerGas_ = await maxPriorityFeePerGas({
        block,
        client,
        request
      });
      if (maxPriorityFeePerGas_ === null)
        throw new Error();
      return maxPriorityFeePerGas_;
    }
    if (typeof maxPriorityFeePerGas !== "undefined")
      return maxPriorityFeePerGas;
    const maxPriorityFeePerGasHex = await client.request({
      method: "eth_maxPriorityFeePerGas"
    });
    return hexToBigInt(maxPriorityFeePerGasHex);
  } catch {
    const [block, gasPrice] = await Promise.all([
      block_ ? Promise.resolve(block_) : getAction(client, getBlock, "getBlock")({}),
      getAction(client, getGasPrice, "getGasPrice")({})
    ]);
    if (typeof block.baseFeePerGas !== "bigint")
      throw new Eip1559FeesNotSupportedError();
    const maxPriorityFeePerGas = gasPrice - block.baseFeePerGas;
    if (maxPriorityFeePerGas < 0n)
      return 0n;
    return maxPriorityFeePerGas;
  }
}

// node_modules/viem/_esm/actions/public/estimateFeesPerGas.js
async function estimateFeesPerGas(client, args) {
  return internal_estimateFeesPerGas(client, args);
}
async function internal_estimateFeesPerGas(client, args) {
  var _a, _b;
  const { block: block_, chain: chain2 = client.chain, request, type = "eip1559" } = args || {};
  const baseFeeMultiplier = await (async () => {
    var _a2, _b2;
    if (typeof ((_a2 = chain2 == null ? void 0 : chain2.fees) == null ? void 0 : _a2.baseFeeMultiplier) === "function")
      return chain2.fees.baseFeeMultiplier({
        block: block_,
        client,
        request
      });
    return ((_b2 = chain2 == null ? void 0 : chain2.fees) == null ? void 0 : _b2.baseFeeMultiplier) ?? 1.2;
  })();
  if (baseFeeMultiplier < 1)
    throw new BaseFeeScalarError();
  const decimals = ((_a = baseFeeMultiplier.toString().split(".")[1]) == null ? void 0 : _a.length) ?? 0;
  const denominator = 10 ** decimals;
  const multiply = (base) => base * BigInt(Math.round(baseFeeMultiplier * denominator)) / BigInt(denominator);
  const block = block_ ? block_ : await getAction(client, getBlock, "getBlock")({});
  if (typeof ((_b = chain2 == null ? void 0 : chain2.fees) == null ? void 0 : _b.estimateFeesPerGas) === "function") {
    const fees = await chain2.fees.estimateFeesPerGas({
      block: block_,
      client,
      multiply,
      request,
      type
    });
    if (fees !== null)
      return fees;
  }
  if (type === "eip1559") {
    if (typeof block.baseFeePerGas !== "bigint")
      throw new Eip1559FeesNotSupportedError();
    const maxPriorityFeePerGas = typeof (request == null ? void 0 : request.maxPriorityFeePerGas) === "bigint" ? request.maxPriorityFeePerGas : await internal_estimateMaxPriorityFeePerGas(client, {
      block,
      chain: chain2,
      request
    });
    const baseFeePerGas = multiply(block.baseFeePerGas);
    const maxFeePerGas = (request == null ? void 0 : request.maxFeePerGas) ?? baseFeePerGas + maxPriorityFeePerGas;
    return {
      maxFeePerGas,
      maxPriorityFeePerGas
    };
  }
  const gasPrice = (request == null ? void 0 : request.gasPrice) ?? multiply(await getAction(client, getGasPrice, "getGasPrice")({}));
  return {
    gasPrice
  };
}

// node_modules/viem/_esm/actions/public/getTransactionCount.js
async function getTransactionCount(client, { address, blockHash, blockNumber, blockTag = "latest", requireCanonical }) {
  const block = formatBlockParameter({
    blockHash,
    blockNumber,
    blockTag,
    requireCanonical
  });
  const count = await client.request({
    method: "eth_getTransactionCount",
    params: [address, block]
  }, {
    dedupe: typeof blockNumber === "bigint" || blockHash !== void 0
  });
  return hexToNumber(count);
}

// node_modules/viem/_esm/utils/blob/blobsToCommitments.js
function blobsToCommitments(parameters) {
  const { kzg } = parameters;
  const to = parameters.to ?? (typeof parameters.blobs[0] === "string" ? "hex" : "bytes");
  const blobs = typeof parameters.blobs[0] === "string" ? parameters.blobs.map((x) => hexToBytes(x)) : parameters.blobs;
  const commitments = [];
  for (const blob of blobs)
    commitments.push(Uint8Array.from(kzg.blobToKzgCommitment(blob)));
  return to === "bytes" ? commitments : commitments.map((x) => bytesToHex(x));
}

// node_modules/viem/_esm/utils/blob/blobsToProofs.js
function blobsToProofs(parameters) {
  const { kzg } = parameters;
  const to = parameters.to ?? (typeof parameters.blobs[0] === "string" ? "hex" : "bytes");
  const blobs = typeof parameters.blobs[0] === "string" ? parameters.blobs.map((x) => hexToBytes(x)) : parameters.blobs;
  const commitments = typeof parameters.commitments[0] === "string" ? parameters.commitments.map((x) => hexToBytes(x)) : parameters.commitments;
  const proofs = [];
  for (let i = 0; i < blobs.length; i++) {
    const blob = blobs[i];
    const commitment = commitments[i];
    proofs.push(Uint8Array.from(kzg.computeBlobKzgProof(blob, commitment)));
  }
  return to === "bytes" ? proofs : proofs.map((x) => bytesToHex(x));
}

// node_modules/@noble/hashes/esm/sha256.js
var sha2562 = sha256;

// node_modules/viem/_esm/utils/hash/sha256.js
function sha2563(value, to_) {
  const to = to_ || "hex";
  const bytes = sha2562(isHex(value, { strict: false }) ? toBytes(value) : value);
  if (to === "bytes")
    return bytes;
  return toHex(bytes);
}

// node_modules/viem/_esm/utils/blob/commitmentToVersionedHash.js
function commitmentToVersionedHash(parameters) {
  const { commitment, version: version3 = 1 } = parameters;
  const to = parameters.to ?? (typeof commitment === "string" ? "hex" : "bytes");
  const versionedHash = sha2563(commitment, "bytes");
  versionedHash.set([version3], 0);
  return to === "bytes" ? versionedHash : bytesToHex(versionedHash);
}

// node_modules/viem/_esm/utils/blob/commitmentsToVersionedHashes.js
function commitmentsToVersionedHashes(parameters) {
  const { commitments, version: version3 } = parameters;
  const to = parameters.to ?? (typeof commitments[0] === "string" ? "hex" : "bytes");
  const hashes = [];
  for (const commitment of commitments) {
    hashes.push(commitmentToVersionedHash({
      commitment,
      to,
      version: version3
    }));
  }
  return hashes;
}

// node_modules/viem/_esm/constants/blob.js
var blobsPerTransaction = 6;
var bytesPerFieldElement = 32;
var fieldElementsPerBlob = 4096;
var bytesPerBlob = bytesPerFieldElement * fieldElementsPerBlob;
var maxBytesPerTransaction = bytesPerBlob * blobsPerTransaction - // terminator byte (0x80).
1 - // zero byte (0x00) appended to each field element.
1 * fieldElementsPerBlob * blobsPerTransaction;

// node_modules/viem/_esm/errors/blob.js
var BlobSizeTooLargeError = class extends BaseError {
  constructor({ maxSize, size: size6 }) {
    super("Blob size is too large.", {
      metaMessages: [`Max: ${maxSize} bytes`, `Given: ${size6} bytes`],
      name: "BlobSizeTooLargeError"
    });
  }
};
var EmptyBlobError = class extends BaseError {
  constructor() {
    super("Blob data must not be empty.", { name: "EmptyBlobError" });
  }
};

// node_modules/viem/_esm/utils/blob/toBlobs.js
function toBlobs(parameters) {
  const to = parameters.to ?? (typeof parameters.data === "string" ? "hex" : "bytes");
  const data = typeof parameters.data === "string" ? hexToBytes(parameters.data) : parameters.data;
  const size_ = size(data);
  if (!size_)
    throw new EmptyBlobError();
  if (size_ > maxBytesPerTransaction)
    throw new BlobSizeTooLargeError({
      maxSize: maxBytesPerTransaction,
      size: size_
    });
  const blobs = [];
  let active = true;
  let position = 0;
  while (active) {
    const blob = createCursor(new Uint8Array(bytesPerBlob));
    let size6 = 0;
    while (size6 < fieldElementsPerBlob) {
      const bytes = data.slice(position, position + (bytesPerFieldElement - 1));
      blob.pushByte(0);
      blob.pushBytes(bytes);
      if (bytes.length < 31) {
        blob.pushByte(128);
        active = false;
        break;
      }
      size6++;
      position += 31;
    }
    blobs.push(blob);
  }
  return to === "bytes" ? blobs.map((x) => x.bytes) : blobs.map((x) => bytesToHex(x.bytes));
}

// node_modules/viem/_esm/utils/blob/toBlobSidecars.js
function toBlobSidecars(parameters) {
  const { data, kzg, to } = parameters;
  const blobs = parameters.blobs ?? toBlobs({ data, to });
  const commitments = parameters.commitments ?? blobsToCommitments({ blobs, kzg, to });
  const proofs = parameters.proofs ?? blobsToProofs({ blobs, commitments, kzg, to });
  const sidecars = [];
  for (let i = 0; i < blobs.length; i++)
    sidecars.push({
      blob: blobs[i],
      commitment: commitments[i],
      proof: proofs[i]
    });
  return sidecars;
}

// node_modules/viem/_esm/utils/transaction/getTransactionType.js
function getTransactionType(transaction) {
  if (transaction.type)
    return transaction.type;
  if (typeof transaction.authorizationList !== "undefined")
    return "eip7702";
  if (typeof transaction.blobs !== "undefined" || typeof transaction.blobVersionedHashes !== "undefined" || typeof transaction.maxFeePerBlobGas !== "undefined" || typeof transaction.sidecars !== "undefined")
    return "eip4844";
  if (typeof transaction.maxFeePerGas !== "undefined" || typeof transaction.maxPriorityFeePerGas !== "undefined") {
    return "eip1559";
  }
  if (typeof transaction.gasPrice !== "undefined") {
    if (typeof transaction.accessList !== "undefined")
      return "eip2930";
    return "legacy";
  }
  throw new InvalidSerializableTransactionError({ transaction });
}

// node_modules/viem/_esm/utils/errors/getTransactionError.js
function getTransactionError(err, { docsPath: docsPath3, ...args }) {
  const cause = (() => {
    const cause2 = getNodeError(err, args);
    if (cause2 instanceof UnknownNodeError)
      return err;
    return cause2;
  })();
  return new TransactionExecutionError(cause, {
    docsPath: docsPath3,
    ...args
  });
}

// node_modules/viem/_esm/actions/public/getChainId.js
async function getChainId(client) {
  const chainIdHex = await client.request({
    method: "eth_chainId"
  }, { dedupe: true });
  return hexToNumber(chainIdHex);
}

// node_modules/viem/_esm/actions/public/fillTransaction.js
async function fillTransaction(client, parameters) {
  var _a, _b, _c, _d, _e;
  const { account = client.account, accessList, authorizationList, chain: chain2 = client.chain, blobVersionedHashes, blobs, data, gas, gasPrice, maxFeePerBlobGas, maxFeePerGas, maxPriorityFeePerGas, nonce: nonce_, nonceManager: nonceManager2, to, type, value, ...rest } = parameters;
  const nonce = await (async () => {
    if (!account)
      return nonce_;
    if (!nonceManager2)
      return nonce_;
    if (typeof nonce_ !== "undefined")
      return nonce_;
    const account_ = parseAccount(account);
    const chainId = chain2 ? chain2.id : await getAction(client, getChainId, "getChainId")({});
    return await nonceManager2.consume({
      address: account_.address,
      chainId,
      client
    });
  })();
  assertRequest(parameters);
  const chainFormat = (_b = (_a = chain2 == null ? void 0 : chain2.formatters) == null ? void 0 : _a.transactionRequest) == null ? void 0 : _b.format;
  const format3 = chainFormat || formatTransactionRequest;
  const request = format3({
    // Pick out extra data that might exist on the chain's transaction request type.
    ...extract(rest, { format: chainFormat }),
    account: account ? parseAccount(account) : void 0,
    accessList,
    authorizationList,
    blobs,
    blobVersionedHashes,
    data,
    gas,
    gasPrice,
    maxFeePerBlobGas,
    maxFeePerGas,
    maxPriorityFeePerGas,
    nonce,
    to,
    type,
    value
  }, "fillTransaction");
  try {
    const response = await client.request({
      method: "eth_fillTransaction",
      params: [request]
    });
    const format4 = ((_d = (_c = chain2 == null ? void 0 : chain2.formatters) == null ? void 0 : _c.transaction) == null ? void 0 : _d.format) || formatTransaction;
    const transaction = format4(response.tx);
    delete transaction.blockHash;
    delete transaction.blockNumber;
    delete transaction.r;
    delete transaction.s;
    delete transaction.transactionIndex;
    delete transaction.v;
    delete transaction.yParity;
    transaction.data = transaction.input;
    const hasFeePayerSignature = typeof transaction.feePayerSignature !== "undefined" && transaction.feePayerSignature !== null;
    if (hasFeePayerSignature && typeof nonce !== "undefined" && transaction.nonce !== nonce)
      throw new FeePayerNonceMismatchError({
        filledNonce: transaction.nonce,
        requestedNonce: nonce
      });
    if (!hasFeePayerSignature) {
      if (transaction.gas)
        transaction.gas = parameters.gas ?? transaction.gas;
      if (transaction.gasPrice)
        transaction.gasPrice = parameters.gasPrice ?? transaction.gasPrice;
      if (transaction.maxFeePerBlobGas)
        transaction.maxFeePerBlobGas = parameters.maxFeePerBlobGas ?? transaction.maxFeePerBlobGas;
      if (transaction.maxFeePerGas)
        transaction.maxFeePerGas = parameters.maxFeePerGas ?? transaction.maxFeePerGas;
      if (transaction.maxPriorityFeePerGas)
        transaction.maxPriorityFeePerGas = parameters.maxPriorityFeePerGas ?? transaction.maxPriorityFeePerGas;
      if (typeof transaction.nonce !== "undefined")
        transaction.nonce = parameters.nonce ?? transaction.nonce;
      const feeMultiplier = await (async () => {
        var _a2, _b2;
        if (typeof ((_a2 = chain2 == null ? void 0 : chain2.fees) == null ? void 0 : _a2.baseFeeMultiplier) === "function") {
          const block = await getAction(client, getBlock, "getBlock")({});
          return chain2.fees.baseFeeMultiplier({
            block,
            client,
            request: parameters
          });
        }
        return ((_b2 = chain2 == null ? void 0 : chain2.fees) == null ? void 0 : _b2.baseFeeMultiplier) ?? 1.2;
      })();
      if (feeMultiplier < 1)
        throw new BaseFeeScalarError();
      const decimals = ((_e = feeMultiplier.toString().split(".")[1]) == null ? void 0 : _e.length) ?? 0;
      const denominator = 10 ** decimals;
      const multiplyFee = (base) => base * BigInt(Math.round(feeMultiplier * denominator)) / BigInt(denominator);
      if (transaction.maxFeePerGas && !parameters.maxFeePerGas)
        transaction.maxFeePerGas = multiplyFee(transaction.maxFeePerGas);
      if (transaction.gasPrice && !parameters.gasPrice)
        transaction.gasPrice = multiplyFee(transaction.gasPrice);
    }
    return {
      raw: response.raw,
      transaction: {
        from: request.from,
        ...transaction
      },
      ...response.capabilities ? { capabilities: response.capabilities } : {}
    };
  } catch (err) {
    throw getTransactionError(err, {
      ...parameters,
      chain: client.chain
    });
  }
}

// node_modules/viem/_esm/actions/wallet/prepareTransactionRequest.js
var defaultParameters = [
  "blobVersionedHashes",
  "chainId",
  "fees",
  "gas",
  "nonce",
  "type"
];
var eip1559NetworkCache = /* @__PURE__ */ new Map();
var supportsFillTransaction = new LruMap(128);
async function prepareTransactionRequest(client, args) {
  var _a, _b, _c;
  let request = args;
  request.account ?? (request.account = client.account);
  request.parameters ?? (request.parameters = defaultParameters);
  const { account: account_, chain: chain2 = client.chain, nonceManager: nonceManager2, parameters } = request;
  const prepareTransactionRequest3 = (() => {
    if (typeof (chain2 == null ? void 0 : chain2.prepareTransactionRequest) === "function")
      return {
        fn: chain2.prepareTransactionRequest,
        runAt: ["beforeFillTransaction"]
      };
    if (Array.isArray(chain2 == null ? void 0 : chain2.prepareTransactionRequest))
      return {
        fn: chain2.prepareTransactionRequest[0],
        runAt: chain2.prepareTransactionRequest[1].runAt
      };
    return void 0;
  })();
  let chainId;
  async function getChainId3() {
    if (chainId)
      return chainId;
    if (typeof request.chainId !== "undefined")
      return request.chainId;
    if (chain2)
      return chain2.id;
    const chainId_ = await getAction(client, getChainId, "getChainId")({});
    chainId = chainId_;
    return chainId;
  }
  let account = account_ ? parseAccount(account_) : account_;
  let nonce = request.nonce;
  if ((prepareTransactionRequest3 == null ? void 0 : prepareTransactionRequest3.fn) && ((_a = prepareTransactionRequest3.runAt) == null ? void 0 : _a.includes("beforeFillTransaction"))) {
    request = await prepareTransactionRequest3.fn({ ...request, chain: chain2 }, {
      client,
      phase: "beforeFillTransaction"
    });
    nonce ?? (nonce = request.nonce);
    const sender = request.account ?? request.from;
    account = sender ? parseAccount(sender) : void 0;
  }
  if (parameters.includes("nonce") && typeof nonce === "undefined" && account && nonceManager2) {
    const chainId2 = await getChainId3();
    nonce = await nonceManager2.consume({
      address: account.address,
      chainId: chainId2,
      client
    });
  }
  const attemptFill = (() => {
    if ((parameters.includes("blobVersionedHashes") || parameters.includes("sidecars")) && request.kzg && request.blobs)
      return false;
    if (parameters.length > 0 && "feePayer" in request && request.feePayer && !("feePayerSignature" in request && request.feePayerSignature))
      return true;
    if (supportsFillTransaction.get(client.uid) === false)
      return false;
    const shouldAttempt = ["fees", "gas"].some((parameter) => parameters.includes(parameter));
    if (!shouldAttempt)
      return false;
    if (parameters.includes("chainId") && typeof request.chainId !== "number")
      return true;
    if (parameters.includes("nonce") && typeof nonce !== "number")
      return true;
    if (parameters.includes("fees") && typeof request.gasPrice !== "bigint" && (typeof request.maxFeePerGas !== "bigint" || typeof request.maxPriorityFeePerGas !== "bigint"))
      return true;
    if (parameters.includes("gas") && typeof request.gas !== "bigint")
      return true;
    return false;
  })();
  const fillResult = attemptFill ? await getAction(client, fillTransaction, "fillTransaction")({ ...request, nonce }).then((result) => {
    const { chainId: chainId2, from: from16, gas: gas2, gasPrice, nonce: nonce2, maxFeePerBlobGas, maxFeePerGas, maxPriorityFeePerGas, type: type2, ...rest } = result.transaction;
    const feeToken = "feeToken" in rest ? rest.feeToken : void 0;
    const hasFilledFeePayerSignature = "feePayerSignature" in rest && rest.feePayerSignature !== null && typeof rest.feePayerSignature !== "undefined";
    const shouldUseFilledFeeToken = typeof feeToken !== "undefined" && feeToken !== null && (!("feeToken" in request) || hasFilledFeePayerSignature);
    supportsFillTransaction.set(client.uid, true);
    return {
      ...request,
      ...from16 ? { from: from16 } : {},
      ...type2 && !request.type ? { type: type2 } : {},
      ...typeof chainId2 !== "undefined" ? { chainId: chainId2 } : {},
      ...typeof gas2 !== "undefined" ? { gas: gas2 } : {},
      ...typeof gasPrice !== "undefined" ? { gasPrice } : {},
      ...typeof nonce2 !== "undefined" ? { nonce: nonce2 } : {},
      ...typeof maxFeePerBlobGas !== "undefined" && request.type !== "legacy" && request.type !== "eip2930" ? { maxFeePerBlobGas } : {},
      ...typeof maxFeePerGas !== "undefined" && request.type !== "legacy" && request.type !== "eip2930" ? { maxFeePerGas } : {},
      ...typeof maxPriorityFeePerGas !== "undefined" && request.type !== "legacy" && request.type !== "eip2930" ? { maxPriorityFeePerGas } : {},
      ..."nonceKey" in rest && typeof rest.nonceKey !== "undefined" ? { nonceKey: rest.nonceKey } : {},
      // Validity bounds are part of the fee-payer signing payload.
      ..."validBefore" in rest && rest.validBefore !== null && typeof rest.validBefore !== "undefined" ? { validBefore: rest.validBefore } : {},
      ..."validAfter" in rest && rest.validAfter !== null && typeof rest.validAfter !== "undefined" ? { validAfter: rest.validAfter } : {},
      ..."keyAuthorization" in rest && typeof rest.keyAuthorization !== "undefined" && rest.keyAuthorization !== null && !("keyAuthorization" in request) ? { keyAuthorization: rest.keyAuthorization } : {},
      ..."feePayerSignature" in rest && typeof rest.feePayerSignature !== "undefined" && rest.feePayerSignature !== null ? { feePayerSignature: rest.feePayerSignature } : {},
      ...shouldUseFilledFeeToken ? { feeToken } : {},
      ...result.capabilities ? { _capabilities: result.capabilities } : {}
    };
  }).catch((e) => {
    var _a2, _b2, _c2;
    const error = e;
    if (error.name !== "TransactionExecutionError")
      return request;
    const nonceMismatch = (_a2 = error.walk) == null ? void 0 : _a2.call(error, (error2) => error2 instanceof FeePayerNonceMismatchError);
    if (nonceMismatch)
      throw e;
    const executionReverted = (_b2 = error.walk) == null ? void 0 : _b2.call(error, (e2) => {
      const error2 = e2;
      return error2.name === "ExecutionRevertedError";
    });
    if (executionReverted)
      throw e;
    const unsupported = (_c2 = error.walk) == null ? void 0 : _c2.call(error, (e2) => {
      var _a3;
      const error2 = e2;
      return error2.name === "MethodNotFoundRpcError" || error2.name === "MethodNotSupportedRpcError" || ((_a3 = error2.message) == null ? void 0 : _a3.includes("eth_fillTransaction is not available"));
    });
    if (unsupported)
      supportsFillTransaction.set(client.uid, false);
    return request;
  }) : request;
  nonce ?? (nonce = fillResult.nonce);
  request = {
    ...fillResult,
    ...account ? { from: account == null ? void 0 : account.address } : {},
    ...typeof nonce !== "undefined" ? { nonce } : {}
  };
  const { blobs, gas, kzg, type } = request;
  if ((prepareTransactionRequest3 == null ? void 0 : prepareTransactionRequest3.fn) && ((_b = prepareTransactionRequest3.runAt) == null ? void 0 : _b.includes("beforeFillParameters"))) {
    request = await prepareTransactionRequest3.fn({ ...request, chain: chain2 }, {
      client,
      phase: "beforeFillParameters"
    });
  }
  let block;
  async function getBlock3() {
    if (block)
      return block;
    block = await getAction(client, getBlock, "getBlock")({ blockTag: "latest" });
    return block;
  }
  if (parameters.includes("nonce") && typeof nonce === "undefined" && account && !nonceManager2)
    request.nonce = await getAction(client, getTransactionCount, "getTransactionCount")({
      address: account.address,
      blockTag: "pending"
    });
  if ((parameters.includes("blobVersionedHashes") || parameters.includes("sidecars")) && blobs && kzg) {
    const commitments = blobsToCommitments({ blobs, kzg });
    if (parameters.includes("blobVersionedHashes")) {
      const versionedHashes = commitmentsToVersionedHashes({
        commitments,
        to: "hex"
      });
      request.blobVersionedHashes = versionedHashes;
    }
    if (parameters.includes("sidecars")) {
      const proofs = blobsToProofs({ blobs, commitments, kzg });
      const sidecars = toBlobSidecars({
        blobs,
        commitments,
        proofs,
        to: "hex"
      });
      request.sidecars = sidecars;
    }
  }
  if (parameters.includes("chainId"))
    request.chainId = await getChainId3();
  if ((parameters.includes("fees") || parameters.includes("type")) && typeof type === "undefined") {
    try {
      request.type = getTransactionType(request);
    } catch {
      let isEip1559Network = eip1559NetworkCache.get(client.uid);
      if (typeof isEip1559Network === "undefined") {
        const block2 = await getBlock3();
        isEip1559Network = typeof (block2 == null ? void 0 : block2.baseFeePerGas) === "bigint";
        eip1559NetworkCache.set(client.uid, isEip1559Network);
      }
      request.type = isEip1559Network ? "eip1559" : "legacy";
    }
  }
  if (parameters.includes("fees")) {
    if (request.type !== "legacy" && request.type !== "eip2930") {
      if (typeof request.maxFeePerGas === "undefined" || typeof request.maxPriorityFeePerGas === "undefined") {
        const block2 = await getBlock3();
        const { maxFeePerGas, maxPriorityFeePerGas } = await internal_estimateFeesPerGas(client, {
          block: block2,
          chain: chain2,
          request
        });
        if (typeof request.maxPriorityFeePerGas === "undefined" && request.maxFeePerGas && request.maxFeePerGas < maxPriorityFeePerGas)
          throw new MaxFeePerGasTooLowError({
            maxPriorityFeePerGas
          });
        request.maxPriorityFeePerGas = maxPriorityFeePerGas;
        request.maxFeePerGas = maxFeePerGas;
      }
    } else {
      if (typeof request.maxFeePerGas !== "undefined" || typeof request.maxPriorityFeePerGas !== "undefined")
        throw new Eip1559FeesNotSupportedError();
      if (typeof request.gasPrice === "undefined") {
        const block2 = await getBlock3();
        const { gasPrice: gasPrice_ } = await internal_estimateFeesPerGas(client, {
          block: block2,
          chain: chain2,
          request,
          type: "legacy"
        });
        request.gasPrice = gasPrice_;
      }
    }
  }
  if (parameters.includes("gas") && typeof gas === "undefined")
    request.gas = await getAction(client, estimateGas, "estimateGas")({
      ...request,
      account,
      prepare: (account == null ? void 0 : account.type) === "local" ? [] : ["blobVersionedHashes"]
    });
  if ((prepareTransactionRequest3 == null ? void 0 : prepareTransactionRequest3.fn) && ((_c = prepareTransactionRequest3.runAt) == null ? void 0 : _c.includes("afterFillParameters")))
    request = await prepareTransactionRequest3.fn({ ...request, chain: chain2 }, {
      client,
      phase: "afterFillParameters"
    });
  assertRequest(request);
  delete request.parameters;
  return request;
}

// node_modules/viem/_esm/actions/public/estimateGas.js
async function estimateGas(client, args) {
  var _a, _b, _c;
  const { account: account_ = client.account, prepare = true } = args;
  const account = account_ ? parseAccount(account_) : void 0;
  const parameters = (() => {
    if (Array.isArray(prepare))
      return prepare;
    if ((account == null ? void 0 : account.type) !== "local")
      return ["blobVersionedHashes"];
    return void 0;
  })();
  try {
    const to = await (async () => {
      if (args.to)
        return args.to;
      if (args.authorizationList && args.authorizationList.length > 0)
        return await recoverAuthorizationAddress({
          authorization: args.authorizationList[0]
        }).catch(() => {
          throw new BaseError("`to` is required. Could not infer from `authorizationList`");
        });
      return void 0;
    })();
    const { accessList, authorizationList, blobs, blobVersionedHashes, blockNumber, blockTag, data, gas, gasPrice, maxFeePerBlobGas, maxFeePerGas, maxPriorityFeePerGas, nonce, value, stateOverride, ...rest } = prepare ? await prepareTransactionRequest(client, {
      ...args,
      parameters,
      to
    }) : args;
    if (gas && args.gas !== gas)
      return gas;
    const blockNumberHex = typeof blockNumber === "bigint" ? numberToHex(blockNumber) : void 0;
    const block = blockNumberHex || blockTag;
    const rpcStateOverride = serializeStateOverride(stateOverride);
    assertRequest(args);
    const chainFormat = (_c = (_b = (_a = client.chain) == null ? void 0 : _a.formatters) == null ? void 0 : _b.transactionRequest) == null ? void 0 : _c.format;
    const format3 = chainFormat || formatTransactionRequest;
    const request = format3({
      // Pick out extra data that might exist on the chain's transaction request type.
      ...extract(rest, { format: chainFormat }),
      account,
      accessList,
      authorizationList,
      blobs,
      blobVersionedHashes,
      data,
      gasPrice,
      maxFeePerBlobGas,
      maxFeePerGas,
      maxPriorityFeePerGas,
      nonce,
      to,
      value
    }, "estimateGas");
    return BigInt(await client.request({
      method: "eth_estimateGas",
      params: rpcStateOverride ? [
        request,
        block ?? client.experimental_blockTag ?? "latest",
        rpcStateOverride
      ] : block ? [request, block] : [request]
    }));
  } catch (err) {
    throw getEstimateGasError(err, {
      ...args,
      account,
      chain: client.chain
    });
  }
}

// node_modules/viem/_esm/actions/public/estimateContractGas.js
async function estimateContractGas(client, parameters) {
  var _a;
  const { abi: abi2, address, args, functionName, dataSuffix = typeof client.dataSuffix === "string" ? client.dataSuffix : (_a = client.dataSuffix) == null ? void 0 : _a.value, ...request } = parameters;
  const data = encodeFunctionData({
    abi: abi2,
    args,
    functionName
  });
  try {
    const gas = await getAction(client, estimateGas, "estimateGas")({
      data: `${data}${dataSuffix ? dataSuffix.replace("0x", "") : ""}`,
      to: address,
      ...request
    });
    return gas;
  } catch (error) {
    const account = request.account ? parseAccount(request.account) : void 0;
    throw getContractError(error, {
      abi: abi2,
      address,
      args,
      docsPath: "/docs/contract/estimateContractGas",
      functionName,
      sender: account == null ? void 0 : account.address
    });
  }
}

// node_modules/viem/_esm/actions/public/getBalance.js
async function getBalance(client, { address, blockHash, blockNumber, blockTag = client.experimental_blockTag ?? "latest", requireCanonical }) {
  var _a, _b, _c;
  const block = formatBlockParameter({
    blockHash,
    blockNumber,
    blockTag,
    requireCanonical
  });
  if (((_a = client.batch) == null ? void 0 : _a.multicall) && ((_c = (_b = client.chain) == null ? void 0 : _b.contracts) == null ? void 0 : _c.multicall3)) {
    const multicall3Address = client.chain.contracts.multicall3.address;
    const calldata = encodeFunctionData({
      abi: multicall3Abi,
      functionName: "getEthBalance",
      args: [address]
    });
    const { data } = await getAction(client, call, "call")({
      to: multicall3Address,
      data: calldata,
      blockHash,
      blockNumber,
      blockTag,
      requireCanonical
    });
    return decodeFunctionResult({
      abi: multicall3Abi,
      functionName: "getEthBalance",
      args: [address],
      data: data || "0x"
    });
  }
  const balance = await client.request({
    method: "eth_getBalance",
    params: [address, block]
  });
  return BigInt(balance);
}

// node_modules/viem/_esm/actions/public/getBlobBaseFee.js
async function getBlobBaseFee(client) {
  const baseFee = await client.request({
    method: "eth_blobBaseFee"
  });
  return BigInt(baseFee);
}

// node_modules/viem/_esm/utils/promise/withCache.js
var promiseCache = /* @__PURE__ */ new Map();
var responseCache = /* @__PURE__ */ new Map();
function getCache(cacheKey2) {
  const buildCache = (cacheKey3, cache) => ({
    clear: () => cache.delete(cacheKey3),
    get: () => cache.get(cacheKey3),
    set: (data) => cache.set(cacheKey3, data)
  });
  const promise = buildCache(cacheKey2, promiseCache);
  const response = buildCache(cacheKey2, responseCache);
  return {
    clear: () => {
      promise.clear();
      response.clear();
    },
    promise,
    response
  };
}
async function withCache(fn, { cacheKey: cacheKey2, cacheTime = Number.POSITIVE_INFINITY }) {
  const cache = getCache(cacheKey2);
  const response = cache.response.get();
  if (response && cacheTime > 0) {
    const age = Date.now() - response.created.getTime();
    if (age < cacheTime)
      return response.data;
  }
  let promise = cache.promise.get();
  if (!promise) {
    promise = fn();
    cache.promise.set(promise);
  }
  try {
    const data = await promise;
    cache.response.set({ created: /* @__PURE__ */ new Date(), data });
    return data;
  } finally {
    cache.promise.clear();
  }
}

// node_modules/viem/_esm/actions/public/getBlockNumber.js
var cacheKey = (id) => `blockNumber.${id}`;
async function getBlockNumber(client, { cacheTime = client.cacheTime } = {}) {
  const blockNumberHex = await withCache(() => client.request({
    method: "eth_blockNumber"
  }), { cacheKey: cacheKey(client.uid), cacheTime });
  return BigInt(blockNumberHex);
}

// node_modules/viem/_esm/utils/formatters/log.js
function formatLog(log, { args, eventName } = {}) {
  return {
    ...log,
    blockHash: log.blockHash ? log.blockHash : null,
    blockNumber: log.blockNumber ? BigInt(log.blockNumber) : null,
    blockTimestamp: log.blockTimestamp ? BigInt(log.blockTimestamp) : log.blockTimestamp === null ? null : void 0,
    logIndex: log.logIndex ? Number(log.logIndex) : null,
    transactionHash: log.transactionHash ? log.transactionHash : null,
    transactionIndex: log.transactionIndex ? Number(log.transactionIndex) : null,
    ...eventName ? { args, eventName } : {}
  };
}

// node_modules/viem/_esm/utils/formatters/transactionReceipt.js
var receiptStatuses = {
  "0x0": "reverted",
  "0x1": "success"
};
function formatTransactionReceipt(transactionReceipt, _) {
  const receipt = {
    ...transactionReceipt,
    blockNumber: transactionReceipt.blockNumber ? BigInt(transactionReceipt.blockNumber) : null,
    contractAddress: transactionReceipt.contractAddress ? transactionReceipt.contractAddress : null,
    cumulativeGasUsed: transactionReceipt.cumulativeGasUsed ? BigInt(transactionReceipt.cumulativeGasUsed) : null,
    effectiveGasPrice: transactionReceipt.effectiveGasPrice ? BigInt(transactionReceipt.effectiveGasPrice) : null,
    gasUsed: transactionReceipt.gasUsed ? BigInt(transactionReceipt.gasUsed) : null,
    logs: transactionReceipt.logs ? transactionReceipt.logs.map((log) => formatLog(log)) : null,
    to: transactionReceipt.to ? transactionReceipt.to : null,
    transactionIndex: transactionReceipt.transactionIndex ? hexToNumber(transactionReceipt.transactionIndex) : null,
    status: transactionReceipt.status ? receiptStatuses[transactionReceipt.status] : null,
    type: transactionReceipt.type ? transactionType[transactionReceipt.type] || transactionReceipt.type : null
  };
  if (transactionReceipt.blobGasPrice)
    receipt.blobGasPrice = BigInt(transactionReceipt.blobGasPrice);
  if (transactionReceipt.blobGasUsed)
    receipt.blobGasUsed = BigInt(transactionReceipt.blobGasUsed);
  return receipt;
}
var defineTransactionReceipt = defineFormatter("transactionReceipt", formatTransactionReceipt);

// node_modules/viem/_esm/actions/public/getBlockReceipts.js
async function getBlockReceipts(client, { blockHash, blockNumber, blockTag = client.experimental_blockTag ?? "latest" } = {}) {
  var _a, _b, _c;
  const blockNumberHex = blockNumber !== void 0 ? numberToHex(blockNumber) : void 0;
  const receipts = await client.request({
    method: "eth_getBlockReceipts",
    params: [blockHash || blockNumberHex || blockTag]
  }, { dedupe: Boolean(blockHash || blockNumberHex) });
  if (!receipts)
    throw new BlockNotFoundError({ blockHash, blockNumber });
  const format3 = ((_c = (_b = (_a = client.chain) == null ? void 0 : _a.formatters) == null ? void 0 : _b.transactionReceipt) == null ? void 0 : _c.format) || formatTransactionReceipt;
  return receipts.map((receipt) => format3(receipt, "getBlockReceipts"));
}

// node_modules/viem/_esm/actions/public/getBlockTransactionCount.js
async function getBlockTransactionCount(client, { blockHash, blockNumber, blockTag = "latest" } = {}) {
  const blockNumberHex = blockNumber !== void 0 ? numberToHex(blockNumber) : void 0;
  let count;
  if (blockHash) {
    count = await client.request({
      method: "eth_getBlockTransactionCountByHash",
      params: [blockHash]
    }, { dedupe: true });
  } else {
    count = await client.request({
      method: "eth_getBlockTransactionCountByNumber",
      params: [blockNumberHex || blockTag]
    }, { dedupe: Boolean(blockNumberHex) });
  }
  return hexToNumber(count);
}

// node_modules/viem/_esm/actions/public/getCode.js
async function getCode(client, { address, blockHash, blockNumber, blockTag = "latest", requireCanonical }) {
  const block = formatBlockParameter({
    blockHash,
    blockNumber,
    blockTag,
    requireCanonical
  });
  const hex2 = await client.request({
    method: "eth_getCode",
    params: [address, block]
  }, {
    dedupe: typeof blockNumber === "bigint" || blockHash !== void 0
  });
  if (hex2 === "0x")
    return void 0;
  return hex2;
}

// node_modules/viem/_esm/utils/abi/decodeEventLog.js
var docsPath2 = "/docs/contract/decodeEventLog";
function decodeEventLog(parameters) {
  const { abi: abi2, data, strict: strict_, topics } = parameters;
  const strict = strict_ ?? true;
  const [signature, ...argTopics] = topics;
  if (!signature)
    throw new AbiEventSignatureEmptyTopicsError({ docsPath: docsPath2 });
  const abiItem = abi2.find((x) => x.type === "event" && signature === toEventSelector(formatAbiItem(x)));
  if (!(abiItem && "name" in abiItem) || abiItem.type !== "event")
    throw new AbiEventSignatureNotFoundError(signature, { docsPath: docsPath2 });
  const { name, inputs } = abiItem;
  const isUnnamed = inputs == null ? void 0 : inputs.some((x) => !("name" in x && x.name));
  const args = isUnnamed ? [] : {};
  const indexedInputs = inputs.map((x, i) => [x, i]).filter(([x]) => "indexed" in x && x.indexed);
  const missingIndexedInputs = [];
  for (let i = 0; i < indexedInputs.length; i++) {
    const [param, argIndex] = indexedInputs[i];
    const topic = argTopics[i];
    if (!topic) {
      if (strict)
        throw new DecodeLogTopicsMismatch({
          abiItem,
          param
        });
      missingIndexedInputs.push([param, argIndex]);
      continue;
    }
    args[isUnnamed ? argIndex : param.name || argIndex] = decodeTopic({
      param,
      value: topic
    });
  }
  const nonIndexedInputs = inputs.filter((x) => !("indexed" in x && x.indexed));
  const inputsToDecode = strict ? nonIndexedInputs : [...missingIndexedInputs.map(([param]) => param), ...nonIndexedInputs];
  if (inputsToDecode.length > 0) {
    if (data && data !== "0x") {
      try {
        const decodedData = decodeAbiParameters(inputsToDecode, data);
        if (decodedData) {
          let dataIndex = 0;
          if (!strict) {
            for (const [param, argIndex] of missingIndexedInputs) {
              args[isUnnamed ? argIndex : param.name || argIndex] = decodedData[dataIndex++];
            }
          }
          if (isUnnamed) {
            for (let i = 0; i < inputs.length; i++)
              if (args[i] === void 0 && dataIndex < decodedData.length)
                args[i] = decodedData[dataIndex++];
          } else
            for (let i = 0; i < nonIndexedInputs.length; i++)
              args[nonIndexedInputs[i].name] = decodedData[dataIndex++];
        }
      } catch (err) {
        if (strict) {
          if (err instanceof AbiDecodingDataSizeTooSmallError || err instanceof PositionOutOfBoundsError)
            throw new DecodeLogDataMismatch({
              abiItem,
              data,
              params: inputsToDecode,
              size: size(data)
            });
          throw err;
        }
      }
    } else if (strict) {
      throw new DecodeLogDataMismatch({
        abiItem,
        data: "0x",
        params: inputsToDecode,
        size: 0
      });
    }
  }
  return {
    eventName: name,
    args: Object.values(args).length > 0 ? args : void 0
  };
}
function decodeTopic({ param, value }) {
  if (param.type === "string" || param.type === "bytes" || param.type === "tuple" || param.type.match(/^(.*)\[(\d+)?\]$/))
    return value;
  const decodedArg = decodeAbiParameters([param], value) || [];
  return decodedArg[0];
}

// node_modules/viem/_esm/utils/abi/parseEventLogs.js
function parseEventLogs(parameters) {
  const { abi: abi2, args, logs, strict = true } = parameters;
  const eventName = (() => {
    if (!parameters.eventName)
      return void 0;
    if (Array.isArray(parameters.eventName))
      return parameters.eventName;
    return [parameters.eventName];
  })();
  const abiTopics = abi2.filter((abiItem) => abiItem.type === "event").map((abiItem) => ({
    abi: abiItem,
    selector: toEventSelector(abiItem)
  }));
  return logs.map((log) => {
    var _a;
    const formattedLog = typeof log.blockNumber === "string" ? formatLog(log) : log;
    const abiItems = abiTopics.filter((abiTopic) => formattedLog.topics[0] === abiTopic.selector);
    if (abiItems.length === 0)
      return null;
    let event;
    let abiItem;
    for (const item of abiItems) {
      try {
        event = decodeEventLog({
          ...formattedLog,
          abi: [item.abi],
          strict: true
        });
        abiItem = item;
        break;
      } catch {
      }
    }
    if (!event && !strict) {
      abiItem = abiItems[0];
      try {
        event = decodeEventLog({
          data: formattedLog.data,
          topics: formattedLog.topics,
          abi: [abiItem.abi],
          strict: false
        });
      } catch {
        const isUnnamed = (_a = abiItem.abi.inputs) == null ? void 0 : _a.some((x) => !("name" in x && x.name));
        return {
          ...formattedLog,
          args: isUnnamed ? [] : {},
          eventName: abiItem.abi.name
        };
      }
    }
    if (!event || !abiItem)
      return null;
    if (eventName && !eventName.includes(event.eventName))
      return null;
    if (!includesArgs({
      args: event.args,
      inputs: abiItem.abi.inputs,
      matchArgs: args
    }))
      return null;
    return { ...event, ...formattedLog };
  }).filter(Boolean);
}
function includesArgs(parameters) {
  const { args, inputs, matchArgs } = parameters;
  if (!matchArgs)
    return true;
  if (!args)
    return false;
  function isEqual2(input, value, arg) {
    try {
      if (input.type === "address")
        return isAddressEqual(value, arg);
      if (input.type === "string")
        return keccak256(stringToBytes(value)) === arg;
      if (input.type === "bytes")
        return keccak256(toBytes(value)) === arg;
      return value === arg;
    } catch {
      return false;
    }
  }
  if (Array.isArray(args) && Array.isArray(matchArgs)) {
    return matchArgs.every((value, index3) => {
      if (value === null || value === void 0)
        return true;
      const input = inputs[index3];
      if (!input)
        return false;
      const value_ = Array.isArray(value) ? value : [value];
      return value_.some((value2) => isEqual2(input, value2, args[index3]));
    });
  }
  if (typeof args === "object" && !Array.isArray(args) && typeof matchArgs === "object" && !Array.isArray(matchArgs))
    return Object.entries(matchArgs).every(([key, value]) => {
      if (value === null || value === void 0)
        return true;
      const input = inputs.find((input2) => input2.name === key);
      if (!input)
        return false;
      const value_ = Array.isArray(value) ? value : [value];
      return value_.some((value2) => isEqual2(input, value2, args[key]));
    });
  return false;
}

// node_modules/viem/_esm/actions/public/getLogs.js
async function getLogs(client, { address, blockHash, fromBlock, toBlock, event, events: events_, args, strict: strict_ } = {}) {
  const strict = strict_ ?? false;
  const events = events_ ?? (event ? [event] : void 0);
  let topics = [];
  if (events) {
    const encoded = events.flatMap((event2) => encodeEventTopics({
      abi: [event2],
      eventName: event2.name,
      args: events_ ? void 0 : args
    }));
    topics = [encoded];
    if (event)
      topics = topics[0];
  }
  let logs;
  if (blockHash) {
    logs = await client.request({
      method: "eth_getLogs",
      params: [{ address, topics, blockHash }]
    });
  } else {
    logs = await client.request({
      method: "eth_getLogs",
      params: [
        {
          address,
          topics,
          fromBlock: typeof fromBlock === "bigint" ? numberToHex(fromBlock) : fromBlock,
          toBlock: typeof toBlock === "bigint" ? numberToHex(toBlock) : toBlock
        }
      ]
    });
  }
  const formattedLogs = logs.map((log) => formatLog(log));
  if (!events)
    return formattedLogs;
  return parseEventLogs({
    abi: events,
    args,
    logs: formattedLogs,
    strict
  });
}

// node_modules/viem/_esm/actions/public/getContractEvents.js
async function getContractEvents(client, parameters) {
  const { abi: abi2, address, args, blockHash, eventName, fromBlock, toBlock, strict } = parameters;
  const event = eventName ? getAbiItem({ abi: abi2, name: eventName }) : void 0;
  const events = !event ? abi2.filter((x) => x.type === "event") : void 0;
  return getAction(client, getLogs, "getLogs")({
    address,
    args,
    blockHash,
    event,
    events,
    fromBlock,
    toBlock,
    strict
  });
}

// node_modules/viem/_esm/actions/public/getDelegation.js
async function getDelegation(client, { address, blockNumber, blockTag = "latest" }) {
  const code = await getCode(client, {
    address,
    ...blockNumber !== void 0 ? { blockNumber } : { blockTag }
  });
  if (!code)
    return void 0;
  if (size(code) !== 23)
    return void 0;
  if (!code.startsWith("0xef0100"))
    return void 0;
  return getAddress(slice(code, 3, 23));
}

// node_modules/viem/_esm/errors/eip712.js
var Eip712DomainNotFoundError = class extends BaseError {
  constructor({ address }) {
    super(`No EIP-712 domain found on contract "${address}".`, {
      metaMessages: [
        "Ensure that:",
        `- The contract is deployed at the address "${address}".`,
        "- `eip712Domain()` function exists on the contract.",
        "- `eip712Domain()` function matches signature to ERC-5267 specification."
      ],
      name: "Eip712DomainNotFoundError"
    });
  }
};

// node_modules/viem/_esm/actions/public/getEip712Domain.js
async function getEip712Domain(client, parameters) {
  const { address, factory, factoryData } = parameters;
  try {
    const [fields, name, version3, chainId, verifyingContract, salt, extensions] = await getAction(client, readContract, "readContract")({
      abi,
      address,
      functionName: "eip712Domain",
      factory,
      factoryData
    });
    return {
      domain: {
        name,
        version: version3,
        chainId: Number(chainId),
        verifyingContract,
        salt
      },
      extensions,
      fields
    };
  } catch (e) {
    const error = e;
    if (error.name === "ContractFunctionExecutionError" && error.cause.name === "ContractFunctionZeroDataError") {
      throw new Eip712DomainNotFoundError({ address });
    }
    throw error;
  }
}
var abi = [
  {
    inputs: [],
    name: "eip712Domain",
    outputs: [
      { name: "fields", type: "bytes1" },
      { name: "name", type: "string" },
      { name: "version", type: "string" },
      { name: "chainId", type: "uint256" },
      { name: "verifyingContract", type: "address" },
      { name: "salt", type: "bytes32" },
      { name: "extensions", type: "uint256[]" }
    ],
    stateMutability: "view",
    type: "function"
  }
];

// node_modules/viem/_esm/utils/formatters/feeHistory.js
function formatFeeHistory(feeHistory) {
  var _a;
  return {
    baseFeePerGas: feeHistory.baseFeePerGas.map((value) => BigInt(value)),
    gasUsedRatio: feeHistory.gasUsedRatio,
    oldestBlock: BigInt(feeHistory.oldestBlock),
    reward: (_a = feeHistory.reward) == null ? void 0 : _a.map((reward) => reward.map((value) => BigInt(value)))
  };
}

// node_modules/viem/_esm/actions/public/getFeeHistory.js
async function getFeeHistory(client, { blockCount, blockNumber, blockTag = "latest", rewardPercentiles }) {
  const blockNumberHex = typeof blockNumber === "bigint" ? numberToHex(blockNumber) : void 0;
  const feeHistory = await client.request({
    method: "eth_feeHistory",
    params: [
      numberToHex(blockCount),
      blockNumberHex || blockTag,
      rewardPercentiles
    ]
  }, { dedupe: Boolean(blockNumberHex) });
  return formatFeeHistory(feeHistory);
}

// node_modules/viem/_esm/actions/public/getFilterChanges.js
async function getFilterChanges(_client, { filter }) {
  const strict = "strict" in filter && filter.strict;
  const logs = await filter.request({
    method: "eth_getFilterChanges",
    params: [filter.id]
  });
  if (typeof logs[0] === "string")
    return logs;
  const formattedLogs = logs.map((log) => formatLog(log));
  if (!("abi" in filter) || !filter.abi)
    return formattedLogs;
  return parseEventLogs({
    abi: filter.abi,
    logs: formattedLogs,
    strict
  });
}

// node_modules/viem/_esm/actions/public/getFilterLogs.js
async function getFilterLogs(_client, { filter }) {
  const strict = filter.strict ?? false;
  const logs = await filter.request({
    method: "eth_getFilterLogs",
    params: [filter.id]
  });
  const formattedLogs = logs.map((log) => formatLog(log));
  if (!filter.abi)
    return formattedLogs;
  return parseEventLogs({
    abi: filter.abi,
    logs: formattedLogs,
    strict
  });
}

// node_modules/viem/_esm/utils/authorization/verifyAuthorization.js
async function verifyAuthorization({ address, authorization, signature }) {
  return isAddressEqual(getAddress(address), await recoverAuthorizationAddress({
    authorization,
    signature
  }));
}

// node_modules/viem/_esm/utils/promise/withDedupe.js
var promiseCache2 = new LruMap(8192);
function withDedupe(fn, { enabled = true, id }) {
  if (!enabled || !id)
    return fn();
  if (promiseCache2.get(id))
    return promiseCache2.get(id);
  const promise = fn().finally(() => promiseCache2.delete(id));
  promiseCache2.set(id, promise);
  return promise;
}

// node_modules/viem/_esm/utils/wait.js
async function wait(time, { signal } = {}) {
  return new Promise((resolve, reject) => {
    if (signal == null ? void 0 : signal.aborted) {
      reject(getAbortError(signal));
      return;
    }
    const cleanup = () => signal == null ? void 0 : signal.removeEventListener("abort", onAbort);
    const timeout = setTimeout(() => {
      cleanup();
      resolve();
    }, time);
    const onAbort = () => {
      clearTimeout(timeout);
      cleanup();
      reject(getAbortError(signal));
    };
    signal == null ? void 0 : signal.addEventListener("abort", onAbort, { once: true });
  });
}

// node_modules/viem/_esm/utils/promise/withRetry.js
function withRetry(fn, { delay: delay_ = 100, retryCount = 2, shouldRetry: shouldRetry2 = () => true, signal } = {}) {
  return new Promise((resolve, reject) => {
    const onAbort = () => reject(getAbortError(signal));
    signal == null ? void 0 : signal.addEventListener("abort", onAbort, { once: true });
    const attemptRetry = async ({ count = 0 } = {}) => {
      if (signal == null ? void 0 : signal.aborted) {
        reject(getAbortError(signal));
        return;
      }
      const retry = async ({ error }) => {
        const delay = typeof delay_ === "function" ? delay_({ count, error }) : delay_;
        if (delay) {
          try {
            await wait(delay, { signal });
          } catch (err) {
            reject(err);
            return;
          }
        }
        return attemptRetry({ count: count + 1 });
      };
      try {
        const data = await fn();
        resolve(data);
      } catch (err) {
        if (signal == null ? void 0 : signal.aborted) {
          reject(getAbortError(signal));
          return;
        }
        if (isAbortError(err)) {
          reject(err);
          return;
        }
        if (count < retryCount && await shouldRetry2({ count, error: err }))
          return retry({ error: err });
        reject(err);
      }
    };
    void attemptRetry().catch(reject).finally(() => signal == null ? void 0 : signal.removeEventListener("abort", onAbort));
  });
}

// node_modules/viem/_esm/utils/buildRequest.js
function buildRequest(request, options = {}) {
  return async (args, overrideOptions = {}) => {
    var _a;
    const { dedupe = false, methods, retryDelay = 150, retryCount = 3, signal, uid: uid3 } = {
      ...options,
      ...overrideOptions
    };
    const { method } = args;
    if ((_a = methods == null ? void 0 : methods.exclude) == null ? void 0 : _a.includes(method))
      throw new MethodNotSupportedRpcError(new Error("method not supported"), {
        method
      });
    if ((methods == null ? void 0 : methods.include) && !methods.include.includes(method))
      throw new MethodNotSupportedRpcError(new Error("method not supported"), {
        method
      });
    if (signal == null ? void 0 : signal.aborted)
      throw getAbortError(signal);
    const requestId = dedupe ? hashString(`${uid3}.${stringify(args)}`) : void 0;
    return withDedupe(() => withRetry(async () => {
      try {
        return await request(args, signal ? { signal } : void 0);
      } catch (err_) {
        if (signal == null ? void 0 : signal.aborted)
          throw getAbortError(signal);
        if (isAbortError(err_))
          throw err_;
        const err = err_;
        switch (err.code) {
          case ParseRpcError.code:
            throw new ParseRpcError(err);
          case InvalidRequestRpcError.code:
            throw new InvalidRequestRpcError(err);
          case MethodNotFoundRpcError.code:
            throw new MethodNotFoundRpcError(err, { method: args.method });
          case InvalidParamsRpcError.code:
            throw new InvalidParamsRpcError(err);
          case InternalRpcError.code:
            throw new InternalRpcError(err);
          case InvalidInputRpcError.code:
            throw new InvalidInputRpcError(err);
          case ResourceNotFoundRpcError.code:
            throw new ResourceNotFoundRpcError(err);
          case ResourceUnavailableRpcError.code:
            throw new ResourceUnavailableRpcError(err);
          case TransactionRejectedRpcError.code:
            throw new TransactionRejectedRpcError(err);
          case MethodNotSupportedRpcError.code:
            throw new MethodNotSupportedRpcError(err, {
              method: args.method
            });
          case LimitExceededRpcError.code:
            throw new LimitExceededRpcError(err);
          case JsonRpcVersionUnsupportedError.code:
            throw new JsonRpcVersionUnsupportedError(err);
          case UserRejectedRequestError.code:
            throw new UserRejectedRequestError(err);
          case UnauthorizedProviderError.code:
            throw new UnauthorizedProviderError(err);
          case UnsupportedProviderMethodError.code:
            throw new UnsupportedProviderMethodError(err);
          case ProviderDisconnectedError.code:
            throw new ProviderDisconnectedError(err);
          case ChainDisconnectedError.code:
            throw new ChainDisconnectedError(err);
          case SwitchChainError.code:
            throw new SwitchChainError(err);
          case UnsupportedNonOptionalCapabilityError.code:
            throw new UnsupportedNonOptionalCapabilityError(err);
          case UnsupportedChainIdError.code:
            throw new UnsupportedChainIdError(err);
          case DuplicateIdError.code:
            throw new DuplicateIdError(err);
          case UnknownBundleIdError.code:
            throw new UnknownBundleIdError(err);
          case BundleTooLargeError.code:
            throw new BundleTooLargeError(err);
          case AtomicReadyWalletRejectedUpgradeError.code:
            throw new AtomicReadyWalletRejectedUpgradeError(err);
          case AtomicityNotSupportedError.code:
            throw new AtomicityNotSupportedError(err);
          case 5e3:
            throw new UserRejectedRequestError(err);
          case WalletConnectSessionSettlementError.code:
            throw new WalletConnectSessionSettlementError(err);
          default:
            if (err_ instanceof BaseError)
              throw err_;
            throw new UnknownRpcError(err);
        }
      }
    }, {
      delay: ({ count, error }) => {
        var _a2;
        if (error && error instanceof HttpRequestError) {
          const retryAfter = (_a2 = error == null ? void 0 : error.headers) == null ? void 0 : _a2.get("Retry-After");
          if (retryAfter == null ? void 0 : retryAfter.match(/\d/))
            return Number.parseInt(retryAfter, 10) * 1e3;
        }
        return ~~(1 << count) * retryDelay;
      },
      retryCount,
      signal,
      shouldRetry: ({ error }) => shouldRetry(error)
    }), { enabled: dedupe, id: requestId });
  };
}
function shouldRetry(error) {
  if (isAbortError(error))
    return false;
  if ("code" in error && typeof error.code === "number") {
    if (error.code === -1)
      return true;
    if (error.code === LimitExceededRpcError.code)
      return true;
    if (error.code === InternalRpcError.code)
      return true;
    if (error.code === 429)
      return true;
    if (error.code === -32007)
      return true;
    return false;
  }
  if (error instanceof HttpRequestError && error.status) {
    if (error.status === 403)
      return true;
    if (error.status === 408)
      return true;
    if (error.status === 413)
      return true;
    if (error.status === 429)
      return true;
    if (error.status === 500)
      return true;
    if (error.status === 502)
      return true;
    if (error.status === 503)
      return true;
    if (error.status === 504)
      return true;
    return false;
  }
  return true;
}
function hashString(str, seed = 0) {
  let h1 = 3735928559 ^ seed;
  let h2 = 1103547991 ^ seed;
  for (let i = 0; i < str.length; i++) {
    const ch = str.charCodeAt(i);
    h1 = Math.imul(h1 ^ ch, 2654435761);
    h2 = Math.imul(h2 ^ ch, 1597334677);
  }
  h1 = Math.imul(h1 ^ h1 >>> 16, 2246822507);
  h1 ^= Math.imul(h2 ^ h2 >>> 16, 3266489909);
  h2 = Math.imul(h2 ^ h2 >>> 16, 2246822507);
  h2 ^= Math.imul(h1 ^ h1 >>> 16, 3266489909);
  return (4294967296 * (2097151 & h2) + (h1 >>> 0)).toString(36);
}

// node_modules/viem/_esm/utils/chain/assertCurrentChain.js
function assertCurrentChain({ chain: chain2, currentChainId }) {
  if (!chain2)
    throw new ChainNotFoundError();
  if (currentChainId !== chain2.id)
    throw new ChainMismatchError({ chain: chain2, currentChainId });
}

// node_modules/@noble/hashes/esm/legacy.js
var SHA1_IV = Uint32Array.from([
  1732584193,
  4023233417,
  2562383102,
  271733878,
  3285377520
]);
var SHA1_W = new Uint32Array(80);
var SHA1 = class extends HashMD {
  constructor() {
    super(64, 20, 8, false);
    this.A = SHA1_IV[0] | 0;
    this.B = SHA1_IV[1] | 0;
    this.C = SHA1_IV[2] | 0;
    this.D = SHA1_IV[3] | 0;
    this.E = SHA1_IV[4] | 0;
  }
  get() {
    const { A, B, C, D, E } = this;
    return [A, B, C, D, E];
  }
  set(A, B, C, D, E) {
    this.A = A | 0;
    this.B = B | 0;
    this.C = C | 0;
    this.D = D | 0;
    this.E = E | 0;
  }
  process(view, offset) {
    for (let i = 0; i < 16; i++, offset += 4)
      SHA1_W[i] = view.getUint32(offset, false);
    for (let i = 16; i < 80; i++)
      SHA1_W[i] = rotl(SHA1_W[i - 3] ^ SHA1_W[i - 8] ^ SHA1_W[i - 14] ^ SHA1_W[i - 16], 1);
    let { A, B, C, D, E } = this;
    for (let i = 0; i < 80; i++) {
      let F, K2;
      if (i < 20) {
        F = Chi(B, C, D);
        K2 = 1518500249;
      } else if (i < 40) {
        F = B ^ C ^ D;
        K2 = 1859775393;
      } else if (i < 60) {
        F = Maj(B, C, D);
        K2 = 2400959708;
      } else {
        F = B ^ C ^ D;
        K2 = 3395469782;
      }
      const T = rotl(A, 5) + F + E + K2 + SHA1_W[i] | 0;
      E = D;
      D = C;
      C = rotl(B, 30);
      B = A;
      A = T;
    }
    A = A + this.A | 0;
    B = B + this.B | 0;
    C = C + this.C | 0;
    D = D + this.D | 0;
    E = E + this.E | 0;
    this.set(A, B, C, D, E);
  }
  roundClean() {
    clean(SHA1_W);
  }
  destroy() {
    this.set(0, 0, 0, 0, 0);
    clean(this.buffer);
  }
};
var sha1 = createHasher(() => new SHA1());
var p32 = Math.pow(2, 32);
var K = Array.from({ length: 64 }, (_, i) => Math.floor(p32 * Math.abs(Math.sin(i + 1))));
var MD5_IV = SHA1_IV.slice(0, 4);
var MD5_W = new Uint32Array(16);
var MD5 = class extends HashMD {
  constructor() {
    super(64, 16, 8, true);
    this.A = MD5_IV[0] | 0;
    this.B = MD5_IV[1] | 0;
    this.C = MD5_IV[2] | 0;
    this.D = MD5_IV[3] | 0;
  }
  get() {
    const { A, B, C, D } = this;
    return [A, B, C, D];
  }
  set(A, B, C, D) {
    this.A = A | 0;
    this.B = B | 0;
    this.C = C | 0;
    this.D = D | 0;
  }
  process(view, offset) {
    for (let i = 0; i < 16; i++, offset += 4)
      MD5_W[i] = view.getUint32(offset, true);
    let { A, B, C, D } = this;
    for (let i = 0; i < 64; i++) {
      let F, g, s;
      if (i < 16) {
        F = Chi(B, C, D);
        g = i;
        s = [7, 12, 17, 22];
      } else if (i < 32) {
        F = Chi(D, B, C);
        g = (5 * i + 1) % 16;
        s = [5, 9, 14, 20];
      } else if (i < 48) {
        F = B ^ C ^ D;
        g = (3 * i + 5) % 16;
        s = [4, 11, 16, 23];
      } else {
        F = C ^ (B | ~D);
        g = 7 * i % 16;
        s = [6, 10, 15, 21];
      }
      F = F + A + K[i] + MD5_W[g];
      A = D;
      D = C;
      C = B;
      B = B + rotl(F, s[i % 4]);
    }
    A = A + this.A | 0;
    B = B + this.B | 0;
    C = C + this.C | 0;
    D = D + this.D | 0;
    this.set(A, B, C, D);
  }
  roundClean() {
    clean(MD5_W);
  }
  destroy() {
    this.set(0, 0, 0, 0);
    clean(this.buffer);
  }
};
var md5 = createHasher(() => new MD5());
var Rho160 = Uint8Array.from([
  7,
  4,
  13,
  1,
  10,
  6,
  15,
  3,
  12,
  0,
  9,
  5,
  2,
  14,
  11,
  8
]);
var Id160 = (() => Uint8Array.from(new Array(16).fill(0).map((_, i) => i)))();
var Pi160 = (() => Id160.map((i) => (9 * i + 5) % 16))();
var idxLR = (() => {
  const L = [Id160];
  const R = [Pi160];
  const res = [L, R];
  for (let i = 0; i < 4; i++)
    for (let j of res)
      j.push(j[i].map((k) => Rho160[k]));
  return res;
})();
var idxL = (() => idxLR[0])();
var idxR = (() => idxLR[1])();
var shifts160 = [
  [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8],
  [12, 13, 11, 15, 6, 9, 9, 7, 12, 15, 11, 13, 7, 8, 7, 7],
  [13, 15, 14, 11, 7, 7, 6, 8, 13, 14, 13, 12, 5, 5, 6, 9],
  [14, 11, 12, 14, 8, 6, 5, 5, 15, 12, 15, 14, 9, 9, 8, 6],
  [15, 12, 13, 13, 9, 5, 8, 6, 14, 11, 12, 11, 8, 6, 5, 5]
].map((i) => Uint8Array.from(i));
var shiftsL160 = idxL.map((idx, i) => idx.map((j) => shifts160[i][j]));
var shiftsR160 = idxR.map((idx, i) => idx.map((j) => shifts160[i][j]));
var Kl160 = Uint32Array.from([
  0,
  1518500249,
  1859775393,
  2400959708,
  2840853838
]);
var Kr160 = Uint32Array.from([
  1352829926,
  1548603684,
  1836072691,
  2053994217,
  0
]);
function ripemd_f(group, x, y, z) {
  if (group === 0)
    return x ^ y ^ z;
  if (group === 1)
    return x & y | ~x & z;
  if (group === 2)
    return (x | ~y) ^ z;
  if (group === 3)
    return x & z | y & ~z;
  return x ^ (y | ~z);
}
var BUF_160 = new Uint32Array(16);
var RIPEMD160 = class extends HashMD {
  constructor() {
    super(64, 20, 8, true);
    this.h0 = 1732584193 | 0;
    this.h1 = 4023233417 | 0;
    this.h2 = 2562383102 | 0;
    this.h3 = 271733878 | 0;
    this.h4 = 3285377520 | 0;
  }
  get() {
    const { h0, h1, h2, h3, h4 } = this;
    return [h0, h1, h2, h3, h4];
  }
  set(h0, h1, h2, h3, h4) {
    this.h0 = h0 | 0;
    this.h1 = h1 | 0;
    this.h2 = h2 | 0;
    this.h3 = h3 | 0;
    this.h4 = h4 | 0;
  }
  process(view, offset) {
    for (let i = 0; i < 16; i++, offset += 4)
      BUF_160[i] = view.getUint32(offset, true);
    let al = this.h0 | 0, ar = al, bl = this.h1 | 0, br = bl, cl = this.h2 | 0, cr = cl, dl = this.h3 | 0, dr = dl, el = this.h4 | 0, er = el;
    for (let group = 0; group < 5; group++) {
      const rGroup = 4 - group;
      const hbl = Kl160[group], hbr = Kr160[group];
      const rl = idxL[group], rr = idxR[group];
      const sl = shiftsL160[group], sr = shiftsR160[group];
      for (let i = 0; i < 16; i++) {
        const tl = rotl(al + ripemd_f(group, bl, cl, dl) + BUF_160[rl[i]] + hbl, sl[i]) + el | 0;
        al = el, el = dl, dl = rotl(cl, 10) | 0, cl = bl, bl = tl;
      }
      for (let i = 0; i < 16; i++) {
        const tr = rotl(ar + ripemd_f(rGroup, br, cr, dr) + BUF_160[rr[i]] + hbr, sr[i]) + er | 0;
        ar = er, er = dr, dr = rotl(cr, 10) | 0, cr = br, br = tr;
      }
    }
    this.set(this.h1 + cl + dr | 0, this.h2 + dl + er | 0, this.h3 + el + ar | 0, this.h4 + al + br | 0, this.h0 + bl + cr | 0);
  }
  roundClean() {
    clean(BUF_160);
  }
  destroy() {
    this.destroyed = true;
    clean(this.buffer);
    this.set(0, 0, 0, 0, 0);
  }
};
var ripemd160 = createHasher(() => new RIPEMD160());

// node_modules/viem/_esm/utils/nonceManager.js
function createNonceManager(parameters) {
  const { source } = parameters;
  const deltaMap = /* @__PURE__ */ new Map();
  const nonceMap = new LruMap(8192);
  const promiseMap = /* @__PURE__ */ new Map();
  const getKey = ({ address, chainId }) => `${address}.${chainId}`;
  const resetCache = (key) => {
    deltaMap.delete(key);
    promiseMap.delete(key);
  };
  return {
    async consume({ address, chainId, client }) {
      const key = getKey({ address, chainId });
      const promise = this.get({ address, chainId, client });
      this.increment({ address, chainId });
      const nonce = await promise;
      await source.set({ address, chainId }, nonce);
      nonceMap.set(key, nonce);
      return nonce;
    },
    async increment({ address, chainId }) {
      const key = getKey({ address, chainId });
      const delta = deltaMap.get(key) ?? 0;
      deltaMap.set(key, delta + 1);
    },
    async get({ address, chainId, client }) {
      const key = getKey({ address, chainId });
      let promise = promiseMap.get(key);
      if (!promise) {
        promise = (async () => {
          try {
            const nonce = await source.get({ address, chainId, client });
            const previousNonce = nonceMap.get(key);
            if (previousNonce !== void 0 && nonce <= previousNonce)
              return previousNonce + 1;
            nonceMap.delete(key);
            return nonce;
          } finally {
            resetCache(key);
          }
        })();
        promiseMap.set(key, promise);
      }
      const delta = deltaMap.get(key) ?? 0;
      return delta + await promise;
    },
    reset({ address, chainId }) {
      const key = getKey({ address, chainId });
      nonceMap.delete(key);
      resetCache(key);
    }
  };
}
function jsonRpc() {
  return {
    async get(parameters) {
      const { address, client } = parameters;
      return getTransactionCount(client, {
        address,
        blockTag: "pending"
      });
    },
    set() {
    }
  };
}
var nonceManager = createNonceManager({
  source: jsonRpc()
});

// node_modules/viem/_esm/utils/promise/withTimeout.js
function withTimeout(fn, { errorInstance = new Error("timed out"), timeout, signal }) {
  return new Promise((resolve, reject) => {
    ;
    (async () => {
      let timeoutId;
      const controller = new AbortController();
      try {
        if (timeout > 0) {
          timeoutId = setTimeout(() => {
            if (signal) {
              controller.abort();
            } else {
              reject(errorInstance);
            }
          }, timeout);
        }
        resolve(await fn({ signal: (controller == null ? void 0 : controller.signal) || null }));
      } catch (err) {
        if ((controller == null ? void 0 : controller.signal.aborted) && isAbortError(err)) {
          reject(errorInstance);
          return;
        }
        reject(err);
      } finally {
        clearTimeout(timeoutId);
      }
    })();
  });
}

// node_modules/viem/_esm/utils/rpc/id.js
function createIdStore() {
  return {
    current: 0,
    take() {
      return this.current++;
    },
    reset() {
      this.current = 0;
    }
  };
}
var idCache = createIdStore();

// node_modules/viem/_esm/utils/rpc/http.js
var defaultMaxResponseBodySize = 10485760;
function getHttpRpcClient(url_, options = {}) {
  const { url, headers: headers_url } = parseUrl(url_);
  return {
    async request(params) {
      var _a, _b, _c;
      const { body, fetchFn = options.fetchFn ?? fetch, maxResponseBodySize = options.maxResponseBodySize ?? defaultMaxResponseBodySize, onRequest = options.onRequest, onResponse = options.onResponse, timeout = options.timeout ?? 1e4 } = params;
      const fetchOptions = {
        ...options.fetchOptions ?? {},
        ...params.fetchOptions ?? {}
      };
      const { headers, method, signal: signal_ } = fetchOptions;
      try {
        const { response, responseBody } = await withTimeout(async ({ signal: timeoutSignal }) => {
          const { signal, cleanup } = anySignal([
            signal_,
            timeout > 0 ? timeoutSignal : null
          ]);
          try {
            const init = {
              ...fetchOptions,
              body: Array.isArray(body) ? stringify(body.map((body2) => ({
                jsonrpc: "2.0",
                id: body2.id ?? idCache.take(),
                ...body2
              }))) : stringify({
                jsonrpc: "2.0",
                id: body.id ?? idCache.take(),
                ...body
              }),
              headers: {
                ...headers_url,
                "Content-Type": "application/json",
                ...headers
              },
              method: method || "POST",
              signal
            };
            const request = new Request(url, init);
            const args = await (onRequest == null ? void 0 : onRequest(request, init)) ?? {
              ...init,
              url
            };
            const response2 = await fetchFn(args.url ?? url, args);
            if (onResponse)
              await onResponse(response2);
            const responseBody2 = await readResponseBody(response2, {
              maxResponseBodySize
            });
            return { response: response2, responseBody: responseBody2 };
          } finally {
            cleanup();
          }
        }, {
          errorInstance: new TimeoutError({ body, url }),
          timeout,
          signal: true
        });
        let data;
        if ((_a = response.headers.get("Content-Type")) == null ? void 0 : _a.startsWith("application/json"))
          data = JSON.parse(responseBody);
        else {
          data = responseBody;
          try {
            data = JSON.parse(data || "{}");
          } catch (err) {
            if (response.ok)
              throw err;
            data = { error: data };
          }
        }
        if (!response.ok) {
          if (typeof ((_b = data.error) == null ? void 0 : _b.code) === "number" && typeof ((_c = data.error) == null ? void 0 : _c.message) === "string")
            return data;
          throw new HttpRequestError({
            body,
            details: stringify(data.error) || response.statusText,
            headers: response.headers,
            status: response.status,
            url
          });
        }
        return data;
      } catch (err) {
        if (signal_ == null ? void 0 : signal_.aborted)
          throw getAbortError(signal_);
        if (isAbortError(err))
          throw err;
        if (err instanceof HttpRequestError)
          throw err;
        if (err instanceof ResponseBodyTooLargeError)
          throw err;
        if (err instanceof TimeoutError)
          throw err;
        throw new HttpRequestError({
          body,
          cause: err,
          url
        });
      }
    }
  };
}
function anySignal(signals) {
  const signals_ = signals.filter((signal) => !!signal);
  if (signals_.length < 2)
    return { signal: signals_[0] ?? null, cleanup: () => {
    } };
  const controller = new AbortController();
  const onAbort = () => {
    var _a;
    cleanup();
    controller.abort((_a = signals_.find((signal) => signal.aborted)) == null ? void 0 : _a.reason);
  };
  const cleanup = () => {
    for (const signal of signals_)
      signal.removeEventListener("abort", onAbort);
  };
  for (const signal of signals_) {
    if (signal.aborted) {
      cleanup();
      controller.abort(signal.reason);
      break;
    }
    signal.addEventListener("abort", onAbort);
  }
  return { signal: controller.signal, cleanup };
}
async function readResponseBody(response, { maxResponseBodySize }) {
  if (maxResponseBodySize === false)
    return response.text();
  const contentLength = response.headers.get("Content-Length");
  if (contentLength) {
    const size7 = Number(contentLength);
    if (size7 > maxResponseBodySize)
      throw new ResponseBodyTooLargeError({
        maxSize: maxResponseBodySize,
        size: size7
      });
  }
  if (!response.body) {
    const body2 = await response.text();
    const size7 = new TextEncoder().encode(body2).length;
    if (size7 > maxResponseBodySize)
      throw new ResponseBodyTooLargeError({
        maxSize: maxResponseBodySize,
        size: size7
      });
    return body2;
  }
  const reader = response.body.getReader();
  const decoder2 = new TextDecoder();
  let body = "";
  let size6 = 0;
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done)
        break;
      size6 += value.byteLength;
      if (size6 > maxResponseBodySize) {
        await reader.cancel();
        throw new ResponseBodyTooLargeError({
          maxSize: maxResponseBodySize,
          size: size6
        });
      }
      body += decoder2.decode(value, { stream: true });
    }
    body += decoder2.decode();
    return body;
  } finally {
    reader.releaseLock();
  }
}
function parseUrl(url_) {
  try {
    const url = new URL(url_);
    const result = (() => {
      if (url.username) {
        const credentials = `${decodeURIComponent(url.username)}:${decodeURIComponent(url.password)}`;
        url.username = "";
        url.password = "";
        return {
          url: url.toString(),
          headers: { Authorization: `Basic ${btoa(credentials)}` }
        };
      }
      return;
    })();
    return { url: url.toString(), ...result };
  } catch {
    return { url: url_ };
  }
}

// node_modules/viem/_esm/utils/rpc/socket.js
var socketClientCache = /* @__PURE__ */ new Map();
async function getSocketRpcClient(parameters) {
  const { getSocket: getSocket2, keepAlive = true, key = "socket", reconnect: reconnect2 = true, url } = parameters;
  const { interval: keepAliveInterval = 3e4 } = typeof keepAlive === "object" ? keepAlive : {};
  const { attempts = 5, delay = 2e3 } = typeof reconnect2 === "object" ? reconnect2 : {};
  const id = JSON.stringify({ keepAlive, key, url, reconnect: reconnect2 });
  let socketClient = socketClientCache.get(id);
  if (socketClient)
    return socketClient;
  let reconnectCount = 0;
  const { schedule } = createBatchScheduler({
    id,
    fn: async () => {
      const requests = /* @__PURE__ */ new Map();
      const subscriptions = /* @__PURE__ */ new Map();
      let error;
      let socket;
      let keepAliveTimer;
      let reconnectTimer;
      let reconnectInProgress = false;
      let intentionallyClosed = false;
      function attemptReconnect() {
        if (reconnect2 && !intentionallyClosed && reconnectCount < attempts) {
          if (reconnectInProgress)
            return;
          reconnectInProgress = true;
          reconnectCount++;
          socket == null ? void 0 : socket.close();
          reconnectTimer = setTimeout(async () => {
            reconnectTimer = void 0;
            if (intentionallyClosed) {
              reconnectInProgress = false;
              return;
            }
            await setup().catch(console.error);
            reconnectInProgress = false;
          }, delay);
        } else {
          requests.clear();
          subscriptions.clear();
        }
      }
      async function setup() {
        const result = await getSocket2({
          onClose() {
            var _a, _b;
            for (const request of requests.values())
              (_a = request.onError) == null ? void 0 : _a.call(request, new SocketClosedError({ url }));
            for (const subscription of subscriptions.values())
              (_b = subscription.onError) == null ? void 0 : _b.call(subscription, new SocketClosedError({ url }));
            attemptReconnect();
          },
          onError(error_) {
            var _a, _b;
            error = error_;
            for (const request of requests.values())
              (_a = request.onError) == null ? void 0 : _a.call(request, error);
            for (const subscription of subscriptions.values())
              (_b = subscription.onError) == null ? void 0 : _b.call(subscription, error);
            attemptReconnect();
          },
          onOpen() {
            error = void 0;
            reconnectCount = 0;
          },
          onResponse(data) {
            const isSubscription = data.method === "eth_subscription";
            const id2 = isSubscription ? data.params.subscription : data.id;
            const cache = isSubscription ? subscriptions : requests;
            const callback = cache.get(id2);
            if (callback)
              callback.onResponse(data);
            if (!isSubscription)
              cache.delete(id2);
          }
        });
        if (intentionallyClosed) {
          result.close();
          return result;
        }
        socket = result;
        if (keepAlive) {
          if (keepAliveTimer)
            clearInterval(keepAliveTimer);
          keepAliveTimer = setInterval(() => {
            var _a;
            return (_a = socket.ping) == null ? void 0 : _a.call(socket);
          }, keepAliveInterval);
        }
        if (reconnect2 && subscriptions.size > 0) {
          const subscriptionEntries = subscriptions.entries();
          for (const [key2, { onResponse, body, onError }] of subscriptionEntries) {
            if (!body)
              continue;
            subscriptions.delete(key2);
            socketClient == null ? void 0 : socketClient.request({ body, onResponse, onError });
          }
        }
        return result;
      }
      await setup();
      error = void 0;
      socketClient = {
        close() {
          intentionallyClosed = true;
          keepAliveTimer && clearInterval(keepAliveTimer);
          if (reconnectTimer) {
            clearTimeout(reconnectTimer);
            reconnectTimer = void 0;
            reconnectInProgress = false;
          }
          socket.close();
          socketClientCache.delete(id);
        },
        get socket() {
          return socket;
        },
        request({ body, onError, onResponse }) {
          var _a;
          if (error && onError)
            onError(error);
          const id2 = body.id ?? idCache.take();
          const callback = (response) => {
            if (typeof response.id === "number" && id2 !== response.id)
              return;
            if (body.method === "eth_subscribe" && typeof response.result === "string")
              subscriptions.set(response.result, {
                onResponse,
                onError,
                body
              });
            onResponse(response);
          };
          if (body.method === "eth_unsubscribe")
            subscriptions.delete((_a = body.params) == null ? void 0 : _a[0]);
          requests.set(id2, { onResponse: callback, onError });
          try {
            socket.request({
              body: {
                jsonrpc: "2.0",
                id: id2,
                ...body
              }
            });
          } catch (error2) {
            onError == null ? void 0 : onError(error2);
          }
        },
        requestAsync({ body, timeout = 1e4 }) {
          const id2 = body.id ?? idCache.take();
          return withTimeout(() => new Promise((onResponse, onError) => this.request({
            body: { ...body, id: id2 },
            onError,
            onResponse
          })), {
            errorInstance: new TimeoutError({ body, url }),
            timeout
          }).finally(() => requests.delete(id2));
        },
        requests,
        subscriptions,
        url
      };
      socketClientCache.set(id, socketClient);
      return [socketClient];
    }
  });
  const [_, [socketClient_]] = await schedule();
  return socketClient_;
}

// node_modules/viem/_esm/utils/rpc/webSocket.js
async function getWebSocketRpcClient(url, options = {}) {
  const { keepAlive, reconnect: reconnect2 } = options;
  return getSocketRpcClient({
    async getSocket({ onClose, onError, onOpen, onResponse }) {
      const WebSocket = await import("./native-HWIHAEV7.js").then((module) => module.WebSocket);
      const socket = new WebSocket(url);
      function onClose_() {
        socket.removeEventListener("close", onClose_);
        socket.removeEventListener("message", onMessage);
        socket.removeEventListener("error", onError);
        socket.removeEventListener("open", onOpen);
        onClose();
      }
      function onMessage({ data }) {
        if (typeof data === "string" && data.trim().length === 0)
          return;
        try {
          const _data = JSON.parse(data);
          onResponse(_data);
        } catch (error) {
          onError(error);
        }
      }
      socket.addEventListener("close", onClose_);
      socket.addEventListener("message", onMessage);
      socket.addEventListener("error", onError);
      socket.addEventListener("open", onOpen);
      if (socket.readyState === WebSocket.CONNECTING) {
        await new Promise((resolve, reject) => {
          if (!socket)
            return;
          socket.onopen = resolve;
          socket.onerror = reject;
        });
      }
      const { close: close_ } = socket;
      return Object.assign(socket, {
        close() {
          close_.bind(socket)();
          onClose_();
        },
        ping() {
          try {
            if (socket.readyState === socket.CLOSED || socket.readyState === socket.CLOSING)
              throw new WebSocketRequestError({
                url: socket.url,
                cause: new SocketClosedError({ url: socket.url })
              });
            const body = {
              jsonrpc: "2.0",
              id: null,
              method: "net_version",
              params: []
            };
            socket.send(JSON.stringify(body));
          } catch (error) {
            onError(error);
          }
        },
        request({ body }) {
          if (socket.readyState === socket.CLOSED || socket.readyState === socket.CLOSING)
            throw new WebSocketRequestError({
              body,
              url: socket.url,
              cause: new SocketClosedError({ url: socket.url })
            });
          return socket.send(JSON.stringify(body));
        }
      });
    },
    keepAlive,
    reconnect: reconnect2,
    url
  });
}

// node_modules/viem/_esm/utils/rpc/compat.js
function webSocket(socketClient, { body, onError, onResponse }) {
  socketClient.request({
    body,
    onError,
    onResponse
  });
  return socketClient;
}
async function webSocketAsync(socketClient, { body, timeout = 1e4 }) {
  return socketClient.requestAsync({
    body,
    timeout
  });
}
async function getSocket(url) {
  const client = await getWebSocketRpcClient(url);
  return Object.assign(client.socket, {
    requests: client.requests,
    subscriptions: client.subscriptions
  });
}
var rpc = {
  /**
   * @deprecated use `getHttpRpcClient` instead.
   *
   * ```diff
   * -import { rpc } from 'viem/utils'
   * +import { getHttpRpcClient } from 'viem/utils'
   *
   * -rpc.http(url, params)
   * +const httpClient = getHttpRpcClient(url)
   * +httpClient.request(params)
   * ```
   */
  http(url, params) {
    return getHttpRpcClient(url).request(params);
  },
  /**
   * @deprecated use `getWebSocketRpcClient` instead.
   *
   * ```diff
   * -import { rpc } from 'viem/utils'
   * +import { getWebSocketRpcClient } from 'viem/utils'
   *
   * -rpc.webSocket(url, params)
   * +const webSocketClient = getWebSocketRpcClient(url)
   * +webSocketClient.request(params)
   * ```
   */
  webSocket,
  /**
   * @deprecated use `getWebSocketRpcClient` instead.
   *
   * ```diff
   * -import { rpc } from 'viem/utils'
   * +import { getWebSocketRpcClient } from 'viem/utils'
   *
   * -const response = await rpc.webSocketAsync(url, params)
   * +const webSocketClient = getWebSocketRpcClient(url)
   * +const response = await webSocketClient.requestAsync(params)
   * ```
   */
  webSocketAsync
};

// node_modules/viem/_esm/constants/strings.js
var presignMessagePrefix = "Ethereum Signed Message:\n";

// node_modules/viem/_esm/utils/signature/toPrefixedMessage.js
function toPrefixedMessage(message_) {
  const message = (() => {
    if (typeof message_ === "string")
      return stringToHex(message_);
    if (typeof message_.raw === "string")
      return message_.raw;
    return bytesToHex(message_.raw);
  })();
  const prefix = stringToHex(`${presignMessagePrefix}${size(message)}`);
  return concat([prefix, message]);
}

// node_modules/viem/_esm/utils/signature/hashMessage.js
function hashMessage(message, to_) {
  return keccak256(toPrefixedMessage(message), to_);
}

// node_modules/viem/_esm/errors/typedData.js
var InvalidDomainError = class extends BaseError {
  constructor({ domain }) {
    super(`Invalid domain "${stringify(domain)}".`, {
      metaMessages: ["Must be a valid EIP-712 domain."]
    });
  }
};
var InvalidPrimaryTypeError = class extends BaseError {
  constructor({ primaryType, types }) {
    super(`Invalid primary type \`${primaryType}\` must be one of \`${JSON.stringify(Object.keys(types))}\`.`, {
      docsPath: "/api/glossary/Errors#typeddatainvalidprimarytypeerror",
      metaMessages: ["Check that the primary type is a key in `types`."]
    });
  }
};
var InvalidStructTypeError = class extends BaseError {
  constructor({ type }) {
    super(`Struct type "${type}" is invalid.`, {
      metaMessages: ["Struct type must not be a Solidity type."],
      name: "InvalidStructTypeError"
    });
  }
};
var InvalidTypedDataTypeError = class extends BaseError {
  constructor({ type }) {
    const canonicalType = type.replace(/^(u?int)/, "$&256");
    super(`Type "${type}" is not a valid EIP-712 type.`, {
      metaMessages: [`Use "${canonicalType}" instead.`],
      name: "InvalidTypedDataTypeError"
    });
  }
};

// node_modules/viem/_esm/utils/typedData.js
function serializeTypedData(parameters) {
  const { domain: domain_, message: message_, primaryType, types } = parameters;
  const normalizeData = (struct, data_) => {
    const data = { ...data_ };
    for (const param of struct) {
      const { name, type } = param;
      if (type === "address")
        data[name] = data[name].toLowerCase();
    }
    return data;
  };
  const domain = (() => {
    if (!types.EIP712Domain)
      return {};
    if (!domain_)
      return {};
    return normalizeData(types.EIP712Domain, domain_);
  })();
  const message = (() => {
    if (primaryType === "EIP712Domain")
      return void 0;
    return normalizeData(types[primaryType], message_);
  })();
  return stringify({ domain, message, primaryType, types });
}
function validateTypedData(parameters) {
  const { domain, message, primaryType, types } = parameters;
  const validateData = (struct, data) => {
    for (const param of struct) {
      const { name, type } = param;
      const value = data[name];
      const baseType = type.replace(/(\[[0-9]*\])+$/, "");
      if (baseType === "int" || baseType === "uint")
        throw new InvalidTypedDataTypeError({ type });
      const integerMatch = type.match(integerRegex);
      if (integerMatch && (typeof value === "number" || typeof value === "bigint")) {
        const [_type, base, size_] = integerMatch;
        numberToHex(value, {
          signed: base === "int",
          size: Number.parseInt(size_, 10) / 8
        });
      }
      if (type === "address" && typeof value === "string" && !isAddress(value))
        throw new InvalidAddressError({ address: value });
      const bytesMatch = type.match(bytesRegex);
      if (bytesMatch) {
        const [_type, size_] = bytesMatch;
        if (size_ && size(value) !== Number.parseInt(size_, 10))
          throw new BytesSizeMismatchError({
            expectedSize: Number.parseInt(size_, 10),
            givenSize: size(value)
          });
      }
      const struct2 = types[type];
      if (struct2) {
        validateReference(type);
        validateData(struct2, value);
      }
    }
  };
  if (types.EIP712Domain && domain) {
    if (typeof domain !== "object")
      throw new InvalidDomainError({ domain });
    validateData(types.EIP712Domain, domain);
  }
  if (primaryType !== "EIP712Domain") {
    if (types[primaryType])
      validateData(types[primaryType], message);
    else
      throw new InvalidPrimaryTypeError({ primaryType, types });
  }
}
function getTypesForEIP712Domain({ domain }) {
  return [
    typeof (domain == null ? void 0 : domain.name) === "string" && { name: "name", type: "string" },
    typeof (domain == null ? void 0 : domain.version) === "string" && { name: "version", type: "string" },
    (typeof (domain == null ? void 0 : domain.chainId) === "number" || typeof (domain == null ? void 0 : domain.chainId) === "bigint") && {
      name: "chainId",
      type: "uint256"
    },
    (domain == null ? void 0 : domain.verifyingContract) && {
      name: "verifyingContract",
      type: "address"
    },
    (domain == null ? void 0 : domain.salt) && { name: "salt", type: "bytes32" }
  ].filter(Boolean);
}
function validateReference(type) {
  if (type === "address" || type === "bool" || type === "string" || type.startsWith("bytes") || type.startsWith("uint") || type.startsWith("int"))
    throw new InvalidStructTypeError({ type });
}

// node_modules/viem/_esm/utils/signature/hashTypedData.js
function hashTypedData(parameters) {
  const { domain = {}, message, primaryType } = parameters;
  const types = {
    EIP712Domain: getTypesForEIP712Domain({ domain }),
    ...parameters.types
  };
  validateTypedData({
    domain,
    message,
    primaryType,
    types
  });
  const parts = ["0x1901"];
  if (domain)
    parts.push(hashDomain({
      domain,
      types
    }));
  if (primaryType !== "EIP712Domain")
    parts.push(hashStruct({
      data: message,
      primaryType,
      types
    }));
  return keccak256(concat(parts));
}
function hashDomain({ domain, types }) {
  return hashStruct({
    data: domain,
    primaryType: "EIP712Domain",
    types
  });
}
function hashStruct({ data, primaryType, types }) {
  const encoded = encodeData({
    data,
    primaryType,
    types
  });
  return keccak256(encoded);
}
function encodeData({ data, primaryType, types }) {
  const encodedTypes = [{ type: "bytes32" }];
  const encodedValues = [hashType({ primaryType, types })];
  for (const field of types[primaryType]) {
    const [type, value] = encodeField({
      types,
      name: field.name,
      type: field.type,
      value: data[field.name]
    });
    encodedTypes.push(type);
    encodedValues.push(value);
  }
  return encodeAbiParameters(encodedTypes, encodedValues);
}
function hashType({ primaryType, types }) {
  const encodedHashType = toHex(encodeType({ primaryType, types }));
  return keccak256(encodedHashType);
}
function encodeType({ primaryType, types }) {
  let result = "";
  const unsortedDeps = findTypeDependencies({ primaryType, types });
  unsortedDeps.delete(primaryType);
  const deps = [primaryType, ...Array.from(unsortedDeps).sort()];
  for (const type of deps) {
    result += `${type}(${types[type].map(({ name, type: t }) => `${t} ${name}`).join(",")})`;
  }
  return result;
}
function findTypeDependencies({ primaryType: primaryType_, types }, results = /* @__PURE__ */ new Set()) {
  const match = primaryType_.match(/^\w*/u);
  const primaryType = match == null ? void 0 : match[0];
  if (results.has(primaryType) || types[primaryType] === void 0) {
    return results;
  }
  results.add(primaryType);
  for (const field of types[primaryType]) {
    findTypeDependencies({ primaryType: field.type, types }, results);
  }
  return results;
}
function encodeField({ types, name, type, value }) {
  if (types[type] !== void 0) {
    return [
      { type: "bytes32" },
      keccak256(encodeData({ data: value, primaryType: type, types }))
    ];
  }
  if (type === "bytes")
    return [{ type: "bytes32" }, keccak256(value)];
  if (type === "string")
    return [{ type: "bytes32" }, keccak256(toHex(value))];
  if (type.lastIndexOf("]") === type.length - 1) {
    const parsedType = type.slice(0, type.lastIndexOf("["));
    const typeValuePairs = value.map((item) => encodeField({
      name,
      type: parsedType,
      types,
      value: item
    }));
    return [
      { type: "bytes32" },
      keccak256(encodeAbiParameters(typeValuePairs.map(([t]) => t), typeValuePairs.map(([, v]) => v)))
    ];
  }
  return [{ type }, value];
}

// node_modules/ox/_esm/erc8010/SignatureErc8010.js
var SignatureErc8010_exports = {};
__export(SignatureErc8010_exports, {
  InvalidWrappedSignatureError: () => InvalidWrappedSignatureError,
  assert: () => assert4,
  from: () => from10,
  magicBytes: () => magicBytes,
  suffixParameters: () => suffixParameters,
  unwrap: () => unwrap,
  validate: () => validate4,
  wrap: () => wrap
});

// node_modules/ox/_esm/core/internal/lru.js
var LruMap2 = class extends Map {
  constructor(size6) {
    super();
    Object.defineProperty(this, "maxSize", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    this.maxSize = size6;
  }
  get(key) {
    const value = super.get(key);
    if (super.has(key) && value !== void 0) {
      this.delete(key);
      super.set(key, value);
    }
    return value;
  }
  set(key, value) {
    super.set(key, value);
    if (this.maxSize && this.size > this.maxSize) {
      const firstKey = this.keys().next().value;
      if (firstKey)
        this.delete(firstKey);
    }
    return this;
  }
};

// node_modules/ox/_esm/core/Caches.js
var caches = {
  checksum: new LruMap2(8192)
};
var checksum = caches.checksum;

// node_modules/ox/_esm/core/Hash.js
function keccak2562(value, options = {}) {
  const { as = typeof value === "string" ? "Hex" : "Bytes" } = options;
  const bytes = keccak_256(from2(value));
  if (as === "Bytes")
    return bytes;
  return fromBytes(bytes);
}

// node_modules/ox/_esm/core/PublicKey.js
function assert(publicKey, options = {}) {
  const { compressed } = options;
  const { prefix, x, y } = publicKey;
  if (compressed === false || typeof x === "bigint" && typeof y === "bigint") {
    if (prefix !== 4)
      throw new InvalidPrefixError({
        prefix,
        cause: new InvalidUncompressedPrefixError()
      });
    return;
  }
  if (compressed === true || typeof x === "bigint" && typeof y === "undefined") {
    if (prefix !== 3 && prefix !== 2)
      throw new InvalidPrefixError({
        prefix,
        cause: new InvalidCompressedPrefixError()
      });
    return;
  }
  throw new InvalidError({ publicKey });
}
function from4(value) {
  const publicKey = (() => {
    if (validate2(value))
      return fromHex3(value);
    if (validate(value))
      return fromBytes3(value);
    const { prefix, x, y } = value;
    if (typeof x === "bigint" && typeof y === "bigint")
      return { prefix: prefix ?? 4, x, y };
    return { prefix, x };
  })();
  assert(publicKey);
  return publicKey;
}
function fromBytes3(publicKey) {
  return fromHex3(fromBytes(publicKey));
}
function fromHex3(publicKey) {
  if (publicKey.length !== 132 && publicKey.length !== 130 && publicKey.length !== 68)
    throw new InvalidSerializedSizeError({ publicKey });
  if (publicKey.length === 130) {
    const x2 = BigInt(slice3(publicKey, 0, 32));
    const y = BigInt(slice3(publicKey, 32, 64));
    return {
      prefix: 4,
      x: x2,
      y
    };
  }
  if (publicKey.length === 132) {
    const prefix2 = Number(slice3(publicKey, 0, 1));
    const x2 = BigInt(slice3(publicKey, 1, 33));
    const y = BigInt(slice3(publicKey, 33, 65));
    return {
      prefix: prefix2,
      x: x2,
      y
    };
  }
  const prefix = Number(slice3(publicKey, 0, 1));
  const x = BigInt(slice3(publicKey, 1, 33));
  return {
    prefix,
    x
  };
}
function toHex2(publicKey, options = {}) {
  assert(publicKey);
  const { prefix, x, y } = publicKey;
  const { includePrefix = true } = options;
  const publicKey_ = concat2(
    includePrefix ? fromNumber(prefix, { size: 1 }) : "0x",
    fromNumber(x, { size: 32 }),
    // If the public key is not compressed, add the y coordinate.
    typeof y === "bigint" ? fromNumber(y, { size: 32 }) : "0x"
  );
  return publicKey_;
}
var InvalidError = class extends BaseError2 {
  constructor({ publicKey }) {
    super(`Value \`${stringify2(publicKey)}\` is not a valid public key.`, {
      metaMessages: [
        "Public key must contain:",
        "- an `x` and `prefix` value (compressed)",
        "- an `x`, `y`, and `prefix` value (uncompressed)"
      ]
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "PublicKey.InvalidError"
    });
  }
};
var InvalidPrefixError = class extends BaseError2 {
  constructor({ prefix, cause }) {
    super(`Prefix "${prefix}" is invalid.`, {
      cause
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "PublicKey.InvalidPrefixError"
    });
  }
};
var InvalidCompressedPrefixError = class extends BaseError2 {
  constructor() {
    super("Prefix must be 2 or 3 for compressed public keys.");
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "PublicKey.InvalidCompressedPrefixError"
    });
  }
};
var InvalidUncompressedPrefixError = class extends BaseError2 {
  constructor() {
    super("Prefix must be 4 for uncompressed public keys.");
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "PublicKey.InvalidUncompressedPrefixError"
    });
  }
};
var InvalidSerializedSizeError = class extends BaseError2 {
  constructor({ publicKey }) {
    super(`Value \`${publicKey}\` is an invalid public key size.`, {
      metaMessages: [
        "Expected: 33 bytes (compressed + prefix), 64 bytes (uncompressed) or 65 bytes (uncompressed + prefix).",
        `Received ${size3(from3(publicKey))} bytes.`
      ]
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "PublicKey.InvalidSerializedSizeError"
    });
  }
};

// node_modules/ox/_esm/core/Address.js
var addressRegex = /^0x[a-fA-F0-9]{40}$/;
function assert2(value, options = {}) {
  const { strict = true } = options;
  if (!addressRegex.test(value))
    throw new InvalidAddressError2({
      address: value,
      cause: new InvalidInputError()
    });
  if (strict) {
    if (value.toLowerCase() === value)
      return;
    if (checksum2(value) !== value)
      throw new InvalidAddressError2({
        address: value,
        cause: new InvalidChecksumError()
      });
  }
}
function checksum2(address) {
  if (checksum.has(address))
    return checksum.get(address);
  assert2(address, { strict: false });
  const hexAddress = address.substring(2).toLowerCase();
  const hash2 = keccak2562(fromString(hexAddress), { as: "Bytes" });
  const characters = hexAddress.split("");
  for (let i = 0; i < 40; i += 2) {
    if (hash2[i >> 1] >> 4 >= 8 && characters[i]) {
      characters[i] = characters[i].toUpperCase();
    }
    if ((hash2[i >> 1] & 15) >= 8 && characters[i + 1]) {
      characters[i + 1] = characters[i + 1].toUpperCase();
    }
  }
  const result = `0x${characters.join("")}`;
  checksum.set(address, result);
  return result;
}
function from5(address, options = {}) {
  const { checksum: checksumVal = false } = options;
  assert2(address);
  if (checksumVal)
    return checksum2(address);
  return address;
}
function fromPublicKey(publicKey, options = {}) {
  const address = keccak2562(`0x${toHex2(publicKey).slice(4)}`).substring(26);
  return from5(`0x${address}`, options);
}
function validate3(address, options = {}) {
  const { strict = true } = options ?? {};
  try {
    assert2(address, { strict });
    return true;
  } catch {
    return false;
  }
}
var InvalidAddressError2 = class extends BaseError2 {
  constructor({ address, cause }) {
    super(`Address "${address}" is invalid.`, {
      cause
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Address.InvalidAddressError"
    });
  }
};
var InvalidInputError = class extends BaseError2 {
  constructor() {
    super("Address is not a 20 byte (40 hexadecimal character) value.");
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Address.InvalidInputError"
    });
  }
};
var InvalidChecksumError = class extends BaseError2 {
  constructor() {
    super("Address does not match its checksum counterpart.");
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Address.InvalidChecksumError"
    });
  }
};

// node_modules/ox/_esm/core/Solidity.js
var arrayRegex2 = /^(.*)\[([0-9]*)\]$/;
var bytesRegex2 = /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/;
var integerRegex2 = /^(u?int)(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/;
var maxInt8 = 2n ** (8n - 1n) - 1n;
var maxInt16 = 2n ** (16n - 1n) - 1n;
var maxInt24 = 2n ** (24n - 1n) - 1n;
var maxInt32 = 2n ** (32n - 1n) - 1n;
var maxInt40 = 2n ** (40n - 1n) - 1n;
var maxInt48 = 2n ** (48n - 1n) - 1n;
var maxInt56 = 2n ** (56n - 1n) - 1n;
var maxInt64 = 2n ** (64n - 1n) - 1n;
var maxInt72 = 2n ** (72n - 1n) - 1n;
var maxInt80 = 2n ** (80n - 1n) - 1n;
var maxInt88 = 2n ** (88n - 1n) - 1n;
var maxInt96 = 2n ** (96n - 1n) - 1n;
var maxInt104 = 2n ** (104n - 1n) - 1n;
var maxInt112 = 2n ** (112n - 1n) - 1n;
var maxInt120 = 2n ** (120n - 1n) - 1n;
var maxInt128 = 2n ** (128n - 1n) - 1n;
var maxInt136 = 2n ** (136n - 1n) - 1n;
var maxInt144 = 2n ** (144n - 1n) - 1n;
var maxInt152 = 2n ** (152n - 1n) - 1n;
var maxInt160 = 2n ** (160n - 1n) - 1n;
var maxInt168 = 2n ** (168n - 1n) - 1n;
var maxInt176 = 2n ** (176n - 1n) - 1n;
var maxInt184 = 2n ** (184n - 1n) - 1n;
var maxInt192 = 2n ** (192n - 1n) - 1n;
var maxInt200 = 2n ** (200n - 1n) - 1n;
var maxInt208 = 2n ** (208n - 1n) - 1n;
var maxInt216 = 2n ** (216n - 1n) - 1n;
var maxInt224 = 2n ** (224n - 1n) - 1n;
var maxInt232 = 2n ** (232n - 1n) - 1n;
var maxInt240 = 2n ** (240n - 1n) - 1n;
var maxInt248 = 2n ** (248n - 1n) - 1n;
var maxInt256 = 2n ** (256n - 1n) - 1n;
var minInt8 = -(2n ** (8n - 1n));
var minInt16 = -(2n ** (16n - 1n));
var minInt24 = -(2n ** (24n - 1n));
var minInt32 = -(2n ** (32n - 1n));
var minInt40 = -(2n ** (40n - 1n));
var minInt48 = -(2n ** (48n - 1n));
var minInt56 = -(2n ** (56n - 1n));
var minInt64 = -(2n ** (64n - 1n));
var minInt72 = -(2n ** (72n - 1n));
var minInt80 = -(2n ** (80n - 1n));
var minInt88 = -(2n ** (88n - 1n));
var minInt96 = -(2n ** (96n - 1n));
var minInt104 = -(2n ** (104n - 1n));
var minInt112 = -(2n ** (112n - 1n));
var minInt120 = -(2n ** (120n - 1n));
var minInt128 = -(2n ** (128n - 1n));
var minInt136 = -(2n ** (136n - 1n));
var minInt144 = -(2n ** (144n - 1n));
var minInt152 = -(2n ** (152n - 1n));
var minInt160 = -(2n ** (160n - 1n));
var minInt168 = -(2n ** (168n - 1n));
var minInt176 = -(2n ** (176n - 1n));
var minInt184 = -(2n ** (184n - 1n));
var minInt192 = -(2n ** (192n - 1n));
var minInt200 = -(2n ** (200n - 1n));
var minInt208 = -(2n ** (208n - 1n));
var minInt216 = -(2n ** (216n - 1n));
var minInt224 = -(2n ** (224n - 1n));
var minInt232 = -(2n ** (232n - 1n));
var minInt240 = -(2n ** (240n - 1n));
var minInt248 = -(2n ** (248n - 1n));
var minInt256 = -(2n ** (256n - 1n));
var maxUint8 = 2n ** 8n - 1n;
var maxUint16 = 2n ** 16n - 1n;
var maxUint24 = 2n ** 24n - 1n;
var maxUint32 = 2n ** 32n - 1n;
var maxUint40 = 2n ** 40n - 1n;
var maxUint48 = 2n ** 48n - 1n;
var maxUint56 = 2n ** 56n - 1n;
var maxUint64 = 2n ** 64n - 1n;
var maxUint72 = 2n ** 72n - 1n;
var maxUint80 = 2n ** 80n - 1n;
var maxUint88 = 2n ** 88n - 1n;
var maxUint96 = 2n ** 96n - 1n;
var maxUint104 = 2n ** 104n - 1n;
var maxUint112 = 2n ** 112n - 1n;
var maxUint120 = 2n ** 120n - 1n;
var maxUint128 = 2n ** 128n - 1n;
var maxUint136 = 2n ** 136n - 1n;
var maxUint144 = 2n ** 144n - 1n;
var maxUint152 = 2n ** 152n - 1n;
var maxUint160 = 2n ** 160n - 1n;
var maxUint168 = 2n ** 168n - 1n;
var maxUint176 = 2n ** 176n - 1n;
var maxUint184 = 2n ** 184n - 1n;
var maxUint192 = 2n ** 192n - 1n;
var maxUint200 = 2n ** 200n - 1n;
var maxUint208 = 2n ** 208n - 1n;
var maxUint216 = 2n ** 216n - 1n;
var maxUint224 = 2n ** 224n - 1n;
var maxUint232 = 2n ** 232n - 1n;
var maxUint240 = 2n ** 240n - 1n;
var maxUint248 = 2n ** 248n - 1n;
var maxUint2562 = 2n ** 256n - 1n;

// node_modules/ox/_esm/core/internal/abiParameters.js
function decodeParameter(cursor, param, options) {
  const { checksumAddress: checksumAddress2, staticPosition } = options;
  const arrayComponents = getArrayComponents(param.type);
  if (arrayComponents) {
    const [length, type] = arrayComponents;
    return decodeArray(cursor, { ...param, type }, { checksumAddress: checksumAddress2, length, staticPosition });
  }
  if (param.type === "tuple")
    return decodeTuple(cursor, param, {
      checksumAddress: checksumAddress2,
      staticPosition
    });
  if (param.type === "address")
    return decodeAddress2(cursor, { checksum: checksumAddress2 });
  if (param.type === "bool")
    return decodeBool(cursor);
  if (param.type.startsWith("bytes"))
    return decodeBytes(cursor, param, { staticPosition });
  if (param.type.startsWith("uint") || param.type.startsWith("int"))
    return decodeNumber(cursor, param);
  if (param.type === "string")
    return decodeString(cursor, { staticPosition });
  throw new InvalidTypeError(param.type);
}
var sizeOfLength = 32;
var sizeOfOffset = 32;
function decodeAddress2(cursor, options = {}) {
  const { checksum: checksum4 = false } = options;
  const value = cursor.readBytes(32);
  const wrap3 = (address) => checksum4 ? checksum2(address) : address;
  return [wrap3(fromBytes(slice2(value, -20))), 32];
}
function decodeArray(cursor, param, options) {
  const { checksumAddress: checksumAddress2, length, staticPosition } = options;
  if (length === null) {
    const offset = toNumber(cursor.readBytes(sizeOfOffset));
    const start = staticPosition + offset;
    const startOfData = start + sizeOfLength;
    cursor.setPosition(start);
    const length2 = toNumber(cursor.readBytes(sizeOfLength));
    const dynamicChild = hasDynamicChild(param);
    let consumed2 = 0;
    const value2 = [];
    for (let i = 0; i < length2; ++i) {
      cursor.setPosition(startOfData + (dynamicChild ? i * 32 : consumed2));
      const [data, consumed_] = decodeParameter(cursor, param, {
        checksumAddress: checksumAddress2,
        staticPosition: startOfData
      });
      consumed2 += consumed_;
      value2.push(data);
      if (consumed_ === 0) {
        cursor.assertReadLimit();
        cursor._touch();
      }
    }
    cursor.setPosition(staticPosition + 32);
    return [value2, 32];
  }
  if (hasDynamicChild(param)) {
    const offset = toNumber(cursor.readBytes(sizeOfOffset));
    const start = staticPosition + offset;
    const value2 = [];
    for (let i = 0; i < length; ++i) {
      cursor.setPosition(start + i * 32);
      const [data] = decodeParameter(cursor, param, {
        checksumAddress: checksumAddress2,
        staticPosition: start
      });
      value2.push(data);
    }
    cursor.setPosition(staticPosition + 32);
    return [value2, 32];
  }
  let consumed = 0;
  const value = [];
  for (let i = 0; i < length; ++i) {
    const [data, consumed_] = decodeParameter(cursor, param, {
      checksumAddress: checksumAddress2,
      staticPosition: staticPosition + consumed
    });
    consumed += consumed_;
    value.push(data);
    if (consumed_ === 0) {
      cursor.assertReadLimit();
      cursor._touch();
    }
  }
  return [value, consumed];
}
function decodeBool(cursor) {
  return [toBoolean(cursor.readBytes(32), { size: 32 }), 32];
}
function decodeBytes(cursor, param, { staticPosition }) {
  const [_, size6] = param.type.split("bytes");
  if (!size6) {
    const offset = toNumber(cursor.readBytes(32));
    cursor.setPosition(staticPosition + offset);
    const length = toNumber(cursor.readBytes(32));
    if (length === 0) {
      cursor.setPosition(staticPosition + 32);
      return ["0x", 32];
    }
    const data = cursor.readBytes(length);
    cursor.setPosition(staticPosition + 32);
    return [fromBytes(data), 32];
  }
  const value = fromBytes(cursor.readBytes(Number.parseInt(size6, 10), 32));
  return [value, 32];
}
function decodeNumber(cursor, param) {
  const signed = param.type.startsWith("int");
  const size6 = Number.parseInt(param.type.split("int")[1] || "256", 10);
  const value = cursor.readBytes(32);
  return [
    size6 > 48 ? toBigInt(value, { signed }) : toNumber(value, { signed }),
    32
  ];
}
function decodeTuple(cursor, param, options) {
  const { checksumAddress: checksumAddress2, staticPosition } = options;
  const hasUnnamedChild = param.components.length === 0 || param.components.some(({ name }) => !name);
  const value = hasUnnamedChild ? [] : {};
  let consumed = 0;
  if (hasDynamicChild(param)) {
    const offset = toNumber(cursor.readBytes(sizeOfOffset));
    const start = staticPosition + offset;
    for (let i = 0; i < param.components.length; ++i) {
      const component = param.components[i];
      cursor.setPosition(start + consumed);
      const [data, consumed_] = decodeParameter(cursor, component, {
        checksumAddress: checksumAddress2,
        staticPosition: start
      });
      consumed += consumed_;
      value[hasUnnamedChild ? i : component == null ? void 0 : component.name] = data;
    }
    cursor.setPosition(staticPosition + 32);
    return [value, 32];
  }
  for (let i = 0; i < param.components.length; ++i) {
    const component = param.components[i];
    const [data, consumed_] = decodeParameter(cursor, component, {
      checksumAddress: checksumAddress2,
      staticPosition
    });
    value[hasUnnamedChild ? i : component == null ? void 0 : component.name] = data;
    consumed += consumed_;
  }
  return [value, consumed];
}
function decodeString(cursor, { staticPosition }) {
  const offset = toNumber(cursor.readBytes(32));
  const start = staticPosition + offset;
  cursor.setPosition(start);
  const length = toNumber(cursor.readBytes(32));
  if (length === 0) {
    cursor.setPosition(staticPosition + 32);
    return ["", 32];
  }
  const data = cursor.readBytes(length, 32);
  const value = toString(trimLeft(data));
  cursor.setPosition(staticPosition + 32);
  return [value, 32];
}
function prepareParameters({ checksumAddress: checksumAddress2, parameters, values }) {
  const preparedParameters = [];
  for (let i = 0; i < parameters.length; i++) {
    preparedParameters.push(prepareParameter({
      checksumAddress: checksumAddress2,
      parameter: parameters[i],
      value: values[i]
    }));
  }
  return preparedParameters;
}
function prepareParameter({ checksumAddress: checksumAddress2 = false, parameter: parameter_, value }) {
  const parameter = parameter_;
  const arrayComponents = getArrayComponents(parameter.type);
  if (arrayComponents) {
    const [length, type] = arrayComponents;
    return encodeArray(value, {
      checksumAddress: checksumAddress2,
      length,
      parameter: {
        ...parameter,
        type
      }
    });
  }
  if (parameter.type === "tuple") {
    return encodeTuple(value, {
      checksumAddress: checksumAddress2,
      parameter
    });
  }
  if (parameter.type === "address") {
    return encodeAddress(value, {
      checksum: checksumAddress2
    });
  }
  if (parameter.type === "bool") {
    return encodeBoolean(value);
  }
  if (parameter.type.startsWith("uint") || parameter.type.startsWith("int")) {
    const signed = parameter.type.startsWith("int");
    const [, , size6 = "256"] = integerRegex2.exec(parameter.type) ?? [];
    return encodeNumber(value, {
      signed,
      size: Number(size6)
    });
  }
  if (parameter.type.startsWith("bytes")) {
    return encodeBytes(value, { type: parameter.type });
  }
  if (parameter.type === "string") {
    return encodeString(value);
  }
  throw new InvalidTypeError(parameter.type);
}
function encode(preparedParameters) {
  let staticSize = 0;
  for (let i = 0; i < preparedParameters.length; i++) {
    const { dynamic, encoded } = preparedParameters[i];
    if (dynamic)
      staticSize += 32;
    else
      staticSize += size3(encoded);
  }
  const staticParameters = [];
  const dynamicParameters = [];
  let dynamicSize = 0;
  for (let i = 0; i < preparedParameters.length; i++) {
    const { dynamic, encoded } = preparedParameters[i];
    if (dynamic) {
      staticParameters.push(fromNumber(staticSize + dynamicSize, { size: 32 }));
      dynamicParameters.push(encoded);
      dynamicSize += size3(encoded);
    } else {
      staticParameters.push(encoded);
    }
  }
  return concat2(...staticParameters, ...dynamicParameters);
}
function encodeAddress(value, options) {
  const { checksum: checksum4 = false } = options;
  assert2(value, { strict: checksum4 });
  return {
    dynamic: false,
    encoded: padLeft(value.toLowerCase())
  };
}
function encodeArray(value, options) {
  const { checksumAddress: checksumAddress2, length, parameter } = options;
  const dynamic = length === null;
  if (!Array.isArray(value))
    throw new InvalidArrayError(value);
  if (!dynamic && value.length !== length)
    throw new ArrayLengthMismatchError({
      expectedLength: length,
      givenLength: value.length,
      type: `${parameter.type}[${length}]`
    });
  let dynamicChild = value.length === 0 && hasDynamicChild(parameter);
  const preparedParameters = [];
  for (let i = 0; i < value.length; i++) {
    const preparedParam = prepareParameter({
      checksumAddress: checksumAddress2,
      parameter,
      value: value[i]
    });
    if (preparedParam.dynamic)
      dynamicChild = true;
    preparedParameters.push(preparedParam);
  }
  if (dynamic || dynamicChild) {
    const data = encode(preparedParameters);
    if (dynamic) {
      const length2 = fromNumber(preparedParameters.length, { size: 32 });
      return {
        dynamic: true,
        encoded: preparedParameters.length > 0 ? concat2(length2, data) : length2
      };
    }
    if (dynamicChild)
      return { dynamic: true, encoded: data };
  }
  return {
    dynamic: false,
    encoded: concat2(...preparedParameters.map(({ encoded }) => encoded))
  };
}
function encodeBytes(value, { type }) {
  const [, parametersize] = type.split("bytes");
  const bytesSize = size3(value);
  if (!parametersize) {
    let value_ = value;
    if (bytesSize % 32 !== 0)
      value_ = padRight(value_, Math.ceil((value.length - 2) / 2 / 32) * 32);
    return {
      dynamic: true,
      encoded: concat2(padLeft(fromNumber(bytesSize, { size: 32 })), value_)
    };
  }
  if (bytesSize !== Number.parseInt(parametersize, 10))
    throw new BytesSizeMismatchError2({
      expectedSize: Number.parseInt(parametersize, 10),
      value
    });
  return { dynamic: false, encoded: padRight(value) };
}
function encodeBoolean(value) {
  if (typeof value !== "boolean")
    throw new BaseError2(`Invalid boolean value: "${value}" (type: ${typeof value}). Expected: \`true\` or \`false\`.`);
  return { dynamic: false, encoded: padLeft(fromBoolean(value)) };
}
function encodeNumber(value, { signed, size: size6 }) {
  if (typeof size6 === "number") {
    const max = 2n ** (BigInt(size6) - (signed ? 1n : 0n)) - 1n;
    const min = signed ? -max - 1n : 0n;
    if (value > max || value < min)
      throw new IntegerOutOfRangeError({
        max: max.toString(),
        min: min.toString(),
        signed,
        size: size6 / 8,
        value: value.toString()
      });
  }
  return {
    dynamic: false,
    encoded: fromNumber(value, {
      size: 32,
      signed
    })
  };
}
function encodeString(value) {
  const hexValue = fromString2(value);
  const partsLength = Math.ceil(size3(hexValue) / 32);
  const parts = [];
  for (let i = 0; i < partsLength; i++) {
    parts.push(padRight(slice3(hexValue, i * 32, (i + 1) * 32)));
  }
  return {
    dynamic: true,
    encoded: concat2(padRight(fromNumber(size3(hexValue), { size: 32 })), ...parts)
  };
}
function encodeTuple(value, options) {
  const { checksumAddress: checksumAddress2, parameter } = options;
  let dynamic = false;
  const preparedParameters = [];
  for (let i = 0; i < parameter.components.length; i++) {
    const param_ = parameter.components[i];
    const index3 = Array.isArray(value) ? i : param_.name;
    const preparedParam = prepareParameter({
      checksumAddress: checksumAddress2,
      parameter: param_,
      value: value[index3]
    });
    preparedParameters.push(preparedParam);
    if (preparedParam.dynamic)
      dynamic = true;
  }
  return {
    dynamic,
    encoded: dynamic ? encode(preparedParameters) : concat2(...preparedParameters.map(({ encoded }) => encoded))
  };
}
function getArrayComponents(type) {
  const matches = type.match(/^(.*)\[(\d+)?\]$/);
  return matches ? (
    // Return `null` if the array is dynamic.
    [matches[2] ? Number(matches[2]) : null, matches[1]]
  ) : void 0;
}
function hasDynamicChild(param) {
  var _a;
  const { type } = param;
  if (type === "string")
    return true;
  if (type === "bytes")
    return true;
  if (type.endsWith("[]"))
    return true;
  if (type === "tuple")
    return (_a = param.components) == null ? void 0 : _a.some(hasDynamicChild);
  const arrayComponents = getArrayComponents(param.type);
  if (arrayComponents && hasDynamicChild({
    ...param,
    type: arrayComponents[1]
  }))
    return true;
  return false;
}

// node_modules/ox/_esm/core/internal/cursor.js
var staticCursor = {
  bytes: new Uint8Array(),
  dataView: new DataView(new ArrayBuffer(0)),
  position: 0,
  positionReadCount: /* @__PURE__ */ new Map(),
  recursiveReadCount: 0,
  recursiveReadLimit: Number.POSITIVE_INFINITY,
  assertReadLimit() {
    if (this.recursiveReadCount >= this.recursiveReadLimit)
      throw new RecursiveReadLimitExceededError({
        count: this.recursiveReadCount + 1,
        limit: this.recursiveReadLimit
      });
  },
  assertPosition(position) {
    if (position < 0 || position > this.bytes.length - 1)
      throw new PositionOutOfBoundsError2({
        length: this.bytes.length,
        position
      });
  },
  decrementPosition(offset) {
    if (offset < 0)
      throw new NegativeOffsetError({ offset });
    const position = this.position - offset;
    this.assertPosition(position);
    this.position = position;
  },
  getReadCount(position) {
    return this.positionReadCount.get(position || this.position) || 0;
  },
  incrementPosition(offset) {
    if (offset < 0)
      throw new NegativeOffsetError({ offset });
    const position = this.position + offset;
    this.assertPosition(position);
    this.position = position;
  },
  inspectByte(position_) {
    const position = position_ ?? this.position;
    this.assertPosition(position);
    return this.bytes[position];
  },
  inspectBytes(length, position_) {
    const position = position_ ?? this.position;
    this.assertPosition(position + length - 1);
    return this.bytes.subarray(position, position + length);
  },
  inspectUint8(position_) {
    const position = position_ ?? this.position;
    this.assertPosition(position);
    return this.bytes[position];
  },
  inspectUint16(position_) {
    const position = position_ ?? this.position;
    this.assertPosition(position + 1);
    return this.dataView.getUint16(position);
  },
  inspectUint24(position_) {
    const position = position_ ?? this.position;
    this.assertPosition(position + 2);
    return (this.dataView.getUint16(position) << 8) + this.dataView.getUint8(position + 2);
  },
  inspectUint32(position_) {
    const position = position_ ?? this.position;
    this.assertPosition(position + 3);
    return this.dataView.getUint32(position);
  },
  pushByte(byte) {
    this.assertPosition(this.position);
    this.bytes[this.position] = byte;
    this.position++;
  },
  pushBytes(bytes) {
    this.assertPosition(this.position + bytes.length - 1);
    this.bytes.set(bytes, this.position);
    this.position += bytes.length;
  },
  pushUint8(value) {
    this.assertPosition(this.position);
    this.bytes[this.position] = value;
    this.position++;
  },
  pushUint16(value) {
    this.assertPosition(this.position + 1);
    this.dataView.setUint16(this.position, value);
    this.position += 2;
  },
  pushUint24(value) {
    this.assertPosition(this.position + 2);
    this.dataView.setUint16(this.position, value >> 8);
    this.dataView.setUint8(this.position + 2, value & ~4294967040);
    this.position += 3;
  },
  pushUint32(value) {
    this.assertPosition(this.position + 3);
    this.dataView.setUint32(this.position, value);
    this.position += 4;
  },
  readByte() {
    this.assertReadLimit();
    this._touch();
    const value = this.inspectByte();
    this.position++;
    return value;
  },
  readBytes(length, size6) {
    this.assertReadLimit();
    this._touch();
    const value = this.inspectBytes(length);
    this.position += size6 ?? length;
    return value;
  },
  readUint8() {
    this.assertReadLimit();
    this._touch();
    const value = this.inspectUint8();
    this.position += 1;
    return value;
  },
  readUint16() {
    this.assertReadLimit();
    this._touch();
    const value = this.inspectUint16();
    this.position += 2;
    return value;
  },
  readUint24() {
    this.assertReadLimit();
    this._touch();
    const value = this.inspectUint24();
    this.position += 3;
    return value;
  },
  readUint32() {
    this.assertReadLimit();
    this._touch();
    const value = this.inspectUint32();
    this.position += 4;
    return value;
  },
  get remaining() {
    return this.bytes.length - this.position;
  },
  setPosition(position) {
    const oldPosition = this.position;
    this.assertPosition(position);
    this.position = position;
    return () => this.position = oldPosition;
  },
  _touch() {
    if (this.recursiveReadLimit === Number.POSITIVE_INFINITY)
      return;
    const count = this.getReadCount();
    this.positionReadCount.set(this.position, count + 1);
    if (count > 0)
      this.recursiveReadCount++;
  }
};
function create(bytes, { recursiveReadLimit = 8192 } = {}) {
  const cursor = Object.create(staticCursor);
  cursor.bytes = bytes;
  cursor.dataView = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
  cursor.positionReadCount = /* @__PURE__ */ new Map();
  cursor.recursiveReadLimit = recursiveReadLimit;
  return cursor;
}
var NegativeOffsetError = class extends BaseError2 {
  constructor({ offset }) {
    super(`Offset \`${offset}\` cannot be negative.`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Cursor.NegativeOffsetError"
    });
  }
};
var PositionOutOfBoundsError2 = class extends BaseError2 {
  constructor({ length, position }) {
    super(`Position \`${position}\` is out of bounds (\`0 < position < ${length}\`).`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Cursor.PositionOutOfBoundsError"
    });
  }
};
var RecursiveReadLimitExceededError = class extends BaseError2 {
  constructor({ count, limit }) {
    super(`Recursive read limit of \`${limit}\` exceeded (recursive read count: \`${count}\`).`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Cursor.RecursiveReadLimitExceededError"
    });
  }
};

// node_modules/ox/_esm/core/AbiParameters.js
function decode(parameters, data, options = {}) {
  const { as = "Array", checksumAddress: checksumAddress2 = false } = options;
  const bytes = typeof data === "string" ? fromHex2(data) : data;
  const cursor = create(bytes);
  if (size2(bytes) === 0 && parameters.length > 0)
    throw new ZeroDataError();
  if (size2(bytes) && size2(bytes) < 32)
    throw new DataSizeTooSmallError({
      data: typeof data === "string" ? data : fromBytes(data),
      parameters,
      size: size2(bytes)
    });
  let consumed = 0;
  const values = as === "Array" ? [] : {};
  for (let i = 0; i < parameters.length; ++i) {
    const param = parameters[i];
    if (consumed < bytes.length)
      cursor.setPosition(consumed);
    const [data2, consumed_] = decodeParameter(cursor, param, {
      checksumAddress: checksumAddress2,
      staticPosition: 0
    });
    consumed += consumed_;
    if (as === "Array")
      values.push(data2);
    else
      values[param.name ?? i] = data2;
  }
  return values;
}
function encode2(parameters, values, options) {
  const { checksumAddress: checksumAddress2 = false } = options ?? {};
  if (parameters.length !== values.length)
    throw new LengthMismatchError({
      expectedLength: parameters.length,
      givenLength: values.length
    });
  const preparedParameters = prepareParameters({
    checksumAddress: checksumAddress2,
    parameters,
    values
  });
  const data = encode(preparedParameters);
  if (data.length === 0)
    return "0x";
  return data;
}
function encodePacked(types, values) {
  if (types.length !== values.length)
    throw new LengthMismatchError({
      expectedLength: types.length,
      givenLength: values.length
    });
  const data = [];
  for (let i = 0; i < types.length; i++) {
    const type = types[i];
    const value = values[i];
    data.push(encodePacked.encode(type, value));
  }
  return concat2(...data);
}
(function(encodePacked3) {
  function encode4(type, value, isArray = false) {
    if (type === "address") {
      const address = value;
      assert2(address);
      return padLeft(address.toLowerCase(), isArray ? 32 : 0);
    }
    if (type === "string")
      return fromString2(value);
    if (type === "bytes")
      return value;
    if (type === "bool")
      return padLeft(fromBoolean(value), isArray ? 32 : 1);
    const intMatch = type.match(integerRegex2);
    if (intMatch) {
      const [_type, baseType, bits = "256"] = intMatch;
      const size6 = Number.parseInt(bits, 10) / 8;
      return fromNumber(value, {
        size: isArray ? 32 : size6,
        signed: baseType === "int"
      });
    }
    const bytesMatch = type.match(bytesRegex2);
    if (bytesMatch) {
      const [_type, size6] = bytesMatch;
      if (Number.parseInt(size6, 10) !== (value.length - 2) / 2)
        throw new BytesSizeMismatchError2({
          expectedSize: Number.parseInt(size6, 10),
          value
        });
      return padRight(value, isArray ? 32 : 0);
    }
    const arrayMatch = type.match(arrayRegex2);
    if (arrayMatch && Array.isArray(value)) {
      const [_type, childType] = arrayMatch;
      const data = [];
      for (let i = 0; i < value.length; i++) {
        data.push(encode4(childType, value[i], true));
      }
      if (data.length === 0)
        return "0x";
      return concat2(...data);
    }
    throw new InvalidTypeError(type);
  }
  encodePacked3.encode = encode4;
})(encodePacked || (encodePacked = {}));
function from6(parameters) {
  if (Array.isArray(parameters) && typeof parameters[0] === "string")
    return parseAbiParameters(parameters);
  if (typeof parameters === "string")
    return parseAbiParameters(parameters);
  return parameters;
}
var DataSizeTooSmallError = class extends BaseError2 {
  constructor({ data, parameters, size: size6 }) {
    super(`Data size of ${size6} bytes is too small for given parameters.`, {
      metaMessages: [
        `Params: (${formatAbiParameters(parameters)})`,
        `Data:   ${data} (${size6} bytes)`
      ]
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "AbiParameters.DataSizeTooSmallError"
    });
  }
};
var ZeroDataError = class extends BaseError2 {
  constructor() {
    super('Cannot decode zero data ("0x") with ABI parameters.');
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "AbiParameters.ZeroDataError"
    });
  }
};
var ArrayLengthMismatchError = class extends BaseError2 {
  constructor({ expectedLength, givenLength, type }) {
    super(`Array length mismatch for type \`${type}\`. Expected: \`${expectedLength}\`. Given: \`${givenLength}\`.`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "AbiParameters.ArrayLengthMismatchError"
    });
  }
};
var BytesSizeMismatchError2 = class extends BaseError2 {
  constructor({ expectedSize, value }) {
    super(`Size of bytes "${value}" (bytes${size3(value)}) does not match expected size (bytes${expectedSize}).`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "AbiParameters.BytesSizeMismatchError"
    });
  }
};
var LengthMismatchError = class extends BaseError2 {
  constructor({ expectedLength, givenLength }) {
    super([
      "ABI encoding parameters/values length mismatch.",
      `Expected length (parameters): ${expectedLength}`,
      `Given length (values): ${givenLength}`
    ].join("\n"));
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "AbiParameters.LengthMismatchError"
    });
  }
};
var InvalidArrayError = class extends BaseError2 {
  constructor(value) {
    super(`Value \`${value}\` is not a valid array.`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "AbiParameters.InvalidArrayError"
    });
  }
};
var InvalidTypeError = class extends BaseError2 {
  constructor(type) {
    super(`Type \`${type}\` is not a valid ABI Type.`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "AbiParameters.InvalidTypeError"
    });
  }
};

// node_modules/ox/_esm/core/Rlp.js
function from7(value, options) {
  const { as } = options;
  const encodable = getEncodable2(value);
  const cursor = create(new Uint8Array(encodable.length));
  encodable.encode(cursor);
  if (as === "Hex")
    return fromBytes(cursor.bytes);
  return cursor.bytes;
}
function fromHex4(hex2, options = {}) {
  const { as = "Hex" } = options;
  return from7(hex2, { as });
}
function getEncodable2(bytes) {
  if (Array.isArray(bytes))
    return getEncodableList2(bytes.map((x) => getEncodable2(x)));
  return getEncodableBytes2(bytes);
}
function getEncodableList2(list) {
  const bodyLength = list.reduce((acc, x) => acc + x.length, 0);
  const sizeOfBodyLength = getSizeOfLength2(bodyLength);
  const length = (() => {
    if (bodyLength <= 55)
      return 1 + bodyLength;
    return 1 + sizeOfBodyLength + bodyLength;
  })();
  return {
    length,
    encode(cursor) {
      if (bodyLength <= 55) {
        cursor.pushByte(192 + bodyLength);
      } else {
        cursor.pushByte(192 + 55 + sizeOfBodyLength);
        if (sizeOfBodyLength === 1)
          cursor.pushUint8(bodyLength);
        else if (sizeOfBodyLength === 2)
          cursor.pushUint16(bodyLength);
        else if (sizeOfBodyLength === 3)
          cursor.pushUint24(bodyLength);
        else
          cursor.pushUint32(bodyLength);
      }
      for (const { encode: encode4 } of list) {
        encode4(cursor);
      }
    }
  };
}
function getEncodableBytes2(bytesOrHex) {
  const bytes = typeof bytesOrHex === "string" ? fromHex2(bytesOrHex) : bytesOrHex;
  const sizeOfBytesLength = getSizeOfLength2(bytes.length);
  const length = (() => {
    if (bytes.length === 1 && bytes[0] < 128)
      return 1;
    if (bytes.length <= 55)
      return 1 + bytes.length;
    return 1 + sizeOfBytesLength + bytes.length;
  })();
  return {
    length,
    encode(cursor) {
      if (bytes.length === 1 && bytes[0] < 128) {
        cursor.pushBytes(bytes);
      } else if (bytes.length <= 55) {
        cursor.pushByte(128 + bytes.length);
        cursor.pushBytes(bytes);
      } else {
        cursor.pushByte(128 + 55 + sizeOfBytesLength);
        if (sizeOfBytesLength === 1)
          cursor.pushUint8(bytes.length);
        else if (sizeOfBytesLength === 2)
          cursor.pushUint16(bytes.length);
        else if (sizeOfBytesLength === 3)
          cursor.pushUint24(bytes.length);
        else
          cursor.pushUint32(bytes.length);
        cursor.pushBytes(bytes);
      }
    }
  };
}
function getSizeOfLength2(length) {
  if (length <= 255)
    return 1;
  if (length <= 65535)
    return 2;
  if (length <= 16777215)
    return 3;
  if (length <= 4294967295)
    return 4;
  throw new BaseError2("Length is too large.");
}

// node_modules/ox/_esm/core/Signature.js
function assert3(signature, options = {}) {
  const { recovered } = options;
  if (typeof signature.r === "undefined")
    throw new MissingPropertiesError({ signature });
  if (typeof signature.s === "undefined")
    throw new MissingPropertiesError({ signature });
  if (recovered && typeof signature.yParity === "undefined")
    throw new MissingPropertiesError({ signature });
  if (signature.r < 0n || signature.r > maxUint2562)
    throw new InvalidRError({ value: signature.r });
  if (signature.s < 0n || signature.s > maxUint2562)
    throw new InvalidSError({ value: signature.s });
  if (typeof signature.yParity === "number" && signature.yParity !== 0 && signature.yParity !== 1)
    throw new InvalidYParityError({ value: signature.yParity });
}
function fromBytes4(signature) {
  return fromHex5(fromBytes(signature));
}
function fromHex5(signature) {
  if (signature.length !== 130 && signature.length !== 132)
    throw new InvalidSerializedSizeError2({ signature });
  const r = BigInt(slice3(signature, 0, 32));
  const s = BigInt(slice3(signature, 32, 64));
  const yParity = (() => {
    const yParity2 = Number(`0x${signature.slice(130)}`);
    if (Number.isNaN(yParity2))
      return void 0;
    try {
      return vToYParity(yParity2);
    } catch {
      throw new InvalidYParityError({ value: yParity2 });
    }
  })();
  if (typeof yParity === "undefined")
    return {
      r,
      s
    };
  return {
    r,
    s,
    yParity
  };
}
function extract2(value) {
  if (typeof value.r === "undefined")
    return void 0;
  if (typeof value.s === "undefined")
    return void 0;
  return from8(value);
}
function from8(signature) {
  const signature_ = (() => {
    if (typeof signature === "string")
      return fromHex5(signature);
    if (signature instanceof Uint8Array)
      return fromBytes4(signature);
    if (typeof signature.r === "string")
      return fromRpc(signature);
    if (signature.v)
      return fromLegacy(signature);
    return {
      r: signature.r,
      s: signature.s,
      ...typeof signature.yParity !== "undefined" ? { yParity: signature.yParity } : {}
    };
  })();
  assert3(signature_);
  return signature_;
}
function fromLegacy(signature) {
  return {
    r: signature.r,
    s: signature.s,
    yParity: vToYParity(signature.v)
  };
}
function fromRpc(signature) {
  const yParity = (() => {
    const v = signature.v ? Number(signature.v) : void 0;
    let yParity2 = signature.yParity ? Number(signature.yParity) : void 0;
    if (typeof v === "number" && typeof yParity2 !== "number")
      yParity2 = vToYParity(v);
    if (typeof yParity2 !== "number")
      throw new InvalidYParityError({ value: signature.yParity });
    return yParity2;
  })();
  return {
    r: BigInt(signature.r),
    s: BigInt(signature.s),
    yParity
  };
}
function toTuple(signature) {
  const { r, s, yParity } = signature;
  return [
    yParity ? "0x01" : "0x",
    r === 0n ? "0x" : trimLeft2(fromNumber(r)),
    s === 0n ? "0x" : trimLeft2(fromNumber(s))
  ];
}
function vToYParity(v) {
  if (v === 0 || v === 27)
    return 0;
  if (v === 1 || v === 28)
    return 1;
  if (v >= 35)
    return v % 2 === 0 ? 1 : 0;
  throw new InvalidVError({ value: v });
}
var InvalidSerializedSizeError2 = class extends BaseError2 {
  constructor({ signature }) {
    super(`Value \`${signature}\` is an invalid signature size.`, {
      metaMessages: [
        "Expected: 64 bytes or 65 bytes.",
        `Received ${size3(from3(signature))} bytes.`
      ]
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Signature.InvalidSerializedSizeError"
    });
  }
};
var MissingPropertiesError = class extends BaseError2 {
  constructor({ signature }) {
    super(`Signature \`${stringify2(signature)}\` is missing either an \`r\`, \`s\`, or \`yParity\` property.`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Signature.MissingPropertiesError"
    });
  }
};
var InvalidRError = class extends BaseError2 {
  constructor({ value }) {
    super(`Value \`${value}\` is an invalid r value. r must be a positive integer less than 2^256.`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Signature.InvalidRError"
    });
  }
};
var InvalidSError = class extends BaseError2 {
  constructor({ value }) {
    super(`Value \`${value}\` is an invalid s value. s must be a positive integer less than 2^256.`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Signature.InvalidSError"
    });
  }
};
var InvalidYParityError = class extends BaseError2 {
  constructor({ value }) {
    super(`Value \`${value}\` is an invalid y-parity value. Y-parity must be 0 or 1.`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Signature.InvalidYParityError"
    });
  }
};
var InvalidVError = class extends BaseError2 {
  constructor({ value }) {
    super(`Value \`${value}\` is an invalid v value. v must be 27, 28 or >=35.`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "Signature.InvalidVError"
    });
  }
};

// node_modules/ox/_esm/core/Authorization.js
function from9(authorization, options = {}) {
  if (typeof authorization.chainId === "string")
    return fromRpc2(authorization);
  return { ...authorization, ...options.signature };
}
function fromRpc2(authorization) {
  const { address, chainId, nonce } = authorization;
  const signature = extract2(authorization);
  return {
    address,
    chainId: Number(chainId),
    nonce: BigInt(nonce),
    ...signature
  };
}
function getSignPayload(authorization) {
  return hash(authorization, { presign: true });
}
function hash(authorization, options = {}) {
  const { presign } = options;
  return keccak2562(concat2("0x05", fromHex4(toTuple2(presign ? {
    address: authorization.address,
    chainId: authorization.chainId,
    nonce: authorization.nonce
  } : authorization))));
}
function toTuple2(authorization) {
  const { address, chainId, nonce } = authorization;
  const signature = extract2(authorization);
  return [
    chainId ? fromNumber(chainId) : "0x",
    address,
    nonce ? fromNumber(nonce) : "0x",
    ...signature ? toTuple(signature) : []
  ];
}

// node_modules/@scure/base/lib/esm/index.js
function isBytes2(a) {
  return a instanceof Uint8Array || ArrayBuffer.isView(a) && a.constructor.name === "Uint8Array";
}
function abytes(b, ...lengths) {
  if (!isBytes2(b))
    throw new Error("Uint8Array expected");
  if (lengths.length > 0 && !lengths.includes(b.length))
    throw new Error("Uint8Array expected of length " + lengths + ", got length=" + b.length);
}
function isArrayOf(isString, arr) {
  if (!Array.isArray(arr))
    return false;
  if (arr.length === 0)
    return true;
  if (isString) {
    return arr.every((item) => typeof item === "string");
  } else {
    return arr.every((item) => Number.isSafeInteger(item));
  }
}
function afn(input) {
  if (typeof input !== "function")
    throw new Error("function expected");
  return true;
}
function astr(label, input) {
  if (typeof input !== "string")
    throw new Error(`${label}: string expected`);
  return true;
}
function anumber(n) {
  if (!Number.isSafeInteger(n))
    throw new Error(`invalid integer: ${n}`);
}
function aArr(input) {
  if (!Array.isArray(input))
    throw new Error("array expected");
}
function astrArr(label, input) {
  if (!isArrayOf(true, input))
    throw new Error(`${label}: array of strings expected`);
}
function anumArr(label, input) {
  if (!isArrayOf(false, input))
    throw new Error(`${label}: array of numbers expected`);
}
function chain(...args) {
  const id = (a) => a;
  const wrap3 = (a, b) => (c) => a(b(c));
  const encode4 = args.map((x) => x.encode).reduceRight(wrap3, id);
  const decode2 = args.map((x) => x.decode).reduce(wrap3, id);
  return { encode: encode4, decode: decode2 };
}
function alphabet(letters) {
  const lettersA = typeof letters === "string" ? letters.split("") : letters;
  const len = lettersA.length;
  astrArr("alphabet", lettersA);
  const indexes = new Map(lettersA.map((l, i) => [l, i]));
  return {
    encode: (digits) => {
      aArr(digits);
      return digits.map((i) => {
        if (!Number.isSafeInteger(i) || i < 0 || i >= len)
          throw new Error(`alphabet.encode: digit index outside alphabet "${i}". Allowed: ${letters}`);
        return lettersA[i];
      });
    },
    decode: (input) => {
      aArr(input);
      return input.map((letter) => {
        astr("alphabet.decode", letter);
        const i = indexes.get(letter);
        if (i === void 0)
          throw new Error(`Unknown letter: "${letter}". Allowed: ${letters}`);
        return i;
      });
    }
  };
}
function join(separator = "") {
  astr("join", separator);
  return {
    encode: (from16) => {
      astrArr("join.decode", from16);
      return from16.join(separator);
    },
    decode: (to) => {
      astr("join.decode", to);
      return to.split(separator);
    }
  };
}
function padding(bits, chr = "=") {
  anumber(bits);
  astr("padding", chr);
  return {
    encode(data) {
      astrArr("padding.encode", data);
      while (data.length * bits % 8)
        data.push(chr);
      return data;
    },
    decode(input) {
      astrArr("padding.decode", input);
      let end = input.length;
      if (end * bits % 8)
        throw new Error("padding: invalid, string should have whole number of bytes");
      for (; end > 0 && input[end - 1] === chr; end--) {
        const last = end - 1;
        const byte = last * bits;
        if (byte % 8 === 0)
          throw new Error("padding: invalid, string has too much padding");
      }
      return input.slice(0, end);
    }
  };
}
function normalize(fn) {
  afn(fn);
  return { encode: (from16) => from16, decode: (to) => fn(to) };
}
function convertRadix(data, from16, to) {
  if (from16 < 2)
    throw new Error(`convertRadix: invalid from=${from16}, base cannot be less than 2`);
  if (to < 2)
    throw new Error(`convertRadix: invalid to=${to}, base cannot be less than 2`);
  aArr(data);
  if (!data.length)
    return [];
  let pos = 0;
  const res = [];
  const digits = Array.from(data, (d) => {
    anumber(d);
    if (d < 0 || d >= from16)
      throw new Error(`invalid integer: ${d}`);
    return d;
  });
  const dlen = digits.length;
  while (true) {
    let carry = 0;
    let done = true;
    for (let i = pos; i < dlen; i++) {
      const digit = digits[i];
      const fromCarry = from16 * carry;
      const digitBase = fromCarry + digit;
      if (!Number.isSafeInteger(digitBase) || fromCarry / from16 !== carry || digitBase - digit !== fromCarry) {
        throw new Error("convertRadix: carry overflow");
      }
      const div = digitBase / to;
      carry = digitBase % to;
      const rounded = Math.floor(div);
      digits[i] = rounded;
      if (!Number.isSafeInteger(rounded) || rounded * to + carry !== digitBase)
        throw new Error("convertRadix: carry overflow");
      if (!done)
        continue;
      else if (!rounded)
        pos = i;
      else
        done = false;
    }
    res.push(carry);
    if (done)
      break;
  }
  for (let i = 0; i < data.length - 1 && data[i] === 0; i++)
    res.push(0);
  return res.reverse();
}
var gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
var radix2carry = (from16, to) => from16 + (to - gcd(from16, to));
var powers = (() => {
  let res = [];
  for (let i = 0; i < 40; i++)
    res.push(2 ** i);
  return res;
})();
function convertRadix2(data, from16, to, padding2) {
  aArr(data);
  if (from16 <= 0 || from16 > 32)
    throw new Error(`convertRadix2: wrong from=${from16}`);
  if (to <= 0 || to > 32)
    throw new Error(`convertRadix2: wrong to=${to}`);
  if (radix2carry(from16, to) > 32) {
    throw new Error(`convertRadix2: carry overflow from=${from16} to=${to} carryBits=${radix2carry(from16, to)}`);
  }
  let carry = 0;
  let pos = 0;
  const max = powers[from16];
  const mask = powers[to] - 1;
  const res = [];
  for (const n of data) {
    anumber(n);
    if (n >= max)
      throw new Error(`convertRadix2: invalid data word=${n} from=${from16}`);
    carry = carry << from16 | n;
    if (pos + from16 > 32)
      throw new Error(`convertRadix2: carry overflow pos=${pos} from=${from16}`);
    pos += from16;
    for (; pos >= to; pos -= to)
      res.push((carry >> pos - to & mask) >>> 0);
    const pow = powers[pos];
    if (pow === void 0)
      throw new Error("invalid carry");
    carry &= pow - 1;
  }
  carry = carry << to - pos & mask;
  if (!padding2 && pos >= from16)
    throw new Error("Excess padding");
  if (!padding2 && carry > 0)
    throw new Error(`Non-zero padding: ${carry}`);
  if (padding2 && pos > 0)
    res.push(carry >>> 0);
  return res;
}
function radix(num) {
  anumber(num);
  const _256 = 2 ** 8;
  return {
    encode: (bytes) => {
      if (!isBytes2(bytes))
        throw new Error("radix.encode input should be Uint8Array");
      return convertRadix(Array.from(bytes), _256, num);
    },
    decode: (digits) => {
      anumArr("radix.decode", digits);
      return Uint8Array.from(convertRadix(digits, num, _256));
    }
  };
}
function radix2(bits, revPadding = false) {
  anumber(bits);
  if (bits <= 0 || bits > 32)
    throw new Error("radix2: bits should be in (0..32]");
  if (radix2carry(8, bits) > 32 || radix2carry(bits, 8) > 32)
    throw new Error("radix2: carry overflow");
  return {
    encode: (bytes) => {
      if (!isBytes2(bytes))
        throw new Error("radix2.encode input should be Uint8Array");
      return convertRadix2(Array.from(bytes), 8, bits, !revPadding);
    },
    decode: (digits) => {
      anumArr("radix2.decode", digits);
      return Uint8Array.from(convertRadix2(digits, bits, 8, revPadding));
    }
  };
}
function unsafeWrapper(fn) {
  afn(fn);
  return function(...args) {
    try {
      return fn.apply(null, args);
    } catch (e) {
    }
  };
}
function checksum3(len, fn) {
  anumber(len);
  afn(fn);
  return {
    encode(data) {
      if (!isBytes2(data))
        throw new Error("checksum.encode: input should be Uint8Array");
      const sum = fn(data).slice(0, len);
      const res = new Uint8Array(data.length + len);
      res.set(data);
      res.set(sum, data.length);
      return res;
    },
    decode(data) {
      if (!isBytes2(data))
        throw new Error("checksum.decode: input should be Uint8Array");
      const payload = data.slice(0, -len);
      const oldChecksum = data.slice(-len);
      const newChecksum = fn(payload).slice(0, len);
      for (let i = 0; i < len; i++)
        if (newChecksum[i] !== oldChecksum[i])
          throw new Error("Invalid checksum");
      return payload;
    }
  };
}
var base16 = chain(radix2(4), alphabet("0123456789ABCDEF"), join(""));
var base32 = chain(radix2(5), alphabet("ABCDEFGHIJKLMNOPQRSTUVWXYZ234567"), padding(5), join(""));
var base32nopad = chain(radix2(5), alphabet("ABCDEFGHIJKLMNOPQRSTUVWXYZ234567"), join(""));
var base32hex = chain(radix2(5), alphabet("0123456789ABCDEFGHIJKLMNOPQRSTUV"), padding(5), join(""));
var base32hexnopad = chain(radix2(5), alphabet("0123456789ABCDEFGHIJKLMNOPQRSTUV"), join(""));
var base32crockford = chain(radix2(5), alphabet("0123456789ABCDEFGHJKMNPQRSTVWXYZ"), join(""), normalize((s) => s.toUpperCase().replace(/O/g, "0").replace(/[IL]/g, "1")));
var hasBase64Builtin = (() => typeof Uint8Array.from([]).toBase64 === "function" && typeof Uint8Array.fromBase64 === "function")();
var decodeBase64Builtin = (s, isUrl) => {
  astr("base64", s);
  const re = isUrl ? /^[A-Za-z0-9=_-]+$/ : /^[A-Za-z0-9=+/]+$/;
  const alphabet2 = isUrl ? "base64url" : "base64";
  if (s.length > 0 && !re.test(s))
    throw new Error("invalid base64");
  return Uint8Array.fromBase64(s, { alphabet: alphabet2, lastChunkHandling: "strict" });
};
var base64 = hasBase64Builtin ? {
  encode(b) {
    abytes(b);
    return b.toBase64();
  },
  decode(s) {
    return decodeBase64Builtin(s, false);
  }
} : chain(radix2(6), alphabet("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"), padding(6), join(""));
var base64nopad = chain(radix2(6), alphabet("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"), join(""));
var base64url = hasBase64Builtin ? {
  encode(b) {
    abytes(b);
    return b.toBase64({ alphabet: "base64url" });
  },
  decode(s) {
    return decodeBase64Builtin(s, true);
  }
} : chain(radix2(6), alphabet("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"), padding(6), join(""));
var base64urlnopad = chain(radix2(6), alphabet("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"), join(""));
var genBase58 = (abc) => chain(radix(58), alphabet(abc), join(""));
var base58 = genBase58("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz");
var base58flickr = genBase58("123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ");
var base58xrp = genBase58("rpshnaf39wBUDNEGHJKLM4PQRST7VWXYZ2bcdeCg65jkm8oFqi1tuvAxyz");
var createBase58check = (sha2564) => chain(checksum3(4, (data) => sha2564(sha2564(data))), base58);
var BECH_ALPHABET = chain(alphabet("qpzry9x8gf2tvdw0s3jn54khce6mua7l"), join(""));
var POLYMOD_GENERATORS = [996825010, 642813549, 513874426, 1027748829, 705979059];
function bech32Polymod(pre) {
  const b = pre >> 25;
  let chk = (pre & 33554431) << 5;
  for (let i = 0; i < POLYMOD_GENERATORS.length; i++) {
    if ((b >> i & 1) === 1)
      chk ^= POLYMOD_GENERATORS[i];
  }
  return chk;
}
function bechChecksum(prefix, words, encodingConst = 1) {
  const len = prefix.length;
  let chk = 1;
  for (let i = 0; i < len; i++) {
    const c = prefix.charCodeAt(i);
    if (c < 33 || c > 126)
      throw new Error(`Invalid prefix (${prefix})`);
    chk = bech32Polymod(chk) ^ c >> 5;
  }
  chk = bech32Polymod(chk);
  for (let i = 0; i < len; i++)
    chk = bech32Polymod(chk) ^ prefix.charCodeAt(i) & 31;
  for (let v of words)
    chk = bech32Polymod(chk) ^ v;
  for (let i = 0; i < 6; i++)
    chk = bech32Polymod(chk);
  chk ^= encodingConst;
  return BECH_ALPHABET.encode(convertRadix2([chk % powers[30]], 30, 5, false));
}
function genBech32(encoding) {
  const ENCODING_CONST = encoding === "bech32" ? 1 : 734539939;
  const _words = radix2(5);
  const fromWords = _words.decode;
  const toWords = _words.encode;
  const fromWordsUnsafe = unsafeWrapper(fromWords);
  function encode4(prefix, words, limit = 90) {
    astr("bech32.encode prefix", prefix);
    if (isBytes2(words))
      words = Array.from(words);
    anumArr("bech32.encode", words);
    const plen = prefix.length;
    if (plen === 0)
      throw new TypeError(`Invalid prefix length ${plen}`);
    const actualLength = plen + 7 + words.length;
    if (limit !== false && actualLength > limit)
      throw new TypeError(`Length ${actualLength} exceeds limit ${limit}`);
    const lowered = prefix.toLowerCase();
    const sum = bechChecksum(lowered, words, ENCODING_CONST);
    return `${lowered}1${BECH_ALPHABET.encode(words)}${sum}`;
  }
  function decode2(str, limit = 90) {
    astr("bech32.decode input", str);
    const slen = str.length;
    if (slen < 8 || limit !== false && slen > limit)
      throw new TypeError(`invalid string length: ${slen} (${str}). Expected (8..${limit})`);
    const lowered = str.toLowerCase();
    if (str !== lowered && str !== str.toUpperCase())
      throw new Error(`String must be lowercase or uppercase`);
    const sepIndex = lowered.lastIndexOf("1");
    if (sepIndex === 0 || sepIndex === -1)
      throw new Error(`Letter "1" must be present between prefix and data only`);
    const prefix = lowered.slice(0, sepIndex);
    const data = lowered.slice(sepIndex + 1);
    if (data.length < 6)
      throw new Error("Data must be at least 6 characters long");
    const words = BECH_ALPHABET.decode(data).slice(0, -6);
    const sum = bechChecksum(prefix, words, ENCODING_CONST);
    if (!data.endsWith(sum))
      throw new Error(`Invalid checksum in ${str}: expected "${sum}"`);
    return { prefix, words };
  }
  const decodeUnsafe = unsafeWrapper(decode2);
  function decodeToBytes(str) {
    const { prefix, words } = decode2(str, false);
    return { prefix, words, bytes: fromWords(words) };
  }
  function encodeFromBytes(prefix, bytes) {
    return encode4(prefix, toWords(bytes));
  }
  return {
    encode: encode4,
    decode: decode2,
    encodeFromBytes,
    decodeToBytes,
    decodeUnsafe,
    fromWords,
    fromWordsUnsafe,
    toWords
  };
}
var bech32 = genBech32("bech32");
var bech32m = genBech32("bech32m");
var hasHexBuiltin = (() => typeof Uint8Array.from([]).toHex === "function" && typeof Uint8Array.fromHex === "function")();
var hexBuiltin = {
  encode(data) {
    abytes(data);
    return data.toHex();
  },
  decode(s) {
    astr("hex", s);
    return Uint8Array.fromHex(s);
  }
};
var hex = hasHexBuiltin ? hexBuiltin : chain(radix2(4), alphabet("0123456789abcdef"), join(""), normalize((s) => {
  if (typeof s !== "string" || s.length % 2 !== 0)
    throw new TypeError(`hex.decode: expected string, got ${typeof s} with length ${s.length}`);
  return s.toLowerCase();
}));

// node_modules/@scure/bip32/lib/esm/index.js
var Point = secp256k1.ProjectivePoint;
var base58check = createBase58check(sha256);
var MASTER_SECRET = utf8ToBytes("Bitcoin seed");

// node_modules/ox/_esm/core/Secp256k1.js
function recoverAddress2(options) {
  return fromPublicKey(recoverPublicKey2(options));
}
function recoverPublicKey2(options) {
  const { payload, signature } = options;
  const { r, s, yParity } = signature;
  const signature_ = new secp256k1.Signature(BigInt(r), BigInt(s)).addRecoveryBit(yParity);
  const point = signature_.recoverPublicKey(from3(payload).substring(2));
  return from4(point);
}
var fromSeedDomain = fromString("ox.secp256k1.fromSeed.v1");

// node_modules/ox/_esm/erc8010/SignatureErc8010.js
var magicBytes = "0x8010801080108010801080108010801080108010801080108010801080108010";
var suffixParameters = from6("(uint256 chainId, address delegation, uint256 nonce, uint8 yParity, uint256 r, uint256 s), address to, bytes data");
function assert4(value) {
  if (typeof value === "string") {
    if (slice3(value, -32) !== magicBytes)
      throw new InvalidWrappedSignatureError(value);
  } else
    assert3(value.authorization);
}
function from10(value) {
  if (typeof value === "string")
    return unwrap(value);
  return value;
}
function unwrap(wrapped) {
  assert4(wrapped);
  const suffixLength = toNumber2(slice3(wrapped, -64, -32));
  const suffix = slice3(wrapped, -suffixLength - 64, -64);
  const signature = slice3(wrapped, 0, -suffixLength - 64);
  const [auth, to, data] = decode(suffixParameters, suffix);
  const authorization = from9({
    address: auth.delegation,
    chainId: Number(auth.chainId),
    nonce: auth.nonce,
    yParity: auth.yParity,
    r: auth.r,
    s: auth.s
  });
  return {
    authorization,
    signature,
    ...data && data !== "0x" ? { data, to } : {}
  };
}
function wrap(value) {
  const { data, signature } = value;
  assert4(value);
  const self = recoverAddress2({
    payload: getSignPayload(value.authorization),
    signature: from8(value.authorization)
  });
  const suffix = encode2(suffixParameters, [
    {
      ...value.authorization,
      delegation: value.authorization.address,
      chainId: BigInt(value.authorization.chainId)
    },
    value.to ?? self,
    data ?? "0x"
  ]);
  const suffixLength = fromNumber(size3(suffix), { size: 32 });
  return concat2(signature, suffix, suffixLength, magicBytes);
}
function validate4(value) {
  try {
    assert4(value);
    return true;
  } catch {
    return false;
  }
}
var InvalidWrappedSignatureError = class extends BaseError2 {
  constructor(wrapped) {
    super(`Value \`${wrapped}\` is an invalid ERC-8010 wrapped signature.`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "SignatureErc8010.InvalidWrappedSignatureError"
    });
  }
};

// node_modules/viem/_esm/utils/unit/formatUnits.js
function formatUnits(value, decimals) {
  return format(value, decimals);
}

// node_modules/viem/_esm/utils/unit/parseUnits.js
function parseUnits(value, decimals) {
  return from(value, decimals);
}

// node_modules/viem/_esm/utils/formatters/proof.js
function formatStorageProof(storageProof) {
  return storageProof.map((proof) => ({
    ...proof,
    value: BigInt(proof.value)
  }));
}
function formatProof(proof) {
  return {
    ...proof,
    balance: proof.balance ? BigInt(proof.balance) : void 0,
    nonce: proof.nonce ? hexToNumber(proof.nonce) : void 0,
    storageProof: proof.storageProof ? formatStorageProof(proof.storageProof) : void 0
  };
}

// node_modules/viem/_esm/actions/public/getProof.js
async function getProof(client, { address, blockHash, blockNumber, blockTag = "latest", requireCanonical, storageKeys }) {
  const block = formatBlockParameter({
    blockHash,
    blockNumber,
    blockTag,
    requireCanonical
  });
  const proof = await client.request({
    method: "eth_getProof",
    params: [address, storageKeys, block]
  });
  return formatProof(proof);
}

// node_modules/viem/_esm/actions/public/getRawTransaction.js
async function getRawTransaction(client, { hash: hash2 }) {
  const rawTransaction = await client.request({
    method: "eth_getRawTransactionByHash",
    params: [hash2]
  }, { dedupe: true });
  if (!rawTransaction)
    throw new TransactionNotFoundError({ hash: hash2 });
  return rawTransaction;
}

// node_modules/viem/_esm/actions/public/getStorageAt.js
async function getStorageAt(client, { address, blockHash, blockNumber, blockTag = "latest", requireCanonical, slot }) {
  const block = formatBlockParameter({
    blockHash,
    blockNumber,
    blockTag,
    requireCanonical
  });
  const data = await client.request({
    method: "eth_getStorageAt",
    params: [address, slot, block]
  });
  return data;
}

// node_modules/viem/_esm/actions/public/getStorageValues.js
async function getStorageValues(client, { blockHash, blockNumber, blockTag = "latest", requireCanonical, requests }) {
  const block = formatBlockParameter({
    blockHash,
    blockNumber,
    blockTag,
    requireCanonical
  });
  return client.request({
    method: "eth_getStorageValues",
    params: [requests, block]
  });
}

// node_modules/viem/_esm/actions/public/getTransaction.js
async function getTransaction(client, { blockHash, blockNumber, blockTag: blockTag_, hash: hash2, index: index3, sender, nonce }) {
  var _a, _b, _c;
  const blockTag = blockTag_ || "latest";
  const blockNumberHex = blockNumber !== void 0 ? numberToHex(blockNumber) : void 0;
  let transaction = null;
  if (hash2) {
    transaction = await client.request({
      method: "eth_getTransactionByHash",
      params: [hash2]
    }, { dedupe: true });
  } else if (blockHash) {
    transaction = await client.request({
      method: "eth_getTransactionByBlockHashAndIndex",
      params: [blockHash, numberToHex(index3)]
    }, { dedupe: true });
  } else if ((blockNumberHex || blockTag) && typeof index3 === "number") {
    transaction = await client.request({
      method: "eth_getTransactionByBlockNumberAndIndex",
      params: [blockNumberHex || blockTag, numberToHex(index3)]
    }, { dedupe: Boolean(blockNumberHex) });
  } else if (sender && typeof nonce === "number") {
    transaction = await client.request({
      method: "eth_getTransactionBySenderAndNonce",
      params: [sender, numberToHex(nonce)]
    }, { dedupe: true });
  }
  if (!transaction)
    throw new TransactionNotFoundError({
      blockHash,
      blockNumber,
      blockTag,
      hash: hash2,
      index: index3
    });
  const format3 = ((_c = (_b = (_a = client.chain) == null ? void 0 : _a.formatters) == null ? void 0 : _b.transaction) == null ? void 0 : _c.format) || formatTransaction;
  return format3(transaction, "getTransaction");
}

// node_modules/viem/_esm/actions/public/getTransactionConfirmations.js
async function getTransactionConfirmations(client, { hash: hash2, transactionReceipt }) {
  const [blockNumber, transaction] = await Promise.all([
    getAction(client, getBlockNumber, "getBlockNumber")({}),
    hash2 ? getAction(client, getTransaction, "getTransaction")({ hash: hash2 }) : void 0
  ]);
  const transactionBlockNumber = (transactionReceipt == null ? void 0 : transactionReceipt.blockNumber) || (transaction == null ? void 0 : transaction.blockNumber);
  if (!transactionBlockNumber)
    return 0n;
  const headBlockNumber = blockNumber < transactionBlockNumber ? await getAction(client, getBlockNumber, "getBlockNumber")({ cacheTime: 0 }) : blockNumber;
  if (headBlockNumber < transactionBlockNumber)
    return 1n;
  return headBlockNumber - transactionBlockNumber + 1n;
}

// node_modules/viem/_esm/actions/public/getTransactionReceipt.js
async function getTransactionReceipt(client, { hash: hash2 }) {
  var _a, _b, _c;
  const receipt = await client.request({
    method: "eth_getTransactionReceipt",
    params: [hash2]
  }, { dedupe: true });
  if (!receipt)
    throw new TransactionReceiptNotFoundError({ hash: hash2 });
  const format3 = ((_c = (_b = (_a = client.chain) == null ? void 0 : _a.formatters) == null ? void 0 : _b.transactionReceipt) == null ? void 0 : _c.format) || formatTransactionReceipt;
  return format3(receipt, "getTransactionReceipt");
}

// node_modules/viem/_esm/actions/public/multicall.js
async function multicall(client, parameters) {
  var _a, _b;
  const { account, authorizationList, allowFailure = true, blockHash, blockNumber, blockOverrides, blockTag, requireCanonical, stateOverride } = parameters;
  const contracts = parameters.contracts;
  const batch = typeof ((_a = client.batch) == null ? void 0 : _a.multicall) === "object" ? client.batch.multicall : {};
  const batchSize = parameters.batchSize ?? batch.batchSize ?? 1024;
  const deployless = parameters.deployless ?? batch.deployless ?? false;
  const multicallAddress = (() => {
    if (parameters.multicallAddress)
      return parameters.multicallAddress;
    if (deployless)
      return null;
    if (client.chain) {
      return getChainContractAddress({
        blockNumber,
        chain: client.chain,
        contract: "multicall3"
      });
    }
    throw new Error("client chain not configured. multicallAddress is required.");
  })();
  const chunkedCalls = [[]];
  let currentChunk = 0;
  let currentChunkSize = 0;
  for (let i = 0; i < contracts.length; i++) {
    const { abi: abi2, address, args, functionName } = contracts[i];
    try {
      const callData = encodeFunctionData({ abi: abi2, args, functionName });
      currentChunkSize += (callData.length - 2) / 2;
      if (
        // Check if batching is enabled.
        batchSize > 0 && // Check if the current size of the batch exceeds the size limit.
        currentChunkSize > batchSize && // Check if the current chunk is not already empty.
        chunkedCalls[currentChunk].length > 0
      ) {
        currentChunk++;
        currentChunkSize = (callData.length - 2) / 2;
        chunkedCalls[currentChunk] = [];
      }
      chunkedCalls[currentChunk] = [
        ...chunkedCalls[currentChunk],
        {
          allowFailure: true,
          callData,
          target: address
        }
      ];
    } catch (err) {
      const error = getContractError(err, {
        abi: abi2,
        address,
        args,
        docsPath: "/docs/contract/multicall",
        functionName,
        sender: account
      });
      if (!allowFailure)
        throw error;
      chunkedCalls[currentChunk] = [
        ...chunkedCalls[currentChunk],
        {
          allowFailure: true,
          callData: "0x",
          target: address
        }
      ];
    }
  }
  const batching = Boolean((_b = client.batch) == null ? void 0 : _b.multicall);
  const batches = batching ? chunkedCalls.flatMap((calls) => calls.map((call3) => [call3])) : chunkedCalls;
  const aggregate3Results = await Promise.allSettled(batches.map((calls) => {
    if (batching)
      return scheduleMulticall(client, {
        account,
        authorizationList,
        batchSize,
        blockHash,
        blockNumber,
        blockOverrides,
        blockTag,
        call: calls[0],
        multicallAddress,
        requireCanonical,
        stateOverride
      }).then((result) => [result]);
    return getAction(client, readContract, "readContract")({
      ...multicallAddress === null ? { code: multicall3Bytecode } : { address: multicallAddress },
      abi: multicall3Abi,
      account,
      args: [calls],
      authorizationList,
      blockHash,
      blockNumber,
      blockOverrides,
      blockTag,
      functionName: "aggregate3",
      requireCanonical,
      stateOverride
    });
  }));
  const results = [];
  for (let i = 0; i < aggregate3Results.length; i++) {
    const result = aggregate3Results[i];
    if (result.status === "rejected") {
      if (!allowFailure)
        throw result.reason;
      for (let j = 0; j < batches[i].length; j++) {
        results.push({
          status: "failure",
          error: result.reason,
          result: void 0
        });
      }
      continue;
    }
    const aggregate3Result = result.value;
    for (let j = 0; j < aggregate3Result.length; j++) {
      const { returnData, success } = aggregate3Result[j];
      const { callData } = batches[i][j];
      const { abi: abi2, address, functionName, args } = contracts[results.length];
      try {
        if (callData === "0x")
          throw new AbiDecodingZeroDataError();
        if (!success)
          throw new RawContractError({ data: returnData });
        const result2 = decodeFunctionResult({
          abi: abi2,
          args,
          data: returnData,
          functionName
        });
        results.push(allowFailure ? { result: result2, status: "success" } : result2);
      } catch (err) {
        const error = getContractError(err, {
          abi: abi2,
          address,
          args,
          docsPath: "/docs/contract/multicall",
          functionName
        });
        if (!allowFailure)
          throw error;
        results.push({ error, result: void 0, status: "failure" });
      }
    }
  }
  if (results.length !== contracts.length)
    throw new BaseError("multicall results mismatch");
  return results;
}
async function scheduleMulticall(client, parameters) {
  var _a;
  const { batchSize, call: call3, multicallAddress, ...rest } = parameters;
  const { wait: wait2 = 0 } = typeof ((_a = client.batch) == null ? void 0 : _a.multicall) === "object" ? client.batch.multicall : {};
  const { schedule } = createBatchScheduler({
    id: stringify(["multicall", client.uid, batchSize, multicallAddress, rest]),
    wait: wait2,
    shouldSplitBatch(calls) {
      if (batchSize === 0)
        return false;
      const size6 = calls.reduce((size7, { callData }) => size7 + (callData.length - 2) / 2, 0);
      return size6 > batchSize;
    },
    fn: (calls) => getAction(client, readContract, "readContract")({
      ...multicallAddress === null ? { code: multicall3Bytecode } : { address: multicallAddress },
      ...rest,
      abi: multicall3Abi,
      args: [calls],
      functionName: "aggregate3"
    })
  });
  const [result] = await schedule(call3);
  return result;
}

// node_modules/viem/_esm/actions/public/simulateBlocks.js
async function simulateBlocks(client, parameters) {
  const { blockNumber, blockTag = client.experimental_blockTag ?? "latest", blocks, returnFullTransactions, traceTransfers, validation } = parameters;
  try {
    const blockStateCalls = [];
    for (const block2 of blocks) {
      const blockOverrides = block2.blockOverrides ? toRpc(block2.blockOverrides) : void 0;
      const calls = block2.calls.map((call_) => {
        const call3 = call_;
        const account = call3.account ? parseAccount(call3.account) : void 0;
        const data = call3.abi ? encodeFunctionData(call3) : call3.data;
        const request = {
          ...call3,
          account,
          data: call3.dataSuffix ? concat([data || "0x", call3.dataSuffix]) : data,
          from: call3.from ?? (account == null ? void 0 : account.address)
        };
        assertRequest(request);
        return formatTransactionRequest(request);
      });
      const stateOverrides = block2.stateOverrides ? serializeStateOverride(block2.stateOverrides) : void 0;
      blockStateCalls.push({
        blockOverrides,
        calls,
        stateOverrides
      });
    }
    const blockNumberHex = typeof blockNumber === "bigint" ? numberToHex(blockNumber) : void 0;
    const block = blockNumberHex || blockTag;
    const result = await client.request({
      method: "eth_simulateV1",
      params: [
        { blockStateCalls, returnFullTransactions, traceTransfers, validation },
        block
      ]
    });
    return result.map((block2, i) => ({
      ...formatBlock(block2),
      calls: block2.calls.map((call3, j) => {
        var _a, _b;
        const { abi: abi2, args, functionName, to } = blocks[i].calls[j];
        const data = ((_a = call3.error) == null ? void 0 : _a.data) ?? call3.returnData;
        const gasUsed = BigInt(call3.gasUsed);
        const maxUsedGas = call3.maxUsedGas === void 0 ? void 0 : BigInt(call3.maxUsedGas);
        const logs = (_b = call3.logs) == null ? void 0 : _b.map((log) => formatLog(log));
        const status = call3.status === "0x1" ? "success" : "failure";
        const result2 = abi2 && status === "success" && data !== "0x" ? decodeFunctionResult({
          abi: abi2,
          data,
          functionName
        }) : null;
        const error = (() => {
          if (status === "success")
            return void 0;
          let error2;
          if (data === "0x")
            error2 = new AbiDecodingZeroDataError();
          else if (data)
            error2 = new RawContractError({ data });
          if (!error2)
            return void 0;
          return getContractError(error2, {
            abi: abi2 ?? [],
            address: to ?? "0x",
            args,
            functionName: functionName ?? "<unknown>"
          });
        })();
        return {
          data,
          gasUsed,
          logs,
          // only present when reported by the node, so existing consumers
          // (and snapshots) are unaffected on nodes that omit it.
          ...maxUsedGas === void 0 ? {} : { maxUsedGas },
          status,
          ...status === "success" ? {
            result: result2
          } : {
            error
          }
        };
      })
    }));
  } catch (e) {
    const cause = e;
    const error = getNodeError(cause, {});
    if (error instanceof UnknownNodeError)
      throw cause;
    throw error;
  }
}

// node_modules/ox/_esm/core/internal/abiItem.js
function normalizeSignature(signature) {
  let active = true;
  let current = "";
  let level = 0;
  let result = "";
  let valid = false;
  for (let i = 0; i < signature.length; i++) {
    const char = signature[i];
    if (["(", ")", ","].includes(char))
      active = true;
    if (char === "(")
      level++;
    if (char === ")")
      level--;
    if (!active)
      continue;
    if (level === 0) {
      if (char === " " && ["event", "function", "error", ""].includes(result))
        result = "";
      else {
        result += char;
        if (char === ")") {
          valid = true;
          break;
        }
      }
      continue;
    }
    if (char === " ") {
      if (signature[i - 1] !== "," && current !== "," && current !== ",(") {
        current = "";
        active = false;
      }
      continue;
    }
    result += char;
    current += char;
  }
  if (!valid)
    throw new BaseError2("Unable to normalize signature.");
  return result;
}
function isArgOfType(arg, abiParameter) {
  const argType = typeof arg;
  const abiParameterType = abiParameter.type;
  switch (abiParameterType) {
    case "address":
      return validate3(arg, { strict: false });
    case "bool":
      return argType === "boolean";
    case "function":
      return argType === "string";
    case "string":
      return argType === "string";
    default: {
      if (abiParameterType === "tuple" && "components" in abiParameter)
        return Object.values(abiParameter.components).every((component, index3) => {
          return isArgOfType(Object.values(arg)[index3], component);
        });
      if (/^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/.test(abiParameterType))
        return argType === "number" || argType === "bigint";
      if (/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/.test(abiParameterType))
        return argType === "string" || arg instanceof Uint8Array;
      if (/[a-z]+[1-9]{0,3}(\[[0-9]{0,}\])+$/.test(abiParameterType)) {
        return Array.isArray(arg) && arg.every((x) => isArgOfType(x, {
          ...abiParameter,
          // Pop off `[]` or `[M]` from end of type
          type: abiParameterType.replace(/(\[[0-9]{0,}\])$/, "")
        }));
      }
      return false;
    }
  }
}
function getAmbiguousTypes(sourceParameters, targetParameters, args) {
  for (const parameterIndex in sourceParameters) {
    const sourceParameter = sourceParameters[parameterIndex];
    const targetParameter = targetParameters[parameterIndex];
    if (sourceParameter.type === "tuple" && targetParameter.type === "tuple" && "components" in sourceParameter && "components" in targetParameter)
      return getAmbiguousTypes(sourceParameter.components, targetParameter.components, args[parameterIndex]);
    const types = [sourceParameter.type, targetParameter.type];
    const ambiguous = (() => {
      if (types.includes("address") && types.includes("bytes20"))
        return true;
      if (types.includes("address") && types.includes("string"))
        return validate3(args[parameterIndex], {
          strict: false
        });
      if (types.includes("address") && types.includes("bytes"))
        return validate3(args[parameterIndex], {
          strict: false
        });
      return false;
    })();
    if (ambiguous)
      return types;
  }
  return;
}

// node_modules/ox/_esm/core/AbiItem.js
function from11(abiItem, options = {}) {
  const { prepare = true } = options;
  const item = (() => {
    if (Array.isArray(abiItem))
      return parseAbiItem(abiItem);
    if (typeof abiItem === "string")
      return parseAbiItem(abiItem);
    return abiItem;
  })();
  return {
    ...item,
    ...prepare ? { hash: getSignatureHash(item) } : {}
  };
}
function fromAbi(abi2, name, options) {
  const { args = [], prepare = true } = options ?? {};
  const isSelector = validate2(name, { strict: false });
  const abiItems = abi2.filter((abiItem2) => {
    if (isSelector) {
      if (abiItem2.type === "function" || abiItem2.type === "error")
        return getSelector(abiItem2) === slice3(name, 0, 4);
      if (abiItem2.type === "event")
        return getSignatureHash(abiItem2) === name;
      return false;
    }
    return "name" in abiItem2 && abiItem2.name === name;
  });
  if (abiItems.length === 0)
    throw new NotFoundError({ name });
  if (abiItems.length === 1)
    return {
      ...abiItems[0],
      ...prepare ? { hash: getSignatureHash(abiItems[0]) } : {}
    };
  let matchedAbiItem;
  for (const abiItem2 of abiItems) {
    if (!("inputs" in abiItem2))
      continue;
    if (!args || args.length === 0) {
      if (!abiItem2.inputs || abiItem2.inputs.length === 0)
        return {
          ...abiItem2,
          ...prepare ? { hash: getSignatureHash(abiItem2) } : {}
        };
      continue;
    }
    if (!abiItem2.inputs)
      continue;
    if (abiItem2.inputs.length === 0)
      continue;
    if (abiItem2.inputs.length !== args.length)
      continue;
    const matched = args.every((arg, index3) => {
      const abiParameter = "inputs" in abiItem2 && abiItem2.inputs[index3];
      if (!abiParameter)
        return false;
      return isArgOfType(arg, abiParameter);
    });
    if (matched) {
      if (matchedAbiItem && "inputs" in matchedAbiItem && matchedAbiItem.inputs) {
        const ambiguousTypes = getAmbiguousTypes(abiItem2.inputs, matchedAbiItem.inputs, args);
        if (ambiguousTypes)
          throw new AmbiguityError({
            abiItem: abiItem2,
            type: ambiguousTypes[0]
          }, {
            abiItem: matchedAbiItem,
            type: ambiguousTypes[1]
          });
      }
      matchedAbiItem = abiItem2;
    }
  }
  const abiItem = (() => {
    if (matchedAbiItem)
      return matchedAbiItem;
    const [abiItem2, ...overloads] = abiItems;
    return { ...abiItem2, overloads };
  })();
  if (!abiItem)
    throw new NotFoundError({ name });
  return {
    ...abiItem,
    ...prepare ? { hash: getSignatureHash(abiItem) } : {}
  };
}
function getSelector(...parameters) {
  const abiItem = (() => {
    if (Array.isArray(parameters[0])) {
      const [abi2, name] = parameters;
      return fromAbi(abi2, name);
    }
    return parameters[0];
  })();
  return slice3(getSignatureHash(abiItem), 0, 4);
}
function getSignature(...parameters) {
  const abiItem = (() => {
    if (Array.isArray(parameters[0])) {
      const [abi2, name] = parameters;
      return fromAbi(abi2, name);
    }
    return parameters[0];
  })();
  const signature = (() => {
    if (typeof abiItem === "string")
      return abiItem;
    return formatAbiItem2(abiItem);
  })();
  return normalizeSignature(signature);
}
function getSignatureHash(...parameters) {
  const abiItem = (() => {
    if (Array.isArray(parameters[0])) {
      const [abi2, name] = parameters;
      return fromAbi(abi2, name);
    }
    return parameters[0];
  })();
  if (typeof abiItem !== "string" && "hash" in abiItem && abiItem.hash)
    return abiItem.hash;
  return keccak2562(fromString2(getSignature(abiItem)));
}
var AmbiguityError = class extends BaseError2 {
  constructor(x, y) {
    super("Found ambiguous types in overloaded ABI Items.", {
      metaMessages: [
        // TODO: abitype to add support for signature-formatted ABI items.
        `\`${x.type}\` in \`${normalizeSignature(formatAbiItem2(x.abiItem))}\`, and`,
        `\`${y.type}\` in \`${normalizeSignature(formatAbiItem2(y.abiItem))}\``,
        "",
        "These types encode differently and cannot be distinguished at runtime.",
        "Remove one of the ambiguous items in the ABI."
      ]
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "AbiItem.AmbiguityError"
    });
  }
};
var NotFoundError = class extends BaseError2 {
  constructor({ name, data, type = "item" }) {
    const selector = (() => {
      if (name)
        return ` with name "${name}"`;
      if (data)
        return ` with data "${data}"`;
      return "";
    })();
    super(`ABI ${type}${selector} not found.`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "AbiItem.NotFoundError"
    });
  }
};

// node_modules/ox/_esm/core/AbiConstructor.js
function encode3(...parameters) {
  var _a;
  const [abiConstructor, options] = (() => {
    if (Array.isArray(parameters[0])) {
      const [abi2, options2] = parameters;
      return [fromAbi2(abi2), options2];
    }
    return parameters;
  })();
  const { bytecode, args } = options;
  return concat2(bytecode, ((_a = abiConstructor.inputs) == null ? void 0 : _a.length) && (args == null ? void 0 : args.length) ? encode2(abiConstructor.inputs, args) : "0x");
}
function from12(abiConstructor) {
  return from11(abiConstructor);
}
function fromAbi2(abi2) {
  const item = abi2.find((item2) => item2.type === "constructor");
  if (!item)
    throw new NotFoundError({ name: "constructor" });
  return item;
}

// node_modules/ox/_esm/core/AbiEvent.js
function from13(abiEvent, options = {}) {
  return from11(abiEvent, options);
}
function getSelector2(abiItem) {
  return getSignatureHash(abiItem);
}

// node_modules/ox/_esm/core/AbiFunction.js
function decodeResult(...parameters) {
  const [abiFunction, data, options = {}] = (() => {
    if (Array.isArray(parameters[0])) {
      const [abi2, name, data2, options2] = parameters;
      return [fromAbi3(abi2, name), data2, options2];
    }
    return parameters;
  })();
  const values = decode(abiFunction.outputs, data, options);
  if (values && Object.keys(values).length === 0)
    return void 0;
  if (values && Object.keys(values).length === 1) {
    if (Array.isArray(values))
      return values[0];
    return Object.values(values)[0];
  }
  return values;
}
function encodeData2(...parameters) {
  const [abiFunction, args = []] = (() => {
    if (Array.isArray(parameters[0])) {
      const [abi2, name, args3] = parameters;
      return [fromAbi3(abi2, name, { args: args3 }), args3];
    }
    const [abiFunction2, args2] = parameters;
    return [abiFunction2, args2];
  })();
  const { overloads } = abiFunction;
  const item = overloads ? fromAbi3([abiFunction, ...overloads], abiFunction.name, {
    args
  }) : abiFunction;
  const selector = getSelector3(item);
  const data = args.length > 0 ? encode2(item.inputs, args) : void 0;
  return data ? concat2(selector, data) : selector;
}
function from14(abiFunction, options = {}) {
  return from11(abiFunction, options);
}
function fromAbi3(abi2, name, options) {
  const item = fromAbi(abi2, name, options);
  if (item.type !== "function")
    throw new NotFoundError({ name, type: "function" });
  return item;
}
function getSelector3(abiItem) {
  return getSelector(abiItem);
}

// node_modules/viem/_esm/constants/address.js
var ethAddress = "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee";
var zeroAddress = "0x0000000000000000000000000000000000000000";

// node_modules/viem/_esm/actions/public/simulateCalls.js
var getBalanceCode = "0x6080604052348015600e575f80fd5b5061016d8061001c5f395ff3fe608060405234801561000f575f80fd5b5060043610610029575f3560e01c8063f8b2cb4f1461002d575b5f80fd5b610047600480360381019061004291906100db565b61005d565b604051610054919061011e565b60405180910390f35b5f8173ffffffffffffffffffffffffffffffffffffffff16319050919050565b5f80fd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f6100aa82610081565b9050919050565b6100ba816100a0565b81146100c4575f80fd5b50565b5f813590506100d5816100b1565b92915050565b5f602082840312156100f0576100ef61007d565b5b5f6100fd848285016100c7565b91505092915050565b5f819050919050565b61011881610106565b82525050565b5f6020820190506101315f83018461010f565b9291505056fea26469706673582212203b9fe929fe995c7cf9887f0bdba8a36dd78e8b73f149b17d2d9ad7cd09d2dc6264736f6c634300081a0033";
var staticCallCode = "0x608060405234801561000f575f5ffd5b5060043610610029575f3560e01c8063fd00430c1461002d575b5f5ffd5b6100476004803603810190610042919061012b565b610049565b005b80825f375f5f825f865afa610060573d5f5f3e3d5ffd5b3d5f5f3e3d5ff35b5f5ffd5b5f5ffd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f61009982610070565b9050919050565b6100a98161008f565b81146100b3575f5ffd5b50565b5f813590506100c4816100a0565b92915050565b5f5ffd5b5f5ffd5b5f5ffd5b5f5f83601f8401126100eb576100ea6100ca565b5b8235905067ffffffffffffffff811115610108576101076100ce565b5b602083019150836001820283011115610124576101236100d2565b5b9250929050565b5f5f5f6040848603121561014257610141610068565b5b5f61014f868287016100b6565b935050602084013567ffffffffffffffff8111156101705761016f61006c565b5b61017c868287016100d6565b9250925050925092509256fea2646970667358221220635ed99185cacf3f2acba6921f23687c969cec2bbaf5f9ad599f507e6e105e6964736f6c63430008230033";
var assetProbeGas = 1000000n;
var staticCallAddressBase = 0x00000000000000000000000000000000deadbeefn;
var transferEventSelector = getSelector2(from13("event Transfer(address indexed from, address indexed to, uint256 value)"));
var balanceOfFunction = from14("function balanceOf(address) returns (uint256)");
var decimalsFunction = from14("function decimals() returns (uint256)");
var tokenUriFunction = from14("function tokenURI(uint256) returns (string)");
var symbolFunction = from14("function symbol() returns (string)");
var staticCallFunction = from14("function query(address target, bytes data)");
async function simulateCalls(client, parameters) {
  const { blockNumber, blockTag, calls, stateOverrides, traceAssetChanges, traceTransfers, validation } = parameters;
  const account = parameters.account ? parseAccount(parameters.account) : void 0;
  if (traceAssetChanges && !account)
    throw new BaseError("`account` is required when `traceAssetChanges` is true");
  const getBalanceData = account ? encode3(from12("constructor(bytes, bytes)"), {
    bytecode: deploylessCallViaBytecodeBytecode,
    args: [
      getBalanceCode,
      encodeData2(from14("function getBalance(address)"), [account.address])
    ]
  }) : void 0;
  const blockTag_ = blockTag ?? client.experimental_blockTag ?? "latest";
  let baseBlockNumber = blockNumber;
  if (traceAssetChanges && typeof baseBlockNumber !== "bigint" && blockTag_ !== "earliest" && blockTag_ !== "pending") {
    if (blockTag_ === "latest")
      baseBlockNumber = await getBlockNumber(client, { cacheTime: 0 });
    else {
      const block2 = await getBlock(client, { blockTag: blockTag_ });
      if (typeof block2.number !== "bigint")
        throw new BaseError(`Block tag \`${blockTag_}\` did not resolve to a number.`);
      baseBlockNumber = block2.number;
    }
  }
  const block_ = typeof baseBlockNumber === "bigint" ? { blockNumber: baseBlockNumber } : { blockTag: blockTag_ };
  const discovery = traceAssetChanges ? await simulateBlocks(client, {
    ...block_,
    blocks: [
      {
        calls: calls.map((call3) => ({
          ...call3,
          from: account.address
        })),
        stateOverrides
      }
    ],
    traceTransfers,
    validation
  }) : void 0;
  const assetAddresses = discovery ? [
    .../* @__PURE__ */ new Set([
      ...tokensFromLogs(discovery[0].calls.flatMap((call3) => call3.logs ?? []), account.address),
      // Included even for calls without data: contracts that mint on receiving
      // native value (WETH) emit `Deposit`, not a `Transfer` the logs would catch.
      // Candidates without code fall out at `isBalance`.
      ...parameters.calls.map((call3) => {
        var _a;
        return (_a = call3.to) == null ? void 0 : _a.toLowerCase();
      })
    ])
  ].filter((address) => Boolean(address) && address !== ethAddress && address !== zeroAddress) : [];
  const staticCallAddress = getStaticCallAddress([
    ...account ? [account.address] : [],
    ...assetAddresses,
    ...(stateOverrides == null ? void 0 : stateOverrides.map(({ address }) => address)) ?? []
  ]);
  const staticCallStateOverrides = [
    { address: staticCallAddress, code: staticCallCode }
  ];
  const [balanceCallsPre, blocks] = await Promise.all([
    traceAssetChanges ? Promise.all([
      readBalance(client, {
        account: account.address,
        ...block_,
        data: getBalanceData,
        stateOverride: stateOverrides
      }),
      ...assetAddresses.map((address) => readBalance(client, {
        account: account.address,
        address,
        ...block_,
        data: encodeData2(balanceOfFunction, [
          account.address
        ]),
        staticCallAddress,
        stateOverride: stateOverrides
      }))
    ]) : [],
    simulateBlocks(client, {
      ...block_,
      blocks: [
        {
          calls: [...calls, { to: zeroAddress }].map((call3) => ({
            ...call3,
            from: account == null ? void 0 : account.address
          })),
          stateOverrides
        },
        ...traceAssetChanges ? [
          // ETH post balances
          {
            calls: [{ data: getBalanceData }]
          },
          // Asset post balances
          {
            calls: assetAddresses.map((address) => ({
              to: staticCallAddress,
              gas: assetProbeGas,
              data: encodeStaticCall(address, encodeData2(balanceOfFunction, [
                account.address
              ]))
            })),
            stateOverrides: staticCallStateOverrides
          },
          // Decimals
          {
            calls: assetAddresses.map((address) => ({
              to: staticCallAddress,
              gas: assetProbeGas,
              data: encodeStaticCall(address, encodeData2(decimalsFunction))
            })),
            stateOverrides: staticCallStateOverrides
          },
          // Token URI
          {
            calls: assetAddresses.map((address) => ({
              to: staticCallAddress,
              gas: assetProbeGas,
              data: encodeStaticCall(address, encodeData2(tokenUriFunction, [0n]))
            })),
            stateOverrides: staticCallStateOverrides
          },
          // Symbols
          {
            calls: assetAddresses.map((address) => ({
              to: staticCallAddress,
              gas: assetProbeGas,
              data: encodeStaticCall(address, encodeData2(symbolFunction))
            })),
            stateOverrides: staticCallStateOverrides
          }
        ] : []
      ],
      traceTransfers,
      validation
    })
  ]);
  const block_results = blocks[0];
  const [block_ethPost, block_assetsPost, block_decimals, block_tokenURI, block_symbols] = traceAssetChanges ? blocks.slice(1) : [];
  const { calls: block_calls, ...block } = block_results;
  const results = block_calls.slice(0, -1);
  const balancesPre = balanceCallsPre.map((call3) => isBalance(call3) ? hexToBigInt(call3.data) : null);
  const ethPost = (block_ethPost == null ? void 0 : block_ethPost.calls) ?? [];
  const assetsPost = (block_assetsPost == null ? void 0 : block_assetsPost.calls) ?? [];
  const balanceCallsPost = [...ethPost, ...assetsPost];
  const balancesPost = balanceCallsPost.map((call3) => isBalance(call3) ? hexToBigInt(call3.data) : null);
  const decimals = ((block_decimals == null ? void 0 : block_decimals.calls) ?? []).map((call3) => decodeAssetResult(call3, decimalsFunction));
  const symbols = ((block_symbols == null ? void 0 : block_symbols.calls) ?? []).map((call3) => decodeAssetResult(call3, symbolFunction));
  const tokenURI = ((block_tokenURI == null ? void 0 : block_tokenURI.calls) ?? []).map((call3) => decodeAssetResult(call3, tokenUriFunction));
  const changes = [];
  for (const [i, balancePost] of balancesPost.entries()) {
    const balancePre_ = balancesPre[i];
    const preCall = balanceCallsPre[i];
    const balancePre = typeof balancePre_ === "bigint" ? balancePre_ : i > 0 && (preCall == null ? void 0 : preCall.status) === "success" && preCall.data === "0x" ? 0n : null;
    if (typeof balancePost !== "bigint")
      continue;
    if (typeof balancePre !== "bigint")
      continue;
    const decimals_ = decimals[i - 1];
    const symbol_ = symbols[i - 1];
    const tokenURI_ = tokenURI[i - 1];
    const token = (() => {
      if (i === 0)
        return {
          address: ethAddress,
          decimals: 18,
          symbol: "ETH"
        };
      return {
        address: assetAddresses[i - 1],
        decimals: tokenURI_ || decimals_ ? Number(decimals_ ?? 1) : void 0,
        symbol: symbol_ ?? void 0
      };
    })();
    changes.push({
      token,
      value: {
        pre: balancePre,
        post: balancePost,
        diff: balancePost - balancePre
      }
    });
  }
  return {
    assetChanges: changes,
    block,
    results
  };
}
function encodeStaticCall(address, data) {
  return encodeData2(staticCallFunction, [address, data]);
}
function tokensFromLogs(logs, account) {
  const account_ = pad(account.toLowerCase(), { size: 32 });
  return logs.filter((log) => {
    var _a, _b, _c;
    if (((_a = log.topics[0]) == null ? void 0 : _a.toLowerCase()) !== transferEventSelector)
      return false;
    if (log.address.toLowerCase() === ethAddress)
      return false;
    return ((_b = log.topics[1]) == null ? void 0 : _b.toLowerCase()) === account_ || ((_c = log.topics[2]) == null ? void 0 : _c.toLowerCase()) === account_;
  }).map((log) => log.address.toLowerCase());
}
function isBalance(call3) {
  return call3.status === "success" && /^0x[\da-f]{64}$/i.test(call3.data);
}
function decodeAssetResult(call3, abiFunction) {
  if (call3.status === "failure" || call3.data === "0x")
    return null;
  try {
    return decodeResult(abiFunction, call3.data);
  } catch {
    return null;
  }
}
async function readBalance(client, parameters) {
  const { account, address, blockNumber, blockTag, data, staticCallAddress, stateOverride } = parameters;
  try {
    const result = await call({ ...client, ccipRead: false }, {
      account: address ? zeroAddress : account,
      data: address ? encodeStaticCall(address, data) : data,
      stateOverride: address && staticCallAddress ? [
        ...stateOverride ?? [],
        { address: staticCallAddress, code: staticCallCode }
      ] : stateOverride,
      ...address ? { gas: assetProbeGas, to: staticCallAddress } : {},
      ...typeof blockNumber === "bigint" ? { blockNumber } : { blockTag }
    });
    return { data: result.data ?? "0x", status: "success" };
  } catch (error) {
    if (!(error instanceof CallExecutionError) || !(error.cause instanceof ExecutionRevertedError))
      throw error;
    return { data: "0x", status: "failure" };
  }
}
function getStaticCallAddress(addresses) {
  const occupied = new Set(addresses.map((address) => address.toLowerCase()));
  let value = staticCallAddressBase;
  while (occupied.has(`0x${value.toString(16).padStart(40, "0")}`))
    value++;
  return `0x${value.toString(16).padStart(40, "0")}`;
}

// node_modules/viem/_esm/actions/public/simulateContract.js
async function simulateContract(client, parameters) {
  var _a;
  const { abi: abi2, address, args, functionName, dataSuffix = typeof client.dataSuffix === "string" ? client.dataSuffix : (_a = client.dataSuffix) == null ? void 0 : _a.value, ...callRequest } = parameters;
  const account = callRequest.account ? parseAccount(callRequest.account) : client.account;
  const calldata = encodeFunctionData({ abi: abi2, args, functionName });
  try {
    const { data } = await getAction(client, call, "call")({
      batch: false,
      data: `${calldata}${dataSuffix ? dataSuffix.replace("0x", "") : ""}`,
      to: address,
      ...callRequest,
      account
    });
    const result = decodeFunctionResult({
      abi: abi2,
      args,
      functionName,
      data: data || "0x"
    });
    const minimizedAbi = abi2.filter((abiItem) => "name" in abiItem && abiItem.name === parameters.functionName);
    return {
      result,
      request: {
        abi: minimizedAbi,
        address,
        args,
        dataSuffix,
        functionName,
        ...callRequest,
        account
      }
    };
  } catch (error) {
    throw getContractError(error, {
      abi: abi2,
      address,
      args,
      docsPath: "/docs/contract/simulateContract",
      functionName,
      sender: account == null ? void 0 : account.address
    });
  }
}

// node_modules/viem/_esm/actions/public/uninstallFilter.js
async function uninstallFilter(_client, { filter }) {
  return filter.request({
    method: "eth_uninstallFilter",
    params: [filter.id]
  });
}

// node_modules/ox/_esm/erc6492/SignatureErc6492.js
var SignatureErc6492_exports = {};
__export(SignatureErc6492_exports, {
  InvalidWrappedSignatureError: () => InvalidWrappedSignatureError2,
  assert: () => assert5,
  from: () => from15,
  magicBytes: () => magicBytes2,
  universalSignatureValidatorAbi: () => universalSignatureValidatorAbi,
  universalSignatureValidatorBytecode: () => universalSignatureValidatorBytecode,
  unwrap: () => unwrap2,
  validate: () => validate5,
  wrap: () => wrap2
});
var magicBytes2 = "0x6492649264926492649264926492649264926492649264926492649264926492";
var universalSignatureValidatorBytecode = "0x608060405234801561001057600080fd5b5060405161069438038061069483398101604081905261002f9161051e565b600061003c848484610048565b9050806000526001601ff35b60007f64926492649264926492649264926492649264926492649264926492649264926100748361040c565b036101e7576000606080848060200190518101906100929190610577565b60405192955090935091506000906001600160a01b038516906100b69085906105dd565b6000604051808303816000865af19150503d80600081146100f3576040519150601f19603f3d011682016040523d82523d6000602084013e6100f8565b606091505b50509050876001600160a01b03163b60000361016057806101605760405162461bcd60e51b815260206004820152601e60248201527f5369676e617475726556616c696461746f723a206465706c6f796d656e74000060448201526064015b60405180910390fd5b604051630b135d3f60e11b808252906001600160a01b038a1690631626ba7e90610190908b9087906004016105f9565b602060405180830381865afa1580156101ad573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101d19190610633565b6001600160e01b03191614945050505050610405565b6001600160a01b0384163b1561027a57604051630b135d3f60e11b808252906001600160a01b03861690631626ba7e9061022790879087906004016105f9565b602060405180830381865afa158015610244573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102689190610633565b6001600160e01b031916149050610405565b81516041146102df5760405162461bcd60e51b815260206004820152603a602482015260008051602061067483398151915260448201527f3a20696e76616c6964207369676e6174757265206c656e6774680000000000006064820152608401610157565b6102e7610425565b5060208201516040808401518451859392600091859190811061030c5761030c61065d565b016020015160f81c9050601b811480159061032b57508060ff16601c14155b1561038c5760405162461bcd60e51b815260206004820152603b602482015260008051602061067483398151915260448201527f3a20696e76616c6964207369676e617475726520762076616c756500000000006064820152608401610157565b60408051600081526020810180835289905260ff83169181019190915260608101849052608081018390526001600160a01b0389169060019060a0016020604051602081039080840390855afa1580156103ea573d6000803e3d6000fd5b505050602060405103516001600160a01b0316149450505050505b9392505050565b600060208251101561041d57600080fd5b508051015190565b60405180606001604052806003906020820280368337509192915050565b6001600160a01b038116811461045857600080fd5b50565b634e487b7160e01b600052604160045260246000fd5b60005b8381101561048c578181015183820152602001610474565b50506000910152565b600082601f8301126104a657600080fd5b81516001600160401b038111156104bf576104bf61045b565b604051601f8201601f19908116603f011681016001600160401b03811182821017156104ed576104ed61045b565b60405281815283820160200185101561050557600080fd5b610516826020830160208701610471565b949350505050565b60008060006060848603121561053357600080fd5b835161053e81610443565b6020850151604086015191945092506001600160401b0381111561056157600080fd5b61056d86828701610495565b9150509250925092565b60008060006060848603121561058c57600080fd5b835161059781610443565b60208501519093506001600160401b038111156105b357600080fd5b6105bf86828701610495565b604086015190935090506001600160401b0381111561056157600080fd5b600082516105ef818460208701610471565b9190910192915050565b828152604060208201526000825180604084015261061e816060850160208701610471565b601f01601f1916919091016060019392505050565b60006020828403121561064557600080fd5b81516001600160e01b03198116811461040557600080fd5b634e487b7160e01b600052603260045260246000fdfe5369676e617475726556616c696461746f72237265636f7665725369676e6572";
var universalSignatureValidatorAbi = [
  {
    inputs: [
      {
        name: "_signer",
        type: "address"
      },
      {
        name: "_hash",
        type: "bytes32"
      },
      {
        name: "_signature",
        type: "bytes"
      }
    ],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    inputs: [
      {
        name: "_signer",
        type: "address"
      },
      {
        name: "_hash",
        type: "bytes32"
      },
      {
        name: "_signature",
        type: "bytes"
      }
    ],
    outputs: [
      {
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function",
    name: "isValidSig"
  }
];
function assert5(wrapped) {
  if (slice3(wrapped, -32) !== magicBytes2)
    throw new InvalidWrappedSignatureError2(wrapped);
}
function from15(wrapped) {
  if (typeof wrapped === "string")
    return unwrap2(wrapped);
  return wrapped;
}
function unwrap2(wrapped) {
  assert5(wrapped);
  const [to, data, signature] = decode(from6("address, bytes, bytes"), wrapped);
  return { data, signature, to };
}
function wrap2(value) {
  const { data, signature, to } = value;
  return concat2(encode2(from6("address, bytes, bytes"), [
    to,
    data,
    signature
  ]), magicBytes2);
}
function validate5(wrapped) {
  try {
    assert5(wrapped);
    return true;
  } catch {
    return false;
  }
}
var InvalidWrappedSignatureError2 = class extends BaseError2 {
  constructor(wrapped) {
    super(`Value \`${wrapped}\` is an invalid ERC-6492 wrapped signature.`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "SignatureErc6492.InvalidWrappedSignatureError"
    });
  }
};

// node_modules/viem/_esm/utils/signature/serializeSignature.js
function serializeSignature({ r, s, to = "hex", v, yParity }) {
  const yParity_ = (() => {
    if (yParity === 0 || yParity === 1)
      return yParity;
    if (v && (v === 27n || v === 28n || v >= 35n))
      return v % 2n === 0n ? 1 : 0;
    throw new Error("Invalid `v` or `yParity` value");
  })();
  const signature = `0x${new secp256k1.Signature(hexToBigInt(r), hexToBigInt(s)).toCompactHex()}${yParity_ === 0 ? "1b" : "1c"}`;
  if (to === "hex")
    return signature;
  return hexToBytes(signature);
}

// node_modules/viem/_esm/actions/public/verifyHash.js
async function verifyHash2(client, parameters) {
  var _a, _b, _c, _d;
  const { address, chain: chain2 = client.chain, hash: hash2, erc6492VerifierAddress: verifierAddress = parameters.universalSignatureVerifierAddress ?? ((_b = (_a = chain2 == null ? void 0 : chain2.contracts) == null ? void 0 : _a.erc6492Verifier) == null ? void 0 : _b.address), multicallAddress = parameters.multicallAddress ?? ((_d = (_c = chain2 == null ? void 0 : chain2.contracts) == null ? void 0 : _c.multicall3) == null ? void 0 : _d.address), mode = "auto" } = parameters;
  if (chain2 == null ? void 0 : chain2.verifyHash)
    return await chain2.verifyHash(client, parameters);
  const signature = (() => {
    const signature2 = parameters.signature;
    if (isHex(signature2))
      return signature2;
    if (typeof signature2 === "object" && "r" in signature2 && "s" in signature2)
      return serializeSignature(signature2);
    return bytesToHex(signature2);
  })();
  try {
    if (mode === "eoa") {
      try {
        const verified = isAddressEqual(getAddress(address), await recoverAddress({ hash: hash2, signature }));
        if (verified)
          return true;
      } catch {
      }
    }
    if (SignatureErc8010_exports.validate(signature))
      return await verifyErc8010(client, {
        ...parameters,
        multicallAddress,
        signature
      });
    return await verifyErc6492(client, {
      ...parameters,
      verifierAddress,
      signature
    });
  } catch (error) {
    if (mode !== "eoa") {
      try {
        const verified = isAddressEqual(getAddress(address), await recoverAddress({ hash: hash2, signature }));
        if (verified)
          return true;
      } catch {
      }
    }
    if (error instanceof VerificationError) {
      return false;
    }
    throw error;
  }
}
async function verifyErc8010(client, parameters) {
  var _a;
  const { address, blockHash, blockNumber, blockTag, hash: hash2, multicallAddress, requireCanonical } = parameters;
  const { authorization: authorization_ox, data: initData, signature, to } = SignatureErc8010_exports.unwrap(parameters.signature);
  const code = await getCode(client, {
    address,
    blockHash,
    blockNumber,
    blockTag,
    requireCanonical
  });
  if (code === concatHex(["0xef0100", authorization_ox.address]))
    return await verifyErc1271(client, {
      ...parameters,
      signature
    });
  const authorization = {
    address: authorization_ox.address,
    chainId: Number(authorization_ox.chainId),
    nonce: Number(authorization_ox.nonce),
    r: numberToHex(authorization_ox.r, { size: 32 }),
    s: numberToHex(authorization_ox.s, { size: 32 }),
    yParity: authorization_ox.yParity
  };
  const valid = await verifyAuthorization({
    address,
    authorization
  });
  if (!valid)
    throw new VerificationError();
  const results = await getAction(client, readContract, "readContract")({
    ...multicallAddress ? { address: multicallAddress } : { code: multicall3Bytecode },
    authorizationList: [authorization],
    abi: multicall3Abi,
    blockHash,
    blockNumber,
    blockTag: "pending",
    functionName: "aggregate3",
    requireCanonical,
    args: [
      [
        ...initData ? [
          {
            allowFailure: true,
            target: to ?? address,
            callData: initData
          }
        ] : [],
        {
          allowFailure: true,
          target: address,
          callData: encodeFunctionData({
            abi: erc1271Abi,
            functionName: "isValidSignature",
            args: [hash2, signature]
          })
        }
      ]
    ]
  });
  const data = (_a = results[results.length - 1]) == null ? void 0 : _a.returnData;
  if (data == null ? void 0 : data.startsWith("0x1626ba7e"))
    return true;
  throw new VerificationError();
}
async function verifyErc6492(client, parameters) {
  const { address, factory, factoryData, hash: hash2, signature, verifierAddress, ...rest } = parameters;
  const wrappedSignature = await (async () => {
    if (!factory && !factoryData)
      return signature;
    if (SignatureErc6492_exports.validate(signature))
      return signature;
    return SignatureErc6492_exports.wrap({
      data: factoryData,
      signature,
      to: factory
    });
  })();
  const args = verifierAddress ? {
    to: verifierAddress,
    data: encodeFunctionData({
      abi: erc6492SignatureValidatorAbi,
      functionName: "isValidSig",
      args: [address, hash2, wrappedSignature]
    }),
    ...rest
  } : {
    data: encodeDeployData({
      abi: erc6492SignatureValidatorAbi,
      args: [address, hash2, wrappedSignature],
      bytecode: erc6492SignatureValidatorByteCode
    }),
    ...rest
  };
  const { data } = await getAction(client, call, "call")(args).catch((error) => {
    if (error instanceof CallExecutionError)
      throw new VerificationError();
    throw error;
  });
  if (hexToBool(data ?? "0x0"))
    return true;
  throw new VerificationError();
}
async function verifyErc1271(client, parameters) {
  const { address, blockHash, blockNumber, blockTag, hash: hash2, requireCanonical, signature } = parameters;
  const result = await getAction(client, readContract, "readContract")({
    address,
    abi: erc1271Abi,
    args: [hash2, signature],
    blockHash,
    blockNumber,
    blockTag,
    functionName: "isValidSignature",
    requireCanonical
  }).catch((error) => {
    if (error instanceof ContractFunctionExecutionError)
      throw new VerificationError();
    throw error;
  });
  if (result.startsWith("0x1626ba7e"))
    return true;
  throw new VerificationError();
}
var VerificationError = class extends Error {
};

// node_modules/viem/_esm/actions/public/verifyMessage.js
async function verifyMessage2(client, { address, message, factory, factoryData, signature, ...callRequest }) {
  const hash2 = hashMessage(message);
  return getAction(client, verifyHash2, "verifyHash")({
    address,
    factory,
    factoryData,
    hash: hash2,
    signature,
    ...callRequest
  });
}

// node_modules/viem/_esm/actions/public/verifyTypedData.js
async function verifyTypedData2(client, parameters) {
  const { address, factory, factoryData, signature, message, primaryType, types, domain, ...callRequest } = parameters;
  const hash2 = hashTypedData({ message, primaryType, types, domain });
  return getAction(client, verifyHash2, "verifyHash")({
    address,
    factory,
    factoryData,
    hash: hash2,
    signature,
    ...callRequest
  });
}

// node_modules/viem/_esm/utils/observe.js
var listenersCache = /* @__PURE__ */ new Map();
var cleanupCache = /* @__PURE__ */ new Map();
var callbackCount = 0;
function observe(observerId, callbacks, fn) {
  const callbackId = ++callbackCount;
  const getListeners = () => listenersCache.get(observerId) || [];
  const unsubscribe = () => {
    const listeners2 = getListeners();
    const nextListeners = listeners2.filter((cb) => cb.id !== callbackId);
    if (nextListeners.length === 0) {
      listenersCache.delete(observerId);
      cleanupCache.delete(observerId);
      return;
    }
    listenersCache.set(observerId, nextListeners);
  };
  const unwatch = () => {
    const listeners2 = getListeners();
    if (!listeners2.some((cb) => cb.id === callbackId))
      return;
    const cleanup2 = cleanupCache.get(observerId);
    if (listeners2.length === 1 && cleanup2) {
      const p = cleanup2();
      if (p instanceof Promise)
        p.catch(() => {
        });
    }
    unsubscribe();
  };
  const listeners = getListeners();
  listenersCache.set(observerId, [
    ...listeners,
    { id: callbackId, fns: callbacks }
  ]);
  if (listeners && listeners.length > 0)
    return unwatch;
  const emit = {};
  for (const key in callbacks) {
    emit[key] = (...args) => {
      var _a, _b;
      const listeners2 = getListeners();
      if (listeners2.length === 0)
        return;
      for (const listener of listeners2)
        (_b = (_a = listener.fns)[key]) == null ? void 0 : _b.call(_a, ...args);
    };
  }
  const cleanup = fn(emit);
  if (typeof cleanup === "function")
    cleanupCache.set(observerId, cleanup);
  return unwatch;
}

// node_modules/viem/_esm/utils/poll.js
function poll(fn, { emitOnBegin, initialWaitTime, interval }) {
  let active = true;
  const unwatch = () => active = false;
  const watch = async () => {
    let data;
    if (emitOnBegin)
      data = await fn({ unpoll: unwatch });
    const initialWait = await (initialWaitTime == null ? void 0 : initialWaitTime(data)) ?? interval;
    await wait(initialWait);
    const poll2 = async () => {
      if (!active)
        return;
      await fn({ unpoll: unwatch });
      await wait(interval);
      poll2();
    };
    poll2();
  };
  watch();
  return unwatch;
}

// node_modules/viem/_esm/actions/public/watchBlockNumber.js
function watchBlockNumber(client, { emitOnBegin = false, emitMissed = false, onBlockNumber, onError, poll: poll_, pollingInterval = client.pollingInterval }) {
  const enablePolling = (() => {
    if (typeof poll_ !== "undefined")
      return poll_;
    if (client.transport.type === "webSocket" || client.transport.type === "ipc")
      return false;
    if (client.transport.type === "fallback" && (client.transport.transports[0].config.type === "webSocket" || client.transport.transports[0].config.type === "ipc"))
      return false;
    return true;
  })();
  let prevBlockNumber;
  const pollBlockNumber = () => {
    const observerId = stringify([
      "watchBlockNumber",
      client.uid,
      emitOnBegin,
      emitMissed,
      pollingInterval
    ]);
    return observe(observerId, { onBlockNumber, onError }, (emit) => poll(async () => {
      var _a;
      try {
        const blockNumber = await getAction(client, getBlockNumber, "getBlockNumber")({ cacheTime: 0 });
        if (prevBlockNumber !== void 0) {
          if (blockNumber === prevBlockNumber)
            return;
          if (blockNumber - prevBlockNumber > 1 && emitMissed) {
            for (let i = prevBlockNumber + 1n; i < blockNumber; i++) {
              emit.onBlockNumber(i, prevBlockNumber);
              prevBlockNumber = i;
            }
          }
        }
        if (prevBlockNumber === void 0 || blockNumber > prevBlockNumber) {
          emit.onBlockNumber(blockNumber, prevBlockNumber);
          prevBlockNumber = blockNumber;
        }
      } catch (err) {
        (_a = emit.onError) == null ? void 0 : _a.call(emit, err);
      }
    }, {
      emitOnBegin,
      interval: pollingInterval
    }));
  };
  const subscribeBlockNumber = () => {
    const observerId = stringify([
      "watchBlockNumber",
      client.uid,
      emitOnBegin,
      emitMissed
    ]);
    return observe(observerId, { onBlockNumber, onError }, (emit) => {
      let active = true;
      let unsubscribe = () => active = false;
      (async () => {
        try {
          const transport = (() => {
            if (client.transport.type === "fallback") {
              const transport2 = client.transport.transports.find((transport3) => transport3.config.type === "webSocket" || transport3.config.type === "ipc");
              if (!transport2)
                return client.transport;
              return transport2.value;
            }
            return client.transport;
          })();
          const { unsubscribe: unsubscribe_ } = await transport.subscribe({
            params: ["newHeads"],
            onData(data) {
              var _a;
              if (!active)
                return;
              const blockNumber = hexToBigInt((_a = data.result) == null ? void 0 : _a.number);
              emit.onBlockNumber(blockNumber, prevBlockNumber);
              prevBlockNumber = blockNumber;
            },
            onError(error) {
              var _a;
              (_a = emit.onError) == null ? void 0 : _a.call(emit, error);
            }
          });
          unsubscribe = unsubscribe_;
          if (!active)
            unsubscribe();
        } catch (err) {
          onError == null ? void 0 : onError(err);
        }
      })();
      return () => unsubscribe();
    });
  };
  return enablePolling ? pollBlockNumber() : subscribeBlockNumber();
}

// node_modules/viem/_esm/actions/public/waitForTransactionReceipt.js
async function waitForTransactionReceipt(client, parameters) {
  var _a;
  const {
    checkReplacement = ((_a = client.chain) == null ? void 0 : _a.supportsTransactionReplacementDetection) ?? true,
    confirmations = 1,
    hash: hash2,
    onReplaced,
    retryCount = 6,
    retryDelay = ({ count }) => ~~(1 << count) * 200,
    // exponential backoff
    timeout = 18e4
  } = parameters;
  const getReplacementKey = (transaction2) => {
    var _a2, _b, _c;
    return ((_c = (_b = (_a2 = client.chain) == null ? void 0 : _a2.transactionReplacement) == null ? void 0 : _b.getKey) == null ? void 0 : _c.call(_b, transaction2)) ?? String(transaction2.nonce);
  };
  const pollingInterval = (() => {
    var _a2;
    if (parameters.pollingInterval)
      return parameters.pollingInterval;
    if ((_a2 = client.chain) == null ? void 0 : _a2.experimental_preconfirmationTime)
      return client.chain.experimental_preconfirmationTime;
    return client.pollingInterval;
  })();
  const observerId = stringify([
    "waitForTransactionReceipt",
    client.uid,
    hash2,
    // Concurrent calls with different behavior-defining options must not
    // share an observer: the first call's polling closure decides timeout,
    // confirmations, polling interval and replacement checks for everyone.
    {
      checkReplacement,
      confirmations,
      pollingInterval,
      retryCount,
      timeout
    }
  ]);
  let transaction;
  let replacedTransaction;
  let receipt;
  let retrying = false;
  let _unobserve;
  let _unwatch;
  const { promise, resolve, reject } = withResolvers();
  const timer = timeout ? setTimeout(() => {
    _unwatch == null ? void 0 : _unwatch();
    _unobserve == null ? void 0 : _unobserve();
    reject(new WaitForTransactionReceiptTimeoutError({ hash: hash2 }));
  }, timeout) : void 0;
  _unobserve = observe(observerId, { onReplaced, resolve, reject }, async (emit) => {
    receipt = await getAction(client, getTransactionReceipt, "getTransactionReceipt")({ hash: hash2 }).catch(() => void 0);
    if (receipt && confirmations <= 1) {
      clearTimeout(timer);
      emit.resolve(receipt);
      _unobserve == null ? void 0 : _unobserve();
      return;
    }
    _unwatch = getAction(client, watchBlockNumber, "watchBlockNumber")({
      emitMissed: true,
      emitOnBegin: true,
      poll: true,
      pollingInterval,
      async onBlockNumber(blockNumber_) {
        var _a2, _b, _c;
        const done = (fn) => {
          clearTimeout(timer);
          _unwatch == null ? void 0 : _unwatch();
          fn();
          _unobserve == null ? void 0 : _unobserve();
        };
        let blockNumber = blockNumber_;
        if (retrying)
          return;
        try {
          if (receipt) {
            if (confirmations > 1 && (!receipt.blockNumber || blockNumber - receipt.blockNumber + 1n < confirmations))
              return;
            done(() => emit.resolve(receipt));
            return;
          }
          if (checkReplacement && !transaction) {
            retrying = true;
            await withRetry(async () => {
              transaction = await getAction(client, getTransaction, "getTransaction")({ hash: hash2 });
              if (transaction.blockNumber)
                blockNumber = transaction.blockNumber;
            }, {
              delay: retryDelay,
              retryCount
            });
            retrying = false;
          }
          receipt = await getAction(client, getTransactionReceipt, "getTransactionReceipt")({ hash: hash2 });
          if (confirmations > 1 && (!receipt.blockNumber || blockNumber - receipt.blockNumber + 1n < confirmations))
            return;
          done(() => emit.resolve(receipt));
        } catch (err) {
          if (err instanceof TransactionNotFoundError || err instanceof TransactionReceiptNotFoundError) {
            if (!transaction) {
              retrying = false;
              return;
            }
            if (transaction.blockNumber) {
              retrying = false;
              return;
            }
            try {
              replacedTransaction = transaction;
              retrying = true;
              const block = await withRetry(() => getAction(client, getBlock, "getBlock")({
                blockNumber,
                includeTransactions: true
              }), {
                delay: retryDelay,
                retryCount,
                shouldRetry: ({ error }) => error instanceof BlockNotFoundError
              });
              retrying = false;
              const replacedKey = getReplacementKey(replacedTransaction);
              const replacementTransaction = block.transactions.find((candidate) => isAddressEqual(candidate.from, replacedTransaction.from) && candidate.hash !== replacedTransaction.hash && getReplacementKey(candidate) === replacedKey);
              if (!replacementTransaction)
                return;
              receipt = await getAction(client, getTransactionReceipt, "getTransactionReceipt")({
                hash: replacementTransaction.hash
              });
              if (confirmations > 1 && (!receipt.blockNumber || blockNumber - receipt.blockNumber + 1n < confirmations))
                return;
              const reason = ((_c = (_b = (_a2 = client.chain) == null ? void 0 : _a2.transactionReplacement) == null ? void 0 : _b.getReason) == null ? void 0 : _c.call(_b, {
                replaced: replacedTransaction,
                replacement: replacementTransaction
              })) ?? getReplacementReason(replacedTransaction, replacementTransaction);
              done(() => {
                var _a3;
                (_a3 = emit.onReplaced) == null ? void 0 : _a3.call(emit, {
                  reason,
                  replacedTransaction,
                  transaction: replacementTransaction,
                  transactionReceipt: receipt
                });
                emit.resolve(receipt);
              });
            } catch (err_) {
              done(() => emit.reject(err_));
            }
          } else {
            done(() => emit.reject(err));
          }
        }
      }
    });
  });
  return promise.finally(() => {
    clearTimeout(timer);
    _unobserve == null ? void 0 : _unobserve();
  });
}
function getReplacementReason(replaced, replacement) {
  if ((replacement.to && replaced.to ? isAddressEqual(replacement.to, replaced.to) : replacement.to === replaced.to) && replacement.value === replaced.value && replacement.input === replaced.input)
    return "repriced";
  if (replacement.from === replacement.to && replacement.value === 0n)
    return "cancelled";
  return "replaced";
}

// node_modules/viem/_esm/actions/public/watchBlockHeaders.js
var blockFields = [
  "size",
  "totalDifficulty",
  "transactions",
  "uncles",
  "withdrawals"
];
function watchBlockHeaders(client, { onBlockHeader, onError }) {
  let prevBlockHeader;
  const observerId = stringify(["watchBlockHeaders", client.uid]);
  return observe(observerId, { onBlockHeader, onError }, (emit) => {
    let active = true;
    let subscribed = false;
    let unsubscribe = () => active = false;
    (async () => {
      var _a;
      try {
        const transport = (() => {
          if (client.transport.type === "fallback") {
            const transport2 = client.transport.transports.find((transport3) => transport3.config.type === "webSocket" || transport3.config.type === "ipc");
            if (!transport2)
              return client.transport;
            return transport2.value;
          }
          return client.transport;
        })();
        const { unsubscribe: unsubscribe_ } = await transport.subscribe({
          params: ["newHeads"],
          onData(data) {
            var _a2, _b, _c;
            if (!active)
              return;
            const blockHeader = (((_c = (_b = (_a2 = client.chain) == null ? void 0 : _a2.formatters) == null ? void 0 : _b.block) == null ? void 0 : _c.format) || formatBlock)(data.result, "watchBlockHeaders");
            for (const field of blockFields)
              delete blockHeader[field];
            emit.onBlockHeader(blockHeader, prevBlockHeader);
            prevBlockHeader = blockHeader;
          },
          onError(error) {
            var _a2;
            if (subscribed)
              (_a2 = emit.onError) == null ? void 0 : _a2.call(emit, error);
          }
        });
        subscribed = true;
        unsubscribe = unsubscribe_;
        if (!active)
          unsubscribe();
      } catch (err) {
        (_a = emit.onError) == null ? void 0 : _a.call(emit, err);
      }
    })();
    return () => unsubscribe();
  });
}

// node_modules/viem/_esm/actions/public/watchBlocks.js
function watchBlocks(client, { blockTag = client.experimental_blockTag ?? "latest", emitMissed = false, emitOnBegin = false, onBlock, onError, includeTransactions: includeTransactions_, poll: poll_, pollingInterval = client.pollingInterval }) {
  const enablePolling = (() => {
    if (typeof poll_ !== "undefined")
      return poll_;
    if (client.transport.type === "webSocket" || client.transport.type === "ipc")
      return false;
    if (client.transport.type === "fallback" && (client.transport.transports[0].config.type === "webSocket" || client.transport.transports[0].config.type === "ipc"))
      return false;
    return true;
  })();
  const includeTransactions = includeTransactions_ ?? false;
  let prevBlock;
  const pollBlocks = () => {
    const observerId = stringify([
      "watchBlocks",
      client.uid,
      blockTag,
      emitMissed,
      emitOnBegin,
      includeTransactions,
      pollingInterval
    ]);
    return observe(observerId, { onBlock, onError }, (emit) => poll(async () => {
      var _a;
      try {
        const block = await getAction(client, getBlock, "getBlock")({
          blockTag,
          includeTransactions
        });
        if (block.number !== null && (prevBlock == null ? void 0 : prevBlock.number) != null) {
          if (block.number === prevBlock.number)
            return;
          if (block.number - prevBlock.number > 1 && emitMissed) {
            for (let i = (prevBlock == null ? void 0 : prevBlock.number) + 1n; i < block.number; i++) {
              const block2 = await getAction(client, getBlock, "getBlock")({
                blockNumber: i,
                includeTransactions
              });
              emit.onBlock(block2, prevBlock);
              prevBlock = block2;
            }
          }
        }
        if (
          // If no previous block exists, emit.
          (prevBlock == null ? void 0 : prevBlock.number) == null || // If the block tag is "pending" with no block number, emit.
          blockTag === "pending" && (block == null ? void 0 : block.number) == null || // If the next block number is greater than the previous block number, emit.
          // We don't want to emit blocks in the past.
          block.number !== null && block.number > prevBlock.number
        ) {
          emit.onBlock(block, prevBlock);
          prevBlock = block;
        }
      } catch (err) {
        (_a = emit.onError) == null ? void 0 : _a.call(emit, err);
      }
    }, {
      emitOnBegin,
      interval: pollingInterval
    }));
  };
  const subscribeBlocks = () => {
    let active = true;
    let emitFetched = true;
    let unsubscribe = () => active = false;
    (async () => {
      try {
        if (emitOnBegin) {
          getAction(client, getBlock, "getBlock")({
            blockTag,
            includeTransactions
          }).then((block) => {
            if (!active)
              return;
            if (!emitFetched)
              return;
            onBlock(block, void 0);
            emitFetched = false;
          }).catch(onError);
        }
        const transport = (() => {
          if (client.transport.type === "fallback") {
            const transport2 = client.transport.transports.find((transport3) => transport3.config.type === "webSocket" || transport3.config.type === "ipc");
            if (!transport2)
              return client.transport;
            return transport2.value;
          }
          return client.transport;
        })();
        const { unsubscribe: unsubscribe_ } = await transport.subscribe({
          params: ["newHeads"],
          async onData(data) {
            var _a;
            if (!active)
              return;
            const block = await getAction(client, getBlock, "getBlock")({
              blockNumber: (_a = data.result) == null ? void 0 : _a.number,
              includeTransactions
            }).catch(() => {
            });
            if (!active)
              return;
            onBlock(block, prevBlock);
            emitFetched = false;
            prevBlock = block;
          },
          onError(error) {
            onError == null ? void 0 : onError(error);
          }
        });
        unsubscribe = unsubscribe_;
        if (!active)
          unsubscribe();
      } catch (err) {
        onError == null ? void 0 : onError(err);
      }
    })();
    return () => unsubscribe();
  };
  return enablePolling ? pollBlocks() : subscribeBlocks();
}

// node_modules/viem/_esm/actions/public/watchContractEvent.js
function watchContractEvent(client, parameters) {
  const { abi: abi2, address, args, batch = true, eventName, fromBlock, onError, onLogs, poll: poll_, pollingInterval = client.pollingInterval, strict: strict_ } = parameters;
  const enablePolling = (() => {
    if (typeof poll_ !== "undefined")
      return poll_;
    if (typeof fromBlock === "bigint")
      return true;
    if (client.transport.type === "webSocket" || client.transport.type === "ipc")
      return false;
    if (client.transport.type === "fallback" && (client.transport.transports[0].config.type === "webSocket" || client.transport.transports[0].config.type === "ipc"))
      return false;
    return true;
  })();
  const pollContractEvent = () => {
    const strict = strict_ ?? false;
    const observerId = stringify([
      "watchContractEvent",
      address,
      args,
      batch,
      client.uid,
      eventName,
      pollingInterval,
      strict,
      fromBlock
    ]);
    return observe(observerId, { onLogs, onError }, (emit) => {
      let previousBlockNumber;
      if (fromBlock !== void 0)
        previousBlockNumber = fromBlock - 1n;
      let filter;
      let initialized = false;
      const unwatch = poll(async () => {
        var _a;
        if (!initialized) {
          try {
            filter = await getAction(client, createContractEventFilter, "createContractEventFilter")({
              abi: abi2,
              address,
              args,
              eventName,
              strict,
              fromBlock
            });
          } catch {
          }
          initialized = true;
          return;
        }
        try {
          let logs;
          if (filter) {
            logs = await getAction(client, getFilterChanges, "getFilterChanges")({ filter });
          } else {
            const blockNumber = await getAction(client, getBlockNumber, "getBlockNumber")({});
            if (previousBlockNumber && previousBlockNumber < blockNumber) {
              logs = await getAction(client, getContractEvents, "getContractEvents")({
                abi: abi2,
                address,
                args,
                eventName,
                fromBlock: previousBlockNumber + 1n,
                toBlock: blockNumber,
                strict
              });
            } else {
              logs = [];
            }
            previousBlockNumber = blockNumber;
          }
          if (logs.length === 0)
            return;
          if (batch)
            emit.onLogs(logs);
          else
            for (const log of logs)
              emit.onLogs([log]);
        } catch (err) {
          if (filter && err instanceof InvalidInputRpcError)
            initialized = false;
          (_a = emit.onError) == null ? void 0 : _a.call(emit, err);
        }
      }, {
        emitOnBegin: true,
        interval: pollingInterval
      });
      return async () => {
        if (filter)
          await getAction(client, uninstallFilter, "uninstallFilter")({ filter });
        unwatch();
      };
    });
  };
  const subscribeContractEvent = () => {
    const strict = strict_ ?? false;
    const observerId = stringify([
      "watchContractEvent",
      address,
      args,
      batch,
      client.uid,
      eventName,
      pollingInterval,
      strict
    ]);
    let active = true;
    let unsubscribe = () => active = false;
    return observe(observerId, { onLogs, onError }, (emit) => {
      ;
      (async () => {
        try {
          const transport = (() => {
            if (client.transport.type === "fallback") {
              const transport2 = client.transport.transports.find((transport3) => transport3.config.type === "webSocket" || transport3.config.type === "ipc");
              if (!transport2)
                return client.transport;
              return transport2.value;
            }
            return client.transport;
          })();
          const topics = eventName ? encodeEventTopics({
            abi: abi2,
            eventName,
            args
          }) : [];
          const { unsubscribe: unsubscribe_ } = await transport.subscribe({
            params: ["logs", { address, topics }],
            onData(data) {
              var _a;
              if (!active)
                return;
              const log = data.result;
              try {
                const { eventName: eventName2, args: args2 } = decodeEventLog({
                  abi: abi2,
                  data: log.data,
                  topics: log.topics,
                  strict: strict_
                });
                const formatted = formatLog(log, {
                  args: args2,
                  eventName: eventName2
                });
                emit.onLogs([formatted]);
              } catch (err) {
                let eventName2;
                let isUnnamed;
                if (err instanceof DecodeLogDataMismatch || err instanceof DecodeLogTopicsMismatch) {
                  if (strict_)
                    return;
                  eventName2 = err.abiItem.name;
                  isUnnamed = (_a = err.abiItem.inputs) == null ? void 0 : _a.some((x) => !("name" in x && x.name));
                }
                const formatted = formatLog(log, {
                  args: isUnnamed ? [] : {},
                  eventName: eventName2
                });
                emit.onLogs([formatted]);
              }
            },
            onError(error) {
              var _a;
              (_a = emit.onError) == null ? void 0 : _a.call(emit, error);
            }
          });
          unsubscribe = unsubscribe_;
          if (!active)
            unsubscribe();
        } catch (err) {
          onError == null ? void 0 : onError(err);
        }
      })();
      return () => unsubscribe();
    });
  };
  return enablePolling ? pollContractEvent() : subscribeContractEvent();
}

// node_modules/viem/_esm/actions/public/watchEvent.js
function watchEvent(client, { address, args, batch = true, event, events, fromBlock, onError, onLogs, poll: poll_, pollingInterval = client.pollingInterval, strict: strict_ }) {
  const enablePolling = (() => {
    if (typeof poll_ !== "undefined")
      return poll_;
    if (typeof fromBlock === "bigint")
      return true;
    if (client.transport.type === "webSocket" || client.transport.type === "ipc")
      return false;
    if (client.transport.type === "fallback" && (client.transport.transports[0].config.type === "webSocket" || client.transport.transports[0].config.type === "ipc"))
      return false;
    return true;
  })();
  const strict = strict_ ?? false;
  const pollEvent = () => {
    const observerId = stringify([
      "watchEvent",
      address,
      args,
      batch,
      client.uid,
      event,
      events,
      pollingInterval,
      strict,
      fromBlock
    ]);
    return observe(observerId, { onLogs, onError }, (emit) => {
      let previousBlockNumber;
      if (fromBlock !== void 0)
        previousBlockNumber = fromBlock - 1n;
      let filter;
      let initialized = false;
      const unwatch = poll(async () => {
        var _a;
        if (!initialized) {
          try {
            filter = await getAction(client, createEventFilter, "createEventFilter")({
              address,
              args,
              event,
              events,
              strict,
              fromBlock
            });
          } catch {
          }
          initialized = true;
          return;
        }
        try {
          let logs;
          if (filter) {
            logs = await getAction(client, getFilterChanges, "getFilterChanges")({ filter });
          } else {
            const blockNumber = await getAction(client, getBlockNumber, "getBlockNumber")({});
            if (previousBlockNumber && previousBlockNumber !== blockNumber) {
              logs = await getAction(client, getLogs, "getLogs")({
                address,
                args,
                event,
                events,
                fromBlock: previousBlockNumber + 1n,
                toBlock: blockNumber
              });
            } else {
              logs = [];
            }
            previousBlockNumber = blockNumber;
          }
          if (logs.length === 0)
            return;
          if (batch)
            emit.onLogs(logs);
          else
            for (const log of logs)
              emit.onLogs([log]);
        } catch (err) {
          if (filter && err instanceof InvalidInputRpcError)
            initialized = false;
          (_a = emit.onError) == null ? void 0 : _a.call(emit, err);
        }
      }, {
        emitOnBegin: true,
        interval: pollingInterval
      });
      return async () => {
        if (filter)
          await getAction(client, uninstallFilter, "uninstallFilter")({ filter });
        unwatch();
      };
    });
  };
  const subscribeEvent = () => {
    let active = true;
    let unsubscribe = () => active = false;
    (async () => {
      try {
        const transport = (() => {
          if (client.transport.type === "fallback") {
            const transport2 = client.transport.transports.find((transport3) => transport3.config.type === "webSocket" || transport3.config.type === "ipc");
            if (!transport2)
              return client.transport;
            return transport2.value;
          }
          return client.transport;
        })();
        const events_ = events ?? (event ? [event] : void 0);
        let topics = [];
        if (events_) {
          const encoded = events_.flatMap((event2) => encodeEventTopics({
            abi: [event2],
            eventName: event2.name,
            args
          }));
          topics = [encoded];
          if (event)
            topics = topics[0];
        }
        const { unsubscribe: unsubscribe_ } = await transport.subscribe({
          params: ["logs", { address, topics }],
          onData(data) {
            var _a;
            if (!active)
              return;
            const log = data.result;
            try {
              const { eventName, args: args2 } = decodeEventLog({
                abi: events_ ?? [],
                data: log.data,
                topics: log.topics,
                strict
              });
              const formatted = formatLog(log, { args: args2, eventName });
              onLogs([formatted]);
            } catch (err) {
              let eventName;
              let isUnnamed;
              if (err instanceof DecodeLogDataMismatch || err instanceof DecodeLogTopicsMismatch) {
                if (strict_)
                  return;
                eventName = err.abiItem.name;
                isUnnamed = (_a = err.abiItem.inputs) == null ? void 0 : _a.some((x) => !("name" in x && x.name));
              }
              const formatted = formatLog(log, {
                args: isUnnamed ? [] : {},
                eventName
              });
              onLogs([formatted]);
            }
          },
          onError(error) {
            onError == null ? void 0 : onError(error);
          }
        });
        unsubscribe = unsubscribe_;
        if (!active)
          unsubscribe();
      } catch (err) {
        onError == null ? void 0 : onError(err);
      }
    })();
    return () => unsubscribe();
  };
  return enablePolling ? pollEvent() : subscribeEvent();
}

// node_modules/viem/_esm/actions/public/watchPendingTransactions.js
function watchPendingTransactions(client, { batch = true, onError, onTransactions, poll: poll_, pollingInterval = client.pollingInterval }) {
  const enablePolling = typeof poll_ !== "undefined" ? poll_ : client.transport.type !== "webSocket" && client.transport.type !== "ipc";
  const pollPendingTransactions = () => {
    const observerId = stringify([
      "watchPendingTransactions",
      client.uid,
      batch,
      pollingInterval
    ]);
    return observe(observerId, { onTransactions, onError }, (emit) => {
      let filter;
      const unwatch = poll(async () => {
        var _a;
        try {
          if (!filter) {
            try {
              filter = await getAction(client, createPendingTransactionFilter, "createPendingTransactionFilter")({});
              return;
            } catch (err) {
              unwatch();
              throw err;
            }
          }
          const hashes = await getAction(client, getFilterChanges, "getFilterChanges")({ filter });
          if (hashes.length === 0)
            return;
          if (batch)
            emit.onTransactions(hashes);
          else
            for (const hash2 of hashes)
              emit.onTransactions([hash2]);
        } catch (err) {
          (_a = emit.onError) == null ? void 0 : _a.call(emit, err);
        }
      }, {
        emitOnBegin: true,
        interval: pollingInterval
      });
      return async () => {
        if (filter)
          await getAction(client, uninstallFilter, "uninstallFilter")({ filter });
        unwatch();
      };
    });
  };
  const subscribePendingTransactions = () => {
    let active = true;
    let unsubscribe = () => active = false;
    (async () => {
      try {
        const { unsubscribe: unsubscribe_ } = await client.transport.subscribe({
          params: ["newPendingTransactions"],
          onData(data) {
            if (!active)
              return;
            const transaction = data.result;
            onTransactions([transaction]);
          },
          onError(error) {
            onError == null ? void 0 : onError(error);
          }
        });
        unsubscribe = unsubscribe_;
        if (!active)
          unsubscribe();
      } catch (err) {
        onError == null ? void 0 : onError(err);
      }
    })();
    return () => unsubscribe();
  };
  return enablePolling ? pollPendingTransactions() : subscribePendingTransactions();
}

// node_modules/viem/_esm/actions/token/index.js
var token_exports = {};
__export(token_exports, {
  approve: () => approve,
  approveSync: () => approveSync,
  getAllowance: () => getAllowance,
  getBalance: () => getBalance2,
  getMetadata: () => getMetadata,
  getTotalSupply: () => getTotalSupply,
  transfer: () => transfer,
  transferSync: () => transferSync
});

// node_modules/viem/_esm/errors/account.js
var AccountNotFoundError = class extends BaseError {
  constructor({ docsPath: docsPath3 } = {}) {
    super([
      "Could not find an Account to execute with this Action.",
      "Please provide an Account with the `account` argument on the Action, or by supplying an `account` to the Client."
    ].join("\n"), {
      docsPath: docsPath3,
      docsSlug: "account",
      name: "AccountNotFoundError"
    });
  }
};
var AccountTypeNotSupportedError = class extends BaseError {
  constructor({ docsPath: docsPath3, metaMessages, type }) {
    super(`Account type "${type}" is not supported.`, {
      docsPath: docsPath3,
      metaMessages,
      name: "AccountTypeNotSupportedError"
    });
  }
};

// node_modules/viem/_esm/actions/wallet/sendRawTransaction.js
async function sendRawTransaction(client, { serializedTransaction }) {
  return client.request({
    method: "eth_sendRawTransaction",
    params: [serializedTransaction]
  }, { retryCount: 0 });
}

// node_modules/viem/_esm/actions/wallet/sendTransaction.js
var supportsWalletNamespace = new LruMap(128);
async function sendTransaction(client, parameters) {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  const { account: account_ = client.account, assertChainId = true, chain: chain2 = client.chain, accessList, authorizationList, blobs, data, dataSuffix = typeof client.dataSuffix === "string" ? client.dataSuffix : (_a = client.dataSuffix) == null ? void 0 : _a.value, gas, gasPrice, maxFeePerBlobGas, maxFeePerGas, maxPriorityFeePerGas, nonce, type, value, ...rest } = parameters;
  if (typeof account_ === "undefined")
    throw new AccountNotFoundError({
      docsPath: "/docs/actions/wallet/sendTransaction"
    });
  const account = account_ ? parseAccount(account_) : null;
  let nonceManagerParameters;
  try {
    assertRequest(parameters);
    const to = await (async () => {
      if (parameters.to)
        return parameters.to;
      if (parameters.to === null)
        return void 0;
      if (authorizationList && authorizationList.length > 0)
        return await recoverAuthorizationAddress({
          authorization: authorizationList[0]
        }).catch(() => {
          throw new BaseError("`to` is required. Could not infer from `authorizationList`.");
        });
      return void 0;
    })();
    if ((account == null ? void 0 : account.type) === "json-rpc" || account === null) {
      let chainId;
      if (chain2 !== null) {
        chainId = await getAction(client, getChainId, "getChainId")({});
        if (assertChainId)
          assertCurrentChain({
            currentChainId: chainId,
            chain: chain2
          });
      }
      const chainFormat = (_d = (_c = (_b = client.chain) == null ? void 0 : _b.formatters) == null ? void 0 : _c.transactionRequest) == null ? void 0 : _d.format;
      const format3 = chainFormat || formatTransactionRequest;
      const request = format3({
        // Pick out extra data that might exist on the chain's transaction request type.
        ...extract(rest, { format: chainFormat }),
        accessList,
        account,
        authorizationList,
        blobs,
        chainId,
        data: dataSuffix ? concat([data ?? "0x", dataSuffix]) : data,
        gas,
        gasPrice,
        maxFeePerBlobGas,
        maxFeePerGas,
        maxPriorityFeePerGas,
        nonce,
        to,
        type,
        value
      }, "sendTransaction");
      const isWalletNamespaceSupported = supportsWalletNamespace.get(client.uid);
      const method = isWalletNamespaceSupported ? "wallet_sendTransaction" : "eth_sendTransaction";
      try {
        return await client.request({
          method,
          params: [request]
        }, { retryCount: 0 });
      } catch (e) {
        if (isWalletNamespaceSupported === false)
          throw e;
        const error = e;
        if (error.name === "InvalidInputRpcError" || error.name === "InvalidParamsRpcError" || error.name === "MethodNotFoundRpcError" || error.name === "MethodNotSupportedRpcError") {
          return await client.request({
            method: "wallet_sendTransaction",
            params: [request]
          }, { retryCount: 0 }).then((hash2) => {
            supportsWalletNamespace.set(client.uid, true);
            return hash2;
          }).catch((e2) => {
            const walletNamespaceError = e2;
            if (walletNamespaceError.name === "MethodNotFoundRpcError" || walletNamespaceError.name === "MethodNotSupportedRpcError") {
              supportsWalletNamespace.set(client.uid, false);
              throw error;
            }
            throw walletNamespaceError;
          });
        }
        throw error;
      }
    }
    if ((account == null ? void 0 : account.type) === "local") {
      const nonceManager2 = (() => {
        if (!account.nonceManager || typeof nonce !== "undefined")
          return account.nonceManager;
        const nonceManager3 = account.nonceManager;
        return {
          consume(parameters2) {
            nonceManagerParameters = {
              address: parameters2.address,
              chainId: parameters2.chainId
            };
            return nonceManager3.consume(parameters2);
          },
          get(parameters2) {
            return nonceManager3.get(parameters2);
          },
          increment(parameters2) {
            return nonceManager3.increment(parameters2);
          },
          reset(parameters2) {
            return nonceManager3.reset(parameters2);
          }
        };
      })();
      const request = await getAction(client, prepareTransactionRequest, "prepareTransactionRequest")({
        account,
        accessList,
        authorizationList,
        blobs,
        chain: chain2,
        data: dataSuffix ? concat([data ?? "0x", dataSuffix]) : data,
        gas,
        gasPrice,
        maxFeePerBlobGas,
        maxFeePerGas,
        maxPriorityFeePerGas,
        nonce,
        nonceManager: nonceManager2,
        parameters: [...defaultParameters, "sidecars"],
        type,
        value,
        ...rest,
        to
      });
      const serializer = (_e = chain2 == null ? void 0 : chain2.serializers) == null ? void 0 : _e.transaction;
      const signedTransaction = await account.signTransaction(request, {
        serializer
      });
      const transactionEnvelope = (_g = (_f = chain2 ?? client.chain) == null ? void 0 : _f.serializers) == null ? void 0 : _g.transactionEnvelope;
      const serializedTransaction = transactionEnvelope ? await transactionEnvelope({
        serializedTransaction: signedTransaction,
        transaction: request
      }) : signedTransaction;
      return await getAction(client, sendRawTransaction, "sendRawTransaction")({
        serializedTransaction
      });
    }
    if ((account == null ? void 0 : account.type) === "smart")
      throw new AccountTypeNotSupportedError({
        metaMessages: [
          "Consider using the `sendUserOperation` Action instead."
        ],
        docsPath: "/docs/actions/bundler/sendUserOperation",
        type: "smart"
      });
    throw new AccountTypeNotSupportedError({
      docsPath: "/docs/actions/wallet/sendTransaction",
      type: account == null ? void 0 : account.type
    });
  } catch (err) {
    if (err instanceof AccountTypeNotSupportedError)
      throw err;
    if (nonceManagerParameters)
      (_h = account == null ? void 0 : account.nonceManager) == null ? void 0 : _h.reset(nonceManagerParameters);
    throw getTransactionError(err, {
      ...parameters,
      account,
      chain: parameters.chain || void 0
    });
  }
}

// node_modules/viem/_esm/actions/wallet/writeContract.js
async function writeContract(client, parameters) {
  return writeContract.internal(client, sendTransaction, "sendTransaction", parameters);
}
(function(writeContract3) {
  async function internal(client, actionFn, name, parameters) {
    const { abi: abi2, account: account_ = client.account, address, args, functionName, ...request } = parameters;
    if (typeof account_ === "undefined")
      throw new AccountNotFoundError({
        docsPath: "/docs/contract/writeContract"
      });
    const account = account_ ? parseAccount(account_) : null;
    const data = encodeFunctionData({
      abi: abi2,
      args,
      functionName
    });
    try {
      return await getAction(client, actionFn, name)({
        data,
        to: address,
        account,
        ...request
      });
    } catch (error) {
      throw getContractError(error, {
        abi: abi2,
        address,
        args,
        docsPath: "/docs/contract/writeContract",
        functionName,
        sender: account == null ? void 0 : account.address
      });
    }
  }
  writeContract3.internal = internal;
})(writeContract || (writeContract = {}));

// node_modules/viem/_esm/actions/token/internal.js
function toAmount(amount, decimals) {
  return { amount, decimals, formatted: formatUnits(amount, decimals) };
}
function toBaseUnits(amount, decimals) {
  if (typeof amount === "bigint")
    return amount;
  const resolved = amount.decimals ?? decimals;
  return parseUnits(amount.formatted, requireTokenDecimals(resolved));
}
function requireTokenDecimals(decimals) {
  if (decimals === void 0)
    throw new Error("Token decimals are required. Pass `amount.decimals` or select a declared token.");
  return decimals;
}
function resolveAmountDecimals(amount, decimals) {
  if (typeof amount === "bigint")
    return decimals;
  return amount.decimals ?? decimals;
}
function resolveToken(client, parameters) {
  const { decimals, token } = parameters;
  const declared = findDeclaredToken(client, token);
  if (declared)
    return {
      address: declared.address,
      decimals: decimals ?? declared.decimals
    };
  if (isAddress(token, { strict: false }))
    return {
      address: token,
      decimals: decimals ?? inferDecimals(client, token)
    };
  throw new Error(`Token "${token}" is not a declared ERC-20 token on the client's \`tokens\` array (with an address for the client's chain), and is not a valid address.`);
}
function findDeclaredToken(client, token) {
  var _a;
  const tokens = client.tokens;
  const chainId = (_a = client.chain) == null ? void 0 : _a.id;
  if (!tokens || chainId === void 0)
    return void 0;
  const bySymbol = findTokenBySymbol(tokens, token);
  if (bySymbol)
    return resolveTokenForChain(bySymbol, chainId);
  if (isAddress(token, { strict: false }))
    for (const token_ of tokens) {
      const resolved = resolveTokenForChain(token_, chainId);
      if (resolved && isAddressEqual(resolved.address, token))
        return resolved;
    }
  return void 0;
}
function resolveTokenForChain(token, chainId) {
  const address = token.addresses[chainId];
  if (!address)
    return void 0;
  return {
    address,
    currency: token.currency,
    decimals: token.decimals,
    name: token.name,
    popular: token.popular,
    symbol: token.symbol
  };
}
function findTokenBySymbol(tokens, symbol) {
  var _a;
  const lowerSymbol = symbol.toLowerCase();
  for (const token of tokens) {
    if (((_a = token.symbol) == null ? void 0 : _a.toLowerCase()) === lowerSymbol)
      return token;
  }
  return void 0;
}
function inferDecimals(client, address) {
  var _a;
  const tokens = client.tokens;
  const chainId = (_a = client.chain) == null ? void 0 : _a.id;
  if (tokens && chainId !== void 0)
    for (const token of tokens) {
      const resolved = resolveTokenForChain(token, chainId);
      if (resolved && isAddressEqual(resolved.address, address))
        return resolved.decimals;
    }
  return void 0;
}
async function resolveTokenWithDecimals(client, parameters) {
  const { address, decimals } = resolveToken(client, parameters);
  if (decimals !== void 0)
    return { address, decimals };
  return {
    address,
    decimals: await readContract(client, {
      abi: erc20Abi,
      address,
      functionName: "decimals"
    })
  };
}
function pickWriteParameters(parameters) {
  const { account, chain: chain2, gas, maxFeePerGas, maxPriorityFeePerGas, nonce } = parameters;
  return { account, chain: chain2, gas, maxFeePerGas, maxPriorityFeePerGas, nonce };
}
function defineCall(call3) {
  return {
    ...call3,
    data: encodeFunctionData(call3),
    to: call3.address
  };
}

// node_modules/viem/_esm/actions/token/approve.js
async function approve(client, parameters) {
  return approve.inner(writeContract, client, parameters);
}
(function(approve2) {
  async function inner(action, client, parameters) {
    return await action(client, {
      ...parameters,
      ...approve2.call(client, parameters)
    });
  }
  approve2.inner = inner;
  function call3(client, parameters) {
    return defineCall(getCall(client, parameters));
  }
  approve2.call = call3;
  async function estimateGas3(client, parameters) {
    return estimateContractGas(client, {
      ...pickWriteParameters(parameters),
      ...approve2.call(client, parameters)
    });
  }
  approve2.estimateGas = estimateGas3;
  async function simulate(client, parameters) {
    return simulateContract(client, {
      ...pickWriteParameters(parameters),
      ...approve2.call(client, parameters)
    });
  }
  approve2.simulate = simulate;
  function extractEvent(logs) {
    const [log] = parseEventLogs({
      abi: erc20Abi,
      logs,
      eventName: "Approval",
      strict: true
    });
    if (!log)
      throw new Error("`Approval` event not found.");
    return log;
  }
  approve2.extractEvent = extractEvent;
})(approve || (approve = {}));
function getCall(client, parameters) {
  const { amount, spender, token } = parameters;
  const { address, decimals } = resolveToken(client, { token });
  return {
    abi: erc20Abi,
    address,
    args: [spender, toBaseUnits(amount, decimals)],
    functionName: "approve"
  };
}

// node_modules/viem/_esm/actions/wallet/sendRawTransactionSync.js
async function sendRawTransactionSync(client, { serializedTransaction, throwOnReceiptRevert, timeout }) {
  var _a, _b, _c;
  const receipt = await client.request({
    method: "eth_sendRawTransactionSync",
    params: timeout ? [serializedTransaction, timeout] : [serializedTransaction]
  }, { retryCount: 0 });
  const format3 = ((_c = (_b = (_a = client.chain) == null ? void 0 : _a.formatters) == null ? void 0 : _b.transactionReceipt) == null ? void 0 : _c.format) || formatTransactionReceipt;
  const formatted = format3(receipt);
  if (formatted.status === "reverted" && throwOnReceiptRevert)
    throw new TransactionReceiptRevertedError({ receipt: formatted });
  return formatted;
}

// node_modules/viem/_esm/actions/wallet/sendTransactionSync.js
var supportsWalletNamespace2 = new LruMap(128);
async function sendTransactionSync(client, parameters) {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  const { account: account_ = client.account, assertChainId = true, chain: chain2 = client.chain, accessList, authorizationList, blobs, data, dataSuffix = typeof client.dataSuffix === "string" ? client.dataSuffix : (_a = client.dataSuffix) == null ? void 0 : _a.value, gas, gasPrice, maxFeePerBlobGas, maxFeePerGas, maxPriorityFeePerGas, nonce, pollingInterval, throwOnReceiptRevert, type, value, ...rest } = parameters;
  const timeout = parameters.timeout ?? Math.max(((chain2 == null ? void 0 : chain2.blockTime) ?? 0) * 3, 5e3);
  if (typeof account_ === "undefined")
    throw new AccountNotFoundError({
      docsPath: "/docs/actions/wallet/sendTransactionSync"
    });
  const account = account_ ? parseAccount(account_) : null;
  let nonceManagerParameters;
  try {
    assertRequest(parameters);
    const to = await (async () => {
      if (parameters.to)
        return parameters.to;
      if (parameters.to === null)
        return void 0;
      if (authorizationList && authorizationList.length > 0)
        return await recoverAuthorizationAddress({
          authorization: authorizationList[0]
        }).catch(() => {
          throw new BaseError("`to` is required. Could not infer from `authorizationList`.");
        });
      return void 0;
    })();
    if ((account == null ? void 0 : account.type) === "json-rpc" || account === null) {
      let chainId;
      if (chain2 !== null) {
        chainId = await getAction(client, getChainId, "getChainId")({});
        if (assertChainId)
          assertCurrentChain({
            currentChainId: chainId,
            chain: chain2
          });
      }
      const chainFormat = (_d = (_c = (_b = client.chain) == null ? void 0 : _b.formatters) == null ? void 0 : _c.transactionRequest) == null ? void 0 : _d.format;
      const format3 = chainFormat || formatTransactionRequest;
      const request = format3({
        // Pick out extra data that might exist on the chain's transaction request type.
        ...extract(rest, { format: chainFormat }),
        accessList,
        account,
        authorizationList,
        blobs,
        chainId,
        data: dataSuffix ? concat([data ?? "0x", dataSuffix]) : data,
        gas,
        gasPrice,
        maxFeePerBlobGas,
        maxFeePerGas,
        maxPriorityFeePerGas,
        nonce,
        to,
        type,
        value
      }, "sendTransaction");
      const isWalletNamespaceSupported = supportsWalletNamespace2.get(client.uid);
      const method = isWalletNamespaceSupported ? "wallet_sendTransaction" : "eth_sendTransaction";
      const hash2 = await (async () => {
        try {
          return await client.request({
            method,
            params: [request]
          }, { retryCount: 0 });
        } catch (e) {
          if (isWalletNamespaceSupported === false)
            throw e;
          const error = e;
          if (error.name === "InvalidInputRpcError" || error.name === "InvalidParamsRpcError" || error.name === "MethodNotFoundRpcError" || error.name === "MethodNotSupportedRpcError") {
            return await client.request({
              method: "wallet_sendTransaction",
              params: [request]
            }, { retryCount: 0 }).then((hash3) => {
              supportsWalletNamespace2.set(client.uid, true);
              return hash3;
            }).catch((e2) => {
              const walletNamespaceError = e2;
              if (walletNamespaceError.name === "MethodNotFoundRpcError" || walletNamespaceError.name === "MethodNotSupportedRpcError") {
                supportsWalletNamespace2.set(client.uid, false);
                throw error;
              }
              throw walletNamespaceError;
            });
          }
          throw error;
        }
      })();
      const receipt = await getAction(client, waitForTransactionReceipt, "waitForTransactionReceipt")({
        checkReplacement: false,
        hash: hash2,
        pollingInterval,
        timeout
      });
      if (throwOnReceiptRevert && receipt.status === "reverted")
        throw new TransactionReceiptRevertedError({ receipt });
      return receipt;
    }
    if ((account == null ? void 0 : account.type) === "local") {
      const nonceManager2 = (() => {
        if (!account.nonceManager || typeof nonce !== "undefined")
          return account.nonceManager;
        const nonceManager3 = account.nonceManager;
        return {
          consume(parameters2) {
            nonceManagerParameters = {
              address: parameters2.address,
              chainId: parameters2.chainId
            };
            return nonceManager3.consume(parameters2);
          },
          get(parameters2) {
            return nonceManager3.get(parameters2);
          },
          increment(parameters2) {
            return nonceManager3.increment(parameters2);
          },
          reset(parameters2) {
            return nonceManager3.reset(parameters2);
          }
        };
      })();
      const request = await getAction(client, prepareTransactionRequest, "prepareTransactionRequest")({
        account,
        accessList,
        authorizationList,
        blobs,
        chain: chain2,
        data: dataSuffix ? concat([data ?? "0x", dataSuffix]) : data,
        gas,
        gasPrice,
        maxFeePerBlobGas,
        maxFeePerGas,
        maxPriorityFeePerGas,
        nonce,
        nonceManager: nonceManager2,
        parameters: [...defaultParameters, "sidecars"],
        type,
        value,
        ...rest,
        to
      });
      const serializer = (_e = chain2 == null ? void 0 : chain2.serializers) == null ? void 0 : _e.transaction;
      const signedTransaction = await account.signTransaction(request, {
        serializer
      });
      const transactionEnvelope = (_g = (_f = chain2 ?? client.chain) == null ? void 0 : _f.serializers) == null ? void 0 : _g.transactionEnvelope;
      const serializedTransaction = transactionEnvelope ? await transactionEnvelope({
        serializedTransaction: signedTransaction,
        transaction: request
      }) : signedTransaction;
      return await getAction(client, sendRawTransactionSync, "sendRawTransactionSync")({
        serializedTransaction,
        throwOnReceiptRevert,
        timeout: parameters.timeout
      });
    }
    if ((account == null ? void 0 : account.type) === "smart")
      throw new AccountTypeNotSupportedError({
        metaMessages: [
          "Consider using the `sendUserOperation` Action instead."
        ],
        docsPath: "/docs/actions/bundler/sendUserOperation",
        type: "smart"
      });
    throw new AccountTypeNotSupportedError({
      docsPath: "/docs/actions/wallet/sendTransactionSync",
      type: account == null ? void 0 : account.type
    });
  } catch (err) {
    if (err instanceof AccountTypeNotSupportedError)
      throw err;
    if (nonceManagerParameters && !(err instanceof TransactionReceiptRevertedError))
      (_h = account == null ? void 0 : account.nonceManager) == null ? void 0 : _h.reset(nonceManagerParameters);
    throw getTransactionError(err, {
      ...parameters,
      account,
      chain: parameters.chain || void 0
    });
  }
}

// node_modules/viem/_esm/actions/wallet/writeContractSync.js
async function writeContractSync(client, parameters) {
  return writeContract.internal(client, sendTransactionSync, "sendTransactionSync", parameters);
}

// node_modules/viem/_esm/actions/token/approveSync.js
async function approveSync(client, parameters) {
  const { amount, token, throwOnReceiptRevert = true } = parameters;
  const { decimals } = resolveToken(client, { token });
  const resolved = resolveAmountDecimals(amount, decimals);
  const receipt = await approve.inner(writeContractSync, client, {
    ...parameters,
    throwOnReceiptRevert
  });
  const { args } = approve.extractEvent(receipt.logs);
  return {
    ...args,
    ...resolved === void 0 ? {} : { decimals: resolved, formatted: formatUnits(args.value, resolved) },
    receipt
  };
}

// node_modules/viem/_esm/actions/token/getAllowance.js
async function getAllowance(client, parameters) {
  const { account, decimals, spender, token, ...rest } = parameters;
  const [amount, { decimals: resolved }] = await Promise.all([
    readContract(client, {
      ...rest,
      ...getAllowance.call(client, { account, spender, token })
    }),
    resolveTokenWithDecimals(client, {
      decimals,
      token
    })
  ]);
  return toAmount(amount, resolved);
}
(function(getAllowance2) {
  function call3(client, args) {
    return defineCall({
      address: resolveToken(client, args).address,
      abi: erc20Abi,
      functionName: "allowance",
      args: [args.account, args.spender]
    });
  }
  getAllowance2.call = call3;
})(getAllowance || (getAllowance = {}));

// node_modules/viem/_esm/actions/token/getBalance.js
async function getBalance2(client, parameters) {
  const { account: account_ = client.account, decimals, token, ...rest } = parameters;
  if (!account_)
    throw new AccountNotFoundError();
  const account = parseAccount(account_).address;
  const [amount, { decimals: resolved }] = await Promise.all([
    readContract(client, {
      ...rest,
      ...getBalance2.call(client, { account, token })
    }),
    resolveTokenWithDecimals(client, {
      decimals,
      token
    })
  ]);
  return toAmount(amount, resolved);
}
(function(getBalance4) {
  function call3(client, args) {
    const account_ = args.account ?? client.account;
    if (!account_)
      throw new AccountNotFoundError();
    const account = parseAccount(account_).address;
    return defineCall({
      address: resolveToken(client, args).address,
      abi: erc20Abi,
      functionName: "balanceOf",
      args: [account]
    });
  }
  getBalance4.call = call3;
})(getBalance2 || (getBalance2 = {}));

// node_modules/viem/_esm/actions/token/getMetadata.js
async function getMetadata(client, parameters) {
  const { token, ...rest } = parameters;
  const { address } = resolveToken(client, { token });
  const declared = findDeclaredToken(client, token);
  const [decimals_, name, symbol] = await Promise.all([
    (declared == null ? void 0 : declared.decimals) ?? readContract(client, {
      ...rest,
      abi: erc20Abi,
      address,
      functionName: "decimals"
    }),
    (declared == null ? void 0 : declared.name) ?? readContract(client, {
      ...rest,
      abi: erc20Abi,
      address,
      functionName: "name"
    }),
    (declared == null ? void 0 : declared.symbol) ?? readContract(client, {
      ...rest,
      abi: erc20Abi,
      address,
      functionName: "symbol"
    })
  ]);
  return {
    decimals: decimals_,
    name,
    symbol
  };
}

// node_modules/viem/_esm/actions/token/getTotalSupply.js
async function getTotalSupply(client, parameters) {
  const { decimals, token, ...rest } = parameters;
  const [amount, { decimals: resolved }] = await Promise.all([
    readContract(client, {
      ...rest,
      ...getTotalSupply.call(client, { token })
    }),
    resolveTokenWithDecimals(client, {
      decimals,
      token
    })
  ]);
  return toAmount(amount, resolved);
}
(function(getTotalSupply2) {
  function call3(client, args) {
    return defineCall({
      address: resolveToken(client, args).address,
      abi: erc20Abi,
      args: [],
      functionName: "totalSupply"
    });
  }
  getTotalSupply2.call = call3;
})(getTotalSupply || (getTotalSupply = {}));

// node_modules/viem/_esm/actions/token/transfer.js
async function transfer(client, parameters) {
  return transfer.inner(writeContract, client, parameters);
}
(function(transfer2) {
  async function inner(action, client, parameters) {
    return await action(client, {
      ...parameters,
      ...transfer2.call(client, parameters)
    });
  }
  transfer2.inner = inner;
  function call3(client, parameters) {
    return defineCall(getCall2(client, parameters));
  }
  transfer2.call = call3;
  async function estimateGas3(client, parameters) {
    return estimateContractGas(client, {
      ...pickWriteParameters(parameters),
      ...transfer2.call(client, parameters)
    });
  }
  transfer2.estimateGas = estimateGas3;
  async function simulate(client, parameters) {
    return simulateContract(client, {
      ...pickWriteParameters(parameters),
      ...transfer2.call(client, parameters)
    });
  }
  transfer2.simulate = simulate;
  function extractEvent(logs) {
    const [log] = parseEventLogs({
      abi: erc20Abi,
      logs,
      eventName: "Transfer",
      strict: true
    });
    if (!log)
      throw new Error("`Transfer` event not found.");
    return log;
  }
  transfer2.extractEvent = extractEvent;
})(transfer || (transfer = {}));
function getCall2(client, parameters) {
  const { amount, from: from16, to, token } = parameters;
  const { address, decimals } = resolveToken(client, { token });
  const value = toBaseUnits(amount, decimals);
  if (from16)
    return {
      abi: erc20Abi,
      address,
      args: [from16, to, value],
      functionName: "transferFrom"
    };
  return {
    abi: erc20Abi,
    address,
    args: [to, value],
    functionName: "transfer"
  };
}

// node_modules/viem/_esm/actions/token/transferSync.js
async function transferSync(client, parameters) {
  const { amount, token, throwOnReceiptRevert = true } = parameters;
  const { decimals } = resolveToken(client, { token });
  const resolved = resolveAmountDecimals(amount, decimals);
  const receipt = await transfer.inner(writeContractSync, client, {
    ...parameters,
    throwOnReceiptRevert
  });
  const { args } = transfer.extractEvent(receipt.logs);
  return {
    ...args,
    ...resolved === void 0 ? {} : { decimals: resolved, formatted: formatUnits(args.value, resolved) },
    receipt
  };
}

// node_modules/viem/_esm/actions/wallet/addChain.js
async function addChain(client, { chain: chain2 }) {
  const { id, name, nativeCurrency, rpcUrls, blockExplorers } = chain2;
  await client.request({
    method: "wallet_addEthereumChain",
    params: [
      {
        chainId: numberToHex(id),
        chainName: name,
        nativeCurrency,
        rpcUrls: rpcUrls.default.http,
        blockExplorerUrls: blockExplorers ? Object.values(blockExplorers).map(({ url }) => url) : void 0
      }
    ]
  }, { dedupe: true, retryCount: 0 });
}

// node_modules/viem/_esm/actions/wallet/deployContract.js
function deployContract(walletClient, parameters) {
  const { abi: abi2, args, bytecode, ...request } = parameters;
  const calldata = encodeDeployData({ abi: abi2, args, bytecode });
  return sendTransaction(walletClient, {
    ...request,
    ...request.authorizationList ? { to: null } : {},
    data: calldata
  });
}

// node_modules/viem/_esm/actions/wallet/getAddresses.js
async function getAddresses(client) {
  var _a;
  if (((_a = client.account) == null ? void 0 : _a.type) === "local")
    return [client.account.address];
  const addresses = await client.request({ method: "eth_accounts" }, { dedupe: true });
  return addresses.map((address) => checksumAddress(address));
}

// node_modules/viem/_esm/actions/wallet/sendCalls.js
var fallbackMagicIdentifier = "0x5792579257925792579257925792579257925792579257925792579257925792";
var fallbackTransactionErrorMagicIdentifier = numberToHex(0, {
  size: 32
});
async function sendCalls(client, parameters) {
  var _a;
  const { account: account_ = client.account, chain: chain2 = client.chain, experimental_fallback, experimental_fallbackDelay = 32, forceAtomic = false, id, version: version3 = "2.0.0" } = parameters;
  const account = account_ ? parseAccount(account_) : null;
  let capabilities = parameters.capabilities;
  if (client.dataSuffix && !((_a = parameters.capabilities) == null ? void 0 : _a.dataSuffix)) {
    if (typeof client.dataSuffix === "string")
      capabilities = {
        ...parameters.capabilities,
        dataSuffix: { value: client.dataSuffix, optional: true }
      };
    else
      capabilities = {
        ...parameters.capabilities,
        dataSuffix: {
          value: client.dataSuffix.value,
          ...client.dataSuffix.required ? {} : { optional: true }
        }
      };
  }
  const calls = parameters.calls.map((call_) => {
    const call3 = call_;
    const data = call3.abi ? encodeFunctionData({
      abi: call3.abi,
      functionName: call3.functionName,
      args: call3.args
    }) : call3.data;
    return {
      data: call3.dataSuffix && data ? concat([data, call3.dataSuffix]) : data,
      to: call3.to,
      value: call3.value ? numberToHex(call3.value) : void 0
    };
  });
  try {
    const response = await client.request({
      method: "wallet_sendCalls",
      params: [
        {
          atomicRequired: forceAtomic,
          calls,
          capabilities,
          chainId: numberToHex(chain2.id),
          from: account == null ? void 0 : account.address,
          id,
          version: version3
        }
      ]
    }, { retryCount: 0 });
    if (typeof response === "string")
      return { id: response };
    return response;
  } catch (err) {
    const error = err;
    if (experimental_fallback && (error.name === "MethodNotFoundRpcError" || error.name === "MethodNotSupportedRpcError" || error.name === "UnknownRpcError" || error.details.toLowerCase() === "this request method is not supported" || error.details.toLowerCase().includes("does not exist / is not available") || error.details.toLowerCase().includes("missing or invalid. request()") || error.details.toLowerCase().includes("did not match any variant of untagged enum") || error.details.toLowerCase().includes("account upgraded to unsupported contract") || error.details.toLowerCase().includes("eip-7702 not supported") || error.details.toLowerCase().includes("unsupported wc_ method") || // magic.link
    error.details.toLowerCase().includes("feature toggled misconfigured") || // Trust Wallet
    error.details.toLowerCase().includes("jsonrpcengine: response has no error or result for request"))) {
      if (capabilities) {
        const hasNonOptionalCapability = Object.values(capabilities).some((capability) => !capability.optional);
        if (hasNonOptionalCapability) {
          const message = "non-optional `capabilities` are not supported on fallback to `eth_sendTransaction`.";
          throw new UnsupportedNonOptionalCapabilityError(new BaseError(message, {
            details: message
          }));
        }
      }
      if (forceAtomic && calls.length > 1) {
        const message = "`forceAtomic` is not supported on fallback to `eth_sendTransaction`.";
        throw new AtomicityNotSupportedError(new BaseError(message, {
          details: message
        }));
      }
      const results = [];
      for (const call3 of calls) {
        try {
          const value = await sendTransaction(client, {
            account,
            chain: chain2,
            data: call3.data,
            to: call3.to,
            value: call3.value ? hexToBigInt(call3.value) : void 0
          });
          results.push({ status: "fulfilled", value });
        } catch (reason) {
          results.push({ reason, status: "rejected" });
        }
        if (experimental_fallbackDelay > 0)
          await new Promise((resolve) => setTimeout(resolve, experimental_fallbackDelay));
      }
      if (results.every((r) => r.status === "rejected"))
        throw results[0].reason;
      const hashes = results.map((result) => {
        if (result.status === "fulfilled")
          return result.value;
        return fallbackTransactionErrorMagicIdentifier;
      });
      return {
        id: concat([
          ...hashes,
          numberToHex(chain2.id, { size: 32 }),
          fallbackMagicIdentifier
        ])
      };
    }
    throw getTransactionError(err, {
      ...parameters,
      account,
      chain: parameters.chain
    });
  }
}

// node_modules/viem/_esm/actions/wallet/getCallsStatus.js
async function getCallsStatus(client, parameters) {
  async function getStatus(id) {
    const isTransactions = id.endsWith(fallbackMagicIdentifier.slice(2));
    if (isTransactions) {
      const chainId2 = trim(sliceHex(id, -64, -32));
      const hashes = sliceHex(id, 0, -64).slice(2).match(/.{1,64}/g);
      const receipts2 = await Promise.all(hashes.map((hash2) => fallbackTransactionErrorMagicIdentifier.slice(2) !== hash2 ? client.request({
        method: "eth_getTransactionReceipt",
        params: [`0x${hash2}`]
      }, { dedupe: true }) : void 0));
      const status2 = (() => {
        if (receipts2.some((r) => r === null))
          return 100;
        if (receipts2.every((r) => (r == null ? void 0 : r.status) === "0x1"))
          return 200;
        if (receipts2.every((r) => (r == null ? void 0 : r.status) === "0x0"))
          return 500;
        return 600;
      })();
      return {
        atomic: false,
        chainId: hexToNumber(chainId2),
        receipts: receipts2.filter(Boolean),
        status: status2,
        version: "2.0.0"
      };
    }
    return client.request({
      method: "wallet_getCallsStatus",
      params: [id]
    });
  }
  const { atomic = false, chainId, receipts, version: version3 = "2.0.0", ...response } = await getStatus(parameters.id);
  const [status, statusCode] = (() => {
    const statusCode2 = response.status;
    if (statusCode2 >= 100 && statusCode2 < 200)
      return ["pending", statusCode2];
    if (statusCode2 >= 200 && statusCode2 < 300)
      return ["success", statusCode2];
    if (statusCode2 >= 300 && statusCode2 < 700)
      return ["failure", statusCode2];
    if (statusCode2 === "CONFIRMED")
      return ["success", 200];
    if (statusCode2 === "PENDING")
      return ["pending", 100];
    return [void 0, statusCode2];
  })();
  return {
    ...response,
    atomic,
    // @ts-expect-error: for backwards compatibility
    chainId: chainId ? hexToNumber(chainId) : void 0,
    receipts: (receipts == null ? void 0 : receipts.map((receipt) => ({
      ...receipt,
      blockNumber: hexToBigInt(receipt.blockNumber),
      gasUsed: hexToBigInt(receipt.gasUsed),
      status: receiptStatuses[receipt.status]
    }))) ?? [],
    statusCode,
    status,
    version: version3
  };
}

// node_modules/viem/_esm/actions/wallet/getCapabilities.js
async function getCapabilities(client, parameters = {}) {
  const { account = client.account, chainId } = parameters;
  const account_ = account ? parseAccount(account) : void 0;
  const params = chainId ? [account_ == null ? void 0 : account_.address, [numberToHex(chainId)]] : [account_ == null ? void 0 : account_.address];
  const capabilities_raw = await client.request({
    method: "wallet_getCapabilities",
    params
  });
  const capabilities = {};
  for (const [chainId2, capabilities_] of Object.entries(capabilities_raw)) {
    capabilities[Number(chainId2)] = {};
    for (let [key, value] of Object.entries(capabilities_)) {
      if (key === "addSubAccount")
        key = "unstable_addSubAccount";
      capabilities[Number(chainId2)][key] = value;
    }
  }
  return typeof chainId === "number" ? capabilities[chainId] : capabilities;
}

// node_modules/viem/_esm/actions/wallet/getPermissions.js
async function getPermissions(client) {
  const permissions = await client.request({ method: "wallet_getPermissions" }, { dedupe: true });
  return permissions;
}

// node_modules/viem/_esm/actions/wallet/prepareAuthorization.js
async function prepareAuthorization(client, parameters) {
  var _a;
  const { account: account_ = client.account, chainId, nonce } = parameters;
  if (!account_)
    throw new AccountNotFoundError({
      docsPath: "/docs/eip7702/prepareAuthorization"
    });
  const account = parseAccount(account_);
  const executor = (() => {
    if (!parameters.executor)
      return void 0;
    if (parameters.executor === "self")
      return parameters.executor;
    return parseAccount(parameters.executor);
  })();
  const authorization = {
    address: parameters.contractAddress ?? parameters.address,
    chainId,
    nonce
  };
  if (typeof authorization.chainId === "undefined")
    authorization.chainId = ((_a = client.chain) == null ? void 0 : _a.id) ?? await getAction(client, getChainId, "getChainId")({});
  if (typeof authorization.nonce === "undefined") {
    authorization.nonce = await getAction(client, getTransactionCount, "getTransactionCount")({
      address: account.address,
      blockTag: "pending"
    });
    if (executor === "self" || (executor == null ? void 0 : executor.address) && isAddressEqual(executor.address, account.address))
      authorization.nonce += 1;
  }
  return authorization;
}

// node_modules/viem/_esm/actions/wallet/requestAddresses.js
async function requestAddresses(client) {
  const addresses = await client.request({ method: "eth_requestAccounts" }, { dedupe: true, retryCount: 0 });
  return addresses.map((address) => getAddress(address));
}

// node_modules/viem/_esm/actions/wallet/requestPermissions.js
async function requestPermissions(client, permissions) {
  return client.request({
    method: "wallet_requestPermissions",
    params: [permissions]
  }, { retryCount: 0 });
}

// node_modules/viem/_esm/errors/calls.js
var BundleFailedError = class extends BaseError {
  constructor(result) {
    super(`Call bundle failed with status: ${result.statusCode}`, {
      name: "BundleFailedError"
    });
    Object.defineProperty(this, "result", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    this.result = result;
  }
};

// node_modules/viem/_esm/actions/wallet/waitForCallsStatus.js
var functionIds = /* @__PURE__ */ new WeakMap();
var functionCount = 0;
function getFunctionId(fn) {
  let fnId = functionIds.get(fn);
  if (fnId === void 0) {
    fnId = ++functionCount;
    functionIds.set(fn, fnId);
  }
  return fnId;
}
async function waitForCallsStatus(client, parameters) {
  const {
    id,
    pollingInterval = client.pollingInterval,
    status = ({ statusCode }) => statusCode === 200 || statusCode >= 300,
    retryCount = 4,
    retryDelay = ({ count }) => ~~(1 << count) * 200,
    // exponential backoff
    timeout = 6e4,
    throwOnFailure = false
  } = parameters;
  const observerId = stringify([
    "waitForCallsStatus",
    client.uid,
    id,
    // Concurrent calls with different behavior-defining options must not
    // share an observer: the first call's polling closure decides the
    // status check, failure handling and retry behavior for everyone.
    // `timeout` is enforced per caller below, so it is not included.
    {
      pollingInterval,
      retryCount,
      // Caller-provided functions are keyed by identity, not source text:
      // two predicates built by the same factory have identical source
      // but capture different values, so they must not share an observer.
      // Keying on `parameters.*` (not the destructured defaults) keeps
      // calls that use the defaults on one shared observer, since the
      // default functions are recreated on every call.
      retryDelay: typeof parameters.retryDelay === "function" ? ["function", getFunctionId(parameters.retryDelay)] : parameters.retryDelay,
      status: parameters.status ? getFunctionId(parameters.status) : void 0,
      throwOnFailure
    }
  ]);
  const { promise, resolve, reject } = withResolvers();
  let timer;
  const unobserve = observe(observerId, { resolve, reject }, (emit) => {
    const unpoll = poll(async () => {
      const done = (fn) => {
        clearTimeout(timer);
        unpoll();
        fn();
        unobserve();
      };
      try {
        const result = await withRetry(async () => {
          const result2 = await getAction(client, getCallsStatus, "getCallsStatus")({ id });
          if (throwOnFailure && result2.status === "failure")
            throw new BundleFailedError(result2);
          return result2;
        }, {
          retryCount,
          delay: retryDelay
        });
        if (!status(result))
          return;
        done(() => emit.resolve(result));
      } catch (error) {
        done(() => emit.reject(error));
      }
    }, {
      interval: pollingInterval,
      emitOnBegin: true
    });
    return unpoll;
  });
  timer = timeout ? setTimeout(() => {
    unobserve();
    clearTimeout(timer);
    reject(new WaitForCallsStatusTimeoutError({ id }));
  }, timeout) : void 0;
  return await promise.finally(() => unobserve());
}
var WaitForCallsStatusTimeoutError = class extends BaseError {
  constructor({ id }) {
    super(`Timed out while waiting for call bundle with id "${id}" to be confirmed.`, { name: "WaitForCallsStatusTimeoutError" });
  }
};

// node_modules/viem/_esm/actions/wallet/sendCallsSync.js
async function sendCallsSync(client, parameters) {
  const { chain: chain2 = client.chain } = parameters;
  const timeout = parameters.timeout ?? Math.max(((chain2 == null ? void 0 : chain2.blockTime) ?? 0) * 3, 5e3);
  const result = await getAction(client, sendCalls, "sendCalls")(parameters);
  const status = await getAction(client, waitForCallsStatus, "waitForCallsStatus")({
    ...parameters,
    id: result.id,
    timeout
  });
  return status;
}

// node_modules/viem/_esm/actions/wallet/showCallsStatus.js
async function showCallsStatus(client, parameters) {
  const { id } = parameters;
  await client.request({
    method: "wallet_showCallsStatus",
    params: [id]
  });
  return;
}

// node_modules/viem/_esm/actions/wallet/signAuthorization.js
async function signAuthorization(client, parameters) {
  const { account: account_ = client.account } = parameters;
  if (!account_)
    throw new AccountNotFoundError({
      docsPath: "/docs/eip7702/signAuthorization"
    });
  const account = parseAccount(account_);
  if (!account.signAuthorization)
    throw new AccountTypeNotSupportedError({
      docsPath: "/docs/eip7702/signAuthorization",
      metaMessages: [
        "The `signAuthorization` Action does not support JSON-RPC Accounts."
      ],
      type: account.type
    });
  const authorization = await prepareAuthorization(client, parameters);
  return account.signAuthorization(authorization);
}

// node_modules/viem/_esm/actions/wallet/signMessage.js
async function signMessage(client, { account: account_ = client.account, message }) {
  if (!account_)
    throw new AccountNotFoundError({
      docsPath: "/docs/actions/wallet/signMessage"
    });
  const account = parseAccount(account_);
  if (account.signMessage)
    return account.signMessage({ message });
  const message_ = (() => {
    if (typeof message === "string")
      return stringToHex(message);
    if (message.raw instanceof Uint8Array)
      return toHex(message.raw);
    return message.raw;
  })();
  return client.request({
    method: "personal_sign",
    params: [message_, account.address]
  }, { retryCount: 0 });
}

// node_modules/viem/_esm/actions/wallet/signTransaction.js
async function signTransaction(client, parameters) {
  var _a, _b, _c, _d;
  const { account: account_ = client.account, chain: chain2 = client.chain, ...transaction } = parameters;
  if (!account_)
    throw new AccountNotFoundError({
      docsPath: "/docs/actions/wallet/signTransaction"
    });
  const account = parseAccount(account_);
  assertRequest({
    account,
    ...parameters
  });
  const chainId = await getAction(client, getChainId, "getChainId")({});
  if (chain2 !== null)
    assertCurrentChain({
      currentChainId: chainId,
      chain: chain2
    });
  const formatters = (chain2 == null ? void 0 : chain2.formatters) || ((_a = client.chain) == null ? void 0 : _a.formatters);
  const format3 = ((_b = formatters == null ? void 0 : formatters.transactionRequest) == null ? void 0 : _b.format) || formatTransactionRequest;
  if (account.signTransaction)
    return account.signTransaction({
      ...transaction,
      account,
      chainId
    }, { serializer: (_d = (_c = client.chain) == null ? void 0 : _c.serializers) == null ? void 0 : _d.transaction });
  return await client.request({
    method: "eth_signTransaction",
    params: [
      {
        ...format3({
          ...transaction,
          account
        }, "signTransaction"),
        chainId: numberToHex(chainId),
        from: account.address
      }
    ]
  }, { retryCount: 0 });
}

// node_modules/viem/_esm/actions/wallet/signTypedData.js
async function signTypedData(client, parameters) {
  const { account: account_ = client.account, domain, message, primaryType } = parameters;
  if (!account_)
    throw new AccountNotFoundError({
      docsPath: "/docs/actions/wallet/signTypedData"
    });
  const account = parseAccount(account_);
  const types = {
    EIP712Domain: getTypesForEIP712Domain({ domain }),
    ...parameters.types
  };
  validateTypedData({ domain, message, primaryType, types });
  if (account.signTypedData)
    return account.signTypedData({ domain, message, primaryType, types });
  const typedData = serializeTypedData({ domain, message, primaryType, types });
  return client.request({
    method: "eth_signTypedData_v4",
    params: [account.address, typedData]
  }, { retryCount: 0 });
}

// node_modules/viem/_esm/actions/wallet/switchChain.js
async function switchChain(client, { id }) {
  await client.request({
    method: "wallet_switchEthereumChain",
    params: [
      {
        chainId: numberToHex(id)
      }
    ]
  }, { retryCount: 0 });
}

// node_modules/viem/_esm/actions/wallet/watchAsset.js
async function watchAsset(client, params) {
  const added = await client.request({
    method: "wallet_watchAsset",
    params
  }, { retryCount: 0 });
  return added;
}

// node_modules/@wagmi/core/dist/esm/utils/getAction.js
function getAction2(client, actionFn, name) {
  const action_implicit = client[actionFn.name];
  if (typeof action_implicit === "function")
    return action_implicit;
  const action_explicit = client[name];
  if (typeof action_explicit === "function")
    return action_explicit;
  return (params) => actionFn(client, params);
}

// node_modules/@wagmi/core/dist/esm/actions/call.js
async function call2(config, parameters) {
  const { chainId, ...rest } = parameters;
  const client = config.getClient({ chainId });
  const action = getAction2(client, call, "call");
  return action(rest);
}

// node_modules/@wagmi/core/dist/esm/version.js
var version = "3.6.7";

// node_modules/@wagmi/core/dist/esm/utils/getVersion.js
var getVersion = () => `@wagmi/core@${version}`;

// node_modules/@wagmi/core/dist/esm/errors/base.js
var __classPrivateFieldGet = function(receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _BaseError_instances;
var _BaseError_walk;
var BaseError3 = class _BaseError extends Error {
  get docsBaseUrl() {
    return "https://wagmi.sh/core";
  }
  get version() {
    return getVersion();
  }
  constructor(shortMessage, options = {}) {
    var _a;
    super();
    _BaseError_instances.add(this);
    Object.defineProperty(this, "details", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "docsPath", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "metaMessages", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "shortMessage", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "WagmiCoreError"
    });
    const details = options.cause instanceof _BaseError ? options.cause.details : ((_a = options.cause) == null ? void 0 : _a.message) ? options.cause.message : options.details;
    const docsPath3 = options.cause instanceof _BaseError ? options.cause.docsPath || options.docsPath : options.docsPath;
    this.message = [
      shortMessage || "An error occurred.",
      "",
      ...options.metaMessages ? [...options.metaMessages, ""] : [],
      ...docsPath3 ? [
        `Docs: ${this.docsBaseUrl}${docsPath3}.html${options.docsSlug ? `#${options.docsSlug}` : ""}`
      ] : [],
      ...details ? [`Details: ${details}`] : [],
      `Version: ${this.version}`
    ].join("\n");
    if (options.cause)
      this.cause = options.cause;
    this.details = details;
    this.docsPath = docsPath3;
    this.metaMessages = options.metaMessages;
    this.shortMessage = shortMessage;
  }
  walk(fn) {
    return __classPrivateFieldGet(this, _BaseError_instances, "m", _BaseError_walk).call(this, this, fn);
  }
};
_BaseError_instances = /* @__PURE__ */ new WeakSet(), _BaseError_walk = function _BaseError_walk2(err, fn) {
  if (fn == null ? void 0 : fn(err))
    return err;
  if (err.cause)
    return __classPrivateFieldGet(this, _BaseError_instances, "m", _BaseError_walk2).call(this, err.cause, fn);
  return err;
};

// node_modules/@wagmi/core/dist/esm/errors/config.js
var ChainNotConfiguredError = class extends BaseError3 {
  constructor() {
    super("Chain not configured.");
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "ChainNotConfiguredError"
    });
  }
};
var ConnectorAlreadyConnectedError = class extends BaseError3 {
  constructor() {
    super("Connector already connected.");
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "ConnectorAlreadyConnectedError"
    });
  }
};
var ConnectorNotConnectedError = class extends BaseError3 {
  constructor() {
    super("Connector not connected.");
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "ConnectorNotConnectedError"
    });
  }
};
var ConnectorNotFoundError = class extends BaseError3 {
  constructor() {
    super("Connector not found.");
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "ConnectorNotFoundError"
    });
  }
};
var ConnectorAccountNotFoundError = class extends BaseError3 {
  constructor({ address, connector }) {
    super(`Account "${address}" not found for connector "${connector.name}".`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "ConnectorAccountNotFoundError"
    });
  }
};
var ConnectorChainMismatchError = class extends BaseError3 {
  constructor({ connectionChainId, connectorChainId }) {
    super(`The current chain of the connector (id: ${connectorChainId}) does not match the connection's chain (id: ${connectionChainId}).`, {
      metaMessages: [
        `Current Chain ID:  ${connectorChainId}`,
        `Expected Chain ID: ${connectionChainId}`
      ]
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "ConnectorChainMismatchError"
    });
  }
};
var ConnectorUnavailableReconnectingError = class extends BaseError3 {
  constructor({ connector }) {
    super(`Connector "${connector.name}" unavailable while reconnecting.`, {
      details: [
        "During the reconnection step, the only connector methods guaranteed to be available are: `id`, `name`, `type`, `uid`.",
        "All other methods are not guaranteed to be available until reconnection completes and connectors are fully restored.",
        "This error commonly occurs for connectors that asynchronously inject after reconnection has already started."
      ].join(" ")
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "ConnectorUnavailableReconnectingError"
    });
  }
};

// node_modules/@wagmi/core/dist/esm/actions/connect.js
async function connect(config, parameters) {
  var _a;
  let connector;
  if (typeof parameters.connector === "function") {
    connector = config._internal.connectors.setup(parameters.connector);
  } else
    connector = parameters.connector;
  if (connector.uid === config.state.current)
    throw new ConnectorAlreadyConnectedError();
  try {
    config.setState((x) => ({ ...x, status: "connecting" }));
    connector.emitter.emit("message", { type: "connecting" });
    const { connector: _, ...rest } = parameters;
    const data = await connector.connect(rest);
    connector.emitter.off("connect", config._internal.events.connect);
    connector.emitter.on("change", config._internal.events.change);
    connector.emitter.on("disconnect", config._internal.events.disconnect);
    await ((_a = config.storage) == null ? void 0 : _a.setItem("recentConnectorId", connector.id));
    config.setState((x) => ({
      ...x,
      connections: new Map(x.connections).set(connector.uid, {
        accounts: rest.withCapabilities ? data.accounts.map((account) => typeof account === "object" ? account.address : account) : data.accounts,
        chainId: data.chainId,
        connector
      }),
      current: connector.uid,
      status: "connected"
    }));
    return {
      // TODO(v3): Remove `withCapabilities: true` default behavior so remove compat marshalling
      // Workaround so downstream connectors work with `withCapabilities` without any changes required
      accounts: rest.withCapabilities ? data.accounts.map((address) => typeof address === "object" ? address : { address, capabilities: {} }) : data.accounts,
      chainId: data.chainId
    };
  } catch (error) {
    config.setState((x) => ({
      ...x,
      // Keep existing connector connected in case of error
      status: x.current ? "connected" : "disconnected"
    }));
    throw error;
  }
}

// node_modules/viem/_esm/utils/uid.js
var size4 = 256;
var index = size4;
var buffer;
function uid(length = 11) {
  if (!buffer || index + length > size4 * 2) {
    buffer = "";
    index = 0;
    for (let i = 0; i < size4; i++) {
      buffer += (256 + Math.random() * 256 | 0).toString(16).substring(1);
    }
  }
  return buffer.substring(index, index++ + length);
}

// node_modules/viem/_esm/clients/createClient.js
function createClient(parameters) {
  const { batch, chain: chain2, ccipRead, dataSuffix, key = "base", name = "Base Client", tokens, type = "base" } = parameters;
  const experimental_blockTag = parameters.experimental_blockTag ?? (typeof (chain2 == null ? void 0 : chain2.experimental_preconfirmationTime) === "number" ? "pending" : void 0);
  const blockTime = (chain2 == null ? void 0 : chain2.blockTime) ?? 12e3;
  const defaultPollingInterval = Math.min(Math.max(Math.floor(blockTime / 2), 500), 4e3);
  const pollingInterval = parameters.pollingInterval ?? defaultPollingInterval;
  const cacheTime = parameters.cacheTime ?? Math.min(pollingInterval, Math.floor(blockTime / 2));
  const account = parameters.account ? parseAccount(parameters.account) : void 0;
  const { config, request, value } = parameters.transport({
    account,
    chain: chain2,
    pollingInterval
  });
  const transport = { ...config, ...value };
  const client = {
    account,
    batch,
    cacheTime,
    ccipRead,
    chain: chain2,
    dataSuffix,
    key,
    name,
    pollingInterval,
    request,
    tokens,
    transport,
    type,
    uid: uid(),
    ...experimental_blockTag ? { experimental_blockTag } : {}
  };
  return decorate(client);
}
var scopes_builtin = /* @__PURE__ */ new WeakSet();
var scopeId = 0;
function decorate(client) {
  function extend(base, extensions) {
    return (extendFn) => {
      const extended = extendFn(base);
      for (const key in client)
        if (key !== "scope")
          delete extended[key];
      const combined = { ...base, ...extended };
      for (const key in extended) {
        const a = base[key];
        const b = extended[key];
        if (isPlainObject(a) && isPlainObject(b))
          combined[key] = { ...a, ...b };
      }
      const next = [...extensions, extendFn];
      const { scope: scope_combined } = combined;
      return Object.assign(combined, {
        extend: extend(combined, next),
        scope: typeof scope_combined === "function" && scopes_builtin.has(scope_combined) ? scope(next) : scope_combined
      });
    };
  }
  function scope(extensions) {
    const scopes = /* @__PURE__ */ new WeakMap();
    const fn = (options = {}) => {
      const cached = options.signal && scopes.get(options.signal);
      if (cached)
        return cached;
      const id = `scope.${scopeId++}`;
      const controller = new AbortController();
      const { signal } = options;
      if (signal == null ? void 0 : signal.aborted)
        controller.abort(signal.reason);
      else
        signal == null ? void 0 : signal.addEventListener("abort", () => controller.abort(signal.reason), {
          once: true
        });
      const request = (args, options_request) => client.request(args, {
        ...options_request,
        signal: (options_request == null ? void 0 : options_request.signal) ?? controller.signal,
        // The request `uid` keys in-flight request deduplication.
        uid: (options_request == null ? void 0 : options_request.uid) ?? id
      });
      const scoped = extensions.reduce((base, extendFn) => base.extend(extendFn), decorate({ ...client, request, uid: id }));
      if (signal)
        scopes.set(signal, scoped);
      return scoped;
    };
    scopes_builtin.add(fn);
    return fn;
  }
  return Object.assign(client, {
    extend: extend(client, []),
    scope: scope([])
  });
}
function isPlainObject(value) {
  if (typeof value !== "object" || value === null)
    return false;
  const prototype = Object.getPrototypeOf(value);
  return prototype === Object.prototype || prototype === null;
}
function bindActionDecorators(client, action) {
  const wrapped = (parameters = {}) => action(client, parameters);
  for (const key of [
    "call",
    "calls",
    "callWithPeriod",
    "estimateGas",
    "prepare",
    "prepareRecipient",
    "predict",
    "simulate"
  ])
    if (Object.hasOwn(action, key)) {
      const helper = action[key];
      wrapped[key] = (args = {}) => {
        if (helper.length === 1)
          return helper(args);
        return helper(client, args);
      };
    }
  for (const key of ["extractEvent", "extractEvents"])
    if (Object.hasOwn(action, key))
      wrapped[key] = action[key];
  return wrapped;
}

// node_modules/viem/_esm/utils/siwe/parseSiweMessage.js
var siweDateTimeRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d+)?(Z|[+-]\d{2}:\d{2})$/;
function isValidSiweDateTime(value) {
  if (!siweDateTimeRegex.test(value))
    return false;
  return !Number.isNaN(new Date(value).getTime());
}
function parseSiweDateTime(value) {
  if (!isValidSiweDateTime(value))
    return new Date(Number.NaN);
  return new Date(value);
}
function parseSiweMessage(message) {
  var _a, _b;
  const { scheme, statement, ...prefix } = ((_a = message.match(prefixRegex)) == null ? void 0 : _a.groups) ?? {};
  const { chainId, expirationTime, issuedAt, notBefore, requestId, resources: resources_, ...suffix } = ((_b = message.match(suffixRegex)) == null ? void 0 : _b.groups) ?? {};
  const resources = resources_ == null ? void 0 : resources_.split("\n- ").slice(1);
  return {
    ...prefix,
    ...suffix,
    ...chainId ? { chainId: Number(chainId) } : {},
    ...expirationTime ? { expirationTime: parseSiweDateTime(expirationTime) } : {},
    ...issuedAt ? { issuedAt: parseSiweDateTime(issuedAt) } : {},
    ...notBefore ? { notBefore: parseSiweDateTime(notBefore) } : {},
    ...requestId ? { requestId } : {},
    ...resources ? { resources } : {},
    ...scheme ? { scheme } : {},
    ...statement ? { statement } : {}
  };
}
var prefixRegex = /^(?:(?<scheme>[a-zA-Z][a-zA-Z0-9+\-.]*):\/\/)?(?<domain>[a-zA-Z0-9+-.]*(?::[0-9]{1,5})?) (?:wants you to sign in with your Ethereum account:\n)(?<address>0x[a-fA-F0-9]{40})\n\n(?:(?<statement>.*)\n\n)?/;
var suffixRegex = /(?:URI: (?<uri>.+))\n(?:Version: (?<version>.+))\n(?:Chain ID: (?<chainId>\d+))\n(?:Nonce: (?<nonce>[a-zA-Z0-9]+))\n(?:Issued At: (?<issuedAt>.+))(?:\nExpiration Time: (?<expirationTime>.+))?(?:\nNot Before: (?<notBefore>.+))?(?:\nRequest ID: (?<requestId>.*))?(?:\nResources:(?<resources>(?:\n- .+)*))?/;

// node_modules/viem/_esm/utils/siwe/validateSiweMessage.js
function validateSiweMessage(parameters) {
  const { address, domain, message, nonce, scheme, time = /* @__PURE__ */ new Date() } = parameters;
  if (domain && message.domain !== domain)
    return false;
  if (nonce && message.nonce !== nonce)
    return false;
  if (scheme && message.scheme !== scheme)
    return false;
  if (Number.isNaN(time.getTime()))
    return false;
  if (message.expirationTime) {
    if (Number.isNaN(message.expirationTime.getTime()))
      return false;
    if (time >= message.expirationTime)
      return false;
  }
  if (message.notBefore) {
    if (Number.isNaN(message.notBefore.getTime()))
      return false;
    if (time < message.notBefore)
      return false;
  }
  try {
    if (!message.address)
      return false;
    if (!isAddress(message.address, { strict: false }))
      return false;
    if (address && !isAddressEqual(message.address, address))
      return false;
  } catch {
    return false;
  }
  return true;
}

// node_modules/viem/_esm/actions/siwe/verifySiweMessage.js
async function verifySiweMessage(client, parameters) {
  const { address, domain, message, nonce, scheme, signature, time = /* @__PURE__ */ new Date(), ...callRequest } = parameters;
  const parsed = parseSiweMessage(message);
  if (!parsed.address)
    return false;
  const isValid = validateSiweMessage({
    address,
    domain,
    message: parsed,
    nonce,
    scheme,
    time
  });
  if (!isValid)
    return false;
  const hash2 = hashMessage(message);
  return verifyHash2(client, {
    address: parsed.address,
    hash: hash2,
    signature,
    ...callRequest
  });
}

// node_modules/viem/_esm/clients/decorators/public.js
function publicActions(client) {
  return {
    call: (args) => call(client, args),
    createAccessList: (args) => createAccessList(client, args),
    createBlockFilter: () => createBlockFilter(client),
    createContractEventFilter: (args) => createContractEventFilter(client, args),
    createEventFilter: (args) => createEventFilter(client, args),
    createPendingTransactionFilter: () => createPendingTransactionFilter(client),
    estimateContractGas: (args) => estimateContractGas(client, args),
    estimateGas: (args) => estimateGas(client, args),
    getBalance: (args) => getBalance(client, args),
    getBlobBaseFee: () => getBlobBaseFee(client),
    getBlock: (args) => getBlock(client, args),
    getBlockNumber: (args) => getBlockNumber(client, args),
    getBlockReceipts: (args) => getBlockReceipts(client, args),
    getBlockTransactionCount: (args) => getBlockTransactionCount(client, args),
    getBytecode: (args) => getCode(client, args),
    getChainId: () => getChainId(client),
    getCode: (args) => getCode(client, args),
    getContractEvents: (args) => getContractEvents(client, args),
    getDelegation: (args) => getDelegation(client, args),
    getEip712Domain: (args) => getEip712Domain(client, args),
    getEnsAddress: (args) => getEnsAddress(client, args),
    getEnsAvatar: (args) => getEnsAvatar(client, args),
    getEnsName: (args) => getEnsName(client, args),
    getEnsResolver: (args) => getEnsResolver(client, args),
    getEnsText: (args) => getEnsText(client, args),
    getFeeHistory: (args) => getFeeHistory(client, args),
    estimateFeesPerGas: (args) => estimateFeesPerGas(client, args),
    getFilterChanges: (args) => getFilterChanges(client, args),
    getFilterLogs: (args) => getFilterLogs(client, args),
    getGasPrice: () => getGasPrice(client),
    getLogs: (args) => getLogs(client, args),
    getProof: (args) => getProof(client, args),
    estimateMaxPriorityFeePerGas: (args) => estimateMaxPriorityFeePerGas(client, args),
    fillTransaction: (args) => fillTransaction(client, args),
    getRawTransaction: (args) => getRawTransaction(client, args),
    getStorageAt: (args) => getStorageAt(client, args),
    getStorageValues: (args) => getStorageValues(client, args),
    getTransaction: (args) => getTransaction(client, args),
    getTransactionConfirmations: (args) => getTransactionConfirmations(client, args),
    getTransactionCount: (args) => getTransactionCount(client, args),
    getTransactionReceipt: (args) => getTransactionReceipt(client, args),
    multicall: (args) => multicall(client, args),
    prepareTransactionRequest: (args) => prepareTransactionRequest(client, args),
    readContract: (args) => readContract(client, args),
    sendRawTransaction: (args) => sendRawTransaction(client, args),
    sendRawTransactionSync: (args) => sendRawTransactionSync(client, args),
    simulate: (args) => simulateBlocks(client, args),
    simulateBlocks: (args) => simulateBlocks(client, args),
    simulateCalls: (args) => simulateCalls(client, args),
    simulateContract: (args) => simulateContract(client, args),
    verifyHash: (args) => verifyHash2(client, args),
    verifyMessage: (args) => verifyMessage2(client, args),
    verifySiweMessage: (args) => verifySiweMessage(client, args),
    verifyTypedData: (args) => verifyTypedData2(client, args),
    uninstallFilter: (args) => uninstallFilter(client, args),
    waitForTransactionReceipt: (args) => waitForTransactionReceipt(client, args),
    watchBlockHeaders: (args) => watchBlockHeaders(client, args),
    watchBlocks: (args) => watchBlocks(client, args),
    watchBlockNumber: (args) => watchBlockNumber(client, args),
    watchContractEvent: (args) => watchContractEvent(client, args),
    watchEvent: (args) => watchEvent(client, args),
    watchPendingTransactions: (args) => watchPendingTransactions(client, args),
    token: bindPublicToken(client)
  };
}
function bindPublicToken(client) {
  return {
    getAllowance: bindActionDecorators(client, getAllowance),
    getBalance: bindActionDecorators(client, getBalance2),
    getMetadata: bindActionDecorators(client, getMetadata),
    getTotalSupply: bindActionDecorators(client, getTotalSupply)
  };
}

// node_modules/viem/_esm/clients/decorators/wallet.js
function walletActions(client) {
  return {
    addChain: (args) => addChain(client, args),
    deployContract: (args) => deployContract(client, args),
    fillTransaction: (args) => fillTransaction(client, args),
    getAddresses: () => getAddresses(client),
    getCallsStatus: (args) => getCallsStatus(client, args),
    getCapabilities: (args) => getCapabilities(client, args),
    getChainId: () => getChainId(client),
    getPermissions: () => getPermissions(client),
    prepareAuthorization: (args) => prepareAuthorization(client, args),
    prepareTransactionRequest: (args) => prepareTransactionRequest(client, args),
    requestAddresses: () => requestAddresses(client),
    requestPermissions: (args) => requestPermissions(client, args),
    sendCalls: (args) => sendCalls(client, args),
    sendCallsSync: (args) => sendCallsSync(client, args),
    sendRawTransaction: (args) => sendRawTransaction(client, args),
    sendRawTransactionSync: (args) => sendRawTransactionSync(client, args),
    sendTransaction: (args) => sendTransaction(client, args),
    sendTransactionSync: (args) => sendTransactionSync(client, args),
    showCallsStatus: (args) => showCallsStatus(client, args),
    signAuthorization: (args) => signAuthorization(client, args),
    signMessage: (args) => signMessage(client, args),
    signTransaction: (args) => signTransaction(client, args),
    signTypedData: (args) => signTypedData(client, args),
    switchChain: (args) => switchChain(client, args),
    waitForCallsStatus: (args) => waitForCallsStatus(client, args),
    watchAsset: (args) => watchAsset(client, args),
    writeContract: (args) => writeContract(client, args),
    writeContractSync: (args) => writeContractSync(client, args),
    token: {
      approve: bindActionDecorators(client, approve),
      approveSync: bindActionDecorators(client, approveSync),
      transfer: bindActionDecorators(client, transfer),
      transferSync: bindActionDecorators(client, transferSync)
    }
  };
}

// node_modules/viem/_esm/clients/transports/createTransport.js
function createTransport({ key, methods, name, request, retryCount = 3, retryDelay = 150, timeout, type }, value) {
  const uid3 = uid();
  return {
    config: {
      key,
      methods,
      name,
      request,
      retryCount,
      retryDelay,
      timeout,
      type
    },
    request: buildRequest(request, { methods, retryCount, retryDelay, uid: uid3 }),
    value
  };
}

// node_modules/viem/_esm/clients/transports/custom.js
function custom(provider, config = {}) {
  const { key = "custom", methods, name = "Custom Provider", retryDelay } = config;
  return ({ retryCount: defaultRetryCount }) => createTransport({
    key,
    methods,
    name,
    request: provider.request.bind(provider),
    retryCount: config.retryCount ?? defaultRetryCount,
    retryDelay,
    type: "custom"
  });
}

// node_modules/viem/_esm/clients/transports/fallback.js
function fallback(transports_, config = {}) {
  const { key = "fallback", name = "Fallback", rank = false, shouldThrow: shouldThrow_ = shouldThrow, retryCount, retryDelay } = config;
  return ({ chain: chain2, pollingInterval = 4e3, timeout, ...rest }) => {
    let transports = transports_;
    let onResponse = () => {
    };
    const transport = createTransport({
      key,
      name,
      async request({ method, params }, options) {
        let includes;
        const fetch2 = async (i = 0) => {
          const transport2 = transports[i]({
            ...rest,
            chain: chain2,
            retryCount: 0,
            timeout
          });
          try {
            const response = await transport2.request({
              method,
              params
            }, options);
            onResponse({
              method,
              params,
              response,
              transport: transport2,
              status: "success"
            });
            return response;
          } catch (err) {
            onResponse({
              error: err,
              method,
              params,
              transport: transport2,
              status: "error"
            });
            if (shouldThrow_(err))
              throw err;
            if (i === transports.length - 1)
              throw err;
            includes ?? (includes = transports.slice(i + 1).some((transport3) => {
              const { include, exclude } = transport3({ chain: chain2 }).config.methods || {};
              if (include)
                return include.includes(method);
              if (exclude)
                return !exclude.includes(method);
              return true;
            }));
            if (!includes)
              throw err;
            return fetch2(i + 1);
          }
        };
        return fetch2();
      },
      retryCount,
      retryDelay,
      type: "fallback"
    }, {
      onResponse: (fn) => onResponse = fn,
      transports: transports.map((fn) => fn({ chain: chain2, retryCount: 0 }))
    });
    if (rank) {
      const rankOptions = typeof rank === "object" ? rank : {};
      rankTransports({
        chain: chain2,
        interval: rankOptions.interval ?? pollingInterval,
        onTransports: (transports_2) => transports = transports_2,
        ping: rankOptions.ping,
        sampleCount: rankOptions.sampleCount,
        timeout: rankOptions.timeout,
        transports,
        weights: rankOptions.weights
      });
    }
    return transport;
  };
}
function shouldThrow(error) {
  if ("code" in error && typeof error.code === "number") {
    if (error.code === TransactionRejectedRpcError.code || error.code === UserRejectedRequestError.code || error.code === WalletConnectSessionSettlementError.code || ExecutionRevertedError.nodeMessage.test(error.message) || error.code === 5e3)
      return true;
  }
  return false;
}
function rankTransports({ chain: chain2, interval = 4e3, onTransports, ping, sampleCount = 10, timeout = 1e3, transports, weights = {} }) {
  const { stability: stabilityWeight = 0.7, latency: latencyWeight = 0.3 } = weights;
  const samples = [];
  const rankTransports_ = async () => {
    const sample = await Promise.all(transports.map(async (transport) => {
      const transport_ = transport({ chain: chain2, retryCount: 0, timeout });
      const start = Date.now();
      let end;
      let success;
      try {
        await (ping ? ping({ transport: transport_ }) : transport_.request({ method: "net_listening" }));
        success = 1;
      } catch {
        success = 0;
      } finally {
        end = Date.now();
      }
      const latency = end - start;
      return { latency, success };
    }));
    samples.push(sample);
    if (samples.length > sampleCount)
      samples.shift();
    const maxLatency = Math.max(...samples.map((sample2) => Math.max(...sample2.map(({ latency }) => latency))));
    const scores = transports.map((_, i) => {
      const latencies = samples.map((sample2) => sample2[i].latency);
      const meanLatency = latencies.reduce((acc, latency) => acc + latency, 0) / latencies.length;
      const latencyScore = 1 - meanLatency / maxLatency;
      const successes = samples.map((sample2) => sample2[i].success);
      const stabilityScore = successes.reduce((acc, success) => acc + success, 0) / successes.length;
      if (stabilityScore === 0)
        return [0, i];
      return [
        latencyWeight * latencyScore + stabilityWeight * stabilityScore,
        i
      ];
    }).sort((a, b) => b[0] - a[0]);
    onTransports(scores.map(([, i]) => transports[i]));
    await wait(interval);
    rankTransports_();
  };
  rankTransports_();
}

// node_modules/viem/_esm/errors/transport.js
var UrlRequiredError = class extends BaseError {
  constructor() {
    super("No URL was provided to the Transport. Please provide a valid RPC URL to the Transport.", {
      docsPath: "/docs/clients/intro",
      name: "UrlRequiredError"
    });
  }
};

// node_modules/viem/_esm/clients/transports/http.js
var signalId = 0;
var signalIds = /* @__PURE__ */ new WeakMap();
function getSignalId(signal) {
  if (!signal)
    return "default";
  const id = signalIds.get(signal);
  if (id !== void 0)
    return id;
  const nextId = signalId++;
  signalIds.set(signal, nextId);
  return nextId;
}
function http(url, config = {}) {
  const { batch, fetchFn, fetchOptions, key = "http", maxResponseBodySize, methods, name = "HTTP JSON-RPC", onFetchRequest, onFetchResponse, retryDelay, raw } = config;
  return ({ chain: chain2, retryCount: retryCount_, timeout: timeout_ }) => {
    const { batchSize = 1e3, wait: wait2 = 0 } = typeof batch === "object" ? batch : {};
    const retryCount = config.retryCount ?? retryCount_;
    const timeout = timeout_ ?? config.timeout ?? 1e4;
    const url_ = url || (chain2 == null ? void 0 : chain2.rpcUrls.default.http[0]);
    if (!url_)
      throw new UrlRequiredError();
    const rpcClient = getHttpRpcClient(url_, {
      fetchFn,
      fetchOptions,
      maxResponseBodySize,
      onRequest: onFetchRequest,
      onResponse: onFetchResponse,
      timeout
    });
    return createTransport({
      key,
      methods,
      name,
      async request({ method, params }, options) {
        const body = { method, params };
        const fetchOptions2 = (options == null ? void 0 : options.signal) ? { signal: options.signal } : void 0;
        const { schedule } = createBatchScheduler({
          id: `${url_}.${getSignalId(options == null ? void 0 : options.signal)}`,
          wait: wait2,
          shouldSplitBatch(requests) {
            return requests.length > batchSize;
          },
          fn: (body2) => rpcClient.request({
            body: body2,
            fetchOptions: fetchOptions2
          }),
          sort: (a, b) => a.id - b.id
        });
        const fn = async (body2) => batch ? schedule(body2) : [
          await rpcClient.request({
            body: body2,
            fetchOptions: fetchOptions2
          })
        ];
        const [{ error, result }] = await fn(body);
        if (raw)
          return { error, result };
        if (error)
          throw new RpcRequestError({
            body,
            error,
            url: url_
          });
        return result;
      },
      retryCount,
      retryDelay,
      timeout,
      type: "http"
    }, {
      fetchOptions,
      url: url_
    });
  };
}

// node_modules/viem/_esm/clients/transports/webSocket.js
function webSocket2(url, config = {}) {
  const { keepAlive, key = "webSocket", methods, name = "WebSocket JSON-RPC", reconnect: reconnect2, retryDelay } = config;
  return ({ chain: chain2, retryCount: retryCount_, timeout: timeout_ }) => {
    var _a;
    const retryCount = config.retryCount ?? retryCount_;
    const timeout = timeout_ ?? config.timeout ?? 1e4;
    const url_ = url || ((_a = chain2 == null ? void 0 : chain2.rpcUrls.default.webSocket) == null ? void 0 : _a[0]);
    const wsRpcClientOpts = { keepAlive, reconnect: reconnect2 };
    if (!url_)
      throw new UrlRequiredError();
    return createTransport({
      key,
      methods,
      name,
      async request({ method, params }) {
        const body = { method, params };
        const rpcClient = await getWebSocketRpcClient(url_, wsRpcClientOpts);
        const { error, result } = await rpcClient.requestAsync({
          body,
          timeout
        });
        if (error)
          throw new RpcRequestError({
            body,
            error,
            url: url_
          });
        return result;
      },
      retryCount,
      retryDelay,
      timeout,
      type: "webSocket"
    }, {
      getSocket() {
        return getSocket(url_);
      },
      getRpcClient() {
        return getWebSocketRpcClient(url_, wsRpcClientOpts);
      },
      async subscribe({ params, onData, onError }) {
        const rpcClient = await getWebSocketRpcClient(url_, wsRpcClientOpts);
        let subscriptionId;
        let unsubscribed = false;
        function unsubscribe() {
          unsubscribed = true;
          return new Promise((resolve) => rpcClient.request({
            body: {
              method: "eth_unsubscribe",
              params: [subscriptionId]
            },
            onResponse: resolve
          }));
        }
        await new Promise((resolve, reject) => rpcClient.request({
          body: {
            method: "eth_subscribe",
            params
          },
          onError(error) {
            reject(error);
            onError == null ? void 0 : onError(error);
            return;
          },
          onResponse(response) {
            if (response.error) {
              reject(response.error);
              onError == null ? void 0 : onError(response.error);
              return;
            }
            if (typeof response.id === "number") {
              subscriptionId = response.result;
              if (unsubscribed)
                unsubscribe();
              resolve(response);
              return;
            }
            if (response.method !== "eth_subscription")
              return;
            onData(response.params);
          }
        }));
        return {
          get subscriptionId() {
            return subscriptionId;
          },
          unsubscribe
        };
      }
    });
  };
}

// node_modules/@wagmi/core/dist/esm/actions/getConnectorClient.js
async function getConnectorClient(config, parameters = {}) {
  const { assertChainId = true } = parameters;
  let connection;
  if (parameters.connector) {
    const { connector: connector2 } = parameters;
    if (config.state.status === "reconnecting" && !connector2.getAccounts && !connector2.getChainId)
      throw new ConnectorUnavailableReconnectingError({ connector: connector2 });
    const [accounts, chainId2] = await Promise.all([
      connector2.getAccounts().catch((e) => {
        if (parameters.account === null)
          return [];
        throw e;
      }),
      connector2.getChainId()
    ]);
    connection = {
      accounts,
      chainId: chainId2,
      connector: connector2
    };
  } else
    connection = config.state.connections.get(config.state.current);
  if (!connection)
    throw new ConnectorNotConnectedError();
  const chainId = parameters.chainId ?? connection.chainId;
  const connectorChainId = await connection.connector.getChainId();
  if (assertChainId && connectorChainId !== chainId)
    throw new ConnectorChainMismatchError({
      connectionChainId: chainId,
      connectorChainId
    });
  const connector = connection.connector;
  if (connector.getClient)
    return connector.getClient({ chainId });
  const account = parseAccount(parameters.account ?? connection.accounts[0]);
  if (account)
    account.address = getAddress(account.address);
  if (parameters.account && !connection.accounts.some((x) => x.toLowerCase() === account.address.toLowerCase()))
    throw new ConnectorAccountNotFoundError({
      address: account.address,
      connector
    });
  const chain2 = config.chains.find((chain3) => chain3.id === chainId);
  const provider = await connection.connector.getProvider({ chainId });
  return createClient({
    account,
    chain: chain2,
    name: "Connector Client",
    transport: (opts) => custom(provider)({ ...opts, retryCount: 0 })
  });
}

// node_modules/@wagmi/core/dist/esm/actions/deployContract.js
async function deployContract2(config, parameters) {
  const { account, chainId, connector, ...rest } = parameters;
  let client;
  if (typeof account === "object" && (account == null ? void 0 : account.type) === "local")
    client = config.getClient({ chainId });
  else
    client = await getConnectorClient(config, {
      account: account ?? void 0,
      assertChainId: false,
      chainId,
      connector
    });
  const chain2 = (() => {
    var _a;
    if (!chainId || ((_a = client.chain) == null ? void 0 : _a.id) === chainId)
      return client.chain;
    return { id: chainId };
  })();
  const action = getAction2(client, deployContract, "deployContract");
  const hash2 = await action({
    ...rest,
    ...account ? { account } : {},
    assertChainId: !!chainId,
    chain: chain2
  });
  return hash2;
}

// node_modules/@wagmi/core/dist/esm/actions/disconnect.js
async function disconnect(config, parameters = {}) {
  var _a, _b;
  let connector;
  if (parameters.connector)
    connector = parameters.connector;
  else {
    const { connections: connections2, current } = config.state;
    const connection = connections2.get(current);
    connector = connection == null ? void 0 : connection.connector;
  }
  const connections = config.state.connections;
  if (connector) {
    await connector.disconnect();
    connector.emitter.off("change", config._internal.events.change);
    connector.emitter.off("disconnect", config._internal.events.disconnect);
    connector.emitter.on("connect", config._internal.events.connect);
    connections.delete(connector.uid);
  }
  config.setState((x) => {
    if (connections.size === 0)
      return {
        ...x,
        connections: /* @__PURE__ */ new Map(),
        current: null,
        status: "disconnected"
      };
    const nextConnection = connections.values().next().value;
    return {
      ...x,
      connections: new Map(connections),
      current: nextConnection.connector.uid
    };
  });
  {
    const current = config.state.current;
    if (!current)
      return;
    const connector2 = (_a = config.state.connections.get(current)) == null ? void 0 : _a.connector;
    if (!connector2)
      return;
    await ((_b = config.storage) == null ? void 0 : _b.setItem("recentConnectorId", connector2.id));
  }
}

// node_modules/@wagmi/core/dist/esm/actions/estimateFeesPerGas.js
async function estimateFeesPerGas2(config, parameters = {}) {
  const { chainId, ...rest } = parameters;
  const client = config.getClient({ chainId });
  const action = getAction2(client, estimateFeesPerGas, "estimateFeesPerGas");
  const { gasPrice, maxFeePerGas, maxPriorityFeePerGas } = await action({
    ...rest,
    chain: client.chain
  });
  return {
    gasPrice,
    maxFeePerGas,
    maxPriorityFeePerGas
  };
}

// node_modules/@wagmi/core/dist/esm/actions/estimateGas.js
async function estimateGas2(config, parameters) {
  const { chainId, connector, ...rest } = parameters;
  let account;
  if (parameters.account)
    account = parameters.account;
  else {
    const connectorClient = await getConnectorClient(config, {
      account: parameters.account,
      assertChainId: false,
      chainId,
      connector
    });
    account = connectorClient.account;
  }
  const client = config.getClient({ chainId });
  const action = getAction2(client, estimateGas, "estimateGas");
  return action({ ...rest, account });
}

// node_modules/@wagmi/core/dist/esm/actions/estimateMaxPriorityFeePerGas.js
async function estimateMaxPriorityFeePerGas2(config, parameters = {}) {
  const { chainId } = parameters;
  const client = config.getClient({ chainId });
  const action = getAction2(client, estimateMaxPriorityFeePerGas, "estimateMaxPriorityFeePerGas");
  return action({ chain: client.chain });
}

// node_modules/@wagmi/core/dist/esm/actions/getBalance.js
async function getBalance3(config, parameters) {
  const { address, blockNumber, blockTag, chainId } = parameters;
  const client = config.getClient({ chainId });
  const action = getAction2(client, getBalance, "getBalance");
  const value = await action(blockNumber !== void 0 ? { address, blockNumber } : { address, blockTag });
  const chain2 = config.chains.find((x) => x.id === chainId) ?? client.chain;
  return {
    decimals: chain2.nativeCurrency.decimals,
    symbol: chain2.nativeCurrency.symbol,
    value
  };
}

// node_modules/@wagmi/core/dist/esm/actions/getBlobBaseFee.js
function getBlobBaseFee2(config, parameters = {}) {
  const { chainId } = parameters;
  const client = config.getClient({ chainId });
  const action = getAction2(client, getBlobBaseFee, "getBlobBaseFee");
  return action({});
}

// node_modules/@wagmi/core/dist/esm/actions/getBlock.js
async function getBlock2(config, parameters = {}) {
  const { chainId, ...rest } = parameters;
  const client = config.getClient({ chainId });
  const action = getAction2(client, getBlock, "getBlock");
  const block = await action(rest);
  return {
    ...block,
    chainId: client.chain.id
  };
}

// node_modules/@wagmi/core/dist/esm/actions/getBlockNumber.js
function getBlockNumber2(config, parameters = {}) {
  const { chainId, ...rest } = parameters;
  const client = config.getClient({ chainId });
  const action = getAction2(client, getBlockNumber, "getBlockNumber");
  return action(rest);
}

// node_modules/@wagmi/core/dist/esm/actions/getBlockTransactionCount.js
function getBlockTransactionCount2(config, parameters = {}) {
  const { chainId, ...rest } = parameters;
  const client = config.getClient({ chainId });
  const action = getAction2(client, getBlockTransactionCount, "getBlockTransactionCount");
  return action(rest);
}

// node_modules/@wagmi/core/dist/esm/actions/getBytecode.js
async function getBytecode(config, parameters) {
  const { chainId, ...rest } = parameters;
  const client = config.getClient({ chainId });
  const action = getAction2(client, getCode, "getBytecode");
  return action(rest);
}

// node_modules/@wagmi/core/dist/esm/actions/getCallsStatus.js
async function getCallsStatus2(config, parameters) {
  const { connector, id } = parameters;
  const client = await getConnectorClient(config, { connector });
  const action = getAction2(client, getCallsStatus, "getCallsStatus");
  return action({ id });
}

// node_modules/@wagmi/core/dist/esm/actions/getCapabilities.js
async function getCapabilities2(config, parameters = {}) {
  const { account, chainId, connector } = parameters;
  const client = await getConnectorClient(config, { account, connector });
  return getCapabilities(client, {
    account,
    chainId
  });
}

// node_modules/@wagmi/core/dist/esm/actions/getChainId.js
function getChainId2(config) {
  return config.state.chainId;
}

// node_modules/@wagmi/core/dist/esm/utils/deepEqual.js
function deepEqual(a, b) {
  if (a === b)
    return true;
  if (a && b && typeof a === "object" && typeof b === "object") {
    if (a.constructor !== b.constructor)
      return false;
    let length;
    let i;
    if (Array.isArray(a) && Array.isArray(b)) {
      length = a.length;
      if (length !== b.length)
        return false;
      for (i = length; i-- !== 0; )
        if (!deepEqual(a[i], b[i]))
          return false;
      return true;
    }
    if (typeof a.valueOf === "function" && a.valueOf !== Object.prototype.valueOf)
      return a.valueOf() === b.valueOf();
    if (typeof a.toString === "function" && a.toString !== Object.prototype.toString)
      return a.toString() === b.toString();
    const keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length)
      return false;
    for (i = length; i-- !== 0; )
      if (!Object.hasOwn(b, keys[i]))
        return false;
    for (i = length; i-- !== 0; ) {
      const key = keys[i];
      if (key && !deepEqual(a[key], b[key]))
        return false;
    }
    return true;
  }
  return a !== a && b !== b;
}

// node_modules/@wagmi/core/dist/esm/actions/getChains.js
var previousChains = [];
function getChains(config) {
  const chains = config.chains;
  if (deepEqual(previousChains, chains))
    return previousChains;
  previousChains = chains;
  return chains;
}

// node_modules/@wagmi/core/dist/esm/actions/getClient.js
function getClient(config, parameters = {}) {
  try {
    return config.getClient(parameters);
  } catch {
    return void 0;
  }
}

// node_modules/@wagmi/core/dist/esm/actions/getConnection.js
function getConnection(config) {
  const uid3 = config.state.current;
  const connection = config.state.connections.get(uid3);
  const addresses = connection == null ? void 0 : connection.accounts;
  const address = addresses == null ? void 0 : addresses[0];
  const chain2 = config.chains.find((chain3) => chain3.id === (connection == null ? void 0 : connection.chainId));
  const status = config.state.status;
  switch (status) {
    case "connected":
      return {
        address,
        addresses,
        chain: chain2,
        chainId: connection == null ? void 0 : connection.chainId,
        connector: connection == null ? void 0 : connection.connector,
        isConnected: true,
        isConnecting: false,
        isDisconnected: false,
        isReconnecting: false,
        status
      };
    case "reconnecting":
      return {
        address,
        addresses,
        chain: chain2,
        chainId: connection == null ? void 0 : connection.chainId,
        connector: connection == null ? void 0 : connection.connector,
        isConnected: !!address,
        isConnecting: false,
        isDisconnected: false,
        isReconnecting: true,
        status
      };
    case "connecting":
      return {
        address,
        addresses,
        chain: chain2,
        chainId: connection == null ? void 0 : connection.chainId,
        connector: connection == null ? void 0 : connection.connector,
        isConnected: false,
        isConnecting: true,
        isDisconnected: false,
        isReconnecting: false,
        status
      };
    case "disconnected":
      return {
        address: void 0,
        addresses: void 0,
        chain: void 0,
        chainId: void 0,
        connector: void 0,
        isConnected: false,
        isConnecting: false,
        isDisconnected: true,
        isReconnecting: false,
        status
      };
  }
}

// node_modules/@wagmi/core/dist/esm/actions/getConnections.js
var previousConnections = [];
function getConnections(config) {
  const connections = [...config.state.connections.values()];
  if (config.state.status === "reconnecting")
    return previousConnections;
  if (deepEqual(previousConnections, connections))
    return previousConnections;
  previousConnections = connections;
  return connections;
}

// node_modules/@wagmi/core/dist/esm/actions/getConnectors.js
var previousConnectors = [];
function getConnectors(config) {
  const connectors = config.connectors;
  if (previousConnectors.length === connectors.length && previousConnectors.every((connector, index3) => connector === connectors[index3]))
    return previousConnectors;
  previousConnectors = connectors;
  return connectors;
}

// node_modules/@wagmi/core/dist/esm/actions/getContractEvents.js
async function getContractEvents2(config, parameters) {
  const { chainId, ...rest } = parameters;
  const client = config.getClient({ chainId });
  const action = getAction2(client, getContractEvents, "getContractEvents");
  return action(rest);
}

// node_modules/@wagmi/core/dist/esm/actions/getEnsAddress.js
function getEnsAddress2(config, parameters) {
  const { chainId, ...rest } = parameters;
  const client = config.getClient({ chainId });
  const action = getAction2(client, getEnsAddress, "getEnsAddress");
  return action(rest);
}

// node_modules/@wagmi/core/dist/esm/actions/getEnsAvatar.js
function getEnsAvatar2(config, parameters) {
  const { chainId, ...rest } = parameters;
  const client = config.getClient({ chainId });
  const action = getAction2(client, getEnsAvatar, "getEnsAvatar");
  return action(rest);
}

// node_modules/@wagmi/core/dist/esm/actions/getEnsName.js
function getEnsName2(config, parameters) {
  const { chainId, ...rest } = parameters;
  const client = config.getClient({ chainId });
  const action = getAction2(client, getEnsName, "getEnsName");
  return action(rest);
}

// node_modules/@wagmi/core/dist/esm/actions/getEnsResolver.js
function getEnsResolver2(config, parameters) {
  const { chainId, ...rest } = parameters;
  const client = config.getClient({ chainId });
  const action = getAction2(client, getEnsResolver, "getEnsResolver");
  return action(rest);
}

// node_modules/@wagmi/core/dist/esm/actions/getEnsText.js
function getEnsText2(config, parameters) {
  const { chainId, ...rest } = parameters;
  const client = config.getClient({ chainId });
  const action = getAction2(client, getEnsText, "getEnsText");
  return action(rest);
}

// node_modules/@wagmi/core/dist/esm/actions/getFeeHistory.js
function getFeeHistory2(config, parameters) {
  const { chainId, ...rest } = parameters;
  const client = config.getClient({ chainId });
  const action = getAction2(client, getFeeHistory, "getFeeHistory");
  return action(rest);
}

// node_modules/@wagmi/core/dist/esm/actions/getGasPrice.js
function getGasPrice2(config, parameters = {}) {
  const { chainId } = parameters;
  const client = config.getClient({ chainId });
  const action = getAction2(client, getGasPrice, "getGasPrice");
  return action({});
}

// node_modules/@wagmi/core/dist/esm/actions/getProof.js
async function getProof2(config, parameters) {
  const { chainId, ...rest } = parameters;
  const client = config.getClient({ chainId });
  const action = getAction2(client, getProof, "getProof");
  return action(rest);
}

// node_modules/@wagmi/core/dist/esm/actions/getPublicClient.js
function getPublicClient(config, parameters = {}) {
  const client = getClient(config, parameters);
  return client == null ? void 0 : client.extend(publicActions);
}

// node_modules/@wagmi/core/dist/esm/actions/getStorageAt.js
async function getStorageAt2(config, parameters) {
  const { chainId, ...rest } = parameters;
  const client = config.getClient({ chainId });
  const action = getAction2(client, getStorageAt, "getStorageAt");
  return action(rest);
}

// node_modules/@wagmi/core/dist/esm/actions/getTransaction.js
function getTransaction2(config, parameters) {
  const { chainId, ...rest } = parameters;
  const client = config.getClient({ chainId });
  const action = getAction2(client, getTransaction, "getTransaction");
  return action(rest);
}

// node_modules/@wagmi/core/dist/esm/actions/getTransactionConfirmations.js
function getTransactionConfirmations2(config, parameters) {
  const { chainId, ...rest } = parameters;
  const client = config.getClient({ chainId });
  const action = getAction2(client, getTransactionConfirmations, "getTransactionConfirmations");
  return action(rest);
}

// node_modules/@wagmi/core/dist/esm/actions/getTransactionCount.js
async function getTransactionCount2(config, parameters) {
  const { address, blockNumber, blockTag, chainId } = parameters;
  const client = config.getClient({ chainId });
  const action = getAction2(client, getTransactionCount, "getTransactionCount");
  return action(blockNumber !== void 0 ? { address, blockNumber } : { address, blockTag });
}

// node_modules/@wagmi/core/dist/esm/actions/getTransactionReceipt.js
async function getTransactionReceipt2(config, parameters) {
  const { chainId, ...rest } = parameters;
  const client = config.getClient({ chainId });
  const action = getAction2(client, getTransactionReceipt, "getTransactionReceipt");
  return action(rest);
}

// node_modules/@wagmi/core/dist/esm/actions/getWalletClient.js
async function getWalletClient(config, parameters = {}) {
  const client = await getConnectorClient(config, parameters);
  return client.extend(walletActions);
}

// node_modules/@wagmi/core/dist/esm/actions/multicall.js
async function multicall2(config, parameters) {
  const { allowFailure = true, chainId, contracts, ...rest } = parameters;
  const client = config.getClient({ chainId });
  const action = getAction2(client, multicall, "multicall");
  return action({
    allowFailure,
    contracts,
    ...rest
  });
}

// node_modules/@wagmi/core/dist/esm/actions/prepareTransactionRequest.js
async function prepareTransactionRequest2(config, parameters) {
  const { account, chainId, connector, ...rest } = parameters;
  let client;
  if (typeof account === "object" && (account == null ? void 0 : account.type) === "local")
    client = config.getClient({ chainId });
  else
    client = await getConnectorClient(config, {
      account: account ?? void 0,
      assertChainId: false,
      chainId,
      connector
    });
  const action = getAction2(client, prepareTransactionRequest, "prepareTransactionRequest");
  return action({
    ...rest,
    ...account ? { account } : {}
  });
}

// node_modules/@wagmi/core/dist/esm/actions/readContract.js
function readContract2(config, parameters) {
  const { chainId, ...rest } = parameters;
  const client = config.getClient({ chainId });
  const action = getAction2(client, readContract, "readContract");
  return action(rest);
}

// node_modules/@wagmi/core/dist/esm/actions/readContracts.js
async function readContracts(config, parameters) {
  var _a;
  const { allowFailure = true, blockNumber, blockTag, ...rest } = parameters;
  const contracts = parameters.contracts;
  try {
    const contractsByChainId = {};
    for (const [index3, contract] of contracts.entries()) {
      const chainId = contract.chainId ?? config.state.chainId;
      if (!contractsByChainId[chainId])
        contractsByChainId[chainId] = [];
      (_a = contractsByChainId[chainId]) == null ? void 0 : _a.push({ contract, index: index3 });
    }
    const promises = () => Object.entries(contractsByChainId).map(([chainId, contracts2]) => multicall2(config, {
      ...rest,
      allowFailure,
      blockNumber,
      blockTag,
      chainId: Number.parseInt(chainId, 10),
      contracts: contracts2.map(({ contract }) => contract)
    }));
    const multicallResults = (await Promise.all(promises())).flat();
    const resultIndexes = Object.values(contractsByChainId).flatMap((contracts2) => contracts2.map(({ index: index3 }) => index3));
    return multicallResults.reduce((results, result, index3) => {
      if (results)
        results[resultIndexes[index3]] = result;
      return results;
    }, []);
  } catch (error) {
    if (error instanceof ContractFunctionExecutionError)
      throw error;
    const promises = () => contracts.map((contract) => readContract2(config, { ...contract, blockNumber, blockTag }));
    if (allowFailure)
      return (await Promise.allSettled(promises())).map((result) => {
        if (result.status === "fulfilled")
          return { result: result.value, status: "success" };
        return { error: result.reason, result: void 0, status: "failure" };
      });
    return await Promise.all(promises());
  }
}

// node_modules/@wagmi/core/dist/esm/actions/reconnect.js
var reconnecting = /* @__PURE__ */ new WeakSet();
async function reconnect(config, parameters = {}) {
  var _a, _b;
  if (reconnecting.has(config))
    return [];
  reconnecting.add(config);
  try {
    config.setState((x) => ({
      ...x,
      status: x.current ? "reconnecting" : "connecting"
    }));
    const connectors = [];
    if ((_a = parameters.connectors) == null ? void 0 : _a.length) {
      for (const connector_ of parameters.connectors) {
        let connector;
        if (typeof connector_ === "function")
          connector = config._internal.connectors.setup(connector_);
        else
          connector = connector_;
        connectors.push(connector);
      }
    } else
      connectors.push(...config.connectors);
    let recentConnectorId;
    try {
      recentConnectorId = await ((_b = config.storage) == null ? void 0 : _b.getItem("recentConnectorId"));
    } catch {
    }
    const scores = {};
    for (const [, connection] of config.state.connections) {
      scores[connection.connector.id] = 1;
    }
    if (recentConnectorId)
      scores[recentConnectorId] = 0;
    const sorted = Object.keys(scores).length > 0 ? (
      // .toSorted()
      [...connectors].sort((a, b) => (scores[a.id] ?? 10) - (scores[b.id] ?? 10))
    ) : connectors;
    let connected = false;
    const connections = [];
    const providers = [];
    for (const connector of sorted) {
      const provider = await connector.getProvider().catch(() => void 0);
      if (!provider)
        continue;
      if (providers.some((x) => x === provider))
        continue;
      const isAuthorized = await connector.isAuthorized().catch(() => false);
      if (!isAuthorized)
        continue;
      const data = await connector.connect({ isReconnecting: true }).catch(() => null);
      if (!data)
        continue;
      connector.emitter.off("connect", config._internal.events.connect);
      connector.emitter.on("change", config._internal.events.change);
      connector.emitter.on("disconnect", config._internal.events.disconnect);
      config.setState((x) => {
        const connections2 = new Map(connected ? x.connections : /* @__PURE__ */ new Map()).set(connector.uid, { accounts: data.accounts, chainId: data.chainId, connector });
        return {
          ...x,
          current: connected ? x.current : connector.uid,
          connections: connections2
        };
      });
      connections.push({
        accounts: data.accounts,
        chainId: data.chainId,
        connector
      });
      providers.push(provider);
      connected = true;
    }
    if (config.state.status === "reconnecting" || config.state.status === "connecting") {
      if (!connected)
        config.setState((x) => ({
          ...x,
          connections: /* @__PURE__ */ new Map(),
          current: null,
          status: "disconnected"
        }));
      else
        config.setState((x) => ({ ...x, status: "connected" }));
    }
    return connections;
  } finally {
    reconnecting.delete(config);
  }
}

// node_modules/@wagmi/core/dist/esm/actions/sendCalls.js
async function sendCalls2(config, parameters) {
  const { account, chainId, connector, calls, ...rest } = parameters;
  const client = await getConnectorClient(config, {
    account,
    assertChainId: false,
    chainId,
    connector
  });
  const action = getAction2(client, sendCalls, "sendCalls");
  return action({
    ...rest,
    ...typeof account !== "undefined" ? { account } : {},
    calls,
    chain: chainId ? { id: chainId } : void 0
  });
}

// node_modules/@wagmi/core/dist/esm/actions/sendCallsSync.js
async function sendCallsSync2(config, parameters) {
  const { account, chainId, connector, calls, ...rest } = parameters;
  const client = await getConnectorClient(config, {
    account,
    assertChainId: false,
    chainId,
    connector
  });
  const action = getAction2(client, sendCallsSync, "sendCallsSync");
  return action({
    ...rest,
    ...typeof account !== "undefined" ? { account } : {},
    calls,
    chain: chainId ? { id: chainId } : void 0
  });
}

// node_modules/@wagmi/core/dist/esm/actions/sendTransaction.js
async function sendTransaction2(config, parameters) {
  const { account, chainId, connector, ...rest } = parameters;
  let client;
  if (typeof account === "object" && (account == null ? void 0 : account.type) === "local")
    client = config.getClient({ chainId });
  else
    client = await getConnectorClient(config, {
      account: account ?? void 0,
      assertChainId: false,
      chainId,
      connector
    });
  const chain2 = (() => {
    var _a;
    if (!chainId || ((_a = client.chain) == null ? void 0 : _a.id) === chainId)
      return client.chain;
    return { id: chainId };
  })();
  const action = getAction2(client, sendTransaction, "sendTransaction");
  const hash2 = await action({
    ...rest,
    ...account ? { account } : {},
    assertChainId: !!chainId,
    chain: chain2,
    gas: rest.gas ?? void 0
  });
  return hash2;
}

// node_modules/@wagmi/core/dist/esm/actions/sendTransactionSync.js
async function sendTransactionSync2(config, parameters) {
  const { account, chainId, connector, ...rest } = parameters;
  let client;
  if (typeof account === "object" && (account == null ? void 0 : account.type) === "local")
    client = config.getClient({ chainId });
  else
    client = await getConnectorClient(config, {
      account: account ?? void 0,
      assertChainId: false,
      chainId,
      connector
    });
  const chain2 = (() => {
    var _a;
    if (!chainId || ((_a = client.chain) == null ? void 0 : _a.id) === chainId)
      return client.chain;
    return { id: chainId };
  })();
  const action = getAction2(client, sendTransactionSync, "sendTransactionSync");
  const hash2 = await action({
    ...rest,
    ...account ? { account } : {},
    assertChainId: !!chainId,
    chain: chain2,
    gas: rest.gas ?? void 0
  });
  return hash2;
}

// node_modules/@wagmi/core/dist/esm/actions/showCallsStatus.js
async function showCallsStatus2(config, parameters) {
  const { connector, id } = parameters;
  const client = await getConnectorClient(config, { connector });
  return showCallsStatus(client, { id });
}

// node_modules/@wagmi/core/dist/esm/actions/signMessage.js
async function signMessage2(config, parameters) {
  const { account, connector, ...rest } = parameters;
  let client;
  if (typeof account === "object" && account.type === "local")
    client = config.getClient();
  else
    client = await getConnectorClient(config, { account, connector });
  const action = getAction2(client, signMessage, "signMessage");
  return action({
    ...rest,
    ...account ? { account } : {}
  });
}

// node_modules/@wagmi/core/dist/esm/actions/signTransaction.js
async function signTransaction2(config, parameters) {
  const { account, chainId, connector, ...rest } = parameters;
  let client;
  if (typeof account === "object" && (account == null ? void 0 : account.type) === "local")
    client = config.getClient({ chainId });
  else
    client = await getConnectorClient(config, {
      account: account ?? void 0,
      assertChainId: false,
      chainId,
      connector
    });
  const chain2 = (() => {
    var _a;
    if (!chainId || ((_a = client.chain) == null ? void 0 : _a.id) === chainId)
      return client.chain;
    return { id: chainId };
  })();
  const action = getAction2(client, signTransaction, "signTransaction");
  const serializedTransaction = await action({
    ...rest,
    ...account ? { account } : {},
    assertChainId: !!chainId,
    chain: chain2,
    gas: rest.gas ?? void 0
  });
  return serializedTransaction;
}

// node_modules/@wagmi/core/dist/esm/actions/signTypedData.js
async function signTypedData2(config, parameters) {
  const { account, connector, ...rest } = parameters;
  let client;
  if (typeof account === "object" && account.type === "local")
    client = config.getClient();
  else
    client = await getConnectorClient(config, { account, connector });
  const action = getAction2(client, signTypedData, "signTypedData");
  return action({
    ...rest,
    ...account ? { account } : {}
  });
}

// node_modules/@wagmi/core/dist/esm/actions/simulateContract.js
async function simulateContract2(config, parameters) {
  const { abi: abi2, chainId, connector, ...rest } = parameters;
  let account;
  if (parameters.account)
    account = parameters.account;
  else {
    const connectorClient = await getConnectorClient(config, {
      assertChainId: false,
      chainId,
      connector
    });
    account = connectorClient.account;
  }
  const client = config.getClient({ chainId });
  const action = getAction2(client, simulateContract, "simulateContract");
  const { result, request } = await action({ ...rest, abi: abi2, account });
  return {
    chainId: client.chain.id,
    result,
    request: { ...request, chainId }
  };
}

// node_modules/@wagmi/core/dist/esm/errors/connector.js
var ProviderNotFoundError = class extends BaseError3 {
  constructor() {
    super("Provider not found.");
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "ProviderNotFoundError"
    });
  }
};
var SwitchChainNotSupportedError = class extends BaseError3 {
  constructor({ connector }) {
    super(`"${connector.name}" does not support programmatic chain switching.`);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "SwitchChainNotSupportedError"
    });
  }
};

// node_modules/@wagmi/core/dist/esm/actions/switchChain.js
async function switchChain2(config, parameters) {
  var _a;
  const { addEthereumChainParameter, chainId } = parameters;
  const connection = config.state.connections.get(((_a = parameters.connector) == null ? void 0 : _a.uid) ?? config.state.current);
  if (connection) {
    const connector = connection.connector;
    if (!connector.switchChain)
      throw new SwitchChainNotSupportedError({ connector });
    const chain3 = await connector.switchChain({
      addEthereumChainParameter,
      chainId
    });
    return chain3;
  }
  const chain2 = config.chains.find((x) => x.id === chainId);
  if (!chain2)
    throw new ChainNotConfiguredError();
  config.setState((x) => ({ ...x, chainId }));
  return chain2;
}

// node_modules/@wagmi/core/dist/esm/actions/switchConnection.js
async function switchConnection(config, parameters) {
  var _a;
  const { connector } = parameters;
  const connection = config.state.connections.get(connector.uid);
  if (!connection)
    throw new ConnectorNotConnectedError();
  await ((_a = config.storage) == null ? void 0 : _a.setItem("recentConnectorId", connector.id));
  config.setState((x) => ({
    ...x,
    current: connector.uid
  }));
  return {
    accounts: connection.accounts,
    chainId: connection.chainId
  };
}

// node_modules/@wagmi/core/dist/esm/actions/verifyMessage.js
async function verifyMessage3(config, parameters) {
  const { chainId, ...rest } = parameters;
  const client = config.getClient({ chainId });
  const action = getAction2(client, verifyMessage2, "verifyMessage");
  return action(rest);
}

// node_modules/@wagmi/core/dist/esm/actions/verifyTypedData.js
async function verifyTypedData3(config, parameters) {
  const { chainId, ...rest } = parameters;
  const client = config.getClient({ chainId });
  const action = getAction2(client, verifyTypedData2, "verifyTypedData");
  return action(rest);
}

// node_modules/@wagmi/core/dist/esm/actions/waitForCallsStatus.js
async function waitForCallsStatus2(config, parameters) {
  const { connector } = parameters;
  const client = await getConnectorClient(config, { connector });
  return waitForCallsStatus(client, parameters);
}

// node_modules/@wagmi/core/dist/esm/actions/waitForTransactionReceipt.js
async function waitForTransactionReceipt2(config, parameters) {
  const { chainId, timeout = 0, ...rest } = parameters;
  const client = config.getClient({ chainId });
  const action = getAction2(client, waitForTransactionReceipt, "waitForTransactionReceipt");
  const receipt = await action({ ...rest, timeout });
  if (receipt.status === "reverted") {
    throw await withTimeout(async () => {
      const action_getTransaction = getAction2(client, getTransaction, "getTransaction");
      const { from: account, ...txn } = await action_getTransaction({
        hash: receipt.transactionHash
      });
      const action_call = getAction2(client, call, "call");
      const code = await action_call({
        ...txn,
        account,
        data: txn.input,
        gasPrice: txn.type !== "eip1559" ? txn.gasPrice : void 0,
        maxFeePerGas: txn.type === "eip1559" ? txn.maxFeePerGas : void 0,
        maxPriorityFeePerGas: txn.type === "eip1559" ? txn.maxPriorityFeePerGas : void 0
      });
      const reason = (code == null ? void 0 : code.data) ? hexToString(`0x${code.data.substring(138)}`) : "unknown reason";
      return new Error(reason);
    }, {
      timeout: timeout > 0 ? Math.min(timeout, 1e4) : 1e4,
      errorInstance: new Error("unknown reason")
    });
  }
  return {
    ...receipt,
    chainId: client.chain.id
  };
}

// node_modules/@wagmi/core/dist/esm/actions/watchAsset.js
async function watchAsset2(config, parameters) {
  const { connector, ...rest } = parameters;
  const client = await getConnectorClient(config, { connector });
  const action = getAction2(client, watchAsset, "watchAsset");
  return action(rest);
}

// node_modules/@wagmi/core/dist/esm/actions/watchBlockNumber.js
function watchBlockNumber2(config, parameters) {
  const { syncConnectedChain = config._internal.syncConnectedChain, ...rest } = parameters;
  let unwatch;
  const listener = (chainId) => {
    if (unwatch)
      unwatch();
    const client = config.getClient({ chainId });
    const action = getAction2(client, watchBlockNumber, "watchBlockNumber");
    unwatch = action(rest);
    return unwatch;
  };
  const unlisten = listener(parameters.chainId);
  let unsubscribe;
  if (syncConnectedChain && !parameters.chainId)
    unsubscribe = config.subscribe(({ chainId }) => chainId, async (chainId) => listener(chainId));
  return () => {
    unlisten == null ? void 0 : unlisten();
    unsubscribe == null ? void 0 : unsubscribe();
  };
}

// node_modules/@wagmi/core/dist/esm/actions/watchBlocks.js
function watchBlocks2(config, parameters) {
  const { syncConnectedChain = config._internal.syncConnectedChain, ...rest } = parameters;
  let unwatch;
  const listener = (chainId) => {
    if (unwatch)
      unwatch();
    const client = config.getClient({ chainId });
    const action = getAction2(client, watchBlocks, "watchBlocks");
    unwatch = action(rest);
    return unwatch;
  };
  const unlisten = listener(parameters.chainId);
  let unsubscribe;
  if (syncConnectedChain && !parameters.chainId)
    unsubscribe = config.subscribe(({ chainId }) => chainId, async (chainId) => listener(chainId));
  return () => {
    unlisten == null ? void 0 : unlisten();
    unsubscribe == null ? void 0 : unsubscribe();
  };
}

// node_modules/@wagmi/core/dist/esm/actions/watchChainId.js
function watchChainId(config, parameters) {
  const { onChange } = parameters;
  return config.subscribe((state) => state.chainId, onChange);
}

// node_modules/@wagmi/core/dist/esm/actions/watchClient.js
function watchClient(config, parameters) {
  const { onChange } = parameters;
  return config.subscribe(() => getClient(config), onChange, {
    equalityFn(a, b) {
      return (a == null ? void 0 : a.uid) === (b == null ? void 0 : b.uid);
    }
  });
}

// node_modules/@wagmi/core/dist/esm/actions/watchConnection.js
function watchConnection(config, parameters) {
  const { onChange } = parameters;
  return config.subscribe(() => getConnection(config), onChange, {
    equalityFn(a, b) {
      const { connector: aConnector, ...aRest } = a;
      const { connector: bConnector, ...bRest } = b;
      return deepEqual(aRest, bRest) && // check connector separately
      (aConnector == null ? void 0 : aConnector.id) === (bConnector == null ? void 0 : bConnector.id) && (aConnector == null ? void 0 : aConnector.uid) === (bConnector == null ? void 0 : bConnector.uid);
    }
  });
}

// node_modules/@wagmi/core/dist/esm/actions/watchConnections.js
function watchConnections(config, parameters) {
  const { onChange } = parameters;
  return config.subscribe(() => getConnections(config), onChange, {
    equalityFn: deepEqual
  });
}

// node_modules/@wagmi/core/dist/esm/actions/watchConnectors.js
function watchConnectors(config, parameters) {
  const { onChange } = parameters;
  return config._internal.connectors.subscribe((connectors, prevConnectors) => {
    onChange(Object.values(connectors), prevConnectors);
  });
}

// node_modules/@wagmi/core/dist/esm/actions/watchContractEvent.js
function watchContractEvent2(config, parameters) {
  const { syncConnectedChain = config._internal.syncConnectedChain, ...rest } = parameters;
  let unwatch;
  const listener = (chainId) => {
    if (unwatch)
      unwatch();
    const client = config.getClient({ chainId });
    const action = getAction2(client, watchContractEvent, "watchContractEvent");
    unwatch = action(rest);
    return unwatch;
  };
  const unlisten = listener(parameters.chainId);
  let unsubscribe;
  if (syncConnectedChain && !parameters.chainId)
    unsubscribe = config.subscribe(({ chainId }) => chainId, async (chainId) => listener(chainId));
  return () => {
    unlisten == null ? void 0 : unlisten();
    unsubscribe == null ? void 0 : unsubscribe();
  };
}

// node_modules/@wagmi/core/dist/esm/actions/watchPendingTransactions.js
function watchPendingTransactions2(config, parameters) {
  const { syncConnectedChain = config._internal.syncConnectedChain, ...rest } = parameters;
  let unwatch;
  const listener = (chainId) => {
    if (unwatch)
      unwatch();
    const client = config.getClient({ chainId });
    const action = getAction2(client, watchPendingTransactions, "watchPendingTransactions");
    unwatch = action(rest);
    return unwatch;
  };
  const unlisten = listener(parameters.chainId);
  let unsubscribe;
  if (syncConnectedChain && !parameters.chainId)
    unsubscribe = config.subscribe(({ chainId }) => chainId, async (chainId) => listener(chainId));
  return () => {
    unlisten == null ? void 0 : unlisten();
    unsubscribe == null ? void 0 : unsubscribe();
  };
}

// node_modules/@wagmi/core/dist/esm/actions/watchPublicClient.js
function watchPublicClient(config, parameters) {
  const { onChange } = parameters;
  return config.subscribe(() => getPublicClient(config), onChange, {
    equalityFn(a, b) {
      return (a == null ? void 0 : a.uid) === (b == null ? void 0 : b.uid);
    }
  });
}

// node_modules/@wagmi/core/dist/esm/actions/writeContract.js
async function writeContract2(config, parameters) {
  const { account, chainId, connector, ...request } = parameters;
  let client;
  if (typeof account === "object" && (account == null ? void 0 : account.type) === "local")
    client = config.getClient({ chainId });
  else
    client = await getConnectorClient(config, {
      account: account ?? void 0,
      assertChainId: false,
      chainId,
      connector
    });
  const chain2 = (() => {
    var _a;
    if (!chainId || ((_a = client.chain) == null ? void 0 : _a.id) === chainId)
      return client.chain;
    return { id: chainId };
  })();
  const action = getAction2(client, writeContract, "writeContract");
  const hash2 = await action({
    ...request,
    ...account ? { account } : {},
    assertChainId: !!chainId,
    chain: chain2
  });
  return hash2;
}

// node_modules/@wagmi/core/dist/esm/actions/writeContractSync.js
async function writeContractSync2(config, parameters) {
  const { account, chainId, connector, ...request } = parameters;
  let client;
  if (typeof account === "object" && (account == null ? void 0 : account.type) === "local")
    client = config.getClient({ chainId });
  else
    client = await getConnectorClient(config, {
      account: account ?? void 0,
      assertChainId: false,
      chainId,
      connector
    });
  const chain2 = (() => {
    var _a;
    if (!chainId || ((_a = client.chain) == null ? void 0 : _a.id) === chainId)
      return client.chain;
    return { id: chainId };
  })();
  const action = getAction2(client, writeContractSync, "writeContractSync");
  const receipt = await action({
    ...request,
    ...account ? { account } : {},
    assertChainId: !!chainId,
    chain: chain2
  });
  return receipt;
}

// node_modules/@wagmi/core/dist/esm/connectors/createConnector.js
function createConnector(createConnectorFn) {
  return createConnectorFn;
}

// node_modules/@wagmi/core/dist/esm/connectors/injected.js
injected.type = "injected";
function injected(parameters = {}) {
  const { shimDisconnect = true, unstable_shimAsyncInject } = parameters;
  function getTarget() {
    const target = parameters.target;
    if (typeof target === "function") {
      const result = target();
      if (result)
        return result;
    }
    if (typeof target === "object")
      return target;
    if (typeof target === "string")
      return {
        ...targetMap[target] ?? {
          id: target,
          name: `${target[0].toUpperCase()}${target.slice(1)}`,
          provider: `is${target[0].toUpperCase()}${target.slice(1)}`
        }
      };
    return {
      id: "injected",
      name: "Injected",
      provider(window2) {
        return window2 == null ? void 0 : window2.ethereum;
      }
    };
  }
  let accountsChanged;
  let chainChanged;
  let connect2;
  let disconnect2;
  return createConnector((config) => ({
    get icon() {
      return getTarget().icon;
    },
    get id() {
      return getTarget().id;
    },
    get name() {
      return getTarget().name;
    },
    type: injected.type,
    async setup() {
      const provider = await this.getProvider();
      if ((provider == null ? void 0 : provider.on) && parameters.target) {
        if (!connect2) {
          connect2 = this.onConnect.bind(this);
          provider.on("connect", connect2);
        }
        if (!accountsChanged) {
          accountsChanged = this.onAccountsChanged.bind(this);
          provider.on("accountsChanged", accountsChanged);
        }
      }
    },
    async connect({ chainId, isReconnecting, withCapabilities } = {}) {
      var _a, _b, _c, _d, _e, _f;
      const provider = await this.getProvider();
      if (!provider)
        throw new ProviderNotFoundError();
      let accounts = [];
      if (isReconnecting)
        accounts = await this.getAccounts().catch(() => []);
      else if (shimDisconnect) {
        try {
          const permissions = await provider.request({
            method: "wallet_requestPermissions",
            params: [{ eth_accounts: {} }]
          });
          accounts = (_d = (_c = (_b = (_a = permissions[0]) == null ? void 0 : _a.caveats) == null ? void 0 : _b[0]) == null ? void 0 : _c.value) == null ? void 0 : _d.map((x) => getAddress(x));
          if (accounts.length > 0) {
            const sortedAccounts = await this.getAccounts();
            accounts = sortedAccounts;
          }
        } catch (err) {
          const error = err;
          if (error.code === UserRejectedRequestError.code)
            throw new UserRejectedRequestError(error);
          if (error.code === ResourceUnavailableRpcError.code)
            throw error;
        }
      }
      try {
        if (!(accounts == null ? void 0 : accounts.length) && !isReconnecting) {
          const requestedAccounts = await provider.request({
            method: "eth_requestAccounts"
          });
          accounts = requestedAccounts.map((x) => getAddress(x));
        }
        if (connect2) {
          provider.removeListener("connect", connect2);
          connect2 = void 0;
        }
        if (!accountsChanged) {
          accountsChanged = this.onAccountsChanged.bind(this);
          provider.on("accountsChanged", accountsChanged);
        }
        if (!chainChanged) {
          chainChanged = this.onChainChanged.bind(this);
          provider.on("chainChanged", chainChanged);
        }
        if (!disconnect2) {
          disconnect2 = this.onDisconnect.bind(this);
          provider.on("disconnect", disconnect2);
        }
        let currentChainId = await this.getChainId();
        if (chainId && currentChainId !== chainId) {
          const chain2 = await this.switchChain({ chainId }).catch((error) => {
            if (error.code === UserRejectedRequestError.code)
              throw error;
            return { id: currentChainId };
          });
          currentChainId = (chain2 == null ? void 0 : chain2.id) ?? currentChainId;
        }
        if (shimDisconnect)
          await ((_e = config.storage) == null ? void 0 : _e.removeItem(`${this.id}.disconnected`));
        if (!parameters.target)
          await ((_f = config.storage) == null ? void 0 : _f.setItem("injected.connected", true));
        return {
          accounts: withCapabilities ? accounts.map((address) => ({ address, capabilities: {} })) : accounts,
          chainId: currentChainId
        };
      } catch (err) {
        const error = err;
        if (error.code === UserRejectedRequestError.code)
          throw new UserRejectedRequestError(error);
        if (error.code === ResourceUnavailableRpcError.code)
          throw new ResourceUnavailableRpcError(error);
        throw error;
      }
    },
    async disconnect() {
      var _a, _b;
      const provider = await this.getProvider();
      if (!provider)
        throw new ProviderNotFoundError();
      if (chainChanged) {
        provider.removeListener("chainChanged", chainChanged);
        chainChanged = void 0;
      }
      if (disconnect2) {
        provider.removeListener("disconnect", disconnect2);
        disconnect2 = void 0;
      }
      if (!connect2) {
        connect2 = this.onConnect.bind(this);
        provider.on("connect", connect2);
      }
      try {
        await withTimeout(() => (
          // TODO: Remove explicit type for viem@3
          provider.request({
            // `'wallet_revokePermissions'` added in `viem@2.10.3`
            method: "wallet_revokePermissions",
            params: [{ eth_accounts: {} }]
          })
        ), { timeout: 100 });
      } catch {
      }
      if (shimDisconnect) {
        await ((_a = config.storage) == null ? void 0 : _a.setItem(`${this.id}.disconnected`, true));
      }
      if (!parameters.target)
        await ((_b = config.storage) == null ? void 0 : _b.removeItem("injected.connected"));
    },
    async getAccounts() {
      const provider = await this.getProvider();
      if (!provider)
        throw new ProviderNotFoundError();
      const accounts = await provider.request({ method: "eth_accounts" });
      return accounts.map((x) => getAddress(x));
    },
    async getChainId() {
      const provider = await this.getProvider();
      if (!provider)
        throw new ProviderNotFoundError();
      const hexChainId = await provider.request({ method: "eth_chainId" });
      return Number(hexChainId);
    },
    async getProvider() {
      if (typeof window === "undefined")
        return void 0;
      let provider;
      const target = getTarget();
      if (typeof target.provider === "function")
        provider = target.provider(window);
      else if (typeof target.provider === "string")
        provider = findProvider(window, target.provider);
      else
        provider = target.provider;
      if (provider && !provider.removeListener) {
        if ("off" in provider && typeof provider.off === "function")
          provider.removeListener = provider.off;
        else
          provider.removeListener = () => {
          };
      }
      return provider;
    },
    async isAuthorized() {
      var _a, _b;
      try {
        const isDisconnected = shimDisconnect && // If shim exists in storage, connector is disconnected
        await ((_a = config.storage) == null ? void 0 : _a.getItem(`${this.id}.disconnected`));
        if (isDisconnected)
          return false;
        if (!parameters.target) {
          const connected = await ((_b = config.storage) == null ? void 0 : _b.getItem("injected.connected"));
          if (!connected)
            return false;
        }
        const provider = await this.getProvider();
        if (!provider) {
          if (unstable_shimAsyncInject !== void 0 && unstable_shimAsyncInject !== false) {
            const handleEthereum = async () => {
              if (typeof window !== "undefined")
                window.removeEventListener("ethereum#initialized", handleEthereum);
              const provider2 = await this.getProvider();
              return !!provider2;
            };
            const timeout = typeof unstable_shimAsyncInject === "number" ? unstable_shimAsyncInject : 1e3;
            const res = await Promise.race([
              ...typeof window !== "undefined" ? [
                new Promise((resolve) => window.addEventListener("ethereum#initialized", () => resolve(handleEthereum()), { once: true }))
              ] : [],
              new Promise((resolve) => setTimeout(() => resolve(handleEthereum()), timeout))
            ]);
            if (res)
              return true;
          }
          throw new ProviderNotFoundError();
        }
        const accounts = await withRetry(() => this.getAccounts());
        return !!accounts.length;
      } catch {
        return false;
      }
    },
    async switchChain({ addEthereumChainParameter, chainId }) {
      var _a, _b, _c, _d;
      const provider = await this.getProvider();
      if (!provider)
        throw new ProviderNotFoundError();
      const chain2 = config.chains.find((x) => x.id === chainId);
      if (!chain2)
        throw new SwitchChainError(new ChainNotConfiguredError());
      const promise = new Promise((resolve) => {
        const listener = (data) => {
          if ("chainId" in data && data.chainId === chainId) {
            config.emitter.off("change", listener);
            resolve();
          }
        };
        config.emitter.on("change", listener);
      });
      try {
        await Promise.all([
          provider.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: numberToHex(chainId) }]
          }).then(async () => {
            const currentChainId = await this.getChainId();
            if (currentChainId === chainId)
              config.emitter.emit("change", { chainId });
          }),
          promise
        ]);
        return chain2;
      } catch (err) {
        const error = err;
        if (error.code === 4902 || // Unwrapping for MetaMask Mobile
        // https://github.com/MetaMask/metamask-mobile/issues/2944#issuecomment-976988719
        ((_b = (_a = error == null ? void 0 : error.data) == null ? void 0 : _a.originalError) == null ? void 0 : _b.code) === 4902) {
          try {
            const { default: blockExplorer, ...blockExplorers } = chain2.blockExplorers ?? {};
            let blockExplorerUrls;
            if (addEthereumChainParameter == null ? void 0 : addEthereumChainParameter.blockExplorerUrls)
              blockExplorerUrls = addEthereumChainParameter.blockExplorerUrls;
            else if (blockExplorer)
              blockExplorerUrls = [
                blockExplorer.url,
                ...Object.values(blockExplorers).map((x) => x.url)
              ];
            let rpcUrls;
            if ((_c = addEthereumChainParameter == null ? void 0 : addEthereumChainParameter.rpcUrls) == null ? void 0 : _c.length)
              rpcUrls = addEthereumChainParameter.rpcUrls;
            else
              rpcUrls = [((_d = chain2.rpcUrls.default) == null ? void 0 : _d.http[0]) ?? ""];
            const addEthereumChain = {
              blockExplorerUrls,
              chainId: numberToHex(chainId),
              chainName: (addEthereumChainParameter == null ? void 0 : addEthereumChainParameter.chainName) ?? chain2.name,
              iconUrls: addEthereumChainParameter == null ? void 0 : addEthereumChainParameter.iconUrls,
              nativeCurrency: (addEthereumChainParameter == null ? void 0 : addEthereumChainParameter.nativeCurrency) ?? chain2.nativeCurrency,
              rpcUrls
            };
            await Promise.all([
              provider.request({
                method: "wallet_addEthereumChain",
                params: [addEthereumChain]
              }).then(async () => {
                const currentChainId = await this.getChainId();
                if (currentChainId === chainId)
                  config.emitter.emit("change", { chainId });
                else
                  throw new UserRejectedRequestError(new Error("User rejected switch after adding network."));
              }),
              promise
            ]);
            return chain2;
          } catch (error2) {
            throw new UserRejectedRequestError(error2);
          }
        }
        if (error.code === UserRejectedRequestError.code)
          throw new UserRejectedRequestError(error);
        throw new SwitchChainError(error);
      }
    },
    async onAccountsChanged(accounts) {
      var _a;
      if (accounts.length === 0)
        this.onDisconnect();
      else if (config.emitter.listenerCount("connect")) {
        const chainId = (await this.getChainId()).toString();
        this.onConnect({ chainId });
        if (shimDisconnect)
          await ((_a = config.storage) == null ? void 0 : _a.removeItem(`${this.id}.disconnected`));
      } else
        config.emitter.emit("change", {
          accounts: accounts.map((x) => getAddress(x))
        });
    },
    onChainChanged(chain2) {
      const chainId = Number(chain2);
      config.emitter.emit("change", { chainId });
    },
    async onConnect(connectInfo) {
      const accounts = await this.getAccounts();
      if (accounts.length === 0)
        return;
      const chainId = Number(connectInfo.chainId);
      config.emitter.emit("connect", { accounts, chainId });
      const provider = await this.getProvider();
      if (provider) {
        if (connect2) {
          provider.removeListener("connect", connect2);
          connect2 = void 0;
        }
        if (!accountsChanged) {
          accountsChanged = this.onAccountsChanged.bind(this);
          provider.on("accountsChanged", accountsChanged);
        }
        if (!chainChanged) {
          chainChanged = this.onChainChanged.bind(this);
          provider.on("chainChanged", chainChanged);
        }
        if (!disconnect2) {
          disconnect2 = this.onDisconnect.bind(this);
          provider.on("disconnect", disconnect2);
        }
      }
    },
    async onDisconnect(error) {
      const provider = await this.getProvider();
      if (error && error.code === 1013) {
        if (provider && !!(await this.getAccounts()).length)
          return;
      }
      config.emitter.emit("disconnect");
      if (provider) {
        if (chainChanged) {
          provider.removeListener("chainChanged", chainChanged);
          chainChanged = void 0;
        }
        if (disconnect2) {
          provider.removeListener("disconnect", disconnect2);
          disconnect2 = void 0;
        }
        if (!connect2) {
          connect2 = this.onConnect.bind(this);
          provider.on("connect", connect2);
        }
      }
    }
  }));
}
var targetMap = {
  coinbaseWallet: {
    id: "coinbaseWallet",
    name: "Coinbase Wallet",
    provider(window2) {
      if (window2 == null ? void 0 : window2.coinbaseWalletExtension)
        return window2.coinbaseWalletExtension;
      return findProvider(window2, "isCoinbaseWallet");
    }
  },
  metaMask: {
    id: "metaMask",
    name: "MetaMask",
    provider(window2) {
      return findProvider(window2, (provider) => {
        if (!provider.isMetaMask)
          return false;
        if (provider.isBraveWallet && !provider._events && !provider._state)
          return false;
        const flags = [
          "isApexWallet",
          "isAvalanche",
          "isBitKeep",
          "isBlockWallet",
          "isKuCoinWallet",
          "isMathWallet",
          "isOkxWallet",
          "isOKExWallet",
          "isOneInchIOSWallet",
          "isOneInchAndroidWallet",
          "isOpera",
          "isPhantom",
          "isPortal",
          "isRabby",
          "isTokenPocket",
          "isTokenary",
          "isUniswapWallet",
          "isZerion"
        ];
        for (const flag of flags)
          if (provider[flag])
            return false;
        return true;
      });
    }
  },
  phantom: {
    id: "phantom",
    name: "Phantom",
    provider(window2) {
      var _a, _b;
      if ((_a = window2 == null ? void 0 : window2.phantom) == null ? void 0 : _a.ethereum)
        return (_b = window2.phantom) == null ? void 0 : _b.ethereum;
      return findProvider(window2, "isPhantom");
    }
  }
};
function findProvider(window2, select) {
  function isProvider(provider) {
    if (typeof select === "function")
      return select(provider);
    if (typeof select === "string")
      return provider[select];
    return true;
  }
  const ethereum = window2.ethereum;
  if (ethereum == null ? void 0 : ethereum.providers)
    return ethereum.providers.find((provider) => isProvider(provider));
  if (ethereum && isProvider(ethereum))
    return ethereum;
  return void 0;
}

// node_modules/@wagmi/core/dist/esm/connectors/mock.js
mock.type = "mock";
function mock(parameters) {
  const transactionCache = /* @__PURE__ */ new Map();
  const features = parameters.features ?? { defaultConnected: false };
  let connected = features.defaultConnected;
  let connectedChainId;
  return createConnector((config) => ({
    id: "mock",
    name: "Mock Connector",
    type: mock.type,
    async setup() {
      connectedChainId = config.chains[0].id;
    },
    async connect({ chainId, withCapabilities } = {}) {
      if (features.connectError) {
        if (typeof features.connectError === "boolean")
          throw new UserRejectedRequestError(new Error("Failed to connect."));
        throw features.connectError;
      }
      const provider = await this.getProvider();
      const accounts = await provider.request({
        method: "eth_requestAccounts"
      });
      let currentChainId = await this.getChainId();
      if (chainId && currentChainId !== chainId) {
        const chain2 = await this.switchChain({ chainId });
        currentChainId = chain2.id;
      }
      connected = true;
      return {
        accounts: withCapabilities ? accounts.map((x) => ({
          address: getAddress(x),
          capabilities: { foo: { bar: x } }
        })) : accounts.map((x) => getAddress(x)),
        chainId: currentChainId
      };
    },
    async disconnect() {
      connected = false;
    },
    async getAccounts() {
      if (!connected)
        throw new ConnectorNotConnectedError();
      const provider = await this.getProvider();
      const accounts = await provider.request({ method: "eth_accounts" });
      return accounts.map((x) => getAddress(x));
    },
    async getChainId() {
      const provider = await this.getProvider();
      const hexChainId = await provider.request({ method: "eth_chainId" });
      return fromHex(hexChainId, "number");
    },
    async isAuthorized() {
      if (!features.reconnect)
        return false;
      if (!connected)
        return false;
      const accounts = await this.getAccounts();
      return !!accounts.length;
    },
    async switchChain({ chainId }) {
      const provider = await this.getProvider();
      const chain2 = config.chains.find((x) => x.id === chainId);
      if (!chain2)
        throw new SwitchChainError(new ChainNotConfiguredError());
      await provider.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: numberToHex(chainId) }]
      });
      return chain2;
    },
    onAccountsChanged(accounts) {
      if (accounts.length === 0)
        this.onDisconnect();
      else
        config.emitter.emit("change", {
          accounts: accounts.map((x) => getAddress(x))
        });
    },
    onChainChanged(chain2) {
      const chainId = Number(chain2);
      config.emitter.emit("change", { chainId });
    },
    async onDisconnect(_error) {
      config.emitter.emit("disconnect");
      connected = false;
    },
    async getProvider({ chainId } = {}) {
      const chain2 = config.chains.find((x) => x.id === chainId) ?? config.chains[0];
      const url = chain2.rpcUrls.default.http[0];
      const request = async ({ method, params }) => {
        if (method === "eth_chainId")
          return numberToHex(connectedChainId);
        if (method === "eth_accounts")
          return parameters.accounts;
        if (method === "eth_requestAccounts")
          return parameters.accounts;
        if (method === "eth_signTypedData_v4") {
          if (features.signTypedDataError) {
            if (typeof features.signTypedDataError === "boolean")
              throw new UserRejectedRequestError(new Error("Failed to sign typed data."));
            throw features.signTypedDataError;
          }
        }
        if (method === "wallet_switchEthereumChain") {
          if (features.switchChainError) {
            if (typeof features.switchChainError === "boolean")
              throw new UserRejectedRequestError(new Error("Failed to switch chain."));
            throw features.switchChainError;
          }
          connectedChainId = fromHex(params[0].chainId, "number");
          this.onChainChanged(connectedChainId.toString());
          return;
        }
        if (method === "wallet_watchAsset") {
          if (features.watchAssetError) {
            if (typeof features.watchAssetError === "boolean")
              throw new UserRejectedRequestError(new Error("Failed to switch chain."));
            throw features.watchAssetError;
          }
          return connected;
        }
        if (method === "wallet_getCapabilities")
          return {
            "0x2105": {
              paymasterService: {
                supported: params[0] === "0x95132632579b073D12a6673e18Ab05777a6B86f8"
              },
              sessionKeys: {
                supported: true
              }
            },
            "0x14A34": {
              paymasterService: {
                supported: params[0] === "0x95132632579b073D12a6673e18Ab05777a6B86f8"
              }
            }
          };
        if (method === "wallet_sendCalls") {
          const hashes = [];
          const calls = params[0].calls;
          const from16 = params[0].from;
          for (const call3 of calls) {
            const { result: result2, error: error2 } = await rpc.http(url, {
              body: {
                method: "eth_sendTransaction",
                params: [
                  {
                    ...call3,
                    ...typeof from16 !== "undefined" ? { from: from16 } : {}
                  }
                ]
              }
            });
            if (error2)
              throw new RpcRequestError({
                body: { method, params },
                error: error2,
                url
              });
            hashes.push(result2);
          }
          const id = keccak256(stringToHex(JSON.stringify(calls)));
          transactionCache.set(id, hashes);
          return { id };
        }
        if (method === "wallet_getCallsStatus") {
          const hashes = transactionCache.get(params[0]);
          if (!hashes)
            return {
              atomic: false,
              chainId: "0x1",
              id: params[0],
              status: 100,
              receipts: [],
              version: "2.0.0"
            };
          const receipts = await Promise.all(hashes.map(async (hash2) => {
            const { result: result2, error: error2 } = await rpc.http(url, {
              body: {
                method: "eth_getTransactionReceipt",
                params: [hash2],
                id: 0
              }
            });
            if (error2)
              throw new RpcRequestError({
                body: { method, params },
                error: error2,
                url
              });
            if (!result2)
              return null;
            return {
              blockHash: result2.blockHash,
              blockNumber: result2.blockNumber,
              gasUsed: result2.gasUsed,
              logs: result2.logs,
              status: result2.status,
              transactionHash: result2.transactionHash
            };
          }));
          const receipts_ = receipts.filter((x) => x !== null);
          if (receipts_.length === 0)
            return {
              atomic: false,
              chainId: "0x1",
              id: params[0],
              status: 100,
              receipts: [],
              version: "2.0.0"
            };
          return {
            atomic: false,
            chainId: "0x1",
            id: params[0],
            status: 200,
            receipts: receipts_,
            version: "2.0.0"
          };
        }
        if (method === "wallet_showCallsStatus")
          return;
        if (method === "personal_sign") {
          if (features.signMessageError) {
            if (typeof features.signMessageError === "boolean")
              throw new UserRejectedRequestError(new Error("Failed to sign message."));
            throw features.signMessageError;
          }
          method = "eth_sign";
          params = [params[1], params[0]];
        }
        const body = { method, params };
        const { error, result } = await rpc.http(url, { body });
        if (error)
          throw new RpcRequestError({ body, error, url });
        return result;
      };
      return custom({ request })({ retryCount: 0 });
    }
  }));
}

// node_modules/mipd/dist/esm/utils.js
function requestProviders(listener) {
  if (typeof window === "undefined")
    return;
  const handler = (event) => listener(event.detail);
  window.addEventListener("eip6963:announceProvider", handler);
  window.dispatchEvent(new CustomEvent("eip6963:requestProvider"));
  return () => window.removeEventListener("eip6963:announceProvider", handler);
}

// node_modules/mipd/dist/esm/store.js
function createStore() {
  const listeners = /* @__PURE__ */ new Set();
  let providerDetails = [];
  const request = () => requestProviders((providerDetail) => {
    if (providerDetails.some(({ info }) => info.uuid === providerDetail.info.uuid))
      return;
    providerDetails = [...providerDetails, providerDetail];
    listeners.forEach((listener) => listener(providerDetails, { added: [providerDetail] }));
  });
  let unwatch = request();
  return {
    _listeners() {
      return listeners;
    },
    clear() {
      listeners.forEach((listener) => listener([], { removed: [...providerDetails] }));
      providerDetails = [];
    },
    destroy() {
      this.clear();
      listeners.clear();
      unwatch == null ? void 0 : unwatch();
    },
    findProvider({ rdns }) {
      return providerDetails.find((providerDetail) => providerDetail.info.rdns === rdns);
    },
    getProviders() {
      return providerDetails;
    },
    reset() {
      this.clear();
      unwatch == null ? void 0 : unwatch();
      unwatch = request();
    },
    subscribe(listener, { emitImmediately } = {}) {
      listeners.add(listener);
      if (emitImmediately)
        listener(providerDetails, { added: providerDetails });
      return () => listeners.delete(listener);
    }
  };
}

// node_modules/zustand/esm/middleware.mjs
var subscribeWithSelectorImpl = (fn) => (set, get, api) => {
  const origSubscribe = api.subscribe;
  api.subscribe = (selector, optListener, options) => {
    let listener = selector;
    if (optListener) {
      const equalityFn = (options == null ? void 0 : options.equalityFn) || Object.is;
      let currentSlice = selector(api.getState());
      listener = (state) => {
        const nextSlice = selector(state);
        if (!equalityFn(currentSlice, nextSlice)) {
          const previousSlice = currentSlice;
          optListener(currentSlice = nextSlice, previousSlice);
        }
      };
      if (options == null ? void 0 : options.fireImmediately) {
        optListener(currentSlice, currentSlice);
      }
    }
    return origSubscribe(listener);
  };
  const initialState = fn(set, get, api);
  return initialState;
};
var subscribeWithSelector = subscribeWithSelectorImpl;
function createJSONStorage(getStorage, options) {
  let storage;
  try {
    storage = getStorage();
  } catch (e) {
    return;
  }
  const persistStorage = {
    getItem: (name) => {
      var _a;
      const parse = (str2) => {
        if (str2 === null) {
          return null;
        }
        return JSON.parse(str2, options == null ? void 0 : options.reviver);
      };
      const str = (_a = storage.getItem(name)) != null ? _a : null;
      if (str instanceof Promise) {
        return str.then(parse);
      }
      return parse(str);
    },
    setItem: (name, newValue) => storage.setItem(
      name,
      JSON.stringify(newValue, options == null ? void 0 : options.replacer)
    ),
    removeItem: (name) => storage.removeItem(name)
  };
  return persistStorage;
}
var toThenable = (fn) => (input) => {
  try {
    const result = fn(input);
    if (result instanceof Promise) {
      return result;
    }
    return {
      then(onFulfilled) {
        return toThenable(onFulfilled)(result);
      },
      catch(_onRejected) {
        return this;
      }
    };
  } catch (e) {
    return {
      then(_onFulfilled) {
        return this;
      },
      catch(onRejected) {
        return toThenable(onRejected)(e);
      }
    };
  }
};
var persistImpl = (config, baseOptions) => (set, get, api) => {
  let options = {
    storage: createJSONStorage(() => localStorage),
    partialize: (state) => state,
    version: 0,
    merge: (persistedState, currentState) => ({
      ...currentState,
      ...persistedState
    }),
    ...baseOptions
  };
  let hasHydrated = false;
  const hydrationListeners = /* @__PURE__ */ new Set();
  const finishHydrationListeners = /* @__PURE__ */ new Set();
  let storage = options.storage;
  if (!storage) {
    return config(
      (...args) => {
        console.warn(
          `[zustand persist middleware] Unable to update item '${options.name}', the given storage is currently unavailable.`
        );
        set(...args);
      },
      get,
      api
    );
  }
  const setItem = () => {
    const state = options.partialize({ ...get() });
    return storage.setItem(options.name, {
      state,
      version: options.version
    });
  };
  const savedSetState = api.setState;
  api.setState = (state, replace) => {
    savedSetState(state, replace);
    void setItem();
  };
  const configResult = config(
    (...args) => {
      set(...args);
      void setItem();
    },
    get,
    api
  );
  api.getInitialState = () => configResult;
  let stateFromStorage;
  const hydrate2 = () => {
    var _a, _b;
    if (!storage) return;
    hasHydrated = false;
    hydrationListeners.forEach((cb) => {
      var _a2;
      return cb((_a2 = get()) != null ? _a2 : configResult);
    });
    const postRehydrationCallback = ((_b = options.onRehydrateStorage) == null ? void 0 : _b.call(options, (_a = get()) != null ? _a : configResult)) || void 0;
    return toThenable(storage.getItem.bind(storage))(options.name).then((deserializedStorageValue) => {
      if (deserializedStorageValue) {
        if (typeof deserializedStorageValue.version === "number" && deserializedStorageValue.version !== options.version) {
          if (options.migrate) {
            return [
              true,
              options.migrate(
                deserializedStorageValue.state,
                deserializedStorageValue.version
              )
            ];
          }
          console.error(
            `State loaded from storage couldn't be migrated since no migrate function was provided`
          );
        } else {
          return [false, deserializedStorageValue.state];
        }
      }
      return [false, void 0];
    }).then((migrationResult) => {
      var _a2;
      const [migrated, migratedState] = migrationResult;
      stateFromStorage = options.merge(
        migratedState,
        (_a2 = get()) != null ? _a2 : configResult
      );
      set(stateFromStorage, true);
      if (migrated) {
        return setItem();
      }
    }).then(() => {
      postRehydrationCallback == null ? void 0 : postRehydrationCallback(stateFromStorage, void 0);
      stateFromStorage = get();
      hasHydrated = true;
      finishHydrationListeners.forEach((cb) => cb(stateFromStorage));
    }).catch((e) => {
      postRehydrationCallback == null ? void 0 : postRehydrationCallback(void 0, e);
    });
  };
  api.persist = {
    setOptions: (newOptions) => {
      options = {
        ...options,
        ...newOptions
      };
      if (newOptions.storage) {
        storage = newOptions.storage;
      }
    },
    clearStorage: () => {
      storage == null ? void 0 : storage.removeItem(options.name);
    },
    getOptions: () => options,
    rehydrate: () => hydrate2(),
    hasHydrated: () => hasHydrated,
    onHydrate: (cb) => {
      hydrationListeners.add(cb);
      return () => {
        hydrationListeners.delete(cb);
      };
    },
    onFinishHydration: (cb) => {
      finishHydrationListeners.add(cb);
      return () => {
        finishHydrationListeners.delete(cb);
      };
    }
  };
  if (!options.skipHydration) {
    hydrate2();
  }
  return stateFromStorage || configResult;
};
var persist = persistImpl;

// node_modules/zustand/esm/vanilla.mjs
var createStoreImpl = (createState) => {
  let state;
  const listeners = /* @__PURE__ */ new Set();
  const setState = (partial, replace) => {
    const nextState = typeof partial === "function" ? partial(state) : partial;
    if (!Object.is(nextState, state)) {
      const previousState = state;
      state = (replace != null ? replace : typeof nextState !== "object" || nextState === null) ? nextState : Object.assign({}, state, nextState);
      listeners.forEach((listener) => listener(state, previousState));
    }
  };
  const getState = () => state;
  const getInitialState = () => initialState;
  const subscribe = (listener) => {
    listeners.add(listener);
    return () => listeners.delete(listener);
  };
  const api = { setState, getState, getInitialState, subscribe };
  const initialState = state = createState(setState, getState, api);
  return api;
};
var createStore2 = (createState) => createState ? createStoreImpl(createState) : createStoreImpl;

// node_modules/eventemitter3/index.mjs
var import_index = __toESM(require_eventemitter3(), 1);

// node_modules/@wagmi/core/dist/esm/createEmitter.js
var Emitter = class {
  constructor(uid3) {
    Object.defineProperty(this, "uid", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: uid3
    });
    Object.defineProperty(this, "_emitter", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: new import_index.default()
    });
  }
  on(eventName, fn) {
    this._emitter.on(eventName, fn);
  }
  once(eventName, fn) {
    this._emitter.once(eventName, fn);
  }
  off(eventName, fn) {
    this._emitter.off(eventName, fn);
  }
  emit(eventName, ...params) {
    const data = params[0];
    this._emitter.emit(eventName, { uid: this.uid, ...data });
  }
  listenerCount(eventName) {
    return this._emitter.listenerCount(eventName);
  }
};
function createEmitter(uid3) {
  return new Emitter(uid3);
}

// node_modules/@wagmi/core/dist/esm/utils/deserialize.js
function deserialize(value, reviver) {
  return JSON.parse(value, (key, value_) => {
    let value2 = value_;
    if ((value2 == null ? void 0 : value2.__type) === "bigint")
      value2 = BigInt(value2.value);
    if ((value2 == null ? void 0 : value2.__type) === "Map")
      value2 = new Map(value2.value);
    return (reviver == null ? void 0 : reviver(key, value2)) ?? value2;
  });
}

// node_modules/@wagmi/core/dist/esm/utils/serialize.js
function getReferenceKey(keys, cutoff) {
  return keys.slice(0, cutoff).join(".") || ".";
}
function getCutoff(array, value) {
  const { length } = array;
  for (let index3 = 0; index3 < length; ++index3) {
    if (array[index3] === value) {
      return index3 + 1;
    }
  }
  return 0;
}
function createReplacer(replacer, circularReplacer) {
  const hasReplacer = typeof replacer === "function";
  const hasCircularReplacer = typeof circularReplacer === "function";
  const cache = [];
  const keys = [];
  return function replace(key, value) {
    if (typeof value === "object") {
      if (cache.length) {
        const thisCutoff = getCutoff(cache, this);
        if (thisCutoff === 0) {
          cache[cache.length] = this;
        } else {
          cache.splice(thisCutoff);
          keys.splice(thisCutoff);
        }
        keys[keys.length] = key;
        const valueCutoff = getCutoff(cache, value);
        if (valueCutoff !== 0) {
          return hasCircularReplacer ? circularReplacer.call(this, key, value, getReferenceKey(keys, valueCutoff)) : `[ref=${getReferenceKey(keys, valueCutoff)}]`;
        }
      } else {
        cache[0] = value;
        keys[0] = key;
      }
    }
    return hasReplacer ? replacer.call(this, key, value) : value;
  };
}
function serialize(value, replacer, indent, circularReplacer) {
  return JSON.stringify(value, createReplacer((key, value_) => {
    let value2 = value_;
    if (typeof value2 === "bigint")
      value2 = { __type: "bigint", value: value_.toString() };
    if (value2 instanceof Map)
      value2 = { __type: "Map", value: Array.from(value_.entries()) };
    return (replacer == null ? void 0 : replacer(key, value2)) ?? value2;
  }, circularReplacer), indent ?? void 0);
}

// node_modules/@wagmi/core/dist/esm/createStorage.js
function createStorage(parameters) {
  const { deserialize: deserialize2 = deserialize, key: prefix = "wagmi", serialize: serialize2 = serialize, storage = noopStorage } = parameters;
  function unwrap3(value) {
    if (value instanceof Promise)
      return value.then((x) => x).catch(() => null);
    return value;
  }
  return {
    ...storage,
    key: prefix,
    async getItem(key, defaultValue) {
      const value = storage.getItem(`${prefix}.${key}`);
      const unwrapped = await unwrap3(value);
      if (unwrapped)
        return deserialize2(unwrapped) ?? null;
      return defaultValue ?? null;
    },
    async setItem(key, value) {
      const storageKey = `${prefix}.${key}`;
      if (value === null)
        await unwrap3(storage.removeItem(storageKey));
      else
        await unwrap3(storage.setItem(storageKey, serialize2(value)));
    },
    async removeItem(key) {
      await unwrap3(storage.removeItem(`${prefix}.${key}`));
    }
  };
}
var noopStorage = {
  getItem: () => null,
  setItem: () => {
  },
  removeItem: () => {
  }
};
function getDefaultStorage() {
  const storage = (() => {
    if (typeof window !== "undefined" && window.localStorage)
      return window.localStorage;
    return noopStorage;
  })();
  return {
    getItem(key) {
      return storage.getItem(key);
    },
    removeItem(key) {
      storage.removeItem(key);
    },
    setItem(key, value) {
      try {
        storage.setItem(key, value);
      } catch {
      }
    }
  };
}

// node_modules/@wagmi/core/dist/esm/utils/uid.js
var size5 = 256;
var index2 = size5;
var buffer2;
function uid2(length = 11) {
  if (!buffer2 || index2 + length > size5 * 2) {
    buffer2 = "";
    index2 = 0;
    for (let i = 0; i < size5; i++) {
      buffer2 += (256 + Math.random() * 256 | 0).toString(16).substring(1);
    }
  }
  return buffer2.substring(index2, index2++ + length);
}

// node_modules/@wagmi/core/dist/esm/createConfig.js
function createConfig(parameters) {
  const { multiInjectedProviderDiscovery = true, storage = createStorage({
    storage: getDefaultStorage()
  }), syncConnectedChain = true, ssr = false, ...rest } = parameters;
  const mipd = typeof window !== "undefined" && multiInjectedProviderDiscovery ? createStore() : void 0;
  const chains = createStore2(() => rest.chains);
  const connectors = createStore2(() => {
    const collection = [];
    const rdnsSet = /* @__PURE__ */ new Set();
    for (const connectorFns of rest.connectors ?? []) {
      const connector = setup(connectorFns);
      collection.push(connector);
      if (!ssr && connector.rdns) {
        const rdnsValues = typeof connector.rdns === "string" ? [connector.rdns] : connector.rdns;
        for (const rdns of rdnsValues) {
          rdnsSet.add(rdns);
        }
      }
    }
    if (!ssr && mipd) {
      const providers = mipd.getProviders();
      for (const provider of providers) {
        if (rdnsSet.has(provider.info.rdns))
          continue;
        collection.push(setup(providerDetailToConnector(provider)));
      }
    }
    return collection;
  });
  function setup(connectorFn) {
    var _a;
    const emitter = createEmitter(uid2());
    let rdns;
    const connector = {
      ...connectorFn({
        emitter,
        chains: chains.getState(),
        get providers() {
          if (!mipd || !rdns)
            return [];
          const rdnsValues = typeof rdns === "string" ? [rdns] : rdns;
          const providers = mipd.getProviders();
          return rdnsValues.flatMap((rdns2) => providers.filter((provider) => provider.info.rdns === rdns2));
        },
        storage,
        transports: rest.transports
      }),
      emitter,
      uid: emitter.uid
    };
    rdns = connector.rdns;
    emitter.on("connect", connect2);
    (_a = connector.setup) == null ? void 0 : _a.call(connector);
    return connector;
  }
  function providerDetailToConnector(providerDetail) {
    const { info } = providerDetail;
    const provider = providerDetail.provider;
    return injected({ target: { ...info, id: info.rdns, provider } });
  }
  const clients = /* @__PURE__ */ new Map();
  function getClient2(config = {}) {
    const chainId = config.chainId ?? store.getState().chainId;
    const chain2 = chains.getState().find((x) => x.id === chainId);
    if (config.chainId && !chain2)
      throw new ChainNotConfiguredError();
    {
      const client2 = clients.get(store.getState().chainId);
      if (client2 && !chain2)
        return client2;
      if (!chain2)
        throw new ChainNotConfiguredError();
    }
    {
      const client2 = clients.get(chainId);
      if (client2)
        return client2;
    }
    let client;
    if (rest.client)
      client = rest.client({ chain: chain2 });
    else {
      const chainId2 = chain2.id;
      const chainIds = chains.getState().map((x) => x.id);
      const properties = {};
      const entries = Object.entries(rest);
      for (const [key, value] of entries) {
        if (key === "chains" || key === "client" || key === "connectors" || key === "transports")
          continue;
        if (typeof value === "object") {
          if (chainId2 in value)
            properties[key] = value[chainId2];
          else {
            const hasChainSpecificValue = chainIds.some((x) => x in value);
            if (hasChainSpecificValue)
              continue;
            properties[key] = value;
          }
        } else
          properties[key] = value;
      }
      client = createClient({
        ...properties,
        chain: chain2,
        batch: properties.batch ?? { multicall: true },
        transport: (parameters2) => rest.transports[chainId2]({ ...parameters2, connectors })
      });
    }
    clients.set(chainId, client);
    return client;
  }
  function getInitialState() {
    return {
      chainId: chains.getState()[0].id,
      connections: /* @__PURE__ */ new Map(),
      current: null,
      status: "disconnected"
    };
  }
  let currentVersion;
  const prefix = "0.0.0-canary-";
  if (version.startsWith(prefix))
    currentVersion = Number.parseInt(version.replace(prefix, ""), 10);
  else
    currentVersion = Number.parseInt(version.split(".")[0] ?? "0", 10);
  const store = createStore2(subscribeWithSelector(
    // only use persist middleware if storage exists
    storage ? persist(getInitialState, {
      migrate(persistedState, version3) {
        if (version3 === currentVersion)
          return persistedState;
        const initialState = getInitialState();
        const chainId = validatePersistedChainId(persistedState, initialState.chainId);
        return { ...initialState, chainId };
      },
      name: "store",
      partialize(state) {
        return {
          connections: {
            __type: "Map",
            value: Array.from(state.connections.entries()).map(([key, connection]) => {
              const { id, name, type, uid: uid3 } = connection.connector;
              const connector = { id, name, type, uid: uid3 };
              return [key, { ...connection, connector }];
            })
          },
          chainId: state.chainId,
          current: state.current
        };
      },
      merge(persistedState, currentState) {
        if (typeof persistedState === "object" && persistedState && "status" in persistedState)
          delete persistedState.status;
        const chainId = validatePersistedChainId(persistedState, currentState.chainId);
        return {
          ...currentState,
          ...persistedState,
          chainId
        };
      },
      skipHydration: ssr,
      storage,
      version: currentVersion
    }) : getInitialState
  ));
  store.setState(getInitialState());
  function validatePersistedChainId(persistedState, defaultChainId) {
    return persistedState && typeof persistedState === "object" && "chainId" in persistedState && typeof persistedState.chainId === "number" && chains.getState().some((x) => x.id === persistedState.chainId) ? persistedState.chainId : defaultChainId;
  }
  if (syncConnectedChain)
    store.subscribe(({ connections, current }) => {
      var _a;
      return current ? (_a = connections.get(current)) == null ? void 0 : _a.chainId : void 0;
    }, (chainId) => {
      const isChainConfigured = chains.getState().some((x) => x.id === chainId);
      if (!isChainConfigured)
        return;
      return store.setState((x) => ({
        ...x,
        chainId: chainId ?? x.chainId
      }));
    });
  mipd == null ? void 0 : mipd.subscribe((providerDetails) => {
    const connectorIdSet = /* @__PURE__ */ new Set();
    const connectorRdnsSet = /* @__PURE__ */ new Set();
    for (const connector of connectors.getState()) {
      connectorIdSet.add(connector.id);
      if (connector.rdns) {
        const rdnsValues = typeof connector.rdns === "string" ? [connector.rdns] : connector.rdns;
        for (const rdns of rdnsValues) {
          connectorRdnsSet.add(rdns);
        }
      }
    }
    const newConnectors = [];
    for (const providerDetail of providerDetails) {
      if (connectorRdnsSet.has(providerDetail.info.rdns))
        continue;
      const connector = setup(providerDetailToConnector(providerDetail));
      if (connectorIdSet.has(connector.id))
        continue;
      newConnectors.push(connector);
    }
    if (storage && !store.persist.hasHydrated())
      return;
    connectors.setState((x) => [...x, ...newConnectors], true);
  });
  function change(data) {
    store.setState((x) => {
      const connection = x.connections.get(data.uid);
      if (!connection)
        return x;
      return {
        ...x,
        connections: new Map(x.connections).set(data.uid, {
          accounts: data.accounts ?? connection.accounts,
          chainId: data.chainId ?? connection.chainId,
          connector: connection.connector
        })
      };
    });
  }
  function connect2(data) {
    if (store.getState().status === "connecting" || store.getState().status === "reconnecting")
      return;
    store.setState((x) => {
      const connector = connectors.getState().find((x2) => x2.uid === data.uid);
      if (!connector)
        return x;
      if (connector.emitter.listenerCount("connect"))
        connector.emitter.off("connect", change);
      if (!connector.emitter.listenerCount("change"))
        connector.emitter.on("change", change);
      if (!connector.emitter.listenerCount("disconnect"))
        connector.emitter.on("disconnect", disconnect2);
      return {
        ...x,
        connections: new Map(x.connections).set(data.uid, {
          accounts: data.accounts,
          chainId: data.chainId,
          connector
        }),
        current: data.uid,
        status: "connected"
      };
    });
  }
  function disconnect2(data) {
    store.setState((x) => {
      const connection = x.connections.get(data.uid);
      if (connection) {
        const connector = connection.connector;
        if (connector.emitter.listenerCount("change"))
          connection.connector.emitter.off("change", change);
        if (connector.emitter.listenerCount("disconnect"))
          connection.connector.emitter.off("disconnect", disconnect2);
        if (!connector.emitter.listenerCount("connect"))
          connection.connector.emitter.on("connect", connect2);
      }
      x.connections.delete(data.uid);
      if (x.connections.size === 0)
        return {
          ...x,
          connections: /* @__PURE__ */ new Map(),
          current: null,
          status: "disconnected"
        };
      const nextConnection = x.connections.values().next().value;
      return {
        ...x,
        connections: new Map(x.connections),
        current: nextConnection.connector.uid
      };
    });
  }
  return {
    get chains() {
      return chains.getState();
    },
    get connectors() {
      return connectors.getState();
    },
    storage,
    getClient: getClient2,
    get state() {
      return store.getState();
    },
    setState(value) {
      let newState;
      if (typeof value === "function")
        newState = value(store.getState());
      else
        newState = value;
      const initialState = getInitialState();
      if (typeof newState !== "object")
        newState = initialState;
      const isCorrupt = Object.keys(initialState).some((x) => !(x in newState));
      if (isCorrupt)
        newState = initialState;
      store.setState(newState, true);
    },
    subscribe(selector, listener, options) {
      return store.subscribe(selector, listener, options ? {
        ...options,
        fireImmediately: options.emitImmediately
        // Workaround cast since Zustand does not support `'exactOptionalPropertyTypes'`
      } : void 0);
    },
    _internal: {
      mipd,
      async revalidate() {
        const state = store.getState();
        const connections = state.connections;
        let current = state.current;
        for (const [, connection] of connections) {
          const connector = connection.connector;
          const isAuthorized = connector.isAuthorized ? await connector.isAuthorized().catch(() => false) : false;
          if (isAuthorized)
            continue;
          connections.delete(connector.uid);
          if (current === connector.uid)
            current = null;
        }
        store.setState((x) => ({ ...x, connections, current }));
      },
      store,
      ssr: Boolean(ssr),
      syncConnectedChain,
      transports: rest.transports,
      chains: {
        setState(value) {
          const nextChains = typeof value === "function" ? value(chains.getState()) : value;
          if (nextChains.length === 0)
            return;
          return chains.setState(nextChains, true);
        },
        subscribe(listener) {
          return chains.subscribe(listener);
        }
      },
      connectors: {
        providerDetailToConnector,
        setup,
        setState(value) {
          return connectors.setState(typeof value === "function" ? value(connectors.getState()) : value, true);
        },
        subscribe(listener) {
          return connectors.subscribe(listener);
        }
      },
      events: { change, connect: connect2, disconnect: disconnect2 }
    }
  };
}

// node_modules/@wagmi/core/dist/esm/hydrate.js
function hydrate(config, parameters) {
  const { initialState, reconnectOnMount } = parameters;
  if (initialState && !config._internal.store.persist.hasHydrated())
    config.setState({
      ...initialState,
      chainId: config.chains.some((x) => x.id === initialState.chainId) ? initialState.chainId : config.chains[0].id,
      connections: reconnectOnMount ? initialState.connections : /* @__PURE__ */ new Map(),
      status: reconnectOnMount ? "reconnecting" : "disconnected"
    });
  return {
    async onMount() {
      if (config._internal.ssr) {
        await config._internal.store.persist.rehydrate();
        if (config._internal.mipd) {
          config._internal.connectors.setState((connectors) => {
            var _a;
            const rdnsSet = /* @__PURE__ */ new Set();
            for (const connector of connectors ?? []) {
              if (connector.rdns) {
                const rdnsValues = Array.isArray(connector.rdns) ? connector.rdns : [connector.rdns];
                for (const rdns of rdnsValues) {
                  rdnsSet.add(rdns);
                }
              }
            }
            const mipdConnectors = [];
            const providers = ((_a = config._internal.mipd) == null ? void 0 : _a.getProviders()) ?? [];
            for (const provider of providers) {
              if (rdnsSet.has(provider.info.rdns))
                continue;
              const connectorFn = config._internal.connectors.providerDetailToConnector(provider);
              const connector = config._internal.connectors.setup(connectorFn);
              mipdConnectors.push(connector);
            }
            return [...connectors, ...mipdConnectors];
          });
        }
      }
      if (reconnectOnMount)
        reconnect(config);
      else if (config.storage)
        config.setState((x) => ({
          ...x,
          connections: /* @__PURE__ */ new Map()
        }));
    }
  };
}

// node_modules/@wagmi/core/dist/esm/transports/connector.js
function unstable_connector(connector, config = {}) {
  const { type } = connector;
  const { key = "connector", name = "Connector", retryDelay } = config;
  return (parameters) => {
    const { chain: chain2, connectors } = parameters;
    const retryCount = config.retryCount ?? parameters.retryCount;
    const request = async ({ method, params }) => {
      const connector2 = connectors == null ? void 0 : connectors.getState().find((c) => c.type === type);
      if (!connector2)
        throw new ProviderDisconnectedError(new Error(`Could not find connector of type "${type}" in \`connectors\` passed to \`createConfig\`.`));
      const provider = await connector2.getProvider({
        chainId: chain2 == null ? void 0 : chain2.id
      });
      if (!provider)
        throw new ProviderDisconnectedError(new Error("Provider is disconnected."));
      const chainId = hexToNumber(await withRetry(() => withTimeout(() => provider.request({ method: "eth_chainId" }), {
        timeout: 100
      })));
      if (chain2 && chainId !== chain2.id)
        throw new ChainDisconnectedError(new Error(`The current chain of the connector (id: ${chainId}) does not match the target chain for the request (id: ${chain2.id} – ${chain2.name}).`));
      const body = { method, params };
      return provider.request(body);
    };
    return createTransport({
      key,
      name,
      request,
      retryCount,
      retryDelay,
      type: "connector"
    });
  };
}

// node_modules/@wagmi/core/dist/esm/transports/fallback.js
function fallback2(transports, config) {
  return fallback(transports, config);
}

// node_modules/@wagmi/core/dist/esm/utils/cookie.js
var cookieStorage = {
  getItem(key) {
    if (typeof window === "undefined")
      return null;
    const value = parseCookie(document.cookie, key);
    return value ?? null;
  },
  setItem(key, value) {
    if (typeof window === "undefined")
      return;
    document.cookie = `${key}=${value};path=/;samesite=Lax`;
  },
  removeItem(key) {
    if (typeof window === "undefined")
      return;
    document.cookie = `${key}=;max-age=-1;path=/`;
  }
};
function cookieToInitialState(config, cookie) {
  var _a, _b;
  if (!cookie)
    return void 0;
  const key = `${(_a = config.storage) == null ? void 0 : _a.key}.store`;
  const parsed = parseCookie(cookie, key);
  if (!parsed)
    return void 0;
  try {
    return (_b = deserialize(parsed)) == null ? void 0 : _b.state;
  } catch {
    return void 0;
  }
}
function parseCookie(cookie, key) {
  const keyValue = cookie.split("; ").find((x) => x.startsWith(`${key}=`));
  if (!keyValue)
    return void 0;
  return keyValue.substring(key.length + 1);
}

// node_modules/wagmi/dist/esm/hydrate.js
var import_react = __toESM(require_react(), 1);
function Hydrate(parameters) {
  const { children, config, initialState, reconnectOnMount = true } = parameters;
  const { onMount } = hydrate(config, {
    initialState,
    reconnectOnMount
  });
  if (!config._internal.ssr)
    onMount();
  const active = (0, import_react.useRef)(true);
  (0, import_react.useEffect)(() => {
    if (!active.current)
      return;
    if (!config._internal.ssr)
      return;
    onMount();
    return () => {
      active.current = false;
    };
  }, []);
  return children;
}

// node_modules/wagmi/dist/esm/context.js
var WagmiContext = (0, import_react2.createContext)(void 0);
function WagmiProvider(parameters) {
  const { children, config } = parameters;
  const props = { value: config };
  return (0, import_react2.createElement)(Hydrate, parameters, (0, import_react2.createElement)(WagmiContext.Provider, props, children));
}

// node_modules/wagmi/dist/esm/version.js
var version2 = "3.7.9";

// node_modules/wagmi/dist/esm/utils/getVersion.js
var getVersion2 = () => `wagmi@${version2}`;

// node_modules/wagmi/dist/esm/errors/base.js
var BaseError4 = class extends BaseError3 {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "WagmiError"
    });
  }
  get docsBaseUrl() {
    return "https://wagmi.sh/react";
  }
  get version() {
    return getVersion2();
  }
};

// node_modules/wagmi/dist/esm/errors/context.js
var WagmiProviderNotFoundError = class extends BaseError4 {
  constructor() {
    super("`useConfig` must be used within `WagmiProvider`.", {
      docsPath: "/api/WagmiProvider"
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "WagmiProviderNotFoundError"
    });
  }
};

// node_modules/@wagmi/core/dist/esm/query/utils.js
function structuralSharing(oldData, newData) {
  return replaceEqualDeep(oldData, newData);
}
function hashFn(queryKey) {
  return JSON.stringify(queryKey, (_, value) => {
    if (isPlainObject2(value))
      return Object.keys(value).sort().reduce((result, key) => {
        result[key] = value[key];
        return result;
      }, {});
    if (typeof value === "bigint")
      return value.toString();
    return value;
  });
}
function isPlainObject2(value) {
  if (!hasObjectPrototype(value)) {
    return false;
  }
  const ctor = value.constructor;
  if (typeof ctor === "undefined")
    return true;
  const prot = ctor.prototype;
  if (!hasObjectPrototype(prot))
    return false;
  if (!prot.hasOwnProperty("isPrototypeOf"))
    return false;
  return true;
}
function hasObjectPrototype(o) {
  return Object.prototype.toString.call(o) === "[object Object]";
}
function filterQueryOptions(options) {
  const {
    // import('@tanstack/query-core').QueryOptions
    // biome-ignore lint/correctness/noUnusedVariables: tossing
    _defaulted,
    behavior,
    gcTime,
    initialData,
    initialDataUpdatedAt,
    maxPages,
    meta,
    networkMode,
    queryFn,
    queryHash,
    queryKey,
    queryKeyHashFn,
    retry,
    retryDelay,
    structuralSharing: structuralSharing2,
    // import('@tanstack/query-core').InfiniteQueryObserverOptions
    // biome-ignore lint/correctness/noUnusedVariables: tossing
    getPreviousPageParam,
    getNextPageParam,
    initialPageParam,
    // import('@tanstack/react-query').UseQueryOptions
    // biome-ignore lint/correctness/noUnusedVariables: tossing
    _optimisticResults,
    enabled,
    notifyOnChangeProps,
    placeholderData,
    refetchInterval,
    refetchIntervalInBackground,
    refetchOnMount,
    refetchOnReconnect,
    refetchOnWindowFocus,
    retryOnMount,
    select,
    staleTime,
    suspense,
    throwOnError,
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // wagmi
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // biome-ignore lint/correctness/noUnusedVariables: tossing
    abi: abi2,
    config,
    connector,
    query,
    watch,
    ...rest
  } = options;
  if (connector)
    return { connectorUid: connector == null ? void 0 : connector.uid, ...rest };
  return rest;
}

// node_modules/@wagmi/core/dist/esm/query/call.js
function callQueryOptions(config, options = {}) {
  return {
    ...options.query,
    queryFn: async (context) => {
      const [, { scopeKey: _, ...parameters }] = context.queryKey;
      const data = await call2(config, {
        ...parameters
      });
      return data ?? null;
    },
    queryKey: callQueryKey(options)
  };
}
function callQueryKey(options = {}) {
  return ["call", filterQueryOptions(options)];
}

// node_modules/@wagmi/core/dist/esm/query/connect.js
function connectMutationOptions(config, options = {}) {
  return {
    ...options.mutation,
    mutationFn: async (variables) => {
      return connect(config, variables);
    },
    mutationKey: ["connect"]
  };
}

// node_modules/@wagmi/core/dist/esm/query/deployContract.js
function deployContractMutationOptions(config, options = {}) {
  return {
    ...options.mutation,
    mutationFn(variables) {
      return deployContract2(config, variables);
    },
    mutationKey: ["deployContract"]
  };
}

// node_modules/@wagmi/core/dist/esm/query/disconnect.js
function disconnectMutationOptions(config, options = {}) {
  return {
    ...options.mutation,
    mutationFn: async (variables) => {
      return disconnect(config, variables);
    },
    mutationKey: ["disconnect"]
  };
}

// node_modules/@wagmi/core/dist/esm/query/estimateFeesPerGas.js
function estimateFeesPerGasQueryOptions(config, options = {}) {
  return {
    ...options.query,
    queryFn: async (context) => {
      const [, { scopeKey: _, ...parameters }] = context.queryKey;
      return estimateFeesPerGas2(config, parameters);
    },
    queryKey: estimateFeesPerGasQueryKey(options)
  };
}
function estimateFeesPerGasQueryKey(options = {}) {
  return ["estimateFeesPerGas", filterQueryOptions(options)];
}

// node_modules/@wagmi/core/dist/esm/query/estimateGas.js
function estimateGasQueryOptions(config, options = {}) {
  var _a;
  return {
    ...options.query,
    enabled: Boolean((options.account || options.connector) && (((_a = options.query) == null ? void 0 : _a.enabled) ?? true)),
    queryFn: async (context) => {
      const [, { scopeKey: _, ...parameters }] = context.queryKey;
      if (!parameters.account && !options.connector)
        throw new Error("account or connector is required");
      return estimateGas2(config, {
        ...parameters,
        account: parameters.account,
        connector: options.connector
      });
    },
    queryKey: estimateGasQueryKey(options)
  };
}
function estimateGasQueryKey(options = {}) {
  return ["estimateGas", filterQueryOptions(options)];
}

// node_modules/@wagmi/core/dist/esm/query/estimateMaxPriorityFeePerGas.js
function estimateMaxPriorityFeePerGasQueryOptions(config, options = {}) {
  return {
    ...options.query,
    queryFn: async (context) => {
      const [, { scopeKey: _, ...parameters }] = context.queryKey;
      return estimateMaxPriorityFeePerGas2(config, parameters);
    },
    queryKey: estimateMaxPriorityFeePerGasQueryKey(options)
  };
}
function estimateMaxPriorityFeePerGasQueryKey(options = {}) {
  return ["estimateMaxPriorityFeePerGas", filterQueryOptions(options)];
}

// node_modules/@wagmi/core/dist/esm/query/getBalance.js
function getBalanceQueryOptions(config, options = {}) {
  var _a;
  return {
    ...options.query,
    enabled: Boolean(options.address && (((_a = options.query) == null ? void 0 : _a.enabled) ?? true)),
    queryFn: async (context) => {
      const [, { scopeKey: _, ...parameters }] = context.queryKey;
      if (!parameters.address)
        throw new Error("address is required");
      const balance = await getBalance3(config, {
        ...parameters,
        address: parameters.address
      });
      return balance ?? null;
    },
    queryKey: getBalanceQueryKey(options)
  };
}
function getBalanceQueryKey(options = {}) {
  return ["balance", filterQueryOptions(options)];
}

// node_modules/@wagmi/core/dist/esm/query/getBlobBaseFee.js
function getBlobBaseFeeQueryOptions(config, options = {}) {
  return {
    ...options.query,
    queryFn: async (context) => {
      const [, { scopeKey: _, ...parameters }] = context.queryKey;
      const blobBaseFee = await getBlobBaseFee2(config, parameters);
      return blobBaseFee ?? null;
    },
    queryKey: getBlobBaseFeeQueryKey(options)
  };
}
function getBlobBaseFeeQueryKey(options = {}) {
  return ["blobBaseFee", filterQueryOptions(options)];
}

// node_modules/@wagmi/core/dist/esm/query/getBlock.js
function getBlockQueryOptions(config, options = {}) {
  return {
    ...options.query,
    queryFn: async (context) => {
      const [, { scopeKey: _, ...parameters }] = context.queryKey;
      const block = await getBlock2(config, parameters);
      return block ?? null;
    },
    queryKey: getBlockQueryKey(options)
  };
}
function getBlockQueryKey(options = {}) {
  return ["block", filterQueryOptions(options)];
}

// node_modules/@wagmi/core/dist/esm/query/getBlockNumber.js
function getBlockNumberQueryOptions(config, options = {}) {
  return {
    ...options.query,
    gcTime: 0,
    queryFn: async (context) => {
      const [, { scopeKey: _, ...parameters }] = context.queryKey;
      const blockNumber = await getBlockNumber2(config, parameters);
      return blockNumber ?? null;
    },
    queryKey: getBlockNumberQueryKey(options)
  };
}
function getBlockNumberQueryKey(options = {}) {
  return ["blockNumber", filterQueryOptions(options)];
}

// node_modules/@wagmi/core/dist/esm/query/getBlockTransactionCount.js
function getBlockTransactionCountQueryOptions(config, options = {}) {
  return {
    ...options.query,
    queryFn: async (context) => {
      const [, { scopeKey: _, ...parameters }] = context.queryKey;
      const blockTransactionCount = await getBlockTransactionCount2(config, parameters);
      return blockTransactionCount ?? null;
    },
    queryKey: getBlockTransactionCountQueryKey(options)
  };
}
function getBlockTransactionCountQueryKey(options = {}) {
  return ["blockTransactionCount", filterQueryOptions(options)];
}

// node_modules/@wagmi/core/dist/esm/query/getBytecode.js
function getBytecodeQueryOptions(config, options = {}) {
  var _a;
  return {
    ...options.query,
    enabled: Boolean(options.address && (((_a = options.query) == null ? void 0 : _a.enabled) ?? true)),
    queryFn: async (context) => {
      const [, { scopeKey: _, ...parameters }] = context.queryKey;
      if (!parameters.address)
        throw new Error("address is required");
      const bytecode = await getBytecode(config, {
        ...parameters,
        address: parameters.address
      });
      return bytecode ?? null;
    },
    queryKey: getBytecodeQueryKey(options)
  };
}
function getBytecodeQueryKey(options = {}) {
  return ["getBytecode", filterQueryOptions(options)];
}

// node_modules/@wagmi/core/dist/esm/query/getCallsStatus.js
function getCallsStatusQueryOptions(config, options) {
  var _a, _b;
  return {
    ...options.query,
    enabled: Boolean(((_a = options.connector) == null ? void 0 : _a.getProvider) && (((_b = options.query) == null ? void 0 : _b.enabled) ?? true)),
    queryFn: async (context) => {
      var _a2;
      if (!((_a2 = options.connector) == null ? void 0 : _a2.getProvider))
        throw new Error("connector is required");
      const [, { connectorUid: _, scopeKey: __, ...parameters }] = context.queryKey;
      const status = await getCallsStatus2(config, parameters);
      return status;
    },
    queryKey: getCallsStatusQueryKey(options)
  };
}
function getCallsStatusQueryKey(options) {
  return ["callsStatus", filterQueryOptions(options)];
}

// node_modules/@wagmi/core/dist/esm/query/getCapabilities.js
function getCapabilitiesQueryOptions(config, options = {}) {
  var _a, _b;
  return {
    ...options.query,
    enabled: Boolean(((_a = options.connector) == null ? void 0 : _a.getProvider) && (((_b = options.query) == null ? void 0 : _b.enabled) ?? true)),
    queryFn: async (context) => {
      var _a2;
      if (!((_a2 = options.connector) == null ? void 0 : _a2.getProvider))
        throw new Error("connector is required");
      const [, { connectorUid: _, scopeKey: __, ...parameters }] = context.queryKey;
      const capabilities = await getCapabilities2(config, parameters);
      return capabilities;
    },
    queryKey: getCapabilitiesQueryKey(options)
  };
}
function getCapabilitiesQueryKey(options = {}) {
  return ["capabilities", filterQueryOptions(options)];
}

// node_modules/@wagmi/core/dist/esm/query/getConnectorClient.js
function getConnectorClientQueryOptions(config, options = {}) {
  var _a, _b;
  return {
    ...options.query,
    enabled: Boolean(((_a = options.connector) == null ? void 0 : _a.getProvider) && (((_b = options.query) == null ? void 0 : _b.enabled) ?? true)),
    gcTime: 0,
    queryFn: async (context) => {
      const [, { connectorUid: _, scopeKey: __, ...parameters }] = context.queryKey;
      return getConnectorClient(config, {
        ...parameters,
        connector: options.connector
      });
    },
    queryKey: getConnectorClientQueryKey(options),
    staleTime: Number.POSITIVE_INFINITY
  };
}
function getConnectorClientQueryKey(options = {}) {
  return ["connectorClient", filterQueryOptions(options)];
}

// node_modules/@wagmi/core/dist/esm/query/getContractEvents.js
function getContractEventsQueryOptions(config, options = {}) {
  var _a;
  return {
    ...options.query,
    enabled: Boolean(options.abi && (((_a = options.query) == null ? void 0 : _a.enabled) ?? true)),
    queryFn: async (context) => {
      if (!options.abi)
        throw new Error("abi is required");
      const [, { scopeKey: _, ...parameters }] = context.queryKey;
      const result = await getContractEvents2(config, {
        ...parameters,
        abi: options.abi
      });
      return result;
    },
    queryKey: getContractEventsQueryKey(options),
    structuralSharing
  };
}
function getContractEventsQueryKey(options = {}) {
  return ["getContractEvents", filterQueryOptions(options)];
}

// node_modules/@wagmi/core/dist/esm/query/getEnsAddress.js
function getEnsAddressQueryOptions(config, options = {}) {
  var _a;
  return {
    ...options.query,
    enabled: Boolean(options.name && (((_a = options.query) == null ? void 0 : _a.enabled) ?? true)),
    queryFn: async (context) => {
      const [, { scopeKey: _, ...parameters }] = context.queryKey;
      if (!parameters.name)
        throw new Error("name is required");
      return getEnsAddress2(config, { ...parameters, name: parameters.name });
    },
    queryKey: getEnsAddressQueryKey(options)
  };
}
function getEnsAddressQueryKey(options = {}) {
  return ["ensAddress", filterQueryOptions(options)];
}

// node_modules/@wagmi/core/dist/esm/query/getEnsAvatar.js
function getEnsAvatarQueryOptions(config, options = {}) {
  var _a;
  return {
    ...options.query,
    enabled: Boolean(options.name && (((_a = options.query) == null ? void 0 : _a.enabled) ?? true)),
    queryFn: async (context) => {
      const [, { scopeKey: _, ...parameters }] = context.queryKey;
      if (!parameters.name)
        throw new Error("name is required");
      return getEnsAvatar2(config, { ...parameters, name: parameters.name });
    },
    queryKey: getEnsAvatarQueryKey(options)
  };
}
function getEnsAvatarQueryKey(options = {}) {
  return ["ensAvatar", filterQueryOptions(options)];
}

// node_modules/@wagmi/core/dist/esm/query/getEnsName.js
function getEnsNameQueryOptions(config, options = {}) {
  var _a;
  return {
    ...options.query,
    enabled: Boolean(options.address && (((_a = options.query) == null ? void 0 : _a.enabled) ?? true)),
    queryFn: async (context) => {
      const [, { scopeKey: _, ...parameters }] = context.queryKey;
      if (!parameters.address)
        throw new Error("address is required");
      return getEnsName2(config, { ...parameters, address: parameters.address });
    },
    queryKey: getEnsNameQueryKey(options)
  };
}
function getEnsNameQueryKey(options = {}) {
  return ["ensName", filterQueryOptions(options)];
}

// node_modules/@wagmi/core/dist/esm/query/getEnsResolver.js
function getEnsResolverQueryOptions(config, options = {}) {
  var _a;
  return {
    ...options.query,
    enabled: Boolean(options.name && (((_a = options.query) == null ? void 0 : _a.enabled) ?? true)),
    queryFn: async (context) => {
      const [, { scopeKey: _, ...parameters }] = context.queryKey;
      if (!parameters.name)
        throw new Error("name is required");
      return getEnsResolver2(config, { ...parameters, name: parameters.name });
    },
    queryKey: getEnsResolverQueryKey(options)
  };
}
function getEnsResolverQueryKey(options = {}) {
  return ["ensResolver", filterQueryOptions(options)];
}

// node_modules/@wagmi/core/dist/esm/query/getEnsText.js
function getEnsTextQueryOptions(config, options = {}) {
  var _a;
  return {
    ...options.query,
    enabled: Boolean(options.key && options.name && (((_a = options.query) == null ? void 0 : _a.enabled) ?? true)),
    queryFn: async (context) => {
      const [, { scopeKey: _, ...parameters }] = context.queryKey;
      if (!parameters.key || !parameters.name)
        throw new Error("key and name are required");
      return getEnsText2(config, {
        ...parameters,
        key: parameters.key,
        name: parameters.name
      });
    },
    queryKey: getEnsTextQueryKey(options)
  };
}
function getEnsTextQueryKey(options = {}) {
  return ["ensText", filterQueryOptions(options)];
}

// node_modules/@wagmi/core/dist/esm/query/getFeeHistory.js
function getFeeHistoryQueryOptions(config, options = {}) {
  var _a;
  return {
    ...options.query,
    enabled: Boolean(options.blockCount && options.rewardPercentiles && (((_a = options.query) == null ? void 0 : _a.enabled) ?? true)),
    queryFn: async (context) => {
      const [, { scopeKey: _, ...parameters }] = context.queryKey;
      if (!parameters.blockCount)
        throw new Error("blockCount is required");
      if (!parameters.rewardPercentiles)
        throw new Error("rewardPercentiles is required");
      const feeHistory = await getFeeHistory2(config, {
        ...parameters,
        blockCount: parameters.blockCount,
        rewardPercentiles: parameters.rewardPercentiles
      });
      return feeHistory ?? null;
    },
    queryKey: getFeeHistoryQueryKey(options)
  };
}
function getFeeHistoryQueryKey(options = {}) {
  return ["feeHistory", filterQueryOptions(options)];
}

// node_modules/@wagmi/core/dist/esm/query/getGasPrice.js
function getGasPriceQueryOptions(config, options = {}) {
  return {
    ...options.query,
    queryFn: async (context) => {
      const [, { scopeKey: _, ...parameters }] = context.queryKey;
      const gasPrice = await getGasPrice2(config, parameters);
      return gasPrice ?? null;
    },
    queryKey: getGasPriceQueryKey(options)
  };
}
function getGasPriceQueryKey(options = {}) {
  return ["gasPrice", filterQueryOptions(options)];
}

// node_modules/@wagmi/core/dist/esm/query/getProof.js
function getProofQueryOptions(config, options = {}) {
  var _a;
  return {
    ...options.query,
    enabled: Boolean(options.address && options.storageKeys && (((_a = options.query) == null ? void 0 : _a.enabled) ?? true)),
    queryFn: async (context) => {
      const [, { scopeKey: _, ...parameters }] = context.queryKey;
      if (!parameters.address || !parameters.storageKeys)
        throw new Error("address and storageKeys are required");
      return getProof2(config, {
        ...parameters,
        address: parameters.address,
        storageKeys: parameters.storageKeys
      });
    },
    queryKey: getProofQueryKey(options)
  };
}
function getProofQueryKey(options = {}) {
  return ["getProof", filterQueryOptions(options)];
}

// node_modules/@wagmi/core/dist/esm/query/getStorageAt.js
function getStorageAtQueryOptions(config, options = {}) {
  var _a;
  return {
    ...options.query,
    enabled: Boolean(options.address && options.slot && (((_a = options.query) == null ? void 0 : _a.enabled) ?? true)),
    queryFn: async (context) => {
      const [, { scopeKey: _, ...parameters }] = context.queryKey;
      if (!parameters.address || !parameters.slot)
        throw new Error("address and slot are required");
      return getStorageAt2(config, {
        ...parameters,
        address: parameters.address,
        slot: parameters.slot
      });
    },
    queryKey: getStorageAtQueryKey(options)
  };
}
function getStorageAtQueryKey(options = {}) {
  return ["getStorageAt", filterQueryOptions(options)];
}

// node_modules/@wagmi/core/dist/esm/query/getTransaction.js
function getTransactionQueryOptions(config, options = {}) {
  var _a;
  return {
    ...options.query,
    enabled: Boolean((options.hash || options.index !== void 0 && (options.blockHash || options.blockNumber !== void 0 || options.blockTag)) && (((_a = options.query) == null ? void 0 : _a.enabled) ?? true)),
    queryFn: async (context) => {
      const [, { scopeKey: _, ...parameters }] = context.queryKey;
      if (!(parameters.hash || parameters.index !== void 0 && (parameters.blockHash || parameters.blockNumber !== void 0 || parameters.blockTag)))
        throw new Error("hash OR index AND blockHash, blockNumber, blockTag is required");
      return getTransaction2(config, parameters);
    },
    queryKey: getTransactionQueryKey(options)
  };
}
function getTransactionQueryKey(options = {}) {
  return ["transaction", filterQueryOptions(options)];
}

// node_modules/@wagmi/core/dist/esm/query/getTransactionConfirmations.js
function getTransactionConfirmationsQueryOptions(config, options = {}) {
  var _a;
  return {
    ...options.query,
    enabled: Boolean((options.hash || options.transactionReceipt) && (((_a = options.query) == null ? void 0 : _a.enabled) ?? true)),
    queryFn: async (context) => {
      const [, { scopeKey: _, ...parameters }] = context.queryKey;
      if (!parameters.hash && !parameters.transactionReceipt)
        throw new Error("hash or transactionReceipt is required");
      const confirmations = await getTransactionConfirmations2(config, {
        ...parameters,
        hash: parameters.hash,
        transactionReceipt: parameters.transactionReceipt
      });
      return confirmations ?? null;
    },
    queryKey: getTransactionConfirmationsQueryKey(options)
  };
}
function getTransactionConfirmationsQueryKey(options = {}) {
  return ["transactionConfirmations", filterQueryOptions(options)];
}

// node_modules/@wagmi/core/dist/esm/query/getTransactionCount.js
function getTransactionCountQueryOptions(config, options = {}) {
  var _a;
  return {
    ...options.query,
    enabled: Boolean(options.address && (((_a = options.query) == null ? void 0 : _a.enabled) ?? true)),
    queryFn: async (context) => {
      const [, { scopeKey: _, ...parameters }] = context.queryKey;
      if (!parameters.address)
        throw new Error("address is required");
      const transactionCount = await getTransactionCount2(config, {
        ...parameters,
        address: parameters.address
      });
      return transactionCount ?? null;
    },
    queryKey: getTransactionCountQueryKey(options)
  };
}
function getTransactionCountQueryKey(options = {}) {
  return ["transactionCount", filterQueryOptions(options)];
}

// node_modules/@wagmi/core/dist/esm/query/getTransactionReceipt.js
function getTransactionReceiptQueryOptions(config, options = {}) {
  var _a;
  return {
    ...options.query,
    enabled: Boolean(options.hash && (((_a = options.query) == null ? void 0 : _a.enabled) ?? true)),
    queryFn: async (context) => {
      const [, { scopeKey: _, ...parameters }] = context.queryKey;
      if (!parameters.hash)
        throw new Error("hash is required");
      return getTransactionReceipt2(config, {
        ...parameters,
        hash: parameters.hash
      });
    },
    queryKey: getTransactionReceiptQueryKey(options)
  };
}
function getTransactionReceiptQueryKey(options = {}) {
  return ["getTransactionReceipt", filterQueryOptions(options)];
}

// node_modules/@wagmi/core/dist/esm/query/getWalletClient.js
function getWalletClientQueryOptions(config, options = {}) {
  var _a, _b;
  return {
    ...options.query,
    enabled: Boolean(((_a = options.connector) == null ? void 0 : _a.getProvider) && (((_b = options.query) == null ? void 0 : _b.enabled) ?? true)),
    gcTime: 0,
    queryFn: async (context) => {
      var _a2;
      if (!((_a2 = options.connector) == null ? void 0 : _a2.getProvider))
        throw new Error("connector is required");
      const [, { connectorUid: _, scopeKey: __, ...parameters }] = context.queryKey;
      return getWalletClient(config, {
        ...parameters,
        connector: options.connector
      });
    },
    queryKey: getWalletClientQueryKey(options),
    staleTime: Number.POSITIVE_INFINITY
  };
}
function getWalletClientQueryKey(options = {}) {
  return ["walletClient", filterQueryOptions(options)];
}

// node_modules/@wagmi/core/dist/esm/query/infiniteReadContracts.js
function infiniteReadContractsQueryOptions(config, options) {
  return {
    ...options.query,
    async queryFn({ pageParam, queryKey }) {
      const { contracts } = options;
      const { cacheKey: _, scopeKey: _s, ...parameters } = queryKey[1];
      return await readContracts(config, {
        ...parameters,
        contracts: contracts(pageParam)
      });
    },
    queryKey: infiniteReadContractsQueryKey(options)
  };
}
function infiniteReadContractsQueryKey(options) {
  const { contracts: _, ...parameters } = options;
  return ["infiniteReadContracts", filterQueryOptions(parameters)];
}

// node_modules/@wagmi/core/dist/esm/query/prepareTransactionRequest.js
function prepareTransactionRequestQueryOptions(config, options = {}) {
  var _a;
  const hasCalls = Array.isArray(options.calls) && options.calls.length > 0;
  return {
    ...options.query,
    enabled: Boolean((options.to || hasCalls) && (((_a = options.query) == null ? void 0 : _a.enabled) ?? true)),
    queryFn: async (context) => {
      const [, { scopeKey: _, ...parameters }] = context.queryKey;
      const hasCalls2 = Array.isArray(parameters.calls) && parameters.calls.length > 0;
      if (!parameters.to && !hasCalls2)
        throw new Error("to or calls is required");
      return prepareTransactionRequest2(config, {
        ...parameters
      });
    },
    queryKey: prepareTransactionRequestQueryKey(options)
  };
}
function prepareTransactionRequestQueryKey(options = {}) {
  return ["prepareTransactionRequest", filterQueryOptions(options)];
}

// node_modules/@wagmi/core/dist/esm/query/readContract.js
function readContractQueryOptions(config, options = {}) {
  var _a;
  return {
    ...options.query,
    enabled: Boolean(Boolean(options.address || "code" in options && options.code) && options.abi && options.functionName && (((_a = options.query) == null ? void 0 : _a.enabled) ?? true)),
    // TODO: Support `signal` once Viem actions allow passthrough
    // https://tkdodo.eu/blog/why-you-want-react-query#bonus-cancellation
    queryFn: async (context) => {
      if (!options.abi)
        throw new Error("abi is required");
      const [, { scopeKey: _, ...parameters }] = context.queryKey;
      if (!parameters.functionName)
        throw new Error("functionName is required");
      const result = await readContract2(config, {
        ...parameters,
        abi: options.abi,
        address: parameters.address,
        code: "code" in parameters && parameters.code ? parameters.code : void 0,
        functionName: parameters.functionName
      });
      return result;
    },
    queryKey: readContractQueryKey(options),
    structuralSharing
  };
}
function readContractQueryKey(options = {}) {
  return ["readContract", filterQueryOptions(options)];
}

// node_modules/@wagmi/core/dist/esm/query/readContracts.js
function readContractsQueryOptions(config, options = {}) {
  return {
    ...options.query,
    queryFn: async (context) => {
      var _a;
      const contracts = [];
      const length = context.queryKey[1].contracts.length;
      for (let i = 0; i < length; i++) {
        const contract = context.queryKey[1].contracts[i];
        const abi2 = ((_a = options.contracts) == null ? void 0 : _a[i]).abi;
        contracts.push({ ...contract, abi: abi2 });
      }
      const { scopeKey: _, ...parameters } = context.queryKey[1];
      return readContracts(config, {
        ...parameters,
        contracts
      });
    },
    queryKey: readContractsQueryKey(options)
  };
}
function readContractsQueryKey(options = {}) {
  const contracts = [];
  let hasContractWithoutChainId = false;
  for (const contract of options.contracts ?? []) {
    const { abi: _2, ...rest2 } = contract;
    if (rest2.chainId === void 0)
      hasContractWithoutChainId = true;
    const chainId = rest2.chainId ?? options.chainId;
    contracts.push({ ...rest2, ...chainId ? { chainId } : {} });
  }
  const { chainId: _, ...rest } = options;
  return [
    "readContracts",
    filterQueryOptions({
      ...rest,
      ...hasContractWithoutChainId && options.chainId ? { chainId: options.chainId } : {},
      contracts
    })
  ];
}

// node_modules/@wagmi/core/dist/esm/query/reconnect.js
function reconnectMutationOptions(config, options = {}) {
  return {
    ...options.mutation,
    mutationFn(variables) {
      return reconnect(config, variables);
    },
    mutationKey: ["reconnect"]
  };
}

// node_modules/@wagmi/core/dist/esm/query/sendCalls.js
function sendCallsMutationOptions(config, options = {}) {
  return {
    ...options.mutation,
    mutationFn(variables) {
      return sendCalls2(config, variables);
    },
    mutationKey: ["sendCalls"]
  };
}

// node_modules/@wagmi/core/dist/esm/query/sendCallsSync.js
function sendCallsSyncMutationOptions(config, options = {}) {
  return {
    ...options.mutation,
    mutationFn(variables) {
      return sendCallsSync2(config, variables);
    },
    mutationKey: ["sendCallsSync"]
  };
}

// node_modules/@wagmi/core/dist/esm/query/sendTransaction.js
function sendTransactionMutationOptions(config, options = {}) {
  return {
    ...options.mutation,
    mutationFn(variables) {
      return sendTransaction2(config, variables);
    },
    mutationKey: ["sendTransaction"]
  };
}

// node_modules/@wagmi/core/dist/esm/query/sendTransactionSync.js
function sendTransactionSyncMutationOptions(config, options = {}) {
  return {
    ...options.mutation,
    mutationFn(variables) {
      return sendTransactionSync2(config, variables);
    },
    mutationKey: ["sendTransactionSync"]
  };
}

// node_modules/@wagmi/core/dist/esm/query/showCallsStatus.js
function showCallsStatusMutationOptions(config, options = {}) {
  return {
    ...options.mutation,
    mutationFn(variables) {
      return showCallsStatus2(config, variables);
    },
    mutationKey: ["showCallsStatus"]
  };
}

// node_modules/@wagmi/core/dist/esm/query/signMessage.js
function signMessageMutationOptions(config, options = {}) {
  return {
    ...options.mutation,
    mutationFn(variables) {
      return signMessage2(config, variables);
    },
    mutationKey: ["signMessage"]
  };
}

// node_modules/@wagmi/core/dist/esm/query/signTransaction.js
function signTransactionMutationOptions(config, options = {}) {
  return {
    ...options.mutation,
    mutationFn(variables) {
      return signTransaction2(config, variables);
    },
    mutationKey: ["signTransaction"]
  };
}

// node_modules/@wagmi/core/dist/esm/query/signTypedData.js
function signTypedDataMutationOptions(config, options = {}) {
  return {
    ...options.mutation,
    mutationFn(variables) {
      return signTypedData2(config, variables);
    },
    mutationKey: ["signTypedData"]
  };
}

// node_modules/@wagmi/core/dist/esm/query/simulateContract.js
function simulateContractQueryOptions(config, options = {}) {
  var _a;
  return {
    ...options.query,
    enabled: Boolean(options.abi && options.address && options.connector && options.functionName && (((_a = options.query) == null ? void 0 : _a.enabled) ?? true)),
    queryFn: async (context) => {
      if (!options.abi)
        throw new Error("abi is required");
      if (!options.connector)
        throw new Error("connector is required");
      const [, { scopeKey: _, ...parameters }] = context.queryKey;
      if (!parameters.address)
        throw new Error("address is required");
      if (!parameters.functionName)
        throw new Error("functionName is required");
      return simulateContract2(config, {
        ...parameters,
        abi: options.abi,
        address: parameters.address,
        connector: options.connector,
        functionName: parameters.functionName
      });
    },
    queryKey: simulateContractQueryKey(options)
  };
}
function simulateContractQueryKey(options = {}) {
  const { connector: _, ...rest } = options;
  return ["simulateContract", filterQueryOptions(rest)];
}

// node_modules/@wagmi/core/dist/esm/query/switchChain.js
function switchChainMutationOptions(config, options = {}) {
  return {
    ...options.mutation,
    mutationFn(variables) {
      return switchChain2(config, variables);
    },
    mutationKey: ["switchChain"]
  };
}

// node_modules/@wagmi/core/dist/esm/query/switchConnection.js
function switchConnectionMutationOptions(config, options = {}) {
  return {
    ...options.mutation,
    mutationFn(variables) {
      return switchConnection(config, variables);
    },
    mutationKey: ["switchConnection"]
  };
}

// node_modules/@wagmi/core/dist/esm/query/verifyMessage.js
function verifyMessageQueryOptions(config, options = {}) {
  var _a;
  return {
    ...options.query,
    enabled: Boolean(options.address && options.message && options.signature && (((_a = options.query) == null ? void 0 : _a.enabled) ?? true)),
    queryFn: async (context) => {
      const [, { scopeKey: _, ...parameters }] = context.queryKey;
      if (!parameters.address)
        throw new Error("address is required");
      if (!parameters.message)
        throw new Error("message is required");
      if (!parameters.signature)
        throw new Error("signature is required");
      const verified = await verifyMessage3(config, {
        ...parameters,
        address: parameters.address,
        message: parameters.message,
        signature: parameters.signature
      });
      return verified ?? null;
    },
    queryKey: verifyMessageQueryKey(options)
  };
}
function verifyMessageQueryKey(options = {}) {
  return ["verifyMessage", filterQueryOptions(options)];
}

// node_modules/@wagmi/core/dist/esm/query/verifyTypedData.js
function verifyTypedDataQueryOptions(config, options = {}) {
  var _a;
  return {
    ...options.query,
    enabled: Boolean(options.address && options.message && options.primaryType && options.signature && options.types && (((_a = options.query) == null ? void 0 : _a.enabled) ?? true)),
    queryFn: async (context) => {
      const [, { scopeKey: _, ...parameters }] = context.queryKey;
      if (!parameters.address)
        throw new Error("address is required");
      if (!parameters.message)
        throw new Error("message is required");
      if (!parameters.primaryType)
        throw new Error("primaryType is required");
      if (!parameters.signature)
        throw new Error("signature is required");
      if (!parameters.types)
        throw new Error("types is required");
      const verified = await verifyTypedData3(config, {
        ...parameters,
        address: parameters.address,
        message: parameters.message,
        primaryType: parameters.primaryType,
        signature: parameters.signature,
        types: parameters.types
      });
      return verified ?? null;
    },
    queryKey: verifyTypedDataQueryKey(options)
  };
}
function verifyTypedDataQueryKey(options = {}) {
  return ["verifyTypedData", filterQueryOptions(options)];
}

// node_modules/@wagmi/core/dist/esm/query/waitForCallsStatus.js
function waitForCallsStatusQueryOptions(config, options) {
  var _a, _b;
  return {
    ...options.query,
    enabled: Boolean(options.id && ((_a = options.connector) == null ? void 0 : _a.getProvider) && (((_b = options.query) == null ? void 0 : _b.enabled) ?? true)),
    queryFn: async (context) => {
      var _a2;
      if (!((_a2 = options.connector) == null ? void 0 : _a2.getProvider))
        throw new Error("connector is required");
      const [, { connectorUid: _, scopeKey: __, ...parameters }] = context.queryKey;
      if (!parameters.id)
        throw new Error("id is required");
      const status = await waitForCallsStatus2(config, {
        ...parameters,
        id: parameters.id
      });
      return status;
    },
    queryKey: waitForCallsStatusQueryKey(options)
  };
}
function waitForCallsStatusQueryKey(options = {}) {
  return ["callsStatus", filterQueryOptions(options)];
}

// node_modules/@wagmi/core/dist/esm/query/waitForTransactionReceipt.js
function waitForTransactionReceiptQueryOptions(config, options = {}) {
  var _a;
  return {
    ...options.query,
    enabled: Boolean(options.hash && (((_a = options.query) == null ? void 0 : _a.enabled) ?? true)),
    queryFn: async (context) => {
      const [, { scopeKey: _, ...parameters }] = context.queryKey;
      if (!parameters.hash)
        throw new Error("hash is required");
      return waitForTransactionReceipt2(config, {
        ...parameters,
        onReplaced: options.onReplaced,
        hash: parameters.hash
      });
    },
    queryKey: waitForTransactionReceiptQueryKey(options)
  };
}
function waitForTransactionReceiptQueryKey(options = {}) {
  const { onReplaced: _, ...rest } = options;
  return ["waitForTransactionReceipt", filterQueryOptions(rest)];
}

// node_modules/@wagmi/core/dist/esm/query/watchAsset.js
function watchAssetMutationOptions(config, options = {}) {
  return {
    ...options.mutation,
    mutationFn(variables) {
      return watchAsset2(config, variables);
    },
    mutationKey: ["watchAsset"]
  };
}

// node_modules/@wagmi/core/dist/esm/query/writeContract.js
function writeContractMutationOptions(config, options = {}) {
  return {
    ...options.mutation,
    mutationFn(variables) {
      return writeContract2(config, variables);
    },
    mutationKey: ["writeContract"]
  };
}

// node_modules/@wagmi/core/dist/esm/query/writeContractSync.js
function writeContractSyncMutationOptions(config, options = {}) {
  return {
    ...options.mutation,
    mutationFn(variables) {
      return writeContractSync2(config, variables);
    },
    mutationKey: ["writeContractSync"]
  };
}

// node_modules/wagmi/dist/esm/utils/query.js
function useQuery2(parameters) {
  const result = useQuery({
    ...parameters,
    queryKeyHashFn: hashFn
    // for bigint support
  });
  result.queryKey = parameters.queryKey;
  return result;
}
function useInfiniteQuery2(parameters) {
  const result = useInfiniteQuery({
    ...parameters,
    queryKeyHashFn: hashFn
    // for bigint support
  });
  result.queryKey = parameters.queryKey;
  return result;
}

// node_modules/wagmi/dist/esm/hooks/useChainId.js
var import_react4 = __toESM(require_react(), 1);

// node_modules/wagmi/dist/esm/hooks/useConfig.js
var import_react3 = __toESM(require_react(), 1);
function useConfig(parameters = {}) {
  const config = parameters.config ?? (0, import_react3.useContext)(WagmiContext);
  if (!config)
    throw new WagmiProviderNotFoundError();
  return config;
}

// node_modules/wagmi/dist/esm/hooks/useChainId.js
function useChainId(parameters = {}) {
  const config = useConfig(parameters);
  return (0, import_react4.useSyncExternalStore)((onChange) => watchChainId(config, { onChange }), () => getChainId2(config), () => getChainId2(config));
}

// node_modules/wagmi/dist/esm/hooks/useBalance.js
function useBalance(parameters = {}) {
  const config = useConfig(parameters);
  const chainId = useChainId({ config });
  const options = getBalanceQueryOptions(config, {
    ...parameters,
    chainId: parameters.chainId ?? chainId
  });
  return useQuery2(options);
}

// node_modules/wagmi/dist/esm/hooks/useBlobBaseFee.js
function useBlobBaseFee(parameters = {}) {
  const config = useConfig(parameters);
  const chainId = useChainId({ config });
  const options = getBlobBaseFeeQueryOptions(config, {
    ...parameters,
    chainId: parameters.chainId ?? chainId
  });
  return useQuery2(options);
}

// node_modules/wagmi/dist/esm/hooks/useWatchBlocks.js
var import_react5 = __toESM(require_react(), 1);
function useWatchBlocks(parameters = {}) {
  const { enabled = true, onBlock, config: _, ...rest } = parameters;
  const config = useConfig(parameters);
  const configChainId = useChainId({ config });
  const chainId = parameters.chainId ?? configChainId;
  const onBlockRef = (0, import_react5.useRef)(onBlock);
  const onErrorRef = (0, import_react5.useRef)(rest.onError);
  onBlockRef.current = onBlock;
  onErrorRef.current = rest.onError;
  (0, import_react5.useEffect)(() => {
    if (!enabled)
      return;
    if (!onBlockRef.current)
      return;
    return watchBlocks2(config, {
      ...rest,
      chainId,
      onBlock: (block, prevBlock) => {
        var _a;
        return (_a = onBlockRef.current) == null ? void 0 : _a.call(onBlockRef, block, prevBlock);
      },
      onError: (error) => {
        var _a;
        return (_a = onErrorRef.current) == null ? void 0 : _a.call(onErrorRef, error);
      }
    });
  }, [
    chainId,
    config,
    enabled,
    ///
    rest.blockTag,
    rest.emitMissed,
    rest.emitOnBegin,
    rest.includeTransactions,
    rest.poll,
    rest.pollingInterval,
    rest.syncConnectedChain
  ]);
}

// node_modules/wagmi/dist/esm/hooks/useBlock.js
function useBlock(parameters = {}) {
  const config = useConfig(parameters);
  const chainId = useChainId({ config });
  const options = getBlockQueryOptions(config, {
    ...parameters,
    chainId: parameters.chainId ?? chainId
  });
  const queryClient = useQueryClient();
  useWatchBlocks({
    ...{
      config: parameters.config,
      chainId: parameters.chainId,
      blockTag: parameters.blockTag,
      includeTransactions: parameters.includeTransactions,
      ...typeof parameters.watch === "object" ? parameters.watch : {}
    },
    enabled: Boolean((options.enabled ?? true) && (typeof parameters.watch === "object" ? parameters.watch.enabled : parameters.watch)),
    onBlock(block) {
      queryClient.setQueryData(options.queryKey, block);
    }
  });
  return useQuery2(options);
}

// node_modules/wagmi/dist/esm/hooks/useWatchBlockNumber.js
var import_react6 = __toESM(require_react(), 1);
function useWatchBlockNumber(parameters = {}) {
  const { enabled = true, onBlockNumber, config: _, ...rest } = parameters;
  const config = useConfig(parameters);
  const configChainId = useChainId({ config });
  const chainId = parameters.chainId ?? configChainId;
  const onBlockNumberRef = (0, import_react6.useRef)(onBlockNumber);
  const onErrorRef = (0, import_react6.useRef)(rest.onError);
  onBlockNumberRef.current = onBlockNumber;
  onErrorRef.current = rest.onError;
  (0, import_react6.useEffect)(() => {
    if (!enabled)
      return;
    if (!onBlockNumberRef.current)
      return;
    return watchBlockNumber2(config, {
      ...rest,
      chainId,
      onBlockNumber: (blockNumber, prevBlockNumber) => {
        var _a;
        return (_a = onBlockNumberRef.current) == null ? void 0 : _a.call(onBlockNumberRef, blockNumber, prevBlockNumber);
      },
      onError: (error) => {
        var _a;
        return (_a = onErrorRef.current) == null ? void 0 : _a.call(onErrorRef, error);
      }
    });
  }, [
    chainId,
    config,
    enabled,
    ///
    rest.emitMissed,
    rest.emitOnBegin,
    rest.poll,
    rest.pollingInterval,
    rest.syncConnectedChain
  ]);
}

// node_modules/wagmi/dist/esm/hooks/useBlockNumber.js
function useBlockNumber(parameters = {}) {
  const config = useConfig(parameters);
  const chainId = useChainId({ config });
  const options = getBlockNumberQueryOptions(config, {
    ...parameters,
    chainId: parameters.chainId ?? chainId
  });
  const queryClient = useQueryClient();
  useWatchBlockNumber({
    ...{
      config: parameters.config,
      chainId: parameters.chainId,
      ...typeof parameters.watch === "object" ? parameters.watch : {}
    },
    enabled: Boolean((options.enabled ?? true) && (typeof parameters.watch === "object" ? parameters.watch.enabled : parameters.watch)),
    onBlockNumber(blockNumber) {
      queryClient.setQueryData(options.queryKey, blockNumber);
    }
  });
  return useQuery2(options);
}

// node_modules/wagmi/dist/esm/hooks/useBlockTransactionCount.js
function useBlockTransactionCount(parameters = {}) {
  const config = useConfig(parameters);
  const chainId = useChainId({ config });
  const options = getBlockTransactionCountQueryOptions(config, {
    ...parameters,
    chainId: parameters.chainId ?? chainId
  });
  return useQuery2(options);
}

// node_modules/wagmi/dist/esm/hooks/useBytecode.js
function useBytecode(parameters = {}) {
  const config = useConfig(parameters);
  const chainId = useChainId({ config });
  const options = getBytecodeQueryOptions(config, {
    ...parameters,
    chainId: parameters.chainId ?? chainId
  });
  return useQuery2(options);
}

// node_modules/wagmi/dist/esm/hooks/useCall.js
function useCall(parameters = {}) {
  const config = useConfig(parameters);
  const chainId = useChainId({ config });
  const options = callQueryOptions(config, {
    ...parameters,
    chainId: parameters.chainId ?? chainId
  });
  return useQuery2(options);
}

// node_modules/@wagmi/core/dist/esm/actions/watchChains.js
function watchChains(config, parameters) {
  const { onChange } = parameters;
  return config._internal.chains.subscribe((chains, prevChains) => {
    onChange(chains, prevChains);
  });
}

// node_modules/wagmi/dist/esm/hooks/useSyncExternalStoreWithTracked.js
var import_react7 = __toESM(require_react(), 1);
var import_with_selector = __toESM(require_with_selector(), 1);
var isPlainObject3 = (obj) => typeof obj === "object" && !Array.isArray(obj);
function useSyncExternalStoreWithTracked(subscribe, getSnapshot, getServerSnapshot = getSnapshot, isEqual2 = deepEqual) {
  const trackedKeys = (0, import_react7.useRef)([]);
  const result = (0, import_with_selector.useSyncExternalStoreWithSelector)(subscribe, getSnapshot, getServerSnapshot, (x) => x, (a, b) => {
    if (isPlainObject3(a) && isPlainObject3(b) && trackedKeys.current.length) {
      for (const key of trackedKeys.current) {
        const equal = isEqual2(a[key], b[key]);
        if (!equal)
          return false;
      }
      return true;
    }
    return isEqual2(a, b);
  });
  return (0, import_react7.useMemo)(() => {
    if (isPlainObject3(result)) {
      const trackedResult = { ...result };
      let properties = {};
      for (const [key, value] of Object.entries(trackedResult)) {
        properties = {
          ...properties,
          [key]: {
            configurable: false,
            enumerable: true,
            get: () => {
              if (!trackedKeys.current.includes(key)) {
                trackedKeys.current.push(key);
              }
              return value;
            }
          }
        };
      }
      Object.defineProperties(trackedResult, properties);
      return trackedResult;
    }
    return result;
  }, [result]);
}

// node_modules/wagmi/dist/esm/hooks/useConnection.js
function useConnection(parameters = {}) {
  const config = useConfig(parameters);
  return useSyncExternalStoreWithTracked((onChange) => watchConnection(config, { onChange }), () => getConnection(config));
}

// node_modules/wagmi/dist/esm/hooks/useCallsStatus.js
function useCallsStatus(parameters) {
  const config = useConfig(parameters);
  const { connector } = useConnection({ config });
  const options = getCallsStatusQueryOptions(config, {
    ...parameters,
    connector: parameters.connector ?? connector
  });
  return useQuery2(options);
}

// node_modules/wagmi/dist/esm/hooks/useCapabilities.js
function useCapabilities(parameters = {}) {
  const config = useConfig(parameters);
  const { address, connector } = useConnection({ config });
  const options = getCapabilitiesQueryOptions(config, {
    ...parameters,
    account: parameters.account ?? address,
    connector: parameters.connector ?? connector
  });
  return useQuery2(options);
}

// node_modules/wagmi/dist/esm/hooks/useChains.js
var import_react8 = __toESM(require_react(), 1);
function useChains(parameters = {}) {
  const config = useConfig(parameters);
  return (0, import_react8.useSyncExternalStore)((onChange) => watchChains(config, { onChange }), () => getChains(config), () => getChains(config));
}

// node_modules/wagmi/dist/esm/hooks/useClient.js
var import_with_selector2 = __toESM(require_with_selector(), 1);
function useClient(parameters = {}) {
  const config = useConfig(parameters);
  return (0, import_with_selector2.useSyncExternalStoreWithSelector)((onChange) => watchClient(config, { onChange }), () => getClient(config, parameters), () => getClient(config, parameters), (x) => x, (a, b) => (a == null ? void 0 : a.uid) === (b == null ? void 0 : b.uid));
}

// node_modules/wagmi/dist/esm/hooks/useConnect.js
var import_react10 = __toESM(require_react(), 1);

// node_modules/wagmi/dist/esm/hooks/useConnectors.js
var import_react9 = __toESM(require_react(), 1);
function useConnectors(parameters = {}) {
  const config = useConfig(parameters);
  return (0, import_react9.useSyncExternalStore)((onChange) => watchConnectors(config, { onChange }), () => getConnectors(config), () => getConnectors(config));
}

// node_modules/wagmi/dist/esm/hooks/useConnect.js
function useConnect(parameters = {}) {
  const config = useConfig(parameters);
  const options = connectMutationOptions(config, parameters);
  const mutation = useMutation(options);
  (0, import_react10.useEffect)(() => {
    return config.subscribe(({ status }) => status, (status, previousStatus) => {
      if (previousStatus === "connected" && status === "disconnected")
        mutation.reset();
    });
  }, [config, mutation.reset]);
  return {
    ...mutation,
    connect: mutation.mutate,
    connectAsync: mutation.mutateAsync,
    connectors: useConnectors({ config })
  };
}

// node_modules/wagmi/dist/esm/hooks/useConnectionEffect.js
var import_react11 = __toESM(require_react(), 1);
function useConnectionEffect(parameters = {}) {
  const { onConnect, onDisconnect } = parameters;
  const config = useConfig(parameters);
  (0, import_react11.useEffect)(() => {
    return watchConnection(config, {
      onChange(data, prevData) {
        if ((prevData.status === "reconnecting" || prevData.status === "connecting" && prevData.address === void 0) && data.status === "connected") {
          const { address, addresses, chain: chain2, chainId, connector } = data;
          const isReconnected = prevData.status === "reconnecting" || // if `previousAccount.status` is `undefined`, the connector connected immediately.
          prevData.status === void 0;
          onConnect == null ? void 0 : onConnect({
            address,
            addresses,
            chain: chain2,
            chainId,
            connector,
            isReconnected
          });
        } else if (prevData.status === "connected" && data.status === "disconnected")
          onDisconnect == null ? void 0 : onDisconnect();
      }
    });
  }, [config, onConnect, onDisconnect]);
}

// node_modules/wagmi/dist/esm/hooks/useConnections.js
var import_react12 = __toESM(require_react(), 1);
function useConnections(parameters = {}) {
  const config = useConfig(parameters);
  return (0, import_react12.useSyncExternalStore)((onChange) => watchConnections(config, { onChange }), () => getConnections(config), () => getConnections(config));
}

// node_modules/wagmi/dist/esm/hooks/useConnectorClient.js
var import_react13 = __toESM(require_react(), 1);
function useConnectorClient(parameters = {}) {
  const config = useConfig(parameters);
  const chainId = useChainId({ config });
  const { address, connector } = useConnection({ config });
  const options = getConnectorClientQueryOptions(config, {
    ...parameters,
    chainId: parameters.chainId ?? chainId,
    connector: parameters.connector ?? connector,
    query: parameters.query
  });
  const addressRef = (0, import_react13.useRef)(address);
  const queryClient = useQueryClient();
  (0, import_react13.useEffect)(() => {
    const previousAddress = addressRef.current;
    if (!address && previousAddress) {
      queryClient.removeQueries({ queryKey: options.queryKey });
      addressRef.current = void 0;
    } else if (address !== previousAddress) {
      queryClient.invalidateQueries({ queryKey: options.queryKey });
      addressRef.current = address;
    }
  }, [address, queryClient]);
  return useQuery2(options);
}

// node_modules/wagmi/dist/esm/hooks/useContractEvents.js
function useContractEvents(parameters = {}) {
  const config = useConfig(parameters);
  const chainId = useChainId({ config });
  const options = getContractEventsQueryOptions(config, {
    ...parameters,
    chainId: parameters.chainId ?? chainId
  });
  return useQuery2(options);
}

// node_modules/wagmi/dist/esm/hooks/useDeployContract.js
function useDeployContract(parameters = {}) {
  const config = useConfig(parameters);
  const options = deployContractMutationOptions(config, parameters);
  const mutation = useMutation(options);
  return {
    ...mutation,
    deployContract: mutation.mutate,
    deployContractAsync: mutation.mutateAsync
  };
}

// node_modules/wagmi/dist/esm/hooks/useDisconnect.js
function useDisconnect(parameters = {}) {
  const config = useConfig(parameters);
  const options = disconnectMutationOptions(config, parameters);
  const mutation = useMutation(options);
  return {
    ...mutation,
    connectors: useConnections({ config }).map((connection) => connection.connector),
    disconnect: mutation.mutate,
    disconnectAsync: mutation.mutateAsync
  };
}

// node_modules/wagmi/dist/esm/hooks/useEnsAddress.js
function useEnsAddress(parameters = {}) {
  const config = useConfig(parameters);
  const chainId = useChainId({ config });
  const options = getEnsAddressQueryOptions(config, {
    ...parameters,
    chainId: parameters.chainId ?? chainId
  });
  return useQuery2(options);
}

// node_modules/wagmi/dist/esm/hooks/useEnsAvatar.js
function useEnsAvatar(parameters = {}) {
  const config = useConfig(parameters);
  const chainId = useChainId({ config });
  const options = getEnsAvatarQueryOptions(config, {
    ...parameters,
    chainId: parameters.chainId ?? chainId
  });
  return useQuery2(options);
}

// node_modules/wagmi/dist/esm/hooks/useEnsName.js
function useEnsName(parameters = {}) {
  const config = useConfig(parameters);
  const chainId = useChainId({ config });
  const options = getEnsNameQueryOptions(config, {
    ...parameters,
    chainId: parameters.chainId ?? chainId
  });
  return useQuery2(options);
}

// node_modules/wagmi/dist/esm/hooks/useEnsResolver.js
function useEnsResolver(parameters = {}) {
  const config = useConfig(parameters);
  const chainId = useChainId({ config });
  const options = getEnsResolverQueryOptions(config, {
    ...parameters,
    chainId: parameters.chainId ?? chainId
  });
  return useQuery2(options);
}

// node_modules/wagmi/dist/esm/hooks/useEnsText.js
function useEnsText(parameters = {}) {
  const config = useConfig(parameters);
  const chainId = useChainId({ config });
  const options = getEnsTextQueryOptions(config, {
    ...parameters,
    chainId: parameters.chainId ?? chainId
  });
  return useQuery2(options);
}

// node_modules/wagmi/dist/esm/hooks/useEstimateFeesPerGas.js
function useEstimateFeesPerGas(parameters = {}) {
  const config = useConfig(parameters);
  const chainId = useChainId({ config });
  const options = estimateFeesPerGasQueryOptions(config, {
    ...parameters,
    chainId: parameters.chainId ?? chainId
  });
  return useQuery2(options);
}

// node_modules/wagmi/dist/esm/hooks/useEstimateGas.js
function useEstimateGas(parameters = {}) {
  const config = useConfig(parameters);
  const { address, connector } = useConnection();
  const chainId = useChainId({ config });
  const options = estimateGasQueryOptions(config, {
    ...parameters,
    account: parameters.account ?? address,
    chainId: parameters.chainId ?? chainId,
    connector: parameters.connector ?? connector
  });
  return useQuery2(options);
}

// node_modules/wagmi/dist/esm/hooks/useEstimateMaxPriorityFeePerGas.js
function useEstimateMaxPriorityFeePerGas(parameters = {}) {
  const config = useConfig(parameters);
  const chainId = useChainId({ config });
  const options = estimateMaxPriorityFeePerGasQueryOptions(config, {
    ...parameters,
    chainId: parameters.chainId ?? chainId
  });
  return useQuery2(options);
}

// node_modules/wagmi/dist/esm/hooks/useFeeHistory.js
function useFeeHistory(parameters = {}) {
  const config = useConfig(parameters);
  const chainId = useChainId({ config });
  const options = getFeeHistoryQueryOptions(config, {
    ...parameters,
    chainId: parameters.chainId ?? chainId
  });
  return useQuery2(options);
}

// node_modules/wagmi/dist/esm/hooks/useGasPrice.js
function useGasPrice(parameters = {}) {
  const config = useConfig(parameters);
  const chainId = useChainId({ config });
  const options = getGasPriceQueryOptions(config, {
    ...parameters,
    chainId: parameters.chainId ?? chainId
  });
  return useQuery2(options);
}

// node_modules/wagmi/dist/esm/hooks/useInfiniteReadContracts.js
function useInfiniteReadContracts(parameters) {
  const { contracts = [], query } = parameters;
  const config = useConfig(parameters);
  const chainId = useChainId({ config });
  const options = infiniteReadContractsQueryOptions(config, {
    ...parameters,
    chainId,
    contracts,
    query
  });
  return useInfiniteQuery2({
    ...query,
    ...options,
    initialPageParam: options.initialPageParam,
    structuralSharing: query.structuralSharing ?? structuralSharing
  });
}

// node_modules/wagmi/dist/esm/hooks/usePrepareTransactionRequest.js
function usePrepareTransactionRequest(parameters = {}) {
  const config = useConfig(parameters);
  const chainId = useChainId({ config });
  const options = prepareTransactionRequestQueryOptions(config, {
    ...parameters,
    chainId: parameters.chainId ?? chainId
  });
  return useQuery2(options);
}

// node_modules/wagmi/dist/esm/hooks/useProof.js
function useProof(parameters = {}) {
  const config = useConfig(parameters);
  const chainId = useChainId({ config });
  const options = getProofQueryOptions(config, {
    ...parameters,
    chainId: parameters.chainId ?? chainId
  });
  return useQuery2(options);
}

// node_modules/wagmi/dist/esm/hooks/usePublicClient.js
var import_with_selector3 = __toESM(require_with_selector(), 1);
function usePublicClient(parameters = {}) {
  const config = useConfig(parameters);
  return (0, import_with_selector3.useSyncExternalStoreWithSelector)((onChange) => watchPublicClient(config, { onChange }), () => getPublicClient(config, parameters), () => getPublicClient(config, parameters), (x) => x, (a, b) => (a == null ? void 0 : a.uid) === (b == null ? void 0 : b.uid));
}

// node_modules/wagmi/dist/esm/hooks/useReadContract.js
function useReadContract(parameters = {}) {
  const config = useConfig(parameters);
  const chainId = useChainId({ config });
  const options = readContractQueryOptions(config, {
    ...parameters,
    chainId: parameters.chainId ?? chainId
  });
  return useQuery2(options);
}

// node_modules/wagmi/dist/esm/hooks/useReadContracts.js
var import_react14 = __toESM(require_react(), 1);
function useReadContracts(parameters = {}) {
  const config = useConfig(parameters);
  const chainId = useChainId({ config });
  const contractsChainId = (0, import_react14.useMemo)(() => {
    var _a, _b;
    const firstChainId = (_b = (_a = parameters.contracts) == null ? void 0 : _a[0]) == null ? void 0 : _b.chainId;
    if ((parameters.contracts ?? []).every((contract) => contract.chainId === firstChainId))
      return firstChainId;
    return void 0;
  }, [parameters.contracts]);
  const options = readContractsQueryOptions(config, {
    ...parameters,
    chainId: parameters.chainId ?? contractsChainId ?? chainId
  });
  return useQuery2(options);
}

// node_modules/wagmi/dist/esm/hooks/useReconnect.js
function useReconnect(parameters = {}) {
  const config = useConfig(parameters);
  const options = reconnectMutationOptions(config, parameters);
  const mutation = useMutation(options);
  return {
    ...mutation,
    connectors: config.connectors,
    reconnect: mutation.mutate,
    reconnectAsync: mutation.mutateAsync
  };
}

// node_modules/wagmi/dist/esm/hooks/useSendCalls.js
function useSendCalls(parameters = {}) {
  const config = useConfig(parameters);
  const options = sendCallsMutationOptions(config, parameters);
  const mutation = useMutation(options);
  return {
    ...mutation,
    sendCalls: mutation.mutate,
    sendCallsAsync: mutation.mutateAsync
  };
}

// node_modules/wagmi/dist/esm/hooks/useSendCallsSync.js
function useSendCallsSync(parameters = {}) {
  const config = useConfig(parameters);
  const options = sendCallsSyncMutationOptions(config, parameters);
  const mutation = useMutation(options);
  return {
    ...mutation,
    sendCallsSync: mutation.mutate,
    sendCallsSyncAsync: mutation.mutateAsync
  };
}

// node_modules/wagmi/dist/esm/hooks/useSendTransaction.js
function useSendTransaction(parameters = {}) {
  const config = useConfig(parameters);
  const options = sendTransactionMutationOptions(config, parameters);
  const mutation = useMutation(options);
  return {
    ...mutation,
    sendTransaction: mutation.mutate,
    sendTransactionAsync: mutation.mutateAsync
  };
}

// node_modules/wagmi/dist/esm/hooks/useSendTransactionSync.js
function useSendTransactionSync(parameters = {}) {
  const config = useConfig(parameters);
  const options = sendTransactionSyncMutationOptions(config, parameters);
  const mutation = useMutation(options);
  return {
    ...mutation,
    sendTransactionSync: mutation.mutate,
    sendTransactionSyncAsync: mutation.mutateAsync
  };
}

// node_modules/wagmi/dist/esm/hooks/useShowCallsStatus.js
function useShowCallsStatus(parameters = {}) {
  const config = useConfig(parameters);
  const options = showCallsStatusMutationOptions(config, parameters);
  const mutation = useMutation(options);
  return {
    ...mutation,
    showCallsStatus: mutation.mutate,
    showCallsStatusAsync: mutation.mutateAsync
  };
}

// node_modules/wagmi/dist/esm/hooks/useSignMessage.js
function useSignMessage(parameters = {}) {
  const config = useConfig(parameters);
  const options = signMessageMutationOptions(config, parameters);
  const mutation = useMutation(options);
  return {
    ...mutation,
    signMessage: mutation.mutate,
    signMessageAsync: mutation.mutateAsync
  };
}

// node_modules/wagmi/dist/esm/hooks/useSignTransaction.js
function useSignTransaction(parameters = {}) {
  const config = useConfig(parameters);
  const options = signTransactionMutationOptions(config, parameters);
  const mutation = useMutation(options);
  return {
    ...mutation,
    signTransaction: mutation.mutate,
    signTransactionAsync: mutation.mutateAsync
  };
}

// node_modules/wagmi/dist/esm/hooks/useSignTypedData.js
function useSignTypedData(parameters = {}) {
  const config = useConfig(parameters);
  const options = signTypedDataMutationOptions(config, parameters);
  const mutation = useMutation(options);
  return {
    ...mutation,
    signTypedData: mutation.mutate,
    signTypedDataAsync: mutation.mutateAsync
  };
}

// node_modules/wagmi/dist/esm/hooks/useSimulateContract.js
function useSimulateContract(parameters = {}) {
  const config = useConfig(parameters);
  const { address, connector } = useConnection();
  const chainId = useChainId({ config });
  const options = simulateContractQueryOptions(config, {
    ...parameters,
    account: parameters.account ?? address,
    chainId: parameters.chainId ?? chainId,
    connector: parameters.connector ?? connector
  });
  return useQuery2(options);
}

// node_modules/wagmi/dist/esm/hooks/useStorageAt.js
function useStorageAt(parameters = {}) {
  const config = useConfig(parameters);
  const chainId = useChainId({ config });
  const options = getStorageAtQueryOptions(config, {
    ...parameters,
    chainId: parameters.chainId ?? chainId
  });
  return useQuery2(options);
}

// node_modules/wagmi/dist/esm/hooks/useSwitchChain.js
function useSwitchChain(parameters = {}) {
  const config = useConfig(parameters);
  const options = switchChainMutationOptions(config, parameters);
  const mutation = useMutation(options);
  return {
    ...mutation,
    chains: useChains({ config }),
    switchChain: mutation.mutate,
    switchChainAsync: mutation.mutateAsync
  };
}

// node_modules/wagmi/dist/esm/hooks/useSwitchConnection.js
function useSwitchConnection(parameters = {}) {
  const config = useConfig(parameters);
  const options = switchConnectionMutationOptions(config, parameters);
  const mutation = useMutation(options);
  return {
    ...mutation,
    connectors: useConnections({ config }).map((connection) => connection.connector),
    switchAccount: mutation.mutate,
    switchAccountAsync: mutation.mutateAsync,
    switchConnection: mutation.mutate,
    switchConnectionAsync: mutation.mutateAsync
  };
}

// node_modules/wagmi/dist/esm/hooks/useTransaction.js
function useTransaction(parameters = {}) {
  const config = useConfig(parameters);
  const chainId = useChainId({ config });
  const options = getTransactionQueryOptions(config, {
    ...parameters,
    chainId: parameters.chainId ?? chainId
  });
  return useQuery2(options);
}

// node_modules/wagmi/dist/esm/hooks/useTransactionConfirmations.js
function useTransactionConfirmations(parameters = {}) {
  const config = useConfig(parameters);
  const chainId = useChainId({ config });
  const options = getTransactionConfirmationsQueryOptions(config, {
    ...parameters,
    chainId: parameters.chainId ?? chainId
  });
  return useQuery2(options);
}

// node_modules/wagmi/dist/esm/hooks/useTransactionCount.js
function useTransactionCount(parameters = {}) {
  const config = useConfig(parameters);
  const chainId = useChainId({ config });
  const options = getTransactionCountQueryOptions(config, {
    ...parameters,
    chainId: parameters.chainId ?? chainId
  });
  return useQuery2(options);
}

// node_modules/wagmi/dist/esm/hooks/useTransactionReceipt.js
function useTransactionReceipt(parameters = {}) {
  const config = useConfig(parameters);
  const chainId = useChainId({ config });
  const options = getTransactionReceiptQueryOptions(config, {
    ...parameters,
    chainId: parameters.chainId ?? chainId
  });
  return useQuery2(options);
}

// node_modules/wagmi/dist/esm/hooks/useVerifyMessage.js
function useVerifyMessage(parameters = {}) {
  const config = useConfig(parameters);
  const chainId = useChainId({ config });
  const options = verifyMessageQueryOptions(config, {
    ...parameters,
    chainId: parameters.chainId ?? chainId
  });
  return useQuery2(options);
}

// node_modules/wagmi/dist/esm/hooks/useVerifyTypedData.js
function useVerifyTypedData(parameters = {}) {
  const config = useConfig(parameters);
  const chainId = useChainId({ config });
  const options = verifyTypedDataQueryOptions(config, {
    ...parameters,
    chainId: parameters.chainId ?? chainId
  });
  return useQuery2(options);
}

// node_modules/wagmi/dist/esm/hooks/useWaitForCallsStatus.js
function useWaitForCallsStatus(parameters) {
  const config = useConfig(parameters);
  const { connector } = useConnection({ config });
  const options = waitForCallsStatusQueryOptions(config, {
    ...parameters,
    connector: parameters.connector ?? connector
  });
  return useQuery2(options);
}

// node_modules/wagmi/dist/esm/hooks/useWaitForTransactionReceipt.js
function useWaitForTransactionReceipt(parameters = {}) {
  const config = useConfig(parameters);
  const chainId = useChainId({ config });
  const options = waitForTransactionReceiptQueryOptions(config, {
    ...parameters,
    chainId: parameters.chainId ?? chainId
  });
  return useQuery2(options);
}

// node_modules/wagmi/dist/esm/hooks/useWalletClient.js
var import_react15 = __toESM(require_react(), 1);
function useWalletClient(parameters = {}) {
  const config = useConfig(parameters);
  const chainId = useChainId({ config });
  const { address, connector } = useConnection({ config });
  const options = getWalletClientQueryOptions(config, {
    ...parameters,
    chainId: parameters.chainId ?? chainId,
    connector: parameters.connector ?? connector,
    query: parameters.query
  });
  const addressRef = (0, import_react15.useRef)(address);
  const queryClient = useQueryClient();
  (0, import_react15.useEffect)(() => {
    const previousAddress = addressRef.current;
    if (!address && previousAddress) {
      queryClient.removeQueries({ queryKey: options.queryKey });
      addressRef.current = void 0;
    } else if (address !== previousAddress) {
      queryClient.invalidateQueries({ queryKey: options.queryKey });
      addressRef.current = address;
    }
  }, [address, queryClient]);
  return useQuery2(options);
}

// node_modules/wagmi/dist/esm/hooks/useWatchAsset.js
function useWatchAsset(parameters = {}) {
  const config = useConfig(parameters);
  const options = watchAssetMutationOptions(config, parameters);
  const mutation = useMutation(options);
  return {
    ...mutation,
    watchAsset: mutation.mutate,
    watchAssetAsync: mutation.mutateAsync
  };
}

// node_modules/wagmi/dist/esm/hooks/useWatchContractEvent.js
var import_react16 = __toESM(require_react(), 1);
function useWatchContractEvent(parameters = {}) {
  const { enabled = true, onLogs, config: _, ...rest } = parameters;
  const config = useConfig(parameters);
  const configChainId = useChainId({ config });
  const chainId = parameters.chainId ?? configChainId;
  const onLogsRef = (0, import_react16.useRef)(onLogs);
  const onErrorRef = (0, import_react16.useRef)(rest.onError);
  onLogsRef.current = onLogs;
  onErrorRef.current = rest.onError;
  const abiRef = (0, import_react16.useRef)(rest.abi);
  const addressRef = (0, import_react16.useRef)(rest.address);
  const argsRef = (0, import_react16.useRef)(rest.args);
  if (!abiRef.current || !deepEqual(abiRef.current, rest.abi))
    abiRef.current = rest.abi;
  if (!addressRef.current || !deepEqual(addressRef.current, rest.address))
    addressRef.current = rest.address;
  if (!argsRef.current || !deepEqual(argsRef.current, rest.args))
    argsRef.current = rest.args;
  (0, import_react16.useEffect)(() => {
    if (!enabled)
      return;
    if (!onLogsRef.current)
      return;
    return watchContractEvent2(config, {
      ...rest,
      chainId,
      onLogs: (logs) => {
        var _a;
        return (_a = onLogsRef.current) == null ? void 0 : _a.call(onLogsRef, logs);
      },
      onError: (error) => {
        var _a;
        return (_a = onErrorRef.current) == null ? void 0 : _a.call(onErrorRef, error);
      }
    });
  }, [
    chainId,
    config,
    enabled,
    ///
    abiRef.current,
    addressRef.current,
    argsRef.current,
    rest.batch,
    rest.eventName,
    rest.fromBlock,
    rest.poll,
    rest.pollingInterval,
    rest.strict,
    rest.syncConnectedChain
  ]);
}

// node_modules/wagmi/dist/esm/hooks/useWatchPendingTransactions.js
var import_react17 = __toESM(require_react(), 1);
function useWatchPendingTransactions(parameters = {}) {
  const { enabled = true, onTransactions, config: _, ...rest } = parameters;
  const config = useConfig(parameters);
  const configChainId = useChainId({ config });
  const chainId = parameters.chainId ?? configChainId;
  const onTransactionsRef = (0, import_react17.useRef)(onTransactions);
  const onErrorRef = (0, import_react17.useRef)(rest.onError);
  onTransactionsRef.current = onTransactions;
  onErrorRef.current = rest.onError;
  (0, import_react17.useEffect)(() => {
    if (!enabled)
      return;
    if (!onTransactionsRef.current)
      return;
    return watchPendingTransactions2(config, {
      ...rest,
      chainId,
      onTransactions: (transactions) => {
        var _a;
        return (_a = onTransactionsRef.current) == null ? void 0 : _a.call(onTransactionsRef, transactions);
      },
      onError: (error) => {
        var _a;
        return (_a = onErrorRef.current) == null ? void 0 : _a.call(onErrorRef, error);
      }
    });
  }, [
    chainId,
    config,
    enabled,
    ///
    rest.batch,
    rest.poll,
    rest.pollingInterval,
    rest.syncConnectedChain
  ]);
}

// node_modules/wagmi/dist/esm/hooks/useWriteContract.js
function useWriteContract(parameters = {}) {
  const config = useConfig(parameters);
  const options = writeContractMutationOptions(config, parameters);
  const mutation = useMutation(options);
  return {
    ...mutation,
    writeContract: mutation.mutate,
    writeContractAsync: mutation.mutateAsync
  };
}

// node_modules/wagmi/dist/esm/hooks/useWriteContractSync.js
function useWriteContractSync(parameters = {}) {
  const config = useConfig(parameters);
  const options = writeContractSyncMutationOptions(config, parameters);
  const mutation = useMutation(options);
  return {
    ...mutation,
    writeContractSync: mutation.mutate,
    writeContractSyncAsync: mutation.mutateAsync
  };
}
export {
  BaseError4 as BaseError,
  ChainNotConfiguredError,
  ConnectorAccountNotFoundError,
  ConnectorAlreadyConnectedError,
  ConnectorChainMismatchError,
  ConnectorNotFoundError,
  ConnectorUnavailableReconnectingError,
  Hydrate,
  ProviderNotFoundError,
  SwitchChainNotSupportedError,
  WagmiContext,
  WagmiProvider,
  WagmiProviderNotFoundError,
  cookieStorage,
  cookieToInitialState,
  createConfig,
  createConnector,
  createStorage,
  custom,
  deepEqual,
  deserialize,
  fallback2 as fallback,
  http,
  injected,
  mock,
  noopStorage,
  parseCookie,
  serialize,
  unstable_connector,
  useConnection as useAccount,
  useConnectionEffect as useAccountEffect,
  useBalance,
  useBlobBaseFee,
  useBlock,
  useBlockNumber,
  useBlockTransactionCount,
  useBytecode,
  useCall,
  useCallsStatus,
  useCapabilities,
  useChainId,
  useChains,
  useClient,
  useConfig,
  useConnect,
  useConnection,
  useConnectionEffect,
  useConnections,
  useConnectorClient,
  useConnectors,
  useContractEvents,
  useDeployContract,
  useDisconnect,
  useEnsAddress,
  useEnsAvatar,
  useEnsName,
  useEnsResolver,
  useEnsText,
  useEstimateFeesPerGas,
  useEstimateGas,
  useEstimateMaxPriorityFeePerGas,
  useFeeHistory,
  useGasPrice,
  useInfiniteReadContracts,
  usePrepareTransactionRequest,
  useProof,
  usePublicClient,
  useReadContract,
  useReadContracts,
  useReconnect,
  useSendCalls,
  useSendCallsSync,
  useSendTransaction,
  useSendTransactionSync,
  useShowCallsStatus,
  useSignMessage,
  useSignTransaction,
  useSignTypedData,
  useSimulateContract,
  useStorageAt,
  useSwitchConnection as useSwitchAccount,
  useSwitchChain,
  useSwitchConnection,
  useTransaction,
  useTransactionConfirmations,
  useTransactionCount,
  useTransactionReceipt,
  useVerifyMessage,
  useVerifyTypedData,
  useWaitForCallsStatus,
  useWaitForTransactionReceipt,
  useWalletClient,
  useWatchAsset,
  useWatchBlockNumber,
  useWatchBlocks,
  useWatchContractEvent,
  useWatchPendingTransactions,
  useWriteContract,
  useWriteContractSync,
  version2 as version,
  webSocket2 as webSocket
};
/*! Bundled license information:

use-sync-external-store/cjs/use-sync-external-store-shim.development.js:
  (**
   * @license React
   * use-sync-external-store-shim.development.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.development.js:
  (**
   * @license React
   * use-sync-external-store-shim/with-selector.development.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

@scure/base/lib/esm/index.js:
  (*! scure-base - MIT License (c) 2022 Paul Miller (paulmillr.com) *)

@scure/bip32/lib/esm/index.js:
  (*! scure-bip32 - MIT License (c) 2022 Patricio Palladino, Paul Miller (paulmillr.com) *)

@scure/bip39/esm/index.js:
  (*! scure-bip39 - MIT License (c) 2022 Patricio Palladino, Paul Miller (paulmillr.com) *)
*/
//# sourceMappingURL=wagmi.js.map
