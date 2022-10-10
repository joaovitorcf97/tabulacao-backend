import { Request, Response } from "express";
import { DeleteCateryUseCase } from "./DeleteCategoryUseCase";

class DeleteCategoryController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const deleteCateryUseCase = new DeleteCateryUseCase();
    await deleteCateryUseCase.execute(id);

    return response.json({ message: 'Categoria deletada com sucesso!' });
  }
}

export { DeleteCategoryController };

