import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { login as loginRequest } from '../../api/api'; // Corrected import path
import toast from "react-hot-toast";

export const useLogin = () => {

    const[isloding,setisloding]=useState(false);
    const navigate = useNavigate();

    const login = async(email,password)=>{
        setisloding(true);
        const response =await loginRequest({email,password});
        setisloding(false);
        if(response.error){
            
            return toast.error(response.exception?.response?.data || "Error occured while login. Please try again"); 
        }

        const {useDetails} = response.data;
        localStorage.setItem('user', useDetails);
        navigate('/');
};
    
        return {login,isloding};
}