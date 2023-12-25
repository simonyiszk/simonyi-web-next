import { Metadata } from "next";
import { Typography } from "~/components";

export const metadata: Metadata = {
  title: "Büszkeségeink",
};

export default function Page() {
  return <Typography as="h1" variant="h1">Success stories</Typography>;
}
