import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeLinkSkeleton } from "./TypeLink";

export interface TypeSocialFields {
    id: EntryFieldTypes.Symbol;
    icon: EntryFieldTypes.Symbol<"email" | "facebook" | "github" | "instagram" | "linkedin" | "phone" | "tiktok" | "website" | "youtube">;
    link: EntryFieldTypes.EntryLink<TypeLinkSkeleton>;
}

export type TypeSocialSkeleton = EntrySkeletonType<TypeSocialFields, "social">;
export type TypeSocial<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeSocialSkeleton, Modifiers, Locales>;
