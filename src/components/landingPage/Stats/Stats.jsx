import { div } from 'framer-motion/client';
import { t } from 'i18next';
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion';
import StatsMotionDiv from './StatsMotionDiv';

const Stats = () => {
  const [counter, setCounter] = useState({
    students: 0,
    courses: 0,
    volunteers: 0
  });

  const targets = {
    students: 100,      
    courses: 5,        
    volunteers: 15      
  };

  useEffect(() => {
    const duration = 2000; // 2 seconds for all counters
    const steps = 60;

    Object.keys(targets).forEach(key => {
      const target = targets[key];
      const step = target / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += step;
        if (current >= target) {
          setCounter(prev => ({ ...prev, [key]: target }));
          clearInterval(timer);
        } else {
          setCounter(prev => ({ ...prev, [key]: Math.floor(current) }));
        }
      }, duration / steps);

      // Cleanup
      return () => clearInterval(timer);
    });
  }, []); // Empty dependency array - runs once on mount
  
  
  return (
    <div className='stats min-h-[60vh] relative bg-blue-500 flex flex-col lg:flex-row justify-center items-center overflow-hidden py-16'>

     <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
     <div className='absolute bottom-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl'></div>

     <div className="relative z-10 container mx-auto px-6">
       <StatsMotionDiv counter={counter}/>
     </div>
     
    </div>
  )
}

export default Stats