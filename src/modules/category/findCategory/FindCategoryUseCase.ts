import { prisma } from "../../../database/prismaClient";

class FindCategoryUseCase {
  async execute(id: string) {
    const category = await prisma.category.findFirst({
      where: {
        id
      },
      select: {
        id: true,
        name: true,
        cor: true,
        user: true,
        created_at: true,
      }
    });

    if (!category) {
      throw new Error('Categoria não existe');
    }

    return category;
  }
}

export { FindCategoryUseCase };

