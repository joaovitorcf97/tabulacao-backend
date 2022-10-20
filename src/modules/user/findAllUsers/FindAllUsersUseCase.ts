import { prisma } from "../../../database/prismaClient";

class FindAllUsersUseCase {
  async execute() {
    const users = await prisma.user.findMany({
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

    return users;
  }
}

export { FindAllUsersUseCase };

