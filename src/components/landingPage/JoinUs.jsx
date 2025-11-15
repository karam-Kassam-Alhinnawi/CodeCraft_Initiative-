import React from 'react'
import studentImg from "../../assets/studentabout.webp"
import teacherImg from "../../assets/aboutWeb.webp"

const JoinUs = () => {
  return (
    <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 mt-12">
        <div className="relative">
        <img className="w-[450px] rounded-lg shadow-2xl relative" src={teacherImg} alt="" />
        <p className="absolute -translate-y-42 translate-x-[140px] text-2xl text-white font-semibold">For Instructors</p>
        <button className="absolute -translate-y-28 -translate-x-24 text-white hover:bg-black font-bold border-white border-2 px-4 py-2 rounded-3xl transition duration-300">Join Us As a Teacher</button>
</div>      
      
      <div className="relative">
        <img className="w-[450px] rounded-lg shadow-2xl relative" src={studentImg} alt="" />
        <p className="absolute -translate-y-42 translate-x-[140px] text-2xl text-white font-semibold">For Students</p>
        <button className="absolute -translate-y-28 -translate-x-24 text-white hover:bg-black font-bold border-white border-2 px-4 py-2 rounded-3xl transition duration-300">Join Us As a Student</button>
</div>   

    </div>   
    </div>
  )
}

export default JoinUs