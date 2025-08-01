import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeStudentGroupSkeleton } from "./TypeStudentGroup";

export interface TypeCurrentStudentGroupsFields {
    name: EntryFieldTypes.Symbol;
    title: EntryFieldTypes.Symbol;
    studentGroups: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeStudentGroupSkeleton>>;
}

export type TypeCurrentStudentGroupsSkeleton = EntrySkeletonType<TypeCurrentStudentGroupsFields, "currentStudentGroups">;
export type TypeCurrentStudentGroups<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeCurrentStudentGroupsSkeleton, Modifiers, Locales>;
