import React, { useState } from 'react';
import UserSelector from './api/components/UserSelector';
import ClaimButton from './api/components/ClaimButton';
import Leaderboard from './api/components/Leaderboard';
import ClaimHistory from './api/components/ClaimHistory';

const App: React.FC = () => {
  const [selectedUser, setSelectedUser] = useState('');
  const [refresh, setRefresh] = useState(false);

  const handleClaim = () => {
    setRefresh(!refresh);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white">
      <div className="w-full p-6  rounded-lg shadow-lg bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white">
        <h1 className="text-4xl font-bold mb-4 text-center text-black">Leaderboard System</h1>
        <div className="overall flex p-4">

        <div className='w-1/2 p-4'>
        <UserSelector selectedUser={selectedUser} setSelectedUser={setSelectedUser} onUserAdded={handleClaim} />
        <ClaimButton selectedUser={selectedUser} onClaim={handleClaim} />
                </div>
        <div className="w-1/2 p-4">
        <Leaderboard refresh={refresh} />
        </div>
        </div>
        <ClaimHistory refresh={refresh} />

        </div>
          
      </div>
  
  );
};

export default App;
