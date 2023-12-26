import Image from "next/image";
import Link from "next/link";
import { Typography } from "../typography";

export function LanguageSwitcher({
  currentLocale,
}: {
  currentLocale: string;
}) {
  return (
    <div
      className="m-2 flex flex-col gap-2"
    >
      <Link locale="hu" href="/">
        <div
          className={`flex cursor-pointer flex-row items-center gap-2 rounded-md border-2 bg-opacity-button p-2 transition duration-200 ease-in-out hover:bg-simonyi_zold ${currentLocale === "hu" ? "border-simonyi_zold bg-simonyi_zold" : "border-simonyi_zold-900 bg-white hover:border-simonyi_zold"}`}
        >
          <Image src="/images/flags/hungarian.png" alt="English" width={32} height={16} className="h-4 w-4 rounded-full object-none" />
          <Typography variant="body">Magyar</Typography>
        </div>
      </Link>
      <Link locale="en" href="/">
        <div
          className={`flex cursor-pointer flex-row items-center gap-2 rounded-md border-2 bg-opacity-button p-2 transition duration-200 ease-in-out hover:bg-simonyi_zold ${currentLocale === "en" ? "border-simonyi_zold bg-simonyi_zold" : "border-simonyi_zold-900 bg-white hover:border-simonyi_zold"}`}
        >
          <Image src="/images/flags/english.png" alt="English" width={32} height={16} className="h-4 w-4 rounded-full object-none" />
          <Typography variant="body">English</Typography>
        </div>
      </Link>
    </div>
  );
}
