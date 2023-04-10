import { about, groups, images, profiles } from '~/utils';
import HomePage from './home-page';
import '@fontsource/space-grotesk/300.css';
import '@fontsource/space-grotesk/400.css';
import '@fontsource/space-grotesk/700.css';
import '@fontsource/archivo/300.css';
import '@fontsource/archivo/400.css';
import '@fontsource/archivo/700.css';

export default function Page() {
  return <HomePage aboutData={about} imagesData={images} presidencyData={profiles} studentGroupsData={groups} />;
}
