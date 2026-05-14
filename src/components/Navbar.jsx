function Navbar() {
  return (
    <nav className="fixed left-0 top-0 z-50 flex w-full items-center justify-between bg-[#070707]/80 px-6 py-5 backdrop-blur-md md:px-20">
      <h2 className="text-2xl font-bold text-orange-500">Pravin.</h2>

      <div className="hidden gap-8 text-sm text-gray-300 md:flex">
        <a href="/" className="hover:text-orange-500">Home</a>
        <a href="about" className="hover:text-orange-500">About</a>
        <a href="skills" className="hover:text-orange-500">Skills</a>
        <a href="projects" className="hover:text-orange-500">Projects</a>
        <a href="contact" className="hover:text-orange-500">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;