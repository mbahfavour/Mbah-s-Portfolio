import React, { useState } from 'react'
import Divider from '../components/Divider'
import { AiOutlineGithub, AiOutlineLinkedin, AiOutlineMail, AiOutlineTwitter } from 'react-icons/ai';


const Contacts = () => {

  const [emailName, setEmailName] = useState('')
  const [emailAddress, setEmailAddress] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div className='mt-20 h-screen relative font-univers'>
      <div className='flex items-center justify-center font-extrabold'>
        <h1 className='text-3xl'>
          contact.
        </h1>
      </div>
      <Divider />
      <div className='mb-auto md:flex px-20 mt-10'>
        <div className=''>
          <div>
            <h4>Send me an email</h4>
          </div>
          <div className=''>
            <form className='' onSubmit={handleSubmit} >
              <label>
                Name:
                <input type="text" value={emailName}  onChange={(e)=> setEmailName(e.target.value)} />
              </label>
              <label>
                Email Address:
                <input type="text" value={emailAddress}  onChange={(e)=> setEmailAddress(e.target.value)} />
              </label>
              <button type='submit'>Send</button>
            </form>
          </div>
        </div>
        <div className='mt-10'>
          <div>
            <h4 className='text-md ml-10'>connect with me on social media.</h4>
          </div>
          <div className='flex mt-5 items-center justify-center'>
            <div>
              <AiOutlineMail size={24} />
            </div>
            <AiOutlineLinkedin size={24} />
            <AiOutlineGithub size={24} />
            <AiOutlineTwitter size={24} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contacts