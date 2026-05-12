import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";


const data = [
    {
        day: "Monday",
        online: 14000,
        offline: 13000,
    },
    {
        day: "Tuesday",
        online: 18000,
        offline: 12000,
    },
    {
        day: "Wednesday",
        online: 6000,
        offline: 23000,
    },
    {
        day: "Thursday",
        online: 17000,
        offline: 7000,
    },
    {
        day: "Friday",
        online: 13000,
        offline: 12000,
    },
    {
        day: "Saturday",
        online: 18000,
        offline: 14000,
    },
    {
        day: "Sunday",
        online: 22000,
        offline: 11000,
    },
];

function TotalRevenue() {

    return (
        <div className="h-[360px] w-full rounded-[20px] bg-white p-6 shadow-sm">

            <h2 className="mb-6 text-[22px] font-bold text-[#151D48]">
                Total Revenue
            </h2>

            <ResponsiveContainer width="100%" height="70%">

                <BarChart
                    data={data}
                    barGap={8}
                    margin={{
                        top: 10,
                        right: 10,
                        left: -5,
                        bottom: 10,
                    }}
                >
                    <CartesianGrid
                        strokeDasharray="3 3"
                        vertical={false}
                        stroke="#E5E7EB"
                    />

                    <XAxis
                        dataKey="day"
                        interval={0}
                        tick={{
                            fontSize: 10,
                            fill: "#737791",
                        }}
                        axisLine={false}
                        tickLine={false}
                    />

                    <YAxis
                        width={45}
                        domain={[0, 25000]}
                        ticks={[
                            0,
                            5000,
                            10000,
                            15000,
                            20000,
                            25000,
                        ]}
                        tick={{
                            fontSize: 12,
                            fill: "#737791",
                        }}
                        axisLine={false}
                        tickLine={false}
                        tickFormatter={(value) =>
                            `${value / 1000}k`
                        }
                    />

                    <Tooltip
                        formatter={(value) => [
                            `${value}`,
                            "Revenue",
                        ]}
                    />

                    <Bar
                        dataKey="online"
                        fill="#0EA5FF"
                        radius={[10, 10, 0, 0]}
                        barSize={12}
                    />

                    <Bar
                        dataKey="offline"
                        fill="#10D876"
                        radius={[10, 10, 0, 0]}
                        barSize={12}
                    />
                </BarChart>
            </ResponsiveContainer>

            <div className="mt-4 flex flex-wrap items-center justify-center gap-6">

                <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-[#0EA5FF]" />

                    <span className="text-[14px] text-[#737791]">
                        Online Sales
                    </span>
                </div>

                <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-[#10D876]" />

                    <span className="text-[14px] text-[#737791]">
                        Offline Sales
                    </span>
                </div>
            </div>
        </div>
    );
}

export default TotalRevenue;