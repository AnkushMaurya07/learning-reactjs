/* eslint-disable no-useless-catch */
import conf from "../config/conf.js";

import { Client, Account, ID } from "appwrite"

export class AuthServices {
    //to make a new client
    client = new Client();
    account; //firstly we have to make endpoint and proj in Client.

    //
    constructor() {
        this.client
            .setEndpoint(conf.appwriteURL)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client)
    }

    //making a method here so that it can call the appwrite services basically a wrapper.
    //which is a promise----using a promise--or async await.


    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                //call another method
                return this.login({ email, password })
            } else {
                return userAccount;
            }

        }
        catch (error) {
            throw error;
        }

    }

    //make a login method so that we can enter the desired login details.
    async login({ email, password }) {
        try {
            return await this.account.createEmailSession(email, password);
        } catch (error) {
            throw error;
        }

    }
   
    //this method can fail also so we use try n catch.
    async getCurrentUser() {
        try {
            return await this.account.get()
        }
        catch (error) {
            console.log("Appwrite service::getCurrentUser:: error", error);
        }
        return null;
    }

    async logout() {
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite service:: logout:: error", error);
        }
    }

}

const authServices = new AuthServices()

export default authServices