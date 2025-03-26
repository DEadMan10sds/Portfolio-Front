import { LanguageSelector } from "../Language/LanguageSelector";

export const Navbar = () => {
  return (
    <nav className="w-full h-15 mb-5 flex items-center justify-center backdrop-blur-xs border-[#534e4e] border-solid border-b">
      <div className="w-[80%] flex items-center justify-between">
        <h1>Adán Sánchez</h1>
        <LanguageSelector />
      </div>
    </nav>
  );
};
