
export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'Pizza' | 'Chinese' | 'Bakery' | 'Organic';
  image: string;
  tags?: string[];
  isAvailable: boolean;
  isBestseller?: boolean;
}

export interface CartItem extends MenuItem {
  quantity: number;
}

export interface Branch {
  id: string;
  name: string;
  address: string;
  phone: string;
  vibe: 'Bustling' | 'Moderate' | 'Chill' | 'Quiet';
  waitTime: string;
  isMain?: boolean;
  image: string;
  distance: string;
}

export interface Order {
  id: string;
  customerName: string;
  items: CartItem[];
  total: number;
  status: 'New' | 'Preparing' | 'Delivered';
  timestamp: string;
  branchId: string;
}

export enum AppRoute {
  HOME = 'home',
  MENU = 'menu',
  CHECKOUT = 'checkout',
  SUPPORT = 'support',
  CATERING = 'catering',
  ABOUT = 'about'
}
