import React from "react";
import {
  DASHBOARD,
  STORIES,
  CAMPAINGS,
  USERS,
  CURRENCIES,
  CARTEGORIES,
  COUNTRIES,
  SETTINGS
} from "../../routes";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThLarge,
  faUserFriends,
  faCog,
  faDollarSign,
  faGlobeAmericas,
  faHandHoldingHeart
} from "@fortawesome/free-solid-svg-icons";

import Dashboard from "./dashboard/dashboard";
import Stories from "./appStories/stories";
import campaigns from "./campaigns/campaigns";
import Users from "./users/users";
import Settings from "./settings";
import Post from "./currency/currency";
import Donation from "./country/country";
import Charity from "./cartegory/cartegory";

export const dashRoutes = [
  {
    name: "Dashboard",
    icon: <FontAwesomeIcon icon={faThLarge} />,
    path: DASHBOARD,
    component: Dashboard,
    exact: true
  },
  {
    name: "Stories",
    icon: <span class="material-icons">auto_stories</span>,
    path: STORIES,
    component: Stories,
    exact: true
  },
  {
    name: "Campaings",
    icon: <span class="material-icons route-icon">campaign</span>,
    path: CAMPAINGS,
    component: campaigns,
    exact: true
  },
  {
    name: "Users",
    icon: <FontAwesomeIcon icon={faUserFriends} />,
    path: USERS,
    component: Users,
    exact: true
  },
  {
    name: "Currencies",
    icon: <FontAwesomeIcon icon={faDollarSign} />,
    path: CURRENCIES,
    component: Post,
    exact: true
  },
  {
    name: "Category",
    icon: <FontAwesomeIcon icon={faHandHoldingHeart} />,
    path: CARTEGORIES,
    component: Charity,
    exact: true
  },
  {
    name: "Countries",
    icon: <FontAwesomeIcon icon={faGlobeAmericas} />,
    path: COUNTRIES,
    component: Donation,
    exact: true
  },
  {
    name: "Settings",
    icon: <FontAwesomeIcon icon={faCog} />,
    path: SETTINGS,
    component: Settings,
    // do not add the exat property to the route containing nested route
    exact: false
  }
];
