import { Request, Response } from "express";
import { FindAllCategoriesUseCase } from "./FindAllCategoriesUseCase";

class FindlAllCategoriesController {
  async handle(request: Request, response: Response) {
    const findAllCategoriesUseCase = new FindAllCategoriesUseCase();

    const allCategories = await findAllCategoriesUseCase.execute();

    return response.json(allCategories);
  }
}

export { FindlAllCategoriesController };

