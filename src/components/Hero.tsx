import { useEffect, useRef } from "react";
import { animate, createTimeline, stagger } from "animejs";
import { useLanguage } from "../i18n/useLanguage";
import { smoothScrollTo } from "../utils/scroll";
import { Airship } from "./Airship";
import { EdisonBulb } from "./EdisonBulb";
import { Gear } from "./Gear";

/** Posição horizontal das chaminés da silhueta (fração da largura). */
const CHIMNEYS = [21.5, 28, 59, 73.5, 92.5];

function Skyline() {
  return (
    <svg
      className="hero-skyline"
      viewBox="0 0 1200 180"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      {/* lua */}
      <g fill="#e8c26a">
        <circle cx="940" cy="34" r="30" opacity="0.07" />
        <circle cx="940" cy="34" r="20" opacity="0.12" />
        <circle cx="940" cy="34" r="13" opacity="0.2" />
      </g>

      {/* camada de fundo (prédios distantes) */}
      <g fill="#17100a">
        <rect x="0" y="95" width="140" height="85" />
        <rect x="180" y="78" width="120" height="102" />
        <rect x="300" y="90" width="130" height="90" />
        <rect x="330" y="56" width="16" height="60" />
        <path d="M700 96 A 34 30 0 0 1 768 96 L 768 180 L 700 180 Z" />
        <rect x="860" y="85" width="110" height="95" />
        <rect x="1040" y="92" width="160" height="88" />
        <rect x="1148" y="58" width="14" height="60" />
      </g>

      {/* camada da frente */}
      <g fill="#0b0805">
        {/* caixa d'água */}
        <rect x="75" y="120" width="6" height="60" />
        <rect x="110" y="120" width="6" height="60" />
        <rect x="70" y="140" width="52" height="4" />
        <rect x="64" y="88" width="64" height="34" rx="6" />
        <polygon points="60,88 96,66 132,88" />
        {/* quarteirão com chaminé */}
        <rect x="140" y="118" width="160" height="62" />
        <rect x="250" y="70" width="18" height="50" />
        <rect x="246" y="64" width="26" height="7" rx="2" />
        <rect x="300" y="138" width="160" height="42" />
        {/* guindaste */}
        <rect x="505" y="72" width="7" height="108" />
        <line
          x1="508"
          y1="78"
          x2="462"
          y2="92"
          stroke="#0b0805"
          strokeWidth="5"
        />
        <line
          x1="508"
          y1="78"
          x2="556"
          y2="88"
          stroke="#0b0805"
          strokeWidth="5"
        />
        <line
          x1="466"
          y1="92"
          x2="466"
          y2="118"
          stroke="#0b0805"
          strokeWidth="2"
        />
        <rect x="461" y="118" width="10" height="7" />
        <rect x="546" y="86" width="14" height="11" />
        {/* fábrica com telhado serrilhado */}
        <path d="M650 180 V112 L680 98 V112 L710 98 V112 L740 98 V112 L770 98 V112 L800 98 V180 Z" />
        <rect x="700" y="54" width="18" height="48" />
        <rect x="696" y="48" width="26" height="7" rx="2" />
        {/* quarteirão com chaminé */}
        <rect x="820" y="124" width="120" height="56" />
        <rect x="875" y="76" width="16" height="52" />
        <rect x="871" y="70" width="24" height="7" rx="2" />
        {/* gasômetro */}
        <path d="M950 180 V132 A 48 34 0 0 1 1046 132 V180 Z" />
        {/* prédio alto com chaminé */}
        <rect x="1060" y="110" width="140" height="70" />
        <rect x="1100" y="52" width="18" height="62" />
        <rect x="1096" y="46" width="26" height="7" rx="2" />
      </g>

      {/* estrutura do gasômetro */}
      <g stroke="rgba(201,150,46,0.16)" strokeWidth="3" fill="none">
        <line x1="950" y1="118" x2="950" y2="180" />
        <line x1="982" y1="106" x2="982" y2="180" />
        <line x1="1014" y1="106" x2="1014" y2="180" />
        <line x1="1046" y1="118" x2="1046" y2="180" />
      </g>

      {/* janelas acesas */}
      <g fill="#ffb84d" opacity="0.5">
        <rect x="80" y="96" width="6" height="9" />
        <rect x="98" y="96" width="6" height="9" />
        <rect x="158" y="132" width="7" height="11" />
        <rect x="186" y="132" width="7" height="11" />
        <rect x="214" y="132" width="7" height="11" />
        <rect x="258" y="150" width="7" height="11" />
        <rect x="330" y="150" width="7" height="10" />
        <rect x="378" y="150" width="7" height="10" />
        <rect x="426" y="150" width="7" height="10" />
        <rect x="666" y="128" width="8" height="11" />
        <rect x="702" y="128" width="8" height="11" />
        <rect x="738" y="128" width="8" height="11" />
        <rect x="774" y="128" width="8" height="11" />
        <rect x="842" y="138" width="7" height="11" />
        <rect x="884" y="138" width="7" height="11" />
        <rect x="1080" y="126" width="7" height="12" />
        <rect x="1120" y="126" width="7" height="12" />
        <rect x="1160" y="126" width="7" height="12" />
      </g>

      {/* viaduto ferroviário */}
      <g fill="#070402">
        <rect x="0" y="148" width="1200" height="9" />
        {Array.from({ length: 12 }, (_, i) => (
          <rect key={i} x={30 + i * 100} y="157" width="12" height="23" />
        ))}
      </g>
      <rect
        x="0"
        y="146"
        width="1200"
        height="2"
        fill="rgba(201,150,46,0.35)"
      />
    </svg>
  );
}

