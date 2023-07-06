# Astro Experimental Assets Picture Element

Hopefully Astro will implement their own new `<Picture />` element by Astro 3.0, but for the
meantime, it feels a bit lacking.  This is a rough attempt at a `<Picture />` element, utilizing
Astro's [Experimental assets support](https://docs.astro.build/en/guides/assets/).

## Getting Started

### Install component

```
pnpm add -D astro-picture-element
```

### Make sure the experimental assets are enabled in your `astro.config.mjs`:

```
export default defineConfig({
    experimental: {
        assets: true
    },
    image: {
        service: sharpImageService()
    }
});

```

### Import the components and define source sizes

```

import { Picture, breakpoints, type PictureSource} from 'astro-picture-element'

import src from "../assets/cartoon-space-rocket.png";

const sources: Array<PictureSource> = [
  {
    width: 150,
    media: { 'max-width': breakpoints.sm },
  },
  {
    width: 175,
    media: { 'max-width': breakpoints.md },
  },
];
```

### Use the picture element in your template.

```
<Picture {src} width={200} alt="Nice picture" {sources} />
```

## API

The `Picture` element will forward all attributes given to it along to the `<img />` tag
rendered inside the resulting html5 `<picture>` element, except for the following
properties:

```
{
  src: import('astro').ImageMetadata;
  sources: Array<PictureSource>;
  width: number;
  height?: number;
  quality?: import('astro').ImageQuality;
  format?: import('astro').ImageOutputFormat;
}
```

## Interface / Types

The interface looks like this:

```

type MediaQuery = 'min-width' | 'max-width' | 'orientation';

export interface PictureSource {
  width: number;
  height?: number;
  media: string | Partial<Record<MediaQuery, string>>;
}

export interface Props
  extends Omit<HTMLAttributes<'img'>, 'src' | 'undefined'> {
  src: ImageMetadata;
  alt: string;
  quality?: ImageQuality;
  format?: ImageOutputFormat;
  width: number;
  height?: number;
  sources: PictureSource[];
}

```