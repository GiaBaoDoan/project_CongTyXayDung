import { v2 as cloudinary } from "cloudinary";
cloudinary.config({
  cloud_name: "giabao12",
  api_key: "421266411794245",
  api_secret: "KGJ9PbBuVez34bwhkRDG-YCol6g",
});
const images =
  "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg";
// upload image
export const uploadIamge = async () => {
  const result = await cloudinary.uploader.upload(images);
  console.log(result);
};
