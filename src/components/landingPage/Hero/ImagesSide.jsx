import { t } from "i18next"
import Counter from "./Counter"

const ImagesSide = ({img}) => {
  return (
    <div className='lg:w-1/2 relative flex flex-col items-center justify-center'>

             <div className="hidden md:block h-[450px] md:w-[520px] bg-blue-200 rounded-2xl">
                 <div className='lg:h-[440px] lg:w-[500px] bg-blue-800 rounded-2xl rotate-6 flex items-center justify-center'>
            <img
              src={img}
              className='h-[420px] object-contain -rotate-6 scale-x-[-1] scale-105 '
            />
          </div>
             </div>

          {/* Counter  */}
         <div className="mt-4 rotate-2 inline-flex items-center gap-2
  bg-blue-100 text-black
  px-4 py-2 rounded-lg 
  border border-blue-900 
  shadow-[4px_4px_0px_rgba(30,58,138,1)]">
  
  <span className="text-2xl font-extrabold">
    <Counter target={100}/>
  </span>

  <span className="text-lg font-semibold">{t("count")}</span>
</div>



    </div> 
  )
}

export default ImagesSide