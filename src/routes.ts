import { Router } from "express";
import { ensureAuthenticateUser } from "./middlewares/ensureAuthenticateUser";
import { LoginUserController } from "./modules/account/loginUser/LoginUserController";

import { CreateCategoryController } from "./modules/category/createCategory/CreateCategoryController";
import { DeleteCategoryController } from "./modules/category/deleteCategory/DeleteCategoryController";
import { FindlAllCategoriesController } from "./modules/category/findAllCategories/FindAllCategoriesController";
import { FindCategoryController } from "./modules/category/findCategory/FindCategoryController";
import { UpdateCategoryController } from "./modules/category/updateCategory/UpdateCategoryController";
import { CreateUserController } from "./modules/user/createUser/CreateUserController";
import { DeleteUserController } from "./modules/user/deleteUser/DeleteUserController";
import { FindAllUsersController } from "./modules/user/findAllUsers/FindAllUsersController";
import { FindUserController } from "./modules/user/findUser/FindUserController";
import { UpdateUserController } from "./modules/user/updateUser/UpdateUserController";

const routes = Router();

const createUserController = new CreateUserController();
const loginUserController = new LoginUserController();
const findAllUsersController = new FindAllUsersController();
const findUserController = new FindUserController();
const updateUserController = new UpdateUserController();
const deleteUserController = new DeleteUserController();

const createCategoryController = new CreateCategoryController();
const findlAllCategoriesController = new FindlAllCategoriesController();
const findCategoryController = new FindCategoryController();
const updateCategoryController = new UpdateCategoryController();
const deleteCategoryController = new DeleteCategoryController();

// User
routes.post('/user/create', createUserController.handle);
routes.post('/user/login', loginUserController.handle);
routes.get('/users/find', ensureAuthenticateUser, findAllUsersController.handle);
routes.get('/users/find-one/:id', ensureAuthenticateUser, findUserController.handle);
routes.put('/user/update-password/:id', ensureAuthenticateUser, updateUserController.handle);
routes.delete('/user/delete-user/:id', ensureAuthenticateUser, deleteUserController.handle);

// Category
routes.get('/category/find-one/:id', ensureAuthenticateUser, findCategoryController.handle);
routes.post('/category/create', ensureAuthenticateUser, createCategoryController.handle);
routes.get('/category/find', ensureAuthenticateUser, findlAllCategoriesController.handle);
routes.put('/category/update/:id', ensureAuthenticateUser, updateCategoryController.handle);
routes.delete('/category/delete/:id', ensureAuthenticateUser, deleteCategoryController.handle);

// Client

export { routes };

