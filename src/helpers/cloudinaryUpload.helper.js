import { axiosInstance } from "./axios.helper";

export async function uploadFileToCloudinary(file, resourceType, signal) {
  const { data: signatureResponse } = await axiosInstance.get(
    `/videos/upload-signature?resourceType=${resourceType}`,
    { signal }
  );

  const { cloudName, apiKey, timestamp, signature, folder } =
    signatureResponse.data;

  const formData = new FormData();
  formData.append("file", file);
  formData.append("api_key", apiKey);
  formData.append("timestamp", String(timestamp));
  formData.append("signature", signature);
  formData.append("folder", folder);

  const uploadUrl = `https://api.cloudinary.com/v1_1/${cloudName}/${resourceType}/upload`;

  const response = await fetch(uploadUrl, {
    method: "POST",
    body: formData,
    signal,
  });

  if (!response.ok) {
    const errorBody = await response.json().catch(() => ({}));
    throw new Error(errorBody.error?.message || "Cloudinary upload failed");
  }

  const result = await response.json();

  return {
    secure_url: result.secure_url,
    duration: result.duration,
  };
}
