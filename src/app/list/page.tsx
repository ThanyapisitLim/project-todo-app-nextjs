"use client"

import { useEffect, useState } from 'react';
import Link from 'next/link';


type Topic = {
  id: string
  title: string
  detail: string
}

export default function List() {
  const [topics, setTopics] = useState<Topic[]>([])
  useEffect(() => {
    const stored = localStorage.getItem("topics")
    if (stored) {
      setTopics(JSON.parse(stored))
    }
  }, [])

return (
  <div className="flex justify-center items-center p-6">
    <div>
      <h1 className="text-2xl font-bold mb-4 text-center">Todo list</h1>

      {topics.length === 0 ? (
        <p className="text-center">Add New Todo...</p>
      ) : (
        <ul className="space-y-2">
          {topics.map((topic) => (
            <li key={topic.id}>
              <Link href={`/list/todo?id=${topic.id}`}>
                <div className="p-3 bg-gray-100 rounded hover:bg-gray-200 text-center">
                  {topic.title}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
      <div className="mt-6 text-center">
        <Link
          href="/list/add"
          className="inline-block bg-black text-white px-4 py-2 rounded hover:bg-gray-800">
          + เพิ่มหัวข้อใหม่
        </Link>
      </div>
    </div>
  </div>
);
}