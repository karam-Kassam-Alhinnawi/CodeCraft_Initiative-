import { motion } from "framer-motion"
import { t } from "i18next"

const StatsMotionDiv = ({counter}) => {
  return (
    <div>
        <motion.div initial={{opacity: 0, y: -30}} whileInView={{opacity: 1, y:0}} transition={{duration: 0.6}} className='text-center mb-16'>
                  <h2 className='text-5xl md:text-6xl font-bold text-white mb-6'>
                    Our <span className="text-black">{t("impact")}</span>
                  </h2>
                  <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
                    {t("impact_data")}
                  </p>
               </motion.div>
         
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <motion.div initial={{opacity: 0, y: 50}} whileInView={{opacity: 1, y:0}} transition={{type: "spring", stiffness: 100, delay: 0.1}} className='group'>
                <div className="bg-white border-2 border-blue-500 rounded-2xl p-8 text-center hover:shadow-2xl transition-all duration-500 hover:scale-105">
                  <div className="text-4xl mb-4">👨‍🎓</div>
                  <motion.div className='text-5xl font-bold text-black mb-2'
                  key={counter.students}
                  initial={{scale: 1.2}}
                  animate={{scale: 1}}
                  transition={{type: "spring", stiffness: 200}}
                  >
                   {counter.students}+
                  </motion.div>
                  <p className="text-gray-600 text-lg font-semibold">{t("students_empowered")}</p>
                  <div className='w-16 h-1 bg-blue-500 mx-auto mt-5 rounded-full'></div>
                 
                </div>
        
              </motion.div>
        
              <motion.div
              initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
                    className="group">
              
                 <div className='bg-white border-2 border-white rounded-2xl p-8 text-center hover:shadow-2xl transition-all duration-500 hover:scale-105'>
                 
                 <div className="text-4xl mb-4">📚</div>
                 
                 <motion.div
                 className='text-5xl font-bold text-black mb-2'
                 key={counter.courses}
                 initial={{scale: 1.2}}
                 animate={{scale: 1}}
                 transition={{type: "spring", stiffness: 200}}
                 ></motion.div>
                 
                 {counter.courses}+
              <p className='text-gray-600 text-lg font-semibold'>{t("courses_avalible")}</p>
             </div>
              </motion.div>
        
              <motion.div
              initial={{opacity: 0, y:50}}
              whileInView={{opacity: 1, y:0}}
              transition={{type: "spring", stiffness: 100, delay:0.3}}
              className='group'
              >
        
                <div className="bg-white border-2 border-white rounded-2xl p-8 text-center hover:shadow-2xl transition-all duration-500 hover:scale-105">
                  <div className="text-4xl mb-4">🤝</div>
                  <motion.div
                   className='text-5xl font-bold text-black mb-2'
                   key={counter.volunnters}
                   initial={{scale: 1.2}}
                   animate={{scale: 1}}
                   transition={{type: "spring", stiffness: 200}}
                  >
                    {counter.volunnters}+
        
                  </motion.div>
        
                  <p className='text-gray-600 text-lg font-semibold'>{t("volunnters")}</p>
                  <div className='w-16 h-1 bg-blue-500 mx-auto mt-4 rounded-full'></div>
                </div>
        
              </motion.div>
            </div>
        
            <motion.div
            initial={{opacity: 0, y:30}}
            whileInView={{opacity: 1, y:0}}
            transition={{delay: 0.8, duration: 0.6}}
            className='text-center mt-16'
            >
        
              <p className='text-blue-100 text-lg mb-6'>Join Our Mission to Bridge the Digital Divide</p>
              
            <motion.button
            whileHover={{scale: 1.05}}
            whileTap={{scale: 0.95}}
            className='bg-black text-white px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300'>
              Start Your Journey with CodeCraft Today!
            </motion.button>
        
            </motion.div>
        
    </div>
  )
}

export default StatsMotionDiv