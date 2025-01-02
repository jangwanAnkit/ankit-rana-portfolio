import type { ImageMetadata } from "astro";
import { getImage } from "astro:assets";

interface OptimizeImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  format?: 'webp' | 'avif' | 'jpeg' | 'png';
  quality?: number;
}

export async function optimizeImage({
  src,
  alt,
  width = 800,
  height,
  format = 'webp',
  quality = 80
}: OptimizeImageProps) {
  try {
    const images = import.meta.glob('/public/images/**/*.{jpeg,jpg,png,gif}');
    const image = images[src];
    
    if (!image) {
      throw new Error(`Image ${src} not found`);
    }

    const optimizedImage = await getImage({
      src: image as ImageMetadata,
      width,
      height,
      format,
      quality
    });

    return {
      src: optimizedImage.src,
      width: optimizedImage.width,
      height: optimizedImage.height,
      alt
    };
  } catch (error) {
    console.error(`Error optimizing image: ${src}`, error);
    return { src, alt };
  }
}
