import { useState } from "react";

type Tab = "channels" | "tokens" | "shop" | "tasks";

const glassCard = {
  background: "rgba(255,255,255,0.07)",
  backdropFilter: "blur(24px) saturate(1.4)",
  WebkitBackdropFilter: "blur(24px) saturate(1.4)",
  border: "1px solid rgba(255,255,255,0.13)",
  boxShadow: "0 8px 32px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.18), inset 0 -1px 0 rgba(0,0,0,0.15)",
} as React.CSSProperties;

const liquidGlassBtn = {
  background: "linear-gradient(135deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.06) 50%, rgba(255,255,255,0.12) 100%)",
  backdropFilter: "blur(20px) saturate(1.6)",
  WebkitBackdropFilter: "blur(20px) saturate(1.6)",
  border: "1px solid rgba(255,255,255,0.22)",
  boxShadow: "0 4px 24px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.35), inset 0 -1px 0 rgba(0,0,0,0.12), inset 1px 0 0 rgba(255,255,255,0.2)",
  position: "relative",
  overflow: "hidden",
} as React.CSSProperties;

const liquidGlassBtnBlue = {
  background: "linear-gradient(135deg, rgba(79,142,247,0.55) 0%, rgba(45,110,245,0.3) 50%, rgba(79,142,247,0.45) 100%)",
  backdropFilter: "blur(20px) saturate(1.8)",
  WebkitBackdropFilter: "blur(20px) saturate(1.8)",
  border: "1px solid rgba(120,170,255,0.4)",
  boxShadow: "0 4px 28px rgba(79,142,247,0.35), inset 0 1px 0 rgba(180,210,255,0.5), inset 0 -1px 0 rgba(0,20,80,0.2), inset 1px 0 0 rgba(150,190,255,0.25)",
  position: "relative",
  overflow: "hidden",
} as React.CSSProperties;

const liquidGlassBtnGold = {
  background: "linear-gradient(135deg, rgba(247,201,72,0.7) 0%, rgba(245,166,35,0.45) 50%, rgba(247,201,72,0.6) 100%)",
  backdropFilter: "blur(20px) saturate(1.8)",
  WebkitBackdropFilter: "blur(20px) saturate(1.8)",
  border: "1px solid rgba(255,220,100,0.5)",
  boxShadow: "0 4px 24px rgba(247,201,72,0.3), inset 0 1px 0 rgba(255,240,160,0.6), inset 0 -1px 0 rgba(100,60,0,0.2)",
  position: "relative",
  overflow: "hidden",
} as React.CSSProperties;

function GlassShine() {
  return (
    <span
      style={{
        position: "absolute",
        top: 0, left: "-60%",
        width: "50%", height: "100%",
        background: "linear-gradient(105deg, transparent 20%, rgba(255,255,255,0.28) 50%, transparent 80%)",
        transform: "skewX(-20deg)",
        pointerEvents: "none",
      }}
    />
  );
}

