import { prisma } from "../../../database/prismaClient";

interface IPagination {
  skip: number,
  take: number,
}

class FindAllClientsUseCase {
  async execute({ skip, take }: IPagination) {
    const clients = await prisma.client.findMany({
      skip,
      take,
      orderBy: {
        created_at: 'desc'
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
            id: true,
            name: true,
          }
        },
      }
    });

    return clients;
  }
}

export { FindAllClientsUseCase };

