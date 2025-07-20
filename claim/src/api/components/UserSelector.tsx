import React, { useEffect, useState } from 'react';
import { getUsers, addUser } from '../api';

interface User {
  _id: string;
  name: string;
  totalPoints: number;
}

interface Props {
  selectedUser: string;
  setSelectedUser: (id: string) => void;
  onUserAdded: () => void;
}

const UserSelector: React.FC<Props> = ({ selectedUser, setSelectedUser, onUserAdded }) => {
  const [users, setUsers] = useState<User[]>([]);
  const [newUserName, setNewUserName] = useState('');
  const [showAddUser, setShowAddUser] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const res = await getUsers();
    setUsers(res.data);
  };

  const handleAddUser = async () => {
    if (newUserName.trim() === '') return;
    await addUser(newUserName);
    setNewUserName('');
    fetchUsers();
    onUserAdded();
  };

  return (
    <div className="mb-4">
      {showAddUser &&  <div className=''>

        <h2 className="text-2xl font-bold text-purple-500 mb-6">add new User</h2>
       <div className="flex mt-2">
        <input
          type="text"
          className="shadow appearance-none border rounded-full w-full  px-3 text-gray-700 leading-tight flex-1"
          placeholder="New user name"
          value={newUserName}
          onChange={(e) => setNewUserName(e.target.value)}
          />
        <button
          onClick={handleAddUser}
          className="bg-white text-purple-500 font-bold py-2 px-2 rounded-full ml-2 p-2"
          >
          Add User
        </button>
          </div>
      </div>
}
<div className="flex">

        <h2 className="text-2xl font-bold text-purple-500 ml-8 mt-8 mb-8 pl-5">claim</h2>
        <h3 className='text-black  m-9 pl-5 mr-10'>try your luck</h3>
</div>

      <div className="flex p-2">
      <select
        className="w-60 h-12 border-red-50 bg-blue-500 text-amber-50 font-bold py-2 px-2 rounded-full ml-2 p-4"
        value={selectedUser}
        onChange={(e) => setSelectedUser(e.target.value)}
        >
        <option value="">Select User</option>
        {users.map((user) => (
          <option key={user._id} value={user._id}>{user.name}</option>
        ))}
      </select>
      <div className="m-2 p-2 text-blue-500 cursor-pointer" onClick={() => setShowAddUser(!showAddUser)}>add new user</div>
        </div>
     
    </div>
  );
};

export default UserSelector;
