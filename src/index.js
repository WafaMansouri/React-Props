import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Profile from './profile/Profile';
import image from './wafa.png'
import * as serviceWorker from './serviceWorker';

const myProfile={fullName:"Wafa Mansouri", bio:"",
profession:"Civil Engineer"}

const handleName=(profile)=>{alert(`Your name is ${profile.fullName}`)};
ReactDOM.render(
  <React.StrictMode>
    <Profile profile={myProfile} handleName={handleName}>
      <img src={image} alt="profile photo" style={{width:300}}></img></Profile>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
