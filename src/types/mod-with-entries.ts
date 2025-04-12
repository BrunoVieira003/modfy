import { Mod, ModEntry, Prisma } from "@prisma/client";

export type ModWithEntries = Prisma.ModGetPayload<{
    include: {
        game: {
            select: {
                slug: true,
                title: true
            }
        },
        entries: true
} }>