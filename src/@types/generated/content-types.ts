import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

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

export interface TypeLinkFields {
    url: EntryFieldTypes.Symbol;
    title: EntryFieldTypes.Symbol;
    text: EntryFieldTypes.Symbol;
}

export type TypeLinkSkeleton = EntrySkeletonType<TypeLinkFields, "link">;
export type TypeLink<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeLinkSkeleton, Modifiers, Locales>;

export interface TypePostFields {
    slug: EntryFieldTypes.Symbol;
    body: EntryFieldTypes.RichText;
    title?: EntryFieldTypes.Symbol;
    description?: EntryFieldTypes.Text;
    date?: EntryFieldTypes.Date;
    author?: EntryFieldTypes.Symbol;
    authors?: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
    published?: EntryFieldTypes.Boolean;
    hidden?: EntryFieldTypes.Boolean;
    tags?: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
    previewImage?: EntryFieldTypes.AssetLink;
    ogImage?: EntryFieldTypes.AssetLink;
    ogImageWidth?: EntryFieldTypes.Integer;
    ogImageHeight?: EntryFieldTypes.Integer;
}

export type TypePostSkeleton = EntrySkeletonType<TypePostFields, "post">;
export type TypePost<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypePostSkeleton, Modifiers, Locales>;

export interface TypeProfileFields {
    name: EntryFieldTypes.Symbol;
    title: EntryFieldTypes.Symbol;
    profilePicture: EntryFieldTypes.AssetLink;
    socials: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<EntrySkeletonType>>;
}

export type TypeProfileSkeleton = EntrySkeletonType<TypeProfileFields, "profile">;
export type TypeProfile<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeProfileSkeleton, Modifiers, Locales>;

export interface TypeSocialFields {
    id: EntryFieldTypes.Symbol;
    icon: EntryFieldTypes.Symbol<"email" | "facebook" | "github" | "instagram" | "linkedin" | "phone" | "tiktok" | "website" | "youtube">;
    link: EntryFieldTypes.EntryLink<EntrySkeletonType>;
}

export type TypeSocialSkeleton = EntrySkeletonType<TypeSocialFields, "social">;
export type TypeSocial<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeSocialSkeleton, Modifiers, Locales>;

export interface TypeStudentGroupFields {
    name: EntryFieldTypes.Symbol;
    logo: EntryFieldTypes.AssetLink;
    description: EntryFieldTypes.Text;
    socials: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<EntrySkeletonType>>;
    isDense: EntryFieldTypes.Boolean;
}

export type TypeStudentGroupSkeleton = EntrySkeletonType<TypeStudentGroupFields, "studentGroup">;
export type TypeStudentGroup<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeStudentGroupSkeleton, Modifiers, Locales>;
