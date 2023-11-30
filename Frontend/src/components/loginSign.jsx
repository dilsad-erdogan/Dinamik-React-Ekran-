import React, { useEffect, useState } from 'react'
import './style.css'
import UserCard from './userCard'

import userIcon from './assets/person.png'
import mailIcon from './assets/email.png'
import passwordIcon from './assets/password.png'
import axios from 'axios'

const loginSignPage = () => {
  const [action,setAction] = useState("Login");
  const [page,setPage] = useState("LoginSign");
  const [data,setData] = useState([]);
  const [educator, setEducator] = useState(0);

  useEffect(() => {
    axios.get('http://localhost:8081/')
    .then(res => setData(res.data))
    .catch(err => console.log(err))
  }, [])

  const [values, setValues] = useState({
    educator: educator,
    name: '',
    email: '',
    password: ''
  })

  function controlling(){
    console.log(data);

    data.forEach(element => {
      if((document.getElementById('email').value === element.email) && (document.getElementById('password').value === element.password)){
        setPage("UserCard");
        if(educator === 1){
          alert("Yönetici girişi yapıyorsunuz.");
        }

        return 0;
      }
    });

    if(page!=="UserCard"){
      alert("Bilgilerinizi kontrol ediniz!");
    }
  }

  function handleSubmit(){
    axios.post('http://localhost:8081/users', values)
    .then(res => console.log(res))
    .catch(err => console.log(err))

    location.reload();
  }

  return (
    <>
        <div>
          {page==="UserCard"?<UserCard></UserCard>:
            <div class="container">
              <div class="header">
                <div class="text">{action}</div>
                <div class="underline"></div>
              </div>

              <div class="inputs">
                {
                  action==="Login"?<div></div>:
                    <div class="input">
                      <img src={userIcon} alt="user icon"></img>
                      <input type="text" placeholder='Name' id="name" onChange={e => setValues({...values, name: e.target.value})}></input>
                    </div>
                }

                <div class="input">
                  <img src={mailIcon} alt="mail icon"></img>
                  <input type="email" placeholder='E-mail' id="email" onChange={e => setValues({...values, email: e.target.value})}></input>
                </div>

                <div class="input">
                  <img src={passwordIcon} alt="password icon"></img>
                  <input type="password" placeholder='Password' id="password" onChange={e => setValues({...values, password: e.target.value})}></input>
                </div>

                {
                  action==="Sign Up"?<div></div>:
                    <>
                      <div class="forgot-trainer">Educator login? <a onClick={() => {educator===0?(document.getElementsByClassName("text")[0].innerHTML = "Educator Login"):(document.getElementsByClassName("text")[0].innerHTML = "Login"); setEducator(!educator);}}>Click Here</a></div>
                      <div class="forgot-trainer">Lost Password? <a href="#">Click Here</a></div>
                    </>
                }

                <div class="submit-container">
                  <div class={action==="Login"?"submit gray":"submit"} onClick={() => {action==="Login"?setAction("Sign Up"):handleSubmit()}}>Sign Up</div>
                  <div class={action==="Sign Up"?"submit gray":"submit"} onClick={() => {action==="Sign Up"?setAction("Login"):controlling()}}>Login</div>
                </div>
              </div>
            </div>
          }
        </div>
    </>
  )
}

export default loginSignPage