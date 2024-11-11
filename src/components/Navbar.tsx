import { Button } from "@/components/ui/button"
import { useState, useContext } from 'react';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import productContext from "@/context/context";

const Navbar = () => {
    const context = useContext(productContext);
    const mode = context?.mode;

    const setModeFun = () => {
        if (context) {
            context.setMode(!mode);
        }
    };


    return (

        <nav className={`h-20 w-full ${mode ? `bg-white` : `bg-black`} flex border-b-2 border-y-zinc-400 justify-between`}>
            {/* Logo Section */}
            <div className="h-full w-[10%] min-w-24 flex items-center px-2">
                <div className="bg-white h-14 w-14 rounded-full flex items-center justify-center border-2 border-gray-950">Logo</div>
            </div>

            {/* Search Section */}
            <div className="h-full w-[50%] hidden lg:flex justify-start items-center">
                <div className="flex items-center border border-gray-400 rounded-3xl overflow-hidden w-full max-w-md">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-full py-2 px-4 text-gray-700 focus:outline-none"
                    />
                    <button className="p-2 bg-gray-300 hover:bg-gray-400 rounded-r-full flex items-center justify-center">
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="#343C54"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M11.25 2.75C6.14154 2.75 2 6.89029 2 11.998C2 17.1056 6.14154 21.2459 11.25 21.2459C13.5335 21.2459 15.6238 20.4187 17.2373 19.0475L20.7182 22.5287C21.011 22.8216 21.4859 22.8217 21.7788 22.5288C22.0717 22.2359 22.0718 21.761 21.7789 21.4681L18.2983 17.9872C19.6714 16.3736 20.5 14.2826 20.5 11.998C20.5 6.89029 16.3585 2.75 11.25 2.75ZM3.5 11.998C3.5 7.71905 6.96962 4.25 11.25 4.25C15.5304 4.25 19 7.71905 19 11.998C19 16.2769 15.5304 19.7459 11.25 19.7459C6.96962 19.7459 3.5 16.2769 3.5 11.998Z"
                                fill="#343C54"
                            />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Right Section */}
            <div className="flex w-[80%] lg:w-[40%] justify-end">
                <ul className={`w-48 hidden lg:flex items-center justify-between pr-2 ${mode ? ` text-black` : `text-white cursor-pointer`} font-semibold lg:w-72`}>
                    <li >Withdraw</li>
                    <li>Add</li>
                    <li>Deposite</li>
                </ul>
                <div className="w-52 lg:w-60 flex items-center justify-end sm:justify-end gap-4 sm:gap-4 md:gap-7 pr-2 md:pr-8">

                    {mode ? <img className="lg:hidden" width="30" height="30" src="https://img.icons8.com/ios/50/search.png" alt="search" /> :
                        <img className="lg:hidden" width="30" height="30" src="https://img.icons8.com/ios/50/FFFFFF/search--v1.png" alt="search--v1" />}

                    {mode ? <img onClick={setModeFun} width="35" height="35" src="https://img.icons8.com/ios/50/moon-symbol.png" alt="moon-symbol" /> :
                        <img onClick={setModeFun} width="35" height="35" src="https://img.icons8.com/ios-filled/50/FFFFFF/sun--v1.png" alt="sun--v1" />}

                    <Sheet>
                        <SheetTrigger>
                            <div className="bg-white h-14 w-14 rounded-full lg:flex items-center justify-center border-2 border-gray-950 hidden ">
                                open
                            </div>
                            {mode ? <img className="lg:hidden" width="30" height="30" src="https://img.icons8.com/ios-filled/50/menu--v6.png" alt="menu--v6" />
                                :
                                <img className="lg:hidden" width="30" height="30" src="https://img.icons8.com/ios-filled/50/FFFFFF/menu--v6.png" alt="menu--v6" />}
                        </SheetTrigger>
                        <SheetContent className={`w-[320px] sm:w-[540px] ${mode ? `bg-white` : `bg-black`}`}>
                            <SheetHeader>
                                <SheetTitle></SheetTitle>
                            </SheetHeader>
                            <div className={`flex flex-col items-center space-y-6 py-4 font-semibold mt-10 `}>
                                <li className={`flex items-center gap-2 hover:bg-opacity-30 p-2 rounded-md cursor-pointer transition-all ${mode ? `text-black` : `text-white`}`}>
                                    Account
                                </li>
                                <li className={`flex items-center gap-2 hover:bg-opacity-30 p-2 rounded-md cursor-pointer transition-all ${mode ? `text-black` : `text-white`}`}>
                                    Payment Methods
                                </li>
                                <li className={`flex items-center gap-2 hover:bg-opacity-30 p-2 rounded-md cursor-pointer transition-all ${mode ? `text-black` : `text-white`}`}>
                                    Referral
                                </li>
                                <li className={`flex items-center gap-2 hover:bg-opacity-30 p-2 rounded-md cursor-pointer transition-all ${mode ? `text-black` : `text-white`}`}>
                                    Security
                                </li>
                                <li className={`flex items-center gap-2 hover:bg-opacity-30 p-2 rounded-md cursor-pointer transition-all ${mode ? `text-black` : `text-white`}`}>
                                    Feedback
                                </li>
                                <Button variant="destructive" className="bg-blue-500 w-64 md:w-[90%] h-12 rounded-xl font-semibold">Log Out</Button>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </nav>


    )
}

export default Navbar

function setMode(arg0: boolean) {
    throw new Error("Function not implemented.");
}
