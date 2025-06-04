"use client"
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
export default function SignUp() {
  const router = useRouter()
  const [signupForm, setSignupForm] = useState({
    name :"",
    email : "",
    password : "",
    confirmPassword : ""
  })
  const [error,setError] = useState(null)
  async function HandleSignUp(){
    if(signupForm.password === signupForm.confirmPassword){
      try{
        setError(null)
        const reponse = await axios.post("http://localhost:3000/auth/register",{
          name : signupForm.name,
          email : signupForm.email,
          password : signupForm.password,
        })
        console.log(reponse.data)
        router.push("/auth/login")
      }catch(e){
        console.log(e)
        setError(e.response.data.message)
      }
    }else{
      setError("Passwords do not match")
    }
  }

  return (
    <>
      <div className="absolute w-full flex justify-between items-center">
        <Image
          src="/images/logo.png"
          alt="Logo"
          width={100}
          height={50}
          className="ml-5"
        />
        <button className="bg-amber-900 text-white py-2 px-4 rounded-md ml-20 mr-10">Login</button>
      </div>
      <div className="h-full flex flex-col md:flex-row">
        <div className="md:h-screen md:w-1/3 md:flex justify-center items-center bg-white hidden">
          <Image src="/images/loginLogo.jpg"
            alt="Login Logo"
            width={600}
            height={400} />
        </div>
        <div className="h-screen md:w-2/3 flex flex-col justify-center items-center">
          <div className="h-screen flex flex-col justify-center items-start px-10">
            <h1 className="text-4xl font-medium mb-2 tracking-wide">Create an account</h1>
            <h1 className="text-xl tracking-wide mb-2 text-slate-500 text-md">Create your profile</h1>
            <input
              type="text"
              placeholder="Enter your Name"
              onChange={(e) => setSignupForm({...signupForm, name : e.target.value})}
              className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent mb-5 placeholder:text-sm"
              />
            <input
              type="text"
              placeholder="Enter your Email"
              onChange={(e) => setSignupForm({ ...signupForm, email: e.target.value })}
              className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent mb-5 placeholder:text-sm"
              />
            <input
              type="password"
              placeholder="Enter your Password"
              onChange={(e) => setSignupForm({ ...signupForm, password: e.target.value })}
              className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent mb-5 placeholder:text-sm"
            />
            <input
              type="text"
              placeholder="Confirm your Password"
              onChange={(e) => setSignupForm({ ...signupForm, confirmPassword: e.target.value })}
              className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent placeholder:text-sm"
            />
            {error && <p className="text-red-500 text-sm mb-2 mt-5">{error}</p>}
              <p className="text-slate-700 text-sm mb-2 mt-5">This information will be securely saved as per the Terms <br/>
              of Services and Privacy Policy</p>
            <button onClick={HandleSignUp} className="bg-amber-900 text-white py-2 px-4 rounded-md mt-5 w-full cursor-pointer hover:bg-amber-950 transition-colors">SignUp</button>
            <p className="text-slate-700 text-sm mb-2 mt-5 text-center cursor-pointer hover:text-amber-950">Have an account? Login</p>
          </div>
        </div>

      </div>
    </>
  );
}