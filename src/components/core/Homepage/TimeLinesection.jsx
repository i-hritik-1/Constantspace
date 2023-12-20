import React from 'react'
import logo1 from "../../../assets/TimeLineLogo/Logo1.svg"
import logo2 from "../../../assets/TimeLineLogo/Logo2.svg"
import logo3 from "../../../assets/TimeLineLogo/Logo3.svg"
import logo4 from "../../../assets/TimeLineLogo/Logo4.svg"
import timeLineImg from "../../../assets/Images/TimelineImage.png"

const timeLine = [
  {
    Logo:logo1,
    heading:"Leadership",
    Description:"Fully committed to success company."
  },
  {
    Logo:logo2,
    heading:"Responsibility",
    Description:"Fully committed to success company."
  },
  {
    Logo:logo3,
    heading:"Flexibility",
    Description:"Fully committed to success company."
  },
  {
    Logo:logo4,
    heading:"Solve the problem",
    Description:"Fully committed to success company."
  }
]

const TimeLinesection = () => {
  return (
    <div>
        <div className='flex flex-row gap-15 items-center'>
            <div className='w-[45%] flex flex-col gap-5'>
              {
                timeLine.map((element, index) => {
                  return (
                    <div className='flex flex-row gap-4' key={index}>

                      <div className='w-[50px] h-[50px] bg-white flex items-center'>
                        <img src={element.Logo} alt='error'/>
                      </div>

                      <div>
                        <h2 className=' font-semibold tex-[18px]'> {element.heading} </h2>
                        <p className=' text-base'> {element.Description} </p>
                      </div>

                    </div>
                  )
                })
              }
            </div>

            <div className=' relative shadow-blue-200'>
                <img src={timeLineImg} alt="" 
                className=' shadow-white object-cover h-fit'/>

                <div className=' absolute bg-caribbeangreen-700 text-white uppercase flex flex-row py-7
                 left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                  <div className='flex flex-row items-center gap-5 px-7 border-r border-caribbeangreen-300'>
                    <p className=' text-3xl font-bold'>10</p>
                    <p className=' text-caribbeangreen-300 text-sm flex flex-col gap-1'> <span>Years</span> <span>Experience</span></p>
                  </div>

                  <div className='flex flex-row item-center gap-5 px-7 '>
                    <p className=' text-3xl font-bold'>250</p>
                    <p className=' text-caribbeangreen-300 text-sm flex flex-col gap-1'> <span>Types of</span> <span>Courses</span></p>
                  </div>

                </div>
            </div>
            
        </div>

        
    </div>
  )
}

export default TimeLinesection
