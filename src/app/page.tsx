import { about, groups, images, profiles } from '@/utils';
import HomePage from './home-page';

async function getData() {
  const result = await Promise.resolve('todo');
  return result;
}

export default async function Page() {
  const {} = await getData();
  return <HomePage aboutData={about} imagesData={images} presidencyData={profiles} studentGroupsData={groups} />;
}
