const InputField = ({ type, id, label, className }) => (
    <div>
        <label htmlFor={id} className="text-base font-medium text-black block mb-1.5">{label}</label>
        <input type={type} id={id} className={className} required="" />
    </div>
);

export default InputField;
