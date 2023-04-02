import { createContext, useState } from "react";
export const DataContext = createContext(null);

const DataProvider = ({ children }) => {
  const [account, setAccount] = useState("");
  const [compare, setCompare] = useState([]);
  const [wishList, setWishList] = useState([]);
  return (
    <DataContext.Provider
      value={{
        account,
        setAccount,
        compare,
        setCompare,
        wishList,
        setWishList,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
