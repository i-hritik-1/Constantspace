import React from 'react'
import instructor from "../../../assets/Images/Instructor.png"
import HighlighText from './HighlighText'
import CTAButton from './CTAButton'
import { FaArrowRight } from 'react-icons/fa'
function InstructorSection() {
  return (
    <div className=' mt-16'>
      <div className=' flex flex-row gap-20 items-center'>

        <div className=' w-[50%] '>
          <img 
            src={instructor}
            alt="" 
          />
        </div>

        <div className=' w-[50%] flex flex-col gap-5'>
          <div className=' text-4xl font-semibold  w-[50%] '>
            Become an 
            <HighlighText text={"Instructor"}/>
          </div>

          <p className=' font-medium text-[16px] w-[80%] text-richblack-300'>
            Instructors from around the world teach millions of students on StudyNotion. We provide the tools and skills to teach what you love.
          </p>

          <div className=' w-fit'>
            
          <CTAButton active={true} linkto={"/signup"}>
            <div className='flex flow-row gap-3 items-center'>
              <div className=' text-richblack-900'>
                Start Teaching Today
              </div>
              <FaArrowRight/>
            </div>

          </CTAButton>
          </div>
          
        </div>

      </div>
    </div>
  )
}

export default InstructorSection
