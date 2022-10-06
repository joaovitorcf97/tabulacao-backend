import { hash } from "bcrypt";
import { prisma } from "../../../database/prismaClient";

interface IAdmin {
  name: string;
  email: string;
  password: string;
}

class CreateAdminUseCase {
  async execute({ name, email, password }: IAdmin) {
    const adminExist = await prisma.admin.findFirst({
      where: {
        email: {
          equals: email,
        }
      }
    });

    if (adminExist) {
      throw new Error('E-mail já esta em uso');
    }

    const hashPassword = await hash(password, 10);

    const admin = await prisma.admin.create({
      data: {
        name,
        email,
        password: hashPassword,
      }
    });

    return admin;
  }
}

export { CreateAdminUseCase };

