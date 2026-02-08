import React from 'react'

const TextArea = ({label, register, required, rows, placeholder}) => {
  return (
    <div className='flex flex-col gap-2'>
        <label htmlFor="input" className=' font-semibold'>{label}</label>
        <textarea {...register(label, {required})}
        rows={rows}
        placeholder={placeholder}
        className='px-3 py-1 border border-gray-200  focus:border-none rounded-md focus:ring-1 focus:ring-amber-400 focus:outline-none focus:shadow-md transition duration-200' 
        />
    </div>
  )
}

export default TextArea
