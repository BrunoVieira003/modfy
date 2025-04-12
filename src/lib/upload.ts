// lib/upload.ts
import { writeFile, mkdir } from 'fs/promises';
import path from 'path';

export async function uploadFile(formData: FormData): Promise<string> {
  const file = formData.get('file') as File;

  if (!file || typeof file === 'string') {
    throw new Error('Invalid file');
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const uploadDir = path.join(process.cwd(), 'uploads');
  await mkdir(uploadDir, { recursive: true });

  const filePath = path.join(uploadDir, file.name);
  await writeFile(filePath, buffer);

  return `/uploads/${file.name}`;
}
