import React, { useState } from 'react';
import ServicesTab from './ServicesTab';
import SalesTab from './SalesTab';

function LandingPage() {
  const [activeTab, setActiveTab] = useState('services');

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="border-b border-gray-200">
              <nav className="-mb-px flex" aria-label="Tabs">
                <button
                  onClick={() => setActiveTab('services')}
                  className={`${
                    activeTab === 'services'
                      ? 'border-indigo-500 text-indigo-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  } w-1/2 py-4 px-1 text-center border-b-2 font-medium text-sm`}
                >
                  Services
                </button>
                <button
                  onClick={() => setActiveTab('sales')}
                  className={`${
                    activeTab === 'sales'
                      ? 'border-indigo-500 text-indigo-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  } w-1/2 py-4 px-1 text-center border-b-2 font-medium text-sm`}
                >
                  Sales
                </button>
              </nav>
            </div>
            <div className="mt-6">
              {activeTab === 'services' ? <ServicesTab /> : <SalesTab />}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default LandingPage;
