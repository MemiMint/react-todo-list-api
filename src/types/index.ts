import { Request, Response } from "express";

export interface Context {
    req: Request,
    res: Response,
    payload: { id: string, name: string };
}

export interface Payload {
    id: string;
    name: string;
}