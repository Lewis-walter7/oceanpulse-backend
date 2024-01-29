import { BlogPost } from "../models/BlogPost"

export function createBlogPosts(): BlogPost[] {
    const blogPosts: BlogPost[] = [
      new BlogPost(
        "Marine life and ocean threats",
        "https://cdn-fhofj.nitrocdn.com/YLARnxovRxHnoSTcLUnkvhePKVxPqkls/assets/images/optimized/rev-dfb2699/www.ecowatch.com/wp-content/uploads/2022/10/sea-turtle-101.jpg",
        "Everything you need to know",
        "https://www.ecowatch.com/marine-life-ocean-threats.html"
    ),
    new BlogPost(
        "Accumulation of microplastics",
        "https://cdn-fhofj.nitrocdn.com/YLARnxovRxHnoSTcLUnkvhePKVxPqkls/assets/images/optimized/rev-dfb2699/www.ecowatch.com/wp-content/uploads/2024/01/galapagos-penguins.jpg",
        "Food Chain of Endangered Galápagos Penguins",
        "https://www.ecowatch.com/microplastics-galapagos-penguins.html"
    ),
    ];
  
    return blogPosts;
  }
  
