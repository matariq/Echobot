import { useState, useEffect, useRef } from 'react';

const MessageBubble = ({ message, isUser }) => (
  <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-2`}>
    <div className={`max-w-xs px-4 py-2 rounded-2xl text-white ${isUser ? 'bg-blue-500' : 'bg-gray-600'}`}>
      {message}
    </div>
  </div>
);

const TypingIndicator = () => (
  <div className="flex justify-start mb-2">
    <div className="max-w-xs px-4 py-2 rounded-2xl bg-gray-400 text-white">
      <div className="flex space-x-1">
        <div className="w-2 h-2 bg-white rounded-full animate-bounce [animation-delay:0s]"></div>
        <div className="w-2 h-2 bg-white rounded-full animate-bounce [animation-delay:0.2s]"></div>
        <div className="w-2 h-2 bg-white rounded-full animate-bounce [animation-delay:0.4s]"></div>
      </div>
    </div>
  </div>
);

const App = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMessage = input;
    setMessages([...messages, { text: userMessage, isUser: true }]);
    setInput('');
    setLoading(true);

    try {
      // const res = await fetch('https://example.org/chat', {
      //   method: "POST",
      //   body: JSON.stringify({ message: userMessage }),
      //   headers: {}
      // });
      // setMessages(prev => [...prev, { text: res?.data?.reply, isUser: false }]);
      setMessages(prev => [...prev, { text: `You said: ${userMessage}`, isUser: false }]);
    } catch (error) {
      setMessages(prev => [...prev, { text: 'Error contacting server.', isUser: false }]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = e => {
    if (e.key === 'Enter') sendMessage();
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <div className="flex-1 overflow-y-auto p-4">
        {messages.map((msg, i) => (
          <MessageBubble key={i} message={msg.text} isUser={msg.isUser} />
        ))}
        {loading && <TypingIndicator />}
        <div ref={messagesEndRef} />
      </div>
      <div className="p-4 bg-white border-t border-gray-300">
        <div className="flex">
          <input
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyUp={handleKeyPress}
            placeholder="Type a message..."
            className="flex-1 p-2 border rounded-full shadow-sm focus:outline-none"
          />
          <button
            onClick={sendMessage}
            className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600"
            disabled={input === "" || input === " "}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
