import { t } from 'i18next';
import TypewriterComponent from 'typewriter-effect';

const DataSide = () => {
  return (
    
        <div className="flex flex-col lg:w-1/2 space-y-6">

  {/* TITLE */}
  <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight text-black">
    {t("tamkeen")}:
    <br />

    <span className="text-white drop-shadow-[0_3px_6px_rgba(0,0,0,0.25)]">
      <TypewriterComponent
        onInit={(typewriter) => {
          typewriter
            .typeString(t("title"))
            .start();
        }}
        options={{
          delay: 30,
          cursor: "|",
        }}
      />
    </span>
  </h1>

  {/* DIVIDER LINE (Aesthetic touch) */}
  <div className="h-[3px] w-24 bg-white/40 rounded-full"></div>

  {/* DESCRIPTION */}
  <p className="text-lg text-blue-50 leading-relaxed font-medium backdrop-blur-sm">
    {t("desc")}
  </p>


</div>

  )
}

export default DataSide