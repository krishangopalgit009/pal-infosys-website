export type PageMetadata = {
  title: string
  description: string
  path: string
  label: string
  indexable?: boolean
  article?: { author: string; publishedOn: string }
}
