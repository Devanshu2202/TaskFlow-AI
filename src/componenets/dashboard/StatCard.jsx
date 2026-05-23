const StatCard = ({ title, value }) => {
    return (
        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition duration-300">

            <h3 className="text-gray-500 text-sm mb-2">
                {title}
            </h3>

            <p className="text-3xl font-bold">
                {value}
            </p>

        </div>
    );
};

export default StatCard;