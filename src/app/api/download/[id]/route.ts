import { getModEntryById } from "@/actions/mod-entry";
import { existsSync, readFileSync } from "fs";
import { NextRequest, NextResponse } from "next/server";
import path from "path";

export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const {id} = await params

  const entry = await getModEntryById(id)
  if(!entry){
    return NextResponse.json({ error: "File not found" }, { status: 404 });
  }

  const modsDir = process.env.MODS_DIR
  if(modsDir){
    const fullPath = path.join(process.cwd(), modsDir, entry.filePath)
    if (!existsSync(fullPath)) {
      return NextResponse.json({ error: "File missing on disk" }, { status: 404 });
    }
    const fileBuffer = readFileSync(fullPath);
    return new NextResponse(fileBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'application/octet-stream',
        'Content-Disposition': `attachment; filename="${entry.filePath}"`,
      },
    });
  }




}