import { prisma } from "../../../database/prismaClient";

interface ICreateCategory {
  name: string;
  color: string;
  id_user: string;
}

class CreateCategoryUseCase {
  async execute({ name, color, id_user }: ICreateCategory) {
    const categoryExist = await prisma.category.findFirst({
      where: {
        name: {
          equals: name,
        },
      },
    });

    if (categoryExist) {
      throw new Error('Categoria já existe');
    }

    const newCategory = await prisma.category.create({
      data: {
        name,
        cor: color,

      }
    });

    return newCategory;
  }
}

export { CreateCategoryUseCase };

