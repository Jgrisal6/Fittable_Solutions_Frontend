'use client';
import { Carousel, Typography, Button } from "@material-tailwind/react";
import Image from "next/image";

export function CarouselWithContent() {
  return (
    <Carousel className="rounded-xl" placeholder={undefined}>
      <div className="relative h-full w-full">
        <Image
          src="/images/unsplash_photo1.avif"
          alt="image 1"
          width={800}
          height={800}
          className="h-96 w-full object-cover"
        />
        <div className="absolute inset-0 grid h-96 w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
            variant="h1"
            color="white"
            className="mb-4 text-3xl md:text-4xl lg:text-5xl" placeholder={undefined}            >
              What you need meets what we offer
            </Typography>
            <Typography
            variant="lead"
            color="white"
            className="mb-12 opacity-80" placeholder={undefined}            >
              It is not so much for its beauty that the forest makes a claim
              upon men&apos;s hearts, as for that subtle something, that quality
              of air that emanation from old trees, that so wonderfully changes
              and renews a weary spirit.
            </Typography>
            <div className="flex justify-center gap-2">
              <Button size="lg" color="white" placeholder={undefined}>
                Explore
              </Button>
              <Button size="lg" color="white" variant="text" placeholder={undefined}>
                Gallery
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <Image
          src="/images/unsplash_photo2.avif"
          alt="image 2"
          width={800}
          height={800}
          className="h-96 w-full object-cover"
        />
        <div className="absolute inset-0 grid h-96 w-full items-center bg-black/75">
          <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
            <Typography
                          variant="h1"
                          color="white"
                          className="mb-4 text-3xl md:text-4xl lg:text-5xl" placeholder={undefined}            >
              The Beauty of Nature
            </Typography>
            <Typography
                          variant="lead"
                          color="white"
                          className="mb-12 opacity-80" placeholder={undefined}            >
              It is not so much for its beauty that the forest makes a claim
              upon men&apos;s hearts, as for that subtle something, that quality
              of air that emanation from old trees, that so wonderfully changes
              and renews a weary spirit.
            </Typography>
            <div className="flex gap-2">
              <Button size="lg" color="white" placeholder={undefined}>
                Explore
              </Button>
              <Button size="lg" color="white" variant="text" placeholder={undefined}>
                Gallery
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-96 w-full">
        <Image
          src="/images/unsplash_photo3.avif"
          alt="image 3"
          width={800}
          height={800}
          className="h-96 w-full object-cover"
        />
        <div className="absolute inset-0 grid h-96 w-full items-end bg-black/75">
          <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
            <Typography
                          variant="h1"
                          color="white"
                          className="mb-4 text-3xl md:text-4xl lg:text-5xl" placeholder={undefined}            >
              The Beauty of Nature
            </Typography>
            <Typography
                          variant="lead"
                          color="white"
                          className="mb-12 opacity-80" placeholder={undefined}            >
              It is not so much for its beauty that the forest makes a claim
              upon men&apos;s hearts, as for that subtle something, that quality
              of air that emanation from old trees, that so wonderfully changes
              and renews a weary spirit.
            </Typography>
            <div className="flex gap-2">
              <Button size="lg" color="white" placeholder={undefined}>
                Explore
              </Button>
              <Button size="lg" color="white" variant="text" placeholder={undefined}>
                Gallery
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  );
}