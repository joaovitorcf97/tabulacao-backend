import { Request, Response } from "express";
import { LoginUserUseCase } from "./LoginUserUseCase";

class LoginUserController {
  async handle(request: Request, response: Response) {
    const { email, password } = request.body;

    const loginUserUseCase = new LoginUserUseCase();

    const result = await loginUserUseCase.execute({
      email,
      password,
    });

    return response.json(result);
  }
}

export { LoginUserController };

