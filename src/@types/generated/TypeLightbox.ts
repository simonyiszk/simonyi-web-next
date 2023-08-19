import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeLightboxFields {
    name: EntryFieldTypes.Symbol;
    photo: EntryFieldTypes.AssetLink;
    date?: EntryFieldTypes.Date;
    location?: EntryFieldTypes.Location;
}

export type TypeLightboxSkeleton = EntrySkeletonType<TypeLightboxFields, "lightbox">;
export type TypeLightbox<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeLightboxSkeleton, Modifiers, Locales>;
