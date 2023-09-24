import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeProfileSkeleton } from "./TypeProfile";

export interface TypePresidencyFields {
    name: EntryFieldTypes.Symbol;
    year: EntryFieldTypes.Symbol;
    title: EntryFieldTypes.Symbol;
    profiles?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeProfileSkeleton>>;
}

export type TypePresidencySkeleton = EntrySkeletonType<TypePresidencyFields, "presidency">;
export type TypePresidency<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypePresidencySkeleton, Modifiers, Locales>;
