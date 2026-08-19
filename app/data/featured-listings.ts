export type FeaturedListing = {
  number: string;
  image: string;
};

// MLS photography supplied by Warren for this private-review gallery. Property
// details are deliberately omitted until the listing records and disclosures
// approved for publication are available.
export const featuredListings: FeaturedListing[] = Array.from(
  { length: 8 },
  (_, index) => {
    const number = String(index + 1).padStart(2, "0");

    return {
      number,
      image: `/listings/listing-${number}.jpg`,
    };
  },
);
