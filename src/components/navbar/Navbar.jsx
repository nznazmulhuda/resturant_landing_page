import Logo from "../../assets/logo_res.png";

function Navbar() {
  return (
    <>
      <nav className="flex items-center justify-between max-w-[1320px] mx-auto py-8 bg-transparent">
        {/* left side */}
        <aside className="flex items-center gap-[60px]">
          {/* logo */}
          <figure className="flex items-center gap-[6px]">
            <img className="w-[36.988px] h-[37px]" src={Logo} alt="logo" />
            <h1 className="text-white font-poppins text-[28.444px] font-medium leading-[28.444px]">
              Restau<span className="font-normal">rant</span>
            </h1>
          </figure>

          {/* links */}
          <ul className="flex items-center gap-10 text-white font-rale text-[15px] font-medium">
            <li>Home</li>
            <li>About</li>
            <li>Portfolio</li>
            <li>Clients</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </aside>

        {/* right side */}
        <aside>
          <button className="bg-Yellow text-Text_Primary px-5 py-[10px] font-roboto text-[16px] font-bold leading-[24px] uppercase">
            Book a table
          </button>
        </aside>
      </nav>
    </>
  );
}

export default Navbar;
