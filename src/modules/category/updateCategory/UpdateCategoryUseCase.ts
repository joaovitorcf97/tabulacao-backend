import { prisma } from "../../../database/prismaClient";

interface IUpdateCategory {
  name: string;
  id: string;
  color: string;
}

class UpdateCategoryUseCase {
  async execute({ name, id, color }: IUpdateCategory) {
    const categoryExist = await prisma.category.findFirst({
      where: {
        id,

      },
    });

    if (!categoryExist) {
      throw new Error('Categoria não existe');
    }

    const category = await prisma.category.update({
      where: {
        id,
      },
      data: {
        name,
        cor: color,
        updatedAt: new Date(),
      }
    });

    return category;
  }
}

export { UpdateCategoryUseCase };

