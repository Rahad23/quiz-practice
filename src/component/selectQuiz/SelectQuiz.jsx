import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SelectQuiz = ({select, correctAns}) => {
    const [state, setState] = useState(false);
 
    const getText = (text)=>{
        console.log(correctAns);
        if(state===false){
            if(correctAns === text){
                toast.success("Current Ans!",
                {
                    position: "top-center",
                    autoClose: 500,
                    theme: "colored",
                });
            }else{
                toast.warn("Wrong Ans?",
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
            {
              state ? <input type="radio" className="radio radio-secondary" value="tbone" checked /> : <input type="radio" name="radio-3" className="radio radio-secondary" />
            }
            <label className='block'>
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