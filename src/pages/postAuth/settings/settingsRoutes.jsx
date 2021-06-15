import {
  PREFERENCE,
  PROFILE,
  GEO_FENCE,
  AUTO_ALLOCTION,
  RECURRING_RULE,
  TEAMS,
  MANAGERS,
  NOTIFICATIONS,
  APP,
  ACCESS_CONTROL,
  SURGE
} from "../../../routes";

import Preferance from "./preference/preference";
import Profile from "./profile/profile";
import GeoFence from "./geoFence/geoFence";
import AutoAllocation from "./autoAllocation/autoAllocation";
import RecurringRule from "./recurringRule/recurringRule";
import Teams from "./teams/teams";
import Managers from "./managers/managers";
import App from "./appSettings/appSettings";
import Notifications from "./notifications/notifications";
import AccessControls from "./accessControl/accessControl";
import Surge from "./surge/surge";

export const settingsRoute = [
  {
    name: "Preferences",
    path: PREFERENCE,
    component: Preferance,
    exact: true
  },
  {
    name: "Profile",
    path: PROFILE,
    component: Profile,
    exact: true
  },
  {
    name: "Geo Fence",
    path: GEO_FENCE,
    component: GeoFence,
    exact: true
  },
  {
    name: "Auto Allocation",
    path: AUTO_ALLOCTION,
    component: AutoAllocation,
    exact: true
  },
  {
    name: "Recurring Rule",
    path: RECURRING_RULE,
    component: RecurringRule,
    exact: true
  },
  {
    name: "Teams",
    path: TEAMS,
    component: Teams,
    exact: true
  },
  {
    name: "المندوب",
    path: MANAGERS,
    component: Managers,
    exact: true
  },
  {
    name: "المندوب App",
    path: APP,
    component: App,
    exact: true
  },
  {
    name: "Notifications",
    path: NOTIFICATIONS,
    component: Notifications,
    exact: true
  },
  {
    name: "Access Controls",
    path: ACCESS_CONTROL,
    component: AccessControls,
    exact: true
  },
  {
    name: "Surge",
    path: SURGE,
    component: Surge,
    exact: true
  }
];
