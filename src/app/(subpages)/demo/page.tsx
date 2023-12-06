import { Metadata } from "next";
import HelloWorld from "./demo.mdx";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Demo",
};

export default function Page() {
  return (
    <div>
      <HelloWorld />
    </div>
  );
}
