namespace someNS {
  export namespace InnerNS {
    export function f3() {
      console.log("TEST");
    }
  }
}

someNS.InnerNS.f3();

import sf = someNS.InnerNS.f3;
sf();
