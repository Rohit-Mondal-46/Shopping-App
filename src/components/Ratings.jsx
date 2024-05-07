import React from 'react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'

function Ratings({ratings,onClick,style}) {
  return (
    <>
        {[...Array(5)].map((_,i)=>(
            
                <span className={`inline-block ${style}`} key={i} onClick={()=>onClick(i)}>
                    {
                        (ratings > i) ? (
                            <AiFillStar fontSize={"20px"}/>

                        ):(
                            <AiOutlineStar fontSize={"20px"}/>
                        )
                    }
                </span>
        ))}
    </>
  )
}

export default Ratings