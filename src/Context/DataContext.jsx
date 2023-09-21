import  { useEffect, createContext } from "react";
import axios from "axios";
import {  useState } from "react";
import PropTypes from "prop-types"; // Importa PropTypes

export const DataContext = createContext();

export const Petsprovider = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("data.json") 
      .then((res) => setData(res.data))
      .catch((error) => {
        console.error("Error al cargar los datos:", error);
      });
    }, []);

  return (
    <DataContext.Provider value={{ data }}>
      {children}
    </DataContext.Provider>
  );
};


Petsprovider.propTypes = {
  children: PropTypes.node, 
};
