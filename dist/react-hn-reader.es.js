import Ue, { useState as $, useEffect as K, useCallback as X, useRef as wr } from "react";
import x, { keyframes as qe, ThemeProvider as Er, createGlobalStyle as Rr } from "styled-components";
var ge = { exports: {} }, J = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Me;
function _r() {
  if (Me) return J;
  Me = 1;
  var i = Ue, c = Symbol.for("react.element"), y = Symbol.for("react.fragment"), f = Object.prototype.hasOwnProperty, O = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, P = { key: !0, ref: !0, __self: !0, __source: !0 };
  function C(w, d, F) {
    var g, R = {}, p = null, _ = null;
    F !== void 0 && (p = "" + F), d.key !== void 0 && (p = "" + d.key), d.ref !== void 0 && (_ = d.ref);
    for (g in d) f.call(d, g) && !P.hasOwnProperty(g) && (R[g] = d[g]);
    if (w && w.defaultProps) for (g in d = w.defaultProps, d) R[g] === void 0 && (R[g] = d[g]);
    return { $$typeof: c, type: w, key: p, ref: _, props: R, _owner: O.current };
  }
  return J.Fragment = y, J.jsx = C, J.jsxs = C, J;
}
var G = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ve;
function jr() {
  return Ve || (Ve = 1, process.env.NODE_ENV !== "production" && function() {
    var i = Ue, c = Symbol.for("react.element"), y = Symbol.for("react.portal"), f = Symbol.for("react.fragment"), O = Symbol.for("react.strict_mode"), P = Symbol.for("react.profiler"), C = Symbol.for("react.provider"), w = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), F = Symbol.for("react.suspense"), g = Symbol.for("react.suspense_list"), R = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), _ = Symbol.for("react.offscreen"), D = Symbol.iterator, Z = "@@iterator";
    function ie(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = D && e[D] || e[Z];
      return typeof r == "function" ? r : null;
    }
    var L = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function m(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
          t[o - 1] = arguments[o];
        V("error", e, t);
      }
    }
    function V(e, r, t) {
      {
        var o = L.ReactDebugCurrentFrame, l = o.getStackAddendum();
        l !== "" && (r += "%s", t = t.concat([l]));
        var u = t.map(function(s) {
          return String(s);
        });
        u.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, u);
      }
    }
    var I = !1, Q = !1, Y = !1, ee = !1, z = !1, N;
    N = Symbol.for("react.module.reference");
    function H(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === f || e === P || z || e === O || e === F || e === g || ee || e === _ || I || Q || Y || typeof e == "object" && e !== null && (e.$$typeof === p || e.$$typeof === R || e.$$typeof === C || e.$$typeof === w || e.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === N || e.getModuleId !== void 0));
    }
    function U(e, r, t) {
      var o = e.displayName;
      if (o)
        return o;
      var l = r.displayName || r.name || "";
      return l !== "" ? t + "(" + l + ")" : t;
    }
    function S(e) {
      return e.displayName || "Context";
    }
    function E(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && m("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case f:
          return "Fragment";
        case y:
          return "Portal";
        case P:
          return "Profiler";
        case O:
          return "StrictMode";
        case F:
          return "Suspense";
        case g:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case w:
            var r = e;
            return S(r) + ".Consumer";
          case C:
            var t = e;
            return S(t._context) + ".Provider";
          case d:
            return U(e, e.render, "ForwardRef");
          case R:
            var o = e.displayName || null;
            return o !== null ? o : E(e.type) || "Memo";
          case p: {
            var l = e, u = l._payload, s = l._init;
            try {
              return E(s(u));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var b = Object.assign, A = 0, ye, be, xe, we, Ee, Re, _e;
    function je() {
    }
    je.__reactDisabledLog = !0;
    function Je() {
      {
        if (A === 0) {
          ye = console.log, be = console.info, xe = console.warn, we = console.error, Ee = console.group, Re = console.groupCollapsed, _e = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: je,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        A++;
      }
    }
    function Ge() {
      {
        if (A--, A === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: b({}, e, {
              value: ye
            }),
            info: b({}, e, {
              value: be
            }),
            warn: b({}, e, {
              value: xe
            }),
            error: b({}, e, {
              value: we
            }),
            group: b({}, e, {
              value: Ee
            }),
            groupCollapsed: b({}, e, {
              value: Re
            }),
            groupEnd: b({}, e, {
              value: _e
            })
          });
        }
        A < 0 && m("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ae = L.ReactCurrentDispatcher, se;
    function re(e, r, t) {
      {
        if (se === void 0)
          try {
            throw Error();
          } catch (l) {
            var o = l.stack.trim().match(/\n( *(at )?)/);
            se = o && o[1] || "";
          }
        return `
` + se + e;
      }
    }
    var le = !1, te;
    {
      var Ke = typeof WeakMap == "function" ? WeakMap : Map;
      te = new Ke();
    }
    function Te(e, r) {
      if (!e || le)
        return "";
      {
        var t = te.get(e);
        if (t !== void 0)
          return t;
      }
      var o;
      le = !0;
      var l = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var u;
      u = ae.current, ae.current = null, Je();
      try {
        if (r) {
          var s = function() {
            throw Error();
          };
          if (Object.defineProperty(s.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(s, []);
            } catch (T) {
              o = T;
            }
            Reflect.construct(e, [], s);
          } else {
            try {
              s.call();
            } catch (T) {
              o = T;
            }
            e.call(s.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (T) {
            o = T;
          }
          e();
        }
      } catch (T) {
        if (T && o && typeof T.stack == "string") {
          for (var a = T.stack.split(`
`), j = o.stack.split(`
`), v = a.length - 1, h = j.length - 1; v >= 1 && h >= 0 && a[v] !== j[h]; )
            h--;
          for (; v >= 1 && h >= 0; v--, h--)
            if (a[v] !== j[h]) {
              if (v !== 1 || h !== 1)
                do
                  if (v--, h--, h < 0 || a[v] !== j[h]) {
                    var k = `
` + a[v].replace(" at new ", " at ");
                    return e.displayName && k.includes("<anonymous>") && (k = k.replace("<anonymous>", e.displayName)), typeof e == "function" && te.set(e, k), k;
                  }
                while (v >= 1 && h >= 0);
              break;
            }
        }
      } finally {
        le = !1, ae.current = u, Ge(), Error.prepareStackTrace = l;
      }
      var M = e ? e.displayName || e.name : "", B = M ? re(M) : "";
      return typeof e == "function" && te.set(e, B), B;
    }
    function Xe(e, r, t) {
      return Te(e, !1);
    }
    function Ze(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function ne(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Te(e, Ze(e));
      if (typeof e == "string")
        return re(e);
      switch (e) {
        case F:
          return re("Suspense");
        case g:
          return re("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case d:
            return Xe(e.render);
          case R:
            return ne(e.type, r, t);
          case p: {
            var o = e, l = o._payload, u = o._init;
            try {
              return ne(u(l), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var q = Object.prototype.hasOwnProperty, Se = {}, Ce = L.ReactDebugCurrentFrame;
    function oe(e) {
      if (e) {
        var r = e._owner, t = ne(e.type, e._source, r ? r.type : null);
        Ce.setExtraStackFrame(t);
      } else
        Ce.setExtraStackFrame(null);
    }
    function Qe(e, r, t, o, l) {
      {
        var u = Function.call.bind(q);
        for (var s in e)
          if (u(e, s)) {
            var a = void 0;
            try {
              if (typeof e[s] != "function") {
                var j = Error((o || "React class") + ": " + t + " type `" + s + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[s] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw j.name = "Invariant Violation", j;
              }
              a = e[s](r, s, o, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (v) {
              a = v;
            }
            a && !(a instanceof Error) && (oe(l), m("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", o || "React class", t, s, typeof a), oe(null)), a instanceof Error && !(a.message in Se) && (Se[a.message] = !0, oe(l), m("Failed %s type: %s", t, a.message), oe(null));
          }
      }
    }
    var er = Array.isArray;
    function ce(e) {
      return er(e);
    }
    function rr(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function tr(e) {
      try {
        return ke(e), !1;
      } catch {
        return !0;
      }
    }
    function ke(e) {
      return "" + e;
    }
    function Oe(e) {
      if (tr(e))
        return m("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", rr(e)), ke(e);
    }
    var Pe = L.ReactCurrentOwner, nr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Fe, De;
    function or(e) {
      if (q.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function ir(e) {
      if (q.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function ar(e, r) {
      typeof e.ref == "string" && Pe.current;
    }
    function sr(e, r) {
      {
        var t = function() {
          Fe || (Fe = !0, m("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function lr(e, r) {
      {
        var t = function() {
          De || (De = !0, m("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var cr = function(e, r, t, o, l, u, s) {
      var a = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: c,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: s,
        // Record the component responsible for creating this element.
        _owner: u
      };
      return a._store = {}, Object.defineProperty(a._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(a, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: o
      }), Object.defineProperty(a, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: l
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    };
    function ur(e, r, t, o, l) {
      {
        var u, s = {}, a = null, j = null;
        t !== void 0 && (Oe(t), a = "" + t), ir(r) && (Oe(r.key), a = "" + r.key), or(r) && (j = r.ref, ar(r, l));
        for (u in r)
          q.call(r, u) && !nr.hasOwnProperty(u) && (s[u] = r[u]);
        if (e && e.defaultProps) {
          var v = e.defaultProps;
          for (u in v)
            s[u] === void 0 && (s[u] = v[u]);
        }
        if (a || j) {
          var h = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && sr(s, h), j && lr(s, h);
        }
        return cr(e, a, j, l, o, Pe.current, s);
      }
    }
    var ue = L.ReactCurrentOwner, Ae = L.ReactDebugCurrentFrame;
    function W(e) {
      if (e) {
        var r = e._owner, t = ne(e.type, e._source, r ? r.type : null);
        Ae.setExtraStackFrame(t);
      } else
        Ae.setExtraStackFrame(null);
    }
    var fe;
    fe = !1;
    function de(e) {
      return typeof e == "object" && e !== null && e.$$typeof === c;
    }
    function Le() {
      {
        if (ue.current) {
          var e = E(ue.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function fr(e) {
      return "";
    }
    var $e = {};
    function dr(e) {
      {
        var r = Le();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Ie(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = dr(r);
        if ($e[t])
          return;
        $e[t] = !0;
        var o = "";
        e && e._owner && e._owner !== ue.current && (o = " It was passed a child from " + E(e._owner.type) + "."), W(e), m('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, o), W(null);
      }
    }
    function Ye(e, r) {
      {
        if (typeof e != "object")
          return;
        if (ce(e))
          for (var t = 0; t < e.length; t++) {
            var o = e[t];
            de(o) && Ie(o, r);
          }
        else if (de(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var l = ie(e);
          if (typeof l == "function" && l !== e.entries)
            for (var u = l.call(e), s; !(s = u.next()).done; )
              de(s.value) && Ie(s.value, r);
        }
      }
    }
    function vr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === d || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === R))
          t = r.propTypes;
        else
          return;
        if (t) {
          var o = E(r);
          Qe(t, e.props, "prop", o, e);
        } else if (r.PropTypes !== void 0 && !fe) {
          fe = !0;
          var l = E(r);
          m("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", l || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && m("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function hr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var o = r[t];
          if (o !== "children" && o !== "key") {
            W(e), m("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", o), W(null);
            break;
          }
        }
        e.ref !== null && (W(e), m("Invalid attribute `ref` supplied to `React.Fragment`."), W(null));
      }
    }
    var Be = {};
    function We(e, r, t, o, l, u) {
      {
        var s = H(e);
        if (!s) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var j = fr();
          j ? a += j : a += Le();
          var v;
          e === null ? v = "null" : ce(e) ? v = "array" : e !== void 0 && e.$$typeof === c ? (v = "<" + (E(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : v = typeof e, m("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", v, a);
        }
        var h = ur(e, r, t, l, u);
        if (h == null)
          return h;
        if (s) {
          var k = r.children;
          if (k !== void 0)
            if (o)
              if (ce(k)) {
                for (var M = 0; M < k.length; M++)
                  Ye(k[M], e);
                Object.freeze && Object.freeze(k);
              } else
                m("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ye(k, e);
        }
        if (q.call(r, "key")) {
          var B = E(e), T = Object.keys(r).filter(function(xr) {
            return xr !== "key";
          }), ve = T.length > 0 ? "{key: someKey, " + T.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Be[B + ve]) {
            var br = T.length > 0 ? "{" + T.join(": ..., ") + ": ...}" : "{}";
            m(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ve, B, br, B), Be[B + ve] = !0;
          }
        }
        return e === f ? hr(h) : vr(h), h;
      }
    }
    function pr(e, r, t) {
      return We(e, r, t, !0);
    }
    function mr(e, r, t) {
      return We(e, r, t, !1);
    }
    var gr = mr, yr = pr;
    G.Fragment = f, G.jsx = gr, G.jsxs = yr;
  }()), G;
}
process.env.NODE_ENV === "production" ? ge.exports = _r() : ge.exports = jr();
var n = ge.exports;
const Tr = "https://hacker-news.firebaseio.com/v0", Sr = 30;
async function Cr(i, c) {
  try {
    const f = await (await fetch(`${i}/item/${c}.json`)).json();
    return f ? {
      id: String(f.id),
      title: f.title || "",
      url: f.url || "",
      time: f.time || 0,
      score: f.score || 0,
      by: { id: f.by || "" },
      __typename: "Story"
    } : null;
  } catch {
    return null;
  }
}
async function ze(i, c, y) {
  const P = (await (await fetch(`${i}/newstories.json`)).json()).slice(c, c + y);
  return (await Promise.all(P.map((w) => Cr(i, w)))).filter((w) => w !== null);
}
function kr(i = {}) {
  const {
    apiUrl: c = Tr,
    initialCount: y = Sr
  } = i, [f, O] = $(!0), [P, C] = $(null), [w, d] = $([]), [F, g] = $(0);
  K(() => {
    let p = !1;
    async function _() {
      try {
        O(!0);
        const D = await ze(c, 0, y);
        p || (d(D), g(D.length), O(!1));
      } catch (D) {
        p || (C(D instanceof Error ? D : new Error("Failed to fetch stories")), O(!1));
      }
    }
    return _(), () => {
      p = !0;
    };
  }, [c, y]);
  const R = X(async () => {
    try {
      const p = await ze(c, F, y);
      d((_) => [..._, ...p]), g((_) => _ + p.length);
    } catch (p) {
      C(p instanceof Error ? p : new Error("Failed to fetch more stories"));
    }
  }, [c, F, y]);
  return { loading: f, error: P, stories: w, fetchMore: R };
}
const Or = () => /* @__PURE__ */ n.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fillRule: "evenodd",
    strokeLinecap: "square",
    strokeMiterlimit: "1.5",
    clipRule: "evenodd",
    viewBox: "0 0 489 489",
    children: [
      /* @__PURE__ */ n.jsx(
        "path",
        {
          fill: "none",
          stroke: "#000",
          strokeWidth: "25",
          d: "M12.458 260l-.169-248.315L480 11.245V480H240"
        }
      ),
      /* @__PURE__ */ n.jsx(
        "path",
        {
          fillRule: "nonzero",
          d: "M222.95 266.3c2.4 2.4 5.5 3.6 8.7 3.6 3.2 0 6.3-1.2 8.7-3.6l138.6-138.7v79.9c0 6.8 5.5 12.3 12.3 12.3 6.8 0 12.3-5.5 12.3-12.3V98.1c0-6.8-5.5-12.3-12.3-12.3h-109.5c-6.8 0-12.3 5.5-12.3 12.3 0 6.8 5.5 12.3 12.3 12.3h79.9L222.95 249c-4.8 4.8-4.8 12.5 0 17.3z"
        }
      )
    ]
  }
), Pr = x.div`
  display: flex;
  align-items: flex-start;
  cursor: pointer;
  margin-bottom: 10rem;
  transition: background 0.3s;
  position: relative;

  &:hover {
    background: ${(i) => i.theme.orange};

    & span {
      opacity: 0.7;
    }
  }

  & > svg {
    position: relative;
    width: 14rem;
  }

  & span {
    position: absolute;
    bottom: -3rem;
    right: 0;
    font-size: 2rem;
    opacity: 0;
    background: ${(i) => i.theme.platinum};
  }
`, Fr = x.div``, Dr = ({ story: i, onClick: c }) => {
  const y = (f) => {
    f.preventDefault(), c ? c(i) : window.open(i.url, "_blank");
  };
  return /* @__PURE__ */ n.jsxs(Pr, { onClick: y, children: [
    /* @__PURE__ */ n.jsx(Fr, { children: i.title }),
    /* @__PURE__ */ n.jsx(Or, {}),
    /* @__PURE__ */ n.jsx("span", { children: i.by.id })
  ] });
}, Ar = qe`
  100% {
    transform: rotate(360deg);
  }
`, Lr = x.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`, $r = x.div`
  width: 50px;
  height: 50px;
  border: 5px solid #f3f3f3;
  border-top: 5px solid #ff6600;
  border-radius: 50%;
  animation: ${Ar} 1s linear infinite;
`, Ir = () => /* @__PURE__ */ n.jsx(Lr, { children: /* @__PURE__ */ n.jsx($r, {}) }), Yr = x.div`
  background: white;
  color: black;
  font-size: 2.6vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 2rem;
  text-align: center;
`, Ne = x.p`
  margin: 1rem 0;
  max-width: 600px;
`, Br = x.button`
  background: #ff6600;
  color: white;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 2rem;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.8;
  }
`, Wr = ({ error: i, onRetry: c }) => /* @__PURE__ */ n.jsxs(Yr, { children: [
  /* @__PURE__ */ n.jsx("h1", { children: "Try again later, please!" }),
  /* @__PURE__ */ n.jsx(Ne, { children: "Oops! The service seems to be down at the moment, my apologies for any inconvenience." }),
  /* @__PURE__ */ n.jsxs(Ne, { children: [
    "The error that was encountered is: ",
    i.message
  ] }),
  c && /* @__PURE__ */ n.jsx(Br, { onClick: c, children: "Retry" })
] }), Mr = x.button`
  background: ${(i) => i.theme.orange || "#ff6600"};
  line-height: 4rem;
  font-size: 1rem;
  color: #fff;
  border-radius: 8px;
  padding: 0 2rem;
  margin: 2rem;
  border: none;
  cursor: pointer;
  box-shadow: 2px 6px 22px rgba(0, 0, 0, 0.3);
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.68;
  }
`, he = ({ onClick: i, children: c }) => /* @__PURE__ */ n.jsx(Mr, { onClick: i, children: c }), Vr = qe`
  from {}
  to {
    transform: translateY(1em);
    opacity: 0;
  }
`, zr = x.div`
  position: fixed;
  top: 2rem;
  right: 3rem;
  width: 1rem;
  height: 1.9rem;
  bottom: 1rem;
  border: .075em solid black;
  border-radius: 2.5rem;
  transition: opacity 0.3s;
  opacity: ${(i) => i.hide ? "0" : "1"};
  z-index: 1000;
  
  &:before {
    content: '';
    position: absolute;
    left: calc(50% - .1rem);
    top: .2rem;
    width: .2rem;
    height: .2rem;
    background: black;
    border-radius: 50%;
    animation: ${Vr} 1.4s ease-in infinite;
  }
`, Nr = ({ hide: i }) => /* @__PURE__ */ n.jsx(zr, { hide: i }), He = ({ black: i }) => !i && /* @__PURE__ */ n.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 32", children: /* @__PURE__ */ n.jsx("path", { d: "M5 5v22h22V5zm2 2h18v18H7zm4 3l4 7v5h2v-5l4-7h-2l-3 5.25L13 10z" }) }) || /* @__PURE__ */ n.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fillRule: "evenodd",
    strokeLinejoin: "round",
    strokeMiterlimit: "2",
    clipRule: "evenodd",
    viewBox: "0 0 42 42",
    children: [
      /* @__PURE__ */ n.jsx("path", { d: "M0 0H42V42H0z" }),
      /* @__PURE__ */ n.jsx(
        "path",
        {
          fill: "#fff",
          fillRule: "nonzero",
          d: "M12 11h3.176L21 21.188 26.824 11H30l-7 13v8h-4v-8l-7-13z"
        }
      )
    ]
  }
), Hr = x.div`
  position: relative;
  height: ${(i) => i.height}px;
  display: flex;
  align-items: center;
  justify-content: center;
`, Ur = x.div`
  font-size: 6vh;
  line-height: 1.5;
  position: relative;
  height: 100vh;
  perspective: 40rem;
  max-width: 900px;
  position: fixed;
  top: 0;
`, qr = x.div`
  height: 40vh;
  transform-origin: bottom center;
  transform: rotateX(-70deg);
  overflow: hidden;
`, Jr = x.div`
  padding: 0;
  margin: 0;
  height: 30vh;
  overflow: hidden;
`, Gr = x.div`
  height: 80vh;
  transform-origin: top center;
  transform: rotateX(-50deg);
  overflow: hidden;
`, pe = x.div`
  font-size: 8vh;
  line-height: 1.5;
  transform: ${(i) => `translateY(${i.posY || 0}px)`};
`, me = x.div`
  text-align: center;
  padding-bottom: 25vh;
  
  & > svg {
    width: 86vh;
  }
`, Kr = x.div`
  transition: opacity 0.3s;
  & > svg {
    width: 50px;
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    transition: opacity 0.3s;
    opacity: ${(i) => i.hide ? "0" : "1"};
    cursor: pointer;
  }

  &:hover {
    opacity: 0.74;
  }
`, Xr = 0.398, Zr = 0.3, tt = ({
  apiUrl: i = "https://hacker-news.firebaseio.com/v0",
  initialCount: c = 30,
  className: y,
  enableLoadMore: f = !0,
  onStoryClick: O,
  renderStory: P,
  renderLoading: C,
  renderError: w,
  renderLogo: d
}) => {
  const [F, g] = $(0), [R, p] = $({
    top: { y: 0 },
    center: { y: 0 },
    bottom: { y: 0 }
  }), [_, D] = $(!1), [Z, ie] = $(!1), L = wr(null), { loading: m, error: V, stories: I, fetchMore: Q } = kr({
    apiUrl: i,
    initialCount: c
  }), Y = X(() => {
    const S = window.scrollY || window.pageYOffset || document.documentElement.scrollTop, E = window.innerHeight * Xr, b = window.innerHeight * Zr;
    p({
      top: { y: -(S - E) },
      center: { y: -S },
      bottom: { y: -(S + b) }
    });
    const A = S > window.screen.availHeight * 1.1;
    ie(A);
  }, []), ee = X(() => {
    var E;
    const S = (E = L.current) == null ? void 0 : E.clientHeight;
    if (S && S > 0) {
      const b = S * 1.15;
      g(b);
    }
  }, []);
  K(() => {
    D(!0);
  }, []), K(() => {
    _ && !m && I.length > 0 && requestAnimationFrame(() => {
      ee();
    });
  }, [_, m, I, ee]), K(() => {
    Y();
  }, [_, Y]), K(() => (window.addEventListener("scroll", Y), () => {
    window.removeEventListener("scroll", Y);
  }), [Y]);
  const z = X(() => {
    f && Q();
  }, [f, Q]), N = X(() => {
    window.location.reload();
  }, []), H = (S, E) => S.map((b, A) => b.url ? P ? /* @__PURE__ */ n.jsx("div", { children: P(b, A) }, `${E}-${b.id}`) : /* @__PURE__ */ n.jsx(
    Dr,
    {
      story: b,
      index: A,
      onClick: O
    },
    `${E}-${b.id}`
  ) : null), U = d ? d() : /* @__PURE__ */ n.jsx(He, {});
  return V ? w ? /* @__PURE__ */ n.jsx(n.Fragment, { children: w(V, N) }) : /* @__PURE__ */ n.jsx(Wr, { error: V, onRetry: N }) : !_ || m ? C ? /* @__PURE__ */ n.jsx(n.Fragment, { children: C() }) : /* @__PURE__ */ n.jsx(Ir, {}) : /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsx(Nr, { hide: Z }),
    /* @__PURE__ */ n.jsx(Hr, { height: F, className: y, children: /* @__PURE__ */ n.jsxs(Ur, { children: [
      /* @__PURE__ */ n.jsx(qr, { children: /* @__PURE__ */ n.jsxs(pe, { posY: R.top.y, children: [
        /* @__PURE__ */ n.jsx(me, { children: U }),
        H(I, "top"),
        f && /* @__PURE__ */ n.jsx(he, { onClick: z, children: "Load more..." })
      ] }) }),
      /* @__PURE__ */ n.jsx(Jr, { children: /* @__PURE__ */ n.jsx(pe, { posY: R.center.y, children: /* @__PURE__ */ n.jsxs("div", { ref: L, children: [
        /* @__PURE__ */ n.jsx(me, { children: U }),
        H(I, "center"),
        f && /* @__PURE__ */ n.jsx(he, { onClick: z, children: "Load more..." })
      ] }) }) }),
      /* @__PURE__ */ n.jsx(Gr, { children: /* @__PURE__ */ n.jsxs(pe, { posY: R.bottom.y, children: [
        /* @__PURE__ */ n.jsx(me, { children: U }),
        H(I, "bottom"),
        f && /* @__PURE__ */ n.jsx(he, { onClick: z, children: "Load more..." })
      ] }) })
    ] }) }),
    /* @__PURE__ */ n.jsx(Kr, { hide: !Z, children: /* @__PURE__ */ n.jsx(He, { black: !0 }) })
  ] });
}, Qr = {
  orange: "#ff6600",
  vividTangelo: "#F26722",
  platinum: "#E8E9EB",
  gainsBoro: "#E0DFD5",
  onyx: "#313638",
  sandyBrown: "#F09D51"
}, nt = ({ theme: i = {}, children: c }) => {
  const y = { ...Qr, ...i };
  return /* @__PURE__ */ n.jsx(Er, { theme: y, children: c });
}, ot = {
  orange: "#ff6600",
  vividTangelo: "#F26722",
  platinum: "#E8E9EB",
  gainsBoro: "#E0DFD5",
  onyx: "#313638",
  sandyBrown: "#F09D51"
}, it = Rr`
  @import url('https://fonts.googleapis.com/css?family=Bitter|Nanum+Gothic|Work+Sans&display=swap');

  * {
    text-decoration: none;
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    font-size: 100%;
    vertical-align: baseline;
    background: transparent;
  }
  body, html {
    width: 100%;
    height: 100%;
  }
  body {
    padding: 0;
    margin: 0;
    line-height: 1.4;
    background: white;
    font-family: 'Bitter', serif;
  }
  ol, ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  h1, h2, h3, h4, h5 {
    font-family: 'Work Sans', sans-serif;
    font-weight: bold;
  }
  p, li, div, a {
    font-family: 'Bitter', serif;
  }
  *:focus {
    outline: none;
  }
`;
export {
  it as DefaultStyles,
  tt as HackerNewsReader,
  nt as ThemeProvider,
  Qr as defaultTheme,
  ot as themeConf,
  kr as useStories
};
//# sourceMappingURL=react-hn-reader.es.js.map
