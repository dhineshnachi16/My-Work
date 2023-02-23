import React from 'react';
import {useState} from 'react'
import ReactDOM from 'react-dom/client';
import './index.css';
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

  function NewForm(){
    const[name,upName]=useState('')
    const[age,upAge]=useState('')
    const[email,upEmail]=useState('')
    const[pass,upPass]=useState('')
    const[cpass,upCpass]=useState('')

const handleChangeName=(e)=>{
  upName(e.target.value)
}
const handleChangeAge=(e)=>{
  upAge(e.target.value)
}
const handleChangeEmail=(e)=>{
  upEmail(e.target.value)
}
const handleChangePassword=(e)=>{
  upPass(e.target.value)
}
const handleChangeConPass=(e)=>{
  upCpass(e.target.value)
}
const handleSubmit=(e)=>{
  if(pass!=cpass){
    alert(`Password not matched`)
  }
  else{alert(`Success`)}

  e.preventDefault();
}
    return(
    <div className='container w-50 p-4 text-center'>
      <form onSubmit={(e)=>{handleSubmit(e)}}>
        <h1>Sign Up form</h1>
        
          <App/>
        
        <br/>
        <label className='form-label'>Name:</label>
        <br/>
        <input type="text" className='form-input' onChange={(e)=>{handleChangeName(e)}} value={name} required></input>
        <br/>
        <label className='form-label'>Age:</label>
        <br/>
        <input type="text" className='form-input' onChange={(e)=>{handleChangeAge(e)}} value={age} required></input>
        <br/>
        <label className='form-label'>E-mail:</label>
        <br/>
        <input type="email" className='form-input' onChange={(e)=>{handleChangeEmail(e)}} value={email} required></input>
        <br/>
        <label className='form-label'>Password:</label>
        <br/>
        <input type="password" className='form-input' onChange={(e)=>{handleChangePassword(e)}} value={pass} required ></input>
        <br/>
        <label className='form-label'>Confirm Password:</label>
        <br/>
        <input type="password" className='form-input' onChange={(e)=>{handleChangeConPass(e)}} value={cpass} required></input>
        <br/>
        <input type="submit" ></input>
      </form>
    </div>
    )
  }

  root.render(<NewForm/>)
