"use client";

import { useState } from "react";

// Seeded pseudo-random number generator for consistent SSR/client hydration
function seededRandom(seed: number) {
  let s = seed;
  return function () {
    s = (s * 1664525 + 1013904223) & 0xffffffff;
    return (s >>> 0) / 0xffffffff;
  };
}

function generateChartData(points: number, baseValue: number, volatility: number, seed: number) {
  const rand = seededRandom(seed);
  const data = [];
  let value = baseValue;
  for (let i = 0; i < points; i++) {
    value += (rand() - 0.5) * volatility;
    value = Math.max(value, baseValue * 0.7);
    data.push(Math.round(value * 100) / 100);
  }
  return data;
}

const priceData = generateChartData(50, 48000, 800, 42);
const portfolioData = generateChartData(30, 100000, 2000, 137);

function MiniChart({
  data,
  color,
  height = 60,
}: {
  data: number[];
  color: string;
  height?: number;
}) {
  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;
  const width = 200;

  const points = data
    .map((val, i) => {
      const x = (i / (data.length - 1)) * width;
      const y = height - ((val - min) / range) * height;
      return `${x},${y}`;
    })
    .join(" ");

  const areaPoints = `0,${height} ${points} ${width},${height}`;

  return (
    <svg width={width} height={height} className="w-full" viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="none">
      <defs>
        <linearGradient id={`grad-${color.replace("#", "")}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.3" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <polygon
        points={areaPoints}
        fill={`url(#grad-${color.replace("#", "")})`}
      />
      <polyline
        points={points}
        fill="none"
        stroke={color}
        strokeWidth="2"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

const trades = [
  { pair: "BTC/USDT", side: "LONG", entry: "47,230", current: "48,910", pnl: "+3.6%", status: "open" },
  { pair: "ETH/USDT", side: "LONG", entry: "2,890", current: "3,120", pnl: "+7.9%", status: "open" },
  { pair: "SOL/USDT", side: "SHORT", entry: "102.4", current: "98.2", pnl: "+4.1%", status: "closed" },
  { pair: "AAPL", side: "LONG", entry: "182.50", current: "189.20", pnl: "+3.7%", status: "open" },
];

const metrics = [
  { label: "Total Portfolio", value: "$127,840", change: "+12.4%", positive: true, icon: "💼" },
  { label: "Today's P&L", value: "+$3,240", change: "+2.6%", positive: true, icon: "📊" },
  { label: "Win Rate", value: "73.2%", change: "+1.8%", positive: true, icon: "🎯" },
  { label: "Sharpe Ratio", value: "2.41", change: "-0.03", positive: false, icon: "⚡" },
];

export default function TradingDashboard() {
  const [activeTab, setActiveTab] = useState<"portfolio" | "positions" | "signals">("portfolio");

  return (
    <section id="trading" className="py-24 px-6 relative" style={{ background: "#050505" }}>
      <div
        className="absolute bottom-0 right-0 w-96 h-96 rounded-full opacity-5 blur-3xl"
        style={{ background: "radial-gradient(circle, #00ff88, transparent)" }}
      />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-green-400 text-sm font-semibold uppercase tracking-wider mb-4">
            Showcase Project
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Trading <span className="gradient-text">Dashboard</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Algorithmic trading platform with real-time market data, ML signals, and portfolio analytics
          </p>
        </div>

        <div className="glass rounded-2xl border border-white/10 overflow-hidden">
          <div className="flex items-center justify-between p-4 border-b border-white/5 bg-white/2">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-green-500/60" />
              </div>
              <span className="text-gray-400 text-sm font-mono">TradeSphere v2.4.1</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-green-400 text-xs font-mono">LIVE</span>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border-b border-white/5">
            {metrics.map((metric, i) => (
              <div
                key={metric.label}
                className={`p-5 ${i < metrics.length - 1 ? "border-r border-white/5" : ""}`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg">{metric.icon}</span>
                  <span className="text-gray-500 text-xs">{metric.label}</span>
                </div>
                <div className="text-white font-bold text-xl">{metric.value}</div>
                <div
                  className={`text-xs mt-1 font-semibold ${
                    metric.positive ? "text-green-400" : "text-red-400"
                  }`}
                >
                  {metric.change} 24h
                </div>
              </div>
            ))}
          </div>

          <div className="flex border-b border-white/5">
            {(["portfolio", "positions", "signals"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 text-sm font-medium capitalize transition-colors ${
                  activeTab === tab
                    ? "text-blue-400 border-b-2 border-blue-400"
                    : "text-gray-500 hover:text-gray-300"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="p-6">
            {activeTab === "portfolio" && (
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-white font-semibold">Portfolio Value</h3>
                    <span className="text-green-400 text-sm font-semibold">+$14,200 MTD</span>
                  </div>
                  <div className="h-32">
                    <MiniChart data={portfolioData} color="#0070f3" height={120} />
                  </div>
                  <div className="mt-2 flex justify-between text-xs text-gray-500">
                    <span>30d ago</span>
                    <span>Today</span>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-white font-semibold">BTC/USDT Price</h3>
                    <span className="text-green-400 text-sm font-semibold">$48,910</span>
                  </div>
                  <div className="h-32">
                    <MiniChart data={priceData} color="#00ff88" height={120} />
                  </div>
                  <div className="mt-2 flex justify-between text-xs text-gray-500">
                    <span>50 periods</span>
                    <span>Live</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "positions" && (
              <div>
                <table className="w-full">
                  <thead>
                    <tr className="text-gray-500 text-xs uppercase">
                      <th className="text-left pb-3">Pair</th>
                      <th className="text-left pb-3">Side</th>
                      <th className="text-right pb-3">Entry</th>
                      <th className="text-right pb-3">Current</th>
                      <th className="text-right pb-3">P&L</th>
                      <th className="text-right pb-3">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {trades.map((trade) => (
                      <tr key={trade.pair} className="text-sm">
                        <td className="py-3 text-white font-mono font-semibold">{trade.pair}</td>
                        <td className="py-3">
                          <span
                            className={`px-2 py-0.5 rounded text-xs font-bold ${
                              trade.side === "LONG"
                                ? "bg-green-500/20 text-green-400"
                                : "bg-red-500/20 text-red-400"
                            }`}
                          >
                            {trade.side}
                          </span>
                        </td>
                        <td className="py-3 text-right text-gray-400 font-mono">{trade.entry}</td>
                        <td className="py-3 text-right text-white font-mono">{trade.current}</td>
                        <td className="py-3 text-right text-green-400 font-mono font-semibold">
                          {trade.pnl}
                        </td>
                        <td className="py-3 text-right">
                          <span
                            className={`px-2 py-0.5 rounded-full text-xs ${
                              trade.status === "open"
                                ? "bg-blue-500/20 text-blue-400"
                                : "bg-gray-500/20 text-gray-400"
                            }`}
                          >
                            {trade.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {activeTab === "signals" && (
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { asset: "BTC/USDT", signal: "BUY", confidence: 87, strategy: "MACD + RSI Confluence", timeframe: "4H" },
                  { asset: "ETH/USDT", signal: "HOLD", confidence: 62, strategy: "Bollinger Band Squeeze", timeframe: "1D" },
                  { asset: "SPY", signal: "BUY", confidence: 79, strategy: "Mean Reversion + ML", timeframe: "1D" },
                  { asset: "NVDA", signal: "SELL", confidence: 71, strategy: "Momentum Divergence", timeframe: "4H" },
                ].map((sig) => (
                  <div
                    key={sig.asset}
                    className="glass rounded-xl p-4 border border-white/5"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <div className="font-mono font-bold text-white">{sig.asset}</div>
                        <div className="text-gray-500 text-xs">{sig.timeframe} · {sig.strategy}</div>
                      </div>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-bold ${
                          sig.signal === "BUY"
                            ? "bg-green-500/20 text-green-400"
                            : sig.signal === "SELL"
                            ? "bg-red-500/20 text-red-400"
                            : "bg-yellow-500/20 text-yellow-400"
                        }`}
                      >
                        {sig.signal}
                      </span>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-gray-500">Confidence</span>
                        <span className="text-white">{sig.confidence}%</span>
                      </div>
                      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full"
                          style={{
                            width: `${sig.confidence}%`,
                            background:
                              sig.signal === "BUY"
                                ? "linear-gradient(90deg, #00ff88, #00ff8866)"
                                : sig.signal === "SELL"
                                ? "linear-gradient(90deg, #ff4444, #ff444466)"
                                : "linear-gradient(90deg, #ffd700, #ffd70066)",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-3 justify-center">
          {["Python", "FastAPI", "WebSockets", "PostgreSQL", "Redis", "TensorFlow", "Next.js", "Recharts"].map(
            (tech) => (
              <span
                key={tech}
                className="glass text-xs px-3 py-1.5 rounded-full text-gray-400 border border-white/5"
              >
                {tech}
              </span>
            )
          )}
        </div>
      </div>
    </section>
  );
}
