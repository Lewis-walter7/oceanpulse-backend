import { createBlogPosts } from "../constants/blogConstants"

export async function GET() {
    const response = createBlogPosts()
    return Response.json(response)
}