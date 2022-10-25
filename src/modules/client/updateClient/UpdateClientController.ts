import { Request, Response } from "express";
import { UpdateClientUseCase } from "./UpdateClientUseCase";

class UpdateClientController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const { name, phone } = request.body;

    const updateClientUseCase = new UpdateClientUseCase();

    const client = await updateClientUseCase.execute({
      id,
      name,
      phone,
    });

    return response.json(client);
  }
}

export { UpdateClientController };
