import { prisma } from "../../../database/prismaClient";

interface IDeleteUser {
  idUser: string;
}

class DeleteUserUseCase {
  async execute({ idUser }: IDeleteUser) {
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

    const result = await prisma.user.delete({
      where: {
        id: idUser,
      },
    });

    return result;
  }
}

export { DeleteUserUseCase };

