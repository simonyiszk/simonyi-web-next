import type { Asset, Entry, EntryFields } from "contentful";

export interface TypePostFields {
    contentTypeId: 'post';
    fields: {
        slug: EntryFields.Symbol;
        body: EntryFields.RichText;
        title?: EntryFields.Symbol;
        description?: EntryFields.Text;
        date?: EntryFields.Date;
        author?: EntryFields.Symbol;
        authors?: EntryFields.Symbol[];
        published?: EntryFields.Boolean;
        hidden?: EntryFields.Boolean;
        tags?: EntryFields.Symbol[];
        previewImage?: Asset;
        ogImage?: Asset;
        ogImageWidth?: EntryFields.Integer;
        ogImageHeight?: EntryFields.Integer;
    }
}

export type TypePost = Entry<TypePostFields>;
