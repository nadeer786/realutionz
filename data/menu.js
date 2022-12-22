import {
  Clipboard,
  Home,
  Layers,
  Link,
  MapPin,
  User,
  Zap,
} from "react-feather";

export const MainNavMenuItems = [
  {
    title: "HOME",
    icon: <Home />,
    path: "/home",
  },
  {
    title: "ABOUT US",
    icon: <Clipboard />,
    path: "/aboutus",
    type: "link",
  },

  {
    title: "SERVICES",
    icon: <Link />,
    type: "sub",
    children: [
      {
        path: "https://www.realutionz.com/service/servicedata",
        title: "Land Service",
        type: "link",
      },
      {
        path: "https://www.realutionz.com/service/servicedata",
        title: "Property Buy & Sell",
        type: "link",
      },
    ],
  },
  {
    title: "CAREERS",
    icon: <Layers />,
    path: "/careers",
  },
  {
    title: "BLOG",
    icon: <Zap />,
    path: "/blogs",
    type: "link",
  },
  {
    title: "CONTACT",
    icon: <User />,
    path: "/contact-us",
    type: "link",
  },
];

export const RightNavMenuItem = [
  {
    title: "language",
    option: [
      { lang: "en", language: "English" },
      { lang: "ml", language: "Malayalam" },
    ],
  },
  {
    title: "cart",
  },
  {
    title: "currency",
    type: [
      {
        currency: "USD",
        name: "dollar",
        symbol: "$",
        value: 1,
      },
      {
        currency: "EUR",
        name: "euro",
        symbol: "€",
        value: 0.997,
      },
      {
        currency: "GBP",
        name: "pound",
        symbol: "£",
        value: 0.847,
      },
      {
        currency: "IND",
        name: "rupees",
        symbol: "₹",
        value: 79.9,
      },
    ],
  },
  { title: "user" },
];
