import React, { useEffect, useState } from 'react'
import axios from 'axios'


const Getdata = () => {
const [data,setdata]=useState(null)

    useEffect(()=>{

        axios.get("http://127.0.0.1:8000/api/data")
        .then((response)=>{
            setdata(response.data)

        })
        .catch((error)=>{
            console.error('error fetching data',error);
        })

    })

  return (
    <div>
        <p>{data?data.message:"Loading....."}</p>


    </div>
  )
}

export default Getdata