import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bannerImageMiddleware } from "../store/bannerMiddleware";

const Banner = () => {
  const { bannerImage, bannerImageTitle, loading, error } = useSelector(
    (state) => state.bannerData
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(bannerImageMiddleware());
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
  return (
    <div
      className="h-[20vh] md:h-[75vh] bg-cover bg-center flex items-end"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${bannerImage})`,
      }}
    >
      <div className="text-white w-full text-center text-2xl">
        {bannerImageTitle}
      </div>
    </div>
  );
};

export default Banner;
