import React from 'react'

const Buttton = ({children,handleSignupAndLogin}) => {
  return (
    <div className='mt-[30px] w-[90%] text-[#FFFFFF] bg-red-400 p-3 rounded-[8px] lg:w-[30%]'>
        <button onClick={handleSignupAndLogin} className='w-full text-Urbanist'>{children}</button>
    </div>
  )
}

export default Buttton