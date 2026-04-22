import React from 'react'
import Data from "../Data.js"; 

const Bollywood = () => {
  const BollywoodData = Data.filter(
    (item) => item.category === "Bollywood"
  );

  return (
    <div>
      {BollywoodData.map((bollydata, index) => (
        <div key={index}>   {/* ✅ key added */}
          <h1>{bollydata.title}</h1>
          <img src={bollydata.img_url} alt={bollydata.title} />
        </div>
      ))}
    </div>
  );
};

export default Bollywood;