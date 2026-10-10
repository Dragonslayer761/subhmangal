export interface ManpowerDetails {
  event: string;
  details: string[];
}

export interface PackageFeatures {
  rawPhotos: string;
  editedPhotos: number;
  album?: string;
  video: string;
  reels: string;
  extra?: string[];
}

export interface WeddingPackage {
  id: string;
  title: string;
  price?: string;
  discountedPrice?: string;
  duration?: string;
  description: string;
  features: PackageFeatures;
  manpower?: ManpowerDetails[];
  badge?: string;
  highlightColor: "red" | "green" | "gold" | "purple";
}

export interface AddOnService {
  title: string;
  price: string;
  description?: string;
}
