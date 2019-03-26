import { useContext } from "react";

import CurrencyContext from "./CurrencyContext";

function format(value, type) {
  switch (type) {
    case "left": {
      return `$${value}`;
    }
    case "right": {
      return `${value}$`;
    }
    default: {
      return `$${value}`;
    }
  }
}

export default value => {
  const currencyType = useContext(CurrencyContext);

  return format(value, currencyType);
};
