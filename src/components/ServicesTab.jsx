import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import ServiceForm from './ServiceForm';

function ServicesTab() {
  const [showForm, setShowForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [status, setStatus] = useState('all');
  const [timeRange, setTimeRange] = useState('all');

  // Mock data for services
  const services = [
    { id: 1, type: 'Repair', deviceId: 'DEV001', customerName: 'John Doe', status: 'pending', date: '2023-04-25' },
    { id: 2, type: 'Maintenance', deviceId: 'DEV002', customerName: 'Jane Smith', status: 'completed', date: '2023-04-20' },
    // Add more mock data as needed
  ];

  const filteredServices = services.filter(service => 
    service.type.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (status === 'all' || service.status === status) &&
    (timeRange === 'all' || isWithinTimeRange(service.date, timeRange))
  );

  function isWithinTimeRange(date, range) {
    const serviceDate = new Date(date);
    const today = new Date();
    switch (range) {
      case 'today':
        return serviceDate.toDateString() === today.toDateString();
      case 'week':
        const weekAgo = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);
        return serviceDate >= weekAgo && serviceDate <= today;
      case 'month':
        return serviceDate.getMonth() === today.getMonth() && serviceDate.getFullYear() === today.getFullYear();
      case 'year':
        return serviceDate.getFullYear() === today.getFullYear();
      default:
        return true;
    }
  }

  return (
    <div className="relative">
      <div className="mb-4 flex flex-wrap gap-4">
        <input
          type="text"
          placeholder="Search services..."
          className="p-2 border rounded"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          className="p-2 border rounded"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="all">All Status</option>
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
        </select>
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
        {filteredServices.map(service => (
          <li key={service.id} className="bg-white p-4 rounded shadow">
            <h3 className="font-bold">{service.type}</h3>
            <p>Device ID: {service.deviceId}</p>
            <p>Customer: {service.customerName}</p>
            <p>Status: {service.status}</p>
            <p>Date: {service.date}</p>
          </li>
        ))}
      </ul>
      <button
        className="fixed bottom-4 right-4 bg-blue-500 text-white p-4 rounded-full shadow-lg"
        onClick={() => setShowForm(true)}
      >
        <FaPlus />
      </button>
      {showForm && <ServiceForm onClose={() => setShowForm(false)} />}
    </div>
  );
}

export default ServicesTab;
