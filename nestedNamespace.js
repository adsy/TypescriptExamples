"use strict";
var someNS;
(function (someNS) {
    let InnerNS;
    (function (InnerNS) {
        function f3() {
            console.log("TEST");
        }
        InnerNS.f3 = f3;
    })(InnerNS = someNS.InnerNS || (someNS.InnerNS = {}));
})(someNS || (someNS = {}));
someNS.InnerNS.f3();
var sf = someNS.InnerNS.f3;
sf();
