import { Decimal } from "@prisma/client/runtime/client";

const moneyFormatter = (decimal: Decimal) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return formatter.format(Number(decimal));
};

export default moneyFormatter;
