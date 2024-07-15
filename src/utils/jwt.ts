import jwt, { Jwt } from "jsonwebtoken";
import fs from "fs";
import path from "path";
import { Payload } from "../types/index";

const PRIVATE_KEY = fs.readFileSync(path.join(process.cwd() + "/src/keys", "rsa.key"));
const PUBLIC_KEY = fs.readFileSync(path.join(process.cwd() + "/src/keys", "rsa.key.pub"));

export const createToken = (payload: Payload): string => {
    return jwt.sign(payload, PRIVATE_KEY, { algorithm: "RS256" });
}

export const verifyToken = (token: string) => {
    return jwt.verify(token, PRIVATE_KEY, { algorithms: ["RS256"] });
}