import { SubpageLayout } from '~/components';
import HelloWorld from './demo.mdx';

export default function Page() {
  return (
    <SubpageLayout>
      <div>
        <HelloWorld />
      </div>
    </SubpageLayout>
  );
}
