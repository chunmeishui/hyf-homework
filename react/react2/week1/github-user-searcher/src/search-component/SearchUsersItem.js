import { useContext } from "react";
import { ApiTotalData } from "./SearchUsersList";
import "../App.css";

export const SearchUsersItem = () => {

  const userlist = useContext(ApiTotalData);

  const itemApi =()=> userlist.map((name,index) => {
    return <h5 key={index}>{name}</h5>;
  });
  return (
    <>
      <div className="item">{itemApi()}</div>
    </>
  );
};
