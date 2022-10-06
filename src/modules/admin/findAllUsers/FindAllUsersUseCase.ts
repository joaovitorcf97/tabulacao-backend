import { prisma } from "../../../database/prismaClient";

class FindAllUsersUseCase {
  async execute() {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        created_at: true,
      }
    });

    return users;
  }
}

export { FindAllUsersUseCase };

