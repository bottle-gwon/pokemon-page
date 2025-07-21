import { useState } from "react"



export default function FlipCard( {front, back} ) {
  const [flipped, setFlipped] = useState(false)

  return(
    <>
      <div flipped={flipped ? 'flip' : ''} className ={`relative transform-3d w-[200px] h-[200px] duration-[0.5s] ${flipped ? 'rotate-y-180': 'rotate-y-0'}`}>
        <img src={front} className='absolute w-full h-full backface-hidden'/>
        <img src={back} className='w-full h-full backface-hidden rotate-y-180' />
      </div>
      <button onClick={() => setFlipped(prev => !prev)}>뒤집기</button>
    </>
  )
}