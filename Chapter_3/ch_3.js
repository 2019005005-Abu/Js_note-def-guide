console.log(typeof(3+[]))
//1.program is parsed into a AST
//2.AST is Compiled to bytecode
//3.bytecode evaluated by the runtime
console.log(0xff);
console.log(0xBADCAFE);
let billion=1_000_000_000;
console.log(billion)
let bytes=0x89_AB_CD_EF;
let bits=0b0001_1101_0111;
let fraction=0.123_456_789;
console.log(bytes,bits,fraction);

//Arithmetic Operator in Javascript
console.log('pow-',Math.pow(2,53));
console.log('round-',Math.round(.6));
console.log('ceil-',Math.ceil(.6));
console.log('floor-',Math.floor(.6));
console.log('abs-',Math.abs(-5));
console.log('max-',Math.max(100,56));
console.log('min-',Math.min(90,5));
console.log('random-',Math.random(2,53));
console.log('pi-',Math.PI);
console.log('E-',Math.E);
console.log('sqrt-',Math.sqrt(3));
console.log('pow-',Math.pow(3,1/3));
console.log('sin-',Math.sin(0));
console.log('log-',Math.log(10));
console.log('log-',Math.log(100));
console.log('LN10-',Math.LN10);
console.log('LN2',Math.LN2)
console.log('exp',Math.exp(1))

//ES6
console.log('Math.cbrt(27)',Math.cbrt(27));
console.log('Math.hypot(3,4)',Math.hypot(3,4))
console.log('Math.log10(100)',Math.log10(100));
console.log('Math.log2(1024)',Math.log2(1024));
console.log('Math.log1p(10)',Math.log1p(10))
console.log('Math.expm1(x)',Math.expm1(10));
console.log('Math.sign(x)',Math.sign(10));
console.log('Math.imul(2,3',Math.imul(2,3));
console.log('Math.clz32(0xf)',Math.clz32(0xf));
console.log('Math.trunc(3,9)',Math.trunc(3,9));
console.log('Math.fround(9)',Math.fround(9));
console.log('Math.asinh(9)',Math.asinh(9));
console.log('Math.cosh(8)',Math.cosh(8));
console.log('Math.tanh(8)',Math.tanh(8));
console.log('Math.acosh(10',Math.acosh(10));
console.log('Math.atanh(9)',Math.atanh(9));

//Infinity
console.log('10/0',10/0)//Infinity
console.log('Number.POSITIVE_INFINITY-',Number.POSITIVE_INFINITY);//Infinity
console.log('Number.POSITIVE_INFINITY',Number.NEGATIVE_INFINITY);//Infinity
console.log('Number.NaN',Number.NaN);//NaN
console.log(Number.POSITIVE_INFINITY/Number.POSITIVE_INFINITY);//NAN
console.log('0/0',0/0)//NAN
console.log(Infinity/Infinity)//NAN
// console.log('Number.POSITIVE_INFINITY,MAX_VALUE*2',Number.POSITIVE_INFINITY,MAX_VALUE*2);


console.log('Number.MIN_VALUE/2',Number.MIN_VALUE/2);
console.log('-Number.MIN_VALUE/2',-Number.MIN_VALUE/2);
console.log('-1/Infinity',-1/Infinity);
console.log('-0',-0);