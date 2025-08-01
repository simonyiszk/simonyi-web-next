import { Metadata } from "next"
import { Berles } from "~/components/app/berles/berles"

export const metadata: Metadata = {
  title: "Eszköz- és terembérlés",
}

export default function Page() {
  return <Berles />
}
