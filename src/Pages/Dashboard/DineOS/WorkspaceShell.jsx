import { FaDownload, FaFileCsv, FaFileExcel, FaFilePdf, FaSearch } from 'react-icons/fa';
import {
  customers,
  deliveries,
  featureGroups,
  insights,
  inventory,
  menuShowcase,
  notifications,
  orders,
  orderStages,
  reports,
  roadmap,
  roles,
  staff,
} from '../../../data/dineosCatalog';

const Stat = ({ label, value, tone = 'bg-white' }) => (
  <div className={`${tone} rounded-md p-5 border border-black/5 shadow-sm`}>
    <p className="text-sm font-bold text-slate-500">{label}</p>
    <p className="text-3xl font-black mt-2 text-slate-900">{value}</p>
  </div>
);

const Pill = ({ children }) => (
  <span className="inline-flex items-center rounded-md bg-slate-100 px-3 py-1 text-sm font-bold text-slate-700">
    {children}
  </span>
);

const Table = ({ columns, rows }) => (
  <div className="overflow-x-auto bg-white rounded-md border border-black/5">
    <table className="table w-full">
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column}>{column}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) => (
          <tr key={`${row[0]}-${index}`}>
            {row.map((cell) => (
              <td key={`${cell}-${index}`} className="font-medium">
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export const OperationsCenter = () => (
  <section className="space-y-6">
    <div>
      <p className="text-sm uppercase tracking-[0.18em] text-primary font-black">
        Restaurant Dashboard
      </p>
      <h1 className="text-4xl font-black">Business overview and order center</h1>
    </div>
    <div className="grid md:grid-cols-4 gap-4">
      <Stat label="Daily revenue" value="$8,740" />
      <Stat label="Weekly sales" value="$52,360" />
      <Stat label="Order volume" value="418" />
      <Stat label="Customer growth" value="+14%" />
    </div>
    <div className="grid lg:grid-cols-[1.4fr_.8fr] gap-5">
      <div className="bg-white rounded-md p-5 border border-black/5">
        <div className="flex justify-between items-center gap-3 mb-4">
          <h2 className="text-2xl font-black">Order queue</h2>
          <label className="input input-bordered flex items-center gap-2 rounded-md max-w-xs">
            <FaSearch />
            <input type="text" className="grow" placeholder="Search orders" />
          </label>
        </div>
        <Table
          columns={['Order', 'Customer', 'Type', 'Status', 'ETA', 'Priority']}
          rows={orders.map((order) => [
            order.id,
            order.customer,
            order.type,
            order.status,
            order.eta,
            order.priority,
          ])}
        />
      </div>
      <div className="bg-[#15201d] text-white rounded-md p-5">
        <h2 className="text-2xl font-black">AI sales insights</h2>
        <div className="space-y-3 mt-4">
          {insights.map((insight) => (
            <p key={insight} className="bg-white/10 rounded-md p-3">
              {insight}
            </p>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export const KitchenBoard = () => (
  <section className="space-y-6">
    <div>
      <p className="text-sm uppercase tracking-[0.18em] text-primary font-black">
        Kitchen Operations
      </p>
      <h1 className="text-4xl font-black">Real-time kitchen display board</h1>
    </div>
    <div className="grid lg:grid-cols-6 gap-3">
      {orderStages.map((stage) => (
        <div key={stage} className="bg-white rounded-md p-4 border border-black/5 min-h-[180px]">
          <h2 className="font-black">{stage}</h2>
          <div className="space-y-3 mt-3">
            {orders
              .filter(
                (order) =>
                  order.status === stage ||
                  (stage === 'Delivered' && order.status === 'Out for delivery')
              )
              .map((order) => (
                <div key={order.id} className="bg-slate-100 rounded-md p-3">
                  <p className="font-black">{order.id}</p>
                  <p className="text-sm">{order.customer}</p>
                  <p className="text-sm text-primary font-bold">
                    {order.chef} · {order.eta}
                  </p>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
    <div className="grid md:grid-cols-3 gap-4">
      <Stat label="Average prep time" value="18m" />
      <Stat label="Ready-to-serve alerts" value="7" />
      <Stat label="Kitchen performance" value="94%" />
    </div>
  </section>
);

export const MenuInventory = () => (
  <section className="space-y-6">
    <div>
      <p className="text-sm uppercase tracking-[0.18em] text-primary font-black">Menu Management</p>
      <h1 className="text-4xl font-black">Menu administration and inventory integration</h1>
    </div>
    <div className="grid lg:grid-cols-3 gap-5">
      {menuShowcase.map((dish) => (
        <article
          key={dish.name}
          className="bg-white rounded-md overflow-hidden border border-black/5"
        >
          <img src={dish.image} alt={dish.name} className="h-44 object-cover w-full" />
          <div className="p-4">
            <div className="flex justify-between gap-3">
              <h2 className="text-xl font-black">{dish.name}</h2>
              <Pill>{dish.availability}</Pill>
            </div>
            <p className="mt-2 text-slate-500">
              {dish.category} · {dish.diet} · ${dish.price}
            </p>
            <div className="flex gap-2 mt-4">
              <button className="btn btn-sm btn-primary rounded-md">Update</button>
              <button className="btn btn-sm rounded-md">Assign category</button>
            </div>
          </div>
        </article>
      ))}
    </div>
    <Table
      columns={['Ingredient', 'Category', 'Stock', 'Threshold', 'Status']}
      rows={inventory.map((item) => [
        item.item,
        item.category,
        item.stock,
        item.threshold,
        item.status,
      ])}
    />
    <div className="flex flex-wrap gap-2">
      <Pill>Bulk menu upload</Pill>
      <Pill>Bulk menu update</Pill>
      <Pill>Bulk category assignment</Pill>
      <Pill>Low-stock alerts</Pill>
      <Pill>Availability control</Pill>
    </div>
  </section>
);

export const CustomersLoyalty = () => (
  <section className="space-y-6">
    <div>
      <p className="text-sm uppercase tracking-[0.18em] text-primary font-black">
        Customer Management
      </p>
      <h1 className="text-4xl font-black">Profiles, analytics, loyalty, and retention</h1>
    </div>
    <div className="grid md:grid-cols-4 gap-4">
      <Stat label="Reward points issued" value="38.4k" />
      <Stat label="Referral rewards" value="126" />
      <Stat label="Retention campaigns" value="5" />
      <Stat label="Satisfaction trend" value="4.7/5" />
    </div>
    <Table
      columns={['Customer', 'Tier', 'Points', 'Orders', 'Spend']}
      rows={customers.map((customer) => [
        customer.name,
        customer.tier,
        customer.points,
        customer.orders,
        `$${customer.spend}`,
      ])}
    />
  </section>
);

export const StaffManagement = () => (
  <section className="space-y-6">
    <div>
      <p className="text-sm uppercase tracking-[0.18em] text-primary font-black">
        Staff Management
      </p>
      <h1 className="text-4xl font-black">Directory, shifts, attendance, and collaboration</h1>
    </div>
    <div className="flex flex-wrap gap-2">
      {roles
        .filter((role) => role !== 'Customer')
        .map((role) => (
          <Pill key={role}>{role}</Pill>
        ))}
    </div>
    <Table
      columns={['Employee', 'Role', 'Shift', 'Attendance', 'Task']}
      rows={staff.map((member) => [
        member.name,
        member.role,
        member.shift,
        member.attendance,
        member.task,
      ])}
    />
    <div className="grid md:grid-cols-3 gap-4">
      <Stat label="Open staff tasks" value="14" />
      <Stat label="Operational notes" value="8" />
      <Stat label="Shift history records" value="312" />
    </div>
  </section>
);

export const DeliveryManagement = () => (
  <section className="space-y-6">
    <div>
      <p className="text-sm uppercase tracking-[0.18em] text-primary font-black">
        Delivery Management
      </p>
      <h1 className="text-4xl font-black">Assignments, driver tracking, routes, and analytics</h1>
    </div>
    <Table
      columns={['Delivery', 'Driver', 'Order', 'Route', 'ETA', 'Success rate']}
      rows={deliveries.map((delivery) => [
        delivery.id,
        delivery.driver,
        delivery.order,
        delivery.route,
        delivery.eta,
        delivery.successRate,
      ])}
    />
    <div className="grid md:grid-cols-3 gap-4">
      <Stat label="Average delivery time" value="22m" />
      <Stat label="Successful delivery rate" value="96%" />
      <Stat label="Route visibility" value="Live" />
    </div>
  </section>
);

export const IntelligenceFeedback = () => (
  <section className="space-y-6">
    <div>
      <p className="text-sm uppercase tracking-[0.18em] text-primary font-black">
        Restaurant Intelligence
      </p>
      <h1 className="text-4xl font-black">Health score, heatmaps, reviews, and sentiment</h1>
    </div>
    <div className="grid md:grid-cols-4 gap-4">
      <Stat label="Restaurant health score" value="92" />
      <Stat label="Revenue performance" value="+18%" />
      <Stat label="Operational efficiency" value="88%" />
      <Stat label="Positive sentiment" value="91%" />
    </div>
    <div className="grid lg:grid-cols-2 gap-5">
      <div className="bg-white rounded-md p-5 border border-black/5">
        <h2 className="text-2xl font-black">Restaurant heatmap</h2>
        <div className="grid grid-cols-4 gap-2 mt-4">
          {['Lunch', 'Afternoon', 'Dinner', 'Late', 'Grill', 'Pizza', 'Salad', 'Beverage'].map(
            (item, index) => (
              <div
                key={item}
                className={`rounded-md p-4 font-bold ${index % 3 === 0 ? 'bg-primary text-white' : index % 2 === 0 ? 'bg-[#ffc857]' : 'bg-slate-100'}`}
              >
                {item}
              </div>
            )
          )}
        </div>
      </div>
      <div className="bg-white rounded-md p-5 border border-black/5">
        <h2 className="text-2xl font-black">Review moderation</h2>
        <div className="space-y-3 mt-4">
          {[
            'Service quality is improving week over week.',
            'Negative feedback alert: delivery delay mentioned twice.',
            'Popular praise: staff friendliness and burger quality.',
          ].map((item) => (
            <p key={item} className="bg-slate-100 rounded-md p-3">
              {item}
            </p>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export const NotificationsReports = () => (
  <section className="space-y-6">
    <div>
      <p className="text-sm uppercase tracking-[0.18em] text-primary font-black">
        Notifications, Reports & Exports
      </p>
      <h1 className="text-4xl font-black">Campaigns, alerts, exports, and reporting</h1>
    </div>
    <div className="grid lg:grid-cols-2 gap-5">
      <Table
        columns={['Audience', 'Message', 'Type']}
        rows={notifications.map((notification) => [
          notification.audience,
          notification.message,
          notification.type,
        ])}
      />
      <div className="bg-white rounded-md p-5 border border-black/5">
        <h2 className="text-2xl font-black">Export center</h2>
        <div className="space-y-3 mt-4">
          {reports.map((report) => (
            <div
              key={report.title}
              className="flex items-center justify-between gap-3 bg-slate-100 rounded-md p-3"
            >
              <div>
                <p className="font-black">{report.title}</p>
                <p className="text-sm text-slate-500">
                  {report.cadence} · {report.format}
                </p>
              </div>
              <div className="flex gap-2 text-primary text-xl">
                <FaFileCsv />
                <FaFileExcel />
                <FaFilePdf />
                <FaDownload />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export const PlatformAdmin = () => (
  <section className="space-y-6">
    <div>
      <p className="text-sm uppercase tracking-[0.18em] text-primary font-black">Admin Dashboard</p>
      <h1 className="text-4xl font-black">Platform management, security, audit, and roadmap</h1>
    </div>
    <div className="grid md:grid-cols-4 gap-4">
      <Stat label="Restaurants managed" value="12" />
      <Stat label="Active users" value="1,248" />
      <Stat label="Permission policies" value="37" />
      <Stat label="Audit events today" value="186" />
    </div>
    <div className="grid lg:grid-cols-2 gap-5">
      <div className="bg-white rounded-md p-5 border border-black/5">
        <h2 className="text-2xl font-black">System configuration</h2>
        <div className="flex flex-wrap gap-2 mt-4">
          {featureGroups[7].items.slice(7, 13).map((item) => (
            <Pill key={item}>{item}</Pill>
          ))}
        </div>
      </div>
      <div className="bg-white rounded-md p-5 border border-black/5">
        <h2 className="text-2xl font-black">Roadmap</h2>
        <div className="grid sm:grid-cols-2 gap-2 mt-4">
          {roadmap.map((item) => (
            <div key={item} className="bg-slate-100 rounded-md p-3 font-semibold">
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export const CustomerProfile = () => (
  <section className="space-y-6">
    <div>
      <p className="text-sm uppercase tracking-[0.18em] text-primary font-black">
        Customer Account
      </p>
      <h1 className="text-4xl font-black">
        Profile, saved addresses, favorites, and order history
      </h1>
    </div>
    <div className="grid md:grid-cols-4 gap-4">
      <Stat label="Reward points" value="2,840" />
      <Stat label="Saved addresses" value="3" />
      <Stat label="Favorite dishes" value="8" />
      <Stat label="Past orders" value="26" />
    </div>
    <div className="grid lg:grid-cols-2 gap-5">
      <Table
        columns={['Favorite', 'Category', 'Diet', 'Availability']}
        rows={menuShowcase.map((dish) => [dish.name, dish.category, dish.diet, dish.availability])}
      />
      <Table
        columns={['Order', 'Type', 'Status', 'ETA']}
        rows={orders.map((order) => [order.id, order.type, order.status, order.eta])}
      />
    </div>
  </section>
);
