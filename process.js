const axios = require("axios");
const delay = 1000; // Delay in milliseconds (1000ms = 1 second)

const urls = [
  "https://podletter.xyz/api/mail/process/d0c418ae-1da6-464d-baeb-9d7c5c1e9032",
  "https://podletter.xyz/api/mail/process/ab855ac7-72d5-4065-b5db-2b935a7c318a",
  "https://podletter.xyz/api/mail/process/c7a93d75-ca9a-4f4f-b50e-ef5d448e80f4",
  "https://podletter.xyz/api/mail/process/c5626dcc-4394-43ce-b0ef-e9ef11fccf4d",
  "https://podletter.xyz/api/mail/process/c696de5c-1409-4ea4-9e78-02dab1c99b5f",
  "https://podletter.xyz/api/mail/process/93e0b515-c8be-4637-852f-0a9c9c4823c9",
  "https://podletter.xyz/api/mail/process/2ac0367b-44bd-4c34-969e-fc4cedb9ee7d",
  "https://podletter.xyz/api/mail/process/67119341-9792-4176-b2a6-d2ce60ccb786",
  "https://podletter.xyz/api/mail/process/c9aa2f0f-631c-4647-b2ef-593dc85462e9",
  "https://podletter.xyz/api/mail/process/83eb3ba0-6df6-4de7-88e8-aec49d975b85",
  "https://podletter.xyz/api/mail/process/2ab14d23-8133-4904-af1b-e294adfc120e",
  "https://podletter.xyz/api/mail/process/c304b32f-3b77-451e-8740-41714fbd7c82",
  "https://podletter.xyz/api/mail/process/14dcaa4f-9730-43af-a507-04f76b6eecb0",
  "https://podletter.xyz/api/mail/process/89a8b813-86f6-47fa-a9a5-f1f17abc20fa",
  "https://podletter.xyz/api/mail/process/b24e44d7-f020-4761-a3c6-a8ff2796b562",
  "https://podletter.xyz/api/mail/process/5bf23c4f-af05-4593-8614-c3412c459dc8",
  "https://podletter.xyz/api/mail/process/356c1a98-188a-421c-8439-08d066c86dc0",
  "https://podletter.xyz/api/mail/process/9a69bc38-dfc1-4ef1-900d-695e8e1ac772",
  "https://podletter.xyz/api/mail/process/7c12dde4-d222-4542-bbcd-70c2b7190caf",
  "https://podletter.xyz/api/mail/process/866ed8ea-5d95-451f-a312-854e93d4b1de",
  "https://podletter.xyz/api/mail/process/be1ca44f-c3f9-4b40-b8de-87504dc1491a",
  "https://podletter.xyz/api/mail/process/e3605d7e-4b96-4329-bed1-1d8c52663b7c",
  "https://podletter.xyz/api/mail/process/1cf5dc2a-580f-43fc-b0c1-9bbf8d5b11d2",
  "https://podletter.xyz/api/mail/process/796ffe22-e3d3-4692-a3cb-4b29f29a5973",
  "https://podletter.xyz/api/mail/process/b622dfce-d908-4556-9030-5c0eabed3858",
  "https://podletter.xyz/api/mail/process/dd387827-4091-43f2-b2b0-92025aa77bf2",
  "https://podletter.xyz/api/mail/process/7d50e6d7-1bee-41af-9b32-ff3897b6823f",
  "https://podletter.xyz/api/mail/process/9cd9a923-43b1-4a61-8dd9-25fcec08fab0",
  "https://podletter.xyz/api/mail/process/d16a39ea-2615-4f32-b470-70c449938447",
  "https://podletter.xyz/api/mail/process/35b25a0e-9f49-4920-9e06-50caf5cc7b4d",
  "https://podletter.xyz/api/mail/process/a9f8e3f3-4cb8-493a-a84a-eb99338f3210",
  "https://podletter.xyz/api/mail/process/65fd651c-b723-4ada-9444-7134ca28feef",
  "https://podletter.xyz/api/mail/process/837e1f6a-5cb7-46d4-86a4-e60444a37273",
  "https://podletter.xyz/api/mail/process/82852077-5070-4cd8-8598-b4302716c009",
  "https://podletter.xyz/api/mail/process/ac25c955-f4bf-4847-8e15-b7c476c01373",
  "https://podletter.xyz/api/mail/process/9fc31799-fb91-42ca-bf23-759c054a87b6",
  "https://podletter.xyz/api/mail/process/4b3ab212-e5bb-4023-a89e-83e96aa6dade",
  "https://podletter.xyz/api/mail/process/052d2459-d4eb-45c1-addf-51a181820610",
  "https://podletter.xyz/api/mail/process/1b1b1f80-0f2d-45b5-b32d-e7cc4f70dee4",
  "https://podletter.xyz/api/mail/process/5328b1e6-dffa-4d1c-8a4a-01ce8653a0e0",
  "https://podletter.xyz/api/mail/process/a1fb96f3-03d8-4905-a772-bdda1d89ff49",
  "https://podletter.xyz/api/mail/process/25779bc3-4ad9-47f9-9839-e492b88342d4",
  "https://podletter.xyz/api/mail/process/68c4b0b1-83ac-4999-a403-be024159b879",
  "https://podletter.xyz/api/mail/process/00d61375-9314-4925-b7bc-c5bc4a5e7f02",
  "https://podletter.xyz/api/mail/process/2d46fc84-d89f-4eda-bc21-04d9dc74d1d6",
  "https://podletter.xyz/api/mail/process/e7cc4ec4-83e7-49cb-93d6-d968855a1ec7",
  "https://podletter.xyz/api/mail/process/e33f9dfd-1b4f-4265-b4e8-03794243fac4",
  "https://podletter.xyz/api/mail/process/fb5f23e0-7f6b-43e8-916f-ee5ecae53e54",
];

async function sendPostRequest(url) {
  try {
    const response = await axios.post(url);
    console.log(`POST request to ${url} successful:`, response.data);
  } catch (error) {
    console.error(`POST request to ${url} failed:`, error);
  }
}

function processUrls(urls) {
  let index = 0;

  const intervalId = setInterval(() => {
    if (index >= urls.length) {
      clearInterval(intervalId);
      console.log("All requests sent.");
    } else {
      sendPostRequest(urls[index]);
      index++;
    }
  }, delay);
}

processUrls(urls);
