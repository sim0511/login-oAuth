// hooks/useAuth.ts

import { useEffect, useState } from "react";
import { checkAuthStatus } from "../services/authService";

const useAuth = () => {
  const [user,setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const user = await checkAuthStatus();
        setUser(user);
      } catch (error) {
        setUser(null);
      }finally{
        setLoading(false);  
      }
    };
    checkAuth();
  }, []);
  return { user, loading };
};

export default useAuth;



