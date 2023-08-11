import type { Asset, Entry, EntryFields } from "contentful";

export interface TypeLightboxFields {
    id: EntryFields.Symbol;
    photo: Asset;
    title: EntryFields.Symbol;
    description?: EntryFields.Symbol;
    width?: EntryFields.Integer;
    height?: EntryFields.Integer;
}

export type TypeLightbox = Entry<TypeLightboxFields>;
