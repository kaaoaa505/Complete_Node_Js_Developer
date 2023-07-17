// deno run --allow-env index.js
// deno run index.js todo test --enabled true
// deno run --allow-env index.js todo test --enabled true

import {format} from "https://deno.land/std@0.194.0/datetime/mod.ts";
const args = Deno.args;

console.log(`args: `, args);

// window in Deno is equal to global in NodeJs
console.log(`window: `, window);

// current date in YYYY-MM-DD format
console.log(format(new Date(), "yyyy-MM-dd"));

// current date & time in YYYY-MM-DD hh:mm:ss format
console.log(format(new Date(), "yyyy-MM-dd HH:mm:ss"));

// current time in hh:mm format
console.log(format(new Date(), "HH:mm"));

console.log(`---- Deno.env.get('USER') is: `, Deno.env.get('USER'));