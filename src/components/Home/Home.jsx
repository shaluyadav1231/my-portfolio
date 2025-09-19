import React from 'react'
import avtarImg from "../../assets/7358602-removebg-preview.png"
import TextChange from '../../TaxtChanger'
const Home = () => {
  return (
    <div className='text-white flex w-full justify-between items-start p-10 md:p-20'>
        <div className='md:w-2/4 md:pt-10'>
        <h1 className='text-3xl md:text-6xl leading-normal tracking-tighter'><TextChange /></h1>
        <p className='text-sm md:text-2xl tracking-tight'>Frontend Developer </p>
        <p className='text-sm md:text-2xl tracking-tight'>I create beautiful and responsive websites using HTML, CSS, JavaScript, and React.I design, code, and turn ideas into reality. </p>
        <button 
        className='mt-5 md:md-10 text-white py02 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]'>
          <a href="#Footer">Hire Me</a>
          
          </button>
        </div>
        <div><img className='' src={avtarImg} alt="" /></div>
    </div>
  )
}

export default Home