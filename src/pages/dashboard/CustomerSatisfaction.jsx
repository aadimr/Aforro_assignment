import {
    AreaChart,
    Area,
    ResponsiveContainer,
    Tooltip,
} from "recharts";

const data = [
    { month: "Jan", lastMonth: 35, thisMonth: 75 },
    { month: "Feb", lastMonth: 40, thisMonth: 65 },
    { month: "Mar", lastMonth: 50, thisMonth: 70 },
    { month: "Apr", lastMonth: 25, thisMonth: 60 },
    { month: "May", lastMonth: 25, thisMonth: 72 },
    { month: "Jun", lastMonth: 30, thisMonth: 55 },
    { month: "Jul", lastMonth: 32, thisMonth: 45 },
    { month: "Aug", lastMonth: 48, thisMonth: 82 },
];

function CustomerSatisfaction() {

    return (
        <div className="h-[360px] w-full rounded-[20px] bg-white p-5 shadow-sm">

            <h2 className="mb-5 text-[20px] font-bold text-[#151D48]">
                Customer Satisfaction
            </h2>

            <ResponsiveContainer width="100%" height="60%">

                <AreaChart
                    data={data}
                    margin={{
                        top: 10,
                        right: 0,
                        left: 0,
                        bottom: 10,
                    }}
                >
                    <defs>

                        <linearGradient
                            id="blueGradient"
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="1"
                        >
                            <stop
                                offset="0%"
                                stopColor="#0EA5FF"
                                stopOpacity={0.4}
                            />

                            <stop
                                offset="100%"
                                stopColor="#0EA5FF"
                                stopOpacity={0}
                            />
                        </linearGradient>

                        <linearGradient
                            id="greenGradient"
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="1"
                        >
                            <stop
                                offset="0%"
                                stopColor="#10D876"
                                stopOpacity={0.4}
                            />

                            <stop
                                offset="100%"
                                stopColor="#10D876"
                                stopOpacity={0}
                            />
                        </linearGradient>
                    </defs>

                    <Tooltip />

                    <Area
                        type="monotone"
                        dataKey="lastMonth"
                        stroke="#0EA5FF"
                        fill="url(#blueGradient)"
                        strokeWidth={2}
                        dot={{
                            r: 3,
                            fill: "#0EA5FF",
                        }}
                    />

                    <Area
                        type="monotone"
                        dataKey="thisMonth"
                        stroke="#10D876"
                        fill="url(#greenGradient)"
                        strokeWidth={2}
                        dot={{
                            r: 3,
                            fill: "#10D876",
                        }}
                    />
                </AreaChart>
            </ResponsiveContainer>

            <div className="mt-5 flex items-center justify-center gap-10">

                <div>
                    <div className="mb-1 flex items-center gap-2">

                        <span className="h-[10px] w-[10px] rounded-full bg-[#0EA5FF]" />

                        <span className="text-[14px] text-[#737791]">
                            Last Month
                        </span>
                    </div>

                    <h3 className="text-[20px] font-bold text-[#151D48]">
                        $3,004
                    </h3>
                </div>

                <div>
                    <div className="mb-1 flex items-center gap-2">

                        <span className="h-[10px] w-[10px] rounded-full bg-[#10D876]" />

                        <span className="text-[14px] text-[#737791]">
                            This Month
                        </span>
                    </div>

                    <h3 className="text-[20px] font-bold text-[#151D48]">
                        $4,504
                    </h3>
                </div>
            </div>
        </div>
    );
}

export default CustomerSatisfaction;