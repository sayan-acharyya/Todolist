import React, { useState } from 'react'
import { CiSquareCheck } from "react-icons/ci";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const Tasklist = ({task,setTask,SetActive,setUpdate,setEdit}) => {

   
    const handelRemove = (i) =>{
      const isComform= window.confirm("are you sure you want to delete this")
      if(isComform){
        const filterItem= task.filter((item)=>(
          i!=item.id //jara jara not equal to hobe id r tara thakbe ar j equal to hobe se delete hobe
       ))

       setTask(filterItem)
      }
      
    };

    const haandelEdit= (id) =>{
      const findItem = task.find((elem)=>{
        return id === elem.id
      })
       SetActive(findItem.title)
       setUpdate(false)
       setEdit(id)
    }


    const deleteAll = () =>{
      setTask([])
    }

   const handelComplete=(id)=>{
       setTask(task.map((comitem)=>{
           if(comitem.id=== id){
            return {...comitem,complete:!comitem.complete}
           }
           return comitem;
       }))
   }

  return (
    <div>
       <ul>
        {
            task.map((list)=>(
                <li className={`flex justify-between border-b-2 py-1 items-center ${list.complete?"line-through":""}`}
                 key={list.id}>
            <diV className="flex gap-3 ">
                <span className='cursor-pointer'>
                <CiSquareCheck size={25} onClick={()=>handelComplete(list.id)}/> 
                </span>
                <span>{list.title}</span>

            </diV>
              <div className='flex gap-3'>
                <span className='cursor-pointer' 
                onClick={()=>haandelEdit(list.id)}
                >
                <FaEdit size={25}/>
                </span>
                <span className='cursor-pointer' onClick={()=>handelRemove(list.id)}>
                <MdDelete size={25}/>
                </span>
              </div>
           </li>
                   
            ))
        }
       </ul>
       {
         task.length>=1?<button className='bg-[red] text-white px-3 py-2 rounded-md my-5 hover:bg-red-500' onClick={deleteAll}>Remove all</button>:""
       }
       
    </div>
  )
}

export default Tasklist