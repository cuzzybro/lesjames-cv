import React from 'react'
import TypewriterComponent from 'typewriter-effect'

const NextTypeWriter = () => {
  return (
    <TypewriterComponent
        onInit={(typewriter) => {
            typewriter
                .typeString('Senior Test Analyst')
                .pauseFor(1000)
                .deleteAll()
                .typeString('Test Automation Engineer')
                .pauseFor(1000)
                .deleteAll()
                .typeString('Test Professional')
                .start()
        }}
    />
  )
}

export default NextTypeWriter