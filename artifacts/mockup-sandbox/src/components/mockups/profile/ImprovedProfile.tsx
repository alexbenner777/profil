import { useState } from "react";

type Tab = "channels" | "tokens" | "shop" | "tasks";

/* ─── tiny reusable pieces ─── */
const SatelliteIcon = () => (
  <svg width="52" height="52" viewBox="0 0 64 64" fill="none">
    <circle cx="32" cy="32" r="30" fill="rgba(255,255,255,0.07)" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5"/>
    <path d="M20 44 L44 20" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5"/>
    <ellipse cx="26" cy="38" rx="10" ry="7" transform="rotate(-45 26 38)" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2"/>
    <circle cx="40" cy="24" r="5" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2"/>
    <circle cx="40" cy="24" r="2" fill="rgba(255,255,255,0.6)"/>
    <line x1="44" y1="20" x2="50" y2="16" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5"/>
    <line x1="44" y1="24" x2="52" y2="24" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5"/>
    <line x1="40" y1="28" x2="40" y2="36" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5"/>
  </svg>
);

const GearIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1.8">
    <circle cx="12" cy="12" r="3"/>
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
  </svg>
);

export function ImprovedProfile() {
  const [activeTab, setActiveTab] = useState<Tab>("channels");
  const [hasChannel, setHasChannel] = useState(true);
  const [shopSub, setShopSub] = useState("Бонусы");
  const [tokenSub, setTokenSub] = useState("Активность");

  /* ── shared header ── */
  const Header = () => (
    <>
      {/* status bar */}
      <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"12px 18px 4px", fontSize:13, fontWeight:600 }}>
        <span>14:34 🔕</span>
        <div style={{ display:"flex", alignItems:"center", gap:5 }}>
          <svg width="16" height="12" viewBox="0 0 16 12" fill="white"><path d="M0 12h2V7H0v5zm3 0h2V5H3v7zm3 0h2V3H6v9zm3 0h2V1H9v11zm3 0h2V0h-2v12z"/></svg>
          <svg width="16" height="12" viewBox="0 0 24 24" fill="white"><path fillRule="evenodd" d="M1.5 8.4C4.2 5.6 7.9 4 12 4s7.8 1.6 10.5 4.4L21 9.9C18.7 7.5 15.5 6 12 6S5.3 7.5 3 9.9L1.5 8.4zm3 3C6.6 9.2 9.2 8 12 8s5.4 1.2 7.5 3.4L18 12.9C16.3 11.1 14.3 10 12 10s-4.3 1.1-6 2.9L7.5 11.4zm3 3C9.1 12.8 10.5 12 12 12s2.9.8 3.5 2.4L14 15.9c-.5-.6-1.2-.9-2-.9s-1.5.3-2 .9L9.5 14.4z"/></svg>
          <div style={{ background:"rgba(255,255,255,0.9)", borderRadius:4, padding:"2px 6px", color:"#0d1628", fontSize:11, fontWeight:700 }}>51</div>
        </div>
      </div>

      {/* nav */}
      <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"4px 18px 10px" }}>
        <button style={{ display:"flex", alignItems:"center", gap:5, fontSize:15, color:"rgba(255,255,255,0.85)", background:"none", border:"none", cursor:"pointer", padding:0 }}>
          <svg width="8" height="14" viewBox="0 0 8 14" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 1L1 7l6 6"/></svg>
          Назад
        </button>
        <div style={{ display:"flex", alignItems:"center", gap:14 }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.75)" strokeWidth="2"><polyline points="6 9 12 15 18 9"/></svg>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.75)" strokeWidth="2"><circle cx="5" cy="12" r="1.5" fill="rgba(255,255,255,0.75)"/><circle cx="12" cy="12" r="1.5" fill="rgba(255,255,255,0.75)"/><circle cx="19" cy="12" r="1.5" fill="rgba(255,255,255,0.75)"/></svg>
        </div>
      </div>

      {/* logo + balance row */}
      <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"0 18px 14px" }}>
        <div style={{ width:44, height:44, borderRadius:12, background:"linear-gradient(145deg,#3a6fdf,#1a4bbf)", display:"flex", alignItems:"center", justifyContent:"center" }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill="white"/>
          </svg>
        </div>
        <div style={{ display:"flex", alignItems:"center", gap:10 }}>
          <div style={{ textAlign:"right" }}>
            <div style={{ fontSize:11, color:"rgba(255,255,255,0.5)" }}>Баланс TRND</div>
            <div style={{ fontSize:24, fontWeight:700, lineHeight:1.1 }}>40</div>
          </div>
          <GearIcon />
        </div>
      </div>

      {/* user info */}
      <div style={{ display:"flex", alignItems:"flex-start", justifyContent:"space-between", padding:"0 18px 14px" }}>
        <div>
          <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:3 }}>
            <span style={{ fontSize:20, fontWeight:700 }}>Миша Зевс</span>
            <span style={{ display:"flex", alignItems:"center", gap:3, fontSize:11, fontWeight:600, color:"#d4aa50", background:"rgba(212,170,80,0.15)", border:"1px solid rgba(212,170,80,0.3)", padding:"2px 8px", borderRadius:999 }}>
              🥈 SILVER
            </span>
          </div>
          <div style={{ fontSize:13, color:"rgba(255,255,255,0.45)", marginBottom:4 }}>@misha_zeus</div>
          <div style={{ display:"flex", alignItems:"center", gap:5, fontSize:12, color:"rgba(255,255,255,0.38)" }}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
            с 10 июня 2026 г.
          </div>
        </div>
        {/* avatar */}
        <div style={{ width:54, height:54, borderRadius:"50%", background:"linear-gradient(135deg,#2a2a3a,#1a1a2a)", border:"2px solid rgba(255,255,255,0.15)", overflow:"hidden", display:"flex", alignItems:"center", justifyContent:"center", fontSize:13, fontWeight:700, color:"rgba(255,255,255,0.5)" }}>МЗ</div>
      </div>

      {/* tabs */}
      <div style={{ display:"flex", padding:"0 14px 16px", gap:2 }}>
        {(["channels","tokens","shop","tasks"] as Tab[]).map((t, i) => {
          const labels = ["Каналы","Токены","Магазин","Задания"];
          const active = activeTab === t;
          return (
            <button key={t} onClick={() => setActiveTab(t)} style={{
              flex:1, padding:"8px 0", borderRadius:20, fontSize:13, fontWeight: active ? 600 : 400,
              background: active ? "rgba(255,255,255,0.92)" : "transparent",
              color: active ? "#0d1628" : "rgba(255,255,255,0.45)",
              border:"none", cursor:"pointer",
            }}>
              {labels[i]}
            </button>
          );
        })}
      </div>
    </>
  );

  /* ── channels: empty state ── */
  const ChannelsEmpty = () => (
    <div style={{ padding:"0 16px 24px" }}>
      {/* add circle */}
      <div style={{ display:"flex", flexDirection:"column", alignItems:"center", width:64, marginBottom:16 }}>
        <div style={{ width:56, height:56, borderRadius:"50%", border:"1.5px dashed rgba(255,255,255,0.3)", display:"flex", alignItems:"center", justifyContent:"center", marginBottom:6 }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2"><path d="M12 5v14M5 12h14"/></svg>
        </div>
        <span style={{ fontSize:11, color:"rgba(255,255,255,0.45)", textAlign:"center", lineHeight:1.3 }}>Добавить<br/>канал</span>
      </div>

      {/* empty state card */}
      <div style={{ background:"rgba(255,255,255,0.06)", borderRadius:16, padding:"28px 20px", textAlign:"center", marginBottom:16, border:"1px solid rgba(255,255,255,0.08)" }}>
        <div style={{ marginBottom:14, display:"flex", justifyContent:"center" }}><SatelliteIcon /></div>
        <div style={{ fontSize:15, fontWeight:600, marginBottom:6 }}>Нет добавленных каналов</div>
        <div style={{ fontSize:13, color:"rgba(255,255,255,0.45)", lineHeight:1.5 }}>
          Добавь свой Telegram-канал, чтобы видео появились в ленте Trends
        </div>
      </div>

      {/* how it works */}
      <div style={{ padding:"0 4px 16px" }}>
        <div style={{ fontSize:13, fontWeight:600, marginBottom:10 }}>Как это работает</div>
        {[
          "Нажми «Добавить свой канал» ниже",
          "Следуй инструкциям в боте @ContentifyAI_Bot",
          "Добавь бота как администратора в канал",
          "После одобрения видео появятся в ленте",
        ].map((s, i) => (
          <div key={i} style={{ display:"flex", gap:8, marginBottom:6, fontSize:13, color:"rgba(255,255,255,0.55)" }}>
            <span style={{ color:"rgba(255,255,255,0.35)", minWidth:14 }}>{i+1}.</span>
            <span>{s}</span>
          </div>
        ))}
      </div>

      {/* add channel button card */}
      <div style={{ background:"rgba(255,255,255,0.07)", borderRadius:14, padding:"14px 16px", display:"flex", alignItems:"center", gap:14, border:"1px solid rgba(255,255,255,0.1)" }}>
        <div style={{ width:40, height:40, borderRadius:10, background:"rgba(255,255,255,0.1)", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.8"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6 6l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16z"/></svg>
        </div>
        <div style={{ flex:1 }}>
          <div style={{ fontSize:14, fontWeight:600 }}>Добавить свой канал</div>
          <div style={{ fontSize:12, color:"rgba(255,255,255,0.45)", marginTop:2 }}>Монетизируй контент через Trends</div>
        </div>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
      </div>
    </div>
  );

  /* ── channels: has channel ── */
  const ChannelsWithChannel = () => (
    <div style={{ padding:"0 16px 24px" }}>
      {/* channel bubbles */}
      <div style={{ display:"flex", gap:20, marginBottom:16 }}>
        <div style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:6 }}>
          <div style={{ width:56, height:56, borderRadius:"50%", background:"linear-gradient(145deg,#7c3aed,#4c1d95)", border:"2px solid rgba(140,92,246,0.6)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:14, fontWeight:700 }}>МО</div>
          <span style={{ fontSize:11, color:"rgba(255,255,255,0.7)" }}>Мой канал</span>
        </div>
        <div style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:6 }}>
          <div style={{ width:56, height:56, borderRadius:"50%", border:"1.5px dashed rgba(255,255,255,0.25)", display:"flex", alignItems:"center", justifyContent:"center" }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="2"><path d="M12 5v14M5 12h14"/></svg>
          </div>
          <span style={{ fontSize:11, color:"rgba(255,255,255,0.45)" }}>Ещё канал</span>
        </div>
      </div>

      {/* channel info card */}
      <div style={{ background:"rgba(15,18,32,0.85)", borderRadius:16, padding:16, marginBottom:16, border:"1px solid rgba(255,255,255,0.07)" }}>
        <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:14 }}>
          <span style={{ fontSize:15, fontWeight:600 }}>Мой канал</span>
          <span style={{ display:"flex", alignItems:"center", gap:4, fontSize:12, color:"rgba(255,255,255,0.7)" }}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
            Одобрен
          </span>
        </div>

        {/* action buttons */}
        <div style={{ display:"flex", gap:10, marginBottom:16 }}>
          <button style={{ flex:1, padding:"10px 0", borderRadius:12, background:"rgba(255,255,255,0.92)", color:"#0d1628", fontSize:13, fontWeight:600, border:"none", cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center", gap:6 }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
            Страница Trends
          </button>
          <button style={{ flex:1, padding:"10px 0", borderRadius:12, background:"transparent", color:"rgba(255,255,255,0.7)", fontSize:13, fontWeight:500, border:"1px solid rgba(255,255,255,0.2)", cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center", gap:6 }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
            Редактировать
          </button>
        </div>

        {/* stats */}
        <div style={{ display:"grid", gridTemplateColumns:"repeat(5,1fr)", gap:6, marginBottom:16 }}>
          {["Видео","Просмотры","Лайки","Переходов","Подписок"].map((s) => (
            <div key={s} style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:3, padding:"8px 2px", borderRadius:10, background:"rgba(255,255,255,0.05)" }}>
              <span style={{ fontSize:15, fontWeight:700 }}>0</span>
              <span style={{ fontSize:9, color:"rgba(255,255,255,0.38)", textAlign:"center", lineHeight:1.2 }}>{s}</span>
            </div>
          ))}
        </div>

        {/* rewards */}
        <div style={{ marginBottom:12 }}>
          <div style={{ fontSize:10, color:"rgba(255,255,255,0.35)", letterSpacing:0.8, marginBottom:6 }}>НАГРАДЫ ПОДПИСЧИКАМ</div>
          <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between" }}>
            <div>
              <div style={{ fontSize:16, fontWeight:700, marginBottom:2 }}>0 <span style={{ fontSize:13, fontWeight:400, color:"rgba(255,255,255,0.6)" }}>TRND</span></div>
              <div style={{ fontSize:11, color:"rgba(255,255,255,0.35)" }}>Пополни баланс чтобы начать назначать<br/>награды</div>
            </div>
            <button style={{ display:"flex", alignItems:"center", gap:5, padding:"8px 14px", borderRadius:10, background:"rgba(255,255,255,0.08)", border:"1px solid rgba(255,255,255,0.12)", color:"rgba(255,255,255,0.8)", fontSize:13, fontWeight:600, cursor:"pointer" }}>
              ⭐ Пополнить
            </button>
          </div>
        </div>

        {/* hint */}
        <div style={{ fontSize:12, color:"rgba(255,255,255,0.4)", lineHeight:1.5 }}>
          💡 Купи Stars → они станут TRND → выбери видео → установи награду
        </div>
      </div>

      {/* add video button */}
      <button style={{ width:"100%", padding:"15px 0", borderRadius:14, background:"rgba(255,255,255,0.9)", color:"#0d1628", fontSize:15, fontWeight:600, border:"none", cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center", gap:8, marginBottom:10 }}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 5v14M5 12h14"/></svg>
        Добавить видео в ленту
      </button>

      {/* published / review tabs */}
      <div style={{ display:"flex", gap:8 }}>
        <button style={{ flex:1, padding:"10px 0", borderRadius:12, background:"rgba(255,255,255,0.9)", color:"#0d1628", fontSize:13, fontWeight:600, border:"none", cursor:"pointer" }}>Опубликовано</button>
        <button style={{ flex:1, padding:"10px 0", borderRadius:12, background:"transparent", color:"rgba(255,255,255,0.5)", fontSize:13, border:"1px solid rgba(255,255,255,0.12)", cursor:"pointer" }}>На проверке</button>
      </div>
    </div>
  );

  /* ── tokens ── */
  const Tokens = () => (
    <div style={{ padding:"0 16px 24px" }}>
      {/* balance */}
      <div style={{ textAlign:"center", paddingBottom:20 }}>
        <div style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:12, marginBottom:4 }}>
          <span style={{ fontSize:52, fontWeight:700, lineHeight:1 }}>40</span>
          <div style={{ width:36, height:36, borderRadius:"50%", background:"rgba(255,255,255,0.12)", border:"1.5px solid rgba(255,255,255,0.2)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:15, fontWeight:700 }}>T</div>
        </div>
        <div style={{ fontSize:13, color:"rgba(255,255,255,0.55)", marginBottom:6 }}>TRND</div>
        <div style={{ fontSize:12, color:"rgba(255,255,255,0.4)", lineHeight:1.6, maxWidth:260, margin:"0 auto" }}>
          Trends начисляет TRND за просмотры, стрики и приглашения друзей
        </div>
      </div>

      {/* invite card */}
      <div style={{ background:"rgba(10,12,24,0.9)", borderRadius:16, padding:16, marginBottom:16, border:"1px solid rgba(255,255,255,0.07)" }}>
        <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:12 }}>
          <div>
            <div style={{ fontSize:15, fontWeight:600, marginBottom:2 }}>Пригласить друга</div>
            <div style={{ fontSize:12, color:"rgba(255,255,255,0.45)" }}>+13000 Т вам и другу</div>
          </div>
          <button style={{ display:"flex", alignItems:"center", gap:6, padding:"7px 12px", borderRadius:10, background:"rgba(255,255,255,0.08)", border:"1px solid rgba(255,255,255,0.1)", color:"rgba(255,255,255,0.8)", fontSize:13, fontWeight:600, cursor:"pointer" }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            0
          </button>
        </div>

        {/* link row */}
        <div style={{ display:"flex", alignItems:"center", background:"rgba(255,255,255,0.06)", borderRadius:10, padding:"10px 12px", marginBottom:12, gap:8 }}>
          <span style={{ flex:1, fontSize:12, color:"rgba(255,255,255,0.45)", overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap" }}>
            t.me/ContentifyAI_Bot?startapp=ref_288113313
          </span>
          <button style={{ background:"none", border:"none", cursor:"pointer", padding:4 }}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
          </button>
          <button style={{ background:"none", border:"none", cursor:"pointer", padding:4 }}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>
          </button>
        </div>

        <button style={{ width:"100%", padding:"13px 0", borderRadius:12, background:"rgba(255,255,255,0.9)", color:"#0d1628", fontSize:14, fontWeight:600, border:"none", cursor:"pointer" }}>
          Поделиться ссылкой
        </button>
      </div>

      {/* sub-tabs */}
      <div style={{ display:"flex", gap:4, marginBottom:14 }}>
        {["Активность","Друзья","Бейджи"].map((t) => (
          <button key={t} onClick={() => setTokenSub(t)} style={{
            flex:1, padding:"9px 0", borderRadius:20, fontSize:13,
            fontWeight: tokenSub === t ? 600 : 400,
            background: tokenSub === t ? "rgba(255,255,255,0.9)" : "transparent",
            color: tokenSub === t ? "#0d1628" : "rgba(255,255,255,0.45)",
            border:"none", cursor:"pointer",
          }}>
            {t}
          </button>
        ))}
      </div>

      {tokenSub === "Активность" && (
        <div>
          <div style={{ fontSize:11, color:"rgba(255,255,255,0.35)", letterSpacing:0.8, marginBottom:12 }}>КАК ЗАРАБАТЫВАТЬ</div>
          {[
            { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1.8"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>, label:"Просмотр видео", sub:"25–100 Coins / видео, до 100 видео/день", reward:"25–100 С" },
            { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1.8"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>, label:"Ежедневный чекин", sub:"50–500 Coins, 30-дневный цикл", reward:"50–500 С" },
            { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1.8"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>, label:"Приглашение друга", sub:"+1000 Coins за каждого", reward:"+1000 С" },
          ].map((item) => (
            <div key={item.label} style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"13px 14px", borderRadius:14, background:"rgba(255,255,255,0.05)", marginBottom:8, border:"1px solid rgba(255,255,255,0.06)" }}>
              <div style={{ display:"flex", alignItems:"center", gap:12 }}>
                <div style={{ width:36, height:36, borderRadius:10, background:"rgba(255,255,255,0.07)", display:"flex", alignItems:"center", justifyContent:"center" }}>{item.icon}</div>
                <div>
                  <div style={{ fontSize:13, fontWeight:600, marginBottom:2 }}>{item.label}</div>
                  <div style={{ fontSize:11, color:"rgba(255,255,255,0.38)" }}>{item.sub}</div>
                </div>
              </div>
              <span style={{ fontSize:13, fontWeight:700, color:"rgba(255,255,255,0.85)", flexShrink:0 }}>{item.reward}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  /* ── shop ── */
  const Shop = () => (
    <div style={{ padding:"0 16px 24px" }}>
      <div style={{ display:"flex", gap:4, marginBottom:16 }}>
        {["Бонусы","Партнеры","Розыгрыш","Boost"].map((t) => (
          <button key={t} onClick={() => setShopSub(t)} style={{
            flex:1, padding:"9px 0", borderRadius:20, fontSize:12,
            fontWeight: shopSub === t ? 600 : 400,
            background: shopSub === t ? "rgba(255,255,255,0.9)" : "transparent",
            color: shopSub === t ? "#0d1628" : "rgba(255,255,255,0.45)",
            border:"none", cursor:"pointer",
          }}>
            {t}
          </button>
        ))}
      </div>
      <div style={{ background:"rgba(255,255,255,0.06)", borderRadius:16, padding:"32px 20px", textAlign:"center", border:"1px solid rgba(255,255,255,0.08)" }}>
        <div style={{ fontSize:15, fontWeight:600, marginBottom:8 }}>Офферы загружаются</div>
        <div style={{ fontSize:13, color:"rgba(255,255,255,0.42)", lineHeight:1.6 }}>
          Скоро здесь появятся подписки, сервисы и<br/>гифт-карты от партнёров — обменивай<br/>токены на выгоду
        </div>
      </div>
    </div>
  );

  /* ── tasks ── */
  const Tasks = () => (
    <div style={{ padding:"0 16px 24px" }}>
      <div style={{ fontSize:11, color:"rgba(255,255,255,0.35)", letterSpacing:0.8, marginBottom:12 }}>КВЕСТЫ ДНЯ · 10 ИЮНЯ</div>

      {/* all quests bonus */}
      <div style={{ background:"rgba(255,255,255,0.06)", borderRadius:14, padding:"14px 16px", marginBottom:14, display:"flex", alignItems:"center", justifyContent:"space-between", border:"1px solid rgba(255,255,255,0.08)" }}>
        <div>
          <div style={{ fontSize:14, fontWeight:600 }}>Бонус за все 4 квеста</div>
          <div style={{ fontSize:12, color:"rgba(255,255,255,0.4)", marginTop:2 }}>Выполнено 0/4</div>
        </div>
        <span style={{ padding:"7px 12px", borderRadius:10, background:"rgba(255,255,255,0.08)", border:"1px solid rgba(255,255,255,0.12)", fontSize:13, fontWeight:600, color:"rgba(255,255,255,0.8)" }}>+150 TRND</span>
      </div>

      {/* quest cards */}
      {[
        { title:"Посмотри 20 видео", sub:"Любых видео в ленте", reward:"+30", progress:20, total:20, done:true, barColor:"linear-gradient(90deg,#e8a020,#f0c040)" },
        { title:"Зацени 3 разные категории", sub:"Расширь интересы", reward:"+30", progress:0, total:3, done:false, barColor:"linear-gradient(90deg,#3b82f6,#2563eb)" },
        { title:"Посмотри 50 видео", sub:"Залипни на ленте", reward:"+60", progress:46, total:50, done:false, barColor:"linear-gradient(90deg,#3b82f6,#2563eb)" },
      ].map((q) => (
        <div key={q.title} style={{ background:"rgba(12,15,28,0.9)", borderRadius:16, padding:16, marginBottom:12, border:"1px solid rgba(255,255,255,0.07)" }}>
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:10 }}>
            <div>
              <div style={{ fontSize:14, fontWeight:600, marginBottom:3 }}>{q.title}</div>
              <div style={{ fontSize:12, color:"rgba(255,255,255,0.45)" }}>{q.sub}</div>
            </div>
            <div style={{ textAlign:"right", flexShrink:0 }}>
              <div style={{ fontSize:15, fontWeight:700 }}>{q.reward}</div>
              <div style={{ fontSize:10, color:"rgba(255,255,255,0.35)" }}>TRND</div>
            </div>
          </div>

          <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:8 }}>
            <span style={{ fontSize:12, color:"rgba(255,255,255,0.35)" }}>Прогресс</span>
            <span style={{ fontSize:12, color:"rgba(255,255,255,0.55)" }}>{q.progress} / {q.total}</span>
          </div>

          <div style={{ height:5, borderRadius:999, background:"rgba(255,255,255,0.1)", marginBottom:12, overflow:"hidden" }}>
            <div style={{ height:"100%", borderRadius:999, background:q.barColor, width:`${(q.progress/q.total)*100}%` }} />
          </div>

          {q.done ? (
            <button style={{ width:"100%", padding:"13px 0", borderRadius:12, background:"rgba(255,255,255,0.92)", color:"#0d1628", fontSize:14, fontWeight:600, border:"none", cursor:"pointer" }}>
              Получить награду
            </button>
          ) : (
            <button style={{ width:"100%", padding:"13px 0", borderRadius:12, background:"rgba(255,255,255,0.06)", color:"rgba(255,255,255,0.3)", fontSize:14, border:"1px solid rgba(255,255,255,0.07)", cursor:"default" }}>
              Прогресс...
            </button>
          )}
        </div>
      ))}
    </div>
  );

  return (
    <div style={{
      width:390, minHeight:"100vh", overflowX:"hidden",
      background:"linear-gradient(180deg, #1e2d50 0%, #1a2540 20%, #131f38 50%, #0d1628 100%)",
      fontFamily:"'SF Pro Display',-apple-system,BlinkMacSystemFont,sans-serif",
      color:"#fff", margin:"0 auto", position:"relative",
    }}>
      {/* atmospheric glow */}
      <div style={{
        position:"fixed", top:120, left:"50%", transform:"translateX(-50%)",
        width:300, height:300, borderRadius:"50%",
        background:"radial-gradient(circle, rgba(50,80,160,0.35) 0%, rgba(30,50,120,0.1) 60%, transparent 100%)",
        filter:"blur(40px)", pointerEvents:"none", zIndex:0,
      }} />

      <div style={{ position:"relative", zIndex:1 }}>
        <Header />
        <div style={{ overflowY:"auto", maxHeight:"calc(100vh - 248px)" }}>
          {activeTab === "channels" && (hasChannel ? <ChannelsWithChannel /> : <ChannelsEmpty />)}
          {activeTab === "tokens"   && <Tokens />}
          {activeTab === "shop"     && <Shop />}
          {activeTab === "tasks"    && <Tasks />}
        </div>
      </div>
    </div>
  );
}
