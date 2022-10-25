import { Request, Response } from "express";
import { FindClientUseCase } from "./FindClientUseCase";

class FindClientController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const findClientUseCase = new FindClientUseCase();

    const client = await findClientUseCase.execute(id);

    return response.json(client);
  }
}

export { FindClientController };
