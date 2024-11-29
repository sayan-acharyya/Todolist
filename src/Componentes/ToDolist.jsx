import React, { useState } from 'react'
import Tasklist from './Tasklist'
import { v4 as uuidv4 } from 'uuid';

const ToDolist = () => {

   const[active,SetActive]=useState("");
   const[task,setTask]=useState([]);
   const[update,setUpdate]=useState(true)
   const[edit,setEdit]=useState(null)

   const handelChange = (e) =>{
     SetActive(e.target.value)
   }

   const handelUpdate=()=>{
       if(active==""){
        alert("please fill the input box")
       }
       else if(!update){
           setTask(task.map((newtask)=>{
            if(newtask.id===edit){
              return {...newtask,title:active}
               
            }
            return newtask
            
           }))
           setUpdate(true)
           SetActive("")
           setEdit(null)

       }else{
        const allActivity={id:uuidv4(),title:active,complete:false}
        console.log(allActivity)
         setTask([...task,allActivity])
         SetActive("")

       }



    
   }
    
  return (
    <div className='bg-black'>
        <section className='text-gray-600 body-font overflow-hidden'>
             <div className='container px-5 py-24 mx-auto'>
                <div className='w-[80%] mx-auto flex flex-wrap'>
                    <div className='lg:w-1/2'>
                         <img
                         alt=""
                         src="data:image/jpeg;base64,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 "
                         className='w-full lg:h-auto h-64 object-cover object-center rounded'
                         />
                    </div>
               
               <div className='lg:w-[40%] md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0'>
                  <h2 className='text-gray-900 font-bold mb-5 text-center text-5xl'>
                    Todo
                  </h2>
                  <div className='mb-4'>
                      <input
                      type='text'
                      value={active}
                      onChange={handelChange}
                      className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-out'
                      />
                  </div>
                    
                   {
                    update?  <button
                    className='text-white bg-indigo-500 border-0 p-2 mb-6 px-8 focus:outline-none hover:bg-indigo-600 roundedtext-lg'
                    onClick={handelUpdate}
                    >
                     Add
                   </button> :  <button
                   className='text-white bg-indigo-500 border-0 p-2 mb-6 px-8 focus:outline-none hover:bg-indigo-600 roundedtext-lg'
                   onClick={handelUpdate}
                   >
                    update
                  </button>
                   }

                   
                 
                <Tasklist task={task} setTask={setTask} SetActive={SetActive} setUpdate={setUpdate} setEdit={setEdit}/>
               </div>
                </div>

             </div>
        </section>
        </div>
  )
}

export default ToDolist