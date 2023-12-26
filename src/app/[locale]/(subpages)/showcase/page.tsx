import { Typography } from "~/components";

export default function Page() {
  return (
    <div
      className="flex flex-col gap-4 self-center p-8"
    >
      <Typography variant="body">default</Typography>
      <Typography variant="body" as="div">div</Typography>
      <Typography variant="body" as="span">span</Typography>
      <Typography variant="h1" as="h1">h1</Typography>
      <Typography variant="h2" as="h2">h2</Typography>
      <Typography variant="h3" as="h3">h3</Typography>
      <Typography variant="h4" as="h4">h4</Typography>
      <Typography variant="h5" as="h5">h5</Typography>
      <Typography variant="h6" as="h6">h6</Typography>
      <Typography variant="link" as="a" props={{ href: "https://google.com" }}>a</Typography>
    </div>
  );
}
