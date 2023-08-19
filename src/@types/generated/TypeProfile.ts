import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeSocialSkeleton } from "./TypeSocial";

export interface TypeProfileFields {
    name: EntryFieldTypes.Symbol;
    title: EntryFieldTypes.Symbol;
    profilePicture: EntryFieldTypes.AssetLink;
    socials: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeSocialSkeleton>>;
    priority: EntryFieldTypes.Symbol;
    displayOnHome: EntryFieldTypes.Boolean;
    from?: EntryFieldTypes.Date;
    to?: EntryFieldTypes.Date;
}

export type TypeProfileSkeleton = EntrySkeletonType<TypeProfileFields, "profile">;
export type TypeProfile<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeProfileSkeleton, Modifiers, Locales>;
