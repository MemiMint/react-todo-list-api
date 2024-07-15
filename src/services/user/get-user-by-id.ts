import { UserEntity, userCollection } from "../../entities/user";

export const getUserById = async (id: string): Promise<UserEntity | null> => {
    try {
        const user = await userCollection.findById(id);
        
        if (!user) return null;

        return user;
    } catch (error) {
        console.error(error);
        
        return null;
    }
}