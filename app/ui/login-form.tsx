'use client'
import { useState } from 'react';

export default function LoginForm() {

  const [time, setTime] = useState(0);

  const handleTimeChange = (e: any) => {
    setTime(e.target.value);
  };

  function handleClick() {
    if (time === 0) {
      alert("Please insert time")
    } else {
      fetch("http://localhost:3001/api/hello", {
        method: "POST",
        body: JSON.stringify({
          "inHowManyMinutes": 0.1
        }),
        headers: {
          "content-type": "application/json",
        },
      }).catch((e) => console.log(e));
    }
  }

  return (
    <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
      <div className="w-full">
        <div>
          <div className="relative">
            <input
              className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
              id="email"
              type="number"
              name="time"
              placeholder='Please enter finish time'
              required
              onChange={handleTimeChange}
            />
          </div>
        </div>
      </div>
      <button
        onClick={() => handleClick()}
      >
        Send
      </button>
      <div className="flex h-8 items-end space-x-1">
      </div>
    </div>
  );
}

