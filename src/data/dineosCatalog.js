import banner from '../assets/home/banner.jpg';
import featured from '../assets/home/featured.jpg';
import chefService from '../assets/home/chef-service.jpg';
import pizza from '../assets/reservation/category-pizza.jpg';

export const dineOSBrand = {
  name: 'DineOS',
  tagline: 'The Operating System for Modern Restaurants',
  description:
    'A modern restaurant management and customer engagement platform for orders, revenue, kitchen flow, loyalty, delivery, and team operations.',
};

export const heroImages = {
  banner,
  featured,
  chefService,
  pizza,
};

export const roles = ['Customer', 'Waiter', 'Chef', 'Cashier', 'Manager', 'Owner', 'Super Admin'];

export const featureGroups = [
  {
    title: 'Authentication & Accounts',
    items: [
      'Email and password registration',
      'Secure login and logout',
      'Social authentication support',
      'Profile management',
      'Saved delivery addresses',
      'Favorite menu items',
      'Order history tracking',
      'Protected routes',
      'Permission-based dashboards',
      'Secure role management',
    ],
  },
  {
    title: 'Customer Experience',
    items: [
      'Modern landing page',
      'Featured dishes showcase',
      'Popular menu highlights',
      'Restaurant story section',
      'Customer testimonials',
      'Loyalty rewards promotion',
      'Mobile-first experience',
      'Advanced search',
      'Dietary preference filters',
      'Favorites and wishlist',
      'Quick reorder',
      'Personalized recommendations',
    ],
  },
  {
    title: 'Ordering, Payments & Tracking',
    items: [
      'Cart management',
      'Quantity updates',
      'Cart persistence',
      'Secure checkout process',
      'Delivery and pickup options',
      'Promo code support',
      'Discount application',
      'Tax calculation',
      'Stripe integration',
      'Invoice generation',
      'Live status updates',
      'Delivery ETA tracking',
      'Order notifications',
    ],
  },
  {
    title: 'Restaurant Dashboard',
    items: [
      'Daily revenue summary',
      'Weekly sales report',
      'Monthly performance overview',
      'Order volume analytics',
      'Customer growth metrics',
      'Revenue trends',
      'Top selling dishes',
      'Category performance',
      'Peak ordering hours',
      'Repeat customer analysis',
      'AI sales insights',
    ],
  },
  {
    title: 'Menu & Inventory',
    items: [
      'Create menu items',
      'Update menu items',
      'Delete menu items',
      'Category management',
      'Ingredient tracking',
      'Stock status monitoring',
      'Low-stock alerts',
      'Availability control',
      'Bulk menu upload',
      'Bulk menu update',
      'Bulk category assignment',
    ],
  },
  {
    title: 'Kitchen & Orders',
    items: [
      'Order queue management',
      'Order search and filtering',
      'Order status updates',
      'Customer order details',
      'Kitchen display board',
      'Preparation workflow',
      'Chef assignment',
      'Ready-to-serve notifications',
      'Pending, accepted, preparing, ready, served, and delivered stages',
      'Preparation timers',
      'Priority indicators',
      'Kitchen performance monitoring',
    ],
  },
  {
    title: 'People, Delivery & Feedback',
    items: [
      'Customer profiles',
      'Spending analytics',
      'Loyalty tracking',
      'Reward points',
      'Membership tiers',
      'Referral rewards',
      'Staff profiles',
      'Role assignments',
      'Schedule creation',
      'Attendance tracking',
      'Staff task board',
      'Team communication',
      'Delivery assignment',
      'Driver management',
      'Delivery performance reports',
      'Review moderation',
      'Sentiment analysis',
    ],
  },
  {
    title: 'Reporting, Admin & Roadmap',
    items: [
      'Revenue reports',
      'Sales reports',
      'Customer reports',
      'Inventory reports',
      'CSV export',
      'Excel export',
      'PDF reports',
      'Restaurant management',
      'User management',
      'Role management',
      'System configuration',
      'Activity monitoring',
      'Audit logs',
      'AI demand forecasting',
      'Mobile apps',
      'Multi-branch support',
      'Franchise analytics',
    ],
  },
];

export const menuShowcase = [
  {
    name: 'Smoked Brisket Burger',
    category: 'Grill',
    price: 18,
    diet: 'High protein',
    availability: 'Available',
    popularity: 94,
    image: featured,
  },
  {
    name: 'Garden Citrus Salad',
    category: 'Salad',
    price: 12,
    diet: 'Vegan',
    availability: 'Available',
    popularity: 82,
    image: chefService,
  },
  {
    name: 'Fire Roasted Pizza',
    category: 'Pizza',
    price: 16,
    diet: 'Vegetarian',
    availability: 'Low stock',
    popularity: 89,
    image: pizza,
  },
];

