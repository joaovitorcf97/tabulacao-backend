import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { prisma } from "../../../database/prismaClient";

interface ILogin {
  email: string;
  password: string;
}

class LoginUserUseCase {
  async execute({ email, password }: ILogin) {
    const user = await prisma.user.findFirst({
      where: {
        email,
      }
    });

    if (!user) {
      throw new Error('E-mail ou senha invalido!');
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new Error('E-mail ou senha invalido!');
    }

    const token = sign(
      { email },
      'f298cce7f21371c26f85af48489b075d',
      { subject: user.id, expiresIn: '1d', }
    );

    return {
      token, user,
    };
  }
}

export { LoginUserUseCase };

