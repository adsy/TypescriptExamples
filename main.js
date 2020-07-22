// tsc bundled file1, file2 and a1 together to provide this example

var Namespace1;
(function (Namespace1) {
  function f1() {
    console.log("HI");
  }
  Namespace1.f1 = f1;
})(Namespace1 || (Namespace1 = {}));
var Namespace2;
(function (Namespace2) {
  function f2() {
    console.log("HELLO");
  }
  Namespace2.f2 = f2;
})(Namespace2 || (Namespace2 = {}));
Namespace1.f1();
Namespace2.f2();
