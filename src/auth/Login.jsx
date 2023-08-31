

export const Login = () => {
  return (
    <section className="w-screen h-screen bg-[#e9e9e9]">
        <div className="flex justify-center items-center h-full">
        <form className=" bg-white p-12 rounded-lg shadow-md">
            <h1 className="font-bold text-center text-2xl">Log in to continue</h1>
            <div className="flex flex-col p-12 gap-3">
            <button className="px-4 bg-[#D1FF97] py-2 rounded-lg text-black font-semibold">Login with Google</button>
            <button className="px-4 bg-[#D1FF97] py-2 rounded-lg text-black font-semibold">Login with Facebook</button>
            </div>
        </form>
        </div>
    </section>
  )
}
