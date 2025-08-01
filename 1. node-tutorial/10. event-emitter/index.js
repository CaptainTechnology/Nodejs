/**
 EventEmitter is a core module in Node.js (events module) that enables event-driven programming.
Instead of calling functions directly, you emit events, and listeners respond to them — just like JavaScript DOM events (e.g., onclick).

This is useful for:

Building scalable applications

Decoupling components

Handling async workflows
 */

// ✅ 1. Import the events module
const EventEmitter = require("events");

// ✅ 2. Create a custom emitter instance
const emitter = new EventEmitter();

// ✅ 3. Attach event listeners (observers)

// Runs every time the "greet" event is emitted
emitter.on("greet", (name) => {
  console.log(`👋 Hello, ${name}`);
});

// Runs every time the "data" event is emitted
emitter.on("data", (payload) => {
  console.log("📦 Data received:", payload);
});
emitter.on("captain",()=>{
  console.log("captain event is called.")
})

// Only runs once for the "init" event
emitter.once("init", () => {
  console.log("🚀 Application initialized!");
});

// Listen for errors (to avoid crashing the app)
emitter.on("error", (err) => {
  console.error("❌ Error caught:", err.message);
});


// ✅ 4. Emit events (trigger them)

// This event only works once
emitter.emit("init");
emitter.emit("init"); // Will NOT run again

// These will call their respective listeners
emitter.emit("greet", "Ateek");
emitter.emit("greet", "VS Code User");
emitter.emit("captain")

emitter.emit("data", { id: 101, content: "Learning Events in Node.js" });

// Simulate an error event
emitter.emit("error", new Error("Something went wrong!"));

// Log to know program reached end
console.log("🏁 End of program");
