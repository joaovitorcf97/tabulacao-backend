import { prisma } from "../../../database/prismaClient";

class DeleteCateryUseCase {
  async execute(id: string) {
    const categoryExist = await prisma.category.findFirst({
      where: {
        id,
      }
    });

    if (!categoryExist) {
      throw new Error('Categoria não existe');
    }

    const result = await prisma.category.delete({
      where: {
        id,
      },
    });

    return result;
  }
}

export { DeleteCateryUseCase };

