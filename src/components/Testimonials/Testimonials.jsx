import { h1 } from "framer-motion/client";
import { t } from "i18next"
import { PiQuotes } from "react-icons/pi"



const Testimonials = () => {
    const data = t("reviews", {returnObjects: true});

  return (
    <div className="py-10 bg-[#288cf7]">
        <h2 className="text-white drop-shadow-[0_3px_6px_rgba(0,0,0,0.25)] text-5xl font-bold text-center">
            {t("testimonials")}
        </h2>

      <div className="grid grid-cols-1 grid-rows-1 lg:grid-cols-3 lg:grid-rows-2 lg:mx-10 my-10">

   {data.map((info) => (
           <div className="card mx-auto w-[300px] h-[250px] lg:w-[450px] lg:h-[300px] bg-white p-5 mt-5 hover:scale-[102%] transition-all duration-300 rounded-lg drop-shadow-2xl flex flex-col justify-between">
              <div >
          <PiQuotes fill="blue"/>
                <p className="mt-8">{info.review}</p>
              </div>
             
              <div>
                <p className="font-bold">{info.name}</p>
              <p className="text-gray-700">{info.course}</p>
              </div>
          
           </div>
      
   ))}

   
        </div>
       

    </div>
  )
}

export default Testimonials