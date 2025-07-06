import { Wrench, HardHat, AlertTriangle } from 'lucide-react';

export default function DashboardPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <div className="flex items-center justify-center gap-4 mb-6">
        <HardHat className="w-14 h-14 text-yellow-500 animate-bounce" />
        <Wrench className="w-14 h-14 text-gray-400 animate-spin-slow" />
        <AlertTriangle className="w-14 h-14 text-orange-500 animate-pulse" />
      </div>
      <h1 className="text-4xl font-bold mb-2">Dashboard Under Construction</h1>
      <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-6">
        We&apos;re working hard to bring you an amazing dashboard experience.<br />
        Please check back soon!
      </p>
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-100 text-yellow-800 rounded shadow">
        <HardHat className="w-5 h-5" />
        <span>Thank you for your patience!</span>
      </div>
    </div>
  );
}