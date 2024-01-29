export class BlogPost {
    private url: string;
    private title: string;
    private description: string;
    private image: string;
  
    constructor(url: string, title: string, description: string, image: string) {
      this.url = url;
      this.title = title;
      this.description = description;
      this.image = image;
    }
  
    // Getter methods for accessing the private properties
    get _url(): string {
      return this._url;
    }
  
    get _title(): string {
      return this._title;
    }
  
    get _description(): string {
      return this._description;
    }
  
    get _image(): string {
      return this._image;
    }
  }

  export function createBlogPosts(): BlogPost[] {
    const blogPosts: BlogPost[] = [
      new BlogPost(
        'https://example.com/post1',
        'Blog Post 1',
        'Description for Blog Post 1',
        'https://example.com/images/post1.jpg'
      ),
      new BlogPost(
        'https://example.com/post2',
        'Blog Post 2',
        'Description for Blog Post 2',
        'https://example.com/images/post2.jpg'
      ),
    ];
  
    return blogPosts;
  }
  