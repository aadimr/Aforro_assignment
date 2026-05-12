import {
    BarChart,
    Bar,
    XAxis,
    ResponsiveContainer,
    Tooltip,
} from "recharts";


const data = [
    { month: "Jan", reality: 12, target: 16 },
    { month: "Feb", reality: 10, target: 14 },
    { month: "Mar", reality: 8, target: 18 },
    { month: "Apr", reality: 12, target: 15 },
    { month: "May", reality: 15, target: 21 },
    { month: "Jun", reality: 15, target: 21 },
    { month: "July", reality: 15, target: 21 },
];


function TargetVsReality() {

    return (
        <div className="h-[360px] w-full rounded-[22px] bg-white p-5 shadow-sm">

            <h2 className="mb-5 text-[20px] font-bold text-[#151D48]">
                Target vs Reality
            </h2>

            <ResponsiveContainer width="100%" height="48%">

                <BarChart
                    data={data}
                    barGap={8}
                    margin={{
                        top: 10,
                        right: 0,
                        left: 0,
                        bottom: 15,
                    }}
                >
                    <XAxis
                        dataKey="month"
                        axisLine={false}
                        tickLine={false}
                        tick={{
                            fontSize: 12,
                            fill: "#A3AED0",
                        }}
                    />

                    <Tooltip />

                    <Bar
                        dataKey="reality"
                        fill="#4AB58E"
                        radius={[10, 10, 10, 10]}
                        barSize={9}
                    />

                    <Bar
                        dataKey="target"
                        fill="#F5C000"
                        radius={[10, 10, 10, 10]}
                        barSize={9}
                    />
                </BarChart>
            </ResponsiveContainer>

            <div className="mt-[18px] flex flex-col gap-4">

                <div className="flex items-center justify-between">

                    <div className="flex items-center gap-3">

                        <div className="flex h-[34px] w-[34px] items-center justify-center rounded-[10px] bg-[#E7F8F0]">
                            <img
                                src="/boy.png"
                                alt="reality"
                            />
                        </div>

                        <div>
                            <h4 className="text-[14px] font-semibold text-[#151D48]">
                                Reality Sales
                            </h4>

                            <p className="mt-[2px] text-[12px] text-[#A3AED0]">
                                Global
                            </p>
                        </div>
                    </div>

                    <span className="text-[16px] font-bold text-[#4AB58E]">
                        8.823
                    </span>
                </div>

                <div className="flex items-center justify-between">

                    <div className="flex items-center gap-3">

                        <div className="flex h-[34px] w-[34px] items-center justify-center rounded-[10px] bg-[#FFF6DA]">
                            <img
                                src="/Ticket Star 1.png"
                                alt="target"
                            />
                        </div>

                        <div>
                            <h4 className="text-[14px] font-semibold text-[#151D48]">
                                Target Sales
                            </h4>

                            <p className="mt-[2px] text-[12px] text-[#A3AED0]">
                                Commercial
                            </p>
                        </div>
                    </div>

                    <span className="text-[16px] font-bold text-[#FF9F43]">
                        12.122
                    </span>
                </div>
            </div>
        </div>
    );
}

export default TargetVsReality;