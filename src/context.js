import { useState, useContext, createContext, useEffect } from "react";

const AppContext = createContext();

function AppProvider({ children }) {
  const [adress, setAdress] = useState([]);

  const fetchData = async () => {
    const resp = await fetch(
      "https://geo.ipify.org/api/v2/country?apiKey=at_moiOBACOKKyPhePH3BfUSWTGsnB3F"
    );
    const data = await resp.json();
    setAdress(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AppContext.Provider
      value={{
        adress,
        setAdress,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
