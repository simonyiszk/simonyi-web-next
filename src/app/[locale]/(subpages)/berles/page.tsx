function GoogleCalendar({
  variant,
}: {
  variant: "102" | "103" | "1319"
}) {
  switch (variant) {
  case "102":
    return (
      <div className="relative block w-full pb-[56.25%]">
        <iframe
          src="https://calendar.google.com/calendar/embed?src=simonyi.bme.hu_2d3437383937303138313835%40resource.calendar.google.com&ctz=Europe%2FBudapest"
          className="absolute left-0 top-0 h-full w-full"
        ></iframe>
      </div>
    );
  case "103":
    return (
      <div className="relative block w-full pb-[56.25%]">
        <iframe
          src="https://calendar.google.com/calendar/embed?src=simonyi.bme.hu_2d36373839343232382d313732%40resource.calendar.google.com&ctz=Europe%2FBudapest"
          className="absolute left-0 top-0 h-full w-full"
        ></iframe>
      </div>
    );
  case "1319":
    return (
      <div className="relative block w-full pb-[56.25%]">
        <iframe
          src="https://calendar.google.com/calendar/embed?src=simonyi.bme.hu_3237303234353631353230%40resource.calendar.google.com&ctz=Europe%2FBudapest"
          className="absolute left-0 top-0 h-full w-full"
        ></iframe>
      </div>
    );
  }
}

function GoogleForm({
  variant,
}: {
  variant: "rooms" | "equipment"
}) {
  switch(variant) {
  case "rooms":
    return (
      <div className="relative block w-full pb-[56.25%]">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSdjHyZorWbo_x-LQNvTlioYZce7Tv_8Ijduv6hb41Ip6mEDsA/viewform?embedded=true"
          className="absolute left-0 top-0 h-full w-full"
        ></iframe>
      </div>
    );
  case "equipment":
    return (
      <div className="relative block w-full pb-[56.25%]">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSe9dkm5Teizpyt50aCSZot0vU-z_sT3qlq8Zbb-DkYM_X5Jow/viewform?embedded=true"
          className="absolute left-0 top-0 h-full w-full"
        ></iframe>
      </div>
    );
  }
}

export default function Page() {
  return (
    <div className="w-full">
      <GoogleCalendar variant="102" />
      <GoogleCalendar variant="103" />
      <GoogleCalendar variant="1319" />
      <GoogleForm variant="rooms" />
      <GoogleForm variant="equipment" />
    </div>
  );
}
