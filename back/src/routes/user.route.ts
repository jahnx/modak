import { userController } from "@controllers/user.controller";
import { ExpriedJwtAuthGuard, RefreshJwtAuthGuard } from "@passport/guards/jwt.guard";
import { Router } from "express";

const router = Router();

router.get("/", ExpriedJwtAuthGuard, RefreshJwtAuthGuard, userController.getSigninUser);
router.get("/:_id", userController.getUserInfo);

router.patch(
  "/",
  ExpriedJwtAuthGuard,
  RefreshJwtAuthGuard,
  asyncHandler(userController.editUserInformation),
);

export default router;
