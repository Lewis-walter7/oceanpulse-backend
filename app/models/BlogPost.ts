export class BlogPost {
  private image: string;
  private url: string;
  private description: string;
  private title: string;
  
  constructor(url: string, title: string, description: string, image: string) {
    this.image = image;
    this.url = url;
      this.description = description;
      this.title = title;
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

  