/** Big Ben em silhueta, com mostrador aceso e ponteiros na hora real. */
function BigBen() {
  const hourRef = useRef<SVGLineElement>(null);
  const minuteRef = useRef<SVGLineElement>(null);

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const minutes = now.getMinutes() + now.getSeconds() / 60;
      const hours = (now.getHours() % 12) + minutes / 60;
      minuteRef.current?.setAttribute(
        "transform",
        `rotate(${minutes * 6} 50 92)`,
      );
      hourRef.current?.setAttribute("transform", `rotate(${hours * 30} 50 92)`);
    };
    tick();
    const id = setInterval(tick, 10000);
    return () => clearInterval(id);
  }, []);

  const ticks = Array.from({ length: 12 }, (_, i) => i * 30);

  return (
    <div className="big-ben" aria-hidden="true">
      <svg viewBox="0 0 100 300">
        <g fill="#0b0805">
          {/* pináculo e coroa */}
          <rect x="48.5" y="0" width="3" height="14" />
          <polygon points="24,58 50,8 76,58" />
          <rect x="21" y="56" width="58" height="7" rx="2" />
          {/* seção do relógio (mais larga) */}
          <rect x="18" y="63" width="64" height="58" />
          <rect x="15" y="119" width="70" height="7" rx="2" />
          {/* fuste da torre */}
          <rect x="25" y="126" width="50" height="158" />
          {/* base */}
          <rect x="18" y="282" width="64" height="18" rx="2" />
        </g>

        {/* mostrador aceso, estilo Big Ben à noite */}
        <circle cx="50" cy="92" r="24" fill="#0b0805" />
        <circle cx="50" cy="92" r="22" fill="#ffd98a" opacity="0.92" />
        <circle
          cx="50"
          cy="92"
          r="22"
          fill="none"
          stroke="#c9962e"
          strokeWidth="3"
        />
        <circle
          cx="50"
          cy="92"
          r="16.5"
          fill="none"
          stroke="rgba(90,60,20,0.45)"
          strokeWidth="1"
        />
        {ticks.map((angle) => (
          <line
            key={angle}
            x1="50"
            y1="72.5"
            x2="50"
            y2={angle % 90 === 0 ? 77 : 75.5}
            stroke="#4a3018"
            strokeWidth={angle % 90 === 0 ? 2.4 : 1.3}
            transform={`rotate(${angle} 50 92)`}
          />
        ))}
        <line
          ref={hourRef}
          x1="50"
          y1="92"
          x2="50"
          y2="80"
          stroke="#2a1c0c"
          strokeWidth="3.2"
          strokeLinecap="round"
        />
        <line
          ref={minuteRef}
          x1="50"
          y1="92"
          x2="50"
          y2="74.5"
          stroke="#2a1c0c"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <circle cx="50" cy="92" r="2.4" fill="#2a1c0c" />

        {/* janelas do fuste acesas */}
        <g fill="#ffb84d" opacity="0.35">
          <rect x="34" y="140" width="8" height="14" rx="2" />
          <rect x="58" y="140" width="8" height="14" rx="2" />
          <rect x="34" y="176" width="8" height="14" rx="2" />
          <rect x="58" y="176" width="8" height="14" rx="2" />
          <rect x="34" y="212" width="8" height="14" rx="2" />
          <rect x="58" y="212" width="8" height="14" rx="2" />
          <rect x="34" y="248" width="8" height="14" rx="2" />
          <rect x="58" y="248" width="8" height="14" rx="2" />
        </g>
      </svg>
    </div>
  );
}

