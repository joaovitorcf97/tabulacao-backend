import { Router } from "express";
import { ensureAuthenticateAdmin } from "./middlewares/ensureAuthenticateAdmin";
import { LoginAdminController } from "./modules/account/loginAdmin/LoginAdminController";
import { LoginUserController } from "./modules/account/loginUser/LoginUserController";
import { CreateAdminController } from "./modules/admin/createAdmin/CreateAdminController";
import { FindAllUsersController } from "./modules/admin/findAllUsers/FindAllUsersController";
import { CreateUserController } from "./modules/user/createUser/CreateUserController";

const routes = Router();

const createAdminController = new CreateAdminController();
const loginAdminController = new LoginAdminController();

const createUserController = new CreateUserController();
const loginUserController = new LoginUserController();

const findAllUsersController = new FindAllUsersController();

routes.post('/create-admin', createAdminController.handle);
routes.post('/login-admin', loginAdminController.handle);

routes.post('/create-user', ensureAuthenticateAdmin, createUserController.handle);
routes.post('/login-user', loginUserController.handle);

routes.get('/users/find', ensureAuthenticateAdmin, findAllUsersController.handle);

export { routes };

