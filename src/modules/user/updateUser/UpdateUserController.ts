import { Request, Response } from "express";
import { UpdateUserUseCase } from "./UpdateUserUseCase";

class UpdateUserController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const { password } = request.body;

    const updateUserUseCase = new UpdateUserUseCase();
    const newPassword = await updateUserUseCase.execute({
      idUser: id,
      newPassword: password,
    });

    return response.json(newPassword);
  }
}

export { UpdateUserController };

