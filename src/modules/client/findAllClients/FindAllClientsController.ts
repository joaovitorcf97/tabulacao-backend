import { Request, Response } from "express";
import { FindAllClientsUseCase } from "./FindAllClientsUseCase";

class FindAllClientsController {
  async handle(request: Request, response: Response) {
    const skip = Number(request.query.skip);
    const take = Number(request.query.take);

    const findAllClientsUseCase = new FindAllClientsUseCase();
    const clients = await findAllClientsUseCase.execute({ skip, take });


    return response.json(clients);
  }
}

export { FindAllClientsController };

