import ImageKit from "imagekit";
import { NextResponse } from "next/server";

const imagekit = new ImageKit({
  publicKey: process.env.IMAGE_PUBLIC_KEY!,
  privateKey: process.env.PRIVATE_KEY!,
  urlEndpoint: process.env.IMAGE_PRIVATE_KEY!,
});

export async function GET() {
  return NextResponse.json(imagekit.getAuthenticationParameters());
}