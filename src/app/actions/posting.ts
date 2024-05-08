"use server";

import { HfInference } from "@huggingface/inference";

import { redirect } from "next/navigation";

let hf: HfInference;

export async function postMessage(userId: string, formData: FormData) {

  const message = formData.get('message') as string;

  const inferenceResponse = await runHfInference(message);

  redirect('/message');
}

async function runHfInference(input: string) {
  if (!hf) {
    hf = new HfInference(process.env.HF_TOKEN);
  }

  const modelName = "finiteautomata/bertweet-base-sentiment-analysis";
  const inferenceResult = await hf.textClassification({
    model: modelName,
    inputs: input
  });

  return inferenceResult;
}
