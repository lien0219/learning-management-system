"use client";

import { OverviewMetrics } from "@/components/analytics/overview-metrics";
import { PerformanceCharts } from "@/components/analytics/performance-charts";
import { ActionableInsights } from "@/components/analytics/actionable-insights";
// import { useTheme } from "../../hooks/use-theme";

export default function AnalyticsPage() {
  // const { theme } = useTheme();

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Learning Analytics Dashboard
          </h1>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Overview Metrics</h2>
          <OverviewMetrics />
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">
            Performance Visualizations
          </h2>
          <PerformanceCharts />
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Actionable Insights</h2>
          <ActionableInsights />
        </div>
      </main>

      <footer className="border-t bg-background mt-12">
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <span>Resources</span>
              <span>Company</span>
              <span>Support</span>
            </div>
            {/* <div className="flex items-center space-x-4">
              <span className="text-sm text-muted-foreground">Made with</span>
              <div className="flex items-center space-x-1">
                <span className="text-sm font-medium text-blue-600">Voly</span>
              </div>
            </div> */}
          </div>
        </div>
      </footer>
    </div>
  );
}
