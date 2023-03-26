import { Router } from "express";
import { createUser, deleteManyUser } from "./controller/UserController";
import { createAccess, getAllAcesseses } from "./controller/AccessControlle";
import { createStore, getAllStore } from "./controller/StoreController";
import { createProduct } from "./controller/ProductControlle";

export const router = Router();

router.post("/user", createUser);
router.delete("/delete-users", deleteManyUser);

router.post("/access", createAccess);
router.get("/accesses", getAllAcesseses);

router.post("/store/:userId", createStore);
router.get("/stores", getAllStore);

router.post("/product/:storeId", createProduct);

