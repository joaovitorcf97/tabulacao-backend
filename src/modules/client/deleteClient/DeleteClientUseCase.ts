import { prisma } from "../../../database/prismaClient";

class DeleteClientUseCase {
  async execute(id: string) {
    const clientExist = await prisma.client.findFirst({
      where: {
        id,
      }
    });

    console.log(id);

    if (!clientExist) {
      throw new Error('Cliente não existe');
    }

    const result = await prisma.client.delete({
      where: {
        id,
      },
    });

    return result;
  }
}

export { DeleteClientUseCase };

