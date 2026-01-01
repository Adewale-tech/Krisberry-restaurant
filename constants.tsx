
import { MenuItem, Branch } from './types';

export const BRANCHES: Branch[] = [
  {
    id: 'bwari',
    name: 'Bwari HQ',
    address: '123 Dough Lane, Bwari, Abuja',
    phone: '+234 801 234 5678',
    vibe: 'Bustling',
    waitTime: '15-20 mins',
    isMain: true,
    image: 'https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&q=80&w=1200',
    distance: '1.2 km'
  },
  {
    id: 'ushafa',
    name: 'Ushafa',
    address: '45 Pottery Road, Ushafa, Abuja',
    phone: '+234 809 876 5432',
    vibe: 'Chill',
    waitTime: '5-10 mins',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=1200',
    distance: '3.4 km'
  },
  {
    id: 'kogo',
    name: 'Kogo',
    address: '88 Hillside Ave, Kogo, Abuja',
    phone: '+234 703 111 2222',
    vibe: 'Moderate',
    waitTime: '10-15 mins',
    image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=1200',
    distance: '5.0 km'
  },
  {
    id: 'law-school',
    name: 'Law School',
    address: 'Campus Center, Bwari, Abuja',
    phone: '+234 812 555 0000',
    vibe: 'Quiet',
    waitTime: '< 5 mins',
    image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=1200',
    distance: '0.8 km'
  }
];

export const INITIAL_MENU: MenuItem[] = [
  {
    id: 'p1',
    name: 'Artisan Truffle Sourdough',
    description: 'Our signature 48-hour slow-fermented honey-sourdough base, adorned with hand-picked wild porcini mushrooms, delicate shavings of authentic black winter truffle, and creamy fior di latte mozzarella, finished with a drizzle of cold-pressed extra virgin olive oil.',
    price: 24500,
    category: 'Pizza',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=600',
    isAvailable: true,
    isBestseller: true,
    tags: ['Signature', 'Organic']
  },
  {
    id: 'p2',
    name: 'Suya-Spiced Inferno',
    description: 'A masterful fusion of traditional northern Nigerian heritage and artisan pizza craft. Featuring tender strips of prime grass-fed beef encrusted in a multi-generational secret Suya spice blend, fresh bird\'s eye chilies, and a zest of indigenous yaji, over a San Marzano tomato reduction.',
    price: 21000,
    category: 'Pizza',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=600',
    isAvailable: true,
    tags: ['Spicy']
  },
  {
    id: 'c1',
    name: 'Szechuan Honey Wings',
    description: 'Triple-crisped organic wings glazed in a house-made reduction of fiery Szechuan peppercorns and wild forest honey. Garnished with fire-roasted sesame seeds and micro-scallions for a sophisticated balance of heat and nectar.',
    price: 15500,
    category: 'Chinese',
    image: 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&q=80&w=600',
    isAvailable: true,
    tags: ['Shared']
  },
  {
    id: 'c2',
    name: 'Cantonese Ginger Lobster',
    description: 'Succulent Atlantic lobster tail, wok-seared to precision with aromatic ginger root and spring scallions, deglazed with a vintage 10-year aged artisan soy sauce for a profound depth of umami.',
    price: 38000,
    category: 'Chinese',
    image: 'https://images.unsplash.com/photo-1551326844-4df70f78d0e9?auto=format&fit=crop&q=80&w=600',
    isAvailable: true,
    tags: ['Premium']
  },
  {
    id: 'i1',
    name: 'Prawn & Mango Penne',
    description: 'Al dente artisan durum wheat penne tossed with charcoal-grilled jumbo tiger prawns. Folded into a luxurious emulsion of sun-ripened tropical mango and a whisper of habanero heat, finished with fresh torn basil.',
    price: 22500,
    category: 'Organic',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21bc4a4f8?auto=format&fit=crop&q=80&w=600',
    isAvailable: true,
    tags: ['Fusion']
  },
  {
    id: 'i2',
    name: 'Moroccan Lamb Sliders',
    description: '12-hour slow-braised Atlas mountain-spiced lamb, pulled to tenderness and layered with a piquant house-crafted harissa-infused aioli and zesty quick-pickled slaw on toasted artisan honey-brioche buns.',
    price: 16500,
    category: 'Bakery',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=600',
    isAvailable: true,
    tags: ['Appetizer']
  },
  {
    id: 'o1',
    name: 'Smoky Jollof Crown',
    description: 'The definitive Abuja classic. Long-grain parboiled rice authentically infused with the essence of hardwood smoke. Served alongside a herb-crusted grilled turkey breast and caramelized organic dodo, representing the soul of our kitchen.',
    price: 18500,
    category: 'Organic',
    image: 'https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?auto=format&fit=crop&q=80&w=600',
    isAvailable: true,
    isBestseller: true
  }
];
