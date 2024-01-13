// import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
// import { NextApiRequest, NextApiResponse } from "next";

// const { R2_ACCOUNT_ID, R2_ACCESS_KEY_ID, R2_SECRET_KEY_ID, R2_BUCKET_NAME } = process.env;

// const R2 = new S3Client({
//   region: "auto",
//   endpoint: `https://${R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
//   credentials: {
//     accessKeyId: R2_ACCESS_KEY_ID,
//     secretAccessKey: R2_SECRET_KEY_ID,
//   },
// });

// export async function uploadFile(fileName: string, data: Buffer) {
//   const fileHash = data.toString('hex');
//   const contentType = 'application/octet-stream'; // Update this as per your file type

//   const command = new PutObjectCommand({
//     Bucket: R2_BUCKET_NAME,
//     Key: `resources/${fileHash}/${fileName}`,
//     Body: data,
//     ContentType: contentType,
//   });

//   const response = await R2.send(command);

//   if (response.$metadata.httpStatusCode === 200) {
//     return `https://${R2_BUCKET_NAME}.cf.rackcdn.com/resources/${fileHash}/${fileName}`;
//   } else {
//     throw new Error(`Failed to upload file: ${response.$metadata.httpStatusCode}`);
//   }
// }

import * as Bytescale from "@bytescale/sdk";
import nodeFetch from "node-fetch";

const uploadManager = new Bytescale.UploadManager({
  fetchApi: nodeFetch as any, // assert nodeFetch as any
  apiKey: process.env.BYTESCALE_API_KEY, // Your Bytescale API key
});

export async function uploadFile(data: Buffer) {
  return uploadManager.upload({
    // Supported types:
    // - String
    // - Blob
    // - ArrayBuffer
    // - Buffer
    // - ReadableStream (Node.js), e.g. fs.createReadStream("file.txt")
    data,

    // Required if 'data' is a stream, buffer, or string.
    mime: "audio/mpeg",

    // Required if 'data' is a stream, buffer, or string.
    originalFileName: "my_file.mp3",

    // Required if 'data' is a stream.
    // size: 5098, // e.g. fs.statSync("file.txt").size
  });
  // .then(
  //   ({ fileUrl, filePath }) => {
  //     // --------------------------------------------
  //     // File successfully uploaded!
  //     // --------------------------------------------
  //     // The 'filePath' uniquely identifies the file,
  //     // and is what you should save to your DB.
  //     // --------------------------------------------
  //     console.log(`File uploaded to: ${fileUrl}`);
  //   },
  //   (error) => console.error(`Error: ${error.message}`, error)
  // );
}
