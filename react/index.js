import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const nav=(
<div className='container'>
  <div className='nav'>
    <App/>
	<nav>
	<a href="#">Home</a>
	<a href="#">About</a>
	<a href="#">Contact</a>
	</nav>
	</div>

  <h1>Reasons I'm excited to learn React</h1>

  <ol>
    <li>It's a popular library, so I'll be ableto fit in with the cool Kids!</li>
    <li>I'm more likely to get a job as a developer if I know react</li>
  </ol>
  <hr></hr>
  <footer>
    <p>
      &copy; 2023 Nachimuthu development.All rights revserved
    </p>
  </footer>
  </div>
  )
  const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(nav);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
/*
  <React.StrictMode>
    <App />
  </React.StrictMode> */