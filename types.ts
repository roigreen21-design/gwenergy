
export interface SiteSettings {
  title: string;
  description: string;
  primaryColor: string;
  socialLinks: {
    instagram: string;
    facebook: string;
    blog: string;
  };
}

export interface Post {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  imageUrl: string;
  date: string;
}

export interface Project {
  id: string;
  title: string;
  location: string;
  capacity: string;
  imageUrl: string;
  year: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  date: string;
}
