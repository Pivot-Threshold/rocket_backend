import "reflect-metadata";
import express from "express";

const PORT = process.env.PORT || 3000;

const app = express();


async function main() {
  try {
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error(error);
  }
}

main();