export type Meal = {
  id: string;
  createdAt: string; // ISO date string
  name: string;
  avatar: string;
  rating: number;
  open: boolean;
  logo: string;
  Price: string; // appears to be capitalized in your API
  food_name: string;
  food_rating: number;
  food_image: string;
  price: string;
  restaurant_name?: string | null;
  restaurant_image?: string | null;
  restaurant_status?: string | null;
};

export type MealFormData = {
  name: string;
  rating: number;
  avatar: string;
  restaurantName: string;
  logo: string;
  open: boolean;
};