function TrainWheel({ cx, cy, r }: { cx: number; cy: number; r: number }) {
  return (
    <g>
      <circle
        cx={cx}
        cy={cy}
        r={r}
        fill="#241a0e"
        stroke="rgba(201,150,46,0.4)"
        strokeWidth="1.5"
      />
      <g className="train-wheel">
        <line
          x1={cx - r + 2}
          y1={cy}
          x2={cx + r - 2}
          y2={cy}
          stroke="rgba(201,150,46,0.4)"
          strokeWidth="1.4"
        />
        <line
          x1={cx}
          y1={cy - r + 2}
          x2={cx}
          y2={cy + r - 2}
          stroke="rgba(201,150,46,0.4)"
          strokeWidth="1.4"
        />
      </g>
      <circle cx={cx} cy={cy} r="2" fill="#8a6a2f" />
    </g>
  );
}

function Train() {
  const body = "#1c1309";
  const rim = "rgba(201,150,46,0.3)";
  const win = "#ffb84d";
  return (
    <div className="hero-train" aria-hidden="true">
      <svg width="560" height="60" viewBox="0 0 560 60">
        {/* fumaça da locomotiva */}
        <g fill="rgba(233,216,180,0.35)">
          <circle className="train-smoke" cx="501" cy="4" r="4" />
          <circle className="train-smoke" cx="501" cy="4" r="5" />
          <circle className="train-smoke" cx="501" cy="4" r="3.5" />
        </g>

        {/* vagão 1 */}
        <rect x="2" y="18" width="128" height="6" rx="3" fill={body} />
        <rect
          x="6"
          y="22"
          width="120"
          height="26"
          rx="4"
          fill={body}
          stroke={rim}
          strokeWidth="1"
        />
        <g fill={win} opacity="0.8">
          <rect x="18" y="28" width="12" height="10" rx="1" />
          <rect x="40" y="28" width="12" height="10" rx="1" />
          <rect x="62" y="28" width="12" height="10" rx="1" />
          <rect x="84" y="28" width="12" height="10" rx="1" />
          <rect x="106" y="28" width="12" height="10" rx="1" />
        </g>
        <TrainWheel cx={28} cy={52} r={5} />
        <TrainWheel cx={48} cy={52} r={5} />
        <TrainWheel cx={88} cy={52} r={5} />
        <TrainWheel cx={108} cy={52} r={5} />
        <rect x="126" y="38" width="14" height="4" fill={body} />

        {/* vagão 2 */}
        <rect x="136" y="18" width="128" height="6" rx="3" fill={body} />
        <rect
          x="140"
          y="22"
          width="120"
          height="26"
          rx="4"
          fill={body}
          stroke={rim}
          strokeWidth="1"
        />
        <g fill={win} opacity="0.8">
          <rect x="152" y="28" width="12" height="10" rx="1" />
          <rect x="174" y="28" width="12" height="10" rx="1" />
          <rect x="196" y="28" width="12" height="10" rx="1" />
          <rect x="218" y="28" width="12" height="10" rx="1" />
          <rect x="240" y="28" width="12" height="10" rx="1" />
        </g>
        <TrainWheel cx={162} cy={52} r={5} />
        <TrainWheel cx={182} cy={52} r={5} />
        <TrainWheel cx={222} cy={52} r={5} />
        <TrainWheel cx={242} cy={52} r={5} />
        <rect x="260" y="38" width="14" height="4" fill={body} />

        {/* tênder */}
        <rect
          x="272"
          y="26"
          width="60"
          height="22"
          rx="3"
          fill={body}
          stroke={rim}
          strokeWidth="1"
        />
        <TrainWheel cx={286} cy={52} r={5} />
        <TrainWheel cx={318} cy={52} r={5} />
        <rect x="330" y="38" width="12" height="4" fill={body} />

        {/* locomotiva */}
        <rect x="336" y="8" width="52" height="6" rx="3" fill={body} />
        <rect
          x="340"
          y="12"
          width="44"
          height="36"
          rx="3"
          fill={body}
          stroke={rim}
          strokeWidth="1"
        />
        <rect
          x="350"
          y="18"
          width="14"
          height="12"
          rx="1"
          fill={win}
          opacity="0.85"
        />
        <rect
          x="384"
          y="22"
          width="130"
          height="24"
          rx="11"
          fill={body}
          stroke={rim}
          strokeWidth="1"
        />
        <circle
          cx="514"
          cy="34"
          r="12"
          fill={body}
          stroke={rim}
          strokeWidth="1"
        />
        <rect x="460" y="12" width="16" height="12" rx="5" fill={body} />
        <rect x="496" y="4" width="10" height="20" fill={body} />
        <rect x="492" y="1" width="18" height="5" rx="2" fill={body} />
        {/* farol e facho de luz */}
        <polygon
          points="526,24 560,16 560,44 526,36"
          fill="#ffb84d"
          opacity="0.12"
        />
        <circle cx="524" cy="30" r="4" fill={win} opacity="0.9" />
        {/* limpa-trilhos */}
        <polygon points="544,54 514,54 522,40" fill={body} />
        <TrainWheel cx={420} cy={48} r={10} />
        <TrainWheel cx={456} cy={48} r={10} />
        <TrainWheel cx={492} cy={52} r={6} />
        <TrainWheel cx={356} cy={52} r={6} />
      </svg>
    </div>
  );
}

