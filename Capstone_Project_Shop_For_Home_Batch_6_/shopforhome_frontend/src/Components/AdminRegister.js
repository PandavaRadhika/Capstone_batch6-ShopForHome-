

import React, { Component } from 'react'


export default class AdminRegister extends Component {
  constructor(props){    
    super(props);
    this.state={     //created state  
        adminId:"",
        adminName:"",
        adminMail:"",
        password:"",
      
    }
    
    //create Ref var
    this.idRef = React.createRef();
    this.adminNameRef=React.createRef();
    this.emailRef = React.createRef();
    this.passwordRef = React.createRef();
    // this.genderRef = React.createRef();
}

addPostApi =(e)=>{
    e.preventDefault();
    console.log(this.state)
    fetch("http://localhost:8081/admin/adminregister",
         { 
            method: 'POST', 
            body: JSON.stringify({ 
               
                adminName:this.adminNameRef.current.value,
                adminMail:this.emailRef.current.value,

                password:this.passwordRef.current.value,

               
            }), 
            headers: { "Content-Type": 'application/json' } })
            .then(res=>res.json()) 
            .then(data => console.log(data));
           
            alert("User registered successfully")
            
}
render() {
return (
  <>
  

  <div className='ur'>
    
      <form className='container col-md-5' onSubmit={this.addPostApi}>
            <h1>Admin Registration</h1>
            <div className='form-group'>
                <label>Enter AdminName</label>
                <input type="text" name='name' required placeholder='Enter Name' className='form-control'  ref={this.adminNameRef} />
            </div>

            <div className='form-group'>
                <label>Enter email</label>
                <input type="email" name="email" required placeholder='abc@gmail.com' className='form-control'  ref={this.emailRef} />
            </div>

            <div className='form-group'>
                <label>Enter password</label>
                <input type="password" name='password' required  placeholder='Enter Password' className='form-control' pattern='[A-Z][a-z][@][.][1-10]' ref={this.passwordRef} />
            </div>

           
          <div className='justify-content centre'>
          <button type="submit" className='btn btn-primary'>Register as Admin</button>
          </div>
        </form>


  </div>
  </>
)
}
}
