import React, { useContext, useEffect, useState } from "react";
import { usersContext } from "./SearchMain";
import { SearchUsersItem } from "./SearchUsersItem";

export const ApiTotalData = React.createContext();

export const SearchUsersList = () => {
  const [apiTotalData, setApiTotalData] = useState([]);
  const [loading, setLoading] = useState(false);

  // take data from SearchMain input
  const query = useContext(usersContext);
  const api = `https://api.github.com/search/users?q=${query}`;

  useEffect(() => {
    if (!query) {
      setApiTotalData([]);
      return;
    }
    setLoading(true);
    const fecthData = async () => {
      try {
        const fetchApi = await fetch(api);
        const apiData = await fetchApi.json();
        const result = apiData.items.map((data) => data.login);
        setApiTotalData(result);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fecthData();
  }, [api, query]);

  return (
    <>
      {loading && <p>loading...</p>}
      {apiTotalData.length === 0 ? (
        <p>No items</p>
      ) : (
        <ApiTotalData.Provider value={apiTotalData}>
          <SearchUsersItem />
        </ApiTotalData.Provider>
      )}
    </>
  );
};

//   (async () => {
//     try {
//       const response = await (await fetch(api)).json();
//       const result = response.items.map((data) => data.login);
//       setApiTotalData(result);
//     } catch (err) {
//       throw err;
//     } finally {
//       setLoading(false);
//     }
//   })();
