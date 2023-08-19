import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypePostFields {
    slug: EntryFieldTypes.Symbol;
    title: EntryFieldTypes.Symbol;
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
