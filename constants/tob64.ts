export async function FileToBase64(file: File) {
  return "data:" + file.type + ";base64," + toBase64(file);
}

const toBase64 = (file: Blob) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
  });
