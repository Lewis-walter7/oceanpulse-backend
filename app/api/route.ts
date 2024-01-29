import { createBlogPosts } from "../models/BlogPost"

export async function GET() {
    const response = createBlogPosts()
    return Response.json({response})
}