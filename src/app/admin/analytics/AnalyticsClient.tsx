"use client";

import { useState, useEffect } from "react";
import { generateAnalyticsData, exportAnalyticsToExcel, AnalyticsData } from "@/lib/analyticsStore";

export default function AnalyticsClient() {
  const [analyticsData, setAnalyticsData] = useState<AnalyticsData | null>(null);
  const [exporting, setExporting] = useState(false);

  useEffect(() => {
    const data = generateAnalyticsData();
    setAnalyticsData(data);
  }, []);

  if (!analyticsData) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-on-surface-variant">Loading analytics...</div>
      </div>
    );
  }

  const maxRevenue = Math.max(...analyticsData.weeks.map((w) => w.salesRevenue));
  const maxVehicles = Math.max(
    ...analyticsData.weeks.map((w) => Math.max(w.vehiclesEntering, w.vehiclesExiting))
  );

  const handleExport = async () => {
    setExporting(true);
    try {
      await exportAnalyticsToExcel(analyticsData);
    } catch (error) {
      console.error("Export failed:", error);
    } finally {
      setExporting(false);
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="font-headline-lg text-headline-lg text-on-surface">Analytics & Insights</h1>
          <p className="text-on-surface-variant">Track vehicle movements and sales performance by week.</p>
        </div>
        <button
          onClick={handleExport}
          disabled={exporting}
          className="flex items-center gap-2 bg-primary text-on-primary px-6 py-3 rounded-xl font-label-bold text-label-bold hover:shadow-[0_4px_12px_rgba(0,98,157,0.3)] hover:translate-y-[-2px] transition-all active:scale-95 disabled:opacity-60"
        >
          <span className="material-symbols-outlined">download</span>
          {exporting ? "Exporting..." : "Export to Excel"}
        </button>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="glass-card p-6 rounded-xl shadow-sm border border-white/20">
          <p className="text-on-surface-variant font-label-bold text-label-bold mb-2">Total Revenue (12 weeks)</p>
          <p className="font-display-lg text-headline-lg text-primary">
            Rp {(analyticsData.totalRevenue / 1000000000).toFixed(1)}B
          </p>
        </div>
        <div className="glass-card p-6 rounded-xl shadow-sm border border-white/20">
          <p className="text-on-surface-variant font-label-bold text-label-bold mb-2">Vehicles Entering</p>
          <p className="font-display-lg text-headline-lg text-tertiary">{analyticsData.totalVehiclesIn}</p>
        </div>
        <div className="glass-card p-6 rounded-xl shadow-sm border border-white/20">
          <p className="text-on-surface-variant font-label-bold text-label-bold mb-2">Vehicles Exiting</p>
          <p className="font-display-lg text-headline-lg text-secondary">{analyticsData.totalVehiclesOut}</p>
        </div>
        <div className="glass-card p-6 rounded-xl shadow-sm border border-white/20">
          <p className="text-on-surface-variant font-label-bold text-label-bold mb-2">Net Total</p>
          <p className="font-display-lg text-headline-lg text-success">
            +{analyticsData.totalVehiclesIn - analyticsData.totalVehiclesOut}
          </p>
        </div>
      </div>

      {/* Sales Revenue Chart */}
      <div className="glass-card rounded-xl shadow-sm border border-white/20 p-6">
        <h2 className="font-headline-md text-headline-md text-on-surface mb-6 flex items-center gap-2">
          <span className="material-symbols-outlined text-primary">trending_up</span>
          Sales Revenue by Week
        </h2>
        <div className="space-y-3">
          {analyticsData.weeks.map((week, idx) => {
            const percentage = (week.salesRevenue / maxRevenue) * 100;
            return (
              <div key={idx} className="flex items-center gap-3">
                <div className="w-24 text-xs text-on-surface-variant">{week.week.split(",")[0]}</div>
                <div className="flex-1 bg-surface-container rounded-lg overflow-hidden h-8 relative">
                  <div
                    className="bg-gradient-to-r from-primary to-primary/70 h-full transition-all duration-500 flex items-center justify-end px-2"
                    style={{ width: `${percentage}%` }}
                  >
                    {percentage > 20 && (
                      <span className="text-xs font-semibold text-white">
                        Rp {(week.salesRevenue / 1000000000).toFixed(1)}B
                      </span>
                    )}
                  </div>
                  {percentage <= 20 && (
                    <span className="absolute right-2 top-1/2 -translate-y-1/2 text-xs font-semibold text-on-surface">
                      Rp {(week.salesRevenue / 1000000000).toFixed(1)}B
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Vehicles Flow Chart */}
      <div className="glass-card rounded-xl shadow-sm border border-white/20 p-6">
        <h2 className="font-headline-md text-headline-md text-on-surface mb-6 flex items-center gap-2">
          <span className="material-symbols-outlined text-secondary">compare_arrows</span>
          Vehicles In vs Out by Week
        </h2>
        <div className="space-y-4">
          {analyticsData.weeks.map((week, idx) => {
            const inPercentage = (week.vehiclesEntering / maxVehicles) * 100;
            const outPercentage = (week.vehiclesExiting / maxVehicles) * 100;
            return (
              <div key={idx} className="space-y-1">
                <div className="text-xs text-on-surface-variant mb-1">{week.week.split(",")[0]}</div>
                <div className="flex gap-2">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs text-tertiary font-semibold w-16">Entering</span>
                      <div className="flex-1 bg-surface-container rounded overflow-hidden h-6 relative">
                        <div
                          className="bg-tertiary h-full transition-all duration-500 flex items-center justify-end px-2"
                          style={{ width: `${inPercentage}%` }}
                        >
                          {inPercentage > 15 && (
                            <span className="text-xs font-semibold text-white">{week.vehiclesEntering}</span>
                          )}
                        </div>
                        {inPercentage <= 15 && (
                          <span className="absolute right-2 top-1/2 -translate-y-1/2 text-xs font-semibold text-on-surface">
                            {week.vehiclesEntering}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-secondary font-semibold w-16">Exiting</span>
                      <div className="flex-1 bg-surface-container rounded overflow-hidden h-6 relative">
                        <div
                          className="bg-secondary h-full transition-all duration-500 flex items-center justify-end px-2"
                          style={{ width: `${outPercentage}%` }}
                        >
                          {outPercentage > 15 && (
                            <span className="text-xs font-semibold text-white">{week.vehiclesExiting}</span>
                          )}
                        </div>
                        {outPercentage <= 15 && (
                          <span className="absolute right-2 top-1/2 -translate-y-1/2 text-xs font-semibold text-on-surface">
                            {week.vehiclesExiting}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Weekly Breakdown Table */}
      <div className="glass-card rounded-xl shadow-sm border border-white/20 overflow-hidden">
        <div className="p-6 border-b border-outline-variant/20">
          <h2 className="font-headline-md text-headline-md text-on-surface flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">table_chart</span>
            Weekly Breakdown
          </h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-surface-container-low border-b border-outline-variant/30">
              <tr>
                <th className="px-6 py-4 font-label-bold text-label-bold text-on-surface-variant uppercase tracking-wider">
                  Week
                </th>
                <th className="px-6 py-4 font-label-bold text-label-bold text-on-surface-variant uppercase tracking-wider text-right">
                  Entering
                </th>
                <th className="px-6 py-4 font-label-bold text-label-bold text-on-surface-variant uppercase tracking-wider text-right">
                  Exiting
                </th>
                <th className="px-6 py-4 font-label-bold text-label-bold text-on-surface-variant uppercase tracking-wider text-right">
                  Net Change
                </th>
                <th className="px-6 py-4 font-label-bold text-label-bold text-on-surface-variant uppercase tracking-wider text-right">
                  Sales
                </th>
                <th className="px-6 py-4 font-label-bold text-label-bold text-on-surface-variant uppercase tracking-wider text-right">
                  Revenue
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/20">
              {analyticsData.weeks.map((week, idx) => (
                <tr key={idx} className="hover:bg-primary-container/5 transition-colors">
                  <td className="px-6 py-4 font-label-bold text-label-bold text-on-surface">{week.week}</td>
                  <td className="px-6 py-4 text-right">
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-tertiary-container/20 text-tertiary text-sm font-semibold">
                      <span className="material-symbols-outlined text-sm">arrow_upward</span>
                      {week.vehiclesEntering}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-secondary-container/20 text-secondary text-sm font-semibold">
                      <span className="material-symbols-outlined text-sm">arrow_downward</span>
                      {week.vehiclesExiting}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <span
                      className={`font-label-bold ${
                        week.netChange > 0
                          ? "text-success"
                          : week.netChange < 0
                          ? "text-error"
                          : "text-on-surface-variant"
                      }`}
                    >
                      {week.netChange > 0 ? "+" : ""}
                      {week.netChange}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right font-label-bold text-on-surface">{week.salesCount}</td>
                  <td className="px-6 py-4 text-right font-label-bold text-primary">
                    Rp {(week.salesRevenue / 1000000000).toFixed(1)}B
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
