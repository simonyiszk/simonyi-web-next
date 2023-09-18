import React, { Fragment } from 'react';
import { FaCaretDown } from 'react-icons/fa6';
import { TimelineEntityType } from '~/@types';
import { defaults } from '~/utils';

/** src: https://github.com/kir-dev/sch60/blob/master/src/components/pages/AboutUs.tsx */
export default function AboutTimeline() {
  const timeline = defaults.timeline;

  return (
    <div className="grid-cols-timeline-mobile sm:grid-cols-timeline-full relative grid grid-flow-dense items-center justify-items-center gap-y-8 px-0 py-4">
      <div className="absolute left-12 h-full w-0 border-e-4 border-dashed border-white sm:left-1/2">
        <FaCaretDown size={40} color="white" className="absolute left-[-18px] top-[calc(100%-10px)] m-0" />
      </div>
      {/** TODO remove defaults */}
      {timeline.map((entry, index) => {
        if (index % 2) {
          return (
            <Fragment key={entry.description}>
              <div className="hidden sm:block" />
              <TimelineYearCell {...entry} />
              <TimelineCell {...entry} />
            </Fragment>
          );
        } else
          return (
            <Fragment key={entry.description}>
              <TimelineCell {...entry} className="sm:justify-self-end sm:text-right" />
              <TimelineYearCell {...entry} />
              <div className="hidden sm:block" />
            </Fragment>
          );
      })}
    </div>
  );
}

const TimelineCell: React.FC<React.ComponentProps<'div'> & TimelineEntityType> = ({ description, className }) => {
  return (
    <div
      className={`relative col-[2] box-border justify-self-start rounded-lg bg-darkmode_regular p-3 text-white sm:col-auto ${className}`}
    >
      {description}
    </div>
  );
};

const TimelineYearCell: React.FC<React.ComponentProps<'div'> & TimelineEntityType> = ({ year, isImportant, className }) => {
  return (
    <div
      className={`relative col-[1] row-[initial] box-border rounded-lg bg-darkmode_regular p-2 text-xl text-white ${
        isImportant ? 'bg-simonyi_zold' : ''
      } sm:col-auto ${className}`}
    >
      {year}
    </div>
  );
};
