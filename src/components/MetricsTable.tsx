
import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Info } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface MetricsTableProps {
  category: string;
}

// This data comes from the provided KPI document
const metricsData = {
  "Adoption": [
    { kpi: "Total supply of .voi Names", value: "1,543", description: "Total supply of .voi Names collection. Includes reserved names created before launch such as premium names." },
    { kpi: "Unique holders", value: "482", description: "Set of accounts holding .voi names" },
    { kpi: "Total .voi Names Claimed", value: "1,302", description: "Names claimed excluding premium names" },
    { kpi: "Monthly Active Wallets (MAW)", value: "346", description: "Unique wallets that made at least 1 transaction over the course of a month" },
    { kpi: "Average Names per Wallet", value: "2.7", description: "Average holdings per wallet excluding reserved name holders" }
  ],
  "Growth": [
    { kpi: "MoM Registration Growth (Q1 Avg)", value: "8%", description: "Month-over-month growth in registrations" }
  ],
  "Retention": [
    { kpi: "Renewal/Retention Rate (Beta cohort)", value: "73%", description: "Number of renewals as extensions on names" }
  ],
  "Ecosystem": [
    { kpi: "Live dApp Integrations", value: "18", description: "Count of projects using envoi" },
    { kpi: "SDK/API Requests (monthly)", value: "24,335", description: "Request to API" }
  ],
  "Community": [
    { kpi: "Discord Members", value: "2,140", description: "Number of discord members" },
    { kpi: "Twitter/X Followers", value: "8,743", description: "Twitter followers" },
    { kpi: "Weekly Active Discord Users", value: "346", description: "Number of discord members that have posted at least 1 message the past week" }
  ],
  "Revenue": [
    { kpi: "Total Gross Revenue (to date)", value: "$0", description: "Pre-revenue" },
    { kpi: "Premium Name Revenue Share", value: "$0", description: "Pre-revenue" },
    { kpi: "Grant Funding", value: "$0", description: "Pre-revenue" }
  ],
  "Developer Traction": [
    { kpi: "GitHub Stars", value: "0", description: "Pre-launch" },
    { kpi: "Hackathon Projects Built w/ enVoi", value: "0", description: "Pre-launch" }
  ]
};

export const MetricsTable: React.FC<MetricsTableProps> = ({ category }) => {
  const metrics = metricsData[category as keyof typeof metricsData] || [];

  return (
    <TooltipProvider>
      <Card className="bg-envoi-dark-gray border-envoi-mid-gray">
        <Table>
          <TableHeader>
            <TableRow className="border-envoi-dark-gray">
              <TableHead className="text-envoi-soft-gray w-1/3">KPI</TableHead>
              <TableHead className="text-envoi-soft-gray w-1/3">Value</TableHead>
              <TableHead className="text-envoi-soft-gray w-1/3">Description</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {metrics.map((metric, index) => (
              <TableRow key={index} className="border-envoi-mid-gray">
                <TableCell className="text-envoi-white">{metric.kpi}</TableCell>
                <TableCell className="text-envoi-white font-bold">{metric.value}</TableCell>
                <TableCell className="text-envoi-soft-gray">
                  <div className="flex items-center gap-2">
                    {metric.description}
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <span><Info size={14} className="text-envoi-soft-gray hover:text-envoi-purple transition-colors cursor-pointer" /></span>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="text-xs max-w-xs">{metric.description}</p>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </TooltipProvider>
  );
};

// Adding a type for the Card component which was undefined
const Card: React.FC<{ className?: string; children: React.ReactNode }> = ({ className, children }) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};
