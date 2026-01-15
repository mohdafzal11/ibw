'use client'

import { FormEvent } from 'react'

export default function RegistrationForm() {
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    // Handle form submission - you'll need to create an API route for this
    console.log('Form submitted:', formData.get('email'))
  }

  return (
    <form onSubmit={handleSubmit} className="formCustom">
      <input 
        type="email" 
        name="email" 
        placeholder="Please Enter your Email" 
        required 
        className="form-control"
      />
      <button type="submit" className="btn btn-primary">
        <div className="btn-inner">Register</div>
      </button>
    </form>
  )
}
