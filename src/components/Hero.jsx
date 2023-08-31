import { BsArrowRight } from "react-icons/bs";

const Hero = () => {
  return (
    <>
      <section className="mt-4">
        <div className="lg:flex lg:flex-row mx-4">
          <div className="flex flex-col lg:h-[85vh] rounded-xl lg:p-12 lg:w-1/2 items-center justify-items-center relative">
            <div className="h-full relative">
              <div className="flex flex-col">
                <h2 className="text-center text-md mt-4">
                  LARGEST IMAGE SOURCE
                </h2>
                <h1 className="font-bold lg:text-6xl md:text-3xl text-3xl text-center mt-2">
                  POWERED BY CREATORS AROUND THE WORLD.
                </h1>
                <div className="h-[10px] bg-[#D1FF97] w-[70%] mx-auto rounded-full"></div>
              </div>
              <div>
                <div className="flex flex-col items-center justify-center w-full mt-8">
                  <p className="text-sm text-gray-500">
                    Don{`'`}t have account?
                  </p>
                  <div>
                    <p>
                      Create account <BsArrowRight className="inline" />
                    </p>
                    <div className="h-[2px] bg-black opacity-20"></div>
                  </div>
                </div>
              </div>
              <div className="lg:flex lg:flex-row md:flex-col gap-6 mt-8 rounded-lg bg-[url(../../public/vintage_car.jpg)] bg-cover bg-no-repeat bg-center h-[fit] md:h-[200px] justify-center items-center p-2 lg:absolute lg:bottom-0 ">
                <div className="lg:w-[40%] md:w-full md:text-center text-right text-white">
                  <h3 className="text-center mb-2">About Us</h3>
                </div>
                <div className="lg:w-[60%] md:w-full text-white">
                  <p className="text-sm font-normal text-[12px]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Excepturi, quia eveniet. Quod maxime dicta mollitia sint
                    pariatur eum, nobis placeat inventore
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 p-12 lg:h-[85vh]">
            <div className="bg-[url(../../public/vintage5.jpg)] bg-cover bg-center rounded-xl h-full flex items-center justify-center">
              <form className="h-fit bg-white lg:min-w-[70%] rounded-lg">
                <div className="flex flex-col p-12">
                  <h1 className="font-bold mb-12 text-xl text-center">
                    Login to your account
                  </h1>
                  <label className="text-left text-s text-[#bababa]">
                    Username
                  </label>
                  <input
                    type="text"
                    className="border-[#bababa] border-b-2 mb-4 font-bold"
                  />
                  <label className="text-left text-s text-[#bababa]">
                    Password
                  </label>
                  <input
                    type="password"
                    className="border-[#bababa] border-b-2 mb-4 font-bold"
                  />

                  <div className="flex justify-between items-center">
                    <div className="flex gap-1 items-center">
                      <input type="checkbox" className="accent-[#D1FF97]" />
                      <p className="text-[#bababa] font-bold">Remember me</p>
                    </div>
                    <p className="text-[#bababa] text-sm">
                      Forgot your password?
                    </p>
                  </div>
                  <button
                    type="submit"
                    className="bg-black font-bold text-white py-2 rounded-lg mt-6"
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
