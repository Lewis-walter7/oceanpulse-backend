import { BlogPost } from "../models/BlogPost"

export function createBlogPosts(): BlogPost[] {
    const blogPosts: BlogPost[] = [
      new BlogPost(
        "https://www.ecowatch.com/marine-life-ocean-threats.html",
        "Marine life and ocean threats",
        "Everything you need to know",
        "https://cdn-fhofj.nitrocdn.com/YLARnxovRxHnoSTcLUnkvhePKVxPqkls/assets/images/optimized/rev-dfb2699/www.ecowatch.com/wp-content/uploads/2022/10/sea-turtle-101.jpg"
    ),
    new BlogPost(
        "https://www.ecowatch.com/microplastics-galapagos-penguins.html",
        "Accumulation of microplastics",
        "Food Chain of Endangered Galápagos Penguins",
        "https://cdn-fhofj.nitrocdn.com/YLARnxovRxHnoSTcLUnkvhePKVxPqkls/assets/images/optimized/rev-dfb2699/www.ecowatch.com/wp-content/uploads/2024/01/galapagos-penguins.jpg"
    ),
    ];

    return blogPosts;
  }
  
