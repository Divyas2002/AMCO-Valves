"use client";

import { useState } from "react";
import { MessageSquare, Send, Sparkles, X, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { aiProductAssistant } from "@/ai/flows/ai-product-assistant";

export function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [messages, setMessages] = useState<{ role: 'user' | 'ai', content: string }[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim() || isLoading) return;

    const userMessage = query;
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setQuery("");
    setIsLoading(true);

    try {
      const response = await aiProductAssistant({ query: userMessage });
      setMessages(prev => [...prev, { role: 'ai', content: response.response }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'ai', content: "I'm sorry, I'm having trouble connecting right now. Please try again later." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-secondary text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform z-40 group"
      >
        <MessageSquare size={24} className="group-hover:rotate-12 transition-transform" />
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-secondary"></span>
        </span>
      </button>

      {/* Assistant Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-[90vw] max-w-[400px] z-50 animate-fade-in">
          <Card className="shadow-2xl border-primary/10 overflow-hidden bg-white">
            <CardHeader className="bg-primary text-white flex flex-row items-center justify-between py-4">
              <div className="flex items-center gap-2">
                <Sparkles className="text-secondary" size={20} />
                <CardTitle className="text-lg">Product Assistant</CardTitle>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white/70 hover:text-white transition-colors">
                <X size={20} />
              </button>
            </CardHeader>
            <CardContent className="h-80 overflow-y-auto p-4 space-y-4 bg-background/30">
              {messages.length === 0 && (
                <div className="text-center py-8">
                  <div className="w-12 h-12 bg-secondary/10 text-secondary rounded-full flex items-center justify-center mx-auto mb-3">
                    <Sparkles size={24} />
                  </div>
                  <p className="text-sm font-medium text-primary">How can I help you today?</p>
                  <p className="text-xs text-foreground/50 mt-1">Ask about valve specs, configurations, or applications.</p>
                </div>
              )}
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-3 rounded-2xl text-sm ${
                    msg.role === 'user'
                      ? 'bg-secondary text-white rounded-tr-none'
                      : 'bg-white text-primary border border-border rounded-tl-none shadow-sm'
                  }`}>
                    {msg.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm border border-border">
                    <Loader2 size={16} className="animate-spin text-secondary" />
                  </div>
                </div>
              )}
            </CardContent>
            <CardFooter className="p-3 bg-white border-t border-border">
              <form onSubmit={handleSubmit} className="flex w-full gap-2">
                <Input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Type your inquiry..."
                  className="flex-1 focus-visible:ring-secondary border-none bg-background"
                />
                <Button type="submit" size="icon" variant="secondary" disabled={isLoading}>
                  <Send size={18} />
                </Button>
              </form>
            </CardFooter>
          </Card>
        </div>
      )}
    </>
  );
}
