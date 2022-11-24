(() => {
  var __defProp = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b)) {
        if (__propIsEnum.call(b, prop))
          __defNormalProp(a, prop, b[prop]);
      }
    return a;
  };
  var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
  var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
  var __publicField = (obj, key, value) => {
    __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
    return value;
  };
  var __async = (__this, __arguments, generator) => {
    return new Promise((resolve, reject) => {
      var fulfilled = (value) => {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      };
      var rejected = (value) => {
        try {
          step(generator.throw(value));
        } catch (e) {
          reject(e);
        }
      };
      var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
      step((generator = generator.apply(__this, __arguments)).next());
    });
  };

  // node_modules/kaboom/dist/kaboom.mjs
  var Gt = Object.defineProperty;
  var ys = /* @__PURE__ */ __name((i, r, a) => r in i ? Gt(i, r, { enumerable: true, configurable: true, writable: true, value: a }) : i[r] = a, "ys");
  var c = /* @__PURE__ */ __name((i, r) => Gt(i, "name", { value: r, configurable: true }), "c");
  var Us = /* @__PURE__ */ __name((i, r) => {
    for (var a in r)
      Gt(i, a, { get: r[a], enumerable: true });
  }, "Us");
  var Z = /* @__PURE__ */ __name((i, r, a) => (ys(i, typeof r != "symbol" ? r + "" : r, a), a), "Z");
  var xs = (() => {
    for (var i = new Uint8Array(128), r = 0; r < 64; r++)
      i[r < 26 ? r + 65 : r < 52 ? r + 71 : r < 62 ? r - 4 : r * 4 - 205] = r;
    return (a) => {
      for (var u = a.length, b = new Uint8Array((u - (a[u - 1] == "=") - (a[u - 2] == "=")) * 3 / 4 | 0), x = 0, w = 0; x < u; ) {
        var A = i[a.charCodeAt(x++)], R = i[a.charCodeAt(x++)], O = i[a.charCodeAt(x++)], T = i[a.charCodeAt(x++)];
        b[w++] = A << 2 | R >> 4, b[w++] = R << 4 | O >> 2, b[w++] = O << 6 | T;
      }
      return b;
    };
  })();
  function he(i) {
    return i * Math.PI / 180;
  }
  __name(he, "he");
  c(he, "deg2rad");
  function kt(i) {
    return i * 180 / Math.PI;
  }
  __name(kt, "kt");
  c(kt, "rad2deg");
  function re(i, r, a) {
    return r > a ? re(i, a, r) : Math.min(Math.max(i, r), a);
  }
  __name(re, "re");
  c(re, "clamp");
  function Ve(i, r, a) {
    return i + (r - i) * a;
  }
  __name(Ve, "Ve");
  c(Ve, "lerp");
  function mt(i, r, a, u, b) {
    return u + (i - r) / (a - r) * (b - u);
  }
  __name(mt, "mt");
  c(mt, "map");
  function Vn(i, r, a, u, b) {
    return re(mt(i, r, a, u, b), u, b);
  }
  __name(Vn, "Vn");
  c(Vn, "mapc");
  var Y = /* @__PURE__ */ __name(class {
    constructor(r = 0, a = r) {
      __publicField(this, "x", 0);
      __publicField(this, "y", 0);
      this.x = r, this.y = a;
    }
    static fromAngle(r) {
      let a = he(r);
      return new Y(Math.cos(a), Math.sin(a));
    }
    clone() {
      return new Y(this.x, this.y);
    }
    add(...r) {
      let a = p(...r);
      return new Y(this.x + a.x, this.y + a.y);
    }
    sub(...r) {
      let a = p(...r);
      return new Y(this.x - a.x, this.y - a.y);
    }
    scale(...r) {
      let a = p(...r);
      return new Y(this.x * a.x, this.y * a.y);
    }
    dist(...r) {
      let a = p(...r);
      return Math.sqrt((this.x - a.x) * (this.x - a.x) + (this.y - a.y) * (this.y - a.y));
    }
    len() {
      return this.dist(new Y(0, 0));
    }
    unit() {
      let r = this.len();
      return r === 0 ? new Y(0) : this.scale(1 / r);
    }
    normal() {
      return new Y(this.y, -this.x);
    }
    dot(r) {
      return this.x * r.x + this.y * r.y;
    }
    angle(...r) {
      let a = p(...r);
      return kt(Math.atan2(this.y - a.y, this.x - a.x));
    }
    lerp(r, a) {
      return new Y(Ve(this.x, r.x, a), Ve(this.y, r.y, a));
    }
    isZero() {
      return this.x === 0 && this.y === 0;
    }
    toFixed(r) {
      return new Y(Number(this.x.toFixed(r)), Number(this.y.toFixed(r)));
    }
    transform(r) {
      return r.multVec2(this);
    }
    eq(r) {
      return this.x === r.x && this.y === r.y;
    }
    toString() {
      return `vec2(${this.x.toFixed(2)}, ${this.y.toFixed(2)})`;
    }
  }, "Y");
  var D = Y;
  c(D, "Vec2"), Z(D, "LEFT", new Y(-1, 0)), Z(D, "RIGHT", new Y(1, 0)), Z(D, "UP", new Y(0, -1)), Z(D, "DOWN", new Y(0, 1));
  function p(...i) {
    if (i.length === 1) {
      if (i[0] instanceof D)
        return p(i[0].x, i[0].y);
      if (Array.isArray(i[0]) && i[0].length === 2)
        return p(...i[0]);
    }
    return new D(...i);
  }
  __name(p, "p");
  c(p, "vec2");
  var Ie = /* @__PURE__ */ __name(class {
    constructor(r, a, u) {
      __publicField(this, "x", 0);
      __publicField(this, "y", 0);
      __publicField(this, "z", 0);
      this.x = r, this.y = a, this.z = u;
    }
    xy() {
      return p(this.x, this.y);
    }
  }, "Ie");
  c(Ie, "Vec3");
  var ye = c((i, r, a) => new Ie(i, r, a), "vec3");
  var ae = /* @__PURE__ */ __name(class {
    constructor(r, a, u) {
      __publicField(this, "r", 255);
      __publicField(this, "g", 255);
      __publicField(this, "b", 255);
      this.r = re(r, 0, 255), this.g = re(a, 0, 255), this.b = re(u, 0, 255);
    }
    static fromArray(r) {
      return new ae(r[0], r[1], r[2]);
    }
    static fromHex(r) {
      if (typeof r == "number")
        return new ae(r >> 16 & 255, r >> 8 & 255, r >> 0 & 255);
      {
        let a = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(r);
        return new ae(parseInt(a[1], 16), parseInt(a[2], 16), parseInt(a[3], 16));
      }
    }
    static fromHSL(r, a, u) {
      if (a == 0)
        return E(255 * u, 255 * u, 255 * u);
      let b = c((T, j, y) => (y < 0 && (y += 1), y > 1 && (y -= 1), y < 1 / 6 ? T + (j - T) * 6 * y : y < 1 / 2 ? j : y < 2 / 3 ? T + (j - T) * (2 / 3 - y) * 6 : T), "hue2rgb"), x = u < 0.5 ? u * (1 + a) : u + a - u * a, w = 2 * u - x, A = b(w, x, r + 1 / 3), R = b(w, x, r), O = b(w, x, r - 1 / 3);
      return new ae(Math.round(A * 255), Math.round(R * 255), Math.round(O * 255));
    }
    clone() {
      return new ae(this.r, this.g, this.b);
    }
    lighten(r) {
      return new ae(this.r + r, this.g + r, this.b + r);
    }
    darken(r) {
      return this.lighten(-r);
    }
    invert() {
      return new ae(255 - this.r, 255 - this.g, 255 - this.b);
    }
    mult(r) {
      return new ae(this.r * r.r / 255, this.g * r.g / 255, this.b * r.b / 255);
    }
    eq(r) {
      return this.r === r.r && this.g === r.g && this.b === r.b;
    }
    toString() {
      return `rgb(${this.r}, ${this.g}, ${this.b})`;
    }
    toHex() {
      return "#" + ((1 << 24) + (this.r << 16) + (this.g << 8) + this.b).toString(16).slice(1);
    }
  }, "ae");
  var S = ae;
  c(S, "Color"), Z(S, "RED", E(255, 0, 0)), Z(S, "GREEN", E(0, 255, 0)), Z(S, "BLUE", E(0, 0, 255)), Z(S, "YELLOW", E(255, 255, 0)), Z(S, "MAGENTA", E(255, 0, 255)), Z(S, "CYAN", E(0, 255, 255)), Z(S, "WHITE", E(255, 255, 255)), Z(S, "BLACK", E(0, 0, 0));
  function E(...i) {
    if (i.length === 0)
      return new S(255, 255, 255);
    if (i.length === 1) {
      if (i[0] instanceof S)
        return i[0].clone();
      if (Array.isArray(i[0]) && i[0].length === 3)
        return S.fromArray(i[0]);
    }
    return new S(...i);
  }
  __name(E, "E");
  c(E, "rgb");
  var kn = c((i, r, a) => S.fromHSL(i, r, a), "hsl2rgb");
  var k = /* @__PURE__ */ __name(class {
    constructor(r, a, u, b) {
      __publicField(this, "x", 0);
      __publicField(this, "y", 0);
      __publicField(this, "w", 1);
      __publicField(this, "h", 1);
      this.x = r, this.y = a, this.w = u, this.h = b;
    }
    scale(r) {
      return new k(this.x + this.w * r.x, this.y + this.h * r.y, this.w * r.w, this.h * r.h);
    }
    clone() {
      return new k(this.x, this.y, this.w, this.h);
    }
    eq(r) {
      return this.x === r.x && this.y === r.y && this.w === r.w && this.h === r.h;
    }
    toString() {
      return `quad(${this.x}, ${this.y}, ${this.w}, ${this.h})`;
    }
  }, "k");
  c(k, "Quad");
  function jn(i, r, a, u) {
    return new k(i, r, a, u);
  }
  __name(jn, "jn");
  c(jn, "quad");
  var F = /* @__PURE__ */ __name(class {
    constructor(r) {
      __publicField(this, "m", [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
      r && (this.m = r);
    }
    static translate(r) {
      return new F([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, r.x, r.y, 0, 1]);
    }
    static scale(r) {
      return new F([r.x, 0, 0, 0, 0, r.y, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
    }
    static rotateX(r) {
      r = he(-r);
      let a = Math.cos(r), u = Math.sin(r);
      return new F([1, 0, 0, 0, 0, a, -u, 0, 0, u, a, 0, 0, 0, 0, 1]);
    }
    static rotateY(r) {
      r = he(-r);
      let a = Math.cos(r), u = Math.sin(r);
      return new F([a, 0, u, 0, 0, 1, 0, 0, -u, 0, a, 0, 0, 0, 0, 1]);
    }
    static rotateZ(r) {
      r = he(-r);
      let a = Math.cos(r), u = Math.sin(r);
      return new F([a, -u, 0, 0, u, a, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
    }
    translate(r) {
      return this.m[12] += this.m[0] * r.x + this.m[4] * r.y, this.m[13] += this.m[1] * r.x + this.m[5] * r.y, this.m[14] += this.m[2] * r.x + this.m[6] * r.y, this.m[15] += this.m[3] * r.x + this.m[7] * r.y, this;
    }
    scale(r) {
      return this.m[0] *= r.x, this.m[4] *= r.y, this.m[1] *= r.x, this.m[5] *= r.y, this.m[2] *= r.x, this.m[6] *= r.y, this.m[3] *= r.x, this.m[7] *= r.y, this;
    }
    rotate(r) {
      r = he(-r);
      let a = Math.cos(r), u = Math.sin(r), b = this.m[0], x = this.m[1], w = this.m[4], A = this.m[5];
      return this.m[0] = b * a + x * u, this.m[1] = -b * u + x * a, this.m[4] = w * a + A * u, this.m[5] = -w * u + A * a, this;
    }
    mult(r) {
      let a = [];
      for (let u = 0; u < 4; u++)
        for (let b = 0; b < 4; b++)
          a[u * 4 + b] = this.m[0 * 4 + b] * r.m[u * 4 + 0] + this.m[1 * 4 + b] * r.m[u * 4 + 1] + this.m[2 * 4 + b] * r.m[u * 4 + 2] + this.m[3 * 4 + b] * r.m[u * 4 + 3];
      return new F(a);
    }
    multVec2(r) {
      return p(r.x * this.m[0] + r.y * this.m[4] + this.m[12], r.x * this.m[1] + r.y * this.m[5] + this.m[13]);
    }
    invert() {
      let r = [], a = this.m[10] * this.m[15] - this.m[14] * this.m[11], u = this.m[9] * this.m[15] - this.m[13] * this.m[11], b = this.m[9] * this.m[14] - this.m[13] * this.m[10], x = this.m[8] * this.m[15] - this.m[12] * this.m[11], w = this.m[8] * this.m[14] - this.m[12] * this.m[10], A = this.m[8] * this.m[13] - this.m[12] * this.m[9], R = this.m[6] * this.m[15] - this.m[14] * this.m[7], O = this.m[5] * this.m[15] - this.m[13] * this.m[7], T = this.m[5] * this.m[14] - this.m[13] * this.m[6], j = this.m[4] * this.m[15] - this.m[12] * this.m[7], y = this.m[4] * this.m[14] - this.m[12] * this.m[6], m = this.m[5] * this.m[15] - this.m[13] * this.m[7], $ = this.m[4] * this.m[13] - this.m[12] * this.m[5], _ = this.m[6] * this.m[11] - this.m[10] * this.m[7], nt = this.m[5] * this.m[11] - this.m[9] * this.m[7], xe = this.m[5] * this.m[10] - this.m[9] * this.m[6], Ee = this.m[4] * this.m[11] - this.m[8] * this.m[7], rt = this.m[4] * this.m[10] - this.m[8] * this.m[6], it = this.m[4] * this.m[9] - this.m[8] * this.m[5];
      r[0] = this.m[5] * a - this.m[6] * u + this.m[7] * b, r[4] = -(this.m[4] * a - this.m[6] * x + this.m[7] * w), r[8] = this.m[4] * u - this.m[5] * x + this.m[7] * A, r[12] = -(this.m[4] * b - this.m[5] * w + this.m[6] * A), r[1] = -(this.m[1] * a - this.m[2] * u + this.m[3] * b), r[5] = this.m[0] * a - this.m[2] * x + this.m[3] * w, r[9] = -(this.m[0] * u - this.m[1] * x + this.m[3] * A), r[13] = this.m[0] * b - this.m[1] * w + this.m[2] * A, r[2] = this.m[1] * R - this.m[2] * O + this.m[3] * T, r[6] = -(this.m[0] * R - this.m[2] * j + this.m[3] * y), r[10] = this.m[0] * m - this.m[1] * j + this.m[3] * $, r[14] = -(this.m[0] * T - this.m[1] * y + this.m[2] * $), r[3] = -(this.m[1] * _ - this.m[2] * nt + this.m[3] * xe), r[7] = this.m[0] * _ - this.m[2] * Ee + this.m[3] * rt, r[11] = -(this.m[0] * nt - this.m[1] * Ee + this.m[3] * it), r[15] = this.m[0] * xe - this.m[1] * rt + this.m[2] * it;
      let Se = this.m[0] * r[0] + this.m[1] * r[4] + this.m[2] * r[8] + this.m[3] * r[12];
      for (let Ne = 0; Ne < 4; Ne++)
        for (let qe = 0; qe < 4; qe++)
          r[Ne * 4 + qe] *= 1 / Se;
      return new F(r);
    }
    clone() {
      return new F([...this.m]);
    }
    toString() {
      return this.m.toString();
    }
  }, "F");
  c(F, "Mat4");
  function jt(i, r, a, u = Math.sin) {
    return i + (u(a) + 1) / 2 * (r - i);
  }
  __name(jt, "jt");
  c(jt, "wave");
  var Es = 1103515245;
  var Ss = 12345;
  var Gn = 2147483648;
  var Ge = /* @__PURE__ */ __name(class {
    constructor(r) {
      __publicField(this, "seed");
      this.seed = r;
    }
    gen() {
      return this.seed = (Es * this.seed + Ss) % Gn, this.seed / Gn;
    }
    genNumber(r, a) {
      return r + this.gen() * (a - r);
    }
    genVec2(r, a) {
      return new D(this.genNumber(r.x, a.x), this.genNumber(r.y, a.y));
    }
    genColor(r, a) {
      return new S(this.genNumber(r.r, a.r), this.genNumber(r.g, a.g), this.genNumber(r.b, a.b));
    }
    genAny(...r) {
      if (r.length === 0)
        return this.gen();
      if (r.length === 1) {
        if (typeof r[0] == "number")
          return this.genNumber(0, r[0]);
        if (r[0] instanceof D)
          return this.genVec2(p(0, 0), r[0]);
        if (r[0] instanceof S)
          return this.genColor(E(0, 0, 0), r[0]);
      } else if (r.length === 2) {
        if (typeof r[0] == "number" && typeof r[1] == "number")
          return this.genNumber(r[0], r[1]);
        if (r[0] instanceof D && r[1] instanceof D)
          return this.genVec2(r[0], r[1]);
        if (r[0] instanceof S && r[1] instanceof S)
          return this.genColor(r[0], r[1]);
      }
    }
  }, "Ge");
  c(Ge, "RNG");
  var Vt = new Ge(Date.now());
  function _n(i) {
    return i != null && (Vt.seed = i), Vt.seed;
  }
  __name(_n, "_n");
  c(_n, "randSeed");
  function Ze(...i) {
    return Vt.genAny(...i);
  }
  __name(Ze, "Ze");
  c(Ze, "rand");
  function _t(...i) {
    return Math.floor(Ze(...i));
  }
  __name(_t, "_t");
  c(_t, "randi");
  function Nn(i) {
    return Ze() <= i;
  }
  __name(Nn, "Nn");
  c(Nn, "chance");
  function qn(i) {
    return i[_t(i.length)];
  }
  __name(qn, "qn");
  c(qn, "choose");
  function $n(i, r) {
    return i.pos.x + i.width > r.pos.x && i.pos.x < r.pos.x + r.width && i.pos.y + i.height > r.pos.y && i.pos.y < r.pos.y + r.height;
  }
  __name($n, "$n");
  c($n, "testRectRect");
  function Cs(i, r) {
    if (i.p1.x === i.p2.x && i.p1.y === i.p2.y || r.p1.x === r.p2.x && r.p1.y === r.p2.y)
      return null;
    let a = (r.p2.y - r.p1.y) * (i.p2.x - i.p1.x) - (r.p2.x - r.p1.x) * (i.p2.y - i.p1.y);
    if (a === 0)
      return null;
    let u = ((r.p2.x - r.p1.x) * (i.p1.y - r.p1.y) - (r.p2.y - r.p1.y) * (i.p1.x - r.p1.x)) / a, b = ((i.p2.x - i.p1.x) * (i.p1.y - r.p1.y) - (i.p2.y - i.p1.y) * (i.p1.x - r.p1.x)) / a;
    return u < 0 || u > 1 || b < 0 || b > 1 ? null : u;
  }
  __name(Cs, "Cs");
  c(Cs, "testLineLineT");
  function Le(i, r) {
    let a = Cs(i, r);
    return a ? p(i.p1.x + a * (i.p2.x - i.p1.x), i.p1.y + a * (i.p2.y - i.p1.y)) : null;
  }
  __name(Le, "Le");
  c(Le, "testLineLine");
  function Hn(i, r) {
    if (ke(i, r.p1) || ke(i, r.p2))
      return true;
    let a = i.points();
    return !!Le(r, new ne(a[0], a[1])) || !!Le(r, new ne(a[1], a[2])) || !!Le(r, new ne(a[2], a[3])) || !!Le(r, new ne(a[3], a[0]));
  }
  __name(Hn, "Hn");
  c(Hn, "testRectLine");
  function ke(i, r) {
    return r.x > i.pos.x && r.x < i.pos.x + i.width && r.y > i.pos.y && r.y < i.pos.y + i.height;
  }
  __name(ke, "ke");
  c(ke, "testRectPoint");
  function zn(i, r) {
    return i.center.dist(r) < i.radius;
  }
  __name(zn, "zn");
  c(zn, "testCirclePoint");
  function Yn(i, r) {
    let a = false, u = i.pts;
    for (let b = 0, x = u.length - 1; b < u.length; x = b++)
      u[b].y > r.y != u[x].y > r.y && r.x < (u[x].x - u[b].x) * (r.y - u[b].y) / (u[x].y - u[b].y) + u[b].x && (a = !a);
    return a;
  }
  __name(Yn, "Yn");
  c(Yn, "testPolygonPoint");
  var ne = /* @__PURE__ */ __name(class {
    constructor(r, a) {
      __publicField(this, "p1");
      __publicField(this, "p2");
      this.p1 = r.clone(), this.p2 = a.clone();
    }
    transform(r) {
      return new ne(r.multVec2(this.p1), r.multVec2(this.p2));
    }
    bbox() {
      return G.fromPoints(this.p1, this.p2);
    }
    clone() {
      return new ne(this.p1, this.p2);
    }
  }, "ne");
  c(ne, "Line");
  var G = /* @__PURE__ */ __name(class {
    constructor(r, a, u) {
      __publicField(this, "pos");
      __publicField(this, "width");
      __publicField(this, "height");
      this.pos = r.clone(), this.width = a, this.height = u;
    }
    static fromPoints(r, a) {
      return new G(r.clone(), a.x - r.x, a.y - r.y);
    }
    center() {
      return new D(this.pos.x + this.width / 2, this.pos.y + this.height / 2);
    }
    points() {
      return [this.pos, this.pos.add(this.width, 0), this.pos.add(this.width, this.height), this.pos.add(0, this.height)];
    }
    transform(r) {
      return new se(this.points().map((a) => r.multVec2(a)));
    }
    bbox() {
      return this.clone();
    }
    clone() {
      return new G(this.pos.clone(), this.width, this.height);
    }
    distToPoint(r) {
      let a = this.pos, u = this.pos.add(this.width, this.height), b = Math.max(a.x - r.x, 0, r.x - u.x), x = Math.max(a.y - r.y, 0, r.y - u.y);
      return Math.sqrt(b * b + x * x);
    }
  }, "G");
  c(G, "Rect");
  var ue = /* @__PURE__ */ __name(class {
    constructor(r, a) {
      __publicField(this, "center");
      __publicField(this, "radius");
      this.center = r.clone(), this.radius = a;
    }
    transform(r) {
      return new ve(this.center, this.radius, this.radius).transform(r);
    }
    bbox() {
      return G.fromPoints(this.center.sub(p(this.radius)), this.center.add(p(this.radius)));
    }
    clone() {
      return new ue(this.center, this.radius);
    }
  }, "ue");
  c(ue, "Circle");
  var ve = /* @__PURE__ */ __name(class {
    constructor(r, a, u) {
      __publicField(this, "center");
      __publicField(this, "radiusX");
      __publicField(this, "radiusY");
      this.center = r.clone(), this.radiusX = a, this.radiusY = u;
    }
    transform(r) {
      return new ve(r.multVec2(this.center), r.m[0] * this.radiusX, r.m[5] * this.radiusY);
    }
    bbox() {
      return G.fromPoints(this.center.sub(p(this.radiusX, this.radiusY)), this.center.add(p(this.radiusX, this.radiusY)));
    }
    clone() {
      return new ve(this.center, this.radiusX, this.radiusY);
    }
  }, "ve");
  c(ve, "Ellipse");
  var se = /* @__PURE__ */ __name(class {
    constructor(r) {
      __publicField(this, "pts");
      if (r.length < 3)
        throw new Error("Polygons should have at least 3 vertices");
      this.pts = r;
    }
    transform(r) {
      return new se(this.pts.map((a) => r.multVec2(a)));
    }
    bbox() {
      let r = p(Number.MAX_VALUE), a = p(-Number.MAX_VALUE);
      for (let u of this.pts)
        r.x = Math.min(r.x, u.x), a.x = Math.max(a.x, u.x), r.y = Math.min(r.y, u.y), a.y = Math.max(a.y, u.y);
      return G.fromPoints(r, a);
    }
    clone() {
      return new se(this.pts.map((r) => r.clone()));
    }
  }, "se");
  c(se, "Polygon");
  function Xn(i, r) {
    let a = Number.MAX_VALUE, u = p(0);
    for (let b of [i, r])
      for (let x = 0; x < b.pts.length; x++) {
        let w = b.pts[x], R = b.pts[(x + 1) % b.pts.length].sub(w).normal().unit(), O = Number.MAX_VALUE, T = -Number.MAX_VALUE;
        for (let $ = 0; $ < i.pts.length; $++) {
          let _ = i.pts[$].dot(R);
          O = Math.min(O, _), T = Math.max(T, _);
        }
        let j = Number.MAX_VALUE, y = -Number.MAX_VALUE;
        for (let $ = 0; $ < r.pts.length; $++) {
          let _ = r.pts[$].dot(R);
          j = Math.min(j, _), y = Math.max(y, _);
        }
        let m = Math.min(T, y) - Math.max(O, j);
        if (m < 0)
          return null;
        if (m < Math.abs(a)) {
          let $ = y - O, _ = j - T;
          a = Math.abs($) < Math.abs(_) ? $ : _, u = R.scale(a);
        }
      }
    return u;
  }
  __name(Xn, "Xn");
  c(Xn, "sat");
  var pt = 2.5949095;
  var Kn = 1.70158 + 1;
  var Jn = 2 * Math.PI / 3;
  var Qn = 2 * Math.PI / 4.5;
  var gt = { linear: (i) => i, easeInSine: (i) => 1 - Math.cos(i * Math.PI / 2), easeOutSine: (i) => Math.sin(i * Math.PI / 2), easeInOutSine: (i) => -(Math.cos(Math.PI * i) - 1) / 2, easeInQuad: (i) => i * i, easeOutQuad: (i) => 1 - (1 - i) * (1 - i), easeInOutQuad: (i) => i < 0.5 ? 2 * i * i : 1 - Math.pow(-2 * i + 2, 2) / 2, easeInCubic: (i) => i * i * i, easeOutCubic: (i) => 1 - Math.pow(1 - i, 3), easeInOutCubic: (i) => i < 0.5 ? 4 * i * i * i : 1 - Math.pow(-2 * i + 2, 3) / 2, easeInQuart: (i) => i * i * i * i, easeOutQuart: (i) => 1 - Math.pow(1 - i, 4), easeInOutQuart: (i) => i < 0.5 ? 8 * i * i * i * i : 1 - Math.pow(-2 * i + 2, 4) / 2, easeInQuint: (i) => i * i * i * i * i, easeOutQuint: (i) => 1 - Math.pow(1 - i, 5), easeInOutQuint: (i) => i < 0.5 ? 16 * i * i * i * i * i : 1 - Math.pow(-2 * i + 2, 5) / 2, easeInExpo: (i) => i === 0 ? 0 : Math.pow(2, 10 * i - 10), easeOutExpo: (i) => i === 1 ? 1 : 1 - Math.pow(2, -10 * i), easeInOutExpo: (i) => i === 0 ? 0 : i === 1 ? 1 : i < 0.5 ? Math.pow(2, 20 * i - 10) / 2 : (2 - Math.pow(2, -20 * i + 10)) / 2, easeInCirc: (i) => 1 - Math.sqrt(1 - Math.pow(i, 2)), easeOutCirc: (i) => Math.sqrt(1 - Math.pow(i - 1, 2)), easeInOutCirc: (i) => i < 0.5 ? (1 - Math.sqrt(1 - Math.pow(2 * i, 2))) / 2 : (Math.sqrt(1 - Math.pow(-2 * i + 2, 2)) + 1) / 2, easeInBack: (i) => Kn * i * i * i - 1.70158 * i * i, easeOutBack: (i) => 1 + Kn * Math.pow(i - 1, 3) + 1.70158 * Math.pow(i - 1, 2), easeInOutBack: (i) => i < 0.5 ? Math.pow(2 * i, 2) * ((pt + 1) * 2 * i - pt) / 2 : (Math.pow(2 * i - 2, 2) * ((pt + 1) * (i * 2 - 2) + pt) + 2) / 2, easeInElastic: (i) => i === 0 ? 0 : i === 1 ? 1 : -Math.pow(2, 10 * i - 10) * Math.sin((i * 10 - 10.75) * Jn), easeOutElastic: (i) => i === 0 ? 0 : i === 1 ? 1 : Math.pow(2, -10 * i) * Math.sin((i * 10 - 0.75) * Jn) + 1, easeInOutElastic: (i) => i === 0 ? 0 : i === 1 ? 1 : i < 0.5 ? -(Math.pow(2, 20 * i - 10) * Math.sin((20 * i - 11.125) * Qn)) / 2 : Math.pow(2, -20 * i + 10) * Math.sin((20 * i - 11.125) * Qn) / 2 + 1, easeInBounce: (i) => 1 - gt.easeOutBounce(1 - i), easeOutBounce: (i) => i < 1 / 2.75 ? 7.5625 * i * i : i < 2 / 2.75 ? 7.5625 * (i -= 1.5 / 2.75) * i + 0.75 : i < 2.5 / 2.75 ? 7.5625 * (i -= 2.25 / 2.75) * i + 0.9375 : 7.5625 * (i -= 2.625 / 2.75) * i + 0.984375, easeInOutBounce: (i) => i < 0.5 ? (1 - gt.easeOutBounce(1 - 2 * i)) / 2 : (1 + gt.easeOutBounce(2 * i - 1)) / 2 };
  var et = gt;
  var Ue = /* @__PURE__ */ __name(class extends Map {
    constructor(...r) {
      super(...r);
      __publicField(this, "lastID");
      this.lastID = 0;
    }
    push(r) {
      let a = this.lastID;
      return this.set(a, r), this.lastID++, a;
    }
    pushd(r) {
      let a = this.push(r);
      return () => this.delete(a);
    }
  }, "Ue");
  c(Ue, "IDList");
  var ee = /* @__PURE__ */ __name(class {
    constructor() {
      __publicField(this, "handlers", new Ue());
    }
    add(r) {
      let u = { paused: false, cancel: this.handlers.pushd((...b) => {
        u.paused || r(...b);
      }) };
      return u;
    }
    addOnce(r) {
      let a = this.add((...u) => {
        a.cancel(), r(...u);
      });
      return a;
    }
    next() {
      return new Promise((r) => this.addOnce(r));
    }
    trigger(...r) {
      this.handlers.forEach((a) => a(...r));
    }
    numListeners() {
      return this.handlers.size;
    }
  }, "ee");
  c(ee, "Event");
  var ce = /* @__PURE__ */ __name(class {
    constructor() {
      __publicField(this, "handlers", /* @__PURE__ */ new Map());
    }
    on(r, a) {
      return this.handlers.get(r) || this.handlers.set(r, new ee()), this.handlers.get(r).add(a);
    }
    onOnce(r, a) {
      let u = this.on(r, (...b) => {
        u.cancel(), a(...b);
      });
      return u;
    }
    next(r) {
      return new Promise((a) => {
        this.onOnce(r, a);
      });
    }
    trigger(r, ...a) {
      this.handlers.get(r) && this.handlers.get(r).trigger(...a);
    }
    remove(r) {
      this.handlers.delete(r);
    }
    clear() {
      this.handlers = /* @__PURE__ */ new Map();
    }
    numListeners(r) {
      var _a, _b;
      return (_b = (_a = this.handlers.get(r)) == null ? void 0 : _a.numListeners()) != null ? _b : 0;
    }
  }, "ce");
  c(ce, "EventHandler");
  function Nt(i, r) {
    let a = typeof i, u = typeof r;
    if (a !== u)
      return false;
    if (a === "object" && u === "object" && i !== null && r !== null) {
      let b = Object.keys(i), x = Object.keys(r);
      if (b.length !== x.length)
        return false;
      for (let w of b) {
        let A = i[w], R = r[w];
        if (!(typeof A == "function" && typeof R == "function") && !Nt(A, R))
          return false;
      }
      return true;
    }
    return i === r;
  }
  __name(Nt, "Nt");
  c(Nt, "deepEq");
  function Ts(i) {
    let r = window.atob(i), a = r.length, u = new Uint8Array(a);
    for (let b = 0; b < a; b++)
      u[b] = r.charCodeAt(b);
    return u.buffer;
  }
  __name(Ts, "Ts");
  c(Ts, "base64ToArrayBuffer");
  function Wn(i) {
    return Ts(i.split(",")[1]);
  }
  __name(Wn, "Wn");
  c(Wn, "dataURLToArrayBuffer");
  function wt(i, r) {
    let a = document.createElement("a");
    a.href = r, a.download = i, a.click();
  }
  __name(wt, "wt");
  c(wt, "download");
  function qt(i, r) {
    wt(i, "data:text/plain;charset=utf-8," + r);
  }
  __name(qt, "qt");
  c(qt, "downloadText");
  function Zn(i, r) {
    qt(i, JSON.stringify(r));
  }
  __name(Zn, "Zn");
  c(Zn, "downloadJSON");
  function $t(i, r) {
    let a = URL.createObjectURL(r);
    wt(i, a), URL.revokeObjectURL(a);
  }
  __name($t, "$t");
  c($t, "downloadBlob");
  function Ht(i) {
    return i.match(/^data:\w+\/\w+;base64,.+/);
  }
  __name(Ht, "Ht");
  c(Ht, "isDataURL");
  var er = (() => {
    let i = 0;
    return () => i++;
  })();
  var je = /* @__PURE__ */ __name(class {
    constructor() {
      __publicField(this, "dts", []);
      __publicField(this, "timer", 0);
      __publicField(this, "fps", 0);
    }
    tick(r) {
      this.dts.push(r), this.timer += r, this.timer >= 1 && (this.timer = 0, this.fps = Math.round(1 / (this.dts.reduce((a, u) => a + u) / this.dts.length)), this.dts = []);
    }
  }, "je");
  c(je, "FPSCounter");
  var fe = /* @__PURE__ */ __name(class {
    constructor(r, a) {
      __publicField(this, "time");
      __publicField(this, "action");
      __publicField(this, "finished", false);
      __publicField(this, "paused", false);
      this.time = r, this.action = a;
    }
    tick(r) {
      return this.finished || this.paused ? false : (this.time -= r, this.time <= 0 ? (this.action(), this.finished = true, this.time = 0, true) : false);
    }
    reset(r) {
      this.time = r, this.finished = false;
    }
  }, "fe");
  c(fe, "Timer");
  var tr = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD0AAAA1CAYAAADyMeOEAAAAAXNSR0IArs4c6QAAAoVJREFUaIHdm7txwkAQhheGAqACiCHzOKQDQrqgILpwSAeEDBnEUAF0gCMxZ7G72qce/mec2Lpf9+3unaS78wgSNZ8uX5729+d1FNWXUuGmXlBOUUEIMckEpeQJgBu6C+BSFngztBR2vd+ovY+7g+p6LbgaWgJrAeUkDYIUXgXdBBwNi6kpABJwMTQH3AZsXRR8GHTfgEth8E3gjdAUcNewpbTgY85sCMCUuOokozE0YM0YRzM9NGAAXd8+omAF5h4lnmBRvpSnZHyLoLEbaN+aKB9KWv/KWw0tAbbANnlG+UvB2dm77NxxdwgBpjrF/d7rW9cbmpvio2A5z8iAYpVU8pGZlo6/2+MSco2lHfd3rv9jAP038e1xef9o2mjvYb2OqpqKE81028/jeietlSEVO5FRWsxWsJit1G3aFpW8iWe5RwpiCZAk25QvV6nz6fIlynRGuTd5WqpJ4guAlDfVKBK87hXljflgv1ON6fV+4+5gVlA17SfeG0heKqQd4l4jI/wrmaA9N9R4ar+wpHJDZyrrfcH0nB66PqAzPi76pn+faSyJk/vzOorYhGurQrzj/P68jtBMawHaHBIR9xoD5O34dy0qQOSYHvqExq2TpT2nf76+w7y251OYF0CRaU+J920TwLUa6inx6OxE6g80lu2ux7Y2eJLF/rCXE6zEPdnenk9o+4ih9AEdnW2q81HXl5LuU6OTl2fXUhqganbXAGq3g6jJOWV/OnoesO6YqqEB/GdNsjf7uHtwj2DzmRNpp7iOZfm6D9oAxB6Yi1gC4oIYeo4MIPdopEQRB+cAko5J1tW386HpB2Kz1eop4Epdwls/kgZ1sh8gZsEjdcWkr//D8Qu3Z3l5Nl1NtAAAAABJRU5ErkJggg==";
  var Os = {};
  Us(Os, { default: () => zt });
  var zt = xs("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L5QNSqT5iiySS9Ja2SV//5ME0ak//+4KgAAABgQBAADAMDgYCAEgCteQ0fZH6+ICXA357+MPfhR/+ywRf/U///LVTEFNRTMuMTAwVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+5JknQAFoWhGLm5gBClBmT3GiAAAAAGkHAAAIAAANIOAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV");
  var nr = "data:image/png;base64,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";
  var rr = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOcAAACDCAYAAAB2kQxsAAAAAXNSR0IArs4c6QAABqxJREFUeJztnU1yFDkQRtMEB+AG7Fk6fBPO6ZsQLGc/N5gbMAtosJvqKv2kpPxS763A0W5XSXqVqZ+SngzgF58/fflx/7N///vnacW1gBkFD2Z2LOYNBF3Dx9UXAGs5kxLWwhNxU2qlJHrOhwLfkNZoiaBzIa3dCFJYLXgSboKXmETPeVDQyamR8vX55fe/v37/9vBzCDoH0tqktEpZ+t0IOh4KOBm16euZmETPtVDAiRgRLRF0HRRuEkrFrE1hzR4Lipxj+bD6AqCPz5++/Bgp5tXfdv1CeAdPPmFmSkn0nE+a0drdFm6XiOkdKWEuKRptTXqlLuqqFNaM6Dkb+T5nbb+npo8WjZVinqFantFJk9bWojaRThq7HzKN8wiPJ7aCoJHEZN5zHvJp7RE1DTV6SnZ1fa/PL1MjJtF5HmnT2tJF3GZ/BIj05I8ULUtR6ypER7ogjxpw61rRGxEal4KYjNyORzatbUlHSxr06tFcBTHPiN5NUEJWzlZKG/aKRqYk5tl1IKgPafucZ7w+vxSluLP6olHnL6MQQfYV6bpk/+BRZXm+cXHEiApSipZHlE6tRBDMkxmyysl5VsmtjXiFoJmiZU35ZWK0oNv1OY+omSv0GDDKJCaMI42cHg25dvFCi6QZxVS6ViVSpLUz38A4oiS9ySjlW2althGWKZrN6XNuOVpbwq0ReIzqZhfTrHwE/PZZuEYqcnqO0tZQGxVqRylprLGIEDXNkLOKEakbYsYiiphmiQaEZuD9BghixiKSmGYJIueqBt4TRZEyHtHENCNyNtMaRREzHhHFNBOKnKv7myVcVXKka4WfRBXTjMjpypl8iBmP6MsOmed0Bgk1UHjxXlpORIAWIqeybyGtha1QEdNMRM5s7wLCGpTENBORE6AXNTHNkBM2QFFMM4F5ToX5TYiLqphmRE7YmMhimiEnJEb9XBdJOUlp4Qp1Mc1E5QQ4I/qyvFJCy8n8JnijEjXNAi3fQ0TwIEM6e2OqnAgII8kkptkgOZEQZlN6BquZjqhVFxlBOkZq4Z6WASAFQQ8jZwQJ70FK8CTiaeb3fDSLJyMiwiwiS/q0SkwEBE+85jYjSTpcTiSE2WQRtVlOpAMVemVdtjXmlZxICFlQk/TJjHcmYS96JJ0p6KmcZggKeWmVdPopYwgKuxJVUuQE+EU0Sd99KYICxJH0ry9DUIA/rFy3WyWnGYLCnqyQ9PCXERTgmJmSPvwlBAU4p1bUWklPP1yytA9JYWdGRtLLDyEowDUjomiRwQgKUIZnJC3OgREUoByPSDpkDyEkBfhJj6RNQ7xEUYA6aiS9Cdo8SUoUBaijVtCuFQwICtBGiajdawARFKCNK0HdVtEjKUAd0+Q0q9v/FklhJ1rmP4e8JEoUBejfq2jYNgtEUdgJzwN7u6dSSkBQyMSME7O7FyHUQpoLCqw8rv5o+d6Uw3NvfzjagUkAZvOlLH1lLMyx8wCzWBEhW3ZDmLZ7NTsrwCpmyui5A1+IPidigjcjhZy14/vytBYxwRsPMVcf/2c2QU72wQUVIgj5lqFyIiZEJ5qQb1me1gLMJLKM93wY9cVETYiGkphmg+RETFhJljY2LHICQB/uchI1AXxwlRMxAfwgrYVtUHvxwk1OoiaAL8MjJ2ICtOEip1q6APnJEBS6VwiRzp4vtM5YBvf3m/EeI8DyvUZK33z4+v1bqsZ7dN+3n2W6zwgMO44hY0X1vIqkXh419x7lXh9ds8oyviFyRqmcXrxf2FUtF89ymFkG6nI2p7WZB4FGvUWfLcVt4ahsdy+TR7ifz6lc0F5v0GfalmXldpE3esrr6PrTR84sjNjS4kpQhQhaUi4lD6KR1xK9DHupfoKoR02vSFDy9FWNoKVivv1/lG7OfZkqR043OZUbWgmtFaomaGl51ZTHCnFv5bqNnFGjZvRtEFUEHSHmI1ZHWgVBXZ5+sxvX7ANlPChpjKsknSllKaPlRU4nZo0Yjq6wiIJGFPMML2mj3M8ZRRe4QkzF6FhCJEFbBn4i0iKswn11yenZiLLKeMRqQdWiZSmlkqrcV9d0gPfksAcqBW+2ZqAoq5gZGSrnTtGwlVmCIqUepxWxerj7iIyNZ7SgiKmJhJw7NJpRgiKmLuHl3KnReA4UIaU+y+WkcbzHQ1DEzMGQ9aJH0BDK6RE0y9wlTDp2HuppERQxc0FFBaZGUMTMB5UlQG/fHyk1odJEaBUUMXWh4oSoFRQxtaHyxMi2uBseQwUKciUoYuaAShTlkaCImQcqUph7QREzF/8DSS/2GZ2/N/sAAAAASUVORK5CYII=";
  var Ms = "3000.0.0-alpha.18";
  var ir = { ArrowLeft: "left", ArrowRight: "right", ArrowUp: "up", ArrowDown: "down", " ": "space" };
  var Fs = /* @__PURE__ */ new Set([" ", "ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Tab"]);
  var sr = ["left", "middle", "right", "back", "forward"];
  var or = " !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~";
  var ar = 0;
  var ur = 3;
  var Bs = 0;
  var Ls = 3;
  var Is = -1200;
  var Gs = 1200;
  var bt = "topleft";
  var cr = 64;
  var Vs = "monospace";
  var vt = "monospace";
  var ks = 36;
  var lr = 64;
  var yt = 1024;
  var hr = 0.1;
  var js = 1;
  var mr = [{ name: "a_pos", size: 3 }, { name: "a_uv", size: 2 }, { name: "a_color", size: 4 }];
  var Ut = mr.reduce((i, r) => i + r.size, 0);
  var pr = 2048;
  var dr = pr * 4 * Ut;
  var fr = pr * 6;
  var _s = `
attribute vec3 a_pos;
attribute vec2 a_uv;
attribute vec4 a_color;

varying vec3 v_pos;
varying vec2 v_uv;
varying vec4 v_color;

vec4 def_vert() {
	return vec4(a_pos, 1.0);
}

{{user}}

void main() {
	vec4 pos = vert(a_pos, a_uv, a_color);
	v_pos = a_pos;
	v_uv = a_uv;
	v_color = a_color;
	gl_Position = pos;
}
`;
  var Ns = `
precision mediump float;

varying vec3 v_pos;
varying vec2 v_uv;
varying vec4 v_color;

uniform sampler2D u_tex;

vec4 def_frag() {
	return v_color * texture2D(u_tex, v_uv);
}

{{user}}

void main() {
	gl_FragColor = frag(v_pos, v_uv, v_color, u_tex);
	if (gl_FragColor.a == 0.0) {
		discard;
	}
}
`;
  var Yt = `
vec4 vert(vec3 pos, vec2 uv, vec4 color) {
	return def_vert();
}
`;
  var Xt = `
vec4 frag(vec3 pos, vec2 uv, vec4 color, sampler2D tex) {
	return def_frag();
}
`;
  var qs = /* @__PURE__ */ new Set(["id", "require"]);
  var $s = /* @__PURE__ */ new Set(["add", "update", "draw", "destroy", "inspect", "drawInspect"]);
  function Hs(i) {
    i.requestFullscreen ? i.requestFullscreen() : i.webkitRequestFullscreen && i.webkitRequestFullscreen();
  }
  __name(Hs, "Hs");
  c(Hs, "enterFullscreen");
  function zs() {
    document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullScreen && document.webkitExitFullScreen();
  }
  __name(zs, "zs");
  c(zs, "exitFullscreen");
  function Ys() {
    return document.fullscreenElement || document.webkitFullscreenElement;
  }
  __name(Ys, "Ys");
  c(Ys, "getFullscreenElement");
  function tt(i) {
    switch (i) {
      case "topleft":
        return p(-1, -1);
      case "top":
        return p(0, -1);
      case "topright":
        return p(1, -1);
      case "left":
        return p(-1, 0);
      case "center":
        return p(0, 0);
      case "right":
        return p(1, 0);
      case "botleft":
        return p(-1, 1);
      case "bot":
        return p(0, 1);
      case "botright":
        return p(1, 1);
      default:
        return i;
    }
  }
  __name(tt, "tt");
  c(tt, "anchorPt");
  function Xs(i) {
    switch (i) {
      case "left":
        return 0;
      case "center":
        return 0.5;
      case "right":
        return 1;
      default:
        return 0;
    }
  }
  __name(Xs, "Xs");
  c(Xs, "alignPt");
  function Kt(i) {
    return i.createBuffer(1, 1, 44100);
  }
  __name(Kt, "Kt");
  c(Kt, "createEmptyAudioBuffer");
  var _e = /* @__PURE__ */ __name(class {
    constructor() {
      __publicField(this, "pressed", /* @__PURE__ */ new Set([]));
      __publicField(this, "pressedRepeat", /* @__PURE__ */ new Set([]));
      __publicField(this, "released", /* @__PURE__ */ new Set([]));
      __publicField(this, "down", /* @__PURE__ */ new Set([]));
    }
    update() {
      this.pressed.clear(), this.released.clear(), this.pressedRepeat.clear();
    }
    press(r) {
      this.pressed.add(r), this.pressedRepeat.add(r), this.down.add(r);
    }
    pressRepeat(r) {
      this.pressedRepeat.add(r);
    }
    release(r) {
      this.down.delete(r), this.pressed.delete(r), this.released.add(r);
    }
  }, "_e");
  c(_e, "ButtonState");
  var yo = c((i = {}) => {
    let r = [], a = (() => {
      var _a, _b, _c;
      let e = (_a = i.root) != null ? _a : document.body;
      e === document.body && (document.body.style.width = "100%", document.body.style.height = "100%", document.body.style.margin = "0px", document.documentElement.style.width = "100%", document.documentElement.style.height = "100%");
      let t = (_b = i.canvas) != null ? _b : (() => {
        let v = document.createElement("canvas");
        return e.appendChild(v), v;
      })(), n = (_c = i.scale) != null ? _c : 1, s = !(i.width && i.height && !i.stretch && !i.letterbox), h = t.parentElement.offsetWidth, o = t.parentElement.offsetHeight;
      s ? (t.width = h, t.height = o) : (t.width = i.width * n, t.height = i.height * n);
      let l = t.width, d = t.height, f = i.pixelDensity || window.devicePixelRatio;
      t.width *= f, t.height *= f;
      let g = [`width: ${l}px`, `height: ${d}px`, "outline: none", "cursor: default"];
      return i.crisp && (g.push("image-rendering: pixelated"), g.push("image-rendering: crisp-edges")), t.style.cssText = g.join(";"), t.tabIndex = 0, { canvas: t, canvas2: t.cloneNode(), pixelDensity: f, stretchToParent: s, lastParentWidth: h, lastParentHeight: o, keyState: new _e(), mouseState: new _e(), virtualButtonState: new _e(), charInputted: [], isMouseMoved: false, mouseStarted: false, mousePos: p(0, 0), mouseDeltaPos: p(0, 0), time: 0, realTime: 0, skipTime: false, dt: 0, numFrames: 0, isTouchScreen: "ontouchstart" in window || navigator.maxTouchPoints > 0, loopID: null, stopped: false, paused: false, fpsCounter: new je() };
    })(), u = a.canvas.getContext("webgl", { antialias: true, depth: true, stencil: true, alpha: true, preserveDrawingBuffer: true });
    class b {
      constructor(t, n, s = {}) {
        __publicField(this, "src", null);
        __publicField(this, "glTex");
        __publicField(this, "width");
        __publicField(this, "height");
        this.glTex = u.createTexture(), r.push(() => this.free()), this.bind(), t && n && u.texImage2D(u.TEXTURE_2D, 0, u.RGBA, t, n, 0, u.RGBA, u.UNSIGNED_BYTE, null), this.width = t, this.height = n;
        let h = (() => {
          var _a;
          switch ((_a = s.filter) != null ? _a : i.texFilter) {
            case "linear":
              return u.LINEAR;
            case "nearest":
              return u.NEAREST;
            default:
              return u.NEAREST;
          }
        })(), o = (() => {
          switch (s.wrap) {
            case "repeat":
              return u.REPEAT;
            case "clampToEdge":
              return u.CLAMP_TO_EDGE;
            default:
              return u.CLAMP_TO_EDGE;
          }
        })();
        u.texParameteri(u.TEXTURE_2D, u.TEXTURE_MIN_FILTER, h), u.texParameteri(u.TEXTURE_2D, u.TEXTURE_MAG_FILTER, h), u.texParameteri(u.TEXTURE_2D, u.TEXTURE_WRAP_S, o), u.texParameteri(u.TEXTURE_2D, u.TEXTURE_WRAP_T, o), this.unbind();
      }
      static fromImage(t, n = {}) {
        let s = new b(0, 0, n);
        return s.bind(), u.texImage2D(u.TEXTURE_2D, 0, u.RGBA, u.RGBA, u.UNSIGNED_BYTE, t), s.width = t.width, s.height = t.height, s.unbind(), s.src = t, s;
      }
      update(t, n, s) {
        this.bind(), u.texSubImage2D(u.TEXTURE_2D, 0, t, n, u.RGBA, u.UNSIGNED_BYTE, s), this.unbind();
      }
      bind() {
        u.bindTexture(u.TEXTURE_2D, this.glTex);
      }
      unbind() {
        u.bindTexture(u.TEXTURE_2D, null);
      }
      free() {
        u.deleteTexture(this.glTex);
      }
    }
    __name(b, "b");
    c(b, "Texture");
    class x {
      constructor(t, n, s = {}) {
        __publicField(this, "tex");
        __publicField(this, "glFrameBuffer");
        this.tex = new b(t, n, s), this.glFrameBuffer = u.createFramebuffer(), r.push(() => this.free()), this.bind(), u.framebufferTexture2D(u.FRAMEBUFFER, u.COLOR_ATTACHMENT0, u.TEXTURE_2D, this.tex.glTex, 0), this.unbind();
      }
      bind() {
        u.bindFramebuffer(u.FRAMEBUFFER, this.glFrameBuffer);
      }
      unbind() {
        u.bindFramebuffer(u.FRAMEBUFFER, null);
      }
      free() {
        u.deleteFramebuffer(this.glFrameBuffer);
      }
    }
    __name(x, "x");
    c(x, "FrameBuffer");
    let w = (() => {
      var _a;
      let e = xt(Yt, Xt), t = b.fromImage(new ImageData(new Uint8ClampedArray([255, 255, 255, 255]), 1, 1)), n = new x(u.drawingBufferWidth, u.drawingBufferHeight);
      if (i.background) {
        let l = S.fromArray(i.background);
        u.clearColor(l.r / 255, l.g / 255, l.b / 255, (_a = i.background[3]) != null ? _a : 1);
      }
      u.enable(u.BLEND), u.enable(u.SCISSOR_TEST), u.blendFuncSeparate(u.SRC_ALPHA, u.ONE_MINUS_SRC_ALPHA, u.ONE, u.ONE_MINUS_SRC_ALPHA);
      let s = u.createBuffer();
      u.bindBuffer(u.ARRAY_BUFFER, s), u.bufferData(u.ARRAY_BUFFER, dr * 4, u.DYNAMIC_DRAW), mr.reduce((l, d, f) => (u.vertexAttribPointer(f, d.size, u.FLOAT, false, Ut * 4, l), u.enableVertexAttribArray(f), l + d.size * 4), 0), u.bindBuffer(u.ARRAY_BUFFER, null);
      let h = u.createBuffer();
      u.bindBuffer(u.ELEMENT_ARRAY_BUFFER, h), u.bufferData(u.ELEMENT_ARRAY_BUFFER, fr * 4, u.DYNAMIC_DRAW), u.bindBuffer(u.ELEMENT_ARRAY_BUFFER, null);
      let o = b.fromImage(new ImageData(new Uint8ClampedArray([128, 128, 128, 255, 190, 190, 190, 255, 190, 190, 190, 255, 128, 128, 128, 255]), 2, 2), { wrap: "repeat", filter: "nearest" });
      return { drawCalls: 0, lastDrawCalls: 0, defShader: e, curShader: e, frameBuffer: n, postShader: null, postShaderUniform: null, defTex: t, curTex: t, curUniform: {}, vbuf: s, ibuf: h, vqueue: [], iqueue: [], transform: new F(), transformStack: [], bgTex: o, width: i.width, height: i.height, viewport: { x: 0, y: 0, width: u.drawingBufferWidth, height: u.drawingBufferHeight } };
    })();
    class A {
      constructor(t, n, s = {}) {
        __publicField(this, "tex");
        __publicField(this, "frames", [new k(0, 0, 1, 1)]);
        __publicField(this, "anims", {});
        this.tex = t, n && (this.frames = n), this.anims = s;
      }
      static from(t, n = {}) {
        return typeof t == "string" ? A.fromURL(t, n) : Promise.resolve(A.fromImage(t, n));
      }
      static fromImage(t, n = {}) {
        var _a;
        return new A(b.fromImage(t, n), Jt(n.sliceX || 1, n.sliceY || 1), (_a = n.anims) != null ? _a : {});
      }
      static fromURL(t, n = {}) {
        return Se(t).then((s) => A.fromImage(s, n));
      }
    }
    __name(A, "A");
    c(A, "SpriteData");
    class R {
      constructor(t) {
        __publicField(this, "buf");
        this.buf = t;
      }
      static fromArrayBuffer(t) {
        return new Promise((n, s) => O.ctx.decodeAudioData(t, n, s)).then((n) => new R(n));
      }
      static fromURL(t) {
        return Ht(t) ? R.fromArrayBuffer(Wn(t)) : it(t).then((n) => R.fromArrayBuffer(n));
      }
    }
    __name(R, "R");
    c(R, "SoundData");
    let O = (() => {
      let e = new (window.AudioContext || window.webkitAudioContext)(), t = e.createGain();
      t.connect(e.destination);
      let n = new R(Kt(e));
      return e.decodeAudioData(zt.buffer.slice(0)).then((s) => {
        n.buf = s;
      }).catch((s) => {
        console.error("Failed to load burp: ", s);
      }), { ctx: e, masterNode: t, burpSnd: n };
    })();
    class T {
      constructor(t) {
        __publicField(this, "done", false);
        __publicField(this, "data", null);
        __publicField(this, "error", null);
        __publicField(this, "onLoadEvents", new ee());
        __publicField(this, "onErrorEvents", new ee());
        __publicField(this, "onFinishEvents", new ee());
        t.then((n) => {
          this.data = n, this.onLoadEvents.trigger(n);
        }).catch((n) => {
          if (this.error = n, this.onErrorEvents.numListeners() > 0)
            this.onErrorEvents.trigger(n);
          else
            throw n;
        }).finally(() => {
          this.onFinishEvents.trigger(), this.done = true;
        });
      }
      static loaded(t) {
        let n = new T(Promise.resolve(t));
        return n.data = t, n.done = true, n;
      }
      onLoad(t) {
        return this.onLoadEvents.add(t), this;
      }
      onError(t) {
        return this.onErrorEvents.add(t), this;
      }
      onFinish(t) {
        return this.onFinishEvents.add(t), this;
      }
      then(t) {
        return this.onLoad(t);
      }
      catch(t) {
        return this.onError(t);
      }
      finally(t) {
        return this.onFinish(t);
      }
    }
    __name(T, "T");
    c(T, "Asset");
    class j {
      constructor() {
        __publicField(this, "assets", /* @__PURE__ */ new Map());
        __publicField(this, "lastUID", 0);
      }
      add(t, n) {
        let s = t != null ? t : this.lastUID++ + "", h = new T(n);
        return this.assets.set(s, h), h;
      }
      addLoaded(t, n) {
        let s = t != null ? t : this.lastUID++ + "", h = T.loaded(n);
        return this.assets.set(s, h), h;
      }
      get(t) {
        return this.assets.get(t);
      }
      progress() {
        if (this.assets.size === 0)
          return 1;
        let t = 0;
        return this.assets.forEach((n) => {
          n.done && t++;
        }), t / this.assets.size;
      }
    }
    __name(j, "j");
    c(j, "AssetBucket");
    let y = { urlPrefix: "", sprites: new j(), fonts: new j(), bitmapFonts: new j(), sounds: new j(), shaders: new j(), custom: new j(), loaded: false }, m = { ev: new ce(), objEvents: new ce(), root: Un([]), gravity: 0, scenes: {}, logs: [], cam: { pos: null, scale: p(1), angle: 0, shake: 0, transform: new F() } };
    function $(e) {
      return y.custom.add(null, e);
    }
    __name($, "$");
    c($, "load");
    function _() {
      let e = [y.sprites, y.sounds, y.shaders, y.fonts, y.bitmapFonts, y.custom];
      return e.reduce((t, n) => t + n.progress(), 0) / e.length;
    }
    __name(_, "_");
    c(_, "loadProgress");
    function nt(e) {
      return e !== void 0 && (y.urlPrefix = e), y.urlPrefix;
    }
    __name(nt, "nt");
    c(nt, "loadRoot");
    function xe(e) {
      let t = y.urlPrefix + e;
      return fetch(t).then((n) => {
        if (!n.ok)
          throw new Error(`Failed to fetch ${t}`);
        return n;
      });
    }
    __name(xe, "xe");
    c(xe, "fetchURL");
    function Ee(e) {
      return xe(e).then((t) => t.json());
    }
    __name(Ee, "Ee");
    c(Ee, "fetchJSON");
    function rt(e) {
      return xe(e).then((t) => t.text());
    }
    __name(rt, "rt");
    c(rt, "fetchText");
    function it(e) {
      return xe(e).then((t) => t.arrayBuffer());
    }
    __name(it, "it");
    c(it, "fetchArrayBuffer");
    function Se(e) {
      let t = new Image();
      return t.crossOrigin = "anonymous", t.src = Ht(e) ? e : y.urlPrefix + e, new Promise((n, s) => {
        t.onload = () => n(t), t.onerror = () => s(new Error(`Failed to load image from "${e}"`));
      });
    }
    __name(Se, "Se");
    c(Se, "loadImg");
    function Ne(e, t, n = {}) {
      let s = new FontFace(e, typeof t == "string" ? `url(${t})` : t);
      return document.fonts.add(s), y.fonts.add(e, s.load().catch((h) => {
        throw new Error(`Failed to load font from "${t}": ${h}`);
      }));
    }
    __name(Ne, "Ne");
    c(Ne, "loadFont");
    function qe(e, t, n, s, h = {}) {
      return y.bitmapFonts.add(e, Se(t).then((o) => {
        var _a;
        return Ar(b.fromImage(o, h), n, s, (_a = h.chars) != null ? _a : or);
      }));
    }
    __name(qe, "qe");
    c(qe, "loadBitmapFont");
    function Jt(e = 1, t = 1, n = 0, s = 0, h = 1, o = 1) {
      let l = [], d = h / e, f = o / t;
      for (let g = 0; g < t; g++)
        for (let v = 0; v < e; v++)
          l.push(new k(n + v * d, s + g * f, d, f));
      return l;
    }
    __name(Jt, "Jt");
    c(Jt, "slice");
    function Qt(e, t) {
      return $(typeof t == "string" ? new Promise((n, s) => {
        Ee(t).then((h) => {
          Qt(e, h).then(n).catch(s);
        });
      }) : A.from(e).then((n) => {
        let s = {};
        for (let h in t) {
          let o = n.tex.width, l = n.tex.height, d = t[h], f = new A(n.tex, Jt(d.sliceX, d.sliceY, d.x / o, d.y / l, d.width / o, d.height / l), d.anims);
          y.sprites.addLoaded(h, f), s[h] = f;
        }
        return s;
      }));
    }
    __name(Qt, "Qt");
    c(Qt, "loadSpriteAtlas");
    function Wt(e, t = {}) {
      let n = document.createElement("canvas"), s = e[0].width, h = e[0].height;
      n.width = s * e.length, n.height = h;
      let o = n.getContext("2d");
      e.forEach((d, f) => {
        d instanceof ImageData ? o.putImageData(d, f * s, 0) : o.drawImage(d, f * s, 0);
      });
      let l = o.getImageData(0, 0, e.length * s, h);
      return A.fromImage(l, __spreadProps(__spreadValues({}, t), { sliceX: e.length, sliceY: 1 }));
    }
    __name(Wt, "Wt");
    c(Wt, "createSpriteSheet");
    function gr(e, t, n = { sliceX: 1, sliceY: 1, anims: {} }) {
      return Array.isArray(t) ? y.sprites.addLoaded(e, Wt(t, n)) : y.sprites.addLoaded(e, A.fromImage(t, n));
    }
    __name(gr, "gr");
    c(gr, "loadSpriteLocal");
    function Ce(e, t, n = { sliceX: 1, sliceY: 1, anims: {}, filter: "nearest", wrap: "clampToEdge" }) {
      return Array.isArray(t) ? y.sprites.add(e, Promise.all(t.map((s) => typeof s == "string" ? Se(s) : Promise.resolve(s))).then((s) => Wt(s, n))) : y.sprites.add(e, A.from(t, n));
    }
    __name(Ce, "Ce");
    c(Ce, "loadSprite");
    function wr(e, t) {
      return y.sprites.add(e, new Promise((n) => __async(this, null, function* () {
        let s = typeof t == "string" ? yield Ee(t) : t, h = yield Promise.all(s.frames.map(Se)), o = document.createElement("canvas");
        o.width = s.width, o.height = s.height * s.frames.length;
        let l = o.getContext("2d");
        h.forEach((f, g) => {
          l.drawImage(f, 0, g * s.height);
        });
        let d = yield Ce(null, o, { sliceY: s.frames.length, anims: s.anims });
        n(d);
      })));
    }
    __name(wr, "wr");
    c(wr, "loadPedit");
    function br(e, t, n) {
      return y.sprites.add(e, new Promise((s) => __async(this, null, function* () {
        let h = yield Ce(null, t), o = typeof n == "string" ? yield Ee(n) : n, l = o.meta.size;
        h.frames = o.frames.map((d) => new k(d.frame.x / l.w, d.frame.y / l.h, d.frame.w / l.w, d.frame.h / l.h));
        for (let d of o.meta.frameTags)
          d.from === d.to ? h.anims[d.name] = d.from : h.anims[d.name] = { from: d.from, to: d.to, speed: 10, loop: true, pingpong: d.direction === "pingpong" };
        s(h);
      })));
    }
    __name(br, "br");
    c(br, "loadAseprite");
    function vr(e, t, n) {
      return y.shaders.addLoaded(e, xt(t, n));
    }
    __name(vr, "vr");
    c(vr, "loadShader");
    function yr(e, t, n) {
      return y.shaders.add(e, new Promise((s) => {
        let h = c((o) => o ? rt(o) : new Promise((l) => l(null)), "resolveUrl");
        return Promise.all([h(t), h(n)]).then(([o, l]) => {
          s(xt(o, l));
        });
      }));
    }
    __name(yr, "yr");
    c(yr, "loadShaderURL");
    function Ur(e, t) {
      return y.sounds.add(e, typeof t == "string" ? R.fromURL(t) : R.fromArrayBuffer(t));
    }
    __name(Ur, "Ur");
    c(Ur, "loadSound");
    function xr(e = "bean") {
      return Ce(e, tr);
    }
    __name(xr, "xr");
    c(xr, "loadBean");
    function Zt(e) {
      return y.sprites.get(e);
    }
    __name(Zt, "Zt");
    c(Zt, "getSprite");
    function en(e) {
      return y.sounds.get(e);
    }
    __name(en, "en");
    c(en, "getSound");
    function Er(e) {
      return y.fonts.get(e);
    }
    __name(Er, "Er");
    c(Er, "getFont");
    function tn(e) {
      return y.bitmapFonts.get(e);
    }
    __name(tn, "tn");
    c(tn, "getBitmapFont");
    function nn(e) {
      return y.shaders.get(e);
    }
    __name(nn, "nn");
    c(nn, "getShader");
    function rn(e) {
      if (typeof e == "string") {
        let t = Zt(e);
        if (t)
          return t;
        if (_() < 1)
          return null;
        throw new Error(`Sprite not found: ${e}`);
      } else {
        if (e instanceof A)
          return T.loaded(e);
        if (e instanceof T)
          return e;
        throw new Error(`Invalid sprite: ${e}`);
      }
    }
    __name(rn, "rn");
    c(rn, "resolveSprite");
    function Sr(e) {
      if (typeof e == "string") {
        let t = en(e);
        if (t)
          return t.data ? t.data : t;
        if (_() < 1)
          return null;
        throw new Error(`Sound not found: ${e}`);
      } else {
        if (e instanceof R)
          return e;
        if (e instanceof T)
          return e.data ? e.data : e;
        throw new Error(`Invalid sound: ${e}`);
      }
    }
    __name(Sr, "Sr");
    c(Sr, "resolveSound");
    function Cr(e) {
      if (!e)
        return w.defShader;
      if (typeof e == "string") {
        let t = nn(e);
        if (t)
          return t.data ? t.data : t;
        if (_() < 1)
          return null;
        throw new Error(`Shader not found: ${e}`);
      } else if (e instanceof T)
        return e.data ? e.data : e;
      return e;
    }
    __name(Cr, "Cr");
    c(Cr, "resolveShader");
    function sn(e) {
      var _a;
      if (!e)
        return sn((_a = i.font) != null ? _a : Vs);
      if (typeof e == "string") {
        let t = tn(e);
        if (t)
          return t.data ? t.data : t;
        if (document.fonts.check(`${lr}px ${e}`))
          return e;
        if (_() < 1)
          return null;
        throw new Error(`Font not found: ${e}`);
      } else if (e instanceof T)
        return e.data ? e.data : e;
      return e;
    }
    __name(sn, "sn");
    c(sn, "resolveFont");
    function Tr(e) {
      return e !== void 0 && (O.masterNode.gain.value = re(e, ar, ur)), O.masterNode.gain.value;
    }
    __name(Tr, "Tr");
    c(Tr, "volume");
    function $e(e, t = { loop: false, volume: 1, speed: 1, detune: 0, seek: 0 }) {
      var _a;
      let n = Sr(e);
      if (n instanceof T) {
        let U = $e(new R(Kt(O.ctx))), L = c((P) => {
          let H = $e(P, t);
          for (let z in H)
            U[z] = H[z];
        }, "doPlay");
        return n.onLoad(L), U;
      } else if (n === null) {
        let U = $e(new R(Kt(O.ctx)));
        return Ft(() => {
        }), U;
      }
      let s = O.ctx, h = false, o = s.createBufferSource();
      o.buffer = n.buf, o.loop = !!t.loop;
      let l = s.createGain();
      o.connect(l), l.connect(O.masterNode);
      let d = (_a = t.seek) != null ? _a : 0;
      o.start(0, d);
      let f = s.currentTime - d, g = null, v = { stop() {
        h || (this.pause(), f = s.currentTime);
      }, play(U) {
        if (!h)
          return;
        let L = o;
        o = s.createBufferSource(), o.buffer = L.buffer, o.loop = L.loop, o.playbackRate.value = L.playbackRate.value, o.detune && (o.detune.value = L.detune.value), o.connect(l);
        let P = U != null ? U : this.time();
        o.start(0, P), f = s.currentTime - P, h = false, g = null;
      }, pause() {
        h || (o.stop(), h = true, g = s.currentTime);
      }, isPaused() {
        return h;
      }, isStopped() {
        return h;
      }, speed(U) {
        return U !== void 0 && (o.playbackRate.value = re(U, Bs, Ls)), o.playbackRate.value;
      }, detune(U) {
        return o.detune ? (U !== void 0 && (o.detune.value = re(U, Is, Gs)), o.detune.value) : 0;
      }, volume(U) {
        return U !== void 0 && (l.gain.value = re(U, ar, ur)), l.gain.value;
      }, loop() {
        o.loop = true;
      }, unloop() {
        o.loop = false;
      }, duration() {
        return n.buf.duration;
      }, time() {
        return h ? g - f : s.currentTime - f;
      } };
      return v.speed(t.speed), v.detune(t.detune), v.volume(t.volume), v;
    }
    __name($e, "$e");
    c($e, "play");
    function on(e) {
      return $e(O.burpSnd, e);
    }
    __name(on, "on");
    c(on, "burp");
    function xt(e = Yt, t = Xt) {
      let n = _s.replace("{{user}}", e != null ? e : Yt), s = Ns.replace("{{user}}", t != null ? t : Xt), h = u.createShader(u.VERTEX_SHADER), o = u.createShader(u.FRAGMENT_SHADER);
      u.shaderSource(h, n), u.shaderSource(o, s), u.compileShader(h), u.compileShader(o);
      let l = u.createProgram();
      if (r.push(() => u.deleteProgram(l)), u.attachShader(l, h), u.attachShader(l, o), u.bindAttribLocation(l, 0, "a_pos"), u.bindAttribLocation(l, 1, "a_uv"), u.bindAttribLocation(l, 2, "a_color"), u.linkProgram(l), !u.getProgramParameter(l, u.LINK_STATUS)) {
        let d = c((U) => {
          let L = new RegExp("^ERROR:\\s0:(?<line>\\d+):\\s(?<msg>.+)"), P = U.match(L);
          return { line: Number(P.groups.line), msg: P.groups.msg.replace(/\n\0$/, "") };
        }, "formatShaderError"), f = u.getShaderInfoLog(h), g = u.getShaderInfoLog(o), v = "";
        if (f) {
          let U = d(f);
          v += `Vertex shader line ${U.line - 14}: ${U.msg}`;
        }
        if (g) {
          let U = d(g);
          v += `Fragment shader line ${U.line - 14}: ${U.msg}`;
        }
        throw new Error(v);
      }
      return u.deleteShader(h), u.deleteShader(o), { bind() {
        u.useProgram(l);
      }, unbind() {
        u.useProgram(null);
      }, free() {
        u.deleteProgram(l);
      }, send(d) {
        for (let f in d) {
          let g = d[f], v = u.getUniformLocation(l, f);
          typeof g == "number" ? u.uniform1f(v, g) : g instanceof F ? u.uniformMatrix4fv(v, false, new Float32Array(g.m)) : g instanceof S ? u.uniform3f(v, g.r, g.g, g.b) : g instanceof Ie ? u.uniform3f(v, g.x, g.y, g.z) : g instanceof D && u.uniform2f(v, g.x, g.y);
        }
      } };
    }
    __name(xt, "xt");
    c(xt, "makeShader");
    function Ar(e, t, n, s) {
      let h = e.width / t, o = {}, l = s.split("").entries();
      for (let [d, f] of l)
        o[f] = new k(d % h * t, Math.floor(d / h) * n, t, n);
      return { tex: e, map: o, size: n };
    }
    __name(Ar, "Ar");
    c(Ar, "makeFont");
    function Et(e, t, n, s = w.defTex, h = w.defShader, o = {}) {
      let l = Cr(h);
      if (!(!l || l instanceof T)) {
        (s !== w.curTex || l !== w.curShader || !Nt(w.curUniform, o) || w.vqueue.length + e.length * Ut > dr || w.iqueue.length + t.length > fr) && le();
        for (let d of e) {
          let f = n ? w.transform : m.cam.transform.mult(w.transform), g = Dr(f.multVec2(d.pos.xy()));
          w.vqueue.push(g.x, g.y, d.pos.z, d.uv.x, d.uv.y, d.color.r / 255, d.color.g / 255, d.color.b / 255, d.opacity);
        }
        for (let d of t)
          w.iqueue.push(d + w.vqueue.length / Ut - e.length);
        w.curTex = s, w.curShader = l, w.curUniform = o;
      }
    }
    __name(Et, "Et");
    c(Et, "drawRaw");
    function le() {
      !w.curTex || !w.curShader || w.vqueue.length === 0 || w.iqueue.length === 0 || (u.bindBuffer(u.ARRAY_BUFFER, w.vbuf), u.bufferSubData(u.ARRAY_BUFFER, 0, new Float32Array(w.vqueue)), u.bindBuffer(u.ELEMENT_ARRAY_BUFFER, w.ibuf), u.bufferSubData(u.ELEMENT_ARRAY_BUFFER, 0, new Uint16Array(w.iqueue)), w.curShader.bind(), w.curShader.send(w.curUniform), w.curTex.bind(), u.drawElements(u.TRIANGLES, w.iqueue.length, u.UNSIGNED_SHORT, 0), w.curTex.unbind(), w.curShader.unbind(), u.bindBuffer(u.ARRAY_BUFFER, null), u.bindBuffer(u.ELEMENT_ARRAY_BUFFER, null), w.vqueue = [], w.iqueue = [], w.drawCalls++);
    }
    __name(le, "le");
    c(le, "flush");
    function Or() {
      w.frameBuffer.bind(), Ir(), u.clear(u.COLOR_BUFFER_BIT), i.background || oe(() => {
        Oe({ width: N(), height: B(), quad: new k(0, 0, N() / cr, B() / cr), tex: w.bgTex, fixed: true });
      }), w.drawCalls = 0, w.transformStack = [], w.transform = new F();
    }
    __name(Or, "Or");
    c(Or, "frameStart");
    function Rr(e, t) {
      w.postShader = e, w.postShaderUniform = t != null ? t : null;
    }
    __name(Rr, "Rr");
    c(Rr, "usePostEffect");
    function Pr() {
      le(), w.frameBuffer.unbind(), oe(() => {
        an({ flipY: true, tex: w.frameBuffer.tex, scale: p(1 / a.pixelDensity), shader: w.postShader, uniform: w.postShaderUniform, fixed: true });
      }), le(), w.lastDrawCalls = w.drawCalls;
    }
    __name(Pr, "Pr");
    c(Pr, "frameEnd");
    function Dr(e) {
      return p(e.x / N() * 2 - 1, -e.y / B() * 2 + 1);
    }
    __name(Dr, "Dr");
    c(Dr, "screen2ndc");
    function Mr(e) {
      w.transform = e.clone();
    }
    __name(Mr, "Mr");
    c(Mr, "pushMatrix");
    function I(...e) {
      if (e[0] === void 0)
        return;
      let t = p(...e);
      t.x === 0 && t.y === 0 || w.transform.translate(t);
    }
    __name(I, "I");
    c(I, "pushTranslate");
    function Te(...e) {
      if (e[0] === void 0)
        return;
      let t = p(...e);
      t.x === 1 && t.y === 1 || w.transform.scale(t);
    }
    __name(Te, "Te");
    c(Te, "pushScale");
    function Ae(e) {
      !e || w.transform.rotate(e);
    }
    __name(Ae, "Ae");
    c(Ae, "pushRotate");
    function te() {
      w.transformStack.push(w.transform.clone());
    }
    __name(te, "te");
    c(te, "pushTransform");
    function K() {
      w.transformStack.length > 0 && (w.transform = w.transformStack.pop());
    }
    __name(K, "K");
    c(K, "popTransform");
    function Oe(e) {
      var _a;
      if (e.width === void 0 || e.height === void 0)
        throw new Error('drawUVQuad() requires property "width" and "height".');
      if (e.width <= 0 || e.height <= 0)
        return;
      let t = e.width, n = e.height, h = tt(e.anchor || bt).scale(p(t, n).scale(-0.5)), o = e.quad || new k(0, 0, 1, 1), l = e.color || E(255, 255, 255), d = (_a = e.opacity) != null ? _a : 1, f = e.tex ? hr / e.tex.width : 0, g = e.tex ? hr / e.tex.height : 0, v = o.x + f, U = o.y + g, L = o.w - f * 2, P = o.h - g * 2;
      te(), I(e.pos), Ae(e.angle), Te(e.scale), I(h), Et([{ pos: ye(-t / 2, n / 2, 0), uv: p(e.flipX ? v + L : v, e.flipY ? U : U + P), color: l, opacity: d }, { pos: ye(-t / 2, -n / 2, 0), uv: p(e.flipX ? v + L : v, e.flipY ? U + P : U), color: l, opacity: d }, { pos: ye(t / 2, -n / 2, 0), uv: p(e.flipX ? v : v + L, e.flipY ? U + P : U), color: l, opacity: d }, { pos: ye(t / 2, n / 2, 0), uv: p(e.flipX ? v : v + L, e.flipY ? U : U + P), color: l, opacity: d }], [0, 1, 3, 1, 2, 3], e.fixed, e.tex, e.shader, e.uniform), K();
    }
    __name(Oe, "Oe");
    c(Oe, "drawUVQuad");
    function an(e) {
      var _a;
      if (!e.tex)
        throw new Error('drawTexture() requires property "tex".');
      let t = (_a = e.quad) != null ? _a : new k(0, 0, 1, 1), n = e.tex.width * t.w, s = e.tex.height * t.h, h = p(1);
      if (e.tiled) {
        let o = Math.ceil((e.width || n) / n), l = Math.ceil((e.height || s) / s), f = tt(e.anchor || bt).add(p(1, 1)).scale(0.5).scale(o * n, l * s);
        for (let g = 0; g < o; g++)
          for (let v = 0; v < l; v++)
            Oe(__spreadProps(__spreadValues({}, e), { pos: (e.pos || p(0)).add(p(n * g, s * v)).sub(f), scale: h.scale(e.scale || p(1)), tex: e.tex, quad: t, width: n, height: s, anchor: "topleft" }));
      } else
        e.width && e.height ? (h.x = e.width / n, h.y = e.height / s) : e.width ? (h.x = e.width / n, h.y = h.x) : e.height && (h.y = e.height / s, h.x = h.y), Oe(__spreadProps(__spreadValues({}, e), { scale: h.scale(e.scale || p(1)), tex: e.tex, quad: t, width: n, height: s }));
    }
    __name(an, "an");
    c(an, "drawTexture");
    function un(e) {
      var _a, _b;
      if (!e.sprite)
        throw new Error('drawSprite() requires property "sprite"');
      let t = rn(e.sprite);
      if (!t || !t.data)
        return;
      let n = t.data.frames[(_a = e.frame) != null ? _a : 0];
      if (!n)
        throw new Error(`Frame not found: ${(_b = e.frame) != null ? _b : 0}`);
      an(__spreadProps(__spreadValues({}, e), { tex: t.data.tex, quad: n.scale(e.quad || new k(0, 0, 1, 1)) }));
    }
    __name(un, "un");
    c(un, "drawSprite");
    function He(e, t, n, s, h, o = 1) {
      s = he(s % 360), h = he(h % 360), h <= s && (h += Math.PI * 2);
      let l = Math.ceil(Math.max(Math.sqrt(t + n) * 3 * (o || 1), 16)), d = (h - s) / l, f = [];
      for (let g = s; g < h; g += d)
        f.push(e.add(t * Math.cos(g), n * Math.sin(g)));
      return f.push(e.add(t * Math.cos(h), n * Math.sin(h))), f;
    }
    __name(He, "He");
    c(He, "getArcPts");
    function J(e) {
      if (e.width === void 0 || e.height === void 0)
        throw new Error('drawRect() requires property "width" and "height".');
      if (e.width <= 0 || e.height <= 0)
        return;
      let t = e.width, n = e.height, h = tt(e.anchor || bt).add(1, 1).scale(p(t, n).scale(-0.5)), o = [p(0, 0), p(t, 0), p(t, n), p(0, n)];
      if (e.radius) {
        let l = Math.min(Math.min(t, n) / 2, e.radius);
        o = [p(l, 0), p(t - l, 0), ...He(p(t - l, l), l, l, 270, 360), p(t, l), p(t, n - l), ...He(p(t - l, n - l), l, l, 0, 90), p(t - l, n), p(l, n), ...He(p(l, n - l), l, l, 90, 180), p(0, n - l), p(0, l), ...He(p(l, l), l, l, 180, 270)];
      }
      pe(__spreadValues(__spreadProps(__spreadValues({}, e), { offset: h, pts: o }), e.gradient ? { colors: e.horizontal ? [e.gradient[0], e.gradient[1], e.gradient[1], e.gradient[0]] : [e.gradient[0], e.gradient[0], e.gradient[1], e.gradient[1]] } : {}));
    }
    __name(J, "J");
    c(J, "drawRect");
    function ze(e) {
      let { p1: t, p2: n } = e;
      if (!t || !n)
        throw new Error('drawLine() requires properties "p1" and "p2".');
      let s = e.width || 1, h = n.sub(t).unit().normal().scale(s * 0.5), o = [t.sub(h), t.add(h), n.add(h), n.sub(h)].map((l) => {
        var _a, _b;
        return { pos: ye(l.x, l.y, 0), uv: p(0), color: (_a = e.color) != null ? _a : S.WHITE, opacity: (_b = e.opacity) != null ? _b : 1 };
      });
      Et(o, [0, 1, 3, 1, 2, 3], e.fixed, w.defTex, e.shader, e.uniform);
    }
    __name(ze, "ze");
    c(ze, "drawLine");
    function cn(e) {
      let t = e.pts;
      if (!t)
        throw new Error('drawLines() requires property "pts".');
      if (!(t.length < 2))
        if (e.radius && t.length >= 3) {
          let n = t[0].dist(t[1]);
          for (let h = 1; h < t.length - 1; h++)
            n = Math.min(t[h].dist(t[h + 1]), n);
          let s = Math.min(e.radius, n / 2);
          ze(__spreadProps(__spreadValues({}, e), { p1: t[0], p2: t[1] }));
          for (let h = 1; h < t.length - 2; h++) {
            let o = t[h], l = t[h + 1];
            ze(__spreadProps(__spreadValues({}, e), { p1: o, p2: l }));
          }
          ze(__spreadProps(__spreadValues({}, e), { p1: t[t.length - 2], p2: t[t.length - 1] }));
        } else
          for (let n = 0; n < t.length - 1; n++)
            ze(__spreadProps(__spreadValues({}, e), { p1: t[n], p2: t[n + 1] })), e.join !== "none" && me(__spreadProps(__spreadValues({}, e), { pos: t[n], radius: e.width / 2 }));
    }
    __name(cn, "cn");
    c(cn, "drawLines");
    function ln(e) {
      if (!e.p1 || !e.p2 || !e.p3)
        throw new Error('drawPolygon() requires properties "p1", "p2" and "p3".');
      return pe(__spreadProps(__spreadValues({}, e), { pts: [e.p1, e.p2, e.p3] }));
    }
    __name(ln, "ln");
    c(ln, "drawTriangle");
    function me(e) {
      if (!e.radius)
        throw new Error('drawCircle() requires property "radius".');
      e.radius !== 0 && hn(__spreadProps(__spreadValues({}, e), { radiusX: e.radius, radiusY: e.radius, angle: 0 }));
    }
    __name(me, "me");
    c(me, "drawCircle");
    function hn(e) {
      var _a, _b;
      if (e.radiusX === void 0 || e.radiusY === void 0)
        throw new Error('drawEllipse() requires properties "radiusX" and "radiusY".');
      if (e.radiusX === 0 || e.radiusY === 0)
        return;
      let t = (_a = e.start) != null ? _a : 0, n = (_b = e.end) != null ? _b : 360, s = He(p(0), e.radiusX, e.radiusY, t, n, e.resolution);
      s.unshift(p(0));
      let h = __spreadValues(__spreadProps(__spreadValues({}, e), { pts: s, radius: 0 }), e.gradient ? { colors: [e.gradient[0], ...Array(s.length - 1).fill(e.gradient[1])] } : {});
      if (n - t >= 360 && e.outline) {
        e.fill !== false && pe(__spreadProps(__spreadValues({}, h), { outline: null })), pe(__spreadProps(__spreadValues({}, h), { pts: s.slice(1), fill: false }));
        return;
      }
      pe(h);
    }
    __name(hn, "hn");
    c(hn, "drawEllipse");
    function pe(e) {
      var _a, _b;
      if (!e.pts)
        throw new Error('drawPolygon() requires property "pts".');
      let t = e.pts.length;
      if (!(t < 3)) {
        if (te(), I(e.pos), Te(e.scale), Ae(e.angle), I(e.offset), e.fill !== false) {
          let n = (_a = e.color) != null ? _a : S.WHITE, s = e.pts.map((o, l) => {
            var _a2, _b2;
            return { pos: ye(o.x, o.y, 0), uv: p(0, 0), color: e.colors ? (_a2 = e.colors[l]) != null ? _a2 : n : n, opacity: (_b2 = e.opacity) != null ? _b2 : 1 };
          }), h = [...Array(t - 2).keys()].map((o) => [0, o + 1, o + 2]).flat();
          Et(s, (_b = e.indices) != null ? _b : h, e.fixed, w.defTex, e.shader, e.uniform);
        }
        e.outline && cn({ pts: [...e.pts, e.pts[0]], radius: e.radius, width: e.outline.width, color: e.outline.color, join: e.outline.join, uniform: e.uniform, fixed: e.fixed, opacity: e.opacity }), K();
      }
    }
    __name(pe, "pe");
    c(pe, "drawPolygon");
    function dn(e, t, n) {
      le(), u.clear(u.STENCIL_BUFFER_BIT), u.enable(u.STENCIL_TEST), u.stencilFunc(u.NEVER, 1, 255), u.stencilOp(u.REPLACE, u.REPLACE, u.REPLACE), t(), le(), u.stencilFunc(n, 1, 255), u.stencilOp(u.KEEP, u.KEEP, u.KEEP), e(), le(), u.disable(u.STENCIL_TEST);
    }
    __name(dn, "dn");
    c(dn, "drawStenciled");
    function Fr(e, t) {
      dn(e, t, u.EQUAL);
    }
    __name(Fr, "Fr");
    c(Fr, "drawMasked");
    function Br(e, t) {
      dn(e, t, u.NOTEQUAL);
    }
    __name(Br, "Br");
    c(Br, "drawSubtracted");
    function fn() {
      return (w.viewport.width + w.viewport.height) / (w.width + w.height);
    }
    __name(fn, "fn");
    c(fn, "getViewportScale");
    function oe(e) {
      le();
      let t = w.width, n = w.height;
      w.width = w.viewport.width, w.height = w.viewport.height, e(), le(), w.width = t, w.height = n;
    }
    __name(oe, "oe");
    c(oe, "drawUnscaled");
    function mn(e, t) {
      t.pos && (e.pos = e.pos.add(t.pos)), t.scale && (e.scale = e.scale.scale(p(t.scale))), t.angle && (e.angle += t.angle), t.color && (e.color = e.color.mult(t.color)), t.opacity && (e.opacity *= t.opacity);
    }
    __name(mn, "mn");
    c(mn, "applyCharTransform");
    let pn = new RegExp("\\[(?<text>[^\\]]*)\\]\\.(?<style>[\\w\\.]+)+", "g");
    function Lr(e) {
      let t = {}, n = e.replace(pn, "$1"), s = 0;
      for (let h of e.matchAll(pn)) {
        let o = h.groups.style.split("."), l = h.index - s;
        for (let d = l; d < h.index + h.groups.text.length; d++)
          t[d] = { localIdx: d - l, styles: o };
        s += 3 + h.groups.style.length;
      }
      return { charStyleMap: t, text: n };
    }
    __name(Lr, "Lr");
    c(Lr, "compileStyledText");
    let St = {};
    function ge(e) {
      var _a, _b, _c, _d, _e2, _f, _g;
      if (e.text === void 0)
        throw new Error('formatText() requires property "text".');
      let t = sn(e.font);
      if (e.text === "" || t instanceof T || !t)
        return { width: 0, height: 0, chars: [], opt: e };
      let { charStyleMap: n, text: s } = Lr(e.text + ""), h = s.split("");
      if (t instanceof FontFace || typeof t == "string") {
        let q = t instanceof FontFace ? t.family : t, C = (_a = St[q]) != null ? _a : { font: { tex: new b(yt, yt), map: {}, size: lr }, cursor: p(0) };
        St[q] || (St[q] = C), t = C.font;
        for (let V of h)
          if (!C.font.map[V]) {
            let ie = a.canvas2.getContext("2d");
            ie.font = `${t.size}px ${q}`, ie.clearRect(0, 0, a.canvas2.width, a.canvas2.height), ie.textBaseline = "top", ie.textAlign = "left", ie.fillStyle = "rgb(255, 255, 255)", ie.fillText(V, 0, 0);
            let We = ie.measureText(V), Fe = Math.ceil(We.width), Be = ie.getImageData(0, 0, Fe, t.size);
            if (C.cursor.x + Fe > yt && (C.cursor.x = 0, C.cursor.y += t.size, C.cursor.y > yt))
              throw new Error("Font atlas exceeds character limit");
            t.tex.update(C.cursor.x, C.cursor.y, Be), t.map[V] = new k(C.cursor.x, C.cursor.y, Fe, t.size), C.cursor.x += Fe;
          }
      }
      let o = e.size || t.size, l = p((_b = e.scale) != null ? _b : 1).scale(o / t.size), d = (_c = e.lineSpacing) != null ? _c : 0, f = (_d = e.letterSpacing) != null ? _d : 0, g = 0, v = 0, U = 0, L = [], P = [], H = 0, z = null, be = null;
      for (; H < h.length; ) {
        let q = h[H];
        if (q === `
`)
          U += o + d, L.push({ width: g - f, chars: P }), z = null, be = null, g = 0, P = [];
        else {
          let C = t.map[q];
          if (C) {
            let V = C.w * l.x;
            e.width && g + V > e.width && (U += o + d, z != null && (H -= P.length - z, q = h[H], C = t.map[q], V = C.w * l.x, P = P.slice(0, z - 1), g = be), z = null, be = null, L.push({ width: g - f, chars: P }), g = 0, P = []), P.push({ tex: t.tex, width: C.w, height: C.h, quad: new k(C.x / t.tex.width, C.y / t.tex.height, C.w / t.tex.width, C.h / t.tex.height), ch: q, pos: p(g, U), opacity: (_e2 = e.opacity) != null ? _e2 : 1, color: (_f = e.color) != null ? _f : S.WHITE, scale: p(l), angle: 0 }), q === " " && (z = P.length, be = g), g += V, v = Math.max(v, g), g += f;
          }
        }
        H++;
      }
      L.push({ width: g - f, chars: P }), U += o, e.width && (v = e.width);
      let W = [];
      for (let q of L) {
        let C = (v - q.width) * Xs((_g = e.align) != null ? _g : "left");
        for (let V of q.chars) {
          let ie = t.map[V.ch], We = W.length, Fe = new D(ie.w * l.x * 0.5, ie.h * l.y * 0.5);
          if (V.pos = V.pos.add(C, 0).add(Fe), e.transform) {
            let Be = typeof e.transform == "function" ? e.transform(We, V.ch) : e.transform;
            Be && mn(V, Be);
          }
          if (n[We]) {
            let { styles: Be, localIdx: bs } = n[We];
            for (let vs of Be) {
              let It = e.styles[vs], In = typeof It == "function" ? It(bs, V.ch) : It;
              In && mn(V, In);
            }
          }
          W.push(V);
        }
      }
      return { width: v, height: U, chars: W, opt: e };
    }
    __name(ge, "ge");
    c(ge, "formatText");
    function st(e) {
      we(ge(e));
    }
    __name(st, "st");
    c(st, "drawText");
    function we(e) {
      var _a;
      te(), I(e.opt.pos), Ae(e.opt.angle), I(tt((_a = e.opt.anchor) != null ? _a : "topleft").add(1, 1).scale(e.width, e.height).scale(-0.5)), e.chars.forEach((t) => {
        Oe({ tex: t.tex, width: t.width, height: t.height, pos: t.pos, scale: t.scale, angle: t.angle, color: t.color, opacity: t.opacity, quad: t.quad, anchor: "center", uniform: e.opt.uniform, shader: e.opt.shader, fixed: e.opt.fixed });
      }), K();
    }
    __name(we, "we");
    c(we, "drawFormattedText");
    function Ir() {
      var _a;
      if (a.stretchToParent && !Ot()) {
        let h = a.canvas.parentElement.offsetWidth, o = a.canvas.parentElement.offsetHeight;
        if (h !== a.lastParentWidth || o !== a.lastParentHeight) {
          a.canvas.width = h * a.pixelDensity, a.canvas.height = o * a.pixelDensity, a.canvas.style.width = h + "px", a.canvas.style.height = o + "px";
          let l = N(), d = B();
          m.ev.onOnce("frameEnd", () => {
            m.ev.trigger("resize", l, d, N(), B());
          });
        }
        a.lastParentWidth = h, a.lastParentHeight = o;
      }
      let e = a.pixelDensity, t = u.drawingBufferWidth / e, n = u.drawingBufferHeight / e;
      if (Ot()) {
        let h = window.innerWidth, o = window.innerHeight, l = h / o, d = t / n;
        if (l > d) {
          let f = window.innerHeight * d;
          w.viewport = { x: (h - f) / 2, y: 0, width: f, height: o };
        } else {
          let f = window.innerWidth / d;
          w.viewport = { x: 0, y: (o - f) / 2, width: h, height: f };
        }
        return;
      }
      if (i.letterbox) {
        if (!i.width || !i.height)
          throw new Error("Letterboxing requires width and height defined.");
        let h = t / n, o = i.width / i.height;
        if (h > o) {
          i.stretch || (w.width = n * o, w.height = n);
          let l = n * o, d = n, f = (t - l) / 2;
          u.scissor(f * e, 0, l * e, d * e), u.viewport(f * e, 0, l * e, n * e), w.viewport = { x: f, y: 0, width: l, height: n };
        } else {
          i.stretch || (w.width = t, w.height = t / o);
          let l = t, d = t / o, f = (n - d) / 2;
          u.scissor(0, f * e, l * e, d * e), u.viewport(0, f * e, t * e, d * e), w.viewport = { x: 0, y: f, width: t, height: d };
        }
        return;
      }
      if (i.stretch) {
        if (!i.width || !i.height)
          throw new Error("Stretching requires width and height defined.");
        u.viewport(0, 0, t * e, n * e), w.viewport = { x: 0, y: 0, width: t, height: n };
        return;
      }
      let s = (_a = i.scale) != null ? _a : 1;
      w.width = t / s, w.height = n / s, u.viewport(0, 0, t * e, n * e), w.viewport = { x: 0, y: 0, width: t, height: n };
    }
    __name(Ir, "Ir");
    c(Ir, "updateViewport");
    function N() {
      return w.width;
    }
    __name(N, "N");
    c(N, "width");
    function B() {
      return w.height;
    }
    __name(B, "B");
    c(B, "height");
    let X = {}, Ye = {}, Re = {};
    function Xe(e) {
      return p((e.x - w.viewport.x) * N() / w.viewport.width, (e.y - w.viewport.y) * B() / w.viewport.height);
    }
    __name(Xe, "Xe");
    c(Xe, "windowToContent");
    function Gr(e) {
      return p(e.x * w.viewport.width / w.width, e.y * w.viewport.height / w.height);
    }
    __name(Gr, "Gr");
    c(Gr, "contentToView");
    function Ct(e, t) {
      let n = Xe(p(e, t));
      a.mouseStarted && (a.mouseDeltaPos = n.sub(a.mousePos)), a.mousePos = n, a.mouseStarted = true, a.isMouseMoved = true;
    }
    __name(Ct, "Ct");
    c(Ct, "setMousePos"), X.mousemove = (e) => {
      let [t, n] = [e.offsetX, e.offsetY];
      m.ev.onOnce("input", () => {
        Ct(t, n), m.ev.trigger("mouseMove");
      });
    }, X.mousedown = (e) => {
      m.ev.onOnce("input", () => {
        let t = sr[e.button];
        t && a.mouseState.press(t), m.ev.trigger("mousePress", t);
      });
    }, X.mouseup = (e) => {
      m.ev.onOnce("input", () => {
        let t = sr[e.button];
        t && a.mouseState.release(t), m.ev.trigger("mouseRelease", t);
      });
    }, X.keydown = (e) => {
      Fs.has(e.key) && e.preventDefault(), m.ev.onOnce("input", () => {
        let t = ir[e.key] || e.key.toLowerCase();
        t.length === 1 ? (m.ev.trigger("charInput", t), a.charInputted.push(t)) : t === "space" && (m.ev.trigger("charInput", " "), a.charInputted.push(" ")), e.repeat ? (a.keyState.pressRepeat(t), m.ev.trigger("keyPressRepeat", t)) : (a.keyState.press(t), m.ev.trigger("keyPressRepeat", t), m.ev.trigger("keyPress", t));
      });
    }, X.keyup = (e) => {
      m.ev.onOnce("input", () => {
        let t = ir[e.key] || e.key.toLowerCase();
        a.keyState.release(t), m.ev.trigger("keyRelease", t);
      });
    }, X.touchstart = (e) => {
      e.preventDefault(), m.ev.onOnce("input", () => {
        let t = [...e.changedTouches];
        t.forEach((n) => {
          m.ev.trigger("onTouchStart", Xe(p(n.clientX, n.clientY)), n);
        }), i.touchToMouse !== false && (Ct(t[0].clientX, t[0].clientY), a.mouseState.press("left"), m.ev.trigger("mousePress", "left"));
      });
    }, X.touchmove = (e) => {
      e.preventDefault(), m.ev.onOnce("input", () => {
        let t = [...e.changedTouches];
        t.forEach((n) => {
          m.ev.trigger("onTouchMove", Xe(p(n.clientX, n.clientY)), n);
        }), i.touchToMouse !== false && (m.ev.trigger("mouseMove", "left"), Ct(t[0].clientX, t[0].clientY));
      });
    }, X.touchend = (e) => {
      m.ev.onOnce("input", () => {
        [...e.changedTouches].forEach((n) => {
          m.ev.trigger("onTouchEnd", Xe(p(n.clientX, n.clientY)), n);
        }), i.touchToMouse !== false && (a.mouseState.release("left"), m.ev.trigger("mouseRelease", "left"));
      });
    }, X.touchcancel = (e) => {
      m.ev.onOnce("input", () => {
        [...e.changedTouches].forEach((n) => {
          m.ev.trigger("onTouchEnd", Xe(p(n.clientX, n.clientY)), n);
        }), i.touchToMouse !== false && (a.mouseState.release("left"), m.ev.trigger("mouseRelease", "left"));
      });
    }, X.wheel = (e) => {
      e.preventDefault(), m.ev.onOnce("input", () => {
        m.ev.trigger("scroll", p(e.deltaX, e.deltaY));
      });
    }, X.contextmenu = (e) => e.preventDefault(), Ye.visibilitychange = () => {
      switch (document.visibilityState) {
        case "visible":
          a.skipTime = true, M.paused || O.ctx.resume();
          break;
        case "hidden":
          O.ctx.suspend();
          break;
      }
    }, Re.error = (e) => {
      e.error ? Bt(e.error) : Bt(new Error(e.message));
    }, Re.unhandledrejection = (e) => Bt(e.reason);
    for (let e in X)
      a.canvas.addEventListener(e, X[e]);
    for (let e in Ye)
      document.addEventListener(e, Ye[e]);
    for (let e in Re)
      window.addEventListener(e, Re[e]);
    function Pe() {
      return a.mousePos.clone();
    }
    __name(Pe, "Pe");
    c(Pe, "mousePos");
    function gn() {
      return a.mouseDeltaPos.clone();
    }
    __name(gn, "gn");
    c(gn, "mouseDeltaPos");
    function ot(e = "left") {
      return a.mouseState.pressed.has(e);
    }
    __name(ot, "ot");
    c(ot, "isMousePressed");
    function Vr(e = "left") {
      return a.mouseState.down.has(e);
    }
    __name(Vr, "Vr");
    c(Vr, "isMouseDown");
    function Tt(e = "left") {
      return a.mouseState.released.has(e);
    }
    __name(Tt, "Tt");
    c(Tt, "isMouseReleased");
    function kr() {
      return a.isMouseMoved;
    }
    __name(kr, "kr");
    c(kr, "isMouseMoved");
    function jr(e) {
      return e === void 0 ? a.keyState.pressed.size > 0 : a.keyState.pressed.has(e);
    }
    __name(jr, "jr");
    c(jr, "isKeyPressed");
    function _r(e) {
      return e === void 0 ? a.keyState.pressedRepeat.size > 0 : a.keyState.pressedRepeat.has(e);
    }
    __name(_r, "_r");
    c(_r, "isKeyPressedRepeat");
    function Nr(e) {
      return e === void 0 ? a.keyState.down.size > 0 : a.keyState.down.has(e);
    }
    __name(Nr, "Nr");
    c(Nr, "isKeyDown");
    function qr(e) {
      return e === void 0 ? a.keyState.released.size > 0 : a.keyState.released.has(e);
    }
    __name(qr, "qr");
    c(qr, "isKeyReleased");
    function $r(e) {
      return a.virtualButtonState.pressed.has(e);
    }
    __name($r, "$r");
    c($r, "isVirtualButtonPressed");
    function Hr(e) {
      return a.virtualButtonState.down.has(e);
    }
    __name(Hr, "Hr");
    c(Hr, "isVirtualButtonDown");
    function zr(e) {
      return a.virtualButtonState.released.has(e);
    }
    __name(zr, "zr");
    c(zr, "isVirtualButtonReleased");
    function Yr() {
      return [...a.charInputted];
    }
    __name(Yr, "Yr");
    c(Yr, "charInputted");
    function At() {
      return a.time;
    }
    __name(At, "At");
    c(At, "time");
    function Xr() {
      return a.canvas.toDataURL();
    }
    __name(Xr, "Xr");
    c(Xr, "screenshot");
    function wn(e) {
      return e && (a.canvas.style.cursor = e), a.canvas.style.cursor;
    }
    __name(wn, "wn");
    c(wn, "setCursor");
    function Kr(e = true) {
      e ? Hs(a.canvas) : zs();
    }
    __name(Kr, "Kr");
    c(Kr, "setFullscreen");
    function Ot() {
      return Boolean(Ys());
    }
    __name(Ot, "Ot");
    c(Ot, "isFullscreen");
    function bn() {
      return a.isTouchScreen;
    }
    __name(bn, "bn");
    c(bn, "isTouchScreen");
    let M = { inspect: false, timeScale: 1, showLog: true, fps: () => a.fpsCounter.fps, numFrames: () => a.numFrames, stepFrame: Fn, drawCalls: () => w.drawCalls, clearLog: () => m.logs = [], log: (e) => {
      var _a;
      let t = (_a = i.logMax) != null ? _a : js;
      m.logs.unshift(`${`[${At().toFixed(2)}].time `}[${(e == null ? void 0 : e.toString) ? e.toString() : e}].${e instanceof Error ? "error" : "info"}`), m.logs.length > t && (m.logs = m.logs.slice(0, t));
    }, error: (e) => M.log(new Error(e.toString ? e.toString() : e)), curRecording: null, get paused() {
      return a.paused;
    }, set paused(e) {
      a.paused = e, e ? O.ctx.suspend() : O.ctx.resume();
    } };
    function Q() {
      return a.dt * M.timeScale;
    }
    __name(Q, "Q");
    c(Q, "dt");
    function Jr(...e) {
      return e.length > 0 && (m.cam.pos = p(...e)), m.cam.pos ? m.cam.pos.clone() : dt();
    }
    __name(Jr, "Jr");
    c(Jr, "camPos");
    function Qr(...e) {
      return e.length > 0 && (m.cam.scale = p(...e)), m.cam.scale.clone();
    }
    __name(Qr, "Qr");
    c(Qr, "camScale");
    function Wr(e) {
      return e !== void 0 && (m.cam.angle = e), m.cam.angle;
    }
    __name(Wr, "Wr");
    c(Wr, "camRot");
    function Zr(e = 12) {
      m.cam.shake = e;
    }
    __name(Zr, "Zr");
    c(Zr, "shake");
    function Rt(e) {
      return m.cam.transform.multVec2(e);
    }
    __name(Rt, "Rt");
    c(Rt, "toScreen");
    function vn(e) {
      return m.cam.transform.invert().multVec2(e);
    }
    __name(vn, "vn");
    c(vn, "toWorld");
    function yn(e) {
      let t = new F();
      return e.pos && t.translate(e.pos), e.scale && t.scale(e.scale), e.angle && t.rotate(e.angle), e.parent ? t.mult(e.parent.transform) : t;
    }
    __name(yn, "yn");
    c(yn, "calcTransform");
    function Un(e) {
      let t = /* @__PURE__ */ new Map(), n = {}, s = new ce(), h = { id: er(), hidden: false, paused: false, transform: new F(), children: [], parent: null, add(o) {
        let l = (() => {
          if (Array.isArray(o))
            return Un(o);
          if (o.parent)
            throw new Error("Cannot add a game obj that already has a parent.");
          return o;
        })();
        return l.parent = this, l.transform = yn(l), this.children.push(l), l.trigger("add", this), m.ev.trigger("add", this), l;
      }, readd(o) {
        let l = this.children.indexOf(o);
        return l !== -1 && (this.children.splice(l, 1), this.children.push(o)), o;
      }, remove(o) {
        let l = this.children.indexOf(o);
        l !== -1 && (o.parent = null, o.trigger("destroy"), m.ev.trigger("destroy", o), this.children.splice(l, 1));
      }, removeAll(o) {
        this.get(o).forEach((l) => this.remove(l));
      }, update() {
        this.paused || (this.get().forEach((o) => o.update()), this.trigger("update"));
      }, draw() {
        this.hidden || (te(), I(this.pos), Te(this.scale), Ae(this.angle), this.trigger("draw"), this.get().forEach((o) => o.draw()), K());
      }, drawInspect() {
        this.hidden || (te(), I(this.pos), Te(this.scale), Ae(this.angle), this.get().forEach((o) => o.drawInspect()), this.trigger("drawInspect"), K());
      }, use(o) {
        if (!o)
          return;
        if (typeof o == "string")
          return this.use({ id: o });
        o.id && (this.unuse(o.id), t.set(o.id, { cleanups: [] }));
        let l = o.id ? t.get(o.id) : n, d = o.id ? l.cleanups : [], f = c(() => {
          if (o.require) {
            for (let g of o.require)
              if (!this.c(g))
                throw new Error(`Component "${o.id}" requires component "${g}"`);
          }
        }, "checkDeps");
        o.destroy && d.push(o.destroy), o.require && !this.exists() && l.cleanups && d.push(this.on("add", f));
        for (let g in o)
          if (!qs.has(g)) {
            if (typeof o[g] == "function") {
              let v = o[g].bind(this);
              if ($s.has(g)) {
                d.push(this.on(g, v)), l[g] = v;
                continue;
              } else
                l[g] = v;
            } else
              l[g] = o[g];
            if (this[g] === void 0)
              Object.defineProperty(this, g, { get: () => l[g], set: (v) => l[g] = v, configurable: true, enumerable: true });
            else
              throw new Error(`Duplicate component property: "${g}"`);
          }
        this.exists() && (f(), o.add && o.add.call(this));
      }, unuse(o) {
        if (t.has(o)) {
          let l = t.get(o);
          l.cleanups.forEach((d) => d.cancel());
          for (let d in l)
            delete l[d];
        }
        t.delete(o);
      }, c(o) {
        return t.get(o);
      }, get(o) {
        return this.children.filter((l) => o ? l.is(o) : true).sort((l, d) => {
          var _a, _b;
          return ((_a = l.z) != null ? _a : 0) - ((_b = d.z) != null ? _b : 0);
        });
      }, getAll(o) {
        return this.children.sort((l, d) => {
          var _a, _b;
          return ((_a = l.z) != null ? _a : 0) - ((_b = d.z) != null ? _b : 0);
        }).flatMap((l) => [l, ...l.getAll(o)]).filter((l) => o ? l.is(o) : true);
      }, isAncestorOf(o) {
        return o.parent ? o.parent === this || this.isAncestorOf(o.parent) : false;
      }, exists() {
        return m.root.isAncestorOf(this);
      }, is(o) {
        if (o === "*")
          return true;
        if (Array.isArray(o)) {
          for (let l of o)
            if (!this.c(l))
              return false;
          return true;
        } else
          return this.c(o) != null;
      }, on(o, l) {
        return s.on(o, l.bind(this));
      }, trigger(o, ...l) {
        s.trigger(o, ...l), m.objEvents.trigger(o, this, ...l);
      }, destroy() {
        this.parent && this.parent.remove(this);
      }, inspect() {
        let o = {};
        for (let [l, d] of t)
          o[l] = d.inspect ? d.inspect() : null;
        return o;
      }, onAdd(o) {
        return this.on("add", o);
      }, onUpdate(o) {
        return this.on("update", o);
      }, onDraw(o) {
        return this.on("draw", o);
      }, onDestroy(o) {
        return this.on("destroy", o);
      }, clearEvents() {
        s.clear();
      } };
      for (let o of e)
        h.use(o);
      return h;
    }
    __name(Un, "Un");
    c(Un, "make");
    function De(e, t, n) {
      return m.objEvents[e] || (m.objEvents[e] = new Ue()), m.objEvents.on(e, (s, ...h) => {
        s.is(t) && n(s, ...h);
      });
    }
    __name(De, "De");
    c(De, "on");
    let Pt = c((e, t) => {
      if (typeof e == "function" && t === void 0) {
        let n = Qe([{ update: e }]);
        return { get paused() {
          return n.paused;
        }, set paused(s) {
          n.paused = s;
        }, cancel: () => n.destroy() };
      } else if (typeof e == "string")
        return De("update", e, t);
    }, "onUpdate"), ei = c((e, t) => {
      if (typeof e == "function" && t === void 0) {
        let n = Qe([{ draw: e }]);
        return { get paused() {
          return n.hidden;
        }, set paused(s) {
          n.hidden = s;
        }, cancel: () => n.destroy() };
      } else if (typeof e == "string")
        return De("draw", e, t);
    }, "onDraw");
    function xn(e, t) {
      if (typeof e == "function" && t === void 0)
        return m.ev.on("add", e);
      if (typeof e == "string")
        return De("add", e, t);
    }
    __name(xn, "xn");
    c(xn, "onAdd");
    function ti(e, t) {
      if (typeof e == "function" && t === void 0)
        return m.ev.on("destroy", e);
      if (typeof e == "string")
        return De("destroy", e, t);
    }
    __name(ti, "ti");
    c(ti, "onDestroy");
    function ni(e, t, n) {
      return De("collide", e, (s, h, o) => h.is(t) && n(s, h, o));
    }
    __name(ni, "ni");
    c(ni, "onCollide");
    function at(e, t) {
      Pn(e).forEach(t), xn(e, t);
    }
    __name(at, "at");
    c(at, "forAllCurrentAndFuture");
    function ri(e, t) {
      if (typeof e == "function")
        return En(e);
      {
        let n = [];
        return at(e, (s) => {
          if (!s.area)
            throw new Error("onClick() requires the object to have area() component");
          n.push(s.onClick(() => t(s)));
        }), ct(n);
      }
    }
    __name(ri, "ri");
    c(ri, "onClick");
    function ii(e, t) {
      let n = [];
      return at(e, (s) => {
        if (!s.area)
          throw new Error("onHover() requires the object to have area() component");
        n.push(s.onHover(() => t(s)));
      }), ct(n);
    }
    __name(ii, "ii");
    c(ii, "onHover");
    function si(e, t) {
      let n = [];
      return at(e, (s) => {
        if (!s.area)
          throw new Error("onHoverUpdate() requires the object to have area() component");
        n.push(s.onHoverUpdate(() => t(s)));
      }), ct(n);
    }
    __name(si, "si");
    c(si, "onHoverUpdate");
    function oi(e, t) {
      let n = [];
      return at(e, (s) => {
        if (!s.area)
          throw new Error("onHoverEnd() requires the object to have area() component");
        n.push(s.onHoverEnd(() => t(s)));
      }), ct(n);
    }
    __name(oi, "oi");
    c(oi, "onHoverEnd");
    function ut(e, t) {
      let n = 0, s = [];
      t && s.push(t);
      let h = Pt(() => {
        n += Q(), n >= e && (h.cancel(), s.forEach((o) => o()));
      });
      return { paused: h.paused, cancel: h.cancel, onFinish(o) {
        s.push(o);
      }, then(o) {
        return this.onFinish(o), this;
      } };
    }
    __name(ut, "ut");
    c(ut, "wait");
    function ai(e, t) {
      let n = null, s = c(() => {
        n = ut(e, s), t();
      }, "newAction");
      return n = ut(0, s), { get paused() {
        return n.paused;
      }, set paused(h) {
        n.paused = h;
      }, cancel: () => n.cancel() };
    }
    __name(ai, "ai");
    c(ai, "loop");
    function ct(e) {
      return { get paused() {
        return e[0].paused;
      }, set paused(t) {
        e.forEach((n) => n.paused = t);
      }, cancel: () => e.forEach((t) => t.cancel()) };
    }
    __name(ct, "ct");
    c(ct, "joinEventControllers");
    let ui = c((e, t) => {
      if (typeof e == "function")
        return m.ev.on("keyDown", e);
      if (typeof e == "string" && typeof t == "function")
        return m.ev.on("keyDown", (n) => n === e && t(e));
    }, "onKeyDown"), de = c((e, t) => {
      if (typeof e == "function")
        return m.ev.on("keyPress", e);
      if (typeof e == "string" && typeof t == "function")
        return m.ev.on("keyPress", (n) => n === e && t(e));
    }, "onKeyPress"), ci = c((e, t) => {
      if (typeof e == "function")
        return m.ev.on("keyPressRepeat", e);
      if (typeof e == "string" && typeof t == "function")
        return m.ev.on("keyPressRepeat", (n) => n === e && t(e));
    }, "onKeyPressRepeat"), li = c((e, t) => {
      if (typeof e == "function")
        return m.ev.on("keyRelease", e);
      if (typeof e == "string" && typeof t == "function")
        return m.ev.on("keyRelease", (n) => n === e && t(e));
    }, "onKeyRelease");
    function hi(e, t) {
      return typeof e == "function" ? m.ev.on("mouseDown", (n) => e(n)) : m.ev.on("mouseDown", (n) => n === e && t(n));
    }
    __name(hi, "hi");
    c(hi, "onMouseDown");
    function En(e, t) {
      return typeof e == "function" ? m.ev.on("mousePress", (n) => e(n)) : m.ev.on("mousePress", (n) => n === e && t(n));
    }
    __name(En, "En");
    c(En, "onMousePress");
    function di(e, t) {
      return typeof e == "function" ? m.ev.on("mouseRelease", (n) => e(n)) : m.ev.on("mouseRelease", (n) => n === e && t(n));
    }
    __name(di, "di");
    c(di, "onMouseRelease");
    function fi(e) {
      return m.ev.on("mouseMove", () => e(Pe(), gn()));
    }
    __name(fi, "fi");
    c(fi, "onMouseMove");
    function mi(e) {
      return m.ev.on("charInput", e);
    }
    __name(mi, "mi");
    c(mi, "onCharInput");
    function pi(e) {
      return m.ev.on("onTouchStart", e);
    }
    __name(pi, "pi");
    c(pi, "onTouchStart");
    function gi(e) {
      return m.ev.on("onTouchMove", e);
    }
    __name(gi, "gi");
    c(gi, "onTouchMove");
    function wi(e) {
      return m.ev.on("onTouchEnd", e);
    }
    __name(wi, "wi");
    c(wi, "onTouchEnd");
    function bi(e) {
      return m.ev.on("scroll", e);
    }
    __name(bi, "bi");
    c(bi, "onScroll");
    function vi(e, t) {
      return m.ev.on("virtualButtonDown", (n) => n === e && t());
    }
    __name(vi, "vi");
    c(vi, "onVirtualButtonDown");
    function yi(e, t) {
      return m.ev.on("virtualButtonPress", (n) => n === e && t());
    }
    __name(yi, "yi");
    c(yi, "onVirtualButtonPress");
    function Ui(e, t) {
      return m.ev.on("virtualButtonRelease", (n) => n === e && t());
    }
    __name(Ui, "Ui");
    c(Ui, "onVirtualButtonRelease");
    function Sn() {
      de("f1", () => {
        M.inspect = !M.inspect;
      }), de("f2", () => {
        M.clearLog();
      }), de("f8", () => {
        M.paused = !M.paused;
      }), de("f7", () => {
        M.timeScale = Ke(re(M.timeScale - 0.2, 0, 2), 1);
      }), de("f9", () => {
        M.timeScale = Ke(re(M.timeScale + 0.2, 0, 2), 1);
      }), de("f10", () => {
        M.stepFrame();
      });
    }
    __name(Sn, "Sn");
    c(Sn, "enterDebugMode");
    function Cn() {
      de("b", () => on());
    }
    __name(Cn, "Cn");
    c(Cn, "enterBurpMode");
    function xi(e) {
      return e !== void 0 && (m.gravity = e), m.gravity;
    }
    __name(xi, "xi");
    c(xi, "gravity");
    function lt(...e) {
      return { id: "pos", pos: p(...e), moveBy(...t) {
        this.pos = this.pos.add(p(...t));
      }, move(...t) {
        this.moveBy(p(...t).scale(Q()));
      }, moveTo(...t) {
        if (typeof t[0] == "number" && typeof t[1] == "number")
          return this.moveTo(p(t[0], t[1]), t[2]);
        let n = t[0], s = t[1];
        if (s === void 0) {
          this.pos = p(n);
          return;
        }
        let h = n.sub(this.pos);
        if (h.len() <= s * Q()) {
          this.pos = p(n);
          return;
        }
        this.move(h.unit().scale(s));
      }, worldPos() {
        return this.parent ? this.parent.transform.multVec2(this.pos) : this.pos;
      }, screenPos() {
        return this.fixed ? this.pos : Rt(this.pos);
      }, inspect() {
        return `(${Math.round(this.pos.x)}, ${Math.round(this.pos.y)})`;
      }, drawInspect() {
        me({ color: E(255, 0, 0), radius: 4 / fn() });
      } };
    }
    __name(lt, "lt");
    c(lt, "pos");
    function ht(...e) {
      return e.length === 0 ? ht(1) : { id: "scale", scale: p(...e), scaleTo(...t) {
        this.scale = p(...t);
      }, inspect() {
        return `(${Ke(this.scale.x, 2)}, ${Ke(this.scale.y, 2)})`;
      } };
    }
    __name(ht, "ht");
    c(ht, "scale");
    function Ei(e) {
      return { id: "rotate", angle: e != null ? e : 0, rotate(t) {
        this.rotateBy(t * Q());
      }, rotateBy(t) {
        this.angle += t;
      }, inspect() {
        return `${Math.round(this.angle)}`;
      } };
    }
    __name(Ei, "Ei");
    c(Ei, "rotate");
    function Si(...e) {
      return { id: "color", color: E(...e), inspect() {
        return this.color.toString();
      } };
    }
    __name(Si, "Si");
    c(Si, "color");
    function Ke(e, t) {
      return Number(e.toFixed(t));
    }
    __name(Ke, "Ke");
    c(Ke, "toFixed");
    function Ci(e) {
      return { id: "opacity", opacity: e != null ? e : 1, inspect() {
        return `${Ke(this.opacity, 1)}`;
      }, fadeOut(t = 1, n = et.linear) {
        return Lt(this.opacity, 0, t, (s) => this.opacity = s, n);
      } };
    }
    __name(Ci, "Ci");
    c(Ci, "opacity");
    function Dt(e) {
      if (!e)
        throw new Error("Please define an anchor");
      return { id: "anchor", anchor: e, inspect() {
        return typeof this.anchor == "string" ? this.anchor : this.anchor.toString();
      } };
    }
    __name(Dt, "Dt");
    c(Dt, "anchor");
    function Ti(e) {
      return { id: "z", z: e, inspect() {
        return `${this.z}`;
      } };
    }
    __name(Ti, "Ti");
    c(Ti, "z");
    function Ai(e, t) {
      return { id: "follow", require: ["pos"], follow: { obj: e, offset: t != null ? t : p(0) }, add() {
        e.exists() && (this.pos = this.follow.obj.pos.add(this.follow.offset));
      }, update() {
        e.exists() && (this.pos = this.follow.obj.pos.add(this.follow.offset));
      } };
    }
    __name(Ai, "Ai");
    c(Ai, "follow");
    function Oi(e, t) {
      let n = typeof e == "number" ? D.fromAngle(e) : e.unit();
      return { id: "move", require: ["pos"], update() {
        this.move(n.scale(t));
      } };
    }
    __name(Oi, "Oi");
    c(Oi, "move");
    let Ri = 200;
    function Pi(e = {}) {
      var _a;
      let t = (_a = e.distance) != null ? _a : Ri, n = false;
      return { id: "offscreen", require: ["pos"], isOffScreen() {
        let s = Rt(this.pos), h = new G(p(0), N(), B());
        return !ke(h, s) && h.distToPoint(s) > t;
      }, onExitScreen(s) {
        return this.on("exitView", s);
      }, onEnterScreen(s) {
        return this.on("enterView", s);
      }, update() {
        this.isOffScreen() ? (n || (this.trigger("exitView"), n = true), e.hide && (this.hidden = true), e.pause && (this.paused = true), e.destroy && this.destroy()) : (n && (this.trigger("enterView"), n = false), e.hide && (this.hidden = false), e.pause && (this.paused = false));
      }, inspect() {
        return `${this.isOffScreen()}`;
      } };
    }
    __name(Pi, "Pi");
    c(Pi, "offscreen");
    function Di(e = {}) {
      var _a, _b, _c, _d, _e2;
      let t = [];
      return { id: "area", colliding: {}, collisionIgnore: (_a = e.collisionIgnore) != null ? _a : [], add() {
        this.area.cursor && t.push(this.onHover(() => wn(this.area.cursor))), t.push(this.onCollideUpdate((n, s) => {
          this.colliding[n.id] || this.trigger("collide", n, s), this.colliding[n.id] = s;
        }));
      }, update() {
        for (let n in this.colliding) {
          let s = this.colliding[n];
          this.checkCollision(s.target) || (delete this.colliding[n], this.trigger("collideEnd", s.target, s));
        }
      }, drawInspect() {
        let n = this.localArea();
        te(), Te(this.area.scale), I(this.area.offset);
        let s = { outline: { width: 4 / fn(), color: E(0, 0, 255) }, anchor: this.anchor, fill: false, fixed: this.fixed };
        n instanceof G ? J(__spreadProps(__spreadValues({}, s), { pos: n.pos, width: n.width, height: n.height })) : n instanceof se ? pe(__spreadProps(__spreadValues({}, s), { pts: n.pts })) : n instanceof ue && me(__spreadProps(__spreadValues({}, s), { pos: n.center, radius: n.radius })), K();
      }, destroy() {
        t.forEach((n) => n.cancel());
      }, area: { shape: (_b = e.shape) != null ? _b : null, scale: (_c = e.scale) != null ? _c : p(1), offset: (_d = e.offset) != null ? _d : p(0), cursor: (_e2 = e.cursor) != null ? _e2 : null }, isClicked() {
        return ot() && this.isHovering();
      }, isHovering() {
        let n = this.fixed ? Pe() : vn(Pe());
        return this.hasPoint(n);
      }, checkCollision(n) {
        if (this === n || !n.area || !n.exists())
          return null;
        let s = this.worldArea(), h = n.worldArea();
        return Xn(s, h);
      }, isColliding(n) {
        let s = this.checkCollision(n);
        return s && !s.isZero();
      }, isTouching(n) {
        return Boolean(this.checkCollision(n));
      }, onClick(n) {
        return this.onUpdate(() => {
          this.isClicked() && n();
        });
      }, onHover(n) {
        let s = false;
        return this.onUpdate(() => {
          s ? s = this.isHovering() : this.isHovering() && (s = true, n());
        });
      }, onHoverUpdate(n) {
        return this.onUpdate(() => {
          this.isHovering() && n();
        });
      }, onHoverEnd(n) {
        let s = false;
        return this.onUpdate(() => {
          s ? this.isHovering() || (s = false, n()) : s = this.isHovering();
        });
      }, onCollide(n, s) {
        if (typeof n == "function" && s === void 0)
          return this.on("collide", n);
        if (typeof n == "string")
          return this.onCollide((h, o) => {
            h.is(n) && s(h, o);
          });
      }, onCollideUpdate(n, s) {
        if (typeof n == "function" && s === void 0)
          return this.on("collideUpdate", n);
        if (typeof n == "string")
          return this.on("collideUpdate", (h, o) => h.is(n) && s(h, o));
      }, onCollideEnd(n, s) {
        if (typeof n == "function" && s === void 0)
          return this.on("collideEnd", n);
        if (typeof n == "string")
          return this.on("collideEnd", (h) => h.is(n) && s(h));
      }, hasPoint(n) {
        return Yn(this.worldArea(), n);
      }, pushOut(n) {
        let s = this.checkCollision(n);
        s && (this.pos = this.pos.add(s));
      }, pushOutAll() {
        m.root.getAll().forEach(this.pushOut);
      }, localArea() {
        return this.area.shape ? this.area.shape : this.renderArea();
      }, worldArea() {
        var _a2;
        let n = this.localArea();
        if (!(n instanceof se || n instanceof G))
          throw new Error("Only support polygon and rect shapes for now");
        let s = this.transform.clone().scale(p((_a2 = this.area.scale) != null ? _a2 : 1)).translate(this.area.offset);
        if (n instanceof G) {
          let h = tt(this.anchor || bt).add(1, 1).scale(-0.5).scale(n.width, n.height);
          s.translate(h);
        }
        return n.transform(s);
      }, screenArea() {
        let n = this.worldArea();
        return this.fixed ? n : n.transform(m.cam.transform);
      } };
    }
    __name(Di, "Di");
    c(Di, "area");
    function Je(e) {
      return { color: e.color, opacity: e.opacity, anchor: e.anchor, outline: e.outline, fixed: e.fixed, shader: e.shader, uniform: e.uniform };
    }
    __name(Je, "Je");
    c(Je, "getRenderProps");
    function Mt(e, t = {}) {
      var _a, _b, _c;
      let n = null, s = null;
      if (!e)
        throw new Error("Please pass the resource name or data to sprite()");
      let h = c((o, l, d, f) => {
        let g = p(1, 1);
        return d && f ? (g.x = d / (o.width * l.w), g.y = f / (o.height * l.h)) : d ? (g.x = d / (o.width * l.w), g.y = g.x) : f && (g.y = f / (o.height * l.h), g.x = g.y), g;
      }, "calcTexScale");
      return { id: "sprite", width: 0, height: 0, frame: t.frame || 0, quad: t.quad || new k(0, 0, 1, 1), animSpeed: (_a = t.animSpeed) != null ? _a : 1, flipX: (_b = t.flipX) != null ? _b : false, flipY: (_c = t.flipY) != null ? _c : false, draw() {
        !n || un(__spreadProps(__spreadValues({}, Je(this)), { sprite: n, frame: this.frame, quad: this.quad, flipX: this.flipX, flipY: this.flipY, tiled: t.tiled, width: t.width, height: t.height }));
      }, update() {
        if (!n) {
          let l = rn(e);
          if (!l || !l.data)
            return;
          let d = l.data.frames[0].clone();
          t.quad && (d = d.scale(t.quad));
          let f = h(l.data.tex, d, t.width, t.height);
          this.width = l.data.tex.width * d.w * f.x, this.height = l.data.tex.height * d.h * f.y, t.anim && this.play(t.anim), n = l.data, this.trigger("spriteLoaded", n);
        }
        if (!s)
          return;
        let o = n.anims[s.name];
        if (typeof o == "number") {
          this.frame = o;
          return;
        }
        if (o.speed === 0)
          throw new Error("Sprite anim speed cannot be 0");
        s.timer += Q() * this.animSpeed, s.timer >= 1 / s.speed && (s.timer = 0, o.from > o.to ? (this.frame--, this.frame < o.to && (s.loop ? this.frame = o.from : (this.frame++, s.onEnd(), this.stop()))) : (this.frame++, this.frame > o.to && (s.loop ? this.frame = o.from : (this.frame--, s.onEnd(), this.stop()))));
      }, play(o, l = {}) {
        var _a2, _b2, _c2, _d, _e2, _f, _g;
        if (!n) {
          this.on("spriteLoaded", () => {
            this.play(o, l);
          });
          return;
        }
        let d = n.anims[o];
        if (!d)
          throw new Error(`Anim not found: ${o}`);
        s && this.stop(), s = typeof d == "number" ? { name: o, timer: 0, loop: false, pingpong: false, speed: 0, onEnd: () => {
        } } : { name: o, timer: 0, loop: (_b2 = (_a2 = l.loop) != null ? _a2 : d.loop) != null ? _b2 : false, pingpong: (_d = (_c2 = l.pingpong) != null ? _c2 : d.pingpong) != null ? _d : false, speed: (_f = (_e2 = l.speed) != null ? _e2 : d.speed) != null ? _f : 10, onEnd: (_g = l.onEnd) != null ? _g : () => {
        } }, this.frame = typeof d == "number" ? d : d.from, this.trigger("animStart", o);
      }, stop() {
        if (!s)
          return;
        let o = s.name;
        s = null, this.trigger("animEnd", o);
      }, numFrames() {
        return n ? n.frames.length : 0;
      }, curAnim() {
        return s == null ? void 0 : s.name;
      }, onAnimEnd(o, l) {
        return this.on("animEnd", (d) => {
          d === o && l();
        });
      }, onAnimStart(o, l) {
        return this.on("animStart", (d) => {
          d === o && l();
        });
      }, renderArea() {
        return new G(p(0), this.width, this.height);
      }, inspect() {
        if (typeof e == "string")
          return `"${e}"`;
      } };
    }
    __name(Mt, "Mt");
    c(Mt, "sprite");
    function Mi(e, t = {}) {
      var _a;
      function n(s) {
        var _a2, _b;
        let h = ge(__spreadProps(__spreadValues({}, Je(s)), { text: s.text + "", size: s.textSize, font: s.font, width: t.width && s.width, align: s.align, letterSpacing: s.letterSpacing, lineSpacing: s.lineSpacing, transform: s.textTransform, styles: s.textStyles }));
        return t.width || (s.width = h.width / (((_a2 = s.scale) == null ? void 0 : _a2.x) || 1)), s.height = h.height / (((_b = s.scale) == null ? void 0 : _b.y) || 1), h;
      }
      __name(n, "n");
      return c(n, "update"), { id: "text", text: e, textSize: (_a = t.size) != null ? _a : ks, font: t.font, width: t.width, height: 0, align: t.align, lineSpacing: t.lineSpacing, letterSpacing: t.letterSpacing, textTransform: t.transform, textStyles: t.styles, add() {
        Ft(() => n(this));
      }, draw() {
        we(n(this));
      }, renderArea() {
        return new G(p(0), this.width, this.height);
      } };
    }
    __name(Mi, "Mi");
    c(Mi, "text");
    function Fi(e, t, n = {}) {
      return { id: "rect", width: e, height: t, radius: n.radius || 0, draw() {
        J(__spreadProps(__spreadValues({}, Je(this)), { width: this.width, height: this.height, radius: this.radius }));
      }, renderArea() {
        return new G(p(0), this.width, this.height);
      }, inspect() {
        return `${Math.ceil(this.width)}, ${Math.ceil(this.height)}`;
      } };
    }
    __name(Fi, "Fi");
    c(Fi, "rect");
    function Bi(e, t) {
      return { id: "rect", width: e, height: t, draw() {
        Oe(__spreadProps(__spreadValues({}, Je(this)), { width: this.width, height: this.height }));
      }, renderArea() {
        return new G(p(0), this.width, this.height);
      }, inspect() {
        return `${Math.ceil(this.width)}, ${Math.ceil(this.height)}`;
      } };
    }
    __name(Bi, "Bi");
    c(Bi, "uvquad");
    function Li(e) {
      return { id: "circle", radius: e, draw() {
        me(__spreadProps(__spreadValues({}, Je(this)), { radius: this.radius }));
      }, renderArea() {
        return new ue(p(0), this.radius);
      }, inspect() {
        return `${Math.ceil(this.radius)}`;
      } };
    }
    __name(Li, "Li");
    c(Li, "circle");
    function Ii(e = 1, t = E(0, 0, 0)) {
      return { id: "outline", outline: { width: e, color: t } };
    }
    __name(Ii, "Ii");
    c(Ii, "outline");
    function Tn(e, t) {
      let n = new Ue();
      return e && t && n.pushd(new fe(e, t)), { id: "timer", wait(s, h) {
        let o = [h], l = new fe(s, () => o.forEach((f) => f())), d = n.pushd(l);
        return { get paused() {
          return l.paused;
        }, set paused(f) {
          l.paused = f;
        }, cancel: d, onFinish(f) {
          o.push(f);
        }, then(f) {
          return this.onFinish(f), this;
        } };
      }, update() {
        n.forEach((s, h) => {
          s.tick(Q()) && n.delete(h);
        });
      } };
    }
    __name(Tn, "Tn");
    c(Tn, "timer");
    let Gi = 640, Vi = 65536;
    function ki(e = {}) {
      var _a, _b, _c, _d;
      let t = 0, n = null, s = null, h = false, o = [];
      return { id: "body", require: ["pos", "area"], jumpForce: (_a = e.jumpForce) != null ? _a : Gi, gravityScale: (_b = e.gravityScale) != null ? _b : 1, isStatic: (_c = e.isStatic) != null ? _c : false, mass: (_d = e.mass) != null ? _d : 0, add() {
        o.push(this.onCollideUpdate((l, d) => {
          if (!l.is("body") || d.resolved || this.isStatic && l.isStatic)
            return;
          let f = !this.isStatic && l.isStatic ? d : d.reverse();
          f.source.trigger("beforePhysicsResolve", f), f.target.trigger("beforePhysicsResolve", f.reverse()), !d.resolved && (f.source.pos = f.source.pos.add(f.displacement), f.source.transform = yn(f.source), d.resolved = true, f.source.trigger("physicsResolve", f), f.target.trigger("physicsResolve", f.reverse()));
        })), o.push(this.onPhysicsResolve((l) => {
          m.gravity && (l.isBottom() && this.isFalling() ? (t = 0, n = l.target, s = l.target.pos, h ? h = false : this.trigger("ground", n)) : l.isTop() && this.isJumping() && (t = 0, this.trigger("headbutt", l.target)));
        }));
      }, update() {
        var _a2;
        if (!m.gravity || this.isStatic)
          return;
        if (h && (n = null, s = null, this.trigger("fallOff"), h = false), n)
          if (!this.isTouching(n) || !n.exists() || !n.is("body"))
            h = true;
          else {
            !n.pos.eq(s) && e.stickToPlatform !== false && this.moveBy(n.pos.sub(s)), s = n.pos;
            return;
          }
        let l = t;
        t += m.gravity * this.gravityScale * Q(), t = Math.min(t, (_a2 = e.maxVelocity) != null ? _a2 : Vi), l < 0 && t >= 0 && this.trigger("fall"), this.move(0, t);
      }, destroy() {
        o.forEach((l) => l.cancel());
      }, onPhysicsResolve(l) {
        return this.on("physicsResolve", l);
      }, onBeforePhysicsResolve(l) {
        return this.on("beforePhysicsResolve", l);
      }, curPlatform() {
        return n;
      }, isGrounded() {
        return n !== null;
      }, isFalling() {
        return t > 0;
      }, isJumping() {
        return t < 0;
      }, jump(l) {
        n = null, s = null, t = -l || -this.jumpForce;
      }, onGround(l) {
        return this.on("ground", l);
      }, onFall(l) {
        return this.on("fall", l);
      }, onFallOff(l) {
        return this.on("fallOff", l);
      }, onHeadbutt(l) {
        return this.on("headbutt", l);
      } };
    }
    __name(ki, "ki");
    c(ki, "body");
    function ji(e = 2) {
      let t = e, n = [];
      return { id: "doubleJump", require: ["body"], numJumps: e, add() {
        n.push(this.onGround(() => {
          t = this.numJumps;
        }));
      }, destroy() {
        n.forEach((s) => s.cancel());
      }, doubleJump(s) {
        t <= 0 || (t < this.numJumps && this.trigger("doubleJump"), t--, this.jump(s));
      }, onDoubleJump(s) {
        return this.on("doubleJump", s);
      }, inspect() {
        return `${t}`;
      } };
    }
    __name(ji, "ji");
    c(ji, "doubleJump");
    function _i(e, t = {}) {
      return { id: "shader", shader: e, uniform: t };
    }
    __name(_i, "_i");
    c(_i, "shader");
    function Ni() {
      return { id: "fixed", fixed: true };
    }
    __name(Ni, "Ni");
    c(Ni, "fixed");
    function An(e) {
      return { id: "stay", stay: true, scenesToStay: e };
    }
    __name(An, "An");
    c(An, "stay");
    function qi(e) {
      if (e == null)
        throw new Error("health() requires the initial amount of hp");
      return { id: "health", hurt(t = 1) {
        this.setHP(e - t), this.trigger("hurt");
      }, heal(t = 1) {
        this.setHP(e + t), this.trigger("heal");
      }, hp() {
        return e;
      }, setHP(t) {
        e = t, e <= 0 && this.trigger("death");
      }, onHurt(t) {
        return this.on("hurt", t);
      }, onHeal(t) {
        return this.on("heal", t);
      }, onDeath(t) {
        return this.on("death", t);
      }, inspect() {
        return `${e}`;
      } };
    }
    __name(qi, "qi");
    c(qi, "health");
    function $i(e, t = {}) {
      var _a;
      if (e == null)
        throw new Error("lifespan() requires time");
      let n = (_a = t.fade) != null ? _a : 0;
      return { id: "lifespan", add() {
        return __async(this, null, function* () {
          yield ut(e), n > 0 && this.opacity && (yield Lt(this.opacity, 0, n, (s) => this.opacity = s, et.linear)), this.destroy();
        });
      } };
    }
    __name($i, "$i");
    c($i, "lifespan");
    function Hi(e, t, n) {
      if (!e)
        throw new Error("state() requires an initial state");
      let s = {};
      function h(f) {
        s[f] || (s[f] = { enter: new ee(), end: new ee(), update: new ee(), draw: new ee() });
      }
      __name(h, "h");
      c(h, "initStateEvents");
      function o(f, g, v) {
        return h(g), s[g][f].add(v);
      }
      __name(o, "o");
      c(o, "on");
      function l(f, g, ...v) {
        h(g), s[g][f].trigger(...v);
      }
      __name(l, "l");
      c(l, "trigger");
      let d = false;
      return { id: "state", state: e, enterState(f, ...g) {
        if (d = true, t && !t.includes(f))
          throw new Error(`State not found: ${f}`);
        let v = this.state;
        if (n) {
          if (!(n == null ? void 0 : n[v]))
            return;
          let U = typeof n[v] == "string" ? [n[v]] : n[v];
          if (!U.includes(f))
            throw new Error(`Cannot transition state from "${v}" to "${f}". Available transitions: ${U.map((L) => `"${L}"`).join(", ")}`);
        }
        l("end", v, ...g), this.state = f, l("enter", f, ...g), l("enter", `${v} -> ${f}`, ...g);
      }, onStateTransition(f, g, v) {
        return o("enter", `${f} -> ${g}`, v);
      }, onStateEnter(f, g) {
        return o("enter", f, g);
      }, onStateUpdate(f, g) {
        return o("update", f, g);
      }, onStateDraw(f, g) {
        return o("draw", f, g);
      }, onStateEnd(f, g) {
        return o("end", f, g);
      }, update() {
        d || (l("enter", e), d = true), l("update", this.state);
      }, draw() {
        l("draw", this.state);
      }, inspect() {
        return this.state;
      } };
    }
    __name(Hi, "Hi");
    c(Hi, "state");
    function zi(e = 1) {
      let t = 0, n = false;
      return { require: ["opacity"], add() {
        this.opacity = 0;
      }, update() {
        n || (t += Q(), this.opacity = mt(t, 0, e, 0, 1), t >= e && (this.opacity = 1, n = true));
      } };
    }
    __name(zi, "zi");
    c(zi, "fadeIn");
    function Ft(e) {
      y.loaded ? e() : m.ev.on("load", e);
    }
    __name(Ft, "Ft");
    c(Ft, "onLoad");
    function Yi(e, t) {
      m.scenes[e] = t;
    }
    __name(Yi, "Yi");
    c(Yi, "scene");
    function Xi(e, ...t) {
      if (!m.scenes[e])
        throw new Error(`Scene not found: ${e}`);
      m.ev.onOnce("frameEnd", () => {
        m.ev = new ce(), m.objEvents = new ce(), m.root.get().forEach((n) => {
          (!n.stay || n.scenesToStay && !n.scenesToStay.includes(e)) && m.root.remove(n);
        }), m.root.clearEvents(), m.cam = { pos: null, scale: p(1), angle: 0, shake: 0, transform: new F() }, m.gravity = 0, m.scenes[e](...t), i.debug !== false && Sn(), i.burp && Cn();
      });
    }
    __name(Xi, "Xi");
    c(Xi, "go");
    function Ki(e, t) {
      try {
        return JSON.parse(window.localStorage[e]);
      } catch (e2) {
        return t ? (On(e, t), t) : null;
      }
    }
    __name(Ki, "Ki");
    c(Ki, "getData");
    function On(e, t) {
      window.localStorage[e] = JSON.stringify(t);
    }
    __name(On, "On");
    c(On, "setData");
    function Rn(e) {
      let t = e(Me);
      for (let n in t)
        Me[n] = t[n], i.global !== false && (window[n] = t[n]);
      return Me;
    }
    __name(Rn, "Rn");
    c(Rn, "plug");
    function dt() {
      return p(N() / 2, B() / 2);
    }
    __name(dt, "dt");
    c(dt, "center");
    function Ji(e, t) {
      return { id: "grid", gridPos: t.clone(), setGridPos(...n) {
        let s = p(...n);
        this.gridPos = s.clone(), this.pos = p(this.gridPos.x * e.gridWidth(), this.gridPos.y * e.gridHeight());
      }, moveLeft() {
        this.setGridPos(this.gridPos.add(p(-1, 0)));
      }, moveRight() {
        this.setGridPos(this.gridPos.add(p(1, 0)));
      }, moveUp() {
        this.setGridPos(this.gridPos.add(p(0, -1)));
      }, moveDown() {
        this.setGridPos(this.gridPos.add(p(0, 1)));
      } };
    }
    __name(Ji, "Ji");
    c(Ji, "grid");
    function Qi(e, t) {
      var _a;
      if (!t.width || !t.height)
        throw new Error("Must provide level grid width & height.");
      let n = Qe([lt((_a = t.pos) != null ? _a : p(0))]), s = 0, h = { id: "level", gridWidth() {
        return t.width;
      }, gridHeight() {
        return t.height;
      }, getPos(...o) {
        let l = p(...o);
        return p(l.x * t.width, l.y * t.height);
      }, spawn(o, ...l) {
        let d = p(...l), f = (() => {
          if (t[o]) {
            if (typeof t[o] != "function")
              throw new Error("Level symbol def must be a function returning a component list");
            return t[o](d);
          } else if (t.any)
            return t.any(o, d);
        })();
        if (!f)
          return;
        let g = p(d.x * t.width, d.y * t.height);
        for (let v of f)
          if (v.id === "pos") {
            g.x += v.pos.x, g.y += v.pos.y;
            break;
          }
        return f.push(lt(g)), f.push(Ji(this, d)), n.add(f);
      }, levelWidth() {
        return s * t.width;
      }, levelHeight() {
        return e.length * t.height;
      } };
      return n.use(h), e.forEach((o, l) => {
        let d = o.split("");
        s = Math.max(d.length, s), d.forEach((f, g) => {
          n.spawn(f, p(g, l));
        });
      }), n;
    }
    __name(Qi, "Qi");
    c(Qi, "addLevel");
    function Wi(e) {
      let t = a.canvas.captureStream(e), n = O.ctx.createMediaStreamDestination();
      O.masterNode.connect(n);
      let s = new MediaRecorder(t), h = [];
      return s.ondataavailable = (o) => {
        o.data.size > 0 && h.push(o.data);
      }, s.onerror = () => {
        O.masterNode.disconnect(n), t.getTracks().forEach((o) => o.stop());
      }, s.start(), { resume() {
        s.resume();
      }, pause() {
        s.pause();
      }, stop() {
        return s.stop(), O.masterNode.disconnect(n), t.getTracks().forEach((o) => o.stop()), new Promise((o) => {
          s.onstop = () => {
            o(new Blob(h, { type: "video/mp4" }));
          };
        });
      }, download(o = "kaboom.mp4") {
        this.stop().then((l) => $t(o, l));
      } };
    }
    __name(Wi, "Wi");
    c(Wi, "record");
    function Zi() {
      return document.activeElement === a.canvas;
    }
    __name(Zi, "Zi");
    c(Zi, "isFocused");
    function es(e) {
      e.destroy();
    }
    __name(es, "es");
    c(es, "destroy");
    let Qe = m.root.add.bind(m.root), ts = m.root.readd.bind(m.root), ns = m.root.removeAll.bind(m.root), Pn = m.root.get.bind(m.root), Dn = m.root.getAll.bind(m.root);
    function Mn(e = 2, t = 1) {
      let n = 0;
      return { id: "boom", require: ["scale"], update() {
        let s = Math.sin(n * e) * t;
        s < 0 && this.destroy(), this.scale = p(s), n += Q();
      } };
    }
    __name(Mn, "Mn");
    c(Mn, "boom");
    let rs = Ce(null, nr), is = Ce(null, rr);
    function ss(e, t = {}) {
      var _a, _b;
      let n = Qe([lt(e), An()]), s = (t.speed || 1) * 5, h = t.scale || 1;
      n.add([Mt(is), ht(0), Dt("center"), Mn(s, h), ...(_a = t.comps) != null ? _a : []]);
      let o = n.add([Mt(rs), ht(0), Dt("center"), Tn(0.4 / s, () => o.use(Mn(s, h))), ...(_b = t.comps) != null ? _b : []]);
      return o.onDestroy(() => n.destroy()), n;
    }
    __name(ss, "ss");
    c(ss, "addKaboom");
    function os() {
      m.ev.trigger("input"), a.keyState.down.forEach((e) => m.ev.trigger("keyDown", e)), a.mouseState.down.forEach((e) => m.ev.trigger("mouseDown", e)), a.virtualButtonState.down.forEach((e) => m.ev.trigger("virtualButtonDown", e));
    }
    __name(os, "os");
    c(os, "inputFrame");
    function Fn() {
      m.root.update();
    }
    __name(Fn, "Fn");
    c(Fn, "updateFrame");
    let as = 64;
    class ft {
      constructor(t, n, s, h = false) {
        __publicField(this, "source");
        __publicField(this, "target");
        __publicField(this, "displacement");
        __publicField(this, "resolved", false);
        this.source = t, this.target = n, this.displacement = s, this.resolved = h;
      }
      reverse() {
        return new ft(this.target, this.source, this.displacement.scale(-1), this.resolved);
      }
      isLeft() {
        return this.displacement.x > 0;
      }
      isRight() {
        return this.displacement.x < 0;
      }
      isTop() {
        return this.displacement.y > 0;
      }
      isBottom() {
        return this.displacement.y < 0;
      }
      preventResolve() {
        this.resolved = true;
      }
    }
    __name(ft, "ft");
    c(ft, "Collision");
    function us() {
      let e = {}, t = i.hashGridSize || as, n = new F(), s = [];
      function h(o) {
        if (s.push(n.clone()), o.pos && n.translate(o.pos), o.scale && n.scale(o.scale), o.angle && n.rotate(o.angle), o.transform = n.clone(), o.c("area") && !o.paused) {
          let l = o, f = l.worldArea().bbox(), g = Math.floor(f.pos.x / t), v = Math.floor(f.pos.y / t), U = Math.ceil((f.pos.x + f.width) / t), L = Math.ceil((f.pos.y + f.height) / t), P = /* @__PURE__ */ new Set();
          for (let H = g; H <= U; H++)
            for (let z = v; z <= L; z++)
              if (!e[H])
                e[H] = {}, e[H][z] = [l];
              else if (!e[H][z])
                e[H][z] = [l];
              else {
                let be = e[H][z];
                for (let W of be) {
                  if (!W.exists() || P.has(W.id))
                    continue;
                  for (let C of l.collisionIgnore)
                    W.is(C);
                  for (let C of W.collisionIgnore)
                    l.is(C);
                  let q = l.checkCollision(W);
                  if (q && !q.isZero()) {
                    let C = new ft(l, W, q);
                    l.trigger("collideUpdate", W, C);
                    let V = C.reverse();
                    V.resolved = C.resolved, W.trigger("collideUpdate", l, V);
                  }
                  P.add(W.id);
                }
                be.push(l);
              }
        }
        o.get().forEach(h), n = s.pop();
      }
      __name(h, "h");
      c(h, "checkObj"), h(m.root);
    }
    __name(us, "us");
    c(us, "checkFrame");
    function cs() {
      var _a;
      let e = m.cam, t = D.fromAngle(Ze(0, 360)).scale(e.shake);
      e.shake = Ve(e.shake, 0, 5 * Q()), e.transform = new F().translate(dt()).scale(e.scale).rotate(e.angle).translate(((_a = e.pos) != null ? _a : dt()).scale(-1).add(t)), m.root.draw(), le();
    }
    __name(cs, "cs");
    c(cs, "drawFrame");
    function ls() {
      let e = _();
      oe(() => {
        let t = N() / 2, n = 24, s = p(N() / 2, B() / 2).sub(p(t / 2, n / 2));
        J({ pos: p(0), width: N(), height: B(), color: E(0, 0, 0) }), J({ pos: s, width: t, height: n, fill: false, outline: { width: 4 } }), J({ pos: s, width: t * e, height: n });
      }), m.ev.trigger("loading", e);
    }
    __name(ls, "ls");
    c(ls, "drawLoadScreen");
    function Bn(e, t) {
      oe(() => {
        let n = p(8);
        te(), I(e);
        let s = ge({ text: t, font: vt, size: 16, pos: n, color: E(255, 255, 255), fixed: true }), h = s.width + n.x * 2, o = s.height + n.x * 2;
        e.x + h >= N() && I(p(-h, 0)), e.y + o >= B() && I(p(0, -o)), J({ width: h, height: o, color: E(0, 0, 0), radius: 4, opacity: 0.8, fixed: true }), we(s), K();
      });
    }
    __name(Bn, "Bn");
    c(Bn, "drawInspectText");
    function hs() {
      if (M.inspect) {
        let e = null;
        for (let t of Dn())
          if (t.c("area") && t.isHovering()) {
            e = t;
            break;
          }
        if (m.root.drawInspect(), e) {
          let t = [], n = e.inspect();
          for (let s in n)
            n[s] ? t.push(`${s}: ${n[s]}`) : t.push(`${s}`);
          Bn(Gr(Pe()), t.join(`
`));
        }
        Bn(p(8), `FPS: ${M.fps()}`);
      }
      M.paused && oe(() => {
        te(), I(N(), 0), I(-8, 8);
        let e = 32;
        J({ width: e, height: e, anchor: "topright", color: E(0, 0, 0), opacity: 0.8, radius: 4, fixed: true });
        for (let t = 1; t <= 2; t++)
          J({ width: 4, height: e * 0.6, anchor: "center", pos: p(-e / 3 * t, e * 0.5), color: E(255, 255, 255), radius: 2, fixed: true });
        K();
      }), M.timeScale !== 1 && oe(() => {
        te(), I(N(), B()), I(-8, -8);
        let e = 8, t = ge({ text: M.timeScale.toFixed(1), font: vt, size: 16, color: E(255, 255, 255), pos: p(-e), anchor: "botright", fixed: true });
        J({ width: t.width + e * 2 + e * 4, height: t.height + e * 2, anchor: "botright", color: E(0, 0, 0), opacity: 0.8, radius: 4, fixed: true });
        for (let n = 0; n < 2; n++) {
          let s = M.timeScale < 1;
          ln({ p1: p(-t.width - e * (s ? 2 : 3.5), -e), p2: p(-t.width - e * (s ? 2 : 3.5), -e - t.height), p3: p(-t.width - e * (s ? 3.5 : 2), -e - t.height / 2), pos: p(-n * e * 1 + (s ? -e * 0.5 : 0), 0), color: E(255, 255, 255), fixed: true });
        }
        we(t), K();
      }), M.curRecording && oe(() => {
        te(), I(0, B()), I(24, -24), me({ radius: 12, color: E(255, 0, 0), opacity: jt(0, 1, At() * 4), fixed: true }), K();
      }), M.showLog && m.logs.length > 0 && oe(() => {
        te(), I(0, B()), I(8, -8);
        let e = 8, t = ge({ text: m.logs.join(`
`), font: vt, pos: p(e, -e), anchor: "botleft", size: 16, width: N() * 0.6, lineSpacing: e / 2, fixed: true, styles: { time: { color: E(127, 127, 127) }, info: { color: E(255, 255, 255) }, error: { color: E(255, 0, 127) } } });
        J({ width: t.width + e * 2, height: t.height + e * 2, anchor: "botleft", color: E(0, 0, 0), radius: 4, opacity: 0.8, fixed: true }), we(t), K();
      });
    }
    __name(hs, "hs");
    c(hs, "drawDebug");
    function ds() {
      let e = Pe(), t = c((s, h, o) => {
        me({ radius: 80 / 2, pos: s, outline: { width: 4, color: E(0, 0, 0) }, opacity: 0.5, fixed: true }), o && st({ text: o, pos: s, color: E(0, 0, 0), size: 40, anchor: "center", opacity: 0.5, fixed: true }), ot("left") && zn(new ue(s, 80 / 2), e) && m.ev.onOnce("input", () => {
          a.virtualButtonState.press(h), m.ev.trigger("virtualButtonPress", h), a.keyState.press(h), m.ev.trigger("keyPress", h);
        }), Tt("left") && m.ev.onOnce("input", () => {
          a.virtualButtonState.release(h), m.ev.trigger("virtualButtonRelease", h), a.keyState.release(h), m.ev.trigger("keyRelease", h);
        });
      }, "drawCircleButton"), n = c((s, h, o) => {
        J({ width: 64, height: 64, pos: s, outline: { width: 4, color: E(0, 0, 0) }, radius: 4, anchor: "center", opacity: 0.5, fixed: true }), o && st({ text: o, pos: s, color: E(0, 0, 0), size: 40, anchor: "center", opacity: 0.5, fixed: true }), ot("left") && ke(new G(s.add(-64 / 2, -64 / 2), 64, 64), e) && m.ev.onOnce("input", () => {
          a.virtualButtonState.press(h), m.ev.trigger("virtualButtonPress", h), a.keyState.press(h), m.ev.trigger("keyPress", h);
        }), Tt("left") && m.ev.onOnce("input", () => {
          a.virtualButtonState.release(h), m.ev.trigger("virtualButtonRelease", h), a.keyState.release(h), m.ev.trigger("keyRelease", h);
        });
      }, "drawSquareButton");
      oe(() => {
        t(p(N() - 80, B() - 160), "a"), t(p(N() - 160, B() - 80), "b"), n(p(60, B() - 124), "left"), n(p(188, B() - 124), "right"), n(p(124, B() - 188), "up"), n(p(124, B() - 60), "down");
      });
    }
    __name(ds, "ds");
    c(ds, "drawVirtualControls"), i.debug !== false && Sn(), i.burp && Cn();
    function fs(e) {
      m.ev.on("loading", e);
    }
    __name(fs, "fs");
    c(fs, "onLoadUpdate");
    function ms(e) {
      m.ev.on("resize", e);
    }
    __name(ms, "ms");
    c(ms, "onResize");
    function ps(e) {
      m.ev.on("error", e);
    }
    __name(ps, "ps");
    c(ps, "onError");
    function Bt(e) {
      Ln(() => {
        oe(() => {
          let s = N(), h = B(), o = { size: 36, width: s - 32 * 2, letterSpacing: 4, lineSpacing: 4, font: vt, fixed: true };
          J({ width: s, height: h, color: E(0, 0, 255), fixed: true });
          let l = ge(__spreadProps(__spreadValues({}, o), { text: e.name, pos: p(32), color: E(255, 128, 0), fixed: true }));
          we(l), st(__spreadProps(__spreadValues({}, o), { text: e.message, pos: p(32, 32 + l.height + 16), fixed: true })), K(), m.ev.trigger("error", e);
        });
      });
    }
    __name(Bt, "Bt");
    c(Bt, "handleErr");
    function gs() {
      a.keyState.update(), a.mouseState.update(), a.virtualButtonState.update(), a.charInputted = [], a.isMouseMoved = false;
    }
    __name(gs, "gs");
    c(gs, "resetInputState");
    function Ln(e) {
      a.loopID !== null && cancelAnimationFrame(a.loopID);
      let t = c((n) => {
        if (a.stopped)
          return;
        if (document.visibilityState !== "visible") {
          a.loopID = requestAnimationFrame(t);
          return;
        }
        let s = n / 1e3, h = s - a.realTime;
        a.realTime = s, a.skipTime || (a.dt = h, a.time += Q(), a.fpsCounter.tick(a.dt)), a.skipTime = false, a.numFrames++, Or(), e(), Pr(), gs(), m.ev.trigger("frameEnd"), a.loopID = requestAnimationFrame(t);
      }, "frame");
      t(0);
    }
    __name(Ln, "Ln");
    c(Ln, "run");
    function ws() {
      m.ev.onOnce("frameEnd", () => {
        a.stopped = true, u.clear(u.COLOR_BUFFER_BIT | u.DEPTH_BUFFER_BIT | u.STENCIL_BUFFER_BIT);
        let e = u.getParameter(u.MAX_TEXTURE_IMAGE_UNITS);
        for (let t = 0; t < e; t++)
          u.activeTexture(u.TEXTURE0 + t), u.bindTexture(u.TEXTURE_2D, null), u.bindTexture(u.TEXTURE_CUBE_MAP, null);
        u.bindBuffer(u.ARRAY_BUFFER, null), u.bindBuffer(u.ELEMENT_ARRAY_BUFFER, null), u.bindRenderbuffer(u.RENDERBUFFER, null), u.bindFramebuffer(u.FRAMEBUFFER, null), r.forEach((t) => t()), u.deleteBuffer(w.vbuf), u.deleteBuffer(w.ibuf);
        for (let t in X)
          a.canvas.removeEventListener(t, X[t]);
        for (let t in Ye)
          document.removeEventListener(t, Ye[t]);
        for (let t in Re)
          window.removeEventListener(t, Re[t]);
      });
    }
    __name(ws, "ws");
    c(ws, "quit");
    function Lt(e, t, n, s, h = et.linear) {
      let o = 0, l = [], d = Pt(() => {
        o += Q();
        let f = Math.min(o / n, 1);
        s(Ve(e, t, h(f))), f === 1 && (d.cancel(), s(t), l.forEach((g) => g()));
      });
      return { get paused() {
        return d.paused;
      }, set paused(f) {
        d.paused = f;
      }, onFinish(f) {
        l.push(f);
      }, then(f) {
        return this.onFinish(f), this;
      }, cancel() {
        d.cancel();
      }, finish() {
        d.cancel(), s(t), l.forEach((f) => f());
      } };
    }
    __name(Lt, "Lt");
    c(Lt, "tween"), Ln(() => {
      y.loaded || _() === 1 && (y.loaded = true, m.ev.trigger("load")), !y.loaded && i.loadingScreen !== false ? ls() : (os(), M.paused || Fn(), us(), cs(), i.debug !== false && hs(), i.virtualControls && bn() && ds());
    });
    let Me = { VERSION: Ms, loadRoot: nt, loadProgress: _, loadSprite: Ce, loadSpriteLocal: gr, loadSpriteAtlas: Qt, loadSound: Ur, loadBitmapFont: qe, loadFont: Ne, loadShader: vr, loadShaderURL: yr, loadAseprite: br, loadPedit: wr, loadBean: xr, load: $, getSprite: Zt, getSound: en, getFont: Er, getBitmapFont: tn, getShader: nn, Asset: T, SpriteData: A, SoundData: R, width: N, height: B, center: dt, dt: Q, time: At, screenshot: Xr, record: Wi, isFocused: Zi, setCursor: wn, setFullscreen: Kr, isFullscreen: Ot, isTouchScreen: bn, onLoad: Ft, onLoadUpdate: fs, onResize: ms, onError: ps, camPos: Jr, camScale: Qr, camRot: Wr, shake: Zr, toScreen: Rt, toWorld: vn, gravity: xi, add: Qe, destroy: es, destroyAll: ns, get: Pn, getAll: Dn, readd: ts, pos: lt, scale: ht, rotate: Ei, color: Si, opacity: Ci, anchor: Dt, area: Di, sprite: Mt, text: Mi, rect: Fi, circle: Li, uvquad: Bi, outline: Ii, body: ki, doubleJump: ji, shader: _i, timer: Tn, fixed: Ni, stay: An, health: qi, lifespan: $i, z: Ti, move: Oi, offscreen: Pi, follow: Ai, state: Hi, fadeIn: zi, on: De, onUpdate: Pt, onDraw: ei, onAdd: xn, onDestroy: ti, onCollide: ni, onClick: ri, onHover: ii, onHoverUpdate: si, onHoverEnd: oi, onKeyDown: ui, onKeyPress: de, onKeyPressRepeat: ci, onKeyRelease: li, onMouseDown: hi, onMousePress: En, onMouseRelease: di, onMouseMove: fi, onCharInput: mi, onTouchStart: pi, onTouchMove: gi, onTouchEnd: wi, onScroll: bi, onVirtualButtonPress: yi, onVirtualButtonDown: vi, onVirtualButtonRelease: Ui, mousePos: Pe, mouseDeltaPos: gn, isKeyDown: Nr, isKeyPressed: jr, isKeyPressedRepeat: _r, isKeyReleased: qr, isMouseDown: Vr, isMousePressed: ot, isMouseReleased: Tt, isMouseMoved: kr, isVirtualButtonPressed: $r, isVirtualButtonDown: Hr, isVirtualButtonReleased: zr, charInputted: Yr, loop: ai, wait: ut, play: $e, volume: Tr, burp: on, audioCtx: O.ctx, Timer: fe, Line: ne, Rect: G, Circle: ue, Polygon: se, Vec2: D, Color: S, Mat4: F, Quad: k, RNG: Ge, rand: Ze, randi: _t, randSeed: _n, vec2: p, rgb: E, hsl2rgb: kn, quad: jn, choose: qn, chance: Nn, lerp: Ve, tween: Lt, easings: et, map: mt, mapc: Vn, wave: jt, deg2rad: he, rad2deg: kt, testLineLine: Le, testRectRect: $n, testRectLine: Hn, testRectPoint: ke, drawSprite: un, drawText: st, formatText: ge, drawRect: J, drawLine: ze, drawLines: cn, drawTriangle: ln, drawCircle: me, drawEllipse: hn, drawUVQuad: Oe, drawPolygon: pe, drawFormattedText: we, drawMasked: Fr, drawSubtracted: Br, pushTransform: te, popTransform: K, pushTranslate: I, pushScale: Te, pushRotate: Ae, pushMatrix: Mr, usePostEffect: Rr, debug: M, scene: Yi, go: Xi, addLevel: Qi, getData: Ki, setData: On, download: wt, downloadJSON: Zn, downloadText: qt, downloadBlob: $t, plug: Rn, ASCII_CHARS: or, canvas: a.canvas, addKaboom: ss, LEFT: D.LEFT, RIGHT: D.RIGHT, UP: D.UP, DOWN: D.DOWN, RED: S.RED, GREEN: S.GREEN, BLUE: S.BLUE, YELLOW: S.YELLOW, MAGENTA: S.MAGENTA, CYAN: S.CYAN, WHITE: S.WHITE, BLACK: S.BLACK, quit: ws, Event: ee, EventHandler: ce };
    if (i.plugins && i.plugins.forEach(Rn), i.global !== false)
      for (let e in Me)
        window[e] = Me[e];
    return a.canvas.focus(), Me;
  }, "default");

  // code/main.js
  yo({
    width: 500,
    height: 500
  });
  function Update() {
    onKeyPress("#", () => {
      debug.inspect = !debug.inspect;
    });
  }
  __name(Update, "Update");
  scene("game", () => {
    Update();
    const player = add([
      rect(40, 40),
      pos(40, 400),
      color(255, 0, 0),
      area(),
      anchor("center")
    ]);
  });
  go("game");
})();
//# sourceMappingURL=game.js.map
