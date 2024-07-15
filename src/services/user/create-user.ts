import { UserEntity, userCollection } from "../../entities/user";

export const createUser = async (name: string, email: string, password: string): Promise<UserEntity | null> => {
    try {
        const user = new userCollection({
            name,
            email,
            password
        }).save();
        
        if (!user) return null;

        return user;
    } catch (error) {
        console.error(error);
        
        return null;
    }
}