import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, Minimize2, Maximize2 } from 'lucide-react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm FertiliBot, your farming assistant. Ask me anything about crops, fertilizers, or soil health!",
      sender: 'bot',
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (isMinimized) setIsMinimized(false);
  };

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const getBotResponse = async (input) => {
    try {
      const response = await fetch('http://127.0.0.1:5000/api/chat_post', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input }),
      });

      if (!response.ok) throw new Error('Failed to fetch response');

      const data = await response.json();
      return data.response || "I'm not sure about that specific topic.";
    } catch (error) {
      console.error('Error:', error);
      return "Sorry, I couldn't get a response from the server.";
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (inputValue.trim() === '') return;

    const userMessage = { id: messages.length + 1, text: inputValue, sender: 'user' };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    const botResponse = await getBotResponse(inputValue);
    setMessages((prev) => [
      ...prev,
      { id: prev.length + 1, text: botResponse, sender: 'bot' },
    ]);
    setIsTyping(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Floating Chat Button */}
      <button
        onClick={toggleChat}
        className={`flex items-center justify-center p-4 rounded-full shadow-lg transition-all duration-300 
          ${isOpen ? 'bg-red-500 hover:bg-red-600' : 'bg-green-600 hover:bg-green-700'}`}
      >
        {isOpen ? <X className="h-6 w-6 text-white" /> : <MessageSquare className="h-6 w-6 text-white" />}
      </button>

      {isOpen && (
        <div className={`absolute bottom-20 right-0 w-80 sm:w-96 bg-white rounded-lg shadow-xl overflow-hidden transition-all duration-300 
          ${isMinimized ? 'h-14' : 'h-[450px]'}`}>
          {/* Chat Header */}
          <div className="bg-green-600 text-white p-3 flex justify-between items-center rounded-t-lg">
            <div className="flex items-center">
              <MessageSquare className="h-5 w-5 mr-2" />
              <h3 className="font-medium">FertiliBot Assistant</h3>
            </div>
            <div className="flex items-center space-x-2">
              <button onClick={toggleMinimize} className="text-white hover:text-green-200">
                {isMinimized ? <Maximize2 className="h-4 w-4" /> : <Minimize2 className="h-4 w-4" />}
              </button>
              <button onClick={toggleChat} className="text-white hover:text-green-200">
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Chat Messages */}
          {!isMinimized && (
            <>
              <div className="p-3 h-[350px] overflow-y-auto bg-gray-50 space-y-4">
                {messages.map((message) => (
                  <div key={message.id} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`p-3 rounded-lg max-w-[80%] text-sm leading-relaxed shadow-md 
                      ${message.sender === 'user' ? 'bg-green-600 text-white rounded-br-none' : 'bg-gray-200 text-gray-800 rounded-bl-none'}`}>
                      {message.text}
                    </div>
                  </div>
                ))}
                {isTyping && (
                  <div className="flex justify-start mb-3">
                    <div className="inline-block p-3 rounded-lg bg-gray-200 text-gray-800 rounded-bl-none">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Updated Input Box & Send Button */}
              <form onSubmit={handleSubmit} className="p-3 border-t border-gray-300 bg-white rounded-b-lg flex items-center space-x-2">
                {/* Updated Input Box */}
                <div className="relative flex-grow">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="Ask about crops or fertilizers..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 bg-gray-100 text-gray-800 shadow-sm transition-all duration-200"
                  />
                </div>

                {/* Updated Send Button */}
                <button
                  type="submit"
                  className="bg-gradient-to-r from-green-500 to-green-700 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50"
                  disabled={!inputValue.trim()}
                >
                  <Send className="h-5 w-5" />
                </button>
              </form>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Chatbot;
