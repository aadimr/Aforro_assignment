import React, { useState, useRef, useEffect } from "react";

const languages = [
    {
        code: "US",
        label: "Eng (US)",
        flag: "https://flagcdn.com/w40/us.png",
    },
    {
        code: "IN",
        label: "Hin (IND)",
        flag: "https://flagcdn.com/w40/in.png",
    },
    {
        code: "BD",
        label: "Bang (BAN)",
        flag: "https://flagcdn.com/w40/bd.png",
    },
];

function LanguageDropdown() {
    const [selected, setSelected] = useState(languages[0]);
    const [open, setOpen] = useState(false);

    const dropdownRef = useRef(null);

    useEffect(() => {
        const handler = (e) => {
            if (!dropdownRef.current?.contains(e.target)) {
                setOpen(false);
            }
        };

        document.addEventListener("mousedown", handler);

        return () => {
            document.removeEventListener("mousedown", handler);
        };
    }, []);

    return (
        <div className="relative w-[180px]" ref={dropdownRef}>

            <button
                onClick={() => setOpen(!open)}
                className="w-full h-[50px] bg-white flex items-center justify-between px-4"
            >
                <div className="flex items-center gap-3">
                    <img
                        src={selected.flag}
                        alt={selected.label}
                        className="w-6 h-6 rounded-full object-cover"
                    />

                    <span className="font-medium text-[#151D48]">
                        {selected.label}
                    </span>
                </div>
                <img src="/chevron-down.svg" />
            </button>

            {open && (
                <div className="absolute top-[60px] left-0 w-full bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden z-50">
                    {languages.map((lang) => (
                        <button
                            key={lang.code}
                            onClick={() => {
                                setSelected(lang);
                                setOpen(false);
                            }}
                            className="w-full px-4 py-3 flex items-center gap-3 hover:bg-gray-100"
                        >
                            <img
                                src={lang.flag}
                                alt={lang.label}
                                className="w-6 h-6 rounded-full object-cover"
                            />

                            <span className="text-[#151D48]">
                                {lang.label}
                            </span>
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}

export default LanguageDropdown;