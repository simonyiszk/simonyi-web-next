import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeAboutFields {
    title: EntryFieldTypes.Symbol;
    description: EntryFieldTypes.RichText;
}

export type TypeAboutSkeleton = EntrySkeletonType<TypeAboutFields, "about">;
export type TypeAbout<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeAboutSkeleton, Modifiers, Locales>;

export function isTypeAbout<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeAbout<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'about'
}

export interface TypeLightboxFields {
    id: EntryFieldTypes.Symbol;
    photo: EntryFieldTypes.AssetLink;
    title: EntryFieldTypes.Symbol;
    description?: EntryFieldTypes.Symbol;
    width?: EntryFieldTypes.Integer;
    height?: EntryFieldTypes.Integer;
}

export type TypeLightboxSkeleton = EntrySkeletonType<TypeLightboxFields, "lightbox">;
export type TypeLightbox<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeLightboxSkeleton, Modifiers, Locales>;

export function isTypeLightbox<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeLightbox<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'lightbox'
}

export interface TypeLinkFields {
    url: EntryFieldTypes.Symbol;
    title: EntryFieldTypes.Symbol;
    text: EntryFieldTypes.Symbol;
}

export type TypeLinkSkeleton = EntrySkeletonType<TypeLinkFields, "link">;
export type TypeLink<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeLinkSkeleton, Modifiers, Locales>;

export function isTypeLink<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeLink<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'link'
}

export interface TypePostFields {
    slug: EntryFieldTypes.Symbol;
    title?: EntryFieldTypes.Symbol;
    authors?: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
    date?: EntryFieldTypes.Date;
    description?: EntryFieldTypes.Text;
    body: EntryFieldTypes.RichText;
    published?: EntryFieldTypes.Boolean;
    hidden?: EntryFieldTypes.Boolean;
    tags?: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
    previewImage?: EntryFieldTypes.AssetLink;
    ogImage?: EntryFieldTypes.AssetLink;
}

export type TypePostSkeleton = EntrySkeletonType<TypePostFields, "post">;
export type TypePost<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypePostSkeleton, Modifiers, Locales>;

export function isTypePost<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypePost<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'post'
}

export interface TypeProfileFields {
    name: EntryFieldTypes.Symbol;
    title: EntryFieldTypes.Symbol;
    profilePicture: EntryFieldTypes.AssetLink;
    socials: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeSocialSkeleton>>;
}

export type TypeProfileSkeleton = EntrySkeletonType<TypeProfileFields, "profile">;
export type TypeProfile<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeProfileSkeleton, Modifiers, Locales>;

export function isTypeProfile<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeProfile<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'profile'
}

export interface TypeSocialFields {
    id: EntryFieldTypes.Symbol;
    icon: EntryFieldTypes.Symbol<"email" | "facebook" | "github" | "instagram" | "linkedin" | "phone" | "tiktok" | "website" | "youtube">;
    link: EntryFieldTypes.EntryLink<TypeLinkSkeleton>;
}

export type TypeSocialSkeleton = EntrySkeletonType<TypeSocialFields, "social">;
export type TypeSocial<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeSocialSkeleton, Modifiers, Locales>;

export function isTypeSocial<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeSocial<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'social'
}

export interface TypeStudentGroupFields {
    name: EntryFieldTypes.Symbol;
    logo: EntryFieldTypes.AssetLink;
    description: EntryFieldTypes.Text;
    socials: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeSocialSkeleton>>;
    isDense: EntryFieldTypes.Boolean;
}

export type TypeStudentGroupSkeleton = EntrySkeletonType<TypeStudentGroupFields, "studentGroup">;
export type TypeStudentGroup<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeStudentGroupSkeleton, Modifiers, Locales>;

export function isTypeStudentGroup<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeStudentGroup<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'studentGroup'
}
