export class BlogPost {
    private _url: string;
    private _title: string;
    private _description: string;
    private _image: string;
  
    constructor(url: string, title: string, description: string, image: string) {
      this._url = url;
      this._title = title;
      this._description = description;
      this._image = image;
    }
  
    // Getter methods for accessing the private properties
    get url(): string {
      return this._url;
    }
  
    get title(): string {
      return this._title;
    }
  
    get description(): string {
      return this._description;
    }
  
    get image(): string {
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
  