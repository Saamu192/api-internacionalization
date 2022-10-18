import { writeFile, readFile } from "fs/promises";

export const save = async (data) => {
  const currentData = JSON.parse(await readFile("./database.json"));
  currentData.push(data);

  await writeFile("./database.json", JSON.stringify(currentData, null, 2));
};
