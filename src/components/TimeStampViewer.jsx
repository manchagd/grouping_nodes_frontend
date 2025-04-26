import { useEffect, useState } from 'react';
import api from '../api/axios';

function TimeStampViewer() {
  const [timestamp, setTimestamp] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTimeStamp = async () => {
      try {
        const response = await api.get('/time_stamp');
        setTimestamp(response.data.current_time);
      } catch (err) {
        setError('Couldnt found date and time');
      }
    };

    fetchTimeStamp();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-2 text-gray-800">Date and Time from Rails:</h1>
      {error && <p className="text-red-500 font-bold">{error}</p>}
      {timestamp ? (
        <p className="text-gray-500 font-bold">{timestamp}</p>
      ) : (
        !error && <p className="text-gray-400">Charging...</p>
      )}
    </div>
  );
}

export default TimeStampViewer;
