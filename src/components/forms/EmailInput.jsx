import React from 'react'

const EmailInput = ({label, required,register, placeholder}) => {
  return (
    <div className='flex flex-col gap-2'>
        <label htmlFor="email" className=' font-semibold'>{label}</label>
        <input {...register(label, {required:{
          value:true,
          message: "Email is required."
        },
            pattern: {
                value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
                message: "Please enter a valid email."
            }
        })}
        type="email"
        placeholder={placeholder}
        className='px-3 py-1 border border-gray-200  focus:border-none rounded-md focus:ring-1 focus:ring-amber-400 focus:outline-none focus:shadow-md transition duration-200' 
        />
    </div>
  )
}

export default EmailInput
