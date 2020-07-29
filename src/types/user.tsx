export  namespace User {
    export interface IUser{
        isAuthenticated:boolean,
        name?:string,
        family?:string
    }


    export const userInitValue = {
        isAuthenticated:false,
        name :'',
        family :''
    }
}