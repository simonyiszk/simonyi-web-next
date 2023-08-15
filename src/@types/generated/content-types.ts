import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeAboutFields {
    name: EntryFieldTypes.Symbol;
    title: EntryFieldTypes.Symbol;
    description: EntryFieldTypes.RichText;
}

export type TypeAboutSkeleton = EntrySkeletonType<TypeAboutFields, "about">;
export type TypeAbout<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeAboutSkeleton, Modifiers, Locales>;

export function isTypeAbout<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeAbout<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'about'
}

export interface TypeFooterFields {
    name: EntryFieldTypes.Symbol;
    sections?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeFooterSectionSkeleton>>;
}

export type TypeFooterSkeleton = EntrySkeletonType<TypeFooterFields, "footer">;
export type TypeFooter<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeFooterSkeleton, Modifiers, Locales>;

export function isTypeFooter<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeFooter<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'footer'
}

export interface TypeFooterSectionFields {
    title: EntryFieldTypes.Symbol;
    address?: EntryFieldTypes.RichText;
    links?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeLinkSkeleton>>;
}

export type TypeFooterSectionSkeleton = EntrySkeletonType<TypeFooterSectionFields, "footerSection">;
export type TypeFooterSection<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeFooterSectionSkeleton, Modifiers, Locales>;

export function isTypeFooterSection<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeFooterSection<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'footerSection'
}

export interface TypeLightboxFields {
    name: EntryFieldTypes.Symbol;
    photo: EntryFieldTypes.AssetLink;
    date?: EntryFieldTypes.Date;
    location?: EntryFieldTypes.Location;
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
    hidden: EntryFieldTypes.Boolean;
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
    priority: EntryFieldTypes.Symbol;
    displayOnHome: EntryFieldTypes.Boolean;
    from?: EntryFieldTypes.Date;
    to?: EntryFieldTypes.Date;
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