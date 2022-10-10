import { hash } from "bcrypt";
import { prisma } from "../../../database/prismaClient";

interface IUpdateUser {
  idUser: string;
  newPassword: string;
}

class UpdateUserUseCase {
  async execute({ idUser, newPassword }: IUpdateUser) {
    const userExist = await prisma.user.findFirst({
      where: {
        id: {
          equals: idUser,
        },
      }
    });

    if (!userExist) {
      throw new Error('Usuario não existe');
    }

    const hashPassword = await hash(newPassword, 10);

    const result = await prisma.user.update({
      where: {
        id: idUser,

      },
      data: {
        password: hashPassword,
      }
    });

    return result;
  }
}

export { UpdateUserUseCase };

