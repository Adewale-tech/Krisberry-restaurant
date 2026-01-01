
import React from 'react';
import { Order, MenuItem } from '../types';

interface AdminPortalProps {
  orders: Order[];
  setOrders: React.Dispatch<React.SetStateAction<Order[]>>;
  menu: MenuItem[];
  setMenu: React.Dispatch<React.SetStateAction<MenuItem[]>>;
}

const AdminPortal: React.FC<AdminPortalProps> = ({ orders, setOrders, menu, setMenu }) => {
  const updateStatus = (orderId: string, status: Order['status']) => {
    setOrders(prev => prev.map(o => o.id === orderId ? { ...o, status } : o));
  };

  const toggleAvailability = (id: string) => {
    setMenu(prev => prev.map(m => m.id === id ? { ...m, isAvailable: !m.isAvailable } : m));
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-3xl font-black text-chocolate tracking-tight">Management Portal</h2>
        <span className="px-3 py-1 bg-chocolate text-primary text-[10px] font-black uppercase rounded-full">Secure Access</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Incoming Orders Feed */}
        <div className="lg:col-span-2 space-y-6">
          <h3 className="text-xl font-bold flex items-center gap-2">
            <span className="material-symbols-outlined text-secondary">notifications_active</span>
            Incoming Orders
          </h3>
          
          {orders.length === 0 ? (
            <div className="p-20 bg-white rounded-2xl border-2 border-dashed border-gray-200 text-center">
              <p className="text-chocolate/40 font-medium">Listening for orders from the galaxy...</p>
            </div>
          ) : (
            orders.map(order => (
              <div key={order.id} className="bg-white rounded-xl shadow-glass p-6 border border-gray-100 flex flex-col md:flex-row gap-6">
                <div className="flex-grow">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <span className={`text-[10px] font-black uppercase px-2 py-0.5 rounded ${
                        order.status === 'New' ? 'bg-primary/20 text-secondary' : 
                        order.status === 'Preparing' ? 'bg-orange-100 text-orange-600' : 'bg-green-100 text-green-600'
                      }`}>
                        {order.status}
                      </span>
                      <h4 className="text-lg font-black mt-2">{order.customerName}</h4>
                      <p className="text-xs text-chocolate/40">{order.id} • {new Date(order.timestamp).toLocaleTimeString()}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-black text-chocolate">₦{order.total.toLocaleString()}</p>
                      <p className="text-xs text-chocolate/40">{order.items.length} items</p>
                    </div>
                  </div>
                  <div className="bg-background-soft rounded-lg p-3 space-y-1">
                    {order.items.map((i, idx) => (
                      <div key={idx} className="flex justify-between text-sm">
                        <span className="font-bold">{i.quantity}x {i.name}</span>
                        <span className="text-chocolate/60">₦{(i.price * i.quantity).toLocaleString()}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="md:w-48 shrink-0 flex flex-col gap-2">
                  <button 
                    onClick={() => updateStatus(order.id, 'Preparing')}
                    className="w-full py-2.5 rounded-lg bg-orange-100 text-orange-600 text-xs font-bold hover:bg-orange-200 transition-all"
                  >
                    Start Prep
                  </button>
                  <button 
                    onClick={() => updateStatus(order.id, 'Delivered')}
                    className="w-full py-2.5 rounded-lg bg-green-100 text-green-600 text-xs font-bold hover:bg-green-200 transition-all"
                  >
                    Mark Delivered
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Menu Quick Switch */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">inventory</span>
            Inventory Status
          </h3>
          <div className="bg-white rounded-xl shadow-glass border border-gray-100 overflow-hidden">
            <div className="divide-y divide-gray-100">
              {menu.map(item => (
                <div key={item.id} className="p-4 flex items-center justify-between group">
                  <div className="flex items-center gap-3">
                    <img src={item.image} className="size-10 rounded object-cover" />
                    <div>
                      <p className="text-sm font-bold">{item.name}</p>
                      <p className="text-[10px] text-chocolate/40 uppercase font-black">{item.category}</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => toggleAvailability(item.id)}
                    className={`size-10 rounded-lg flex items-center justify-center transition-all ${
                      item.isAvailable ? 'bg-primary text-chocolate' : 'bg-gray-100 text-gray-400'
                    }`}
                  >
                    <span className="material-symbols-outlined text-[20px]">
                      {item.isAvailable ? 'check_circle' : 'do_not_disturb_on'}
                    </span>
                  </button>
                </div>
              ))}
            </div>
            <div className="p-4 bg-gray-50 text-center">
              <button className="text-xs font-black text-secondary hover:underline">Launch Full Menu Editor</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPortal;
