import React from 'react'
import Button from '../../Common/Button/Button'
import iphone from "../../../assets/iphone.png"
import gradient from "../../../assets/gradient.png"
import "./styles.css"
import { motion } from "framer-motion"
import { Link } from 'react-router-dom'

const Maincomponent = () => {
  return (
    <div className='flex-info'>
        <div className="left-side">
            <motion.h1 
                className='line1'
                initial={{opacity:0, y: 50}}
                animate={{opacity:1, y: 0}}
                transition={{duration: 0.5}}
            >
            Track Crypto
            </motion.h1>
            <motion.h1
                className='line2'
                initial={{opacity:0, y: 50}}
                animate={{opacity:1, y: 0}}
                transition={{duration: 0.5, delay: 0.5}}
             >Real Time</motion.h1>
            <motion.p
                className='info-text'
                initial={{opacity:0, y: 50}}
                animate={{opacity:1, y: 0}}
                transition={{duration: 0.5, delay:0.75}}
                >Track crypto through a public api in real time. Visit the dashboard to do so!</motion.p>
            <motion.div 
                className="btn-flex"
                initial={{opacity:0, x: 50}}
                animate={{opacity:1, x: 0}}
                transition={{duration: 0.5, delay: 1}}
            >
                <Link to="/dashboard"><Button text={"Dashboard"}/></Link>
                <Button text={"Share"} outlined={true}/>
            </motion.div>
        </div>
        <div className="right-side">
            <motion.img 
            src={iphone}
            className='iphone-img'
            initial={{y: -10}}
            animate={{y: 10}}
            transition={{
                type: "smooth",
                repeatType: "mirror",
                duration: 2,
                repeat: Infinity
            }}
            />
            <img src={gradient} className='gradient-img'/>
        </div>
    </div>
  )
}

export default Maincomponent