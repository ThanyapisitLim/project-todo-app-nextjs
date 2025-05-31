"use client";

import BackButton from '@/components/BackButton';
import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

type Topic = {
    id: string;
    title: string;
    detail: string;
};

export default function Todo() {
    const searchParams = useSearchParams();
    const router = useRouter(); // ✅ เพิ่มตรงนี้
    const id = searchParams.get("id");
    const [topic, setTopic] = useState<Topic | null>(null);

    useEffect(() => {
        const stored = localStorage.getItem("topics");

        if (stored) {
            const topics: Topic[] = JSON.parse(stored);
            let found = null;
            for (let i = 0; i < topics.length; i++) {
                if (topics[i].id === id) {
                    found = topics[i];
                    break;
                }
            }

            if (found) setTopic(found);
        }
    }, [id]);

    function handleDelete() {
        const stored = localStorage.getItem('topics');
        if (!stored || !id) return;

        const topics = JSON.parse(stored);
        const updatedTopics = topics.filter((t: Topic) => t.id !== id);
        localStorage.setItem('topics', JSON.stringify(updatedTopics));
        router.push('/list');
    }

    if (!topic) {
        return <p>Loading or topic not found...</p>;
    }

    return (
        <div className="flex justify-center items-center">
            <BackButton/>
            <div className="text-center">
                <h1 className="text-2xl font-bold mb-4">Name : {topic.title}</h1>
                <p className="text-lg mb-4">Detail: {topic.detail}</p>
                <button
                    onClick={handleDelete}
                    className="mt-4 px-4 py-2 bg-black text-white rounded hover:bg-grey-800">
                    ลบหัวข้อนี้
                </button>
            </div>
        </div>
    );
}
