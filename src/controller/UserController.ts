import {Request, Response } from 'express';

export const createUser = async(req: Request, res: Response) => {
    const { name, email, password } = req.body
}