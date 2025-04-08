
const Card = ({ icon: Icon, title, description }) => {
  return (
    <div className="flex flex-col max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
      <div className="p-4 flex-grow">
        {Icon && <Icon className="w-12 h-12 mb-4 mx-auto text-blue-500" />}
        <h3 className="text-xl font-semibold text-center">{title}</h3>
        <div className="mt-2 text-gray-600 text-center">{description}</div>
      </div>
    </div>
  );
};

export default Card;

