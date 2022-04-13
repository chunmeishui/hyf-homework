import React, { useState } from "react";
import { SearchUsersList } from "./SearchUsersList";

export const usersContext = React.createContext();

export const SearchMain = () => {
  const [apiLoginData, setApiLoginData] = useState("");
  return (
    <div>
      <h1>Github users searcher</h1>
    
        
          <input
            type="text"
            value={apiLoginData}
            onChange={(e) => setApiLoginData(e.target.value)}
          ></input>

   
      <usersContext.Provider value={apiLoginData}>
        <SearchUsersList />
      </usersContext.Provider>
    </div>
  );
};
