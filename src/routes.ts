import { Router } from "express";
import { ensureAuthenticateAdmin } from "./middlewares/ensureAuthenticateAdmin";
import { LoginAdminController } from "./modules/account/loginAdmin/LoginAdminController";
import { LoginUserController } from "./modules/account/loginUser/LoginUserController";
import { CreateAdminController } from "./modules/admin/createAdmin/CreateAdminController";
import { FindAllUsersController } from "./modules/admin/findAllUsers/FindAllUsersController";
import { CreateCategoryController } from "./modules/category/createCategory/CreateCategoryController";
import { DeleteCategoryController } from "./modules/category/deleteCategory/DeleteCategoryController";
import { FindlAllCategoriesController } from "./modules/category/findAllCategories/FindAllCategoriesController";
import { UpdateCategoryController } from "./modules/category/updateCategory/UpdateCategoryController";
import { CreateUserController } from "./modules/user/createUser/CreateUserController";
import { DeleteUserController } from "./modules/user/deleteUser/DeleteUserController";
import { UpdateUserController } from "./modules/user/updateUser/UpdateUserController";

const routes = Router();

const createAdminController = new CreateAdminController();
const loginAdminController = new LoginAdminController();

const createUserController = new CreateUserController();
const loginUserController = new LoginUserController();

const findAllUsersController = new FindAllUsersController();

const updateUserController = new UpdateUserController();
const deleteUserController = new DeleteUserController();

const createCategoryController = new CreateCategoryController();
const findlAllCategoriesController = new FindlAllCategoriesController();
const updateCategoryController = new UpdateCategoryController();
const deleteCategoryController = new DeleteCategoryController();

// Admin
routes.post('/admin/create', createAdminController.handle);
routes.post('/admin/login', loginAdminController.handle);

// User
routes.post('/user/create', ensureAuthenticateAdmin, createUserController.handle);
routes.post('/user/login', loginUserController.handle);
routes.get('/users/find', ensureAuthenticateAdmin, findAllUsersController.handle);
routes.put('/user/update-password/:id', ensureAuthenticateAdmin, updateUserController.handle);
routes.delete('/user/delete-user/:id', ensureAuthenticateAdmin, deleteUserController.handle);

// Category
routes.post('/category/create', ensureAuthenticateAdmin, createCategoryController.handle);
routes.get('/category/find', ensureAuthenticateAdmin, findlAllCategoriesController.handle);
routes.put('/category/update/:id', ensureAuthenticateAdmin, updateCategoryController.handle);
routes.delete('/category/delete/:id', ensureAuthenticateAdmin, deleteCategoryController.handle);

// Client

export { routes };

