export interface ButtonProps {
  label: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'outline';
  disabled?: boolean;
  fullWidth?: boolean;
}

export interface CardProps {
  imageUrl: string;
  title: string;
  description: string;
  price: string | number;
  location: string;
  onBook?: () => void;
  onDetails?: () => void;
}
export interface Address {
  state: string;
  city: string;
  country: string;
}
export interface Offers {
  bed: string;
  shower: string;
  occupants: string;
}
export interface PropertyProps {
  name: string;
  address: Address;
  rating: number;
  category: string[];
  price: number;
  offers: Offers;
  image: string;
  discount: string;
}
export interface PillProps {
  label: string;
  isActive?: boolean;
  onClick?: () => void;
}
