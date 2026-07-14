import { site } from "@/lib/site";

export type GoogleReview = {
  authorName: string;
  profilePhotoUrl: string | null;
  rating: number;
  text: string;
  relativeTime?: string;
  authorUrl?: string | null;
};

export type GoogleReviewsData = {
  rating: number;
  reviewCount: number;
  reviews: GoogleReview[];
  source: "google" | "fallback";
};

type LegacyReview = {
  author_name?: string;
  author_url?: string;
  profile_photo_url?: string;
  rating?: number;
  text?: string;
  relative_time_description?: string;
};

type LegacyPlaceDetailsResponse = {
  status?: string;
  result?: {
    rating?: number;
    user_ratings_total?: number;
    reviews?: LegacyReview[];
  };
};

const FALLBACK_REVIEWS: GoogleReview[] = [
  {
    authorName: "Shelby L.",
    profilePhotoUrl: null,
    rating: 5,
    text: "Chas really helped me understand the process and worked with my insurance… I felt like I could trust them to take care of things honestly and professionally.",
  },
  {
    authorName: "Daniel H.",
    profilePhotoUrl: null,
    rating: 5,
    text: "It was so refreshing having them out there on site especially with all the roofers out there just trying to sell you.",
  },
  {
    authorName: "Racquel A.",
    profilePhotoUrl: null,
    rating: 5,
    text: "He didn’t try to sell us anything we didn’t need and informed us that our roof is good right now.",
  },
  {
    authorName: "James S.",
    profilePhotoUrl: null,
    rating: 5,
    text: "The cleanup was so good that I could not tell that they had ever been in my yard.",
  },
  {
    authorName: "Kathleen S.",
    profilePhotoUrl: null,
    rating: 5,
    text: "Jim Holaway explained the requirements and stayed on site through the hail replacement.",
  },
  {
    authorName: "Shannon T.",
    profilePhotoUrl: null,
    rating: 5,
    text: "Chas Wharton was patient with our questions, met with the adjuster, and handled our roof, gutters, and fence.",
  },
];

const FALLBACK_DATA: GoogleReviewsData = {
  rating: 4.7,
  reviewCount: 54,
  reviews: FALLBACK_REVIEWS,
  source: "fallback",
};

function getApiKey() {
  return process.env.GOOGLE_PLACES_API_KEY;
}

function mapReviews(reviews: LegacyReview[] | undefined): GoogleReview[] {
  return (reviews ?? [])
    .filter((review) => review.text && review.author_name)
    .map((review) => ({
      authorName: review.author_name!,
      profilePhotoUrl: review.profile_photo_url ?? null,
      rating: review.rating ?? 5,
      text: review.text!,
      relativeTime: review.relative_time_description,
      authorUrl: review.author_url ?? null,
    }));
}

export async function getGoogleReviews(): Promise<GoogleReviewsData> {
  const apiKey = getApiKey();
  if (!apiKey || !site.googlePlaceId) return FALLBACK_DATA;

  try {
    const params = new URLSearchParams({
      place_id: site.googlePlaceId,
      fields: "rating,user_ratings_total,reviews",
      key: apiKey,
    });

    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?${params}`,
      { next: { revalidate: 60 * 60 * 6 } },
    );

    if (!response.ok) return FALLBACK_DATA;

    const data = (await response.json()) as LegacyPlaceDetailsResponse;
    if (data.status !== "OK" || !data.result) return FALLBACK_DATA;

    const reviews = mapReviews(data.result.reviews);
    if (reviews.length === 0) return FALLBACK_DATA;

    return {
      rating: data.result.rating ?? FALLBACK_DATA.rating,
      reviewCount: data.result.user_ratings_total ?? FALLBACK_DATA.reviewCount,
      reviews,
      source: "google",
    };
  } catch {
    return FALLBACK_DATA;
  }
}
