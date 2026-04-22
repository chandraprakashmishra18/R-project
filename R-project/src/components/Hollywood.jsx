import React from 'react'

const Hollywood = () => {
  const HollywoodData = Data.filter(
    (item) => item.category === "Hollywood"
  );
  console.log(HollywoodData)
  return (
    <div>
      {HollywoodData.map((hollydata , index) => (
        <div key = {index}>
          <h1>
            {hollydata.title}
          </h1>
          <img src={hollydata.img_url} alt={hollydata.title}/>
          </div>
      ))}
      
    </div>
  )
}

export default Hollywood
