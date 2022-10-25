import { Request, Response } from "express";
import { DeleteClientUseCase } from "./DeleteClientUseCase";

class DeleteClientController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const deleteClientUseCase = new DeleteClientUseCase();
    await deleteClientUseCase.execute(id);

    return response.json({ message: 'Cliente deletada com sucesso!' });
  }
}

export { DeleteClientController };

