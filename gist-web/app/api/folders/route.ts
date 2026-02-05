import { auth } from "@/auth";
import { fetchUserFolders } from "@/utils/user-folders";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const path = req.nextUrl.searchParams.get("path");
  const user = (await auth())?.user?.id;

  if (!path)
    return NextResponse.json(
      { error: "Path parameter is required" },
      { status: 400 },
    );
  if (!user)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  try {
    const data = fetchUserFolders(user, path);

    if (!data) {
      return NextResponse.json(
        { error: "Directory not found" },
        { status: 404 },
      );
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to read directory" },
      { status: 500 },
    );
  }
}
