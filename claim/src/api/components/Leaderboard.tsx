import React, { useEffect, useState } from 'react';
import { getLeaderboard } from '../api';

interface User {
  _id: string;
  name: string;
  totalPoints: number;
}

interface Props {
  refresh: boolean;
}

const Leaderboard: React.FC<Props> = ({ refresh }) => {
  const [leaderboard, setLeaderboard] = useState<User[]>([]);

  useEffect(() => {
    fetchLeaderboard();
  }, [refresh]);

  const fetchLeaderboard = async () => {
    const res = await getLeaderboard();
    setLeaderboard(res.data);
  };

  return (
    <div className="mt-6">
      <h2 className="text-2xl font-bold mb-2 text-cyan-800">Leaderboard</h2>
      <div className="shadow-lg rounded-lg overflow-hidden">
     <table className="w-full text-gray-800 rounded-xl overflow-hidden shadow-lg">
  <thead className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
    <tr>
      <th className="p-4 text-left font-bold">🏆 Rank</th>
      <th className="p-4 text-left font-bold">👤 Name</th>
      <th className="p-4 text-center font-bold">⭐ Total Points</th>
    </tr>
  </thead>
  <tbody>
    {leaderboard.map((user, index) => (
      <tr
        key={user._id}
        className="bg-white bg-opacity-20 even:bg-opacity-40 hover:bg-indigo-400 transition-all duration-400"
      >
        <td className="p-4 text-center font-semibold text-indigo-700">{index + 1}</td>
        <td className="p-4 text-indigo-900">{user.name}</td>
        <td className="p-4 text-center font-semibold text-purple-700">{user.totalPoints}</td>
      </tr>
    ))}
  </tbody>
</table>

      </div>
    </div>
  );
};

export default Leaderboard;
