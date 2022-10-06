import { Request, Response } from "express";
import { LoginAdminUseCase } from "./LoginAdminUseCase";

class LoginAdminController {
  async handle(request: Request, response: Response) {
    const { email, password } = request.body;

    const loginAdminUseCase = new LoginAdminUseCase();

    const result = await loginAdminUseCase.execute({
      email,
      password,
    });

    return response.json(result);
  }
}

export { LoginAdminController };

