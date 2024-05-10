"use server";

import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";
import { HfInference, TextClassificationOutput } from "@huggingface/inference";

import db from "../../../db/drizzle";
import { posts } from "../../../db/schema";

let hf: HfInference;

export async function postMessage(formData: FormData) {

  const { userId } = auth();

  if (!userId) {
    throw new Error('Unauthorized');
  }

  const message = formData.get('message') as string;

  const inferenceResponse: TextClassificationOutput = await runHfInference(message);

  const isPositive = positiveEnough(inferenceResponse);

  if (!isPositive) {
    return {
      error: 'Try a more positive message'
    }
  }

  await db.insert(posts).values({ userId: userId, message: message });

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

function positiveEnough(output: TextClassificationOutput) {
  return output[0].label === 'POS' && output[0].score >= 0.75;
}
