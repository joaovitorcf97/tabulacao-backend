import { Request, Response } from "express";
import { UpdateCategoryUseCase } from "./UpdateCategoryUseCase";

class UpdateCategoryController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const { name } = request.body;

    const updateCategoryUseCase = new UpdateCategoryUseCase();
    const category = await updateCategoryUseCase.execute({
      id,
      name,
    });

    return response.json(category);
  }
}

export { UpdateCategoryController };

