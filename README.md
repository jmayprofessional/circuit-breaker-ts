# circuit-breaker-ts
playing around with the circuit breaker design concept


In order to run this piece, make sure you start the server with the following command in your terminal:

`npm run start-server`

then make sure you open a seperate terminal and run the following command:

`npm run test-breaker`

please see the test file labeled named `test.js` to explore different circuit variations as shown below for localhost:3000:

`"use strict";
// test.ts
Object.defineProperty(exports, "__esModule", { value: true });
const CircuitBreaker_1 = require("./circuit-breaker/CircuitBreaker");
const BreakerOptions_1 = require("./circuit-breaker/BreakerOptions");
const breaker1 = new CircuitBreaker_1.CircuitBreaker({
    method: "get",
    url: "http://localhost:3000",
}, new BreakerOptions_1.BreakerOptions(3, 5, 5000));
const breaker2 = new CircuitBreaker_1.CircuitBreaker({
    method: "get",
    url: "http://localhost:3000",
}, new BreakerOptions_1.BreakerOptions(6, 7, 1000));
setInterval(() => {
    breaker1.exec().then(console.log).catch(console.error);
}, 500);
setInterval(() => {
    breaker2.exec().then(console.log).catch(console.error);
}, 1500);
//# sourceMappingURL=test.js.map`

Create a new breaker option or use modify one of the existing ones in the test file. You're the boss now, go forth and test!
    
    
