import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeLinkSkeleton } from "./TypeLink";

export interface TypeStudentGroupFields {
    name: EntryFieldTypes.Symbol;
    logo: EntryFieldTypes.AssetLink;
    description: EntryFieldTypes.Text;
    links: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeLinkSkeleton>>;
    isDense: EntryFieldTypes.Boolean;
}

export type TypeStudentGroupSkeleton = EntrySkeletonType<TypeStudentGroupFields, "studentGroup">;
export type TypeStudentGroup<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeStudentGroupSkeleton, Modifiers, Locales>;
