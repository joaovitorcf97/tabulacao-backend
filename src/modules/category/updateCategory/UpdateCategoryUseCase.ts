import { prisma } from "../../../database/prismaClient";

interface IUpdateCategory {
  name: string;
  id: string;
}

class UpdateCategoryUseCase {
  async execute({ name, id }: IUpdateCategory) {
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
      }
    });

    return category;
  }
}

export { UpdateCategoryUseCase };

