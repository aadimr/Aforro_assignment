import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    ResponsiveContainer,
    Tooltip,
    ReferenceLine,
} from "recharts";


const data = [
    { month: "Jan", loyal: 300, newCustomer: 250, unique: 280 },
    { month: "Feb", loyal: 320, newCustomer: 270, unique: 350 },
    { month: "Mar", loyal: 260, newCustomer: 210, unique: 340 },
    { month: "Apr", loyal: 220, newCustomer: 150, unique: 280 },
    { month: "May", loyal: 180, newCustomer: 160, unique: 210 },
    { month: "Jun", loyal: 200, newCustomer: 300, unique: 220 },
    { month: "Jul", loyal: 260, newCustomer: 350, unique: 280 },
    { month: "Aug", loyal: 310, newCustomer: 360, unique: 330 },
    { month: "Sept", loyal: 280, newCustomer: 320, unique: 330 },
    { month: "Oct", loyal: 220, newCustomer: 280, unique: 300 },
    { month: "Nov", loyal: 160, newCustomer: 200, unique: 220 },
    { month: "Dec", loyal: 140, newCustomer: 150, unique: 180 },
];

function VisitorInsights() {

    return (
        <div className="h-full w-full rounded-[20px] bg-white p-6 shadow-sm">

            <h2 className="mb-6 text-[22px] font-bold text-[#151D48]">
                Visitor Insights
            </h2>

            <ResponsiveContainer width="100%" height="70%">

                <LineChart
                    data={data}
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
                        dataKey="month"
                        padding={{ left: 0, right: 0 }}
                        tick={{
                            fontSize: 12,
                            fill: "#737791",
                        }}
                        axisLine={false}
                        tickLine={false}
                    />

                    <YAxis
                        width={40}
                        domain={[0, 400]}
                        ticks={[0, 100, 200, 300, 400]}
                        tick={{
                            fontSize: 12,
                            fill: "#737791",
                        }}
                        axisLine={false}
                        tickLine={false}
                    />

                    <Tooltip />

                    <ReferenceLine
                        x="Aug"
                        stroke="#FF4D4F"
                        strokeDasharray="3 3"
                    />

                    <Line
                        type="monotone"
                        dataKey="loyal"
                        stroke="#A700FF"
                        strokeWidth={3}
                        dot={false}
                    />

                    <Line
                        type="monotone"
                        dataKey="newCustomer"
                        stroke="#FF4D4F"
                        strokeWidth={3}
                        activeDot={{
                            r: 6,
                            fill: "#FF4D4F",
                            stroke: "#fff",
                            strokeWidth: 2,
                        }}
                    />

                    <Line
                        type="monotone"
                        dataKey="unique"
                        stroke="#2ED573"
                        strokeWidth={3}
                        dot={false}
                    />
                </LineChart>
            </ResponsiveContainer>

            <div className="flex flex-wrap items-center justify-center gap-5">

                <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-[#A700FF]" />

                    <span className="text-[12px] text-[#737791]">
                        Loyal Customers
                    </span>
                </div>

                <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-[#FF4D4F]" />

                    <span className="text-[12px] text-[#737791]">
                        New Customers
                    </span>
                </div>

                <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-[#2ED573]" />

                    <span className="text-[12px] text-[#737791]">
                        Unique Customers
                    </span>
                </div>
            </div>
        </div>
    );
}

export default VisitorInsights;