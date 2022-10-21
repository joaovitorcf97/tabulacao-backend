import { prisma } from "../../../database/prismaClient";

class FindAllCategoriesUseCase {
  async execute() {
    const categories = await prisma.category.findMany({
      orderBy: {
        created_at: 'asc'
      },
      select: {
        id: true,
        name: true,
        cor: true,
        user: true,
        created_at: true,
      }
    });

    return categories;
  }
}

export { FindAllCategoriesUseCase };

