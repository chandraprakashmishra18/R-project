import React from 'react'

const Fitness = () => {
  const FitnessData = Data.filter(
    (item) => item.category === "Fitness"
  );
  console.log(FitnessData)
  return (
    <div>
      {FitnessData.map((fitdata , index) => (
        <div key = {index}>
          <h1>
            {fitdata.title}
          </h1>
          <img src={fitdata.img_url} alt={fitdata.title}/>
          </div>
      ))}
      
    </div>
  )
}

export default Fitness
