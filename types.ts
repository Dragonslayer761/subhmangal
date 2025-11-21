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
  duration?: string;
  description: string;
  features: PackageFeatures;
  manpower?: ManpowerDetails[];
  isPremium: boolean;
  highlightColor: 'red' | 'green' | 'gold';
}

export interface AddOnService {
  title: string;
  price: string;
  description?: string;
}