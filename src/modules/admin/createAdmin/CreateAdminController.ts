import { Request, Response } from "express";
import { CreateAdminUseCase } from "./CreateAdminUseCase";

class CreateAdminController {
  async handle(request: Request, response: Response) {
    const { name, email, password } = request.body;

    const createAdminUseCase = new CreateAdminUseCase();
    const result = await createAdminUseCase.execute({
      name,
      email,
      password,
    });

    return response.json(result);
  }
}

export { CreateAdminController };

