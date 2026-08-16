import { Ticket, Package, ExternalLink, MessageCircle } from 'lucide-react';
import { useState } from 'react';

export default function TicketsOrders() {
  const [activeTab, setActiveTab] = useState<'orders' | 'tickets'>('orders');

  const orders = [
    { id: 'ORD-8902', date: 'Aug 10, 2026', item: 'Credens NFC Pro Card - Matte Black', status: 'Shipped', amount: '$29.00' },
    { id: 'ORD-7511', date: 'Jan 15, 2026', item: 'Credens Basic Card - White', status: 'Delivered', amount: '$15.00' }
  ];

  const tickets = [
    { id: 'TIC-1092', date: 'Aug 12, 2026', subject: 'Issue linking custom domain', status: 'Open' },
    { id: 'TIC-0941', date: 'Mar 05, 2026', subject: 'NFC Card not scanning on older iPhones', status: 'Resolved' }
  ];

  return (
    <div className="max-w-[1400px] mx-auto p-6 md:p-8 animate-in fade-in duration-500">
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">Tickets & Orders</h2>
        <p className="text-[15px] text-gray-500 dark:text-[#a1a1a1]">Track your physical NFC card orders and support requests.</p>
      </div>

      <div className="flex border-b border-gray-200/80 dark:border-[#1e1e1e] mb-6">
        <button 
          onClick={() => setActiveTab('orders')}
          className={`flex items-center gap-2 px-6 py-3 border-b-2 font-medium text-[14px] transition-colors ${
            activeTab === 'orders' 
              ? 'border-[#171717] dark:border-white text-gray-900 dark:text-white' 
              : 'border-transparent text-gray-500 hover:text-gray-900 dark:hover:text-white'
          }`}
        >
          <Package className="w-4 h-4" /> Orders
        </button>
        <button 
          onClick={() => setActiveTab('tickets')}
          className={`flex items-center gap-2 px-6 py-3 border-b-2 font-medium text-[14px] transition-colors ${
            activeTab === 'tickets' 
              ? 'border-[#171717] dark:border-white text-gray-900 dark:text-white' 
              : 'border-transparent text-gray-500 hover:text-gray-900 dark:hover:text-white'
          }`}
        >
          <Ticket className="w-4 h-4" /> Support Tickets
        </button>
      </div>

      <div className="bg-white dark:bg-[#0c0c0c] rounded-xl border border-gray-200/80 dark:border-[#1e1e1e] transition-all duration-200 hover:border-gray-300 dark:hover:border-[#2a2a2a] overflow-hidden">
        {activeTab === 'orders' ? (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-100 dark:border-[#1e1e1e] bg-[#fafafa] dark:bg-[#0c0c0c]">
                  <th className="px-6 py-4 text-[12px] font-semibold text-gray-500 dark:text-[#a1a1a1] uppercase tracking-wider">Order ID</th>
                  <th className="px-6 py-4 text-[12px] font-semibold text-gray-500 dark:text-[#a1a1a1] uppercase tracking-wider">Date</th>
                  <th className="px-6 py-4 text-[12px] font-semibold text-gray-500 dark:text-[#a1a1a1] uppercase tracking-wider">Item</th>
                  <th className="px-6 py-4 text-[12px] font-semibold text-gray-500 dark:text-[#a1a1a1] uppercase tracking-wider">Amount</th>
                  <th className="px-6 py-4 text-[12px] font-semibold text-gray-500 dark:text-[#a1a1a1] uppercase tracking-wider">Status</th>
                  <th className="px-6 py-4"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-[#1e1e1e]">
                {orders.map((order) => (
                  <tr key={order.id} className="hover:bg-gray-50/50 dark:hover:bg-white/[0.02] transition-colors">
                    <td className="px-6 py-4 text-[13px] font-medium text-gray-900 dark:text-white">{order.id}</td>
                    <td className="px-6 py-4 text-[13px] text-gray-500">{order.date}</td>
                    <td className="px-6 py-4 text-[13px] text-gray-700 dark:text-gray-300">{order.item}</td>
                    <td className="px-6 py-4 text-[13px] text-gray-700 dark:text-gray-300">{order.amount}</td>
                    <td className="px-6 py-4">
                      <span className={`text-[11px] font-bold px-2 py-1 rounded-full ${
                        order.status === 'Shipped' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400' : 
                        order.status === 'Delivered' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' : 
                        'bg-gray-100 text-gray-700 dark:bg-[#1a1a1a] dark:text-gray-300'
                      }`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                        <ExternalLink className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-100 dark:border-[#1e1e1e] bg-[#fafafa] dark:bg-[#0c0c0c]">
                  <th className="px-6 py-4 text-[12px] font-semibold text-gray-500 dark:text-[#a1a1a1] uppercase tracking-wider">Ticket ID</th>
                  <th className="px-6 py-4 text-[12px] font-semibold text-gray-500 dark:text-[#a1a1a1] uppercase tracking-wider">Date</th>
                  <th className="px-6 py-4 text-[12px] font-semibold text-gray-500 dark:text-[#a1a1a1] uppercase tracking-wider">Subject</th>
                  <th className="px-6 py-4 text-[12px] font-semibold text-gray-500 dark:text-[#a1a1a1] uppercase tracking-wider">Status</th>
                  <th className="px-6 py-4"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-[#1e1e1e]">
                {tickets.map((ticket) => (
                  <tr key={ticket.id} className="hover:bg-gray-50/50 dark:hover:bg-white/[0.02] transition-colors">
                    <td className="px-6 py-4 text-[13px] font-medium text-gray-900 dark:text-white">{ticket.id}</td>
                    <td className="px-6 py-4 text-[13px] text-gray-500">{ticket.date}</td>
                    <td className="px-6 py-4 text-[13px] text-gray-700 dark:text-gray-300 max-w-[300px] truncate">{ticket.subject}</td>
                    <td className="px-6 py-4">
                      <span className={`text-[11px] font-bold px-2 py-1 rounded-full ${
                        ticket.status === 'Open' ? 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400' : 
                        'bg-gray-100 text-gray-700 dark:bg-[#1a1a1a] dark:text-gray-300'
                      }`}>
                        {ticket.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                        <MessageCircle className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        
        <div className="p-4 border-t border-gray-100 dark:border-[#1e1e1e] bg-[#fafafa] dark:bg-[#0c0c0c] flex justify-center">
          <button className="text-[13px] font-medium text-gray-900 dark:text-white opacity-70 hover:opacity-100 transition-opacity">
            {activeTab === 'orders' ? 'View all orders' : 'Create new ticket'}
          </button>
        </div>
      </div>
    </div>
  );
}
