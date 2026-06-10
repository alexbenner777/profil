import { useState } from "react";

const DOMAIN = "32f92436-ce28-4c74-9a64-b9c22d332497-00-13flr7ttg4rxs.spock.replit.dev";

type Tab = "channels" | "tokens" | "shop" | "tasks";

export function ImprovedProfile() {
  const [activeTab, setActiveTab] = useState<Tab>("channels");
  const [shopTab, setShopTab] = useState("bonuses");
  const [tokenTab, setTokenTab] = useState("activity");

  return (
    <div
      className="flex flex-col min-h-screen overflow-hidden"
      style={{
        background: "linear-gradient(160deg, #1a2340 0%, #0f1827 50%, #0a1020 100%)",
        fontFamily: "'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif",
        color: "#fff",
        maxWidth: 390,
        margin: "0 auto",
        position: "relative",
      }}
    >
      {/* Status Bar */}
      <div className="flex items-center justify-between px-5 pt-3 pb-1" style={{ fontSize: 13, fontWeight: 600 }}>
        <span>14:34</span>
        <div className="flex items-center gap-1">
          <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
            <path d="M0 12h2V7H0v5zm3 0h2V5H3v7zm3 0h2V3H6v9zm3 0h2V1H9v11zm3 0h2V0h-2v12z" fill="white"/>
          </svg>
          <svg width="15" height="12" viewBox="0 0 15 12" fill="none">
            <path fillRule="evenodd" d="M7.5 2.4C5.04 2.4 2.82 3.42 1.22 5.1L0 3.88C1.94 1.88 4.58.72 7.5.72s5.56 1.16 7.5 3.16L13.78 5.1C12.18 3.42 9.96 2.4 7.5 2.4zm0 3.12c-1.62 0-3.08.66-4.14 1.72L2.1 6.04C3.5 4.64 5.4 3.78 7.5 3.78s3.99.86 5.4 2.26l-1.26 1.2C10.58 6.18 9.12 5.52 7.5 5.52zm0 3.12c-.9 0-1.72.36-2.32.94L7.5 12l2.32-2.42c-.6-.58-1.42-.94-2.32-.94z" fill="white"/>
          </svg>
          <div style={{ background: "#fff", borderRadius: 3, padding: "2px 5px", color: "#1a2340", fontSize: 11, fontWeight: 700 }}>51</div>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="flex items-center justify-between px-4 py-2">
        <button className="flex items-center gap-1 text-white/70 text-sm">
          <svg width="7" height="12" viewBox="0 0 7 12" fill="currentColor">
            <path d="M6 1L1 6l5 5"/>
          </svg>
          <span>Назад</span>
        </button>
        <div className="flex items-center gap-3">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" opacity="0.7">
            <polyline points="6 9 12 15 18 9"/>
          </svg>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" opacity="0.7">
            <circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/>
          </svg>
        </div>
      </div>

      {/* Header Card */}
      <div className="mx-4 mb-4 rounded-2xl p-4" style={{ background: "rgba(255,255,255,0.07)", backdropFilter: "blur(20px)", border: "1px solid rgba(255,255,255,0.1)" }}>
        <div className="flex items-start justify-between mb-3">
          {/* Logo */}
          <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ background: "linear-gradient(135deg, #4f8ef7, #2d6ef5)" }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L8 8H2l5 4-2 7 7-5 7 5-2-7 5-4h-6L12 2z" fill="white"/>
            </svg>
          </div>

          {/* Balance */}
          <div className="flex items-center gap-2">
            <div className="text-right">
              <div style={{ fontSize: 10, color: "rgba(255,255,255,0.5)" }}>Баланс TRND</div>
              <div style={{ fontSize: 22, fontWeight: 800, background: "linear-gradient(90deg, #f7c948, #f5a623)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>40</div>
            </div>
            <button className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "rgba(255,255,255,0.1)" }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <circle cx="12" cy="12" r="3"/><path d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72 1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
              </svg>
            </button>
          </div>
        </div>

        {/* User Info */}
        <div className="flex items-end justify-between">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span style={{ fontSize: 20, fontWeight: 700 }}>Миша Зевс</span>
              <span className="flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold" style={{ background: "rgba(192,160,98,0.25)", color: "#f0c96a", border: "1px solid rgba(240,201,106,0.35)" }}>
                🥈 SILVER
              </span>
            </div>
            <div style={{ fontSize: 13, color: "rgba(255,255,255,0.5)" }}>@misha_zeus</div>
            <div className="flex items-center gap-1 mt-1" style={{ fontSize: 12, color: "rgba(255,255,255,0.4)" }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
              с 10 июня 2026 г.
            </div>
          </div>
          {/* Avatar */}
          <div className="w-14 h-14 rounded-full overflow-hidden" style={{ border: "2px solid rgba(79,142,247,0.6)", background: "linear-gradient(135deg, #2d3f6b, #1a2340)" }}>
            <div className="w-full h-full flex items-center justify-center text-2xl font-bold" style={{ color: "#4f8ef7" }}>МЗ</div>
          </div>
        </div>
      </div>

      {/* Tab Navigation - Improved pill style */}
      <div className="mx-4 mb-4 p-1 rounded-2xl flex" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)" }}>
        {([
          { id: "channels", label: "Каналы", icon: "📡" },
          { id: "tokens", label: "Токены", icon: "🪙" },
          { id: "shop", label: "Магазин", icon: "🛍" },
          { id: "tasks", label: "Задания", icon: "✅" },
        ] as const).map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className="flex-1 flex flex-col items-center gap-0.5 py-2 rounded-xl transition-all duration-200"
            style={{
              background: activeTab === tab.id ? "rgba(79,142,247,0.2)" : "transparent",
              color: activeTab === tab.id ? "#4f8ef7" : "rgba(255,255,255,0.45)",
              border: activeTab === tab.id ? "1px solid rgba(79,142,247,0.3)" : "1px solid transparent",
              fontSize: 11,
              fontWeight: activeTab === tab.id ? 600 : 400,
            }}
          >
            <span style={{ fontSize: 16 }}>{tab.icon}</span>
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Content Area */}
      <div className="flex-1 mx-4 overflow-y-auto pb-4" style={{ maxHeight: "calc(100vh - 320px)" }}>

        {/* CHANNELS TAB */}
        {activeTab === "channels" && (
          <div>
            {/* Channel Bubbles Row */}
            <div className="flex gap-3 mb-4">
              <div className="flex flex-col items-center gap-1">
                <div className="w-14 h-14 rounded-full flex items-center justify-center text-sm font-bold" style={{ background: "linear-gradient(135deg, #4f8ef7, #2d6ef5)", border: "2px solid rgba(79,142,247,0.5)" }}>МО</div>
                <span style={{ fontSize: 10, color: "rgba(255,255,255,0.6)" }}>Мой канал</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <button className="w-14 h-14 rounded-full flex items-center justify-center" style={{ border: "2px dashed rgba(255,255,255,0.2)", background: "rgba(255,255,255,0.05)" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="2">
                    <path d="M12 5v14M5 12h14"/>
                  </svg>
                </button>
                <span style={{ fontSize: 10, color: "rgba(255,255,255,0.4)" }}>Ещё канал</span>
              </div>
            </div>

            {/* Channel Card */}
            <div className="rounded-2xl p-4 mb-4" style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)" }}>
              <div className="flex items-center justify-between mb-3">
                <span style={{ fontSize: 16, fontWeight: 700 }}>Мой канал</span>
                <span className="flex items-center gap-1 text-xs px-2 py-0.5 rounded-full font-medium" style={{ background: "rgba(52,199,89,0.15)", color: "#34c759", border: "1px solid rgba(52,199,89,0.3)" }}>
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><path d="M20 6L9 17l-5-5"/></svg>
                  Одобрен
                </span>
              </div>

              {/* Action Buttons Row */}
              <div className="flex gap-2 mb-4">
                <button className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold" style={{ background: "rgba(79,142,247,0.15)", color: "#4f8ef7", border: "1px solid rgba(79,142,247,0.3)" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                  </svg>
                  Trends
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold" style={{ background: "rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.7)", border: "1px solid rgba(255,255,255,0.12)" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
                  </svg>
                  Редактировать
                </button>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-5 gap-1 mb-4">
                {[
                  { label: "Видео", val: "0" },
                  { label: "Просм.", val: "0" },
                  { label: "Лайки", val: "0" },
                  { label: "Переходы", val: "0" },
                  { label: "Подписки", val: "0" },
                ].map((s) => (
                  <div key={s.label} className="flex flex-col items-center py-2 rounded-xl" style={{ background: "rgba(255,255,255,0.05)" }}>
                    <span style={{ fontSize: 15, fontWeight: 700 }}>{s.val}</span>
                    <span style={{ fontSize: 9, color: "rgba(255,255,255,0.4)", textAlign: "center", lineHeight: 1.2 }}>{s.label}</span>
                  </div>
                ))}
              </div>

              {/* Rewards Row */}
              <div className="flex items-center justify-between p-3 rounded-xl mb-3" style={{ background: "rgba(247,201,72,0.08)", border: "1px solid rgba(247,201,72,0.15)" }}>
                <div>
                  <div style={{ fontSize: 10, color: "rgba(255,255,255,0.45)", marginBottom: 2 }}>НАГРАДЫ ПОДПИСЧИКАМ</div>
                  <div style={{ fontSize: 18, fontWeight: 800, color: "#f7c948" }}>0 <span style={{ fontSize: 12 }}>TRND</span></div>
                  <div style={{ fontSize: 10, color: "rgba(255,255,255,0.3)" }}>Пополни баланс</div>
                </div>
                <button className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold" style={{ background: "linear-gradient(135deg, #f7c948, #f5a623)", color: "#1a1000" }}>
                  ⭐ Пополнить
                </button>
              </div>

              <div className="p-3 rounded-xl" style={{ background: "rgba(255,255,255,0.05)", fontSize: 11, color: "rgba(255,255,255,0.45)", lineHeight: 1.6 }}>
                💡 Купи Stars → они станут TRND → выбери видео → установи награду
              </div>
            </div>

            {/* Add Video Button */}
            <button className="w-full py-3.5 rounded-2xl font-semibold text-sm flex items-center justify-center gap-2 mb-3" style={{ background: "linear-gradient(135deg, #4f8ef7, #2d6ef5)", color: "#fff", boxShadow: "0 4px 20px rgba(79,142,247,0.35)" }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M12 5v14M5 12h14"/>
              </svg>
              Добавить видео в ленту
            </button>

            {/* Published / In review tabs */}
            <div className="flex gap-2">
              <button className="flex-1 py-2.5 rounded-xl text-sm font-semibold" style={{ background: "rgba(255,255,255,0.1)", color: "#fff", border: "1px solid rgba(255,255,255,0.15)" }}>
                Опубликовано
              </button>
              <button className="flex-1 py-2.5 rounded-xl text-sm" style={{ background: "transparent", color: "rgba(255,255,255,0.45)", border: "1px solid rgba(255,255,255,0.08)" }}>
                На проверке
              </button>
            </div>
          </div>
        )}

        {/* TOKENS TAB */}
        {activeTab === "tokens" && (
          <div>
            {/* Big Balance */}
            <div className="text-center mb-4">
              <div className="flex items-center justify-center gap-3 mb-1">
                <span style={{ fontSize: 52, fontWeight: 900, background: "linear-gradient(90deg, #f7c948, #f5a623)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>40</span>
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold" style={{ background: "linear-gradient(135deg, #f7c948, #f5a623)", color: "#1a1000" }}>T</div>
              </div>
              <div style={{ fontSize: 14, color: "rgba(255,255,255,0.6)", marginBottom: 6 }}>TRND</div>
              <div style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", maxWidth: 260, margin: "0 auto" }}>Trends начисляет TRND за просмотры, стрики и приглашения друзей</div>
            </div>

            {/* Invite Card */}
            <div className="rounded-2xl p-4 mb-4" style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)" }}>
              <div className="flex items-center justify-between mb-3">
                <div>
                  <div style={{ fontSize: 15, fontWeight: 700 }}>Пригласить друга</div>
                  <div style={{ fontSize: 12, color: "#4f8ef7" }}>+13000 T вам и другу</div>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl" style={{ background: "rgba(79,142,247,0.15)", border: "1px solid rgba(79,142,247,0.25)" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4f8ef7" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                  <span style={{ fontSize: 14, fontWeight: 700, color: "#4f8ef7" }}>0</span>
                </div>
              </div>

              <div className="flex items-center gap-2 mb-3 px-3 py-2.5 rounded-xl" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}>
                <span style={{ fontSize: 11, color: "rgba(255,255,255,0.45)", flex: 1, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>t.me/ContentifyAI_Bot?startapp=ref_288…</span>
                <button className="p-1.5 rounded-lg" style={{ background: "rgba(79,142,247,0.15)" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4f8ef7" strokeWidth="2">
                    <rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
                  </svg>
                </button>
                <button className="p-1.5 rounded-lg" style={{ background: "rgba(79,142,247,0.15)" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4f8ef7" strokeWidth="2">
                    <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
                  </svg>
                </button>
              </div>

              <button className="w-full py-3 rounded-xl text-sm font-semibold" style={{ background: "linear-gradient(135deg, #4f8ef7, #2d6ef5)", color: "#fff", boxShadow: "0 4px 16px rgba(79,142,247,0.3)" }}>
                Поделиться ссылкой
              </button>
            </div>

            {/* Activity/Friends/Badges sub-tabs */}
            <div className="flex gap-2 mb-4">
              {[
                { id: "activity", label: "Активность" },
                { id: "friends", label: "Друзья" },
                { id: "badges", label: "Бейджи" },
              ].map((t) => (
                <button
                  key={t.id}
                  onClick={() => setTokenTab(t.id)}
                  className="flex-1 py-2 rounded-xl text-sm font-medium"
                  style={{
                    background: tokenTab === t.id ? "rgba(255,255,255,0.12)" : "transparent",
                    color: tokenTab === t.id ? "#fff" : "rgba(255,255,255,0.45)",
                    border: tokenTab === t.id ? "1px solid rgba(255,255,255,0.2)" : "1px solid transparent",
                  }}
                >
                  {t.label}
                </button>
              ))}
            </div>

            {tokenTab === "activity" && (
              <div>
                <div style={{ fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.35)", letterSpacing: 1, marginBottom: 10 }}>КАК ЗАРАБАТЫВАТЬ</div>
                {[
                  { icon: "👁", label: "Просмотр видео", sub: "25–100 Coins / видео, до 100/день", reward: "25–100 С" },
                  { icon: "🔥", label: "Ежедневный чекин", sub: "50–500 Coins, 30-дневный цикл", reward: "50–500 С" },
                  { icon: "👥", label: "Приглашение друга", sub: "13000 Coins за каждого друга", reward: "13 000 С" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between p-3 rounded-2xl mb-2" style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.08)" }}>
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl flex items-center justify-center text-xl" style={{ background: "rgba(255,255,255,0.07)" }}>{item.icon}</div>
                      <div>
                        <div style={{ fontSize: 13, fontWeight: 600 }}>{item.label}</div>
                        <div style={{ fontSize: 11, color: "rgba(255,255,255,0.4)" }}>{item.sub}</div>
                      </div>
                    </div>
                    <span style={{ fontSize: 13, fontWeight: 700, color: "#f7c948" }}>{item.reward}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* SHOP TAB */}
        {activeTab === "shop" && (
          <div>
            {/* Sub-tabs */}
            <div className="flex gap-2 mb-4 overflow-x-auto pb-1">
              {["Бонусы", "Партнеры", "Розыгрыш", "Boost"].map((t) => (
                <button
                  key={t}
                  onClick={() => setShopTab(t.toLowerCase())}
                  className="flex-shrink-0 px-4 py-2 rounded-xl text-sm font-medium"
                  style={{
                    background: shopTab === t.toLowerCase() ? "rgba(255,255,255,0.12)" : "transparent",
                    color: shopTab === t.toLowerCase() ? "#fff" : "rgba(255,255,255,0.45)",
                    border: shopTab === t.toLowerCase() ? "1px solid rgba(255,255,255,0.2)" : "1px solid rgba(255,255,255,0.08)",
                    whiteSpace: "nowrap",
                  }}
                >
                  {t}
                </button>
              ))}
            </div>

            <div className="rounded-2xl p-6 text-center" style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)" }}>
              <div className="text-4xl mb-3">🛍</div>
              <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 6 }}>Офферы загружаются</div>
              <div style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", lineHeight: 1.6 }}>Скоро здесь появятся подписки, сервисы и гифт-карты от партнёров — обменивай токены на выгоду</div>
            </div>
          </div>
        )}

        {/* TASKS TAB */}
        {activeTab === "tasks" && (
          <div>
            <div style={{ fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.35)", letterSpacing: 1, marginBottom: 10 }}>КВЕСТЫ ДНЯ · 10 ИЮНЯ</div>

            {/* Bonus all quests */}
            <div className="flex items-center justify-between p-4 rounded-2xl mb-4" style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)" }}>
              <div>
                <div style={{ fontSize: 14, fontWeight: 700 }}>Бонус за все 4 квеста</div>
                <div style={{ fontSize: 12, color: "rgba(255,255,255,0.4)" }}>Выполнено 0/4</div>
              </div>
              <span className="px-3 py-1.5 rounded-xl text-sm font-bold" style={{ background: "rgba(247,201,72,0.15)", color: "#f7c948", border: "1px solid rgba(247,201,72,0.2)" }}>+150 TRND</span>
            </div>

            {/* Quest cards */}
            {[
              { label: "Посмотри 20 видео", sub: "Любых видео в ленте", reward: "+30", progress: 20, total: 20, done: true },
              { label: "Зацени 3 разные категории", sub: "Расширь интересы", reward: "+30", progress: 0, total: 3, done: false },
              { label: "Посмотри 50 видео", sub: "Залипни на ленте", reward: "+60", progress: 46, total: 50, done: false },
            ].map((q) => (
              <div key={q.label} className="rounded-2xl p-4 mb-3" style={{ background: "rgba(255,255,255,0.07)", border: q.done ? "1px solid rgba(247,201,72,0.2)" : "1px solid rgba(255,255,255,0.1)" }}>
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 700 }}>{q.label}</div>
                    <div style={{ fontSize: 12, color: "rgba(255,255,255,0.45)" }}>{q.sub}</div>
                  </div>
                  <span style={{ fontSize: 15, fontWeight: 700, color: "#f7c948" }}>{q.reward}<br /><span style={{ fontSize: 10, color: "rgba(255,255,255,0.4)", fontWeight: 400 }}>TRND</span></span>
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <span style={{ fontSize: 11, color: "rgba(255,255,255,0.4)" }}>Прогресс</span>
                  <span style={{ fontSize: 11, color: "rgba(255,255,255,0.6)" }}>{q.progress} / {q.total}</span>
                </div>
                <div className="w-full h-2 rounded-full mb-3 overflow-hidden" style={{ background: "rgba(255,255,255,0.1)" }}>
                  <div className="h-full rounded-full transition-all" style={{ width: `${(q.progress / q.total) * 100}%`, background: q.done ? "linear-gradient(90deg, #f7c948, #f5a623)" : "linear-gradient(90deg, #4f8ef7, #2d6ef5)" }} />
                </div>
                {q.done ? (
                  <button className="w-full py-2.5 rounded-xl text-sm font-semibold" style={{ background: "linear-gradient(135deg, #f7c948, #f5a623)", color: "#1a1000" }}>
                    Получить награду
                  </button>
                ) : (
                  <button className="w-full py-2.5 rounded-xl text-sm font-medium" style={{ background: "rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.35)", border: "1px solid rgba(255,255,255,0.08)", cursor: "not-allowed" }}>
                    Прогресс...
                  </button>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
