import {
  FaBell,
  FaChartLine,
  FaHeart,
  FaLock,
  FaMobileAlt,
  FaSearch,
  FaShieldAlt,
  FaShoppingCart,
  FaStar,
  FaTruck,
  FaUserClock,
} from 'react-icons/fa';
import { MdInventory, MdPayments } from 'react-icons/md';
import { TbChefHat } from 'react-icons/tb';
import {
  dineOSBrand,
  featureGroups,
  heroImages,
  insights,
  menuShowcase,
  orderStages,
  orders,
  roadmap,
  roles,
} from '../data/dineosCatalog';

const metricCards = [
  { label: 'Daily revenue', value: '$8.7k', detail: '+18% vs last week' },
  { label: 'Live orders', value: '42', detail: '9 high priority' },
  { label: 'Repeat guests', value: '64%', detail: '2.4x reorder rate' },
  { label: 'Health score', value: '92', detail: 'Strong operations' },
];

const capabilityIcons = [
  FaShieldAlt,
  FaShoppingCart,
  TbChefHat,
  MdInventory,
  FaTruck,
  FaChartLine,
  FaBell,
  FaUserClock,
];

const DineOSHome = () => {
  return (
    <main className="bg-[#f7f4ef] text-[#1f2526]">
      <section
        className="min-h-[92vh] bg-cover bg-center relative text-white flex items-end"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(7,15,13,.88), rgba(7,15,13,.42)), url(${heroImages.banner})`,
        }}
      >
        <div className="w-11/12 mx-auto pb-12 pt-28 grid lg:grid-cols-[1fr_430px] gap-8 items-end">
          <div className="max-w-3xl">
            <p className="uppercase tracking-[0.18em] text-sm text-[#ffc857] font-bold">
              {dineOSBrand.tagline}
            </p>
            <h1 className="text-5xl md:text-7xl font-black mt-4 leading-tight">
              {dineOSBrand.name}
            </h1>
            <p className="text-lg md:text-2xl mt-5 text-white/85 max-w-2xl">
              {dineOSBrand.description}
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              <a href="/shop" className="btn bg-[#ff6b35] border-[#ff6b35] text-white rounded-md">
                <FaShoppingCart /> Order now
              </a>
              <a
                href="/dashboard/adminhome"
                className="btn bg-white text-[#15201d] border-white rounded-md"
              >
                <FaChartLine /> Open operations
              </a>
            </div>
          </div>
          <div className="bg-white/95 text-[#1f2526] rounded-md p-5 shadow-2xl">
            <div className="flex items-center justify-between border-b pb-3">
              <div>
                <p className="text-sm uppercase font-bold text-[#ff6b35]">Live Order Tracking</p>
                <h2 className="text-2xl font-black">Kitchen pulse</h2>
              </div>
              <TbChefHat className="text-4xl text-[#ff6b35]" />
            </div>
            <div className="grid grid-cols-3 gap-2 mt-4">
              {orderStages.slice(0, 6).map((stage) => (
                <div
                  key={stage}
                  className="border rounded-md p-2 text-center text-xs font-bold bg-[#f7f4ef]"
                >
                  {stage}
                </div>
              ))}
            </div>
            <div className="space-y-3 mt-4">
              {orders.slice(0, 3).map((order) => (
                <div
                  key={order.id}
                  className="flex items-center justify-between bg-[#13211e] text-white rounded-md p-3"
                >
                  <div>
                    <p className="font-bold">
                      {order.id} · {order.customer}
                    </p>
                    <p className="text-sm text-white/70">
                      {order.type} · {order.status}
                    </p>
                  </div>
                  <span className="text-[#ffc857] font-black">{order.eta}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="w-11/12 mx-auto -mt-8 relative z-[1] grid md:grid-cols-4 gap-4">
        {metricCards.map((metric) => (
          <div
            key={metric.label}
            className="bg-white rounded-md p-5 shadow-lg border border-black/5"
          >
            <p className="text-sm font-bold text-[#63706c]">{metric.label}</p>
            <p className="text-4xl font-black mt-2">{metric.value}</p>
            <p className="text-sm text-[#ff6b35] font-semibold mt-1">{metric.detail}</p>
          </div>
        ))}
      </section>

      <section className="w-11/12 mx-auto py-16 grid lg:grid-cols-[360px_1fr] gap-10">
        <div>
          <p className="uppercase tracking-[0.18em] text-sm text-[#ff6b35] font-bold">
            Role-based access
          </p>
          <h2 className="text-4xl font-black mt-3">
            Every restaurant role gets the right workspace.
          </h2>
          <p className="mt-4 text-[#63706c]">
            Protected routes, permission-based dashboards, and secure role management support
            customer, staff, manager, owner, and platform admin workflows.
          </p>
          <div className="flex flex-wrap gap-2 mt-5">
            {roles.map((role) => (
              <span
                key={role}
                className="px-3 py-2 rounded-md bg-[#15201d] text-white text-sm font-bold"
              >
                {role}
              </span>
            ))}
          </div>
        </div>
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
          {featureGroups.map((group, index) => {
            const Icon = capabilityIcons[index] || FaStar;
            return (
              <article key={group.title} className="bg-white border border-black/5 rounded-md p-5">
                <Icon className="text-3xl text-[#ff6b35]" />
                <h3 className="font-black text-xl mt-4">{group.title}</h3>
                <ul className="mt-3 space-y-2 text-sm text-[#4f5b57]">
                  {group.items.slice(0, 6).map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-[#10b981] font-black">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="w-11/12 mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <p className="uppercase tracking-[0.18em] text-sm text-[#ff6b35] font-bold">
                Menu browsing
              </p>
              <h2 className="text-4xl font-black mt-3">Searchable, filtered, real-time menu.</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="btn btn-sm rounded-md bg-[#f7f4ef] border-0">
                <FaSearch /> Advanced search
              </span>
              <span className="btn btn-sm rounded-md bg-[#f7f4ef] border-0">
                <FaHeart /> Favorites
              </span>
              <span className="btn btn-sm rounded-md bg-[#f7f4ef] border-0">
                <FaMobileAlt /> Mobile-first
              </span>
            </div>
          </div>
          <div className="grid lg:grid-cols-3 gap-5 mt-8">
            {menuShowcase.map((dish) => (
              <article
                key={dish.name}
                className="rounded-md overflow-hidden border border-black/5 bg-[#f7f4ef]"
              >
                <img src={dish.image} alt={dish.name} className="h-56 w-full object-cover" />
                <div className="p-5">
                  <div className="flex justify-between gap-3">
                    <p className="font-black text-xl">{dish.name}</p>
                    <span className="font-black text-[#ff6b35]">${dish.price}</span>
                  </div>
                  <p className="text-sm text-[#63706c] mt-2">
                    {dish.category} · {dish.diet} · {dish.availability}
                  </p>
                  <progress
                    className="progress progress-success w-full mt-4"
                    value={dish.popularity}
                    max="100"
                  ></progress>
                  <p className="text-sm font-bold mt-2">{dish.popularity}% popularity score</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="w-11/12 mx-auto py-16 grid lg:grid-cols-2 gap-8">
        <div className="bg-[#15201d] text-white rounded-md p-6">
          <p className="uppercase tracking-[0.18em] text-sm text-[#ffc857] font-bold">
            AI Sales Insights
          </p>
          <h2 className="text-4xl font-black mt-3">Signals that help operators move faster.</h2>
          <div className="grid gap-3 mt-6">
            {insights.map((insight) => (
              <div key={insight} className="bg-white/10 rounded-md p-4 flex gap-3">
                <FaChartLine className="text-[#ffc857] mt-1" />
                <p>{insight}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white rounded-md p-6 border border-black/5">
          <p className="uppercase tracking-[0.18em] text-sm text-[#ff6b35] font-bold">
            Secure checkout
          </p>
          <h2 className="text-4xl font-black mt-3">
            Cart, promos, tax, Stripe, invoice, and history.
          </h2>
          <div className="grid sm:grid-cols-2 gap-3 mt-6">
            {[
              [MdPayments, 'Online payments'],
              [FaTruck, 'Delivery and pickup'],
              [FaLock, 'Protected checkout'],
              [FaBell, 'Order notifications'],
            ].map(([Icon, label]) => (
              <div
                key={label}
                className="bg-[#f7f4ef] rounded-md p-4 flex items-center gap-3 font-bold"
              >
                <Icon className="text-2xl text-[#ff6b35]" />
                {label}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#15201d] text-white py-16">
        <div className="w-11/12 mx-auto">
          <p className="uppercase tracking-[0.18em] text-sm text-[#ffc857] font-bold">
            Future roadmap
          </p>
          <h2 className="text-4xl font-black mt-3">
            Built for AI, apps, branches, and franchises.
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-8">
            {roadmap.map((item) => (
              <div key={item} className="border border-white/15 rounded-md p-4 bg-white/5">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default DineOSHome;