export function ImprovedProfile() {
  const [activeTab, setActiveTab] = useState<Tab>("channels");
  const [shopTab, setShopTab] = useState("bonuses");
  const [tokenTab, setTokenTab] = useState("activity");

  return (
    <div
      style={{
        position: "relative",
        width: 390,
        minHeight: "100vh",
        overflow: "hidden",
        fontFamily: "'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif",
        color: "#fff",
        margin: "0 auto",
      }}
    >
      {/* Video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: "fixed",
          top: 0, left: "50%",
          transform: "translateX(-50%)",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
          filter: "blur(18px) brightness(0.55) saturate(1.3)",
          transform: "translateX(-50%) scale(1.12)",
        }}
      >
        <source src="https://cdn.coverr.co/videos/coverr-abstract-blue-particles-1613/1080p.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div style={{
        position: "fixed",
        inset: 0,
        background: "linear-gradient(160deg, rgba(10,20,50,0.55) 0%, rgba(5,12,30,0.65) 100%)",
        zIndex: 1,
      }} />

      {/* Content */}
      <div style={{ position: "relative", zIndex: 2, display: "flex", flexDirection: "column", minHeight: "100vh" }}>

        {/* Status Bar */}
        <div className="flex items-center justify-between px-5 pt-3 pb-1" style={{ fontSize: 13, fontWeight: 600 }}>
          <span>14:34</span>
          <div style={{ background: "rgba(255,255,255,0.85)", borderRadius: 4, padding: "2px 6px", color: "#0a1020", fontSize: 11, fontWeight: 700 }}>51%</div>
        </div>

        {/* Nav Bar */}
        <div className="flex items-center justify-between px-4 py-2">
          <button
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm"
            style={{ ...liquidGlassBtn, color: "rgba(255,255,255,0.85)" }}
          >
            <GlassShine />
            <svg width="7" height="12" viewBox="0 0 7 12" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 1L1 6l5 5"/>
            </svg>
            Назад
          </button>
          <div className="flex items-center gap-2">
            {[
              <svg key="v" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><polyline points="6 9 12 15 18 9"/></svg>,
              <svg key="d" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>,
            ].map((icon, i) => (
              <button key={i} className="w-8 h-8 rounded-full flex items-center justify-center" style={liquidGlassBtn}>
                <GlassShine />
                {icon}
              </button>
            ))}
          </div>
        </div>

        {/* Header Card */}
        <div className="mx-4 mb-3 rounded-3xl p-4" style={glassCard}>
          {/* Top row: logo + balance */}
          <div className="flex items-start justify-between mb-3">
            <div className="w-11 h-11 rounded-2xl flex items-center justify-center" style={{
              background: "linear-gradient(135deg, rgba(79,142,247,0.7), rgba(45,110,245,0.5))",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(120,170,255,0.4)",
              boxShadow: "inset 0 1px 0 rgba(180,210,255,0.4), 0 4px 16px rgba(79,142,247,0.3)",
            }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill="white" stroke="rgba(255,255,255,0.6)" strokeWidth="0.5"/>
              </svg>
            </div>

            <div className="flex items-center gap-2">
              <div className="text-right">
                <div style={{ fontSize: 10, color: "rgba(255,255,255,0.45)", letterSpacing: 0.3 }}>Баланс TRND</div>
                <div style={{ fontSize: 26, fontWeight: 900, lineHeight: 1, background: "linear-gradient(135deg, #ffe566, #f5a623)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>40</div>
              </div>
              <button className="w-8 h-8 rounded-xl flex items-center justify-center" style={liquidGlassBtn}>
                <GlassShine />
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="2">
                  <circle cx="12" cy="12" r="3"/><path d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72 1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
                </svg>
              </button>
            </div>
          </div>

          {/* User info row */}
          <div className="flex items-end justify-between">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span style={{ fontSize: 20, fontWeight: 800, letterSpacing: -0.3 }}>Миша Зевс</span>
                <span
                  className="flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold"
                  style={{
                    background: "linear-gradient(135deg, rgba(212,175,55,0.3), rgba(192,140,30,0.15))",
                    color: "#f0c96a",
                    border: "1px solid rgba(240,201,106,0.35)",
                    backdropFilter: "blur(8px)",
                    boxShadow: "inset 0 1px 0 rgba(255,230,120,0.25)",
                  }}
                >
                  🥈 SILVER
                </span>
              </div>
              <div style={{ fontSize: 13, color: "rgba(255,255,255,0.45)" }}>@misha_zeus</div>
              <div className="flex items-center gap-1 mt-1" style={{ fontSize: 11, color: "rgba(255,255,255,0.35)" }}>
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
                с 10 июня 2026 г.
              </div>
            </div>
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center text-lg font-bold"
              style={{
                background: "linear-gradient(135deg, rgba(79,142,247,0.4), rgba(30,60,140,0.3))",
                border: "2px solid rgba(100,160,255,0.45)",
                boxShadow: "0 0 20px rgba(79,142,247,0.2), inset 0 1px 0 rgba(180,210,255,0.3)",
                color: "#a8d0ff",
                backdropFilter: "blur(12px)",
              }}
            >
              МЗ
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="mx-4 mb-3 p-1 rounded-2xl flex gap-0.5" style={{
          background: "rgba(0,0,0,0.25)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(255,255,255,0.1)",
          boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06)",
        }}>
          {([
            { id: "channels", label: "Каналы", icon: "📡" },
            { id: "tokens",   label: "Токены",  icon: "🪙" },
            { id: "shop",     label: "Магазин", icon: "🛍" },
            { id: "tasks",    label: "Задания", icon: "✅" },
          ] as const).map((tab) => {
            const active = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="flex-1 flex flex-col items-center gap-0.5 py-2 rounded-xl transition-all duration-200"
                style={active ? {
                  background: "linear-gradient(135deg, rgba(79,142,247,0.38), rgba(45,110,245,0.2))",
                  backdropFilter: "blur(16px)",
                  WebkitBackdropFilter: "blur(16px)",
                  color: "#7ec0ff",
                  border: "1px solid rgba(100,170,255,0.32)",
                  boxShadow: "inset 0 1px 0 rgba(180,220,255,0.3), 0 2px 12px rgba(79,142,247,0.2)",
                  fontSize: 11,
                  fontWeight: 600,
                  position: "relative",
                  overflow: "hidden",
                } : {
                  background: "transparent",
                  color: "rgba(255,255,255,0.38)",
                  border: "1px solid transparent",
                  fontSize: 11,
                  fontWeight: 400,
                }}
              >
                {active && <GlassShine />}
                <span style={{ fontSize: 16 }}>{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Content */}
        <div className="flex-1 mx-4 pb-6 overflow-y-auto" style={{ maxHeight: "calc(100vh - 310px)" }}>

          {/* ── CHANNELS ── */}
          {activeTab === "channels" && (
            <div>
              <div className="flex gap-3 mb-4">
                {[
                  { label: "Мой канал", initials: "МО", active: true },
                  { label: "Ещё канал", initials: "+", active: false },
                ].map((ch) => (
                  <div key={ch.label} className="flex flex-col items-center gap-1.5">
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center text-sm font-bold"
                      style={ch.active ? {
                        background: "linear-gradient(135deg, rgba(79,142,247,0.6), rgba(45,110,245,0.4))",
                        border: "2px solid rgba(120,170,255,0.5)",
                        boxShadow: "0 0 18px rgba(79,142,247,0.3), inset 0 1px 0 rgba(180,210,255,0.4)",
                        color: "#fff",
                        backdropFilter: "blur(12px)",
                      } : {
                        background: "rgba(255,255,255,0.05)",
                        border: "2px dashed rgba(255,255,255,0.18)",
                        color: "rgba(255,255,255,0.4)",
                        backdropFilter: "blur(8px)",
                      }}
                    >
                      {ch.initials === "+" ? (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M5 12h14"/></svg>
                      ) : ch.initials}
                    </div>
                    <span style={{ fontSize: 10, color: "rgba(255,255,255,0.45)" }}>{ch.label}</span>
                  </div>
                ))}
              </div>

              {/* Channel card */}
              <div className="rounded-3xl p-4 mb-4" style={glassCard}>
                <div className="flex items-center justify-between mb-3">
                  <span style={{ fontSize: 16, fontWeight: 700 }}>Мой канал</span>
                  <span
                    className="flex items-center gap-1 text-xs px-2.5 py-1 rounded-full font-semibold"
                    style={{
                      background: "linear-gradient(135deg, rgba(52,199,89,0.3), rgba(30,160,60,0.15))",
                      color: "#4ddb7a",
                      border: "1px solid rgba(52,199,89,0.35)",
                      backdropFilter: "blur(8px)",
                      boxShadow: "inset 0 1px 0 rgba(100,255,140,0.2)",
                    }}
                  >
                    ✓ Одобрен
                  </span>
                </div>

                {/* Action buttons */}
                <div className="flex gap-2 mb-4">
                  <button
                    className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-2xl text-sm font-semibold"
                    style={{ ...liquidGlassBtnBlue, color: "#a8d8ff" }}
                  >
                    <GlassShine />
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                    Trends
                  </button>
                  <button
                    className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-2xl text-sm font-medium"
                    style={{ ...liquidGlassBtn, color: "rgba(255,255,255,0.7)" }}
                  >
                    <GlassShine />
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
                    Редактировать
                  </button>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-5 gap-1.5 mb-4">
                  {[
                    { label: "Видео", val: "0" },
                    { label: "Просм.", val: "0" },
                    { label: "Лайки", val: "0" },
                    { label: "Перех.", val: "0" },
                    { label: "Подп.", val: "0" },
                  ].map((s) => (
                    <div
                      key={s.label}
                      className="flex flex-col items-center py-2.5 rounded-2xl"
                      style={{
                        background: "rgba(255,255,255,0.06)",
                        backdropFilter: "blur(10px)",
                        border: "1px solid rgba(255,255,255,0.1)",
                        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.1)",
                      }}
                    >
                      <span style={{ fontSize: 16, fontWeight: 800 }}>{s.val}</span>
                      <span style={{ fontSize: 9, color: "rgba(255,255,255,0.38)", textAlign: "center", lineHeight: 1.2 }}>{s.label}</span>
                    </div>
                  ))}
                </div>

                {/* Rewards */}
                <div
                  className="flex items-center justify-between p-3.5 rounded-2xl mb-3"
                  style={{
                    background: "linear-gradient(135deg, rgba(247,201,72,0.1), rgba(245,166,35,0.06))",
                    backdropFilter: "blur(12px)",
                    border: "1px solid rgba(247,201,72,0.2)",
                    boxShadow: "inset 0 1px 0 rgba(255,230,100,0.12)",
                  }}
                >
                  <div>
                    <div style={{ fontSize: 9, color: "rgba(255,255,255,0.4)", letterSpacing: 0.8, marginBottom: 2 }}>НАГРАДЫ ПОДПИСЧИКАМ</div>
                    <div style={{ fontSize: 20, fontWeight: 900, background: "linear-gradient(90deg, #ffe566, #f5a623)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                      0 <span style={{ fontSize: 12, fontWeight: 600 }}>TRND</span>
                    </div>
                    <div style={{ fontSize: 10, color: "rgba(255,255,255,0.28)" }}>Пополни баланс</div>
                  </div>
                  <button
                    className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-sm font-semibold"
                    style={{ ...liquidGlassBtnGold, color: "#2a1800" }}
                  >
                    <GlassShine />
                    ⭐ Пополнить
                  </button>
                </div>

                <div
                  className="p-3 rounded-2xl"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    fontSize: 11,
                    color: "rgba(255,255,255,0.38)",
                    lineHeight: 1.6,
                    backdropFilter: "blur(8px)",
                  }}
                >
                  💡 Купи Stars → они станут TRND → выбери видео → установи награду
                </div>
              </div>

              {/* Add video button */}
              <button
                className="w-full py-3.5 rounded-2xl font-semibold text-sm flex items-center justify-center gap-2 mb-3"
                style={{ ...liquidGlassBtnBlue, color: "#d0eaff", boxShadow: "0 6px 28px rgba(79,142,247,0.4), inset 0 1px 0 rgba(180,220,255,0.5), inset 0 -1px 0 rgba(0,20,80,0.2)" }}
              >
                <GlassShine />
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 5v14M5 12h14"/></svg>
                Добавить видео в ленту
              </button>

              {/* Published / In review */}
              <div className="flex gap-2">
                {[
                  { label: "Опубликовано", active: true },
                  { label: "На проверке", active: false },
                ].map((t) => (
                  <button
                    key={t.label}
                    className="flex-1 py-2.5 rounded-xl text-sm font-medium"
                    style={t.active ? { ...liquidGlassBtn, color: "#fff", fontWeight: 600 } : {
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      color: "rgba(255,255,255,0.38)",
                    }}
                  >
                    {t.active && <GlassShine />}
                    {t.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* ── TOKENS ── */}
          {activeTab === "tokens" && (
            <div>
              <div className="text-center mb-5">
                <div className="flex items-center justify-center gap-3 mb-1">
                  <span style={{ fontSize: 56, fontWeight: 900, background: "linear-gradient(135deg, #ffe566, #f5a623)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", filter: "drop-shadow(0 0 20px rgba(247,201,72,0.4))" }}>40</span>
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-base font-bold"
                    style={{ ...liquidGlassBtnGold, color: "#2a1800", boxShadow: "0 4px 20px rgba(247,201,72,0.35), inset 0 1px 0 rgba(255,240,150,0.6)" }}
                  >
                    <GlassShine />T
                  </div>
                </div>
                <div style={{ fontSize: 14, color: "rgba(255,255,255,0.55)", marginBottom: 6 }}>TRND</div>
                <div style={{ fontSize: 12, color: "rgba(255,255,255,0.35)", maxWidth: 260, margin: "0 auto", lineHeight: 1.6 }}>
                  Trends начисляет TRND за просмотры, стрики и приглашения друзей
                </div>
              </div>

              <div className="rounded-3xl p-4 mb-4" style={glassCard}>
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <div style={{ fontSize: 15, fontWeight: 700 }}>Пригласить друга</div>
                    <div style={{ fontSize: 12, color: "#7ec0ff" }}>+13 000 T вам и другу</div>
                  </div>
                  <div
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl"
                    style={{ ...liquidGlassBtnBlue, color: "#a8d8ff" }}
                  >
                    <GlassShine />
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                    <span style={{ fontSize: 14, fontWeight: 700 }}>0</span>
                  </div>
                </div>

                <div
                  className="flex items-center gap-2 mb-3 px-3 py-2.5 rounded-2xl"
                  style={{
                    background: "rgba(0,0,0,0.2)",
                    backdropFilter: "blur(12px)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <span style={{ fontSize: 11, color: "rgba(255,255,255,0.38)", flex: 1, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                    t.me/ContentifyAI_Bot?startapp=ref_288…
                  </span>
                  {[
                    <svg key="c" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#7ec0ff" strokeWidth="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>,
                    <svg key="s" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#7ec0ff" strokeWidth="2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>,
                  ].map((icon, i) => (
                    <button key={i} className="p-1.5 rounded-lg" style={{ ...liquidGlassBtnBlue }}><GlassShine />{icon}</button>
                  ))}
                </div>

                <button className="w-full py-3 rounded-2xl text-sm font-semibold" style={{ ...liquidGlassBtnBlue, color: "#d0eaff", boxShadow: "0 6px 24px rgba(79,142,247,0.35), inset 0 1px 0 rgba(180,220,255,0.5)" }}>
                  <GlassShine />
                  Поделиться ссылкой
                </button>
              </div>

              <div className="flex gap-2 mb-4">
                {[
                  { id: "activity", label: "Активность" },
                  { id: "friends",  label: "Друзья" },
                  { id: "badges",   label: "Бейджи" },
                ].map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setTokenTab(t.id)}
                    className="flex-1 py-2 rounded-xl text-sm font-medium"
                    style={tokenTab === t.id ? { ...liquidGlassBtn, color: "#fff", fontWeight: 600 } : {
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      color: "rgba(255,255,255,0.38)",
                    }}
                  >
                    {tokenTab === t.id && <GlassShine />}
                    {t.label}
                  </button>
                ))}
              </div>

              {tokenTab === "activity" && (
                <div>
                  <div style={{ fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.3)", letterSpacing: 1, marginBottom: 10 }}>КАК ЗАРАБАТЫВАТЬ</div>
                  {[
                    { icon: "👁", label: "Просмотр видео", sub: "25–100 Coins / видео, до 100/день", reward: "25–100 С" },
                    { icon: "🔥", label: "Ежедневный чекин", sub: "50–500 Coins, 30-дневный цикл", reward: "50–500 С" },
                    { icon: "👥", label: "Приглашение друга", sub: "13000 Coins за каждого друга", reward: "13 000 С" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center justify-between p-3.5 rounded-2xl mb-2" style={glassCard}>
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl flex items-center justify-center text-lg" style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)" }}>{item.icon}</div>
                        <div>
                          <div style={{ fontSize: 13, fontWeight: 600 }}>{item.label}</div>
                          <div style={{ fontSize: 11, color: "rgba(255,255,255,0.38)" }}>{item.sub}</div>
                        </div>
                      </div>
                      <span style={{ fontSize: 13, fontWeight: 800, background: "linear-gradient(135deg, #ffe566, #f5a623)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{item.reward}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* ── SHOP ── */}
          {activeTab === "shop" && (
            <div>
              <div className="flex gap-2 mb-4 overflow-x-auto pb-1">
                {["Бонусы", "Партнеры", "Розыгрыш", "Boost"].map((t) => (
                  <button
                    key={t}
                    onClick={() => setShopTab(t.toLowerCase())}
                    className="flex-shrink-0 px-4 py-2 rounded-xl text-sm font-medium"
                    style={shopTab === t.toLowerCase() ? { ...liquidGlassBtn, color: "#fff", fontWeight: 600, whiteSpace: "nowrap" } : {
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      color: "rgba(255,255,255,0.38)",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {shopTab === t.toLowerCase() && <GlassShine />}
                    {t}
                  </button>
                ))}
              </div>
              <div className="rounded-3xl p-6 text-center" style={glassCard}>
                <div className="text-4xl mb-3">🛍</div>
                <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 6 }}>Офферы загружаются</div>
                <div style={{ fontSize: 12, color: "rgba(255,255,255,0.38)", lineHeight: 1.7 }}>
                  Скоро здесь появятся подписки, сервисы и гифт-карты от партнёров — обменивай токены на выгоду
                </div>
              </div>
            </div>
          )}

          {/* ── TASKS ── */}
          {activeTab === "tasks" && (
            <div>
              <div style={{ fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.3)", letterSpacing: 1, marginBottom: 10 }}>КВЕСТЫ ДНЯ · 10 ИЮНЯ</div>

              <div className="flex items-center justify-between p-4 rounded-3xl mb-4" style={glassCard}>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 700 }}>Бонус за все 4 квеста</div>
                  <div style={{ fontSize: 12, color: "rgba(255,255,255,0.38)" }}>Выполнено 0/4</div>
                </div>
                <span
                  className="px-3 py-1.5 rounded-xl text-sm font-bold"
                  style={{
                    background: "linear-gradient(135deg, rgba(247,201,72,0.25), rgba(245,166,35,0.12))",
                    color: "#f7c948",
                    border: "1px solid rgba(247,201,72,0.3)",
                    backdropFilter: "blur(8px)",
                    boxShadow: "inset 0 1px 0 rgba(255,230,100,0.2)",
                  }}
                >
                  +150 TRND
                </span>
              </div>

              {[
                { label: "Посмотри 20 видео",        sub: "Любых видео в ленте",   reward: "+30", progress: 20, total: 20, done: true },
                { label: "Зацени 3 разные категории", sub: "Расширь интересы",     reward: "+30", progress: 0,  total: 3,  done: false },
                { label: "Посмотри 50 видео",         sub: "Залипни на ленте",     reward: "+60", progress: 46, total: 50, done: false },
              ].map((q) => (
                <div
                  key={q.label}
                  className="rounded-3xl p-4 mb-3"
                  style={{
                    ...glassCard,
                    border: q.done ? "1px solid rgba(247,201,72,0.22)" : "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 700 }}>{q.label}</div>
                      <div style={{ fontSize: 12, color: "rgba(255,255,255,0.4)" }}>{q.sub}</div>
                    </div>
                    <div className="text-right">
                      <div style={{ fontSize: 15, fontWeight: 800, background: "linear-gradient(135deg, #ffe566, #f5a623)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{q.reward}</div>
                      <div style={{ fontSize: 9, color: "rgba(255,255,255,0.35)" }}>TRND</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-2">
                    <span style={{ fontSize: 11, color: "rgba(255,255,255,0.35)" }}>Прогресс</span>
                    <span style={{ fontSize: 11, color: "rgba(255,255,255,0.55)", fontWeight: 600 }}>{q.progress} / {q.total}</span>
                  </div>

                  <div className="w-full h-2 rounded-full mb-3 overflow-hidden" style={{ background: "rgba(255,255,255,0.08)" }}>
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${(q.progress / q.total) * 100}%`,
                        background: q.done
                          ? "linear-gradient(90deg, #ffe566, #f5a623)"
                          : "linear-gradient(90deg, #4f8ef7, #2d6ef5)",
                        boxShadow: q.done ? "0 0 8px rgba(247,201,72,0.5)" : "0 0 8px rgba(79,142,247,0.4)",
                      }}
                    />
                  </div>

                  {q.done ? (
                    <button className="w-full py-2.5 rounded-2xl text-sm font-semibold" style={{ ...liquidGlassBtnGold, color: "#2a1800", boxShadow: "0 4px 20px rgba(247,201,72,0.35), inset 0 1px 0 rgba(255,240,150,0.6)" }}>
                      <GlassShine />
                      Получить награду
                    </button>
                  ) : (
                    <div className="w-full py-2.5 rounded-2xl text-sm font-medium text-center" style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.07)",
                      color: "rgba(255,255,255,0.25)",
                    }}>
                      Прогресс...
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
