import React, { useState } from "react";
import { 
  ChevronLeft, 
  ChevronDown, 
  MoreHorizontal, 
  Settings, 
  Calendar, 
  Medal, 
  Plus, 
  Satellite, 
  Megaphone, 
  ExternalLink, 
  Copy, 
  Share, 
  User,
  Eye,
  Zap
} from "lucide-react";

// T-shape Hexagon logo
const LogoIcon = () => (
  <div className="w-8 h-8 flex items-center justify-center bg-white/10 rounded-lg">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinelinejoin="round" className="text-white">
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5" />
      <path d="M2 12l10 5 10-5" />
    </svg>
  </div>
);

const TokenIcon = () => (
  <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center">
    <span className="text-white font-bold text-xs">T</span>
  </div>
);

type TabType = "Каналы" | "Токены" | "Магазин" | "Задания";
type SubTabTokens = "Активность" | "Друзья" | "Бейджи";
type SubTabShop = "Бонусы" | "Партнеры" | "Розыгрыш" | "Boost";

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabType>("Каналы");
  const [tokensSubTab, setTokensSubTab] = useState<SubTabTokens>("Активность");
  const [shopSubTab, setShopSubTab] = useState<SubTabShop>("Бонусы");

  return (
    <div className="min-h-[100dvh] bg-[#0a0f18] text-white flex justify-center w-full">
      <div className="w-full max-w-md gradient-bg min-h-[100dvh] relative overflow-hidden flex flex-col shadow-2xl">
        
        {/* Sticky Header */}
        <div className="sticky top-0 z-50 pt-4 px-4 pb-2 bg-gradient-to-b from-[#162040] to-transparent">
          {/* Row 1 */}
          <div className="flex items-center justify-between mb-4">
            <button className="flex items-center text-blue-400 font-medium text-[17px]">
              <ChevronLeft className="w-6 h-6 mr-1" />
              Назад
            </button>
            <div className="flex items-center space-x-4 text-white">
              <button><ChevronDown className="w-6 h-6" /></button>
              <button><MoreHorizontal className="w-6 h-6" /></button>
            </div>
          </div>
          
          {/* Row 2 */}
          <div className="flex items-center justify-between">
            <LogoIcon />
            <div className="flex items-center glass-panel rounded-full px-3 py-1.5">
              <span className="text-xs text-white/70 mr-2">Баланс TRND</span>
              <span className="font-bold text-[15px] mr-3">40</span>
              <Settings className="w-4 h-4 text-white/70" />
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto hide-scrollbar pb-24">
          
          {/* Profile Section */}
          <div className="px-4 mt-2 mb-6 flex justify-between items-start">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h1 className="text-2xl font-bold tracking-tight">Миша Зевс</h1>
                <div className="flex items-center gap-1 bg-white/10 px-2 py-0.5 rounded-full border border-white/10">
                  <Medal className="w-3 h-3 text-gray-300" />
                  <span className="text-[10px] font-bold text-gray-300 uppercase tracking-wider">SILVER</span>
                </div>
              </div>
              <div className="text-white/60 text-[15px] mb-2">@misha_zeus</div>
              <div className="flex items-center text-white/40 text-[13px]">
                <Calendar className="w-3.5 h-3.5 mr-1.5" />
                с 10 июня 2026 г.
              </div>
            </div>
            
            <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-blue-600 to-purple-600 p-[2px]">
              <div className="w-full h-full rounded-full bg-[#1a2235] border-2 border-[#162040] flex items-center justify-center overflow-hidden">
                <User className="w-8 h-8 text-white/20" />
              </div>
            </div>
          </div>

          {/* Main Tab Bar */}
          <div className="px-4 mb-6">
            <div className="flex items-center glass-panel rounded-full p-1 w-full justify-between">
              {(["Каналы", "Токены", "Магазин", "Задания"] as TabType[]).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 text-center py-2 text-[14px] font-medium rounded-full transition-all duration-200 ${
                    activeTab === tab 
                      ? "bg-white text-black shadow-sm" 
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="px-4">
            
            {/* Каналы (Channels) */}
            {activeTab === "Каналы" && (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
                <div className="flex gap-4">
                  <div className="flex flex-col items-center gap-2">
                    <button className="w-16 h-16 rounded-full border border-dashed border-white/30 flex items-center justify-center hover:bg-white/5 transition-colors">
                      <Plus className="w-6 h-6 text-white/60" />
                    </button>
                    <span className="text-[11px] text-white/60 w-16 text-center leading-tight">Добавить канал</span>
                  </div>
                </div>

                <div className="glass-card rounded-2xl p-8 flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-4">
                    <Satellite className="w-8 h-8 text-white/80" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Нет добавленных каналов</h3>
                  <p className="text-[14px] text-white/60 leading-relaxed max-w-[280px]">
                    Добавь свой Telegram-канал, чтобы видео появились в ленте Trends
                  </p>
                </div>

                <div className="space-y-3 px-2">
                  <h4 className="text-[13px] font-bold text-white/40 uppercase tracking-wider">Как это работает</h4>
                  <ol className="space-y-3">
                    <li className="flex gap-3 text-[14px] text-white/80">
                      <span className="text-white/40 font-mono">1.</span>
                      Нажми «Добавить свой канал» ниже
                    </li>
                    <li className="flex gap-3 text-[14px] text-white/80">
                      <span className="text-white/40 font-mono">2.</span>
                      Следуй инструкциям в боте <span className="text-blue-400">@ContentifyAI_Bot</span>
                    </li>
                    <li className="flex gap-3 text-[14px] text-white/80">
                      <span className="text-white/40 font-mono">3.</span>
                      Добавь бота как администратора в канал
                    </li>
                    <li className="flex gap-3 text-[14px] text-white/80">
                      <span className="text-white/40 font-mono">4.</span>
                      После одобрения видео появятся в ленте
                    </li>
                  </ol>
                </div>

                <button className="w-full glass-card rounded-2xl p-4 flex items-center gap-4 hover:bg-white/[0.06] transition-colors text-left group">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <Megaphone className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-[15px] mb-0.5">Добавить свой канал</div>
                    <div className="text-[12px] text-white/50">Монетизируй контент через Trends</div>
                  </div>
                  <ExternalLink className="w-5 h-5 text-white/30 group-hover:text-white/60 transition-colors" />
                </button>
              </div>
            )}

            {/* Токены (Tokens) */}
            {activeTab === "Токены" && (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
                <div className="flex flex-col items-center py-6 text-center">
                  <div className="flex items-center gap-2 justify-center mb-1">
                    <span className="text-6xl font-black tracking-tight">40</span>
                    <TokenIcon />
                  </div>
                  <div className="text-[15px] font-bold mb-4">TRND</div>
                  <p className="text-[14px] text-white/50 max-w-[280px]">
                    Trends начисляет TRND за просмотры, стрики и приглашения друзей
                  </p>
                </div>

                <div className="glass-card rounded-2xl p-5">
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <div className="font-bold text-[16px] mb-1">Пригласить друга</div>
                      <div className="text-[#FBBF24] text-[13px] font-medium">+13000 Т вам и другу</div>
                    </div>
                    <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-full">
                      <User className="w-4 h-4 text-white/70" />
                      <span className="font-bold">0</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 bg-black/20 rounded-xl p-3 mb-4 border border-white/5">
                    <div className="flex-1 text-[13px] text-white/60 font-mono truncate">
                      t.me/ContentifyAI_Bot?startapp=ref_288113313
                    </div>
                    <button className="p-1.5 text-white/60 hover:text-white transition-colors">
                      <Copy className="w-4 h-4" />
                    </button>
                  </div>
                  
                  <button className="w-full bg-white text-black font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 active:scale-[0.98] transition-transform">
                    <Share className="w-4 h-4" />
                    Поделиться ссылкой
                  </button>
                </div>

                <div className="flex items-center glass-panel rounded-full p-1 w-full mt-8">
                  {(["Активность", "Друзья", "Бейджи"] as SubTabTokens[]).map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setTokensSubTab(tab)}
                      className={`flex-1 text-center py-2 text-[13px] font-medium rounded-full transition-all duration-200 ${
                        tokensSubTab === tab 
                          ? "bg-white/20 text-white" 
                          : "text-white/50 hover:text-white/80"
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>

                {tokensSubTab === "Активность" && (
                  <div className="pt-2 pb-6">
                    <h4 className="text-[13px] font-bold text-white/40 uppercase tracking-wider mb-4 px-2">КАК ЗАРАБАТЫВАТЬ</h4>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                            <Eye className="w-5 h-5 text-white/80" />
                          </div>
                          <div>
                            <div className="font-bold text-[14px]">Просмотр видео</div>
                            <div className="text-[12px] text-white/50">25–100 Coins / видео, до 100 видео/день</div>
                          </div>
                        </div>
                        <div className="text-[13px] font-bold text-white/80">25–100 С</div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                            <Zap className="w-5 h-5 text-white/80" />
                          </div>
                          <div>
                            <div className="font-bold text-[14px]">Ежедневный чекин</div>
                            <div className="text-[12px] text-white/50">50–500 Coins, 30-дневный цикл</div>
                          </div>
                        </div>
                        <div className="text-[13px] font-bold text-white/80">50–500 С</div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                            <User className="w-5 h-5 text-white/80" />
                          </div>
                          <div>
                            <div className="font-bold text-[14px]">Приглашение друга</div>
                            <div className="text-[12px] text-[#FBBF24]">+13000 coins</div>
                          </div>
                        </div>
                        <div className="text-[13px] font-bold text-white/80">1000+ С</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Магазин (Shop) */}
            {activeTab === "Магазин" && (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
                <div className="flex items-center bg-white/5 rounded-full p-1 w-full overflow-x-auto hide-scrollbar">
                  {(["Бонусы", "Партнеры", "Розыгрыш", "Boost"] as SubTabShop[]).map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setShopSubTab(tab)}
                      className={`flex-none px-5 py-2 text-[14px] font-medium rounded-full transition-all duration-200 ${
                        shopSubTab === tab 
                          ? "bg-white text-black shadow-sm" 
                          : "text-white/60 hover:text-white"
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>

                <div className="glass-card rounded-3xl p-8 flex flex-col items-center justify-center min-h-[300px] text-center mt-4">
                  <div className="w-16 h-16 mb-4 relative">
                    <div className="absolute inset-0 bg-white/20 rounded-full animate-ping opacity-20"></div>
                    <div className="w-full h-full bg-white/10 rounded-full flex items-center justify-center relative">
                      <div className="w-8 h-8 border-2 border-white/20 border-t-white/80 rounded-full animate-spin"></div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Офферы загружаются</h3>
                  <p className="text-[14px] text-white/50 leading-relaxed max-w-[280px]">
                    Скоро здесь появятся подписки, сервисы и гифт-карты от партнёров — обменивай токены на выгоду
                  </p>
                </div>
              </div>
            )}

            {/* Задания (Tasks) */}
            {activeTab === "Задания" && (
              <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
                <div className="text-[12px] font-bold text-white/40 uppercase tracking-wider px-2 mb-2">
                  КВЕСТЫ ДНЯ · 10 ИЮНЯ
                </div>

                <div className="glass-card rounded-2xl p-4 flex items-center justify-between mb-2">
                  <div>
                    <div className="font-bold text-[15px] mb-0.5">Бонус за все 4 квеста</div>
                    <div className="text-[13px] text-white/50">Выполнено 0/4</div>
                  </div>
                  <div className="bg-white/10 text-white/50 font-medium px-4 py-2 rounded-full text-[13px]">
                    +150 TRND
                  </div>
                </div>

                <div className="glass-card rounded-2xl p-5 space-y-4">
                  <div className="flex justify-between items-start mb-1">
                    <div className="font-bold text-[16px]">Посмотри 20 видео</div>
                    <div className="text-[14px] font-bold text-white">+30 TRND</div>
                  </div>
                  <div className="text-[13px] text-white/50">Любых видео в ленте</div>
                  
                  <div className="pt-2">
                    <div className="flex justify-between text-[12px] mb-2 font-medium">
                      <span className="text-white/60">Прогресс</span>
                      <span className="text-white">20 / 20</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden mb-4">
                      <div className="h-full bg-[#FBBF24] rounded-full w-full"></div>
                    </div>
                    <button className="w-full bg-white text-black font-bold py-3 rounded-xl active:scale-[0.98] transition-transform">
                      Получить награду
                    </button>
                  </div>
                </div>

                <div className="glass-card rounded-2xl p-5 space-y-4">
                  <div className="flex justify-between items-start mb-1">
                    <div className="font-bold text-[16px]">Зацени 3 разные категории</div>
                    <div className="text-[14px] font-bold text-white">+30 TRND</div>
                  </div>
                  <div className="text-[13px] text-white/50">Расширь интересы</div>
                  
                  <div className="pt-2">
                    <div className="flex justify-between text-[12px] mb-2 font-medium">
                      <span className="text-white/60">Прогресс</span>
                      <span className="text-white">0 / 3</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden mb-4">
                      <div className="h-full bg-blue-500 rounded-full w-0"></div>
                    </div>
                    <button className="w-full bg-white/10 text-white/50 font-bold py-3 rounded-xl cursor-default">
                      Прогресс...
                    </button>
                  </div>
                </div>

                <div className="glass-card rounded-2xl p-5 space-y-4">
                  <div className="flex justify-between items-start mb-1">
                    <div className="font-bold text-[16px]">Посмотри 50 видео</div>
                    <div className="text-[14px] font-bold text-white">+60 TRND</div>
                  </div>
                  <div className="text-[13px] text-white/50">Залипни на ленте</div>
                  
                  <div className="pt-2">
                    <div className="flex justify-between text-[12px] mb-2 font-medium">
                      <span className="text-white/60">Прогресс</span>
                      <span className="text-white">46 / 50</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden mb-4">
                      <div className="h-full bg-blue-500 rounded-full w-[92%]"></div>
                    </div>
                    <button className="w-full bg-white/10 text-white/50 font-bold py-3 rounded-xl cursor-default">
                      Прогресс...
                    </button>
                  </div>
                </div>
              </div>
            )}
            
          </div>
        </div>
      </div>
    </div>
  );
}
