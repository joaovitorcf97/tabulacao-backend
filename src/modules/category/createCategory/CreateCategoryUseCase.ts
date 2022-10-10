import { prisma } from "../../../database/prismaClient";

interface ICreateCategory {
  name: string;
  color: string;
  id_admin: string;
}

class CreateCategoryUseCase {
  async execute({ name, color, id_admin }: ICreateCategory) {
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
        adminId: id_admin,
      }
    });

    return newCategory;
  }
}

export { CreateCategoryUseCase };

