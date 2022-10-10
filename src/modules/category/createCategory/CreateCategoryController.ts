import { Request, Response } from "express";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

class CreateCategoryController {
  async handle(request: Request, response: Response) {
    const { name, color } = request.body;
    const { id_admin } = request;

    const createCategoryUseCase = new CreateCategoryUseCase();
    const newCategory = await createCategoryUseCase.execute({
      name,
      color,
      id_admin,
    });

    return response.json(newCategory);
  }
}

export { CreateCategoryController };

