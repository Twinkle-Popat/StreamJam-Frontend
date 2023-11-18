import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { register as registerRequest } from '../../api/api';
import toast from "react-hot-toast";

export const useRegister = () => {

    const[isloding,setisloding]=useState(false);
    const navigate = useNavigate();

    const register = async(email,password,username)=>{
        setisloding(true);
        const response =await registerRequest({email,password,username});
        setisloding(false);
        if(response.error){
            
            return toast.error(response.exception?.response?.data || "Error occured while Registering. Please try again");
        }

        const {useDetails} = response.data;
        localStorage.setItem('user', useDetails);
        navigate('/');
};
    
        return {register,isloding};
}