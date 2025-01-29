import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import SaleForm from './SaleForm';

function SalesTab() {
  const [showForm, setShowForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [status, setStatus] = useState('all');
  const [timeRange, setTimeRange] = useState('all');

  // Mock data for sales
  const sales = [
    { id: 1, item: 'Product A', price: 100, customerName: 'Alice Johnson', date: '2023-04-25' },
    { id: 2, item: 'Product B', price: 200, customerName: 'Bob Williams', date: '2023-04-20' },
    // Add more mock data as needed
  ];

  const filteredSales = sales.filter(sale => 
    sale.item.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (status === 'all' || sale.status === status) &&
    (timeRange === 'all' || isWithinTimeRange(sale.date, timeRange))
  );

  function isWithinTimeRange(date, range) {
    const saleDate = new Date(date);
    const today = new Date();
    switch (range) {
      case 'today':
        return saleDate.toDateString() === today.toDateString();
      case 'week':
        const weekAgo = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);
        return saleDate >= weekAgo && saleDate <= today;
      case 'month':
        return saleDate.getMonth() === today.getMonth() && saleDate.getFullYear() === today.getFullYear();
      case 'year':
        return saleDate.getFullYear() === today.getFullYear();
      default:
        return true;
    }
  }

  return (
    <div className="relative">
      <div className="mb-4 flex flex-wrap gap-4">
        <input
          type="text"
          placeholder="Search sales..."
          className="p-2 border rounded"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          className="p-2 border rounded"
          value={timeRange}
          onChange={(e) => setTimeRange(e.target.value)}
        >
          <option value="all">All Time</option>
          <option value="today">Today</option>
          <option value="week">This Week</option>
          <option value="month">This Month</option>
          <option value="year">This Year</option>
        </select>
      </div>
      <ul className="space-y-4">
        {filteredSales.map(sale => (
          <li key={sale.id} className="bg-white p-4 rounded shadow">
            <h3 className="font-bold">{sale.item}</h3>
            <p>Price: ${sale.price}</p>
            <p>Customer: {sale.customerName}</p>
            <p>Date: {sale.date}</p>
          </li>
        ))}
      </ul>
      <button
        className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-full shadow-lg"
        onClick={() => setShowForm(true)}
      >
        <FaPlus />
      </button>
      {showForm && <SaleForm onClose={() => setShowForm(false)} />}
    </div>
  );
}

export default SalesTab;
