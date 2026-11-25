// Charm the Commuter: Forecast a City That Isn't — one line of weather
// forecast (<=140 characters) for a city that does not exist. Writes the
// single line to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "In Brollywick, drizzle till nine, then sunshine — the ducks queue at the crossing and your umbrella gets the morning off.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
