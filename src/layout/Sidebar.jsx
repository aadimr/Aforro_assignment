import { useNavigate, useLocation } from "react-router-dom";

const sideMenu = [
    {
        id: 1,
        title: "Dashboard",
        icon: "/Graph 1.png",
        link: "/dashboard",
    },
    {
        id: 2,
        title: "Leaderboard",
        icon: "/Group.png",
        link: "/dashboard/leaderboard",
    },
    {
        id: 3,
        title: "Order",
        icon: "/shopping-cart.png",
        link: "/dashboard/order",
    },
    {
        id: 4,
        title: "Products",
        icon: "/mdi_shopping-outline.png",
        link: "/dashboard/products",
    },
    {
        id: 5,
        title: "Sales Report",
        icon: "/Chart_Line.png",
        link: "/dashboard/sales_report",
    },
    {
        id: 6,
        title: "Messages",
        icon: "/mdi_message-processing-outline.png",
        link: "/dashboard/messages",
    },
    {
        id: 7,
        title: "Settings",
        icon: "/mdi_cog-outline.png",
        link: "/dashboard/settings",
    },
    {
        id: 8,
        title: "Sign Out",
        icon: "/Sign Out Icon.png",
    },
];

function Sidebar() {
    const navigate = useNavigate();
    const location = useLocation();

    const handleNavigation = (link) => {
        navigate(link);
    };

    return (
        <aside className="w-[300px] bg-white px-5 py-8 h-screen overflow-y-auto">

            <div className="flex items-center gap-5">
                <div className="bg-[#5D5FEF] w-[45px] h-[45px] rounded-lg flex justify-center items-center">
                    <img src="dummy.png" alt="Logo" />
                </div>

                <h1 className="font-poppins font-semibold text-[18px] leading-[140%] text-[#151D48]">
                    Dabang
                </h1>
            </div>

            <div className="flex flex-col gap-2 mt-10">
                {sideMenu.map((item) => {
                    const isActive = location.pathname === item.link;

                    return (
                        <button
                            key={item.id}
                            onClick={() => item.link && handleNavigation(item.link)}
                            className={`w-full h-[60px] rounded-[14px] flex items-center gap-4 px-5 transition-all duration-200
                            ${isActive
                                    ? "bg-[#5D5FEF] text-white"
                                    : "text-[#737791] hover:bg-[#F5F6FA]"
                                }`}
                        >
                            <img
                                src={item.icon}
                                alt={item.title}
                                className="w-[22px] h-[22px] object-contain"
                            />

                            <span className="font-poppins text-[16px] font-medium">
                                {item.title}
                            </span>
                        </button>
                    );
                })}
            </div>

            <div className="relative mt-[3rem] w-full rounded-[24px] overflow-hidden bg-[#5D5FEF] px-6 py-8 flex flex-col items-center text-center">

                <img
                    src="/Background.png"
                    alt="Background"
                    className="absolute inset-0 w-full h-full object-cover"
                />

                <div className="relative z-10 flex flex-col items-center gap-3">

                    <div className="w-[50px] h-[50px] rounded-[14px] bg-white flex items-center justify-center">
                        <img
                            src="dummy.png"
                            alt="Logo"
                            className="w-[28px] h-[28px] object-contain"
                        />
                    </div>

                    <h2 className="font-poppins font-semibold text-[20px] leading-[140%] text-white">
                        Dabang Pro
                    </h2>

                    <p className="text-white text-[12px] leading-[180%]">
                        Get access to all features on tetumbas
                    </p>

                    <button className="w-[170px] h-[45px] rounded-[16px] bg-white text-[#5D5FEF] font-semibold text-[16px]">
                        Get Pro
                    </button>
                </div>
            </div>
        </aside>
    );
}

export default Sidebar;