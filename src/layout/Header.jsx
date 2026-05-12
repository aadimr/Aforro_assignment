import LanguageDropdown from "../component/LanguageDropDown";

function Header() {
    return (
        <header className="flex items-center justify-between bg-white px-8 py-4">
            
            <h1 className="font-poppins font-semibold text-[24px] leading-[140%] text-[#151D48]">
                Dashboard
            </h1>

            <div className="flex items-center gap-5">

                <div className="px-3 flex items-center bg-[#F9FAFB] rounded-[8px]">
                    <img
                        src="/magnifier.svg"
                        alt="Search"
                        className="w-[20px] h-[20px]"
                    />

                    <input
                        type="text"
                        placeholder="Search here..."
                        className="px-2 outline-none w-[25rem] h-[2.5rem] bg-[#F9FAFB] font-poppins text-[14px]"
                    />
                </div>

                <LanguageDropdown />

                <div className="flex gap-4 items-center">

                    <button>
                        <img
                            src="/Notifications.png"
                            alt="Notifications"
                            className="w-[35px] h-[35px]"
                        />
                    </button>

                    <button className="flex gap-3 items-center">
                        <img
                            src="1b7304b285d08c0f8b29f8fc61ad6621680532e7.jpg"
                            alt="Profile"
                            className="w-[40px] h-[40px] rounded-[14px] object-cover"
                        />

                        <div className="text-[12px] text-left">
                            <div className="flex gap-8 items-center">
                                <h2 className="font-semibold">
                                    Musfiq
                                </h2>

                                <img
                                    src="/chevron-down.svg"
                                    alt="Dropdown"
                                />
                            </div>

                            <p className="text-gray-500">
                                Admin
                            </p>
                        </div>
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Header;