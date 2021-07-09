import User from '../Models/user'

export default class AuthServices {
    constructor() {
    }
    
    async static signUp(user) {
        const userRecord = await User.createUser(user);
        
    } 

    async static logIn(user) {
        const userRecord = await User.logIn(user);
    }
}