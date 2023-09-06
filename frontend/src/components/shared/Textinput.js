const TextInput = ({ label, placeholder, className,value ,setValue }) => {
  return (
    <div className={`textInputDiv flex flex-col space-y-2 w-full ${className}`}>
      <label htmlFor={label} className="font-semibold">
        {label}
      </label>
      <input
        type="text"
        placeholder={placeholder}
        className="p-3 border-1 border-solid border-gray-300 rounded placeholder-gray-500 "
        id={label}
        value={value}
        onChange={(e)=>{
            setValue(e.target.value);
        }}
      />
    </div>
  );
};

export default TextInput;
