import TaskCard from "./TaskCard";
import { tasks } from "../../data/tasks";

const RecentTasks = () => {
    return (
        <div className="mt-10">

            <h2 className="text-2xl font-bold mb-5">
                Recent Tasks
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {tasks.map((task) => (
                    <TaskCard
                        key={task.id}
                        task={task}
                    />
                ))}
            </div>

        </div>
    );
};

export default RecentTasks;