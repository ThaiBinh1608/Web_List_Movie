import React from 'react';
import {navigate, useNavigate } from "react-router-dom";
const button = () => {
  
    return (
        <button onClick={() => navigate(`/movie/${id}`)} className="py-3 px-6 text-2xl  rounded-lg capitalize bg-primary w-full mt-auto">
        Xem ngay
      </button>
    );
};

export default button;