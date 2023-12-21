import React from "react";
import "../components/Loading/loading.css";

const Loading = () => {
  return (
    <div className="w-screen h-screen bg-[#222222] flex justify-center items-center">
      <div className="container_loading">
        <div className="📦"></div>
        <div className="📦"></div>
        <div className="📦"></div>
        <div className="📦"></div>
        <div className="📦"></div>
      </div>
    </div>
  );
};

export default Loading;
