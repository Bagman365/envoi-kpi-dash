
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const CompanyOverview: React.FC = () => {
  return (
    <div className="mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="bg-envoi-dark-gray border-envoi-mid-gray col-span-1 lg:col-span-2">
          <CardContent className="p-6">
            <h2 className="text-xl font-bold mb-2 text-envoi-white">Company Overview</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="text-envoi-soft-gray text-sm">Company Name</h3>
                <p className="text-envoi-white">envoi</p>
              </div>
              <div>
                <h3 className="text-envoi-soft-gray text-sm">Website</h3>
                <a href="https://envoi.sh" className="text-envoi-purple hover:underline">envoi.sh</a>
              </div>
              <div>
                <h3 className="text-envoi-soft-gray text-sm">Stage</h3>
                <p className="text-envoi-white">Pre-Seed / Seed</p>
              </div>
              <div>
                <h3 className="text-envoi-soft-gray text-sm">Category</h3>
                <p className="text-envoi-white">Decentralized Identity & Naming Infrastructure</p>
              </div>
              <div className="col-span-2">
                <h3 className="text-envoi-soft-gray text-sm">Comparable</h3>
                <p className="text-envoi-white">ENS, Unstoppable Domains, Lens Handles</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-envoi-dark-gray border-envoi-mid-gray">
          <CardContent className="p-6">
            <h2 className="text-xl font-bold mb-2 text-envoi-white">What We Do</h2>
            <p className="text-envoi-white">
              envoi is a decentralized naming and identity service that lets users secure personalized 
              .voi domain names to power their Web3 presence across dApps, wallets, NFTs, and 
              beyond. Think of it as your <span className="text-envoi-purple">Web3 identity passport</span>: simple, composable, and 
              ecosystem-agnostic.
            </p>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-envoi-dark-gray border-envoi-mid-gray mt-6">
        <CardContent className="p-6">
          <h2 className="text-xl font-bold mb-2 text-envoi-white">Vision</h2>
          <p className="text-envoi-white">
            To become the <span className="text-envoi-purple">identity infrastructure layer</span> for Web3 enabling multi-chain names that carry your reputation, assets, and social layer across decentralized ecosystems.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default CompanyOverview;
