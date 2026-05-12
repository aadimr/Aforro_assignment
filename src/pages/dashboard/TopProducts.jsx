const products = [
    {
        id: "01",
        name: "Home Decor Range",
        progress: 78,
        progressColor: "#0EA5FF",
        bgColor: "#D7EDFF",
        sales: "45%",
        salesColor: "#0EA5FF",
        salesBg: "#E8F4FF",
    },
    {
        id: "02",
        name: "Disney Princess Pink Bag 18'",
        progress: 62,
        progressColor: "#10D876",
        bgColor: "#DDF8EC",
        sales: "29%",
        salesColor: "#10D876",
        salesBg: "#E9FFF4",
    },
    {
        id: "03",
        name: "Bathroom Essentials",
        progress: 55,
        progressColor: "#A855F7",
        bgColor: "#F0E2FF",
        sales: "18%",
        salesColor: "#A855F7",
        salesBg: "#F5ECFF",
    },
    {
        id: "04",
        name: "Apple Smartwatches",
        progress: 35,
        progressColor: "#FF8A00",
        bgColor: "#FFE9D6",
        sales: "25%",
        salesColor: "#FF8A00",
        salesBg: "#FFF2E7",
    },
];

function TopProducts() {
    return (
        <div className="w-full rounded-[22px] bg-white p-5 shadow-sm">

            <h2 className="mb-4 text-[20px] font-bold text-[#151D48]">
                Top Products
            </h2>

            <div className="grid grid-cols-[60px_1.5fr_1fr_100px] border-b border-[#F1F3F9] pb-[14px]">

                <span className="text-[13px] font-medium text-[#A3AED0]">
                    #
                </span>

                <span className="text-[13px] font-medium text-[#A3AED0]">
                    Name
                </span>

                <span className="text-[13px] font-medium text-[#A3AED0]">
                    Popularity
                </span>

                <span className="text-right text-[13px] font-medium text-[#A3AED0]">
                    Sales
                </span>
            </div>

            <div className="flex flex-col divide-y divide-[#F1F3F9]">

                {products.map((item) => (
                    <div
                        key={item.id}
                        className="grid grid-cols-[60px_1.5fr_1fr_100px] items-center py-3"
                    >
                        <span className="text-[14px] font-semibold text-[#151D48]">
                            {item.id}
                        </span>

                        <span className="text-[12px] font-medium text-[#737791]">
                            {item.name}
                        </span>

                        <div
                            className="h-[6px] w-full overflow-hidden rounded-[20px]"
                            style={{
                                background: item.bgColor,
                            }}
                        >
                            <div
                                className="h-full rounded-[20px]"
                                style={{
                                    width: `${item.progress}%`,
                                    background: item.progressColor,
                                }}
                            />
                        </div>

                        <div className="flex justify-end">
                            <span
                                className="rounded-[8px] px-3 py-[4px] text-[13px] font-semibold"
                                style={{
                                    color: item.salesColor,
                                    background: item.salesBg,
                                    border: `1px solid ${item.salesColor}`,
                                }}
                            >
                                {item.sales}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TopProducts;