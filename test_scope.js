function foo() { return "original"; }
var origFoo = foo;
foo = function() { return origFoo() + " 1"; };

const origFoo2 = foo;
foo = function() { return origFoo2() + " 2"; };

const origFoo3 = global.foo;
global.foo = function() { return origFoo3() + " 3"; };

console.log(foo());
console.log(global.foo());
