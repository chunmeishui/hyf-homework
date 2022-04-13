import { useContext } from "react";
import { ApiTotalData } from "./SearchUsersList";

export const SearchUsersItem = () => {

  const userlist = useContext(ApiTotalData);
  const itemApi = userlist.apiTotalData.map((name) => {
    return <h5>{name}</h5>;
  });
  return (
    <>
    <div>{itemApi}</div>
    </>
  );
};
