import { es, ru, fr } from "date-fns/esm/locale";

const monthsNames = [...Array(12).keys()].map((i) =>
  es.localize.month(i, { width: "full" })
);

export const months = [];

monthsNames.map((item, index) => months.push({ label: item, value: index }));
