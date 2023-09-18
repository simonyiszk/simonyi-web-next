import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeAboutFields {
    name: EntryFieldTypes.Symbol;
    title?: EntryFieldTypes.Symbol;
    description: EntryFieldTypes.RichText;
    displayOnHomepage: EntryFieldTypes.Boolean;
    displayOnAboutBeforeTimeline: EntryFieldTypes.Boolean;
    displayOnAboutAfterTimeline: EntryFieldTypes.Boolean;
}

export type TypeAboutSkeleton = EntrySkeletonType<TypeAboutFields, "about">;
export type TypeAbout<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeAboutSkeleton, Modifiers, Locales>;
