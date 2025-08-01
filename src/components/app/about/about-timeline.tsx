import React, { Fragment } from "react"
import { TimelineEntityType } from "~/@types"
import { CaretDownIcon } from "~/components/icons/caret-down-icon"
import { TypographyBody } from "~/components/typography"
import { contentfulDocumentToReactComponents } from "~/utils/contentful/contentful-renderer"

/** src: https://github.com/kir-dev/sch60/blob/master/src/components/pages/AboutUs.tsx */
export function AboutTimeline({
  timelineEntries,
}: {
  timelineEntries: TimelineEntityType[]
}) {
  return (
    <div className="relative grid grid-flow-dense grid-cols-timeline_mobile items-center justify-items-center gap-y-8 px-0 py-4 sm:grid-cols-timeline_full">
      <div className="absolute left-12 h-full w-0 border-e-4 border-dashed border-white sm:left-1/2">
        <CaretDownIcon
          className="absolute left-[-18px] top-[calc(100%-10px)] fill-white"
          width="40px"
          height="40px"
        />
      </div>
      {timelineEntries.map((entry, index) => {
        if (index % 2) {
          return (
            <Fragment key={index}>
              <div className="hidden sm:block" />
              <TimelineYearCell {...entry} />
              <TimelineCell {...entry} />
            </Fragment>
          )
        } else
          return (
            <Fragment key={index}>
              <TimelineCell
                {...entry}
                className="sm:justify-self-end sm:text-right"
              />
              <TimelineYearCell {...entry} />
              <div className="hidden sm:block" />
            </Fragment>
          )
      })}
    </div>
  )
}

function TimelineCell({
  description,
  className,
}: React.ComponentProps<"div"> & TimelineEntityType) {
  return (
    <div
      className={`relative col-[2] box-border justify-self-start rounded-lg bg-darkmode_regular p-3 text-white sm:col-auto ${className}`}
    >
      {contentfulDocumentToReactComponents(description)}
    </div>
  )
}

function TimelineYearCell({
  year,
  isImportant,
  className,
}: React.ComponentProps<"div"> & TimelineEntityType) {
  return (
    <div
      className={`relative col-[1] row-[initial] box-border rounded-lg bg-darkmode_regular p-2 text-xl text-white ${
        isImportant ? "bg-primary" : ""
      } sm:col-auto ${className}`}
    >
      <TypographyBody>{year}</TypographyBody>
    </div>
  )
}
