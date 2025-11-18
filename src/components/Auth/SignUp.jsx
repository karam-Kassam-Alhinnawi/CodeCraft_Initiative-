 import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import signinImg from '../../assets/loginPic.jpg';
import { useNavigate } from 'react-router-dom';
import { t } from 'i18next';

const SignUp = () => {

    const [email, setEmail] = useState("");
    const [password,setPassword]  = useState("");
    const [name, setName] = useState("");

    const navigate = useNavigate();

    const handleUser = async(e) => {
        e.preventDefault();
        try{
            await createUserWithEmailAndPassword(auth, email, password);
        } catch{
            console.log("Error signing up user");
        }
    }

  return (
    <div className='flex items-center justify-between h-screen' >
    <img src={signinImg} className='w-1/2' alt="" />

    <div className='flex flex-col items-center justify-center w-1/2'>
      <h2 className='text-3xl hidden lg:block'>{t("register to")} <span className='text-blue-500 font-bold'>CodeCraft</span></h2>

      <form onSubmit={handleUser} className='flex flex-col gap-y-10 mt-10 border-2 p-3 py-5 w[450px]'>
        <div className='flex flex-col'>
            <label htmlFor="">{t("fullname")}:</label>
            <input type="text" className='border-2 rounded-sm w-full p-2' name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>

        <div className='flex flex-col'>
            <label htmlFor="email" >
                {t("email")}:
            </label>
            <input type="email" className='border-2 rounded-sm w-full p-2'  name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div className='flex flex-col'>
           <label htmlFor="password">
              {t("password")}:
           </label>
           <input type="password" className='border-2 rounded-sm w-full p-2' name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>

        <button type='submit' className='border-2 p-2 rounded-sm transition-all duration-300 cursor-pointer hover:bg-black hover:text-white font-bold'>{t("submit")}</button>

        <p>{t("already have an account")} <span className='underline cursor-pointer hover:text-blue-600 transition-all duration-300 ' onClick={() => navigate("/signin")}>{t("sign in to your account here")}</span></p>
      </form>
    </div>

    </div>
  )
}

export default SignUp