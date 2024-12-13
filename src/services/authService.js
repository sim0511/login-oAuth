import {BASE_URL} from "../config/constant";

// services/authService.js
export const loginUser = async (username, password) => {
    try {
      const response = await fetch(`${BASE_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
        credentials: "include", // Include cookies in requests
      });
      
      if (!response.ok) {
        let result = await response.json();
        throw new Error(result.message);
      }

      return response.json(); // Return the user info or token

    } catch (error) {
      // console.error("Error logging in:", error);
      throw error;
    }
  };
  
  export const checkAuthStatus = async () => {
    try {
      const response = await fetch(`${BASE_URL}/check-auth`, {
        method: "GET",
        credentials: "include", // Include cookies in requests
      });
  
      if (!response.ok) {
        throw new Error("Not authenticated");
      }
  
      return response.json(); // Return user information if authenticated

    } catch (error) {
      console.error("Error checking authentication status:", error);
      throw error;
    }
  };

  // src/services/authService.js
export const registerUser = async (username, email, password) => {
  // Implement the API call to register the user
  // This is a placeholder implementation
  return fetch(`${BASE_URL}/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, email, password }),
  }).then(response => {
    if (!response.ok) {
      throw new Error('Failed to register');
    }
    return response.json();
  });
};
  