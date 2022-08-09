import React from 'react'


const HomePage = () => {
  return (
    <div className='border md:mx-10'>
      <div className='flex h-40  text-5xl md:text-7xl font-univers'>
        <h1 className=' font-normal px-20 pt-20 md:p-20 animate-pulse'>software engineer,</h1>
        <div className='border h-60 md:h-60 w-80 md:ml-20'>
          <div className='mt-3 md:mt-10 px-5 md:px-7'>
            <h4 className='text-xs'>Languages, Framework and Technologies</h4>
            <div className='border mt-2 md:mt-4'></div>
            <div className='text-xs mt-5 leading-4'>
              <p>HTML5 | CSS | JavaSript | Sass | Boostrap | Tailwind CSS | ReactJS |React Native | Python | Flask |
                MySql | Git | Github 
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='border mt-20 md:mt-20'></div>
      <div className='border mt-5 md:mt-10'></div>
      
      <div className='flex text-3xl md:text-5xl'>
        <div className='border h-60 md:h-60 w-80'>
          <div className='mt-6 px-5'>
            <p className='text-xs'>"No problem can withstand the assault of sustained thinking"</p>
            <h4 className='text-xs italic mt-2'>- Voltaire</h4>
          </div>
          <div className='border mt-6'></div>
          <div className='mt-6 px-5'>
            <p className='text-xs'>"If we are true to ourselves, we will not be false to anyone"</p>
            <h4 className='text-xs italic mt-2'>- Shakespeare</h4>
          </div>
        </div>
        <h1 className='font-normal md:ml-40 px-20 md:p-20 py-10 animate-pulse'>mbah. divinefavour. chiamaka.</h1>
      </div>
    </div>
  )
}

export default HomePage