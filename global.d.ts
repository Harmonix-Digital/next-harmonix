// global.d.ts
import mongoose from "mongoose";

declare global {
  // Add a custom property to NodeJS global
  var mongoose: {
    conn: mongoose.Connection | null;
    promise: Promise<mongoose.Connection> | null;
  };
}

export {};
