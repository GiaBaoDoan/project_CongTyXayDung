import { Base64 } from "js-base64";
export async function FileToBase64(file: File) {
  const result =
    "data:" + file.type + ";base64," + Base64.encode(await file.text());
  return result
}
