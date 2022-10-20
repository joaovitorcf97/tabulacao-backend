import { Request, Response } from "express";
import { FindCategoryUseCase } from "./FindCategoryUseCase";

class FindCategoryController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const findCategoryUseCase = new FindCategoryUseCase();

    const category = await findCategoryUseCase.execute(id);

    return response.json(category);
  }
}

export { FindCategoryController };

