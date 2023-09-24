import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeLinkSkeleton } from "./TypeLink";

export interface TypeProfileFields {
    name: EntryFieldTypes.Symbol;
    title: EntryFieldTypes.Symbol;
    profilePicture: EntryFieldTypes.AssetLink;
    links: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeLinkSkeleton>>;
    from?: EntryFieldTypes.Date;
    to?: EntryFieldTypes.Date;
}

export type TypeProfileSkeleton = EntrySkeletonType<TypeProfileFields, "profile">;
export type TypeProfile<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeProfileSkeleton, Modifiers, Locales>;
