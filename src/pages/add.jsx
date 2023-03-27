import React from 'react'
import "../style.css"
import { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
export default function Add() {
    const navigate = useNavigate()
    const [artikel, setArtikel] = useState({
        judul:"",
        content:"",
        penulis:""
    })
    const handleChange = (e)=>{
        setArtikel(prev=>({...prev, [e.target.name]: e.target.value}))
    }
    const handleClick = async (e)=>{
        e.preventDefault()
        try{
            await axios.post("http://localhost:5000/artikel", artikel)
            navigate("/")
        }catch(err){
            console.log(err)
        }
    }
  return (
    <div className='container'>
        <div className='page'><h1>Add Artikel</h1></div>
        <div>
            <form method='post'>
                <div className='input'>
                    <input type='text' onChange={handleChange} name='judul' placeholder='judul'/>
                </div>
                <div className='input'>
                    <textarea type='text' onChange={handleChange} name='content' placeholder='content'/>
                </div>
                <div className='input'>
                    <input type='text' onChange={handleChange} name='penulis' placeholder='penulis'/>
                </div>
                <div className='input'>
                    <button onClick={handleClick}>Submit</button>
                </div>
            </form>
        </div>
    </div>
  )
}
