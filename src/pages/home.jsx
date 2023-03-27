import React from 'react'
import "../style.css"
import {useEffect, useState} from "react"
import axios from 'axios';

export default function Home() {
  const [items, setItems] = useState([]);

 
  useEffect(() => {
    const allArtikel = async ()=>{
      try{
        const res = await axios.get("http://localhost:5000/artikel")
        setItems(res.data)
      }catch(err){
        console.log(err)
      }
    }
    allArtikel()
  }, [])
  const handleDelete = async (id)=>{
    try{
      await axios.delete("http://localhost:5000/artikel/"+id)
      window.location.reload()
    }catch(err){
      console.log(err)
    }
  }
  return (
    <div className='container'>
        <div className='page'>
            <h1>Artikel</h1>
        </div>
        <div>
          <button><a href='/add'>Tambah Artikel</a></button>
        </div>
        <div className='ccard'>
            {items.map(article=>(
                <div className='card'>
                     <div className='icard'>
                <h4>{article.judul}</h4>
            </div>
            <div className='icard'>
                <p>{article.content}</p>
            </div>
            <div className='icard'>
                <span>{article.penulis}</span>
            </div>
            <div className='icardbtn'>
                <button>Detail</button>
                <button onClick={()=>handleDelete(article.id)}>Hapus</button>
            </div>
        </div>
            ))}
           </div>
    </div>
  )
}
