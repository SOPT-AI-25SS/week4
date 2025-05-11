import * as fs from "fs";
import * as path from "path";
import FormDataNode from "form-data";
import axios from "axios";

export async function uploadDocument(
  filePath: string,
  parserType: string,
  bucketId: string,
  apiKey: string,
  webhookUrl: string = ""
) {
  const form = new FormDataNode();
  form.append("file", fs.createReadStream(path.join(filePath)));
  form.append("bucketId", bucketId);
  form.append("parserType", parserType);
  form.append("webhookUrl", webhookUrl);

  try {
    const response = await axios.post(
      "https://live-stargate.sionic.im/api/v2/documents/by-file",
      form,
      {
        headers: {
          ...form.getHeaders(),
          "storm-api-key": apiKey,
        },
      }
    );
    console.log("Response data:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error uploading file:", error);
    throw error;
  }
}

export async function askQuestion(question: string, apiKey: string) {
  try {
    const response = await axios.post(
      `https://live-stargate.sionic.im/api/v2/answer`,
      {
        question: question,
      },
      {
        headers: {
          "Content-Type": "application/json",
          "storm-api-key": apiKey,
        },
      }
    );

    console.log("Response data:", response.data.data);
    return response.data;
  } catch (error) {
    console.error("Error getting answer:", error);
    throw error;
  }
}
