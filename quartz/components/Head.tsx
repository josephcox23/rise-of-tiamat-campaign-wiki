import { pathToRoot, joinSegments } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const Head: QuartzComponent = ({ cfg, fileData }: QuartzComponentProps) => {
  const title = fileData.frontmatter?.title ?? "Campaign Wiki"
  const description = fileData.frontmatter?.description ?? "Campaign Notes"

  const baseDir = pathToRoot(fileData.slug!)
  const iconPath = joinSegments(baseDir, "static/icon.png")
  const ogImagePath = joinSegments(baseDir, "static/og-image.png")

  return (
    <head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content={description} />
      <meta name="generator" content="Quartz" />
      <link rel="icon" href={iconPath} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImagePath} />
      <meta name="twitter:card" content="summary_large_image" />
    </head>
  )
}

export default (() => Head) satisfies QuartzComponentConstructor
