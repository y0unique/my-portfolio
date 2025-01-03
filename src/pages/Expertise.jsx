import React, {useRef, useEffect} from 'react'

//framer motion
import {motion, useAnimation, useInView} from 'framer-motion'

import {data} from '../Datas'
//icons
import { SiBlender, SiTailwindcss  } from "react-icons/si";
import { DiJavascript, DiCss3 , DiPython, DiGit , DiReact, DiPhotoshop, DiCode} from "react-icons/di";

function Expertise() {
    const ref = useRef(null) //for wrapper 
    //animate when scrolled
    const isInView = useInView(ref, {once:true});
  
    const mainAnimation = useAnimation();
  
    //if the section is in view do the animation
    useEffect(() => {
  
      if (isInView) {
        mainAnimation.start('visible')
      }
    }, [isInView])

    return (
        <>
    {/* <section className='container expertise' id='expertise'> */}
        <div ref={ref} className='skills-container'>
            {data.icon.map((item, index) =>(
                <motion.div key={index} className='skills-content'
                    variants={{
                        hidden: { y: 100, opacity: 0 },
                        visible: { y: 0, opacity: 1 }
                        }}
                    initial='hidden'
                    animate={isInView ? 'visible' : 'hidden'}
                    transition={{ duration: 1, delay: .25 * index }}
                >
                    <div className='skills-info'>
                        <i>{item.icons}</i>
                        <h4>{item.percent}</h4>
                    </div>
                    <h4 className='title'>{item.title}</h4>
                </motion.div>
            ))}  
        </div>
    {/* </section> */}
    </>
  )
}

export default Expertise