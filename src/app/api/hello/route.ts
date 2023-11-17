import type { NextRequest } from "next/server";
import { Ai } from "@cloudflare/ai";

export const runtime = "edge";

export async function GET(request: NextRequest) {
	const ai = new Ai(process.env.AI);
	const messages = [{ role: "user", content: "hello world" }];
	const result = await ai.run("@cf/meta/llama-2-7b-chat-fp16", { messages });
	return new Response(JSON.stringify(result));
}
