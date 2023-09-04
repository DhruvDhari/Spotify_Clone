const PasswordInput=({label,placeholder})=>{
    return(
        <div className="textInputDiv flex flex-col space-y-2 w-full">
            <label for={label} className="font-semibold" >{label}</label>
               <input type="password" placeholder={placeholder} className="p-2 border-1 border-solid border-gray-300 rounded placeholder-gray-500 "
               id={label}
                />

        </div>
     
    );
}

export default PasswordInput;