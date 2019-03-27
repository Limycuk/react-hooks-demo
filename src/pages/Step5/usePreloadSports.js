import { useEffect, useState } from "react";

import data from "./data";

export default () => {
  const [sports, setSports] = useState([]);

  useEffect(() => {
    setTimeout(() => setSports(data));
  }, []);

  return sports;
};
