"use client"
import Image from "next/image";
import { useState } from "react";
import axios from 'axios'
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter()
  const [loginForm,setLoginForm] = useState({
    email : "",
    password : ""
  })
  async function HandleLogin(){
    try{
      const response = await axios.post("http://localhost:3000/auth/login",{
        email : loginForm.email,
        password : loginForm.password
      },{
        withCredentials: true,
      })
      window.localStorage.setItem("access_token", response.data.access_token)
      window.localStorage.setItem("refresh_token", response.data.refresh_token)
      router.push("/")
    }catch(e){
      console.log(e)
    }
    setLoginForm({
      email : "",
      password : ""
    })
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
        <button className="bg-amber-900 text-white py-2 px-4 rounded-md ml-20 mr-10">SignUp</button>
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
            <h1 className="text-4xl font-medium mb-2 tracking-wide">Login to account</h1>
            <h1 className="tracking-wide mb-2 text-slate-500 text-md">Enter the credentials below</h1>

            <input
              type="text"
              placeholder="Enter your Email"
              value={loginForm.email}
              onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })}
              className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent mb-5 placeholder:text-sm"
              />
            <input
              type="password"
              placeholder="Enter your Password"
              value={loginForm.password}
              onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
              className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent placeholder:text-sm"
            />
              <p className="text-slate-700 text-sm mb-2 mt-5">This information will be securely saved as per the Terms <br/>
              of Services and Privacy Policy</p>
            <button
              onClick={HandleLogin}
              className="bg-amber-900 text-white py-2 px-4 rounded-md mt-5 w-full cursor-pointer hover:bg-amber-950 transition-colors">
                Login
            </button>
            <p className="text-slate-700 text-sm mb-2 mt-5 text-center cursor-pointer hover:text-amber-950">Don't have an account? SignUp</p>

          </div>
        </div>

      </div>
    </>
  );
}