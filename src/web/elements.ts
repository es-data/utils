/** HTML tags where it cannot have any child nodes */
export const voids = [
    "area",
    "base",
    "br",
    "col",
    "embed",
    "hr",
    "img",
    "input",
    "link",
    "meta",
    "param",
    "source",
    "track",
    "wbr",
] as const

/** HTML tags whose contents are not affected by the current document's styles. The position of the replaced element can be affected using CSS, but not the contents of the replaced element itself. */
export const replaced = [
    "img",
    "video",
    "iframe",
    "embed",
    "fencedframe",

    "option",
    "audio",
    "canvas",
    "object",
] as const