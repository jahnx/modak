import { userAPI } from "@src/apis";
import { createActionByProps, createAction } from "@src/lib/createActionHandler";

const signout = createAction("user/signout", userAPI.signout);
const getSigninUser = createAction("user/signinUser", userAPI.getSinginUser);
const getUserInfo = createActionByProps("user/pageUser", userAPI.getUserInfo);
const editUserInfo = createActionByProps("user/edit", userAPI.editUserInfo);

export { signout, getSigninUser, getUserInfo, editUserInfo };