
import React, { useState } from 'react';

const Contact = () => {

  const [formdata,setFormdata] = useState({
    name:'',
    email:'',
    message:'',
  });

  const handlechange = (e) => {
    const {name,value} = e.target

    setFormdata({...formdata,[name] : value})
  }

  const handlesubmit = (e) => {
    e.preventdefault()
console.log(formdata)


setFormdata({
  name:'',
  email:'',
  message:''
})
}
    return (
        <div className='contact' id='contact'>
              <h2>Contact Me</h2>
            <div className="contact-container">
              <form className='form-group'> 
                 <div className='form-in'>
                   <label htmlFor='name' >Name :</label>
                   <input 
                   type='text'
                   id='name'
                   name='name'
                   value={formdata.name}
                   onChange={handlechange}
                   required
                   />
                  <div className='form-group'>
                    <label htmlFor='email'>Email :</label>
                   <input 
                   type='text'
                   id='email'
                   name='email'
                   value={formdata.email}
                   onChange={handlechange}
                   required
                   />
                   </div>

                   <div className='form-group'>
                    <label htmlFor='message'>Message :</label>
                    <input
                    type='text'
                    id='message'
                    name='message'
                    value={formdata.message}
                    onChange={handlechange}
                    required
                    />
                   </div>
                   <button onSubmit={handlesubmit}>SUBMIT</button>
                 </div>
              </form>
            </div>
        </div>
    );
};

export default Contact;