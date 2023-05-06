import { StudentGroup } from '~/components';
import { StudentGroupType } from '~/types';

export default function StudentGroups({ groups }: { groups: Array<StudentGroupType> }) {
  return (
    <div className="flex flex-col gap-8">
      <div className="self-center md:self-start">
        <h1 className="text-h1 font-heading">Köreink</h1>
      </div>
      <div className="self-center flex justify-center flex-col md:flex-row gap-8 flex-wrap w-full">
        {groups.map((group, index) => (
          <StudentGroup
            key={index}
            name={group.name}
            description={group.description}
            logo={group.logo}
            socials={group.socials}
            isDense={group.isDense}
          />
        ))}
      </div>
    </div>
  );
}
