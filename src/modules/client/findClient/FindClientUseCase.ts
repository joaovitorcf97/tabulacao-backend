import { prisma } from "../../../database/prismaClient";

class FindClientUseCase {
  async execute(id: string) {
    const client = await prisma.client.findFirst({
      where: {
        id: id,
      },
      select: {
        id: true,
        name: true,
        phone: true,
        category: {
          select: {
            name: true,
            cor: true,
          }
        },
        user: {
          select: {
            name: true,
          }
        },
      }
    });

    if (!client) {
      throw new Error('Cliente não existe');
    }

    return client;
  }
}

export { FindClientUseCase };
