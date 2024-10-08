import React from 'react'
import { supabase } from '../lib/supabase'

const page = () => {
  const setNewView = async () =>{
    const {data,error} = await  supabase
    .from('shipment')
    .insert({
      Shipment_Name:"shawn"
    })
    if (data) console.log("data" + data)
    if(error) console.log("error" + error.message)
  }
setNewView();
  return (
    <>
      {
        setNewView()
      }
    </>
  )
}

export default page
