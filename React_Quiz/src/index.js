import React from 'react';
import {useState} from 'react'
import ReactDOM from 'react-dom/client';
import './indexq.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
/*
  <React.StrictMode>
    <App />
  </React.StrictMode> */
  function Quiz(){
    const[crQues,setQues]=useState(0);
    const[score,setScore]=useState(0);
    const[disQue,disScore]=useState(true)

    const vals=
          [
            {qu:'Which ground is home of cricket?',
            opts:[{options:`MCG`,ans:false},{options:`SCG`,ans:false},{options:`Lord's`,ans:true},{options:`Oval's`,ans:false}] 
            },
            {qu:'Who is King of Cricket?',
            opts:[{options:`VK`,ans:true},{options:`MSD`,ans:false},{options:`ABD`,ans:false},{options:`Sachin`,ans:false}]
            },
            {qu:'Who is god of Cricket?',
            opts:[{options:`VK`,ans:false},{options:`MSD`,ans:false},{options:`ABD`,ans:false},{options:`Sachin`,ans:true}]
            },
            {qu:'Who is winner of Cricket World Cup 2011?',
            opts:[{options:`Austrailia`,ans:false},{options:`England`,ans:false},{options:`India`,ans:true},{options:`Srilanka`,ans:false}]
            }
          ];
          
          
    

    const handleOpts=(ans)=>{
      if(ans){
        setScore(score+1);
      }
      const nxtques=crQues+1;
      if(nxtques < vals.length){
      setQues(nxtques);
      }
      else{
        disScore(false);
      }

    }
     if(disQue){
            return(
        <>
        <div className="container p-4 row">
          
        <div className='left col-7'>
          <p>QUESTION {crQues+1}<span>/{vals.length}</span></p>  
              <div className='section'>{vals[crQues].qu }</div>
        </div>
        <div className='right col-4'>
          {vals[crQues].opts.map((opts)=>{return(
            <button id='btn' className='btn w-100 m-2 p-2' type="button" onClick={()=>{handleOpts(opts.ans)}}>{opts.options}</button>)
          })}
        </div>
        </div>
        </>
        
    )}
    
        else{
        return(
            
            <div id='res' className='container p-4'>Your Score is {score} out of {vals.length}</div>
            
        )}
    
        }
root.render(<Quiz/>)
