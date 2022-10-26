import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import { SiLinkedin } from 'react-icons/si'
import { MdEmail,MdAttachEmail } from 'react-icons/md'
import {GoMarkGithub} from "react-icons/go"
import "./contact.scss"

export default function Contact() {
  const [errors, setErrors] = useState({
    nameError:false,
    gmailError:false,
    textError:false
  })
  const [mail, setMail] = useState({
    name:"",
    mail:"",
    text:""
  }) 
  const form = useRef()
  const [viewForm, setViewForm] = useState(false)
  const close = ()=>{
    setViewForm(!viewForm)
  }
  const onChange = (e)=>{
    setMail({
      ...mail,
      [e.target.name]:e.target.value
  });
  }
  const submit= (e)=>{
    e.preventDefault();
    if(mail.name.length< 2) setErrors({...errors, nameError:true })
    else{setErrors({...errors, nameError : false })}
    if(true){}
    emailjs.sendForm('service_zvm356w', 'template_on8m9u6', form.current, 'Z1rdDC2a_PHl3Bcqq')
      .then((result) => {
        console.log(result.text)
          if(result.text ==="OK"){
            setViewForm(false)
            setMail({
              name:"",
              mail:"",
              text:""
            })

          }
      }, (error) => {
          alert(error.text);
      });
  }
  /* const submit= (e)=>{
    e.preventDefault();
    console.log(mail)
    setMail({
      name:"",
      mail:"",
      text:""
    })
    setViewForm(false)
  } */
  return (
    <section id="contact"className="contact white">
    <div className='container'> {/*CLASE ERA TEXBOB*/}
      <h1 className='stroke neon title1'>Contact</h1>
      <div className='contacts'>
        <div className='form a2'>
          <p>In this section you can view the metods for contact me or you can send my a email whit de form </p>
      
        </div>
        <div className=' IconsContainer'>
          <a className='contactIcon' href='mailto:japr0990@gmail.com' ><MdEmail className=' iconC iconEmail'/>Email</a>
          <a className='contactIcon' onClick={()=>close()}><MdAttachEmail className=' iconC iconEmail'/>Contact me</a>
          <a className='contactIcon' href='https://www.linkedin.com/in/perezjoeldev/' ><SiLinkedin className=' iconC iconLinkedIn'/>LinkedIn</a>
          <a className='contactIcon' href='https://github.com/Fenrir0990' ><GoMarkGithub className=' iconC iconGitHub'/>GitHub</a>
        </div>
        <div className='contactForm' style={{left:viewForm? "20px" : "-500px"}}>
          <form ref={form} className='form' onSubmit={(e)=>submit(e)}>
            <h3 className='formTitle'> Contact me </h3>
            <p className = "feedback">Feedback is appreciated. If you have any advice to improve my portfolio I would be happy to know it</p>
            <button onClick={()=>close()} type='button' className='btn btn-primary ' id='btnC'>✗</button>
              <div className="form__group field">
                <input type="input" value={mail.name} name="name" onChange = {(e)=>onChange(e)} className="form__field" placeholder="Name" id='name' required />
                <label name="name" className="form__label">Name</label>
              </div>
              {errors.nameError?<p className='error'>Need the name</p>:null}
              <div className="form__group field">
                <input value={mail.mail} name="mail" onChange = {(e)=>onChange(e)} type="input" className="form__field" placeholder="Email" id='email' required />
                <label  name="mail"  className="form__label">Email</label>
              </div>
              <div className="form__group field">
                <textarea value={mail.text} name="text" onChange = {(e)=>onChange(e)} rows="10" className="form__field" placeholder="text"  id='text' required />
                <label name="text" className="form__label">Text</label>
              </div>
              <button type='submit' className='btn btn-primary btnCs'>Send</button>
          </form>
        </div>
      </div>
    </div>
    </section>
  )
}
