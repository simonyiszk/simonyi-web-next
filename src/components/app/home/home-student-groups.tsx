import { CurrentStudnetGroupsType } from "~/@types"
import { StudentGroup } from "~/components/student-group"
import { TypographyH1 } from "~/components/typography"

export function HomeStudentGroups({
  currentStudentGroups,
}: {
  currentStudentGroups: CurrentStudnetGroupsType
}) {
  return (
    <div className="flex flex-col gap-8">
      <div className="self-center md:self-start">
        <TypographyH1>{currentStudentGroups.title}</TypographyH1>
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
  )
}
