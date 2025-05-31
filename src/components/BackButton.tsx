'use client';

import { useRouter } from 'next/navigation';

export default function BackButton() {
  const router = useRouter();

  return (
    <button onClick={() => router.back()} className="absolute top-4 left-4 bg-black text-white px-4 py-2 rounded hover:bg-gray-800">
      ← กลับ
    </button>
  );
}
