import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeTimelineFields {
    year: EntryFieldTypes.Integer;
    description: EntryFieldTypes.RichText;
    important: EntryFieldTypes.Boolean;
}

export type TypeTimelineSkeleton = EntrySkeletonType<TypeTimelineFields, "timeline">;
export type TypeTimeline<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeTimelineSkeleton, Modifiers, Locales>;
