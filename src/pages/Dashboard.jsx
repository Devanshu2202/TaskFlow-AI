import DashboardLayout from "../layouts/DashboardLayout";
import StatCard from "../componenets/dashboard/StatCard";
import RecentTasks from "../componenets/dashboard/RecentTasks";

const Dashboard = () => {
    return (
        <DashboardLayout>
            <div>
                <h1 className="text-3xl font-bold mb-6">
                    Welcome to TaskFlow AI
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">

                    <StatCard title="Total Tasks" value="120" />

                    <StatCard title="Completed" value="80" />

                    <StatCard title="Pending" value="30" />

                    <StatCard title="Productivity" value="92%" />


                </div>
                <RecentTasks />
            </div>
        </DashboardLayout>
    );
};

export default Dashboard;