import CustomerSatisfaction from "./CustomerSatisfaction";
import SalesMappingByCountry from "./SalesMappingByCountry";
import TargetVsReality from "./TargetVsReality";
import TodaySales from "./TodaySales";
import TopProducts from "./TopProducts";
import TotalRevenue from "./TotalRevenue";
import VisitorInsights from "./VisitorInsights";
import VolumeVsServiceLevel from "./VolumeVsServiceLevel";

function Dashboard() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
            <div className="lg:col-span-7">
                <TodaySales />
            </div>
            <div className="lg:col-span-5">
                <VisitorInsights />
            </div>
            <div className="lg:col-span-5">
                <TotalRevenue />
            </div>
            <div className="lg:col-span-4">
                <CustomerSatisfaction />
            </div>
            <div className="lg:col-span-3">
                <TargetVsReality />
            </div>
            <div className="lg:col-span-5">
                <TopProducts />
            </div>
            <div className="lg:col-span-4">
                <SalesMappingByCountry />
            </div>
            <div className="lg:col-span-3">
                <VolumeVsServiceLevel />
            </div>
        </div>
    );
}

export default Dashboard;