export interface Author {
  name: string
  avatar: string
  bio?: string
}

export interface BlogPost {
  id: string
  title: string
  slug: string
  date: string
  coverImage: string
  excerpt: string
  content: string
  author: Author
  category?: string
  tags?: string[]
  readingTime: number
  featured?: boolean
}

