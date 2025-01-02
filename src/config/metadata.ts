export interface MetaData {
  title: string;
  description: string;
  image?: string;
  canonicalURL?: string;
}

export const siteMetadata = {
  title: "LineSpaceStudio",
  description: "Modern Architectural Design Solutions",
  siteUrl: "https://linespacestudio.com", // Update with actual URL
  siteName: "LineSpaceStudio",
  siteLanguage: "en",
  ogImage: "/images/brand/default-og.jpg",
  socials: {
    instagram: "https://instagram.com/linespacestudio",
    linkedin: "https://linkedin.com/company/linespacestudio",
    pinterest: "https://pinterest.com/linespacestudio"
  }
} as const;

export const defaultMeta: MetaData = {
  title: `${siteMetadata.title} - Modern Architectural Design`,
  description: siteMetadata.description,
  image: siteMetadata.ogImage
};
