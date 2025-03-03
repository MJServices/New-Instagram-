const Navbar = () => {
  return (
    <section className="flex justify-between items-center w-full h-20 bg-gray-950 px-4 py-2 text-zinc-300">
      <div className="flex items-center">
        <img
          src="https://i.ibb.co/4r0m5tQ/logo.png"
          alt="logo"
          className="w-10 h-10"
        />
        <h1 className="text-xl font-bold ml-2">Nextreel</h1>
      </div>
      <div className="flex items-center">
        <a href="#" className="text-zinc-300 hover:text-white">
          Home
        </a>
        <a href="#" className="text-zinc-300 hover:text-white">
          About
        </a>
        <a href="#" className="text-zinc-300 hover:text-white">
          Contact
        </a>
      </div>
    </section>
  );
};
export default Navbar;
