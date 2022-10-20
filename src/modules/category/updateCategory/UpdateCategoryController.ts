import { Request, Response } from "express";
import { UpdateCategoryUseCase } from "./UpdateCategoryUseCase";

class UpdateCategoryController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const { name, color } = request.body;

    const updateCategoryUseCase = new UpdateCategoryUseCase();
    const category = await updateCategoryUseCase.execute({
      id,
      name,
      color,
    });

    return response.json(category);
  }
}

export { UpdateCategoryController };

