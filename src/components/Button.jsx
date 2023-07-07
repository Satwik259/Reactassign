const Button = ({ icon, alt, text }) => (
    <div className="flex items-center cursor-pointer h-8 w-[180px] justify-center rounded-xl bg-white text-center text-sm py-2 px-4">
        <img className="h-3.5 w-3.5 mr-2" src={icon} alt={alt} />
        <div className="font-montserrat text-xs text-gray-500">{text}</div>
    </div>
);

export default Button;