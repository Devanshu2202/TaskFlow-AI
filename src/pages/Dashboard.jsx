import DashboardLayout from "../layouts/DashboardLayout";

const Dashboard = () => {
    return (
        <DashboardLayout>
            <div>
                <h1 className="text-3xl font-bold mb-6">
                    Welcome to TaskFlow AI
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    <div className="bg-white p-5 rounded-xl shadow">
                        Total Tasks
                    </div>

                    <div className="bg-white p-5 rounded-xl shadow">
                        Completed
                    </div>

                    <div className="bg-white p-5 rounded-xl shadow">
                        Pending
                    </div>

                    <div className="bg-white p-5 rounded-xl shadow">
                        Productivity
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
};

export default Dashboard;