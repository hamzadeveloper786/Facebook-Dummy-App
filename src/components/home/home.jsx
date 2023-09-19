import React, { useEffect, useState } from 'react'
import './home.css'
import { database } from './config'
import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore'
import {  HandThumbsUp, Trash, PencilSquare } from "react-bootstrap-icons";

const  Home = () => {

    const [title,settitle] =useState('')
    const [text,settext] =useState('')
    const [id,setId] =useState('')

    const [show,setShow] =useState(false)
    


    const [val,setVal] =useState([])


    
    const value = collection(database,"dummy")

    
    useEffect(()=>{
        const getData= async()=>{
          const dbVal = await getDocs(value)
          setVal(dbVal.docs.map(doc=>({...doc.data(),id:doc.id})))
        }
        getData()
    })

    const handleCreate =async()=>{
        await addDoc(value,{title:title,text:text})
        settitle("")
        settext("")
    }

    const handleDelete =async(id)=>{
       const deleteVal =  doc(database,"dummy",id)
       await deleteDoc(deleteVal)
    }
    
    const handleEdit =async(id,title,text)=>{
        settitle(title)
        settext(text)
        setId(id)
        setShow(true)
    }
    
    const handleUpdate =async()=>{
        const updateData = doc(database,"dummy",id)
        await updateDoc(updateData,{title:title,text:text})
        setShow(false)
        settitle("")
        settext("")
    }

    
    const [like, setLike] = useState(100),
    [isLike, setIsLike] = useState(false),
  onLikeButtonClick = () => {
    setLike(like + (isLike?-1:1));
    setIsLike(!isLike);
  }

    return(
        <div className='container'>
            <li className="nav" id="head">Facebook Dummy</li>
            <fieldset>
        <legend></legend>
    
        <div className='form'>
            <input value={title} onChange={(e) => settitle(e.target.value)} id="title" type="text" placeholder="Title" required />
            <textarea id="text" value={text} onChange={(e) => settext(e.target.value)} placeholder="Text" required></textarea>
            {!show?<button onClick={handleCreate}>Create</button>:
           <button onClick={handleUpdate}>Update</button>}
        </div>

    </fieldset>

    {
            val.map(values=>
    <div class="postDiv">
        <div class="header">
            <div>
            <h1>{values.title}</h1>
            </div>
        </div>
        <div class="post">
        <p>{values.text}</p>
        <div className="postFooter">
      <div id='like' className={"like-button " + (isLike ? "liked" : "")}
        onClick={onLikeButtonClick} >
        <HandThumbsUp /> {like}
      </div>
      <div className="button" onClick={()=>handleEdit(values.id,values.title,values.text)}>
        <PencilSquare /> Edit
      </div>
      <div className="button" onClick={()=>handleDelete(values.id)}>
        <Trash /> Delete
    </div>
      </div>
        </div>
    </div>)}
           
           </div>
    )
}
    export default Home;