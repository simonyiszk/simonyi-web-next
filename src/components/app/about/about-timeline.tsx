'use client';

import { Fragment } from 'react';
import styled from 'styled-components';
import { FaCaretDown } from 'react-icons/fa6';
import { defaults } from '~/utils';

/** src: https://github.com/kir-dev/sch60/blob/master/src/components/pages/AboutUs.tsx */
export default function AboutTimeline() {
  const timeline = defaults.timeline;

  return (
    <TimelineGrid>
      <VerticalLine>
        <FaCaretDown size={40} color="white" />
      </VerticalLine>
      {/** TODO remove defaults */}
      {timeline.map((entry, index) => {
        if (index % 2) {
          return (
            <Fragment key={entry.description}>
              <div className="empty" />
              <TimelineYearCell className={[2003, 2023].some((e) => entry.year == e) ? 'bg-simonyi_zold' : ''}>
                {entry.year}
              </TimelineYearCell>
              <TimelineCell className="justify-self-start">{entry.description}</TimelineCell>
            </Fragment>
          );
        } else
          return (
            <Fragment key={entry.description}>
              <TimelineCell className="justify-self-start sm:justify-self-end sm:text-right">{entry.description}</TimelineCell>
              <TimelineYearCell className={[2003, 2023].some((e) => entry.year == e) ? 'bg-simonyi_zold' : ''}>
                {entry.year}
              </TimelineYearCell>
              <div className="empty" />
            </Fragment>
          );
      })}
    </TimelineGrid>
  );
}

const TimelineCell = styled.div.attrs({
  className: 'bg-darkmode_regular p-3'
})`
  color: white;
  box-sizing: border-box;
  position: relative;
  border-radius: 0.5rem;
`;

const TimelineYearCell = styled(TimelineCell).attrs({ className: 'text-xl p-2' })``;

const VerticalLine = styled.div`
  height: 100%;
  border-right: 4px dashed white;
  width: 0;
  position: absolute;
  left: 50%;
  > svg {
    margin: 0;
    position: absolute;
    top: calc(100% - 10px);
    left: -18px;
  }
  @media screen and (max-width: 30em) {
    left: 48px;
  }
`;

const TimelineGrid = styled.div`
  display: grid;
  grid-template-columns: calc(50% - 50px) 100px calc(50% - 50px);
  padding: 1rem 0;
  grid-row-gap: 2rem;
  align-items: center;
  justify-items: center;
  position: relative;
  // Lol I haven't seen such attribute before
  grid-auto-flow: dense;
  @media screen and (max-width: 30em) {
    grid-template-columns: 100px calc(100% - 100px);
    .empty {
      display: none;
    }
    ${TimelineCell} {
      grid-column: 2;
    }
    ${TimelineYearCell} {
      grid-column: 1;
      grid-row: initial;
    }
  }
`;
