import Link from "next/link";
import Login from "./login/page";
import Register from "./register/page";
import Profile from "./profile/page";

export default function Home() {
  return (
      <div>
      <br></br>
      <h1 className="text-center text-5xl my-5">Zahid Pharmacy</h1>
       <br></br>
      <p className="text-center text-1xl">
         Zahid Pharmacy is committed to providing quality medications and health products at competitive prices
      </p>
      <br></br>
      <Login />
      <Register />
      <Profile />
      
      
      <div className="flex space-x-16 mt-6 justify-center">

	    <a href="/login">
      <button className="text-center bg-white hover:bg-[#2C3532] text-black font-bold py-2 px-4 text-sm  rounded">Login</button>
	    </a>
	   
	   <a href="/register">
     <button className="text-center  bg-white hover:bg-[#2C3532] text-black font-bold py-2 px-4 text-sm  rounded">Register</button>
	   </a>

	  <a href="/profile">
    <button className="text-center  bg-white hover:bg-[#2C3532] text-black font-bold py-2 px-4 text-sm  rounded">Profile</button>
    </a>

    </div>
    </div>
  );
}