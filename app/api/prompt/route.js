import Prompt from "@models/prompt"
import { connectToDB } from "@utils/database"

export const GET = async (request) => {
  try {
    await connectToDB()

    const prompts = await Prompt.find({}).populate("creator")
    console.log(prompts)
    return new Response(JSON.stringify(prompts), {
      status: 200,
    })
  } catch (error) {
    return new Response(
      JSON.stringify({
        message: "Failed to fetch all prompts",
        error: error.message,
      }),
      {
        status: 500,
      }
    )
  }
}
