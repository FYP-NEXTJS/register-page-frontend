import Link from "next/link";


export default function login() {
  return (

      <section  className="bg-[#2C3532] dark:bg-[#0F6466]">
          <div  className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div  className="flex items-center space-y-3">
          <img
            src="/images/medical-logo.png"
            alt="Zahid Pharmacy"
            className="h-20 w-20 rounded-full justify-center items-center"/>
            <h1 className="h-16 text-3xl font-semibold text-[#2C3532] dark:text-[#ECFBF4] ml-2 mb-[-10px]">Zahid Pharmacy</h1>
          </div>

      <div  className="w-full bg-[#ECFBF4] rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div  className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1   className="text-xl font-bold leading-tight tracking-tight text-[#0F6466] md:text-2xl dark:text-[#ECFBF4]">Sign in to your account</h1>
          <form className="space-y-4 md:space-y-6" action="#">
          <div>
          <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-[#2C3532] dark:text-white">Your email</label>
          <input
                type="email"
                name="email"
                id="email"
                className="bg-[#ECFBF4] border border-[#ECFBF4] text- rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@company.com"required/>
          </div>
          <div>
          <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-[#ECFBF4] dark:text-[#ECFBF4]">Password</label>
          <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                className="bg-[#ECFBF4] border border-[#ECFBF4] text-[#ECFBF4] rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"required/>
          </div>
          <div className="flex items-center justify-between">
          <div className="flex items-start">
          <div className="flex items-center h-5">
          <input
                id="remember"
                aria-describedby="remember"
                type="checkbox"
            className="w-4 h-4 border border-[#ECFBF4] rounded bg-[#ECFBF4] focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"required/>
          </div>
          <div  className="ml-3 text-sm">
          <label
                htmlFor="remember"
                className="text-[#2C3532] dark:text-[#ECFBF4]">Remember me</label>
          </div>
          </div>
          <a
            href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?
          </a>
          </div>
          <button
                type="submit"
                className="w-full text-[#ECFBF4] bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                <p className="text-sm font-light text-[#ECFBF4] dark:text-[#ECFBF4]">
                Don’t have an account yet?{" "}
          <a
             href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
      </p>
      </form>
      </div>
      </div>
      </div>
      </section>
  );
}