import { UserEntity, userCollection } from "../../entities/user";

export const getUsers = async (): Promise<UserEntity[] | null> => {
    try {
        const users = await userCollection.find();
        
        if (!users) return null;

        return users;
    } catch (error) {
        console.error(error);
        
        return null;
    }
}