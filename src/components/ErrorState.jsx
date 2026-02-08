import React from 'react'

const ErrorState = ({
    title="Something went wrong.",
    description = "We couldn’t load the data. Please try again.",
    action,
    className
}) => {
  return (
    <div className={`py-12 space-y-3 text-center ${className}`}>
      <p className='text-lg text-yellow-200'>{title}</p>
      <p className='text-yellow-500'>{description}</p>
      {action}
    </div>
  )
}

export default ErrorState
