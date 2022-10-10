import { Request, Response } from "express";
import { DeleteUserUseCase } from "./DeleteUserUseCase";

class DeleteUserController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const deleteUserUseCase = new DeleteUserUseCase();
    await deleteUserUseCase.execute({
      idUser: id
    });

    return response.json({ message: "Usuario deletado com sucesso" });
  }
}

export { DeleteUserController };

