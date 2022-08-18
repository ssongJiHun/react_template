import React from "react";

import api from "src/utils/axios_api";

const Home = () => {
  const btnhandle = async () => {
    await api.get("/api/other/me").then((data) => {
      alert(JSON.stringify(data));
    });
  };

  return (
    <div>
      <button
        onClick={() => {
          btnhandle();
        }}
      >
      </button>
    </div>
  );
};

export default Home;
