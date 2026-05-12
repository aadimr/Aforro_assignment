import {
    BarChart,
    Bar,
    XAxis,
    ResponsiveContainer,
    Tooltip,
} from "recharts";

const data = [
    { month: "Jan", volume: 35, services: 45 },
    { month: "Feb", volume: 43, services: 52 },
    { month: "Mar", volume: 44, services: 38 },
    { month: "Apr", volume: 46, services: 26 },
    { month: "May", volume: 36, services: 22 },
    { month: "Jun", volume: 30, services: 36 },
];

function VolumeVsServiceLevel() {
    return (
        <div className="flex h-full w-full flex-col justify-between rounded-[22px] bg-white p-5 shadow-sm">
            <h2 className="text-[20px] font-bold text-[#151D48]">
                Volume vs Service Level
            </h2>

            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    data={data}
                    barCategoryGap="50%"
                    margin={{ top: 10, right: 10, left: 10, bottom: 0 }}
                >
                    <XAxis dataKey="month" hide />
                    <Tooltip
                        contentStyle={{
                            borderRadius: 10,
                            border: "1px solid #EEF0F7",
                            fontSize: 13,
                        }}
                        cursor={{ fill: "rgba(0,0,0,0.04)" }}
                    />
                    <Bar
                        dataKey="services"
                        stackId="a"
                        fill="#10D876"
                        radius={[0, 0, 10, 10]}
                        barSize={14}
                    />
                    <Bar
                        dataKey="volume"
                        stackId="a"
                        fill="#0EA5FF"
                        radius={[10, 10, 0, 0]}
                        barSize={14}
                    />
                </BarChart>
            </ResponsiveContainer>

            <div className="my-[10px] h-[1px] w-full bg-[#EEF0F7]" />

            <div className="flex justify-center gap-10">
                <div>
                    <div className="mb-1 flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-[#0EA5FF]" />
                        <span className="text-[14px] font-medium text-[#A3AED0]">Volume</span>
                    </div>
                    <h3 className="text-center text-[18px] font-bold text-[#151D48]">1,135</h3>
                </div>

                <div>
                    <div className="mb-1 flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-[#10D876]" />
                        <span className="text-[14px] font-medium text-[#A3AED0]">Services</span>
                    </div>
                    <h3 className="text-center text-[18px] font-bold text-[#151D48]">635</h3>
                </div>
            </div>
        </div>
    );
}

export default VolumeVsServiceLevel;