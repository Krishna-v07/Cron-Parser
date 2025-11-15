import { expandRange } from "./helper.js";

export const parseField=(field, min, max)=> {
  if (field === "*")return expandRange(min, max);
  if (field.includes("/")) {
    const [base, step] = field.split("/");
    const interval = Number(step);
    if (base === "*")return expandRange(min, max, interval);
  }

  if (field.includes(",")) {
    return field
      .split(",")
      .flatMap(f => parseField(f, min, max));
  }

  if (field.includes("-")) {
    const [start, end] = field.split("-").map(Number);
    return expandRange(start, end);
  }

  return [Number(field)];
}