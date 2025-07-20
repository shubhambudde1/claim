import React, { useEffect, useState } from 'react';
import { getHistory } from '../api';

interface History {
  _id: string;
  userId: string;
  userName: string;
  points: number;
  claimedAt: string;
}

interface Props {
  refresh: boolean;
}

const ClaimHistory: React.FC<Props> = ({ refresh }) => {
  const [history, setHistory] = useState<History[]>([]);

  useEffect(() => {
    fetchHistory();
  }, [refresh]);

  const fetchHistory = async () => {
    const res = await getHistory();
    setHistory(res.data);
  };

  return (
    <div className="mt-6">
      <h2 className="text-2xl font-bold mb-2 text-blue-950">Claim History</h2>
      <div className="shadow-lg rounded-lg overflow-hidden">
        <ul className="divide-y divide-gray-200 text-gray-800">
          {history.map((item) => (
            <li key={item._id} className="p-3 hover:bg-white hover:bg-opacity-20">
              <strong>{item.userName}</strong> claimed <strong>{item.points}</strong> points on {new Date(item.claimedAt).toLocaleString()}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ClaimHistory;
