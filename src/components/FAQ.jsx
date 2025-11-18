import { motion } from "framer-motion"
import { useState } from "react"

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {question: "Is CodeCraft Really Free?", 
     answer: "Yes! All Our Courses Are Completely Free. We Believe Education Should Be a Right To Everyone in The Arab World."  
    },
    {question: "Do I Need Prior Expereince to Enroll In the Courses?",
        answer: "Not At All! We Offer Courses for Complete Beginners As Well As Advanced Topics for Those With Some Experience"
    },
    {question: "Are the Courses Taught in Arabic or English?",
        answer: "All Our Courses Are in Arabic, Tailored Specifically for Arabic-Speaking Students to Ensure Better Understanding and Engagement."
    },
    {question: "How Long Does Each Course Take To Complete?",
        answer: "Most Courses Take 3-4 Months to Complete, Depending On Your Own Pace. You Can Learn At Your Own Schedule."
    },
    {
        question: "Will I Receive a Certificate After Completing a Course?",
        answer: "Yes! Upon Successfuly Completing a Course, You Will Receive a Certificate!"
    },
    {question: "What if I Need Help During the Course?",
        answer: "We Have a Dedicated Community of Mentors and Fellow Students Who Are Ready To Help You. We Believe in TeamWork!"
    }
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  }

  return (
    <section className="relative py-20 bg-white overflow-hidden">
     <div className="absolute top-0 left-0 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl"></div>
     <div className="absolute bottom-0 right-0 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl"></div>

     <div className="relative z-10 container mx-auto px-6">
        <motion.div initial={{opacity: 0, y: -30}}
        whileInView={{opacity: 1, y:0}} transition={{duration: 0.6}} className="text-center mb-16"
        >

            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 flex flex-col gap-4">
                Frequently Asked <span className="text-blue-500">Questions</span>
            </h2>

            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Everything You Need To Know About Getting Started With CodeCraft
            </p>

        </motion.div>

        <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
                <motion.div
                 key={index} initial={{opacity: 0, y:20}} whileInView={{opacity: 1, y:0}}
                 transition={{duration: 0.5, delay: index * 0.1}}
                 className="border border-gray-200 rounded-2xl hover:border-blue-300 transition-all duration-300"
                >

                <button onClick={() => toggleFaq(index)}
                 className="w-full p-6 text-left flex justify-between items-center hover:bg-blue-50/50 transition-colors duration-300 rounded-2xl">
                    <h3 className="text-lg md:text-xl font-semibold text-gray-900 pr-4">{faq.question}</h3>
                    <motion.div animate={{routate: openIndex === index ? 180 : 0}}
                     transition={{duration: 0.3}} className="shrink-0 w-6 h-6 text-blue-500"
                    > ▼ </motion.div>
                 </button>

                 <motion.div
                 initial={false} animate={{height: openIndex === index ? "auto" : 0, opacity: openIndex === index ? 1 : 0}}
                 transition={{duration: 0.3}} className="overflow-hidden"
                 >
                   <div className="px-6 pb-6">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                   </div>

                 </motion.div>


                </motion.div>
            ))}
        </div>

        <motion.div
        initial={{opacity: 0, y: 30}} whileInView={{opacity: 1, y:0}}
        transition={{delay: 0.8, duration: 0.6}} className="text-center mt-12"
        >

        <p className="text-gray-600 text-lg mb-6">Still Have Questions? We're Here To Help!</p>
            
        <motion.button
        whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}
        className="bg-blue-500 text-white px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
        >
             Contact Our Team!
        </motion.button>  

        </motion.div>


     </div>
    </section>
  )
}

export default FAQ