import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeLinkSkeleton } from "./TypeLink";

export interface TypeFooterSectionFields {
    title: EntryFieldTypes.Symbol;
    address?: EntryFieldTypes.RichText;
    links?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeLinkSkeleton>>;
}

export type TypeFooterSectionSkeleton = EntrySkeletonType<TypeFooterSectionFields, "footerSection">;
export type TypeFooterSection<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeFooterSectionSkeleton, Modifiers, Locales>;
