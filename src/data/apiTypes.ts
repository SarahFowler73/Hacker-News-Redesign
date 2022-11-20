export type PageResult = {
  hits: ReadonlyArray<HitResult>
  nbHits: number
  page: number
  nbPages: number
  hitsPerPage: number
  exhaustiveNbHits: boolean
  exhaustiveTypo: boolean
  exhaustive?: { nbHits: boolean; typo: boolean }
  query: string
  params: string
  processingTimeMS: number
  processingTimingsMS?: object
}

export type HitResult = {
  _tags: ReadonlyArray<
    | 'story'
    | 'poll'
    | 'show_hn'
    | 'ask_hn'
    | 'front_page'
    | `author_${string}`
    | `story_${string}`
  >
  _highlightResult: object
  title: string | null
  url: string | null
  author: string
  points: number | null
  story_id: number | null
  story_text: string | null
  story_title: string | null
  story_url: string | null
  comment_text: string | null
  created_at: string //iso
  created_at_i: number
  num_comments: number | null
  objectID: string
  parent_id: number | null
}
