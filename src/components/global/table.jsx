'use client';
import { useState, useEffect } from 'react';

export default function ShowSchedule({
  scheduleData = [],
  title = 'SHOW SCHEDULE',
}) {
  const [isMobile, setIsMobile] = useState(false);

  // Check if window is available (to avoid SSR issues)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
      };

      // Set initial state
      handleResize();

      // Add event listener
      window.addEventListener('resize', handleResize);

      // Clean up
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  return (
    <div className="w-full max-w-2xl mx-auto bg-gray-900">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-amber-300 text-black">
            <th className="w-1/4 py-2 px-4 text-left font-bold border-r border-amber-400">
              TIME
            </th>
            <th className="w-3/4 py-2 px-4 text-left font-bold">EVENT</th>
          </tr>
        </thead>
        <tbody>
          {scheduleData.map((item, index) => (
            <tr
              key={index}
              className="border-t border-gray-700 pointer hover:bg-white md:bg-white md:hover:bg-black md:text-black text-white hover:text-black  md:hover:text-white">
              <td className="w-1/4 py-3 px-4 border-r border-gray-700">
                {item.time}
              </td>
              <td className="w-3/4 py-3 px-4">
                <span className="mr-2">{item.icon}</span>
                {item.event}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Example usage with the data from your images
export function ShowScheduleExample() {
  const scheduleItems = [
    { time: '6:00PM', icon: '⌛', event: 'Line up and check in' },
    {
      time: '7:00PM',
      icon: '🍸',
      event: 'Pre-drinks & mingling with topless waiters',
    },
    { time: '7:15PM', icon: '🔥', event: 'Show time!' },
    { time: '15 MIN', icon: '💃', event: 'Interval 1 – dance break' },
    { time: '8:00PM', icon: '🔥', event: 'Part 2 Commences' },
    { time: '15 MIN', icon: '💃', event: 'Interval 2 – dance break' },
    { time: '9:00PM', icon: '🔥', event: 'Final Part' },
    { time: '9:30PM', icon: '🎉', event: 'Show ends & after party begins' },
  ];

  return (
    <div className="bg-gray-900 p-4">
      <ShowSchedule scheduleData={scheduleItems} />
    </div>
  );
}

// Example usage with the data from your images
