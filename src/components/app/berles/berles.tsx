"use client"

import { useState } from "react"
import {
  TypographyH1,
  TypographyH2,
  TypographyH3,
} from "~/components/typography"

function GoogleCalendar({
  variant,
}: {
  variant: "102" | "103" | "1319" | "equipment"
}) {
  switch (variant) {
    case "102":
      return (
        <div className="relative overflow-hidden pb-[700px]">
          <iframe
            src="https://calendar.google.com/calendar/embed?src=simonyi.bme.hu_2d3437383937303138313835%40resource.calendar.google.com&ctz=Europe%2FBudapest&wkst=2"
            className="absolute inset-0 h-full w-full"
          ></iframe>
        </div>
      )
    case "103":
      return (
        <div className="relative overflow-hidden pb-[700px]">
          <iframe
            src="https://calendar.google.com/calendar/embed?src=simonyi.bme.hu_2d36373839343232382d313732%40resource.calendar.google.com&ctz=Europe%2FBudapest&wkst=2"
            className="absolute inset-0 h-full w-full"
          ></iframe>
        </div>
      )
    case "1319":
      return (
        <div className="relative overflow-hidden pb-[700px]">
          <iframe
            src="https://calendar.google.com/calendar/embed?src=simonyi.bme.hu_3237303234353631353230%40resource.calendar.google.com&ctz=Europe%2FBudapest&wkst=2"
            className="absolute inset-0 h-full w-full"
          ></iframe>
        </div>
      )
    case "equipment":
      return (
        <div className="relative overflow-hidden pb-[700px]">
          <iframe
            src="https://calendar.google.com/calendar/embed?src=simonyi.bme.hu_4c5sark3hfmim3udflvco0k550%40group.calendar.google.com&ctz=Europe%2FBudapest&wkst=2"
            className="absolute inset-0 h-full w-full"
          ></iframe>
        </div>
      )
  }
}

function GoogleForm({ variant }: { variant: "rooms" | "equipment" }) {
  switch (variant) {
    case "rooms":
      return (
        <div className="relative overflow-hidden pb-[700px]">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSfgGo-mqAbn1OK-N5BVdpZy7d_oKZ6dLsxfFWXyiBmtn0rOlQ/viewform?embedded=true"
            className="absolute inset-0 h-full w-full"
          ></iframe>
        </div>
      )
    case "equipment":
      return (
        <div className="relative overflow-hidden pb-[700px]">
          <iframe
            className="absolute inset-0 h-full w-full"
            src="https://docs.google.com/forms/d/e/1FAIpQLSfdZjTPlMgFtMxqV_Eg_kvdAsiROAS-II007DSu7lLbVU2m-A/viewform?embedded=true"
          ></iframe>
        </div>
      )
  }
}

function Button({
  state = false,
  ...props
}: {
  state?: boolean
} & React.ComponentProps<"button">) {
  return (
    <button
      className={
        state
          ? "flex cursor-pointer flex-row items-center gap-2 rounded-md border-2 border-primary bg-primary/15 p-2 transition duration-200 ease-in-out hover:bg-primary"
          : "flex cursor-pointer flex-row items-center gap-2 rounded-md border-2 border-primary-900 bg-white/15 p-2 transition duration-200 ease-in-out hover:border-primary hover:bg-primary"
      }
      {...props}
    ></button>
  )
}

export function Berles() {
  const [openCalendar, setOpenCalendar] = useState({
    "102": false,
    "103": false,
    "1319": false,
    equipment: false,
  })

  const [openForm, setOpenForm] = useState({
    rooms: false,
    equipment: false,
  })

  const switchCalendar = (variant: keyof typeof openCalendar) => {
    const newOpenState = !openCalendar[variant]
    Object.keys(openCalendar).forEach((key) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      openCalendar[key] = false
    })

    setOpenCalendar({
      ...openCalendar,
      [variant]: newOpenState,
    })
  }

  const switchForm = (variant: "rooms" | "equipment") => {
    const newOpenState = !openForm[variant]
    Object.keys(openForm).forEach((key) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      openForm[key] = false
    })

    setOpenForm({
      ...openForm,
      [variant]: newOpenState,
    })
  }

  return (
    <div className="flex flex-col gap-4">
      <TypographyH1>Eszköz- és terembérlés</TypographyH1>
      <TypographyH2>Naptárak</TypographyH2>
      <div className="flex flex-row flex-wrap gap-4">
        <Button
          onClick={() => switchCalendar("102")}
          state={openCalendar["102"]}
        >
          102 naptár
        </Button>
        <Button
          onClick={() => switchCalendar("103")}
          state={openCalendar["103"]}
        >
          103 naptár
        </Button>
        <Button
          onClick={() => switchCalendar("1319")}
          state={openCalendar["1319"]}
        >
          1319 naptár
        </Button>
        <Button
          onClick={() => switchCalendar("equipment")}
          state={openCalendar["equipment"]}
        >
          Eszközök naptár
        </Button>
      </div>
      {openCalendar["102"] && (
        <div className="flex flex-col gap-4">
          <TypographyH3>102 naptár</TypographyH3>
          <GoogleCalendar variant="102" />
        </div>
      )}
      {openCalendar["103"] && (
        <div className="flex flex-col gap-4">
          <TypographyH3>103 naptár</TypographyH3>
          <GoogleCalendar variant="103" />
        </div>
      )}
      {openCalendar["1319"] && (
        <div className="flex flex-col gap-4">
          <TypographyH3>1319 naptár</TypographyH3>
          <GoogleCalendar variant="1319" />
        </div>
      )}
      {openCalendar.equipment && (
        <div className="flex flex-col gap-4">
          <TypographyH3>Eszközök naptár</TypographyH3>
          <GoogleCalendar variant="equipment" />
        </div>
      )}
      <TypographyH2>Formok</TypographyH2>
      <div className="flex flex-row flex-wrap gap-4">
        <Button onClick={() => switchForm("rooms")} state={openForm.rooms}>
          Terembérlés form
        </Button>
        <Button
          onClick={() => switchForm("equipment")}
          state={openForm.equipment}
        >
          Eszközbérlés form
        </Button>
      </div>
      {openForm.rooms && (
        <div className="flex flex-col gap-4">
          <TypographyH3>Terembérlés form</TypographyH3>
          <GoogleForm variant="rooms" />
        </div>
      )}
      {openForm.equipment && (
        <div className="flex flex-col gap-4">
          <TypographyH3>Eszközbérlés form</TypographyH3>
          <GoogleForm variant="equipment" />
        </div>
      )}
    </div>
  )
}
