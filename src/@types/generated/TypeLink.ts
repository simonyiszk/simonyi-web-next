import type { Entry, EntryFields } from "contentful";

export interface TypeLinkFields {
    url: EntryFields.Symbol;
    title: EntryFields.Symbol;
    text: EntryFields.Symbol;
}

export type TypeLink = Entry<TypeLinkFields>;
