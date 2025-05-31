'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function NewTopicPage() {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [todos, setTodos] = useState(['']);

  const handleSubmit = () => {
    // ส่ง title และ todos ไปเก็บใน state/db/localStorage
    // แล้ว redirect กลับไปหน้า todolist
    router.push('/todolist');
  };

  return (
    <div>
      <h2>เพิ่มหัวข้อใหม่</h2>
      <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="ชื่อหัวข้อ" />

      {todos.map((t, i) => (
        <input
          key={i}
          value={t}
          onChange={(e) => {
            const copy = [...todos];
            copy[i] = e.target.value;
            setTodos(copy);
          }}
          placeholder={`Todo ${i + 1}`}
        />
      ))}
      <button onClick={() => setTodos([...todos, ''])}>+ เพิ่ม todo</button>

      <button onClick={handleSubmit}>บันทึก</button>
    </div>
  );
}
