import { useTranslation } from "react-i18next"
import { FaLaptopCode, FaProjectDiagram, FaUsers } from "react-icons/fa"

const Cards = () => {
    const iconMap = {
        FaLaptopCode: <FaLaptopCode/>,
        FaProjectDiagram: <FaProjectDiagram/>,
        FaUsers: <FaUsers/>
    }

    const {t} = useTranslation();
    const cards = t("aboutCards", {returnObjects: true});

  return (
    <>
   {cards.map((card) => (
  <div
    key={card.name}
    className={`col-span-1 flex flex-col rounded-xl w-[360px] md:w-96 mx-0 md:mx-4
         hover:shadow-blue-200 shadow-2xl hover:scale-105 transition duration-300 bg-white py-12 items-center justify-center p-4 ${
      card.up ? "lg:-translate-y-4 " : ""
    }`}
  >
    <p className="text-5xl mb-4">{iconMap[card.icon]}</p> 
    <p className="font-bold text-center mb-2">{card.name}</p> 
    <p className="text-center text-gray-700">{card.detail}</p> {/* description */}
  </div>
))}

    </>
  )
}

export default Cards