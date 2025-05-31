'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import BackButton from '@/components/BackButton';

export default function Add() {
    const [title, setTitle] = useState('');
    const [detail, setDetail] = useState('')
    const router = useRouter();
    const margin = { marginBottom: '50px' };
    const marginR = { marginRight: '20px' }
    const padding = { padding: '5px' }

    function handleSave() {
        router.push('/list');
        if (!title.trim()) return alert('กรุณากรอกชื่อหัวข้อ');

        const stored = localStorage.getItem('topics');
        const topics = stored ? JSON.parse(stored) : [];

        topics.push({ id: Date.now().toString(), title: title.trim(),detail: detail.trim() });

        localStorage.setItem('topics', JSON.stringify(topics));

        router.push('/list')
    }

    return (
        <div className='text-center'>
            <BackButton/>
            <h1 className="text-2xl font-bold mb-4" style={margin}>Add New Todo</h1>
            <div style={margin}>
                <input
                    className="border border-black p-4 rounded"
                    style={{ ...marginR, ...padding }}
                    type="text"
                    placeholder="Name..."
                    value={title}
                    onChange={e => setTitle(e.target.value)} />
            </div>
            <div style={margin}>
                <input
                    className="border border-black p-4 rounded"
                    style={{ ...marginR, ...padding }}
                    type="text"
                    placeholder="Enter Details..."
                    value={detail}
                    onChange={e => setDetail(e.target.value)} />
            </div>
            <button onClick={handleSave}>Save</button>
        </div>
    );
}