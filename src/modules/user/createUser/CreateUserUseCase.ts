import { ROLE } from "@prisma/client";
import { hash } from "bcrypt";
import { prisma } from "../../../database/prismaClient";

interface IUser {
  name: string;
  email: string;
  password: string;
  role: ROLE;
}

class CreateUserUseCase {
  async execute({ name, email, password, role }: IUser) {
    const userExist = await prisma.user.findFirst({
      where: {
        email: {
          equals: email,
        },
      }
    });

    if (userExist) {
      throw new Error('E-mail já esta em uso');
    }

    const hashPassword = await hash(password, 10);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashPassword,
        role,
      }
    });

    return user;
  }
}

export { CreateUserUseCase };

