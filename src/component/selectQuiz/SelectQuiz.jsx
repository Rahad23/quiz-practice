import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SelectQuiz = ({select, correctAns}) => {
    console.log(select);
    const [state, setState] = useState(false);
 
    const getText = (text)=>{
        
        console.log(correctAns);
        if(state===false){
            if(correctAns === text){
                toast.success("Current Answer !",
                {
                    position: "top-center",
                    autoClose: 500,
                    theme: "colored",
                });
            }else{
                toast.warn("Wrong Answer ?",
            {
                position: "top-center",
                autoClose: 500,
                theme: "colored",
            });
            }
            
        }
        
    }
    
    if(correctAns)
    return (
        <div className='mt-7'>
            {
            <ToastContainer />
            }
            <div className="flex w-[330px]">
        <div className="grid h-full p-5 flex-grow card bg-base-300 rounded-box place-items-center">
            <div onClick={()=>setState(!state)}>
                
            <div onClick={()=>getText(select)} className='flex items-center justify-between'>
            <input type="radio" id={select} name={correctAns} value="HTML" />
            <label for={select} className='block'>
             <h1 className='text-xl text-black ml-2'>{select}</h1>
            </label>
            </div>
            </div>
        </div>
    </div>
        </div>
    );
};

export default SelectQuiz;