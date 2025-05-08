
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowUp, ArrowDown, DollarSign, TrendingUp, TrendingDown, ChartBar, ChartLine, Info } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import CompanyOverview from './CompanyOverview';
import { KPICard } from './KPICard';
import { MetricsTable } from './MetricsTable';

const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-envoi-black font-inter text-envoi-white">
      <header className="py-6 px-8 flex items-center justify-between border-b border-envoi-dark-gray">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold">
            <span className="text-envoi-white">en</span>
            <span className="text-envoi-purple">voi</span>
            <span className="text-envoi-white">.</span>
          </h1>
          <span className="ml-4 text-envoi-soft-gray text-sm">KPI Dashboard</span>
        </div>
        <div className="text-sm text-envoi-soft-gray">
          April 2025
        </div>
      </header>

      <main className="p-8">
        <CompanyOverview />

        <div className="my-8">
          <h2 className="text-xl font-bold mb-4">Key Metrics Summary</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <KPICard 
              title="Total Supply" 
              value="1,543" 
              description=".voi Names" 
              trend="up" 
              trendValue="+12%" 
              icon={<ChartBar size={20} />} 
            />
            <KPICard 
              title="Monthly Active Wallets" 
              value="346" 
              description="Unique wallets" 
              trend="up" 
              trendValue="+24%" 
              icon={<ChartLine size={20} />} 
            />
            <KPICard 
              title="dApp Integrations" 
              value="18" 
              description="Projects using envoi" 
              trend="up" 
              trendValue="+5" 
              icon={<TrendingUp size={20} />} 
            />
            <KPICard 
              title="Revenue" 
              value="$0" 
              description="Pre-revenue" 
              trend="neutral" 
              icon={<DollarSign size={20} />} 
            />
          </div>
        </div>

        <Tabs defaultValue="adoption" className="my-8">
          <TabsList className="bg-envoi-dark-gray">
            <TabsTrigger value="adoption">Adoption</TabsTrigger>
            <TabsTrigger value="growth">Growth</TabsTrigger>
            <TabsTrigger value="ecosystem">Ecosystem</TabsTrigger>
            <TabsTrigger value="community">Community</TabsTrigger>
            <TabsTrigger value="revenue">Revenue</TabsTrigger>
            <TabsTrigger value="developers">Developer Traction</TabsTrigger>
          </TabsList>
          <TabsContent value="adoption" className="mt-6">
            <MetricsTable category="Adoption" />
          </TabsContent>
          <TabsContent value="growth" className="mt-6">
            <MetricsTable category="Growth" />
          </TabsContent>
          <TabsContent value="ecosystem" className="mt-6">
            <MetricsTable category="Ecosystem" />
          </TabsContent>
          <TabsContent value="community" className="mt-6">
            <MetricsTable category="Community" />
          </TabsContent>
          <TabsContent value="revenue" className="mt-6">
            <MetricsTable category="Revenue" />
          </TabsContent>
          <TabsContent value="developers" className="mt-6">
            <MetricsTable category="Developer Traction" />
          </TabsContent>
        </Tabs>

        <div className="mt-10">
          <h2 className="text-xl font-bold mb-6">Current Focus: Q1-Q2 2025 Roadmap</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-envoi-dark-gray border-envoi-mid-gray">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <h3 className="font-bold">Q1 (Now)</h3>
                </div>
                <p className="text-envoi-white">SDK rollout, dApp integration, advanced user profiles</p>
              </CardContent>
            </Card>
            <Card className="bg-envoi-dark-gray border-envoi-mid-gray">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-3 h-3 rounded-full bg-envoi-purple"></div>
                  <h3 className="font-bold">Q2 (Planned)</h3>
                </div>
                <p className="text-envoi-white">Subname creation, NFT collection linking, token + SBT features</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <footer className="py-6 px-8 border-t border-envoi-dark-gray">
        <div className="flex justify-between items-center">
          <div className="text-sm text-envoi-soft-gray">
            © 2025 envoi. All rights reserved.
          </div>
          <div className="text-sm text-envoi-soft-gray">
            <a href="https://envoi.sh" className="hover:text-envoi-purple transition-colors">envoi.sh</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;
