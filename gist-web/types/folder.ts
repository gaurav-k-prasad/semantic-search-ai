export type FolderStructure = {
  name: string;
  files: string[];
  folders: FolderStructure[];
};
