import { Metadata } from 'next';
import { AboutTopParagraphs, AboutTimeline, AboutBottomParagraphs } from '~/components/app/about';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Rólunk'
};

export default function Page() {
  return (
    <div className="mx-auto flex max-w-home flex-col gap-8 p-4">
      <AboutTopParagraphs />
      <AboutTimeline />
      <AboutBottomParagraphs />
    </div>
  );
}
