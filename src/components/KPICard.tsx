
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, TrendingDown, CircleArrowUp, CircleArrowDown } from "lucide-react";

interface KPICardProps {
  title: string;
  value: string;
  description: string;
  trend?: 'up' | 'down' | 'neutral';
  trendValue?: string;
  icon?: React.ReactNode;
}

export const KPICard: React.FC<KPICardProps> = ({ title, value, description, trend = 'neutral', trendValue = '', icon }) => {
  return (
    <Card className="bg-envoi-dark-gray border-envoi-mid-gray overflow-hidden">
      <div className="h-1 w-full bg-gradient-to-r from-envoi-purple to-envoi-violet"></div>
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-envoi-soft-gray text-sm">{title}</h3>
          <div className="text-envoi-purple">
            {icon}
          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-2xl font-bold text-envoi-white">{value}</span>
          <div className="flex items-center justify-between">
            <span className="text-xs text-envoi-soft-gray">{description}</span>
            {trend === 'up' && trendValue && (
              <div className="flex items-center text-green-500 text-xs">
                <CircleArrowUp size={12} className="mr-1" />
                {trendValue}
              </div>
            )}
            {trend === 'down' && trendValue && (
              <div className="flex items-center text-red-500 text-xs">
                <CircleArrowDown size={12} className="mr-1" />
                {trendValue}
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
