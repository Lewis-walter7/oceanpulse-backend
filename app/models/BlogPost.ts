export class BlogPost {
  private title: string;
  private image: string;
  private description: string;
  private url: string;
  
    constructor(url: string, title: string, description: string, image: string) {
      this.title = title;
      this.image = image;
      this.description = description;
      this.url = url;
    }
  
    // Getter methods for accessing the private properties
    get _url(): string {
      return this.url;
    }
  
    get _title(): string {
      return this.title;
    }
  
    get _description(): string {
      return this.description;
    }
  
    get _image(): string {
      return this.image;
    }
  }

  