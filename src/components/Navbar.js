import {useState} from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
      <header >
        <div className={"container max-w-screen-xl px-4 md:px-6 mx-auto flex justify-between py-4"}>
        <div className="flex items-center gap-x-10 z-20">
          <div id="logo" className={""}>
            logo goes here
          </div>
          <div className="hidden md:block">
            <div className="flex items-center gap-x-8">
              <a className="font-base font-semibold sm:text-base text-theme-neutral-200 hover:text-fuchsia-500 transition-all" href="https://www.ycombinator.com/launches/Gh3-codecrafters-advanced-code-challenges-for-senior-engineers">About</a>
              <a className="font-base font-semibold sm:text-base text-theme-neutral-200 hover:text-fuchsia-500 transition-all" href="/perks">Perks</a>
              <a className="font-base font-semibold sm:text-base text-theme-neutral-200 hover:text-fuchsia-500 transition-all" href="/pricing">Pricing</a>
              <a className="font-base font-semibold sm:text-base text-theme-neutral-200 hover:text-fuchsia-500 transition-all" href="/expense">Expense</a>
            </div>
          </div>
            </div>
        <div className="hidden md:block">
          <div className="flex flex-row gap-3">
            <a href="https://app.codecrafters.io" className="bg-theme-neutral-800 hover:bg-theme-neutral-700 rounded-full p-2  border border-theme-neutral-700 hover:border-theme-neutral-500 transition-all   flex flex-col items-center}">
              <div className="px-5 py-1 text-theme-neutral-200 font-medium text-lg w-full text-center">Log in</div>
            </a>
            <a href="https://app.codecrafters.io/" className="bg-gradient-to-r from-indigo-600 to-fuchsia-600 hover:from-indigo-500 hover:to-fuchsia-600 rounded-full p-2  border border-theme-neutral-700 hover:border-theme-neutral-500 transition-all   flex flex-col items-center undefined}">
              <div className="px-4 py-1 text-theme-neutral-200 font-medium text-lg w-full text-center">Try now</div>
            </a>
          </div>
        </div>
        <div className="block md:hidden flex items-center z-20" onClick={toggleMenu}>
          <div role="button" className="w-14 h-14 bg-neutral-800 rounded-full flex items-center p-3 hover:bg-neutral-700">
            <div className="space-y-1.5 w-full">
              <div className="h-px bg-white">

              </div><div className="h-px bg-white">

            </div>
              <div className="h-px bg-white">

              </div>
            </div>
          </div>
        </div>
        </div>
        <div className={`${isOpen ? "block" : "hidden"}`}>
          <div className="flex flex-col justify-start  items-start h-full">
            <div className="flex flex-col items-center gap-8">
              <a className="font-base font-semibold sm:text-base text-theme-neutral-200 hover:text-fuchsia-500 transition-all" href="https://www.ycombinator.com/launches/Gh3-codecrafters-advanced-code-challenges-for-senior-engineers">About</a>
              <a className="font-base font-semibold sm:text-base text-theme-neutral-200 hover:text-fuchsia-500 transition-all" href="/perks">Perks</a>
              <a className="font-base font-semibold sm:text-base text-theme-neutral-200 hover:text-fuchsia-500 transition-all" href="/pricing">Pricing</a>
              <a className="font-base font-semibold sm:text-base text-theme-neutral-200 hover:text-fuchsia-500 transition-all" href="/expense">Expense</a>
            </div>
          </div>
        </div>
      </header>
      );
};

export default Navbar;