import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUSerMiddleWare } from "../store/middleware";

const UserData = () => {
  const { data, loading, error } = useSelector((state) => state.userSlice);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUSerMiddleWare());
  }, []);

  if (loading) {
    return <h3>...Loading</h3>;
  }
  if (error) {
    return (
      <>
        <h3>Error occurred</h3>
      </>
    );
  }

  return <div>{data ? `Name: ${data.name}` : "No Data Available"}</div>;
};

export default UserData;
