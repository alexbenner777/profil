import { useState } from "react";
import logoImg from "@assets/logo_trends_1781102455128.png";
const bgImg = `${import.meta.env.BASE_URL}bg.jpg`;
import {
  ChevronLeft,
  ChevronDown,
  MoreHorizontal,
  Settings,
  Calendar,
  Plus,
  ExternalLink,
  Copy,
  Share2,
  User,
  Eye,
  Zap,
  Globe,
  Pencil,
  Star,
  Lightbulb,
} from "lucide-react";

const TrendsLogo = () => (
  <div
    style={{
      width: 46,
      height: 46,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <img
      src={logoImg}
      alt="Trends"
      style={{ width: 30, height: 30, objectFit: "contain", mixBlendMode: "screen" }}
    />
  </div>
);

const TokenBadge = () => (
  <div className="w-7 h-7 rounded-full bg-[#f59e0b] flex items-center justify-center shadow-lg">
    <span className="text-white font-black text-[13px] leading-none">T</span>
  </div>
);

type TabType = "Каналы" | "Токены" | "Магазин" | "Задания";
type SubTabTokens = "Активность" | "Друзья" | "Бейджи";
type SubTabShop = "Бонусы" | "Партнеры" | "Розыгрыш" | "Boost";
type SubTabChannel = "Опубликовано" | "На проверке";

const TabBar = ({
  tabs,
  active,
  setActive,
}: {
  tabs: string[];
  active: string;
  setActive: (t: string) => void;
}) => (
  <div className="flex items-center rounded-2xl p-[3px] w-full" style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.14) 0%, rgba(255,255,255,0.06) 40%, rgba(255,255,255,0.08) 100%)", border: "1px solid rgba(255,255,255,0.14)", boxShadow: "0 2px 5px rgba(0,0,0,0.18), 0 1px 2px rgba(0,0,0,0.12), inset 0 1.5px 0 rgba(255,255,255,0.32)" }}>
    {tabs.map((tab) => (
      <button
        key={tab}
        onClick={() => setActive(tab)}
        className={`flex-1 text-center py-[7px] text-[13px] font-semibold rounded-md transition-all duration-200 ${
          active === tab
            ? "bg-white text-black shadow-sm"
            : "text-white/55 hover:text-white/80"
        }`}
      >
        {tab}
      </button>
    ))}
  </div>
);

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabType>("Каналы");
  const [tokensSubTab, setTokensSubTab] = useState<SubTabTokens>("Активность");
  const [shopSubTab, setShopSubTab] = useState<SubTabShop>("Бонусы");
  const [channelSubTab, setChannelSubTab] = useState<SubTabChannel>("Опубликовано");
  const [hasChannel, setHasChannel] = useState(false);

  return (
    <div
      className="min-h-[100dvh] w-full flex justify-center"
      style={{ background: "#000" }}
    >
      <div
        className="w-full max-w-[430px] min-h-[100dvh] relative flex flex-col overflow-hidden"
        style={{ background: "transparent", borderRadius: 40 }}
      >
        {/* Blurred background image */}
        <img
          src={bgImg}
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center top",
            filter: "blur(18px) brightness(0.6) saturate(0.8)",
            transform: "scale(1.12)",
            zIndex: 0,
            pointerEvents: "none",
            userSelect: "none",
          }}
        />

        {/* Sticky Header */}
        <div className="sticky top-0 z-50 px-4 pt-4 pb-3" style={{ background: "transparent", position: "relative", zIndex: 10 }}>
          {/* Nav row */}
          <div className="flex items-center justify-between mb-4">
            <button
              data-testid="btn-back"
              className="flex items-center text-[#4d9ff8] font-medium text-[17px] active:opacity-70 transition-opacity"
            >
              <ChevronLeft className="w-5 h-5 mr-0.5" strokeWidth={2.5} />
              Назад
            </button>
            <div className="flex items-center space-x-4 text-white/80">
              <button data-testid="btn-chevron-down" className="active:opacity-60 transition-opacity">
                <ChevronDown className="w-6 h-6" />
              </button>
              <button data-testid="btn-more" className="active:opacity-60 transition-opacity">
                <MoreHorizontal className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Balance row — logo+balance card  +  separate gear button */}
          <div className="flex items-center gap-2">
            {/* Wide card: logo + balance */}
            <div
              className="flex items-center flex-1"
              style={{
                background: "linear-gradient(180deg, rgba(255,255,255,0.16) 0%, rgba(255,255,255,0.07) 40%, rgba(255,255,255,0.09) 100%)",
                border: "1px solid rgba(255,255,255,0.14)",
                borderRadius: 18,
                backdropFilter: "blur(12px)",
                padding: "8px 14px 8px 8px",
                gap: 10,
                minHeight: 62,
                boxShadow: "0 2px 5px rgba(0,0,0,0.18), 0 1px 2px rgba(0,0,0,0.12), inset 0 1.5px 0 rgba(255,255,255,0.32)",
              }}
            >
              <TrendsLogo />
              <div className="flex-1" />
              <div className="flex flex-col items-end">
                <span style={{ fontSize: 11, color: "rgba(255,255,255,0.5)", lineHeight: 1, marginBottom: 4 }}>
                  Баланс TRND
                </span>
                <span style={{ fontSize: 26, fontWeight: 800, lineHeight: 1, color: "#fff" }}>40</span>
              </div>
            </div>

            {/* Gear button — separate square */}
            <button
              data-testid="btn-settings"
              style={{
                width: 62,
                height: 62,
                borderRadius: 18,
                background: "linear-gradient(180deg, rgba(255,255,255,0.16) 0%, rgba(255,255,255,0.07) 40%, rgba(255,255,255,0.09) 100%)",
                border: "1px solid rgba(255,255,255,0.14)",
                backdropFilter: "blur(12px)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                boxShadow: "0 2px 5px rgba(0,0,0,0.18), 0 1px 2px rgba(0,0,0,0.12), inset 0 1.5px 0 rgba(255,255,255,0.32)",
              }}
            >
              <Settings style={{ width: 20, height: 20, color: "rgba(255,255,255,0.55)" }} />
            </button>
          </div>
        </div>

        {/* Sticky bottom bar — only when channel exists on Каналы tab */}
        {activeTab === "Каналы" && hasChannel && (
          <div
            className="absolute bottom-0 left-0 right-0 px-4 pb-4 pt-2"
            style={{
              background: "linear-gradient(to top, rgba(12,21,35,0.98) 60%, transparent)",
              zIndex: 40,
            }}
          >
            <button
              className="w-full bg-white text-black font-bold py-4 rounded-2xl text-[16px] flex items-center justify-center gap-2 active:scale-[0.98] transition-transform shadow-xl"
            >
              <Plus className="w-5 h-5" />
              Добавить видео в ленту
            </button>
            <div
              className="flex items-center mt-2 rounded-2xl p-1"
              style={{ background: "rgba(255,255,255,0.07)" }}
            >
              {(["Опубликовано", "На проверке"] as SubTabChannel[]).map((t) => (
                <button
                  key={t}
                  onClick={() => setChannelSubTab(t)}
                  className={`flex-1 py-2.5 text-[14px] font-semibold rounded-xl transition-all duration-200 ${
                    channelSubTab === t
                      ? "bg-white text-black shadow-sm"
                      : "text-white/50 hover:text-white/80"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Scrollable body */}
        <div className="flex-1 overflow-y-auto" style={{ scrollbarWidth: "none", position: "relative", zIndex: 10 }}>
          {/* Profile section */}
          <div className="px-4 mt-1 mb-5 flex justify-between items-start">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <h1 className="text-[22px] font-bold tracking-tight text-white">Миша Зевс</h1>
                <div
                  className="flex items-center gap-1 px-2 py-0.5 rounded-full"
                  style={{ border: "1px solid rgba(255,255,255,0.18)", background: "rgba(255,255,255,0.06)" }}
                >
                  <span className="text-[10px]">🥈</span>
                  <span className="text-[10px] font-bold text-white/70 tracking-wider">SILVER</span>
                </div>
              </div>
              <div className="text-white/55 text-[14px] mb-2">@misha_zeus</div>
              <div className="flex items-center text-white/40 text-[13px] gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                с 10 июня 2026 г.
              </div>
            </div>
            <div
              className="w-[60px] h-[60px] rounded-full p-[2px]"
              style={{ background: "linear-gradient(135deg, #4d9ff8, #7c5ce8)" }}
            >
              <div
                className="w-full h-full rounded-full flex items-center justify-center overflow-hidden"
                style={{ background: "#1a2540" }}
              >
                <User className="w-7 h-7 text-white/20" />
              </div>
            </div>
          </div>

          {/* Main tab bar */}
          <div className="px-4 mb-5">
            <TabBar
              tabs={["Каналы", "Токены", "Магазин", "Задания"]}
              active={activeTab}
              setActive={(t) => setActiveTab(t as TabType)}
            />
          </div>

          {/* Tab content — extra bottom padding when channel sticky bar is shown */}
          <div className={`px-4 ${activeTab === "Каналы" && hasChannel ? "pb-[130px]" : "pb-10"}`}>

            {/* ── Каналы ── */}
            {activeTab === "Каналы" && (
              <div className="animate-in fade-in duration-200">
                {/* Channel avatars row */}
                <div className="flex gap-4 mb-5">
                  {hasChannel && (
                    <div className="flex flex-col items-center gap-1.5">
                      <button
                        onClick={() => {}}
                        className="w-[56px] h-[56px] rounded-full flex items-center justify-center font-bold text-white text-[18px]"
                        style={{
                          background: "linear-gradient(135deg, #7c3aed, #6d28d9)",
                          boxShadow: "0 0 0 2.5px #7c3aed, 0 0 0 4px rgba(124,58,237,0.3)",
                        }}
                      >
                        МО
                      </button>
                      <span className="text-[11px] text-white/60 leading-tight text-center">Мой канал</span>
                    </div>
                  )}
                  <div className="flex flex-col items-center gap-1.5">
                    <button
                      data-testid="btn-add-channel"
                      onClick={() => setHasChannel(true)}
                      className="w-[56px] h-[56px] rounded-full flex items-center justify-center transition-colors active:scale-95"
                      style={{
                        background: "linear-gradient(180deg, rgba(255,255,255,0.16) 0%, rgba(255,255,255,0.07) 40%, rgba(255,255,255,0.09) 100%)",
                        border: "1px solid rgba(255,255,255,0.14)",
                        backdropFilter: "blur(12px)",
                        boxShadow: "0 2px 5px rgba(0,0,0,0.18), 0 1px 2px rgba(0,0,0,0.12), inset 0 1.5px 0 rgba(255,255,255,0.32)",
                      }}
                    >
                      <Plus className="w-5 h-5 text-white/55" />
                    </button>
                    <span className="text-[11px] text-white/50 w-[60px] text-center leading-tight">
                      {hasChannel ? "Ещё канал" : "Добавить канал"}
                    </span>
                  </div>
                </div>

                {hasChannel ? (
                  /* ── Channel detail card ── */
                  <div className="space-y-0 pb-28">
                    <div
                      className="rounded-2xl p-4 space-y-4"
                      style={{
                        background: "linear-gradient(180deg, rgba(255,255,255,0.13) 0%, rgba(255,255,255,0.05) 40%, rgba(255,255,255,0.07) 100%)",
                        border: "1px solid rgba(255,255,255,0.14)",
                        backdropFilter: "blur(12px)",
                        boxShadow: "0 2px 5px rgba(0,0,0,0.18), 0 1px 2px rgba(0,0,0,0.12), inset 0 1.5px 0 rgba(255,255,255,0.32)",
                      }}
                    >
                      {/* Title + approved badge */}
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-[17px] text-white">Мой канал</span>
                        <div className="flex items-center gap-1 px-2 py-0.5 rounded-full" style={{ background: "rgba(34,197,94,0.15)" }}>
                          <span className="text-[10px] text-green-400">✓</span>
                          <span className="text-[11px] font-semibold text-green-400">Одобрен</span>
                        </div>
                      </div>

                      {/* Action buttons */}
                      <div className="flex gap-2">
                        <button
                          className="flex-1 flex items-center justify-center gap-2 font-semibold py-2.5 rounded-xl text-[13px] active:scale-[0.98] transition-transform text-black"
                          style={{
                            background: "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(235,235,235,1) 100%)",
                            boxShadow: "0 2px 5px rgba(0,0,0,0.18), 0 1px 2px rgba(0,0,0,0.12), inset 0 1.5px 0 rgba(255,255,255,0.9)",
                          }}
                        >
                          <Globe className="w-4 h-4" />
                          Страница Trends
                        </button>
                        <button
                          className="flex-1 flex items-center justify-center gap-2 font-semibold py-2.5 rounded-xl text-[13px] active:scale-[0.98] transition-transform"
                          style={{
                            background: "linear-gradient(180deg, rgba(255,255,255,0.16) 0%, rgba(255,255,255,0.07) 40%, rgba(255,255,255,0.09) 100%)",
                            border: "1px solid rgba(255,255,255,0.14)",
                            backdropFilter: "blur(12px)",
                            boxShadow: "0 2px 5px rgba(0,0,0,0.18), 0 1px 2px rgba(0,0,0,0.12), inset 0 1.5px 0 rgba(255,255,255,0.32)",
                            color: "rgba(255,255,255,0.85)",
                          }}
                        >
                          <Pencil className="w-4 h-4" />
                          Редактировать
                        </button>
                      </div>

                      {/* Stats row */}
                      <div className="grid grid-cols-5 gap-1">
                        {[
                          { label: "Видео", value: "0" },
                          { label: "Просмотры", value: "0" },
                          { label: "Лайки", value: "0" },
                          { label: "Переходов", value: "0" },
                          { label: "Подписок", value: "0" },
                        ].map((s) => (
                          <div
                            key={s.label}
                            className="flex flex-col items-center py-2.5 rounded-md"
                            style={{
                              background: "linear-gradient(180deg, rgba(255,255,255,0.16) 0%, rgba(255,255,255,0.07) 40%, rgba(255,255,255,0.09) 100%)",
                              border: "1px solid rgba(255,255,255,0.14)",
                              backdropFilter: "blur(12px)",
                              boxShadow: "0 2px 5px rgba(0,0,0,0.18), 0 1px 2px rgba(0,0,0,0.12), inset 0 1.5px 0 rgba(255,255,255,0.32)",
                            }}
                          >
                            <span className="text-[17px] font-bold text-white leading-none mb-1">{s.value}</span>
                            <span className="text-[9px] text-white/45 text-center leading-tight">{s.label}</span>
                          </div>
                        ))}
                      </div>

                      {/* Rewards block */}
                      <div
                        className="rounded-xl p-3.5"
                        style={{
                          background: "linear-gradient(180deg, rgba(255,255,255,0.13) 0%, rgba(255,255,255,0.05) 40%, rgba(255,255,255,0.07) 100%)",
                          border: "1px solid rgba(255,255,255,0.14)",
                          backdropFilter: "blur(12px)",
                          boxShadow: "0 2px 5px rgba(0,0,0,0.18), 0 1px 2px rgba(0,0,0,0.12), inset 0 1.5px 0 rgba(255,255,255,0.32)",
                        }}
                      >
                        <div className="text-[10px] font-bold text-white/35 uppercase tracking-wider mb-1.5">
                          НАГРАДЫ ПОДПИСЧИКАМ
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="flex items-baseline gap-1">
                              <span className="text-[20px] font-black text-white leading-none">0</span>
                              <span className="text-[13px] font-bold text-white/60">TRND</span>
                            </div>
                            <div className="text-[11px] text-white/35 mt-0.5 max-w-[160px] leading-snug">
                              Пополни баланс чтобы начать назначать награды
                            </div>
                          </div>
                          <button
                            className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl font-bold text-[13px] text-black shrink-0"
                            style={{
                              background: "linear-gradient(180deg, #ffffff 0%, #ebebeb 100%)",
                              boxShadow: "0 2px 5px rgba(0,0,0,0.18), 0 1px 2px rgba(0,0,0,0.12), inset 0 1.5px 0 rgba(255,255,255,0.9)",
                            }}
                          >
                            <Star className="w-3.5 h-3.5" style={{ color: "#f59e0b", fill: "#f59e0b" }} />
                            Пополнить
                          </button>
                        </div>
                      </div>

                      {/* Tip row */}
                      <div className="flex items-start gap-2 text-[12px] text-white/40 leading-snug">
                        <Lightbulb className="w-4 h-4 shrink-0 mt-0.5 text-[#f59e0b]" />
                        <span>Купи Stars → они станут TRND → выбери видео → установи награду</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* ── Empty state ── */
                  <div className="space-y-5">
                    <div
                      className="rounded-2xl p-8 flex flex-col items-center text-center"
                      style={{
                        background: "linear-gradient(180deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.04) 40%, rgba(255,255,255,0.05) 100%)",
                        border: "1px solid rgba(255,255,255,0.07)",
                        boxShadow: "0 2px 5px rgba(0,0,0,0.18), 0 1px 2px rgba(0,0,0,0.12), inset 0 1.5px 0 rgba(255,255,255,0.32)",
                      }}
                    >
                      <div className="text-4xl mb-4">📡</div>
                      <h3 className="text-[16px] font-bold text-white mb-2">Нет добавленных каналов</h3>
                      <p className="text-[13px] text-white/50 leading-relaxed max-w-[240px]">
                        Добавь свой Telegram-канал, чтобы видео появились в ленте Trends
                      </p>
                    </div>

                    <div className="px-1 space-y-2.5">
                      <h4 className="text-[12px] font-semibold text-white/40 uppercase tracking-wider">
                        Как это работает
                      </h4>
                      <ol className="space-y-2.5">
                        {[
                          "Нажми «Добавить свой канал» ниже",
                          <>Следуй инструкциям в боте <span className="text-[#4d9ff8]">@ContentifyAI_Bot</span></>,
                          "Добавь бота как администратора в канал",
                          "После одобрения видео появятся в ленте",
                        ].map((step, i) => (
                          <li key={i} className="flex gap-3 text-[14px] text-white/75">
                            <span className="text-white/35 font-mono shrink-0">{i + 1}.</span>
                            <span>{step}</span>
                          </li>
                        ))}
                      </ol>
                    </div>

                  </div>
                )}
              </div>
            )}

            {/* ── Токены ── */}
            {activeTab === "Токены" && (
              <div className="space-y-5 animate-in fade-in duration-200">
                {/* Balance display */}
                <div className="flex flex-col items-center py-5 text-center">
                  <div className="flex items-center gap-2.5 justify-center mb-1">
                    <span className="text-[58px] font-black tracking-tight leading-none text-white">40</span>
                    <TokenBadge />
                  </div>
                  <div className="text-[15px] font-bold text-white mb-3">TRND</div>
                  <p className="text-[13px] text-white/45 max-w-[260px] leading-relaxed">
                    Trends начисляет TRND за просмотры, стрики и приглашения друзей
                  </p>
                </div>

                {/* Referral card */}
                <div
                  className="rounded-2xl p-5"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <div className="flex justify-between items-center mb-3">
                    <div>
                      <div className="font-bold text-[15px] text-white mb-0.5">Пригласить друга</div>
                      <div className="text-[13px] font-medium" style={{ color: "#f59e0b" }}>
                        +13000 Т вам и другу
                      </div>
                    </div>
                    <div
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full"
                      style={{ background: "rgba(255,255,255,0.08)" }}
                    >
                      <User className="w-4 h-4 text-white/60" />
                      <span className="font-bold text-white text-[14px]">0</span>
                    </div>
                  </div>

                  <div
                    className="flex items-center gap-2 rounded-xl p-3 mb-3"
                    style={{
                      background: "rgba(0,0,0,0.25)",
                      border: "1px solid rgba(255,255,255,0.06)",
                    }}
                  >
                    <div className="flex-1 text-[12px] text-white/50 font-mono truncate">
                      t.me/ContentifyAI_Bot?startapp=ref_288113313
                    </div>
                    <button
                      data-testid="btn-copy-link"
                      className="p-1 text-white/50 hover:text-white/80 transition-colors active:scale-90"
                    >
                      <Copy className="w-4 h-4" />
                    </button>
                    <button
                      data-testid="btn-share-link-icon"
                      className="p-1 text-white/50 hover:text-white/80 transition-colors active:scale-90"
                    >
                      <Share2 className="w-4 h-4" />
                    </button>
                  </div>

                  <button
                    data-testid="btn-share-link"
                    className="w-full bg-white text-black font-bold py-3.5 rounded-xl active:scale-[0.98] transition-transform text-[15px]"
                  >
                    Поделиться ссылкой
                  </button>
                </div>

                {/* Sub-tabs */}
                <div className="mt-2">
                  <TabBar
                    tabs={["Активность", "Друзья", "Бейджи"]}
                    active={tokensSubTab}
                    setActive={(t) => setTokensSubTab(t as SubTabTokens)}
                  />
                </div>

                {tokensSubTab === "Активность" && (
                  <div className="pb-4">
                    <h4 className="text-[11px] font-bold text-white/35 uppercase tracking-wider mb-4 px-1">
                      КАК ЗАРАБАТЫВАТЬ
                    </h4>
                    <div className="space-y-5">
                      {[
                        {
                          icon: <Eye className="w-5 h-5 text-white/70" />,
                          title: "Просмотр видео",
                          sub: "25–100 Coins / видео, до 100 видео/день",
                          reward: "25–100 С",
                        },
                        {
                          icon: <Zap className="w-5 h-5 text-white/70" />,
                          title: "Ежедневный чекин",
                          sub: "50–500 Coins, 30-дневный цикл",
                          reward: "50–500 С",
                        },
                        {
                          icon: <User className="w-5 h-5 text-white/70" />,
                          title: "Приглашение друга",
                          sub: "+13000 coins",
                          reward: "1000+ С",
                          subColor: "#f59e0b",
                        },
                      ].map((item, i) => (
                        <div key={i} className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div
                              className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                              style={{ background: "rgba(255,255,255,0.07)" }}
                            >
                              {item.icon}
                            </div>
                            <div>
                              <div className="font-semibold text-[14px] text-white">{item.title}</div>
                              <div
                                className="text-[12px] mt-0.5"
                                style={{ color: item.subColor ?? "rgba(255,255,255,0.45)" }}
                              >
                                {item.sub}
                              </div>
                            </div>
                          </div>
                          <div className="text-[13px] font-bold text-white/80 shrink-0 ml-2">
                            {item.reward}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {tokensSubTab === "Друзья" && (
                  <div className="flex flex-col items-center py-10 text-white/40">
                    <User className="w-10 h-10 mb-3 opacity-30" />
                    <p className="text-[14px]">Пока нет приглашённых друзей</p>
                  </div>
                )}

                {tokensSubTab === "Бейджи" && (
                  <div className="flex flex-col items-center py-10 text-white/40">
                    <Star className="w-10 h-10 mb-3 opacity-30" />
                    <p className="text-[14px]">Бейджи появятся после выполнения заданий</p>
                  </div>
                )}
              </div>
            )}

            {/* ── Магазин ── */}
            {activeTab === "Магазин" && (
              <div className="space-y-5 animate-in fade-in duration-200">
                {/* Sub-tabs */}
                <TabBar
                  tabs={["Бонусы", "Партнеры", "Розыгрыш", "Boost"]}
                  active={shopSubTab}
                  setActive={(t) => setShopSubTab(t as SubTabShop)}
                />

                {/* Empty/loading state */}
                <div
                  className="rounded-2xl p-10 flex flex-col items-center justify-center text-center mt-2"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.07)",
                  }}
                >
                  <h3 className="text-[17px] font-bold text-white mb-3">
                    Офферы загружаются
                  </h3>
                  <p className="text-[13px] text-white/45 leading-relaxed max-w-[260px]">
                    Скоро здесь появятся подписки, сервисы и гифт-карты от партнёров — обменивай токены на выгоду
                  </p>
                </div>
              </div>
            )}

            {/* ── Задания ── */}
            {activeTab === "Задания" && (
              <div className="space-y-4 animate-in fade-in duration-200">
                <div className="text-[11px] font-bold text-white/35 uppercase tracking-wider px-1 mb-1">
                  КВЕСТЫ ДНЯ · 10 ИЮНЯ
                </div>

                {/* Bonus summary card */}
                <div
                  className="rounded-2xl px-5 py-4 flex items-center justify-between"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.07)",
                  }}
                >
                  <div>
                    <div className="font-bold text-[15px] text-white mb-0.5">Бонус за все 4 квеста</div>
                    <div className="text-[13px] text-white/45">Выполнено 0/4</div>
                  </div>
                  <div
                    className="px-4 py-2 rounded-full text-[13px] font-medium text-white/50"
                    style={{ background: "rgba(255,255,255,0.08)" }}
                  >
                    +150 TRND
                  </div>
                </div>

                {/* Quest 1 — complete */}
                <div
                  className="rounded-2xl p-5"
                  style={{
                    background: "rgba(255,255,255,0.07)",
                    border: "1px solid rgba(255,255,255,0.09)",
                  }}
                >
                  <div className="flex justify-between items-start mb-1">
                    <div className="font-bold text-[16px] text-white">Посмотри 20 видео</div>
                    <div className="text-right ml-4 shrink-0">
                      <div className="text-[14px] font-bold text-white">+30</div>
                      <div className="text-[11px] text-white/50">TRND</div>
                    </div>
                  </div>
                  <div className="text-[13px] text-white/50 mb-4">Любых видео в ленте</div>
                  <div className="flex justify-between text-[12px] mb-2">
                    <span className="text-white/50">Прогресс</span>
                    <span className="text-white font-medium">20 / 20</span>
                  </div>
                  <div className="h-1.5 w-full rounded-full mb-4 overflow-hidden" style={{ background: "rgba(255,255,255,0.1)" }}>
                    <div className="h-full rounded-full w-full" style={{ background: "#f59e0b" }} />
                  </div>
                  <button
                    data-testid="btn-claim-reward-1"
                    className="w-full bg-white text-black font-bold py-3 rounded-xl active:scale-[0.98] transition-transform text-[15px]"
                  >
                    Получить награду
                  </button>
                </div>

                {/* Quest 2 — not started */}
                <div
                  className="rounded-2xl p-5"
                  style={{
                    background: "rgba(255,255,255,0.07)",
                    border: "1px solid rgba(255,255,255,0.09)",
                  }}
                >
                  <div className="flex justify-between items-start mb-1">
                    <div className="font-bold text-[16px] text-white">Зацени 3 разные категории</div>
                    <div className="text-right ml-4 shrink-0">
                      <div className="text-[14px] font-bold text-white">+30</div>
                      <div className="text-[11px] text-white/50">TRND</div>
                    </div>
                  </div>
                  <div className="text-[13px] text-white/50 mb-4">Расширь интересы</div>
                  <div className="flex justify-between text-[12px] mb-2">
                    <span className="text-white/50">Прогресс</span>
                    <span className="text-white font-medium">0 / 3</span>
                  </div>
                  <div className="h-1.5 w-full rounded-full mb-4 overflow-hidden" style={{ background: "rgba(255,255,255,0.1)" }}>
                    <div className="h-full rounded-full w-0" style={{ background: "#6366f1" }} />
                  </div>
                  <button
                    className="w-full font-bold py-3 rounded-xl text-[15px] cursor-default"
                    style={{ background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.35)" }}
                  >
                    Прогресс...
                  </button>
                </div>

                {/* Quest 3 — in progress */}
                <div
                  className="rounded-2xl p-5"
                  style={{
                    background: "rgba(255,255,255,0.07)",
                    border: "1px solid rgba(255,255,255,0.09)",
                  }}
                >
                  <div className="flex justify-between items-start mb-1">
                    <div className="font-bold text-[16px] text-white">Посмотри 50 видео</div>
                    <div className="text-right ml-4 shrink-0">
                      <div className="text-[14px] font-bold text-white">+60</div>
                      <div className="text-[11px] text-white/50">TRND</div>
                    </div>
                  </div>
                  <div className="text-[13px] text-white/50 mb-4">Залипни на ленте</div>
                  <div className="flex justify-between text-[12px] mb-2">
                    <span className="text-white/50">Прогресс</span>
                    <span className="text-white font-medium">46 / 50</span>
                  </div>
                  <div className="h-1.5 w-full rounded-full mb-4 overflow-hidden" style={{ background: "rgba(255,255,255,0.1)" }}>
                    <div className="h-full rounded-full" style={{ background: "#6366f1", width: "92%" }} />
                  </div>
                  <button
                    className="w-full font-bold py-3 rounded-xl text-[15px] cursor-default"
                    style={{ background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.35)" }}
                  >
                    Прогресс...
                  </button>
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}
