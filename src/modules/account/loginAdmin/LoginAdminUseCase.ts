import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { prisma } from "../../../database/prismaClient";

interface ILogin {
  email: string;
  password: string;
}

class LoginAdminUseCase {
  async execute({ email, password }: ILogin) {
    const admin = await prisma.admin.findFirst({
      where: {
        email,
      }
    });

    if (!admin) {
      throw new Error('E-mail ou senha invalido!');
    }

    const passwordMatch = await compare(password, admin.password);

    if (!passwordMatch) {
      throw new Error('E-mail ou senha invalido!');
    }

    const token = sign(
      { email },
      'f298cce7f21371c26f85af48489b075e',
      { subject: admin.id, expiresIn: '1d' },
    );

    return token;
  }
}

export { LoginAdminUseCase };

