import type { Asset, Entry, EntryFields } from "contentful";

export interface TypeProfileFields {
    contentTypeId: 'profile';
    fields: {
        name: EntryFields.Symbol;
        title: EntryFields.Symbol;
        profilePicture: Asset;
        socials: Entry<Record<string, any>>[];
    }
}

export type TypeProfile = Entry<TypeProfileFields>;
