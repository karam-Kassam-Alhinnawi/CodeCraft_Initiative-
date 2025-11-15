import { useTranslation } from "react-i18next"
import logo from "../../assets/LogoPng.png"
import i18n from "../../i18n";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [hamburgerMenu, setHamburgerMenu] = useState(null);
  const navigate = useNavigate();

  const {t} = useTranslation();

  const handleLangChange = (event) => {
    const newLang = event.target.value;
    i18n.changeLanguage(newLang);
    document.documentElement.language = newLang;
  }

  // Styling the Button & the links
    const navLinkStyle = ({isActive}) => `cursor-pointer hover:underline transition duration-1000 ${isActive            
                ? 'bg-blue-50 text-blue-600 border-b-2 border-blue-600' 
                : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
    }`

    const buttonStyle = "cursor-pointer bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2.5 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"

  return (
    <div  lang={i18n.language} className={` sticky top-0 z-100 pt-2 w-full ${i18n.language == "ar" ? "rtl" : "ltr"}`}>
      <div className="bg-white w-[96%] md:w-[94%] lg:w-[90%] mx-auto rounded-md px-4 py-2">
        <div className=" flex justify-between items-center ">
      
        <div className="flex items-center gap-x-2">
          <img src={logo} className="w-8" alt="" />
          <p className="font-semibold text-gray-800">{t("name")}</p>
        </div>

        <button className="md:hidden p-2" onClick={() => setHamburgerMenu(!hamburgerMenu)}>
         {hamburgerMenu ? '✕' : '☰'}
        </button>

        <div className="hidden md:flex gap-x-5 text-black">
          <NavLink className={navLinkStyle} to="/">{t("home")}</NavLink>
          <NavLink className={navLinkStyle} to="/about">{t("aboutus")}</NavLink>
          <NavLink className={navLinkStyle} to="/courses">{t("courses")}</NavLink>

        {/* Arabic => English */}
        <div>
            <select onChange={handleLangChange} value={i18n.language}>
              <option value="ar">Arabic</option>
              <option value="en">English</option>
            </select>
        </div>

        </div>
        
        <button onClick={() => navigate("/pr")} className={`hidden md:block ${buttonStyle}`}>{t("StartingLog_In")}</button>
     


        {/* Mobile Screen  */}
      </div>

        <div className={`${hamburgerMenu ? "flex flex-col items-center" : "hidden"} mt-4 md:hidden space-y-2`}>

          <NavLink className={navLinkStyle} to="/">{t("home")}</NavLink>
          <NavLink className={navLinkStyle} to="/about">{t("aboutus")}</NavLink>
          <NavLink className={navLinkStyle} to="/courses">{t("courses")}</NavLink>

        <button onClick={() => navigate("/pr")} className={`w-full ${buttonStyle}`}>{t("StartingLog_In")}</button>

        </div>
      </div>
    </div>
  )
}
     

export default Navbar