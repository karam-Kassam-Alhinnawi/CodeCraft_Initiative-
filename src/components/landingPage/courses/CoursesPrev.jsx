import image from "../../../assets/aboutWeb.webp"

const CoursesPrev = () => {
  const courses = [
    {name: "Frontend Development", description: "Learn the basics of HTML, CSS, and JavaScript.", mentor: "Karam Alhinnawi"},
    {name: "Frontend Development Advanced", description: "Dive deeper With Mentor X into React, and modern react libraries.", mentor: "AbdAllatif Salas"},
    {name: "Graphic Design", description: "Mater the princples of design tehory, and learn tools like Photoshop and Illustrator.", mentor: "Kareem Morshed"}
  ]
  return (
    <div>
      <h2 className="text-blue-500 drop-shadow-[0_3px_6px_rgba(0,0,0,0.25)] text-5xl font-bold text-center mt-10">
                 Our Courses:
      </h2>

      <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-5 my-10 lg:mx-10">
        {courses.map((course) => (
          <div className="w-[400px] h-[400px] shadow-lg rounded-lg">
            <img src={image} className="w-full h-[250px]" alt="" />
            <div className="flex flex-col items-start justify-start px-2 py-3">

             
                <h3 className="font-bold">{course.name} Course</h3>
              

              <p className="text-gray-500 pt-4">{course.description}</p>
            </div>
          </div>
        ))}
      </div>


    </div>
  )
}

export default CoursesPrev