import { Link } from "react-router-dom";

const Footer = () => {
  const date = new Date();

  return (
    <div className="flex flex-col lg:flex-row justify-around gap-y-10 lg:gap-y-0 items-start lg:items-center px-4 lg:px-0 py-10 bg-blue-500">
      <div>
          <h2 className="text-4xl text-white font-bold">CodeCraft Initiative</h2>
          <p className="text-white">© CodeCraft {date.getFullYear()} All Rights Reserved</p>
          <a href="ig"><i class="fa fa-instagram" aria-hidden="true"></i></a>
       </div>

      <div>
        <ul className="flex flex-col gap-y-4">
            <Link to="/" className="text-white text-lg cursor-pointer underline hover:scale-105 transition-all duration-300">Home</Link>
            <Link to="/aboutus" className="text-white text-lg cursor-pointer hover:scale-105 underline transition-all duration-300">About Us</Link>
            <Link to="/courses" className="text-white text-lg cursor-pointer hover:scale-105 underline transition-all duration-300">Courses</Link>
        </ul>
      </div>
    </div>
  )
}

export default Footer