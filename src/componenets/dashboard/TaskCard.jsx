const TaskCard = ({ task }) => {
    return (
        <div className="bg-white p-5 rounded-2xl shadow hover:shadow-lg transition duration-300">

            <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-lg">
                    {task.title}
                </h3>

                <span className="text-sm bg-gray-200 px-3 py-1 rounded-full">
                    {task.priority}
                </span>
            </div>

            <p className="text-gray-500">
                Status: {task.status}
            </p>

        </div>
    );
};

export default TaskCard;