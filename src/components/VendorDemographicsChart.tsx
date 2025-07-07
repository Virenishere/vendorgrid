"use client";

import { useEffect, useState } from "react";
import { Line, LineChart, XAxis, ResponsiveContainer } from "recharts";
import VendorChartSkeleton from "@/components/VendorChartSkeleton"; // 👈 import

interface WeeklyVendorData {
  week: string;
  count: number;
  weekLabel: string;
}

export function VendorDemographicsChart() {
  const [data, setData] = useState<WeeklyVendorData[]>([]);
  const [loading, setLoading] = useState(true);
  const [totalVendors, setTotalVendors] = useState(0);

  useEffect(() => {
    fetchAndProcessData();
  }, []);

  const fetchAndProcessData = async () => {
    try {
      const response = await fetch("/api/vendors", { cache: "no-store" });
      if (!response.ok) throw new Error("Failed to fetch vendors");

      const vendors = await response.json();
      setTotalVendors(vendors.length);
      setData(processVendorsByWeek(vendors));
    } catch (error) {
      console.error("Error loading vendor data:", error);
      setData([]);
      setTotalVendors(0);
    } finally {
      setLoading(false);
    }
  };

  const processVendorsByWeek = (vendors: any[]): WeeklyVendorData[] => {
    const weeks: WeeklyVendorData[] = [];
    const now = new Date();

    for (let i = 6; i >= 0; i--) {
      const weekStart = new Date(now);
      weekStart.setDate(now.getDate() - i * 7);
      const dayOfWeek = weekStart.getDay();
      const diffToMonday = (dayOfWeek + 6) % 7;
      weekStart.setDate(weekStart.getDate() - diffToMonday);
      weekStart.setHours(0, 0, 0, 0);

      const weekEnd = new Date(weekStart);
      weekEnd.setDate(weekStart.getDate() + 6);
      weekEnd.setHours(23, 59, 59, 999);

      const count = vendors.filter((vendor) => {
        if (!vendor.createdAt) return false;
        const createdAt = new Date(vendor.createdAt);
        return createdAt >= weekStart && createdAt <= weekEnd;
      }).length;

      weeks.push({
        week: weekStart.toISOString(),
        count,
        weekLabel: weekStart.toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
        }),
      });
    }

    return weeks;
  };

  if (loading) {
    return <VendorChartSkeleton />;
  }

  return (
    <div className="rounded-xl p-6 w-full max-w-md text-white shadow-lg border border-white/10 bg-white/5 backdrop-blur-md">
      <h3 className="text-white text-lg font-medium mb-2">Vendor Registrations</h3>
      <p className="text-gray-400 text-sm mb-6">
        {totalVendors > 0
          ? `Total vendors: ${totalVendors}. Weekly registration trends.`
          : "No vendors registered yet."}
      </p>

      <div className="h-32 mb-4">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
            <XAxis
              dataKey="weekLabel"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#9CA3AF", fontSize: 12 }}
              interval={0}
            />
            <Line
              type="monotone"
              dataKey="count"
              stroke="#ffffff"
              strokeWidth={2}
              dot={{ fill: "#ffffff", strokeWidth: 2, r: 3 }}
              activeDot={{ r: 4, stroke: "#ffffff", strokeWidth: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="flex justify-between text-xs text-gray-400">
        {data.map((item, index) => (
          <span key={index} className="text-center">
            {item.weekLabel}
          </span>
        ))}
      </div>
    </div>
  );
}
