import { UserEntity, userCollection } from "../../entities/user";

export const getUserByEmail = async (email: string): Promise<UserEntity | null> => {
    try {
        const user = await userCollection.findOne({ email });
        
        if (!user) return null;

        return user;
    } catch (error) {
        console.error(error);
        
        return null;
    }
}