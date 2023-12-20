import React from 'react'
import HighlighText from './HighlighText'
import know_your_progress from "../../../../src/assets/Images/Know_your_progress.png"
import Plan_your_progress from "../../../../src/assets/Images/Plan_your_lessons.png"
import Compare_with_progress from "../../../../src/assets/Images/Compare_with_others.png"
import CTAButton from "../Homepage/CTAButton"

const LearningLanguageSection = () => {
  return (
    <div className=' mt-[130px]'>

      <div className=' flex flex-col items-center mb-32'>

        <div className=' text-4xl font-semibold text-center'>
          Your Swiss Knife for
          <HighlighText text={"learning any language"}/>
        </div>

        <div className=' text-center mx-auto mt-2 text-base text-richblack-600 font-medium w-[70%]'>
          Using spin making learning multiple languages easy, with 20+ languages realistic voice-over, progress tracking, custom schedule and more.
        </div>

      <div className=' flex flex-row items-center justify-center mt-5'>
      <img 
        src={know_your_progress}
        alt="" 
        className=' object-contain relative -right-32'
        />

      <img 
        src={Compare_with_progress}
        alt="" 
        className=' object-contain relative'
        />

      <img 
        src={Plan_your_progress}
        alt="" 
        className=' object-contain relative -left-32'
        />
      </div>

      <div className=' w-fit'>
        <CTAButton active={true} linkto={"/signup"}>
          <div>
            Learn More
          </div>
        </CTAButton>
      </div>
      
    </div>
    </div>
  )
}

export default LearningLanguageSection
