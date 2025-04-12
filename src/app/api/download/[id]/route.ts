import { getModEntryById } from "@/actions/mod-entry";
import { existsSync, readFileSync } from "fs";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const {id} = params

  const entry = await getModEntryById(id)
  if(!entry){
    return NextResponse.json({ error: "File not found" }, { status: 404 });
  }

  if (!existsSync(entry.filePath)) {
    return NextResponse.json({ error: "File missing on disk" }, { status: 404 });
  }

  const fileBuffer = readFileSync(entry.filePath);

  return new NextResponse(fileBuffer, {
    status: 200,
    headers: {
      'Content-Type': 'application/octet-stream',
      'Content-Disposition': `attachment; filename="test.pdf"`,
    },
  });
}