import { create } from "zustand";
//el metodo "persist" en zustand es para mantener mi token dentro del local storage aunque refresque la pagina.
//de esa manera mantener el estado global.
import { persist } from "zustand/middleware";

//se definen los tipos de datos para que los entienda
type State = {
  token: string;
  profile: any;
  isAuth: boolean;
};

type Actions = {
  setToken: (token: string) => void;
  setProfile: (profile: any) => void;
  logout: () => void
};

//creamos un hook que almacene mi token y profile
export const useAuthStore = create(
  persist<State & Actions>(
    (set) => ({
      token: "",
      profile: null,
      isAuth: false,
      setToken: (token: string) => set(( state ) => ({
          token,
          isAuth: true
        })),
      setProfile: ( profile: any ) => set(( state ) => ({
        profile,
      })),
      logout: () => set(state => ({
        token: "",
        isAuth: false,
        profile: null
      })),  
    }),
    {
      name: "auth",
    }
  )
);