export const orders = [
  {
    id: 'DO-1048',
    customer: 'Ariana Silva',
    type: 'Delivery',
    status: 'Preparing',
    eta: '18 min',
    total: 42.5,
    priority: 'High',
    chef: 'Mina',
  },
  {
    id: 'DO-1049',
    customer: 'Noah Chen',
    type: 'Pickup',
    status: 'Ready',
    eta: 'Now',
    total: 28,
    priority: 'Normal',
    chef: 'Rafi',
  },
  {
    id: 'DO-1050',
    customer: 'Leah Ahmed',
    type: 'Dine-in',
    status: 'Accepted',
    eta: '24 min',
    total: 63.75,
    priority: 'Normal',
    chef: 'Mina',
  },
  {
    id: 'DO-1051',
    customer: 'Mateo Brooks',
    type: 'Delivery',
    status: 'Out for delivery',
    eta: '9 min',
    total: 35.25,
    priority: 'High',
    chef: 'Rafi',
  },
];

export const orderStages = ['Pending', 'Accepted', 'Preparing', 'Ready', 'Served', 'Delivered'];

export const insights = [
  'Burger sales increased 18% this week.',
  'Friday evenings generate the highest revenue.',
  'Beverage category outperformed desserts by 12%.',
  'Loyalty members reorder 2.4x more often than guests.',
];

export const inventory = [
  { item: 'Brioche buns', category: 'Bakery', stock: 28, threshold: 40, status: 'Low stock' },
  { item: 'Mozzarella', category: 'Dairy', stock: 84, threshold: 35, status: 'Healthy' },
  {
    item: 'Cold brew concentrate',
    category: 'Beverage',
    stock: 14,
    threshold: 20,
    status: 'Low stock',
  },
  { item: 'Arugula', category: 'Produce', stock: 53, threshold: 25, status: 'Healthy' },
];

export const customers = [
  { name: 'Ariana Silva', tier: 'Gold', points: 2840, orders: 26, spend: 742 },
  { name: 'Noah Chen', tier: 'Silver', points: 1180, orders: 12, spend: 318 },
  { name: 'Leah Ahmed', tier: 'Platinum', points: 4420, orders: 39, spend: 1136 },
];

export const staff = [
  {
    name: 'Mina Rahman',
    role: 'Chef',
    shift: '11:00 - 19:00',
    attendance: 'Checked in',
    task: 'Grill station',
  },
  {
    name: 'Rafi Khan',
    role: 'Chef',
    shift: '12:00 - 20:00',
    attendance: 'Checked in',
    task: 'Expo and plating',
  },
  {
    name: 'Sofia Grant',
    role: 'Waiter',
    shift: '16:00 - 23:00',
    attendance: 'Scheduled',
    task: 'Patio section',
  },
  {
    name: 'Omar Lee',
    role: 'Cashier',
    shift: '10:00 - 18:00',
    attendance: 'Checked in',
    task: 'Counter',
  },
];

export const deliveries = [
  {
    id: 'DL-220',
    driver: 'Ibrahim',
    order: 'DO-1051',
    route: 'North loop',
    eta: '9 min',
    successRate: '97%',
  },
  {
    id: 'DL-221',
    driver: 'Nadia',
    order: 'DO-1048',
    route: 'Market district',
    eta: '18 min',
    successRate: '94%',
  },
  {
    id: 'DL-222',
    driver: 'Sam',
    order: 'DO-1054',
    route: 'University lane',
    eta: '26 min',
    successRate: '96%',
  },
];

export const notifications = [
  { audience: 'Customer', message: 'Order DO-1049 is ready for pickup.', type: 'Status update' },
  {
    audience: 'Staff',
    message: 'Brioche buns dropped below the reorder threshold.',
    type: 'Low inventory',
  },
  {
    audience: 'Kitchen',
    message: 'High-priority delivery order DO-1048 is preparing.',
    type: 'Kitchen alert',
  },
  {
    audience: 'Customer',
    message: 'Gold members earn double points this weekend.',
    type: 'Promotion',
  },
];

export const reports = [
  { title: 'Revenue report', format: 'CSV, Excel, PDF', cadence: 'Daily' },
  { title: 'Sales report', format: 'CSV, Excel, PDF', cadence: 'Weekly' },
  { title: 'Customer report', format: 'CSV, Excel, PDF', cadence: 'Monthly' },
  { title: 'Inventory report', format: 'CSV, Excel, PDF', cadence: 'Daily' },
];

export const roadmap = [
  'AI demand forecasting',
  'Smart inventory prediction',
  'Personalized customer recommendations',
  'Automated menu optimization',
  'Customer mobile app',
  'Staff mobile app',
  'Delivery driver app',
  'Branch management',
  'Cross-location reporting',
  'Centralized operations dashboard',
  'Franchise analytics',
  'Brand-wide reporting',
  'Standardized operations management',
];
