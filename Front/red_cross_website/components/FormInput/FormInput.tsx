import { useState } from "react";
import GoogleIcon from '@mui/icons-material/Google';
import IconButton from '@mui/material/IconButton';
import KeyIcon from '@mui/icons-material/Key';



const FormInput = (props: any) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;

  const handleFocus = (e: Error) => {
    setFocused(true);
  };

    const [passwordShown, setPasswordShown] = useState(false);
    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    };

  return (
    
        <div className="pb-4">
      <input className="outline-0 border-b-2 p-1 text-white bg-transparent w-1/2 invalid:border-red-600 invalid:text-red-600"
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() =>
          inputProps.name === "confirmPassword" && setFocused(true)
        }
        focused={focused.toString()}
      />
        {props.name === 'password'
        ? <IconButton onClick={togglePassword} color="primary" className='-translate-x-8 z-10'>
                  <KeyIcon />
              </IconButton>  
        : <></>
        }
      </div>
    
  );
};

export default FormInput;