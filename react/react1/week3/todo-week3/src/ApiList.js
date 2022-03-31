import React from "react";
import { useEffect, useState } from "react";
import { ApiItem } from "./ApiItem";
import { FancyBorder } from "./FancyBorder";
const urlApi =
  "https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw";

const ApiList = () => {
  const [todoData, setTodoData] = useState([]);
  useEffect(() => {
    apiData();
  }, []);
  const apiData = async () => {
    const response = await fetch(urlApi);
    const apiData = await response.json();
    setTodoData((prev) => [...prev, apiData]);
  };
  function FancyBorder({ children }) {
    return <div className="fancy-border">{children}</div>;
  }

  const apiItem = todoData.map((data) => {
    console.log(data);
    return data.map((data) => {
      console.log(data);
      return (
        <FancyBorder>
        <ApiItem
          description={data.description}
          deadline={data.deadline}
          key={data.id}
        />
        </FancyBorder>
      );
    });
  });
  
 
  return (
    <div>
      <ul>{apiItem}</ul>
    </div>
  );
};
export default ApiList;
