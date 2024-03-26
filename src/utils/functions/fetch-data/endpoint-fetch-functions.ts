import { genericFetch } from "./generic-fetch"
export type NewUserObjectType = {
    name: string;
    email: string;
    password: string;
    hasAcceptedTermsOfUse: string
}

export const createNewUser =  async ( newUser: NewUserObjectType ) => {
    return genericFetch( { method: "POST" , url: "/api/users" , body: newUser})
}