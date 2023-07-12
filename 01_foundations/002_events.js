import { EventEmitter } from "node:events";

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on("test_event", () => {
  console.log("test event occurred!");
});

myEmitter.on("dev_event", () => {
  console.log("dev event observer 1 occurred!");
});

myEmitter.on("dev_event", () => {
  console.log("dev event observer 2 occurred!");
});

myEmitter.on("dev_event", () => {
  console.log("dev event observer 3 occurred!");
});

myEmitter.emit("test_event");
myEmitter.emit("dev_event");
myEmitter.emit("pro_event");
myEmitter.emit("pro_event");
myEmitter.emit("dev_event");
myEmitter.emit("test_event");

process.on("beforeExit", (code) => {
  console.log("Process beforeExit event with code: ", code);
});

process.on("exit", (code) => {
  console.log("Process exit event with code: ", code);
});

console.log("\n\tThis message is displayed before process exit && beforeExit.\n");
