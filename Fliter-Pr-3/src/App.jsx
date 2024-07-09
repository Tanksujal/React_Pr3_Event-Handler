import { useState } from 'react'
import { data,product } from './data'
import Record from './record'
import "./App.css"
function App() {
  const [cat, setcat] = useState(product)
  const fliterData = (cat) => {
     if(cat == "all")
      {
        setcat(product)
      }
      else{
        let dataf = product.filter((val)=>{
          return val.name == cat
        })
        setcat(dataf)
      }
  }
  return (
   <>
     <Record data={data} fliterData={fliterData}category={cat}/>
   </>
  )
}

export default App
