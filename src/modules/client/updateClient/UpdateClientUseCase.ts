import { prisma } from "../../../database/prismaClient";

interface IClient {
  id: string;
  name: string;
  phone: string;
}

class UpdateClientUseCase {
  async execute({ name, phone, id }: IClient) {
    const clientExist = await prisma.client.findFirst({
      where: {
        id,
      },
    });

    console.log(id);

    if (!clientExist) {
      throw new Error('Cliente não existe');
    }

    const client = await prisma.client.update({
      where: {
        id,
      },
      data: {
        name,
        phone,
        updatedAt: new Date(),
      }
    });

    return client;
  }
}

export { UpdateClientUseCase };

