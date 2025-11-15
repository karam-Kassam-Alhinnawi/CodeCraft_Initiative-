import { useNavigate } from "react-router-dom"
import { FaLaptopCode, FaProjectDiagram, FaUsers } from "react-icons/fa"; // professional icons
import Cards from "./Cards";
import { t } from "i18next";
import i18n from "../../../i18n";


const AboutUs = () => {
    const buttonStyle = "cursor-pointer bg-gradient-to-r from-blue-600 to-blue-700 text-white mt-5 px-6 py-2.5 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
    const navigate = useNavigate();

  return (
    <div className="flex flex-col py-10 items-center justify-around text-center md:text-left">

       <div className="py-10 text-center flex flex-col items-center">
          <h2 className="text-4xl mb-4"> {t("aboutname")} <span className="text-blue-700 drop-shadow-[0_3px_6px_rgba(0,0,0,0.25)] text-5xl font-bold text-center">{t("name")}</span> {i18n.language == "ar" ? "؟" : "?"} </h2>
          <p className={`max-w-[70%] ${i18n.language == "ar" ? "font-semibold text-2xl" : "font-medium text-xl"}`}>{t("about_breif")}</p>     
       </div>   

      <div className="grid grid-cols-1 lg:grid-cols-3 mt-5 gap-2 p-2">
       <Cards/>
      </div>

      <p>codecraft is one of a kinds initatiave </p>

       <button onClick={() => navigate("/aboutus")} className={buttonStyle}>{t("get_started")}</button>
    </div>
  )
}

export default AboutUs