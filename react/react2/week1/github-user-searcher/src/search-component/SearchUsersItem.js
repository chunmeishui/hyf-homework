import { useContext } from "react";
import { ApiTotalData } from "./SearchUsersList";
import "../App.css";

export const SearchUsersItem = () => {
  const userlist = useContext(ApiTotalData);
  const itemApi = userlist.map((name) => {
    return <h5>{name}</h5>;
  });
  return (
    <>
      <div className="item">{itemApi}</div>
    </>
  );
};
