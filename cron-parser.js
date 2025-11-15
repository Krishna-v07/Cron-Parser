import { formatLine } from "./src/utils/formatLine.js";
import { parseField } from "./src/utils/parseField.js";

const cronParser=()=> {
  const input = process.argv.slice(2).join(" ");
  const parts = input.split(/\s+/);

  const [min, hour, dom, month, dow, ...cmd] = parts;
  const command = cmd.join(" ");

  console.log(formatLine("minute",        parseField(min,   0, 59)));
  console.log(formatLine("hour",          parseField(hour,  0, 23)));
  console.log(formatLine("day of month",  parseField(dom,   1, 31)));
  console.log(formatLine("month",         parseField(month, 1, 12)));
  console.log(formatLine("day of week",   parseField(dow,   0, 6)));
  console.log(formatLine("command",       [command]));
}

cronParser();
