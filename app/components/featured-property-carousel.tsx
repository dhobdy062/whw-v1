"use client";

import { useEffect, useState } from "react";
import type { FeaturedListing } from "../data/featured-listings";

type FeaturedPropertyCarouselProps = {
  listings: FeaturedListing[];
  intervalMs?: number;
  className?: string;
};

export function FeaturedPropertyCarousel({
  listings,
  intervalMs = 4200,
  className,
}: FeaturedPropertyCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (listings.length < 2) return;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % listings.length);
    }, intervalMs);

    return () => window.clearInterval(timer);
  }, [listings.length, intervalMs]);

  return (
    <div className={`property-carousel${className ? ` ${className}` : ""}`}>
      <div className="property-carousel-frame">
        {listings.map((listing, index) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={listing.number}
            src={listing.image}
            alt=""
            className={
              index === activeIndex
                ? "property-carousel-image is-active"
                : "property-carousel-image"
            }
          />
        ))}
      </div>
      <div className="property-carousel-dots" role="tablist" aria-label="Featured property photos">
        {listings.map((listing, index) => (
          <button
            key={listing.number}
            type="button"
            role="tab"
            aria-selected={index === activeIndex}
            aria-label={`Show photo ${index + 1}`}
            className={
              index === activeIndex
                ? "property-carousel-dot is-active"
                : "property-carousel-dot"
            }
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}
