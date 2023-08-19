import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeSocialSkeleton } from "./TypeSocial";

export interface TypeStudentGroupFields {
    name: EntryFieldTypes.Symbol;
    logo: EntryFieldTypes.AssetLink;
    description: EntryFieldTypes.Text;
    socials: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeSocialSkeleton>>;
    isDense: EntryFieldTypes.Boolean;
}

export type TypeStudentGroupSkeleton = EntrySkeletonType<TypeStudentGroupFields, "studentGroup">;
export type TypeStudentGroup<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeStudentGroupSkeleton, Modifiers, Locales>;
