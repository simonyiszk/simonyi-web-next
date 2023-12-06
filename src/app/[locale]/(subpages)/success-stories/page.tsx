import { Metadata } from "next";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Büszkeségeink",
};

export default function Page() {
  return <h1>Success stories</h1>;
}