export function Hero() {
  const { content } = useLanguage();
  const { profile, ui } = content;
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const animations: { cancel: () => void }[] = [];

    const intro = createTimeline({ defaults: { ease: "out(3)" } });
    intro
      .add(root.querySelectorAll(".hero-gear"), {
        opacity: [0, 1],
        scale: [0.5, 1],
        duration: 1400,
        delay: stagger(150),
      })
      .add(
        root.querySelectorAll(".hero-kicker"),
        { opacity: [0, 1], translateY: [-14, 0], duration: 700 },
        "-=1100",
      )
      .add(
        root.querySelectorAll(".hero-name .ch"),
        {
          opacity: [0, 1],
          translateY: ["0.7em", 0],
          rotate: [10, 0],
          duration: 850,
          delay: stagger(42),
        },
        "-=700",
      )
      .add(
        root.querySelectorAll(".hero-rule"),
        { scaleX: [0, 1], duration: 900, ease: "inOut(3)" },
        "-=500",
      )
      .add(
        root.querySelectorAll(".hero-role .ch"),
        { opacity: [0, 1], duration: 20, delay: stagger(55), ease: "linear" },
        "-=400",
      )
      .add(
        root.querySelectorAll(".hero-contacts a, .hero-scroll"),
        {
          opacity: [0, 1],
          translateY: [16, 0],
          duration: 700,
          delay: stagger(120),
        },
        "-=200",
      );
    animations.push(intro);

    // Engrenagens engrenadas: a velocidade é proporcional ao número de dentes.
    const spinConfig: Array<[string, number, number]> = [
      [".gear-big", 360, 42000],
      [".gear-m1", 360, 22000], // 14 dentes
      [".gear-m2", -360, 14100], // 9 dentes → 22000 * 9/14
    ];
    for (const [selector, turn, duration] of spinConfig) {
      const el = root.querySelector(selector);
      if (!el) continue;
      animations.push(
        animate(el, { rotate: turn, duration, ease: "linear", loop: true }),
      );
    }

    // Fumaça das chaminés
    root.querySelectorAll(".steam-puff").forEach((el, i) => {
      animations.push(
        animate(el, {
          translateY: { from: 0, to: -200 },
          translateX: { from: 0, to: i % 2 === 0 ? 40 : -40 },
          scale: { from: 0.4, to: 2.1 },
          opacity: [
            { to: 0.32, duration: 1600 },
            { to: 0, duration: 3200 },
          ],
          duration: 4800 + i * 700,
          delay: i * 850,
          loop: true,
          ease: "inOutSine",
        }),
      );
    });

    // Névoa rasteira
    const fogA = root.querySelector(".fog-a");
    const fogB = root.querySelector(".fog-b");
    if (fogA) {
      animations.push(
        animate(fogA, {
          translateX: [-70, 70],
          duration: 15000,
          loop: true,
          alternate: true,
          ease: "inOutSine",
        }),
      );
    }
    if (fogB) {
      animations.push(
        animate(fogB, {
          translateX: [60, -60],
          duration: 19000,
          loop: true,
          alternate: true,
          ease: "inOutSine",
        }),
      );
    }

    // Trem cruzando o viaduto (pausa entre as passagens)
    const train = root.querySelector(".hero-train");
    if (train) {
      animations.push(
        animate(train, {
          translateX: { from: -620, to: window.innerWidth + 120 },
          duration: 26000,
          ease: "linear",
          loop: true,
          loopDelay: 7000,
        }),
      );
    }

    const scrollHint = root.querySelector(".hero-scroll-icon");
    if (scrollHint) {
      animations.push(
        animate(scrollHint, {
          translateY: [0, 9],
          duration: 900,
          loop: true,
          alternate: true,
          ease: "inOutQuad",
        }),
      );
    }

    return () => animations.forEach((a) => a.cancel());
  }, []);

  // Letras agrupadas por palavra: a linha só pode quebrar entre palavras.
  const splitWords = (text: string) =>
    text.split(" ").map((word, wi) => (
      <span key={wi} className="word">
        {word.split("").map((ch, i) => (
          <span key={i} className="ch">
            {ch}
          </span>
        ))}
      </span>
    ));

  const nameChars = splitWords(profile.name);
  const roleChars = splitWords(profile.role);

  return (
    <header className="hero" id="inicio" ref={rootRef}>
      <div className="hero-sky" aria-hidden="true">
        <Airship />
      </div>

      <div className="hero-gears" aria-hidden="true">
        <Gear
          className="hero-gear gear-big"
          size={380}
          teeth={18}
          spokes={6}
          color="#6f5223"
        />
        <Gear
          className="hero-gear gear-m1"
          size={210}
          teeth={14}
          spokes={6}
          color="#8a6a2f"
        />
        <Gear
          className="hero-gear gear-m2"
          size={130}
          teeth={9}
          spokes={4}
          color="#b06a3b"
        />
      </div>

      <EdisonBulb className="bulb-left" length={70} />
      <EdisonBulb className="bulb-right" length={130} delay={700} />

      <Skyline />
      <BigBen />
      <Train />

      <div className="steam" aria-hidden="true">
        {CHIMNEYS.map((left) => (
          <span
            key={left}
            className="steam-puff"
            style={{ left: `${left}%` }}
          />
        ))}
      </div>

      <div className="fog" aria-hidden="true">
        <span className="fog-a" />
        <span className="fog-b" />
      </div>

      <div className="hero-content">
        <p className="hero-kicker">{ui.heroKicker}</p>
        <h1 className="hero-name" aria-label={profile.name}>
          {nameChars}
        </h1>
        <div className="hero-rule" aria-hidden="true" />
        <p className="hero-role" aria-label={profile.role}>
          {roleChars}
          <span className="type-cursor" aria-hidden="true">
            |
          </span>
        </p>
        <div className="hero-contacts">
          <a
            href={profile.linkedin}
            className="brass-chip"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={ui.linkedinAria}
          >
            <svg
              className="brass-chip-icon"
              viewBox="0 0 24 24"
              aria-hidden="true"
              fill="currentColor"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            <p style={{ margin: 0, paddingTop: 4 }}>Jair Frison Júnior</p>
          </a>
        </div>
        <a
          href="#sobre"
          className="hero-scroll"
          aria-label={ui.scrollAria}
          onClick={(e) => {
            e.preventDefault();
            smoothScrollTo("#sobre");
          }}
        >
          <span className="hero-scroll-icon">▼</span>
        </a>
      </div>
    </header>
  );
}
