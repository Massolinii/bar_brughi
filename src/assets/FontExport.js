import localFont from "next/font/local";

export const bonnie = localFont({
  src: "../app/bonnie.ttf",
  display: "swap",
});

import { Cairo } from "next/font/google";

export const cairo = Cairo({
  weight: "400",
  subsets: ["latin"],
});
