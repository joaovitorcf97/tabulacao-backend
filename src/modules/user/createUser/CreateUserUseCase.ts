import { hash } from "bcrypt";
import { prisma } from "../../../database/prismaClient";

interface IUser {
  name: string;
  email: string;
  password: string;
  id_admin: string;
}

class CreateUserUseCase {
  async execute({ name, email, password, id_admin }: IUser) {
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
        adminId: id_admin,
      }
    });

    console.log(user);

    return user;
  }
}

export { CreateUserUseCase };

