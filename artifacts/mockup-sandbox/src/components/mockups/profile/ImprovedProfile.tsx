import { useState, useEffect, useRef } from "react";

type Tab = "channels" | "tokens" | "shop" | "tasks";

/* ─── Animated Canvas Background ─── */
function AnimatedBG() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    let raf: number;
    let t = 0;

    const W = canvas.width = 390;
    const H = canvas.height = 844;

    // Orbs — big soft blobs that drift slowly
    const orbs = [
      { x: 80,  y: 200, r: 220, cx: 80,  cy: 200, vx: 0.18, vy: 0.12, color: [30, 80, 220]  },
      { x: 320, y: 600, r: 200, cx: 320, cy: 600, vx: -0.14, vy: -0.10, color: [80, 20, 180] },
      { x: 200, y: 420, r: 180, cx: 200, cy: 420, vx: 0.10, vy: 0.16,  color: [10, 120, 200] },
      { x: 50,  y: 750, r: 160, cx: 50,  cy: 750, vx: 0.20, vy: -0.08, color: [60, 40, 200]  },
      { x: 360, y: 100, r: 150, cx: 360, cy: 100, vx: -0.12, vy: 0.14, color: [20, 60, 160]  },
    ];

    // Particles
    const particles: { x: number; y: number; r: number; vx: number; vy: number; alpha: number; }[] = [];
    for (let i = 0; i < 55; i++) {
      particles.push({
        x: Math.random() * W,
        y: Math.random() * H,
        r: Math.random() * 1.8 + 0.4,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        alpha: Math.random() * 0.5 + 0.15,
      });
    }

    function draw() {
      t += 0.005;

      // Base dark background
      ctx.fillStyle = "#060c1e";
      ctx.fillRect(0, 0, W, H);

      // Draw orbs
      for (const o of orbs) {
        o.cx += o.vx;
        o.cy += o.vy;
        // bounce inside canvas
        if (o.cx < -o.r) o.cx = W + o.r;
        if (o.cx > W + o.r) o.cx = -o.r;
        if (o.cy < -o.r) o.cy = H + o.r;
        if (o.cy > H + o.r) o.cy = -o.r;

        const [r, g, b] = o.color;
        const grad = ctx.createRadialGradient(o.cx, o.cy, 0, o.cx, o.cy, o.r);
        grad.addColorStop(0, `rgba(${r},${g},${b},0.55)`);
        grad.addColorStop(0.5, `rgba(${r},${g},${b},0.2)`);
        grad.addColorStop(1, `rgba(${r},${g},${b},0)`);
        ctx.beginPath();
        ctx.arc(o.cx, o.cy, o.r, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();
      }

      // Subtle scanline-like wave overlay
      for (let y = 0; y < H; y += 3) {
        const alpha = 0.018 * Math.sin(y * 0.04 + t * 2);
        if (alpha > 0) {
          ctx.fillStyle = `rgba(100,140,255,${alpha})`;
          ctx.fillRect(0, y, W, 1.5);
        }
      }

      // Particles
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = W;
        if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H;
        if (p.y > H) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(160,200,255,${p.alpha})`;
        ctx.fill();
      }

      // Top vignette
      const vTop = ctx.createLinearGradient(0, 0, 0, 160);
      vTop.addColorStop(0, "rgba(4,8,24,0.7)");
      vTop.addColorStop(1, "rgba(4,8,24,0)");
      ctx.fillStyle = vTop;
      ctx.fillRect(0, 0, W, 160);

      // Bottom vignette
      const vBot = ctx.createLinearGradient(0, H - 200, 0, H);
      vBot.addColorStop(0, "rgba(4,8,24,0)");
      vBot.addColorStop(1, "rgba(4,8,24,0.75)");
      ctx.fillStyle = vBot;
      ctx.fillRect(0, H - 200, W, 200);

      raf = requestAnimationFrame(draw);
    }

    draw();
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0, left: "50%",
        transform: "translateX(-50%)",
        width: 390, height: "100%",
        zIndex: 0,
        filter: "blur(22px) saturate(1.5)",
        transform: "translateX(-50%) scale(1.15)",
      }}
    />
  );
}

/* ─── Glass Styles ─── */
const glassCard: React.CSSProperties = {
  background: "rgba(255,255,255,0.07)",
  backdropFilter: "blur(28px) saturate(1.5)",
  WebkitBackdropFilter: "blur(28px) saturate(1.5)",
  border: "1px solid rgba(255,255,255,0.13)",
  boxShadow: "0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.18), inset 0 -1px 0 rgba(0,0,0,0.15)",
};

const liquidGlassBtn: React.CSSProperties = {
  background: "linear-gradient(145deg, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.06) 55%, rgba(255,255,255,0.14) 100%)",
  backdropFilter: "blur(20px) saturate(1.7)",
  WebkitBackdropFilter: "blur(20px) saturate(1.7)",
  border: "1px solid rgba(255,255,255,0.24)",
  boxShadow: "0 4px 24px rgba(0,0,0,0.28), inset 0 1.5px 0 rgba(255,255,255,0.4), inset 0 -1px 0 rgba(0,0,0,0.14), inset 1px 0 0 rgba(255,255,255,0.18)",
  position: "relative",
  overflow: "hidden",
};

const liquidGlassBtnBlue: React.CSSProperties = {
  background: "linear-gradient(145deg, rgba(100,165,255,0.55) 0%, rgba(45,110,245,0.28) 55%, rgba(90,155,255,0.48) 100%)",
  backdropFilter: "blur(20px) saturate(1.9)",
  WebkitBackdropFilter: "blur(20px) saturate(1.9)",
  border: "1px solid rgba(140,190,255,0.42)",
  boxShadow: "0 4px 28px rgba(79,142,247,0.38), inset 0 1.5px 0 rgba(200,225,255,0.55), inset 0 -1px 0 rgba(0,20,80,0.22), inset 1px 0 0 rgba(160,200,255,0.28)",
  position: "relative",
  overflow: "hidden",
};

const liquidGlassBtnGold: React.CSSProperties = {
  background: "linear-gradient(145deg, rgba(255,215,80,0.72) 0%, rgba(245,166,35,0.42) 55%, rgba(255,200,60,0.65) 100%)",
  backdropFilter: "blur(20px) saturate(1.9)",
  WebkitBackdropFilter: "blur(20px) saturate(1.9)",
  border: "1px solid rgba(255,225,100,0.52)",
  boxShadow: "0 4px 24px rgba(247,201,72,0.35), inset 0 1.5px 0 rgba(255,245,170,0.65), inset 0 -1px 0 rgba(100,60,0,0.2)",
  position: "relative",
  overflow: "hidden",
};

function GlassShine() {
  return (
    <span style={{
      position: "absolute",
      top: 0, left: "-60%",
      width: "50%", height: "100%",
      background: "linear-gradient(105deg, transparent 20%, rgba(255,255,255,0.32) 50%, transparent 80%)",
      transform: "skewX(-20deg)",
      pointerEvents: "none",
    }} />
  );
}

/* ─── Main Component ─── */
export function ImprovedProfile() {
  const [activeTab, setActiveTab] = useState<Tab>("channels");
  const [shopTab, setShopTab]     = useState("bonuses");
  const [tokenTab, setTokenTab]   = useState("activity");

  return (
    <div style={{
      position: "relative",
      width: 390,
      minHeight: "100vh",
      overflow: "hidden",
      fontFamily: "'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif",
      color: "#fff",
      margin: "0 auto",
    }}>
      <AnimatedBG />

      {/* Dark overlay to unify look */}
      <div style={{
        position: "fixed",
        inset: 0,
        background: "linear-gradient(160deg, rgba(6,12,30,0.42) 0%, rgba(3,8,20,0.52) 100%)",
        zIndex: 1,
      }} />

      {/* All UI content */}
      <div style={{ position: "relative", zIndex: 2, display: "flex", flexDirection: "column", minHeight: "100vh" }}>

        {/* Status Bar */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 20px 4px", fontSize: 13, fontWeight: 600 }}>
          <span>14:34</span>
          <div style={{ background: "rgba(255,255,255,0.85)", borderRadius: 4, padding: "2px 7px", color: "#060c1e", fontSize: 11, fontWeight: 700 }}>51%</div>
        </div>

        {/* Nav */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "4px 16px 8px" }}>
          <button style={{ ...liquidGlassBtn, display: "flex", alignItems: "center", gap: 6, padding: "6px 14px", borderRadius: 999, fontSize: 13, color: "rgba(255,255,255,0.85)", cursor: "pointer" }}>
            <GlassShine />
            <svg width="7" height="12" viewBox="0 0 7 12" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 1L1 6l5 5"/></svg>
            Назад
          </button>
          <div style={{ display: "flex", gap: 8 }}>
            {[
              <svg key="v" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><polyline points="6 9 12 15 18 9"/></svg>,
              <svg key="d" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>,
            ].map((icon, i) => (
              <button key={i} style={{ ...liquidGlassBtn, width: 32, height: 32, borderRadius: 999, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
                <GlassShine />{icon}
              </button>
            ))}
          </div>
        </div>

        {/* Header Card */}
        <div style={{ ...glassCard, margin: "0 16px 12px", borderRadius: 24, padding: 16 }}>
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 12 }}>
            <div style={{
              width: 44, height: 44, borderRadius: 14, display: "flex", alignItems: "center", justifyContent: "center",
              background: "linear-gradient(135deg, rgba(79,142,247,0.65), rgba(45,110,245,0.45))",
              border: "1px solid rgba(120,170,255,0.42)",
              boxShadow: "inset 0 1.5px 0 rgba(180,210,255,0.4), 0 4px 16px rgba(79,142,247,0.32)",
            }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill="white" stroke="rgba(255,255,255,0.55)" strokeWidth="0.5"/>
              </svg>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ textAlign: "right" }}>
                <div style={{ fontSize: 10, color: "rgba(255,255,255,0.42)", letterSpacing: 0.3 }}>Баланс TRND</div>
                <div style={{ fontSize: 28, fontWeight: 900, lineHeight: 1, background: "linear-gradient(135deg, #ffe566, #f5a623)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>40</div>
              </div>
              <button style={{ ...liquidGlassBtn, width: 32, height: 32, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
                <GlassShine />
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72 1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
              </button>
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                <span style={{ fontSize: 20, fontWeight: 800, letterSpacing: -0.3 }}>Миша Зевс</span>
                <span style={{
                  display: "flex", alignItems: "center", gap: 4, padding: "2px 8px", borderRadius: 999, fontSize: 11, fontWeight: 600,
                  background: "linear-gradient(135deg, rgba(212,175,55,0.3), rgba(192,140,30,0.15))",
                  color: "#f0c96a", border: "1px solid rgba(240,201,106,0.35)",
                  backdropFilter: "blur(8px)", boxShadow: "inset 0 1px 0 rgba(255,230,120,0.25)",
                }}>
                  🥈 SILVER
                </span>
              </div>
              <div style={{ fontSize: 13, color: "rgba(255,255,255,0.42)" }}>@misha_zeus</div>
              <div style={{ display: "flex", alignItems: "center", gap: 4, marginTop: 4, fontSize: 11, color: "rgba(255,255,255,0.32)" }}>
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                с 10 июня 2026 г.
              </div>
            </div>
            <div style={{
              width: 56, height: 56, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 16, fontWeight: 700, color: "#a8d0ff",
              background: "linear-gradient(135deg, rgba(79,142,247,0.38), rgba(30,60,140,0.28))",
              border: "2px solid rgba(100,160,255,0.42)",
              boxShadow: "0 0 22px rgba(79,142,247,0.18), inset 0 1.5px 0 rgba(180,210,255,0.3)",
              backdropFilter: "blur(12px)",
            }}>МЗ</div>
          </div>
        </div>

        {/* Tab Nav */}
        <div style={{
          margin: "0 16px 12px", padding: 4, borderRadius: 20, display: "flex", gap: 2,
          background: "rgba(0,0,0,0.28)", backdropFilter: "blur(24px)",
          border: "1px solid rgba(255,255,255,0.1)", boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06)",
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
                style={active ? {
                  flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 2,
                  padding: "7px 0", borderRadius: 16, cursor: "pointer",
                  background: "linear-gradient(145deg, rgba(79,142,247,0.42), rgba(45,110,245,0.22))",
                  backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)",
                  color: "#8ecfff", border: "1px solid rgba(110,175,255,0.35)",
                  boxShadow: "inset 0 1.5px 0 rgba(190,225,255,0.32), 0 2px 14px rgba(79,142,247,0.22)",
                  fontSize: 11, fontWeight: 600, position: "relative", overflow: "hidden",
                } : {
                  flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 2,
                  padding: "7px 0", borderRadius: 16, cursor: "pointer",
                  background: "transparent", color: "rgba(255,255,255,0.35)",
                  border: "1px solid transparent", fontSize: 11, fontWeight: 400,
                }}
              >
                {active && <GlassShine />}
                <span style={{ fontSize: 17 }}>{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Scrollable Content */}
        <div style={{ flex: 1, margin: "0 16px", paddingBottom: 24, overflowY: "auto", maxHeight: "calc(100vh - 308px)" }}>

          {/* ── CHANNELS ── */}
          {activeTab === "channels" && (
            <div>
              <div style={{ display: "flex", gap: 12, marginBottom: 16 }}>
                {[
                  { label: "Мой канал", initials: "МО", active: true },
                  { label: "Ещё канал", initials: "+", active: false },
                ].map((ch) => (
                  <div key={ch.label} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
                    <div style={ch.active ? {
                      width: 56, height: 56, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: 14, fontWeight: 700, color: "#fff",
                      background: "linear-gradient(135deg, rgba(79,142,247,0.58), rgba(45,110,245,0.38))",
                      border: "2px solid rgba(120,170,255,0.5)",
                      boxShadow: "0 0 20px rgba(79,142,247,0.28), inset 0 1.5px 0 rgba(180,210,255,0.42)",
                      backdropFilter: "blur(12px)",
                    } : {
                      width: 56, height: 56, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center",
                      background: "rgba(255,255,255,0.05)", border: "2px dashed rgba(255,255,255,0.18)", color: "rgba(255,255,255,0.38)",
                      backdropFilter: "blur(8px)", cursor: "pointer",
                    }}>
                      {ch.initials === "+" ? <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M5 12h14"/></svg> : ch.initials}
                    </div>
                    <span style={{ fontSize: 10, color: "rgba(255,255,255,0.42)" }}>{ch.label}</span>
                  </div>
                ))}
              </div>

              <div style={{ ...glassCard, borderRadius: 24, padding: 16, marginBottom: 16 }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
                  <span style={{ fontSize: 16, fontWeight: 700 }}>Мой канал</span>
                  <span style={{
                    display: "flex", alignItems: "center", gap: 4, fontSize: 11, padding: "4px 10px", borderRadius: 999, fontWeight: 600,
                    background: "linear-gradient(135deg, rgba(52,199,89,0.28), rgba(30,160,60,0.14))",
                    color: "#4ddb7a", border: "1px solid rgba(52,199,89,0.33)",
                    backdropFilter: "blur(8px)", boxShadow: "inset 0 1px 0 rgba(100,255,140,0.18)",
                  }}>✓ Одобрен</span>
                </div>

                <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
                  {[
                    { label: "Trends", icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>, style: { ...liquidGlassBtnBlue, color: "#b0d8ff" } },
                    { label: "Редактировать", icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>, style: { ...liquidGlassBtn, color: "rgba(255,255,255,0.7)" } },
                  ].map((btn) => (
                    <button key={btn.label} style={{ ...btn.style, flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 6, padding: "10px 0", borderRadius: 18, fontSize: 13, fontWeight: 600, cursor: "pointer" }}>
                      <GlassShine />{btn.icon}{btn.label}
                    </button>
                  ))}
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 6, marginBottom: 16 }}>
                  {["Видео","Просм.","Лайки","Перех.","Подп."].map((s) => (
                    <div key={s} style={{
                      display: "flex", flexDirection: "column", alignItems: "center", padding: "10px 0", borderRadius: 16,
                      background: "rgba(255,255,255,0.06)", backdropFilter: "blur(10px)",
                      border: "1px solid rgba(255,255,255,0.1)", boxShadow: "inset 0 1px 0 rgba(255,255,255,0.1)",
                    }}>
                      <span style={{ fontSize: 16, fontWeight: 800 }}>0</span>
                      <span style={{ fontSize: 9, color: "rgba(255,255,255,0.36)", textAlign: "center", lineHeight: 1.2 }}>{s}</span>
                    </div>
                  ))}
                </div>

                <div style={{
                  display: "flex", alignItems: "center", justifyContent: "space-between",
                  padding: "14px", borderRadius: 18, marginBottom: 12,
                  background: "linear-gradient(135deg, rgba(247,201,72,0.1), rgba(245,166,35,0.05))",
                  backdropFilter: "blur(12px)", border: "1px solid rgba(247,201,72,0.2)",
                  boxShadow: "inset 0 1px 0 rgba(255,230,100,0.1)",
                }}>
                  <div>
                    <div style={{ fontSize: 9, color: "rgba(255,255,255,0.38)", letterSpacing: 0.8, marginBottom: 2 }}>НАГРАДЫ ПОДПИСЧИКАМ</div>
                    <div style={{ fontSize: 20, fontWeight: 900, background: "linear-gradient(90deg, #ffe566, #f5a623)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>0 <span style={{ fontSize: 12, fontWeight: 600 }}>TRND</span></div>
                    <div style={{ fontSize: 10, color: "rgba(255,255,255,0.26)" }}>Пополни баланс</div>
                  </div>
                  <button style={{ ...liquidGlassBtnGold, display: "flex", alignItems: "center", gap: 6, padding: "8px 14px", borderRadius: 14, fontSize: 13, fontWeight: 700, color: "#2a1400", cursor: "pointer" }}>
                    <GlassShine />⭐ Пополнить
                  </button>
                </div>

                <div style={{ padding: 12, borderRadius: 16, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", fontSize: 11, color: "rgba(255,255,255,0.35)", lineHeight: 1.7, backdropFilter: "blur(8px)" }}>
                  💡 Купи Stars → они станут TRND → выбери видео → установи награду
                </div>
              </div>

              <button style={{ ...liquidGlassBtnBlue, width: "100%", padding: "14px 0", borderRadius: 20, fontSize: 14, fontWeight: 700, color: "#d0eaff", display: "flex", alignItems: "center", justifyContent: "center", gap: 8, marginBottom: 10, cursor: "pointer", boxShadow: "0 6px 28px rgba(79,142,247,0.42), inset 0 1.5px 0 rgba(200,225,255,0.52)" }}>
                <GlassShine />
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 5v14M5 12h14"/></svg>
                Добавить видео в ленту
              </button>

              <div style={{ display: "flex", gap: 8 }}>
                {[{ label: "Опубликовано", active: true }, { label: "На проверке", active: false }].map((t) => (
                  <button key={t.label} style={t.active ? { ...liquidGlassBtn, flex: 1, padding: "10px 0", borderRadius: 16, fontSize: 13, fontWeight: 600, color: "#fff", cursor: "pointer" } : { flex: 1, padding: "10px 0", borderRadius: 16, fontSize: 13, color: "rgba(255,255,255,0.35)", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", cursor: "pointer" }}>
                    {t.active && <GlassShine />}{t.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* ── TOKENS ── */}
          {activeTab === "tokens" && (
            <div>
              <div style={{ textAlign: "center", marginBottom: 20 }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 4 }}>
                  <span style={{ fontSize: 58, fontWeight: 900, background: "linear-gradient(135deg, #ffe566, #f5a623)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", filter: "drop-shadow(0 0 22px rgba(247,201,72,0.45))" }}>40</span>
                  <div style={{ ...liquidGlassBtnGold, width: 40, height: 40, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, fontWeight: 800, color: "#2a1400" }}>
                    <GlassShine />T
                  </div>
                </div>
                <div style={{ fontSize: 14, color: "rgba(255,255,255,0.52)", marginBottom: 6 }}>TRND</div>
                <div style={{ fontSize: 12, color: "rgba(255,255,255,0.32)", maxWidth: 260, margin: "0 auto", lineHeight: 1.6 }}>Trends начисляет TRND за просмотры, стрики и приглашения друзей</div>
              </div>

              <div style={{ ...glassCard, borderRadius: 24, padding: 16, marginBottom: 16 }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
                  <div>
                    <div style={{ fontSize: 15, fontWeight: 700 }}>Пригласить друга</div>
                    <div style={{ fontSize: 12, color: "#7ec0ff" }}>+13 000 T вам и другу</div>
                  </div>
                  <div style={{ ...liquidGlassBtnBlue, display: "flex", alignItems: "center", gap: 6, padding: "6px 12px", borderRadius: 12, color: "#b0d8ff", fontSize: 14, fontWeight: 700 }}>
                    <GlassShine />
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                    0
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "10px 12px", borderRadius: 16, marginBottom: 12, background: "rgba(0,0,0,0.22)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.08)" }}>
                  <span style={{ flex: 1, fontSize: 11, color: "rgba(255,255,255,0.35)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>t.me/ContentifyAI_Bot?startapp=ref_288…</span>
                  {[
                    <svg key="c" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#7ec0ff" strokeWidth="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>,
                    <svg key="s" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#7ec0ff" strokeWidth="2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>,
                  ].map((icon, i) => (
                    <button key={i} style={{ ...liquidGlassBtnBlue, padding: 6, borderRadius: 10, cursor: "pointer" }}><GlassShine />{icon}</button>
                  ))}
                </div>

                <button style={{ ...liquidGlassBtnBlue, width: "100%", padding: "12px 0", borderRadius: 18, fontSize: 13, fontWeight: 700, color: "#d0eaff", cursor: "pointer", boxShadow: "0 6px 24px rgba(79,142,247,0.38), inset 0 1.5px 0 rgba(200,225,255,0.52)" }}>
                  <GlassShine />Поделиться ссылкой
                </button>
              </div>

              <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
                {[{ id: "activity", label: "Активность" }, { id: "friends", label: "Друзья" }, { id: "badges", label: "Бейджи" }].map((t) => (
                  <button key={t.id} onClick={() => setTokenTab(t.id)} style={tokenTab === t.id ? { ...liquidGlassBtn, flex: 1, padding: "8px 0", borderRadius: 14, fontSize: 13, fontWeight: 600, color: "#fff", cursor: "pointer" } : { flex: 1, padding: "8px 0", borderRadius: 14, fontSize: 13, color: "rgba(255,255,255,0.35)", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", cursor: "pointer" }}>
                    {tokenTab === t.id && <GlassShine />}{t.label}
                  </button>
                ))}
              </div>

              {tokenTab === "activity" && (
                <div>
                  <div style={{ fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.28)", letterSpacing: 1, marginBottom: 10 }}>КАК ЗАРАБАТЫВАТЬ</div>
                  {[
                    { icon: "👁", label: "Просмотр видео",    sub: "25–100 Coins / видео", reward: "25–100 С" },
                    { icon: "🔥", label: "Ежедневный чекин",  sub: "50–500 Coins, 30-дневный цикл", reward: "50–500 С" },
                    { icon: "👥", label: "Приглашение друга", sub: "13000 Coins за каждого", reward: "13 000 С" },
                  ].map((item) => (
                    <div key={item.label} style={{ ...glassCard, borderRadius: 18, padding: "12px 14px", marginBottom: 8, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                        <div style={{ width: 36, height: 36, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)" }}>{item.icon}</div>
                        <div>
                          <div style={{ fontSize: 13, fontWeight: 600 }}>{item.label}</div>
                          <div style={{ fontSize: 11, color: "rgba(255,255,255,0.36)" }}>{item.sub}</div>
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
              <div style={{ display: "flex", gap: 8, marginBottom: 16, overflowX: "auto", paddingBottom: 4 }}>
                {["Бонусы","Партнеры","Розыгрыш","Boost"].map((t) => (
                  <button key={t} onClick={() => setShopTab(t.toLowerCase())} style={shopTab === t.toLowerCase() ? { ...liquidGlassBtn, flexShrink: 0, padding: "8px 16px", borderRadius: 14, fontSize: 13, fontWeight: 600, color: "#fff", cursor: "pointer", whiteSpace: "nowrap" } : { flexShrink: 0, padding: "8px 16px", borderRadius: 14, fontSize: 13, color: "rgba(255,255,255,0.35)", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", cursor: "pointer", whiteSpace: "nowrap" }}>
                    {shopTab === t.toLowerCase() && <GlassShine />}{t}
                  </button>
                ))}
              </div>
              <div style={{ ...glassCard, borderRadius: 24, padding: "28px 24px", textAlign: "center" }}>
                <div style={{ fontSize: 40, marginBottom: 12 }}>🛍</div>
                <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 8 }}>Офферы загружаются</div>
                <div style={{ fontSize: 12, color: "rgba(255,255,255,0.36)", lineHeight: 1.7 }}>Скоро здесь появятся подписки, сервисы и гифт-карты от партнёров — обменивай токены на выгоду</div>
              </div>
            </div>
          )}

          {/* ── TASKS ── */}
          {activeTab === "tasks" && (
            <div>
              <div style={{ fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.28)", letterSpacing: 1, marginBottom: 10 }}>КВЕСТЫ ДНЯ · 10 ИЮНЯ</div>

              <div style={{ ...glassCard, borderRadius: 22, padding: 16, marginBottom: 14, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 700 }}>Бонус за все 4 квеста</div>
                  <div style={{ fontSize: 12, color: "rgba(255,255,255,0.36)" }}>Выполнено 0/4</div>
                </div>
                <span style={{ padding: "6px 12px", borderRadius: 12, fontSize: 13, fontWeight: 700, background: "linear-gradient(135deg, rgba(247,201,72,0.24), rgba(245,166,35,0.12))", color: "#f7c948", border: "1px solid rgba(247,201,72,0.28)", backdropFilter: "blur(8px)", boxShadow: "inset 0 1px 0 rgba(255,230,100,0.18)" }}>+150 TRND</span>
              </div>

              {[
                { label: "Посмотри 20 видео",        sub: "Любых видео в ленте", reward: "+30", progress: 20, total: 20, done: true  },
                { label: "Зацени 3 разные категории", sub: "Расширь интересы",   reward: "+30", progress: 0,  total: 3,  done: false },
                { label: "Посмотри 50 видео",         sub: "Залипни на ленте",   reward: "+60", progress: 46, total: 50, done: false },
              ].map((q) => (
                <div key={q.label} style={{ ...glassCard, borderRadius: 22, padding: 16, marginBottom: 10, border: q.done ? "1px solid rgba(247,201,72,0.22)" : "1px solid rgba(255,255,255,0.1)" }}>
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 8 }}>
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 700 }}>{q.label}</div>
                      <div style={{ fontSize: 12, color: "rgba(255,255,255,0.38)" }}>{q.sub}</div>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <div style={{ fontSize: 15, fontWeight: 800, background: "linear-gradient(135deg, #ffe566, #f5a623)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{q.reward}</div>
                      <div style={{ fontSize: 9, color: "rgba(255,255,255,0.32)" }}>TRND</div>
                    </div>
                  </div>

                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
                    <span style={{ fontSize: 11, color: "rgba(255,255,255,0.32)" }}>Прогресс</span>
                    <span style={{ fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.52)" }}>{q.progress} / {q.total}</span>
                  </div>

                  <div style={{ width: "100%", height: 6, borderRadius: 999, background: "rgba(255,255,255,0.08)", marginBottom: 12, overflow: "hidden" }}>
                    <div style={{
                      height: "100%", borderRadius: 999,
                      width: `${(q.progress / q.total) * 100}%`,
                      background: q.done ? "linear-gradient(90deg, #ffe566, #f5a623)" : "linear-gradient(90deg, #4f8ef7, #2d6ef5)",
                      boxShadow: q.done ? "0 0 8px rgba(247,201,72,0.55)" : "0 0 8px rgba(79,142,247,0.45)",
                    }} />
                  </div>

                  {q.done ? (
                    <button style={{ ...liquidGlassBtnGold, width: "100%", padding: "11px 0", borderRadius: 16, fontSize: 13, fontWeight: 700, color: "#2a1400", cursor: "pointer", boxShadow: "0 4px 22px rgba(247,201,72,0.38), inset 0 1.5px 0 rgba(255,245,160,0.65)" }}>
                      <GlassShine />Получить награду
                    </button>
                  ) : (
                    <div style={{ width: "100%", padding: "11px 0", borderRadius: 16, fontSize: 13, color: "rgba(255,255,255,0.22)", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)", textAlign: "center" }}>
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
