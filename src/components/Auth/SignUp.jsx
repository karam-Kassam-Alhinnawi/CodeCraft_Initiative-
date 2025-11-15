 import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';

const SignUp = () => {

    const [email, setEmail] = useState("");
    const [passoword,setPassword]  = useState("");
    const [name, setName] = useState("");

    const handleUser = async(e) => {
        e.preventDefault();
        try{
            await createUserWithEmailAndPassword(auth, email, password);
        } catch{
            console.log("Error signing up user");
        }
    }

  return (
    <div>


      <h2>Register to CodeCraft</h2>

      <form onSubmit={handleUser}>
        <div>
            <label htmlFor="">Name</label>
            <input type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>

        <div>
            <label htmlFor="email">
                Email
            </label>
            <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div>
           <label htmlFor="password">
              Password
           </label>
           <input type="password" name="password" id="password" value={passoword} onChange={(e) => setPassword(e.target.value)} />
        </div>

        <button type='submit'>Submit</button>

      </form>
    </div>
  )
}

export default SignUp