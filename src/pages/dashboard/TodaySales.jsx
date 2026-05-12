const salesData = [
    {
        id: 1,
        title: "Total Sales",
        value: "$1k",
        growth: "+8% from yesterday",
        bg: "#FFE2E5",
        iconBg: "#FA5A7D",
        icon: "/Sales Icon.png",
    },
    {
        id: 2,
        title: "Total Order",
        value: "300",
        growth: "+5% from yesterday",
        bg: "#FFF4DE",
        iconBg: "#FF947A",
        icon: "/Order Icon.png",
    },
    {
        id: 3,
        title: "Product Sold",
        value: "5",
        growth: "+1.2% from yesterday",
        bg: "#DCFCE7",
        iconBg: "#3CD856",
        icon: "/Disc Icon.png",
    },
    {
        id: 4,
        title: "New Customers",
        value: "8",
        growth: "0.5% from yesterday",
        bg: "#F3E8FF",
        iconBg: "#BF83FF",
        icon: "/New Costumers Icon.png",
    },
];

function TodaySales() {
    return (
        <div className="bg-white rounded-[20px] p-6 shadow-sm h-full">
            <div className="flex items-start justify-between mb-6">

                <div>
                    <h2 className="text-[22px] font-bold text-[#151D48]">
                        Today’s Sales
                    </h2>

                    <p className="mt-1 text-[14px] text-[#737791]">
                        Sales Summery
                    </p>
                </div>

                <button className="flex items-center gap-2 border border-[#D0D5DD] rounded-[10px] px-4 py-2 text-[14px] font-medium text-[#0F172A] bg-white hover:bg-gray-50 transition">
                    <img
                        src="/Export Icon.png"
                        alt="export"
                        className="w-4 h-4"
                    />

                    Export
                </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">

                {salesData.map((item) => (
                    <div
                        key={item.id}
                        className="rounded-2xl p-5"
                        style={{
                            background: item.bg,
                        }}
                    >
                        <div
                            className="w-[42px] h-[42px] rounded-full flex items-center justify-center mb-5"
                            style={{
                                background: item.iconBg,
                            }}
                        >
                            <img
                                src={item.icon}
                                alt={item.title}
                                className="w-5 h-5"
                            />
                        </div>
                        <h3 className="text-[18px] font-bold text-[#151D48] leading-none">
                            {item.value}
                        </h3>
                        <p className="mt-2 text-[12px] font-medium text-[#425166]">
                            {item.title}
                        </p>
                        <span className="mt-1 inline-block text-[9px] font-medium text-[#4079ED]">
                            {item.growth}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TodaySales;