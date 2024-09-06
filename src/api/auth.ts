import axios from "../libs/axios"

export const registerRequest = async (username: string, email: string, password: string) => {
    return axios.post('/api/auth/signup', { 
      username, 
      email, 
      password 
    }, {
      headers: {
        'Content-Type': 'application/json',  // Asegura que el contenido sea JSON
      }
    });
  };

export const loginRequest = async (email: string , password: string) =>{

    return axios.post('/api/auth/singin' , {
        email,
        password    
    })

}

export const profileRequest = async () => {
    
   return await axios.get('/api/auth/profile', {

   })
}