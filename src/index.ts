import "dotenv/config";
import { askQuestion, uploadDocument } from "./functions";

const API_KEY = process.env.STORM_API_KEY;
const DEFAULT_BUCKET_ID = process.env.STORM_DEFAULT_BUCKET_ID;
const WEB_HOOK_URL = process.env.WEBHOOK_URL || "";

async function main() {
  if (!API_KEY || !DEFAULT_BUCKET_ID) {
    console.error("API Key or Bucket ID not provided.");
    process.exit(1);
  }

  const command = process.argv[2];

  if (!command) {
    showUsage();
    return;
  }

  try {
    switch (command) {
      case "upload":
        const filePath = process.argv[3] || "sample.pdf";
        const parserType = process.argv[4] || "DEFAULT"; // "DEFAULT" or "STORM_PARSE"
        const bucketId = process.argv[5] || DEFAULT_BUCKET_ID;
        await uploadDocument(
          filePath,
          parserType,
          bucketId,
          API_KEY,
          WEB_HOOK_URL
        );
        break;

      case "ask":
        const question = process.argv[3] || "강릉 막국수 맛집 알려줘";
        await askQuestion(question, API_KEY);
        break;

      default:
        showUsage();
    }
  } catch (error) {
    console.error("Operation failed:", error);
    process.exit(1);
  }
}

function showUsage() {
  console.log(`
API 테스트 도구 사용법:

1. 문서 업로드:
   npm run upload -- [파일경로] [파서타입] [버킷ID]
   예: npm run upload -- sample.pdf DEFAULT 7327191997217075201

2. 질문하기:
   npm run ask -- "질문내용"
   예: npm run ask -- "강릉 막국수 맛집 알려줘"
  `);
}

main();
