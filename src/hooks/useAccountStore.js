import {create} from "zustand";
import axios from "axios";
import {jwtDecode} from "jwt-decode";

export const useAccountStore = create(
    (set) => ({
        loggedIn: false,
        email: '',
        login: (credentials) => {
            console.log("trigger login")
            return axios
                .post(
                    "http://localhost:8080/api/v1/authenticate",
                    {...credentials,type:"student"},
                    {
                        headers: {
                            "Content-Type": "application/json",
                        },
                    }
                )
                .then(response => response.data.token)
                .then(token => {
                    //Stockage du token dsans le localStorage
                    window.localStorage.setItem("authToken", token);
                    //Set du header du token, On prenvient axios qu'on a un header dans toutes nos futures requètes HTTP
                    //setAxiosToken(token);
                    set({loggedIn: true,email:credentials.email})
                });
        },
        logout: () => {
            //On supprime le token du localStorage
            window.localStorage.removeItem("authToken");
            //On supprime le header Authorization de la config par defautkl de axios
            //delete axios.defaults.headers["Authorization"];
            //console.log("Déconnecté");
            set({loggedIn: false,email:''})
        },
        setup: () => {
            const token = window.localStorage.getItem("authToken");
            if (token) {
                const {email,exp} = jwtDecode(token);
                if(exp * 1000 > new Date().getTime()) {
                    set({loggedIn: true, email: email})
                } else {
                    //On supprime le token du localStorage
                    window.localStorage.removeItem("authToken");
                    set({loggedIn: false, email: ''})
                }
            }
        },
        register: (registration) => {
            return axios
                .post(
                    "http://localhost:8080/api/v1/student/register",
                    {...registration,classroom:parseInt(registration.classroom)},
                    {
                        headers: {
                            "Content-Type": "application/json",
                        },
                    }
                )
                .then(response => response.data)

        },
    })
)

