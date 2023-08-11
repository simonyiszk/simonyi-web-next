import type { Asset, Entry, EntryFields } from "contentful";

export interface TypeStudentGroupFields {
    name: EntryFields.Symbol;
    logo: Asset;
    description: EntryFields.Text;
    socials: Entry<Record<string, any>>[];
    isDense: EntryFields.Boolean;
}

export type TypeStudentGroup = Entry<TypeStudentGroupFields>;
