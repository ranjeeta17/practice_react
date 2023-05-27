import axios from 'axios'
import React from 'react'
import { useEffect,useState } from 'react'




export function Storie1() {
   
    const [search, setSearch]= useState("react")
    const [story, setStory]= useState([])

    function fetchdata(){
        axios.get(`https://hn.algolia.com/api/v1/search?query=${search}`)
            .then((res)=>{
                console.log(res.data.hits)
                setStory(res.data.hits)
            }).catch((err)=>{
                console.log(err)
            })
    }

    useEffect(()=>{
        fetchdata()
        
    },[])

   
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission
        fetchdata()
       
    };

    const handleDismiss=(objId)=>{
        const delet =story.filter((item)=>item.objectID!==objId)
        setStory(delet)

    }

    



  return (
    <>
    <form onSubmit={handleSubmit}> 
    <label>Search Stories</label>
    <input type='text' value={search} onChange={(e)=>setSearch(e.target.value)}></input> 
    <button type='submit'>Submit</button>
    
    </form>

    
        
    {story.map((item)=><li key={item.objectID}>{item.title}<button onClick={()=>handleDismiss(item.objectID)}>Dismiss</button></li>)}

    
    


    </>
    
  )
}
