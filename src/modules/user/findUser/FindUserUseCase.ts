import { prisma } from "../../../database/prismaClient";

class FindUserUseCase {
  async execute(id: string) {
    const user = await prisma.user.findFirst({
      where: {
        id
      },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        clients: true,
        categories: true,
        created_at: true,
      }
    });

    if (!user) {
      throw new Error('Usuario não existe');
    }

    return user;
  }
}

export { FindUserUseCase };

