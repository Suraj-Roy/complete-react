import React, { useEffect, useState } from 'react'
import { FetchRespone } from '../types/jsonresponceinterface';

const Sidebar = () => {
    const [categories,setCategories] = useState<string[]>([]);
    const [keywords,setKeywords] = useState<string[]>([]);

    useEffect(()=>{
        // fetch data from API
        fetchCatogeries();
    },[]);

    const fetchCatogeries = async () =>{

        try {

            const response = await fetch('https://dummyjson.com/products');
            const data : FetchRespone = await response.json();
            console.log(data);
        } catch (error) {
            console.log('error fetching the products',error);
        }

    }
  return (
    <div>Sidebar</div>
  )
}

export default Sidebar