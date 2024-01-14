import axios from "axios";

interface SynthesisTask {
  CreationTime: string;
  OutputUri: string;
  RequestCharacters: number;
  TaskId: string;
  TaskStatus: string;
  TimestampsUri: string;
  VoiceId: string;
}

interface SynthesisResponse {
  SynthesisTask: SynthesisTask;
}

interface TaskStatusResponse {
  SynthesisTask: SynthesisTask;
}

export async function textToAudio({
  text,
}: {
  text: string;
}): Promise<SynthesisResponse> {
  const headers = {
    Authorization: `Bearer ${process.env.UNREAL_SPEECH_API_KEY}`,
  };

  const data = {
    Text: text,
    VoiceId: "Scarlett",
    Bitrate: "192k",
    Speed: "0",
    Pitch: "1",
    TimestampType: "sentence",
  };

  const response = await axios<SynthesisResponse>({
    method: "post",
    url: "https://api.v6.unrealspeech.com/synthesisTasks",
    headers: headers,
    data: data,
  });

  console.log({ response: response.data });
  return response.data;
}

export async function checkTaskStatusUnreal({
  taskId,
}: {
  taskId: string;
}): Promise<TaskStatusResponse> {
  const headers = {
    Authorization: `Bearer ${process.env.UNREAL_SPEECH_API_KEY}`,
  };

  const response = await axios({
    method: "get",
    url: `https://api.v6.unrealspeech.com/synthesisTasks/${taskId}`,
    headers: headers,
  });

  return response.data;
}
