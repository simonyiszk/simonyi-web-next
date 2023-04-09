import { about, groups, images, profiles } from '~/utils';
import HomePage from './home-page';
import '@fontsource/space-grotesk/300.css';
import '@fontsource/space-grotesk/400.css';
import '@fontsource/space-grotesk/700.css';
import '@fontsource/archivo/300.css';
import '@fontsource/archivo/400.css';
import '@fontsource/archivo/700.css';

async function getData() {
  const result = await Promise.resolve('todo');
  return result;
}

export default async function Page() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const result = await getData();
  return <HomePage aboutData={about} imagesData={images} presidencyData={profiles} studentGroupsData={groups} />;
}
