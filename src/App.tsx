import { AnimatedAIChat } from '@/components/ui/animated-ai-chat';

function App() {
  return (
    <div className="w-full h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-violet-950/20 via-transparent to-transparent"></div>
      <AnimatedAIChat />
    </div>
  );
}

export default App;