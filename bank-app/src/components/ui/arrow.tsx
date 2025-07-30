import { ArrowUpRight, ArrowDownLeft } from "lucide-react";

export function arrowIcon(dynamics: string) {
  const value = parseInt(dynamics.replace("%", ""), 10); // safely convert "47%" -> 47

  if (value >= 50) {
    return <ArrowUpRight className="text-green-500 w-4 h-4" />;
  }

  return <ArrowDownLeft className="text-red-500 w-4 h-4" />;
}

