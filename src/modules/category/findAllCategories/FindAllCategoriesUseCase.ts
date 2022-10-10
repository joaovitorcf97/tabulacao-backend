import { prisma } from "../../../database/prismaClient";

class FindAllCategoriesUseCase {
  async execute() {
    const categories = await prisma.category.findMany({
      select: {
        id: true,
        name: true,
        cor: true,
        adminId: true,
        created_at: true,
      }
    });

    return categories;
  }
}

export { FindAllCategoriesUseCase };

