import { StudentGroup, Typography } from "~/components";
import { CurrentStudnetGroupsType } from "~/@types";

export default function HomeStudentGroups({ currentStudentGroups }: { currentStudentGroups: CurrentStudnetGroupsType }) {
  return (
    <div className="flex flex-col gap-8">
      <div className="self-center md:self-start">
        <Typography as="h1" variant="h1">{currentStudentGroups.title}</Typography>
      </div>
      <div className="flex w-full flex-col flex-wrap justify-center gap-8 self-center md:flex-row">
        {currentStudentGroups.studentGroups.map((group, index) => (
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
