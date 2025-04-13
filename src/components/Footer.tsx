function Footer() {
  return (
    <div className="flex justify-center w-full bg-dark-nav-color">
      <div className=" p-4 w-full flex">
        <p className="text-white w-full flex gap-2">
          🧃 by{" "}
          <a
            href="https://github.com/"
            target="_blank"
            className="text-[#15A34A] transition-all duration-150 font-bold"
          >
            Dikshya S Limbu
          </a>
          <span>&</span>
          <a
            href="https://github.com/khaleedcodes"
            target="_blank"
            className="text-[#15A34A] transition-all duration-150 font-bold"
          >
            Khaleed Opeloyeru
          </a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
