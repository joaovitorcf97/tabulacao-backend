import { Request, Response } from "express";
import { CreateClientUseCase } from "./CreateClientUseCase";

class CreateClientController {
  async handle(request: Request, response: Response) {
    const { name, phone, categoryId } = request.body;
    const { id_user } = request;

    const createClientUseCase = new CreateClientUseCase();
    const newClient = await createClientUseCase.execute({
      name,
      phone,
      user_id: id_user,
      category_id: categoryId,
    });



    return response.json(newClient);
  }
}

export { CreateClientController };

