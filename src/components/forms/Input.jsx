import React from 'react'

const Input = ({register, label, required, type="text", placeholder, pattern, message}) => {
  return (
    <div className='flex flex-col gap-2'>
        <label htmlFor="input" className=' font-semibold'>{label}</label>
        <input {...register(label, {required})}
        type={type}
        placeholder={placeholder}
        className='px-3 py-1 rounded-md border border-gray-200  focus:border-none focus:ring-1 focus:ring-amber-400 focus:outline-none focus:shadow-md transition duration-200' 
        />
    </div>
  )
}

export default Input
