const Button = ({ children, className }) => {
    return (
        <button className={`relative mx-2 overflow-hidden hover:scale-105 duration-300 bg-white border border-white border-opacity-10 bg-opacity-5 hover:bg-opacity-25 hover:text-white px-3 py-3 font-bold text-lg rounded-full ${className}`}>
        {children}
        </button>
    );
}

export default Button;