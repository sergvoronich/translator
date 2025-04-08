
const Button = ({ children, onClick = () => {}, type = 'button' }) => (
  <button
  type={type}
    onClick={onClick}
    className="bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition cursor-pointer"
  >
    {children}
  </button>
);

export default Button;
