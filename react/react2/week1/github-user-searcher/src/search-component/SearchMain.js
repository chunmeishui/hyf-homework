import React, { useState } from "react";
import { SearchUsersList } from "./SearchUsersList";
import "../App.css";

//make it goble
export const usersContext = React.createContext();

export const SearchMain = () => {
  const [apiLoginData, setApiLoginData] = useState("");
  return (
    <div>
      <h1>Github users searcher</h1>
      <input
        className="input"
        type="text"
        placeholder="Enter name"
        value={apiLoginData}
        onChange={(e) => setApiLoginData(e.target.value)}
      ></input>

      {/* use this way to make apiLoginData globle to all of the child */}
      <usersContext.Provider value={apiLoginData}>
        <SearchUsersList />
      </usersContext.Provider>
    </div>
  );
};
