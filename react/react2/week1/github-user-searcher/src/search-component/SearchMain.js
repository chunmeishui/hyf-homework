import React, { useState } from "react";
import { SearchUsersList } from "./SearchUsersList";
import "../App.css";

export const usersContext = React.createContext();

export const SearchMain = () => {
  const [apiLoginData, setApiLoginData] = useState("");
  return (
    <div>
      <h1>Github users searcher</h1>
    
        
          <input className="input"
            type="text"
            placeholder="Enter name"
            value={apiLoginData}
            onChange={(e) => setApiLoginData(e.target.value)}
          ></input>

   
      <usersContext.Provider value={apiLoginData}>
        <SearchUsersList />
      </usersContext.Provider>
    </div>
  );
};
