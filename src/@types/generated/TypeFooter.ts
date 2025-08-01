import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeFooterSectionSkeleton } from "./TypeFooterSection";
import type { TypeLinkSkeleton } from "./TypeLink";

export interface TypeFooterFields {
    name: EntryFieldTypes.Symbol;
    sections?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeFooterSectionSkeleton>>;
    github?: EntryFieldTypes.EntryLink<TypeLinkSkeleton>;
}

export type TypeFooterSkeleton = EntrySkeletonType<TypeFooterFields, "footer">;
export type TypeFooter<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeFooterSkeleton, Modifiers, Locales>;
