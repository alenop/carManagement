import { Injectable } from "@angular/core";
import * as firebase from "firebase/auth";
import { set, ref, getDatabase, get } from "firebase/database";



export interface IUser {
    userName: string,
    password: string,
    email: string,
    number:string,
}


@Injectable({
    providedIn: 'root'
})


export class AuthenticationService {


    constructor() {

    }

    public async signIn(email: string, password: string, userName: string) {
        const auth = firebase.getAuth();
        const database = getDatabase();
        try {
            const userC = await firebase.createUserWithEmailAndPassword(auth, email, password);
            await set(ref(database, 'users/' + userC.user.uid), {
                email: email,
                userName: userName
            })
            return true
        } catch (e) {
            console.log(e);
            return false;
        }

    }

    async getUserData(email: string, password: string) {
        const auth = firebase.getAuth();
        const userCredential = await firebase.signInWithEmailAndPassword(auth, email, password);

        // Récupérer l'UID de l'utilisateur authentifié
        const user = userCredential.user;
        const uid = user.uid;
        const db = getDatabase(); // Obtenir l'instance de la base de données
        const userRef = ref(db, 'users/' + uid); // Créer une référence au chemin de l'utilisateur

        try {
            const snapshot = await get(userRef); // Récupérer les données
            if (snapshot.exists()) {
                console.log(snapshot.val()); // Affiche les données de l'utilisateur
                return snapshot.val(); // Retourne les données
            } else {
                console.log("Aucun utilisateur trouvé !");
                return null;
            }
        } catch (error) {
            console.error("Erreur lors de la récupération des données : ", error);
            throw error;
        }
    }



}