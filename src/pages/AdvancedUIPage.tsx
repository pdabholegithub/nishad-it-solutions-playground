import { useState } from 'react';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { ImageCarousel } from '../components/ui/ImageCarousel';

export function AdvancedUIPage() {
  const [activeTab, setActiveTab] = useState('tab1');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const users = [
    { id: 1, name: 'Alice Smith', role: 'Admin', status: 'Active' },
    { id: 2, name: 'Bob Jones', role: 'User', status: 'Inactive' },
    { id: 3, name: 'Charlie Brown', role: 'Editor', status: 'Active' },
    { id: 4, name: 'Diana Prince', role: 'Admin', status: 'Active' },
  ];

  const filteredUsers = users.filter(u => u.name.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <div className="max-w-5xl space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900" data-testid="page-title">Advanced UI Components</h1>
      </div>

      {/* Embedded Carousel matching screenshot */}
      <section className="mb-8">
        <ImageCarousel />
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Table Section */}
        <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 lg:col-span-2 space-y-4">
          <h2 className="text-xl font-semibold border-b pb-2">Dynamic Table</h2>
          <div className="flex justify-between items-center">
            <Input 
              placeholder="Search by name..." 
              className="max-w-sm" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              data-testid="table-search"
            />
          </div>
          <div className="overflow-x-auto rounded border">
            <table className="w-full text-sm text-left" data-testid="data-table">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 border-b">
                <tr>
                  <th className="px-6 py-3">ID</th>
                  <th className="px-6 py-3">Name</th>
                  <th className="px-6 py-3">Role</th>
                  <th className="px-6 py-3">Status</th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.map((user) => (
                  <tr key={user.id} className="bg-white border-b hover:bg-gray-50" data-testid={`table-row-${user.id}`}>
                    <td className="px-6 py-4">{user.id}</td>
                    <td className="px-6 py-4 font-medium text-gray-900">{user.name}</td>
                    <td className="px-6 py-4">{user.role}</td>
                    <td className="px-6 py-4">{user.status}</td>
                  </tr>
                ))}
                {filteredUsers.length === 0 && (
                  <tr><td colSpan={4} className="px-6 py-4 text-center">No users found</td></tr>
                )}
              </tbody>
            </table>
          </div>
        </section>

        {/* Modal Section */}
        <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 space-y-4">
          <h2 className="text-xl font-semibold border-b pb-2">Modal Dialogs</h2>
          <Button onClick={() => setIsModalOpen(true)} data-testid="btn-open-modal">Open Modal</Button>
          
          {isModalOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50" data-testid="modal-overlay">
              <div className="bg-white p-6 rounded-lg max-w-sm w-full mx-4 shadow-xl pointer-events-auto" data-testid="modal-content">
                <h3 className="text-lg font-bold mb-4" data-testid="modal-title">Important Notice</h3>
                <p className="mb-6 text-gray-600">Please confirm your action before proceeding. This is an embedded modal dialog.</p>
                <div className="flex justify-end gap-2">
                  <Button variant="outline" onClick={() => setIsModalOpen(false)} data-testid="modal-cancel">Cancel</Button>
                  <Button onClick={() => setIsModalOpen(false)} data-testid="modal-confirm">Confirm</Button>
                </div>
              </div>
            </div>
          )}
        </section>

        {/* Tabs Section */}
        <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 space-y-4">
          <h2 className="text-xl font-semibold border-b pb-2">Tabs Component</h2>
          <div className="flex border-b">
            <button 
              className={`px-4 py-2 font-medium text-sm ${activeTab === 'tab1' ? 'border-b-2 border-primary text-primary' : 'text-gray-500 hover:text-gray-700'}`}
              onClick={() => setActiveTab('tab1')}
              data-testid="tab-1"
            >
              Overview
            </button>
            <button 
              className={`px-4 py-2 font-medium text-sm ${activeTab === 'tab2' ? 'border-b-2 border-primary text-primary' : 'text-gray-500 hover:text-gray-700'}`}
              onClick={() => setActiveTab('tab2')}
              data-testid="tab-2"
            >
              Settings
            </button>
          </div>
          <div className="py-4">
            {activeTab === 'tab1' && <div data-testid="tab-content-1">Content for the Overview tab. This simulates lazy state switching.</div>}
            {activeTab === 'tab2' && <div data-testid="tab-content-2">Settings tab content. Here you might configure some advanced stuff.</div>}
          </div>
        </section>

      </div>
    </div>
  );
}
