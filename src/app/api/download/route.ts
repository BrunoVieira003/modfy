import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { configDotenv } from "dotenv";

configDotenv()

export async function GET(request: Request) {
  const url = new URL(request.url);
  const file = url.searchParams.get("file");
  const modsDir = String(process.env.DOWNLOADS_DIR)

  if (!file || typeof file !== "string") {
    return NextResponse.json({ error: "File path is required" }, { status: 400 });
  }

  const safeFileName = path.basename(file);
  const filePath = path.join(file);

  if (!fs.existsSync(filePath)) {
    return NextResponse.json({ error: "File not found" }, { status: 404 });
  }

  // Criar um ReadableStream a partir do arquivo
  const fileStream = fs.createReadStream(filePath);

  // Configurar cabeçalhos para o download do arquivo
  const headers = new Headers();
  headers.set("Content-Disposition", `attachment; filename="${safeFileName}"`);
  headers.set("Content-Type", "application/octet-stream");

  // Criar uma resposta de fluxo
  const stream = new ReadableStream({
    start(controller) {
      fileStream.on("data", (chunk) => {
        controller.enqueue(chunk); // Enviar pedaços de dados
      });
      fileStream.on("end", () => {
        controller.close(); // Finaliza o fluxo
      });
      fileStream.on("error", (err) => {
        controller.error(err); // Caso haja erro no stream
      });
    },
  });

  // Retornar a resposta com o fluxo
  return new NextResponse(stream, { headers });
}
