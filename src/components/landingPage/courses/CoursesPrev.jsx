import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import image from "../../../assets/aboutWeb.webp"

const CoursesPrev = () => {
  const courses = [
    {name: "Frontend Development", description: "Learn the basics of HTML, CSS, and JavaScript.", mentor: "Karam Alhinnawi"},
    {name: "Frontend Development Advanced", description: "Dive deeper With Mentor X into React, and modern react libraries.", mentor: "AbdAllatif Salas"},
    {name: "Graphic Design", description: "Mater the princples of design tehory, and learn tools like Photoshop and Illustrator.", mentor: "Kareem Morshed"}
  ]
  const navigate = useNavigate();

  const containerVariants = {
    hidden: {opacity: 0},
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const cardVariants = {
    hidden: {y:50, opacity: 0},
    visible: {
      y:0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  }

  return (
    <section className="relative py-20 bg-linear-to-br from-blue-500 to-blue-700 overflow-hidden">
      <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
   
    <div className="relative z-10 container mx-auto px-6">
      <motion.div
      initial={{opacity: 0, y:-30}}
      whileInView={{opacity: 1, y: 0}}
      transition={{duration: 0.6}}
      className="text-center mb-16"
      >

        <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
          Our <span className="text-black">Courses</span>
        </h2>

        <p className="text-xl text-blue-100 max-w-2xl mx-auto">Start Your Journey in Teach With Our Arabic-First, Project-Based Curriculum</p>
        

      </motion.div>

      <motion.div variants={containerVariants} initial="hidden" whileInView='visible' viewport={{once: true}}
       className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 max-w-7xl mx-auto"
      >

        {courses.map((course, index) => (
           <motion.div key={index} variants={cardVariants} whileHover={{y: -10, scale: 1.02, transition: {type: "spring", stiffness: 300}}} className="group">
           
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border-2 border-white hover:border-blue-300 transition-all duration-300 h-full flex flex-col">
                   {/* Courses Image  */}
                   <div className="relative overflow-hidden">
                  
                    <img src={image} className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" alt="" />
                    <div className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">Popular</div>
                  
              </div>

              <div className="p-6 flex flex-col grow">
                <div className="grow">
                   <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 trnasition-colors">
                    {course.name}
                   </h3>

                   <p className="text-gray-600 mb-4 leading-relaxed">{course.description}</p>

                   <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 text-sm font-bold">👤</span>
                      </div>
                      <span className="text-sm text-gray-700 font-medium">
                        Mentor: {course.mentor}
                      </span>
                   </div>

                   <motion.button whileHover={{scale: 1.05}} whileTap={{scale: 0.95}} onClick={() => navigate("/courses")}
                     className="w-full bg-blue-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                     Enroll Now
                   </motion.button>

                </div>
              </div>
        </div>
           </motion.div>
        ))}
      </motion.div>

      <motion.div
      initial={{opacity: 0, y:30}} whileInView={{opacity: 1, y:0}}
      transition={{delay: 0.6, duration: 0.6}} className="text-center mt-12"
      >

        <motion.button
        whileHover={{
          scale: 1.05, backgroundColor: "#ffffff", color: "#0000000"
        }}
        whileTap={{scale: 0.95}} onClick={() => navigate("/courses")}
        className="bg-black text-white hover:text-black px-8 py-4 rounded-lg font-bold text-lg border-2 border-black hover:border-white transition-all duration-300 shadow-2xl">
          Explore All Courses
        </motion.button>

      </motion.div>


    </div>
    </section>
  )
}

export default CoursesPrev