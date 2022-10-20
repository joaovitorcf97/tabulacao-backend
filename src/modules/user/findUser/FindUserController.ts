import { Request, Response } from "express";
import { FindUserUseCase } from "./FindUserUseCase";


class FindUserController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const findUserUseCase = new FindUserUseCase();

    const category = await findUserUseCase.execute(id);

    return response.json(category);
  }
}

export { FindUserController };

