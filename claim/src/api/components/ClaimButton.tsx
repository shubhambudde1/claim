import React from 'react';
import { claimPoints } from '../api';

interface Props {
  selectedUser: string;
  onClaim: () => void;
}

const ClaimButton: React.FC<Props> = ({ selectedUser, onClaim }) => {
  const handleClaim = async () => {
    if (!selectedUser) return;
    await claimPoints(selectedUser);
    onClaim();
  };

  return (
    <button
      onClick={handleClaim}
      className="bg-green-600 text-white font-bold py-2 px-4 rounded-full mt-2 w-full"
    >
      Claim Points
    </button>
  );
};

export default ClaimButton;
