import { PREFERENCE, PROFILE } from "../../../routes";

import Preferance from "./preference/preference";
import Profile from "./profile/profile";

export const settingsRoute = [
  {
    name: "Preferences",
    path: PREFERENCE,
    component: Preferance,
    exact: true,
  },
  {
    name: "Profile",
    path: PROFILE,
    component: Profile,
    exact: true,
  },
];
