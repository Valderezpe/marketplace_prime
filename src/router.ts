import { Router } from "express";
import { createUser, deleteManyUser } from "./controller/UserController";
import { createAccess, getAllAcesseses } from "./controller/AccessControlle";

export const router = Router();

router.post("/user", createUser);
router.post("/access", createAccess);
router.get("/accesses", getAllAcesseses);
router.delete('/delete-users', deleteManyUser );
