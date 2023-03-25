import { Request, Response } from "express";
import { prisma } from "../database/prisma";

export const createUser = async (req: Request, res: Response) => {
  const { name, email, password, accessName } = req.body;

  const isUserUniqueEmail = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (isUserUniqueEmail) {
    return res
      .status(400)
      .json({ message: "Usuário já cadastrado com este E-mail!" });
  }




  const user = await prisma.user.create({

    data: {
      name,
      email,
      password,
          Access: {
            connect: {
              name: accessName,
            },
          },      
    },

  });
  return res.json(user);
};

export const deleteManyUser = async (req: Request, res: Response) => {
  await prisma.user.deleteMany();
  return res.json({ message: "Usuário deletado com sucesso" });
};
function hash(password: any, arg1: number) {
  throw new Error("Function not implemented.");
}
