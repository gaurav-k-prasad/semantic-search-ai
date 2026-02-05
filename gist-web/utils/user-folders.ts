import { FileData } from "@/types/folder-files";
import { readdirSync } from "fs";
import * as p from "path";

export function fetchUserFolders(username: string, path: string) {
  const userFolderPath = process.env.USER_FOLDERS_PATH;
  const filesList: FileData[] = [];
  const foldersList: FileData[] = [];
  if (!userFolderPath) {
    return null;
  }

  const absPath = p.join(userFolderPath, username, path);
  console.log("Final Path: ", path);

  const files = readdirSync(absPath, { withFileTypes: true, recursive: false });

  for (const file of files) {
    if (file.isFile()) {
      filesList.push({
        name: file.name,
        path: p.join(path, file.name),
      });
    } else {
      foldersList.push({ name: file.name, path: p.join(path, file.name) });
    }
  }

  return { files: filesList, folders: foldersList };
}
