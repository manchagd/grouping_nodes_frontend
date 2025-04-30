import { useEffect, useState } from 'react';
import api from '../api/axios';

function DatetimeViewer() {
  const [datetime, setDatetime] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDatetime = async () => {
      try {
        const response = await api.get('/datetime');
        setDatetime(response.data.datetime);
      } catch (err) {
        setError('Couldnt found date and time');
      }
    };

    fetchDatetime();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-2 text-gray-800">Date and Time from Rails:</h1>
      {error && <p className="text-red-500 font-bold">{error}</p>}
      {datetime ? (
        <p className="text-gray-500 font-bold">{datetime}</p>
      ) : (
        !error && <p className="text-gray-400">Charging...</p>
      )}
    </div>
  );
}

export default DatetimeViewer;
