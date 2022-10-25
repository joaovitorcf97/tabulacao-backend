import { prisma } from "../../../database/prismaClient";

interface IClient {
  name: string;
  phone: string;
  user_id: string;
  category_id: string;
}

class CreateClientUseCase {
  async execute({ name, phone, user_id, category_id }: IClient) {
    const client = await prisma.client.create({
      data: {
        name,
        phone,
        userId: user_id,
        categoryId: category_id,
      }
    });

    return client;
  }
}

export { CreateClientUseCase };

