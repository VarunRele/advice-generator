import React, {useState} from 'react'
import divdesktop from './assets/pattern-divider-desktop.svg'
import divmobile from './assets/pattern-divider-mobile.svg'
import dice from './assets/icon-dice.svg'

const App = () => {
  const [advice, setAdvice] = useState("Click dice to get a advice.")
  const [count, setCount] = useState(0)

  const handleAdviceClick = async () => {
    const response = await fetch('https://api.adviceslip.com/advice')
    const data = await response.json()
    const adviced = data.slip.advice

    if (advice !== adviced) {
      setAdvice(adviced)
      setCount(count + 1)
    }
    
  }

  return (
    <div className="flex h-screen items-center justify-center">
      <div id='Main' className="container mx-4 bg-dark-grayish-blue w-[340px] md:w-[32rem] rounded-lg shadow-lg px-3  ">
        
        {/* Title with advice number */}
        <div id="title" className='my-8 text-neon-green text-xs text-center tracking-tight font-semibold'>
          A D V I C E <span className={`mx-3 ${count === 0 ? 'hidden' : 'span'}`}># { count }</span>
        </div>

        {/* Main advice section */}
        <div className="advice text-2xl text-light-cyan font-manrope text-center  -mt-3">
          "{ advice }"
        </div>

        {/* hr + pause icon */}
        <div id="hr" className='my-7 flex justify-center'>
          <img src={divmobile} alt="divider" className='md:hidden' />
          <img src={divdesktop} alt="divider" className='hidden md:block' />
        </div>

        {/* button of dice */}
        <div id='dice' className='flex justify-center'>
          <button onClick={handleAdviceClick} className='bg-neon-green rounded-full p-3 w-16 h-16 -mb-8 hover:drop-shadow-glow-neon transition-all'>
            <img src={dice} alt="dice" className='mx-auto' />
          </button>
        </div>
        
        
      </div>
    </div>
  )
}

export default App