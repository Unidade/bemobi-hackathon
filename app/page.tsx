'use client';

import { Message, useChat } from 'ai/react';

const ptbr: Partial<Record<Message['role'], string>> = {
  'assistant': "Bemo",
  "user": "usuário"
}

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  return (
    <div className="flex flex-col w-full max-w-md py-24 mx-auto stretch">
      <div className="space-y-4">
        {messages.map(m => (
          <div key={m.id} className={`whitespace-pre-wrap`}>
            <div>
              <span className={`font-bold inline-block ${m.role === 'assistant' ? "ml-auto" : ""}`}>{ptbr[m.role]}</span>
              <p>{m.content}</p>
            </div>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit}>
        <input
          className="fixed bottom-0 w-full max-w-md p-2 mb-8 border border-gray-300 rounded shadow-xl"
          value={input}
          placeholder="Como posso ajudar ?"
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
}