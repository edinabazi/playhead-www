// Small code-drawn illustrations of Playhead features, in the site's cream-on-dark palette.
// They stand in for screenshots, so they stay crisp at any size and need no assets.

const cream = "var(--website-text-primary-on-dark)";

// A fixed pseudo-random waveform so every render (and the static HTML) matches.
const bars = Array.from({ length: 56 }, (_, index) => {
  const value =
    Math.abs(Math.sin(index * 1.7) * 0.55 + Math.sin(index * 0.43) * 0.35) +
    0.12;
  return Math.min(1, value);
});

function Waveform({
  playedUntil = 0.42,
  height = 120,
}: {
  playedUntil?: number;
  height?: number;
}) {
  const width = 560;
  const step = width / bars.length;
  return bars.map((value, index) => {
    const barHeight = Math.max(6, value * height);
    const played = index / bars.length < playedUntil;
    return (
      <rect
        key={index}
        x={index * step + 2}
        y={(height - barHeight) / 2 + 20}
        width={step - 4}
        height={barHeight}
        rx={2}
        fill={cream}
        opacity={played ? 0.95 : 0.35}
      />
    );
  });
}

export function WaveformVisual() {
  return (
    <svg viewBox="0 0 560 160" className="h-auto w-full" aria-hidden="true">
      {/* Loop region */}
      <rect
        x={190}
        y={8}
        width={150}
        height={144}
        rx={6}
        fill={cream}
        opacity={0.12}
      />
      <rect x={190} y={8} width={3} height={144} fill={cream} opacity={0.9} />
      <rect x={337} y={8} width={3} height={144} fill={cream} opacity={0.9} />
      <Waveform />
      {/* Markers */}
      {[96, 430].map((x) => (
        <g key={x}>
          <rect
            x={x}
            y={8}
            width={2}
            height={144}
            fill={cream}
            opacity={0.55}
          />
          <path d={`M${x - 6} 8h14v10l-7 5l-7-5z`} fill={cream} />
        </g>
      ))}
      {/* Playhead */}
      <rect x={233} y={4} width={3} height={152} rx={1.5} fill={cream} />
    </svg>
  );
}

const crateRows = [
  { title: "Midnight Drive", bpm: 124, key: "8A", width: 150 },
  { title: "Low Tide", bpm: 122, key: "9A", width: 110 },
  { title: "Glass House", bpm: 126, key: "8B", width: 170 },
  { title: "Static Bloom", bpm: 124, key: "7A", width: 130 },
];

export function CrateVisual() {
  return (
    <svg viewBox="0 0 560 160" className="h-auto w-full" aria-hidden="true">
      {crateRows.map((row, index) => {
        const y = 10 + index * 37;
        return (
          <g key={row.title}>
            <rect
              x={0}
              y={y}
              width={560}
              height={30}
              rx={10}
              fill={cream}
              opacity={index === 0 ? 0.16 : 0.06}
            />
            <rect
              x={12}
              y={y + 7}
              width={16}
              height={16}
              rx={4}
              fill={cream}
              opacity={0.5}
            />
            <rect
              x={40}
              y={y + 11}
              width={row.width}
              height={8}
              rx={4}
              fill={cream}
              opacity={0.75}
            />
            <text
              x={420}
              y={y + 20}
              fill={cream}
              fontSize={14}
              fontWeight={700}
              opacity={0.8}
              textAnchor="end"
            >
              {row.bpm}
            </text>
            <rect
              x={446}
              y={y + 5}
              width={44}
              height={20}
              rx={10}
              fill={cream}
              opacity={0.9}
            />
            <text
              x={468}
              y={y + 19.5}
              fill="#1a1a18"
              fontSize={12}
              fontWeight={800}
              textAnchor="middle"
            >
              {row.key}
            </text>
            <rect
              x={506}
              y={y + 11}
              width={40}
              height={8}
              rx={4}
              fill={cream}
              opacity={0.35}
            />
          </g>
        );
      })}
    </svg>
  );
}

const eqGains = [3, 4.5, 2.5, 0.5, -1, -0.5, 1, 2.5, 3.5, 2];

export function EqualizerVisual() {
  const centerY = 80;
  const points = eqGains.map(
    (gain, index) => [36 + index * 54, centerY - gain * 13] as const,
  );
  const curve = points
    .map(([x, y], index) => (index === 0 ? `M${x} ${y}` : `L${x} ${y}`))
    .join(" ");
  return (
    <svg viewBox="0 0 560 160" className="h-auto w-full" aria-hidden="true">
      <rect
        x={0}
        y={centerY - 0.5}
        width={560}
        height={1}
        fill={cream}
        opacity={0.2}
      />
      {points.map(([x, y]) => (
        <g key={x}>
          <rect
            x={x - 1.5}
            y={14}
            width={3}
            height={132}
            rx={1.5}
            fill={cream}
            opacity={0.18}
          />
          <circle cx={x} cy={y} r={9} fill={cream} />
        </g>
      ))}
      <path
        d={curve}
        fill="none"
        stroke={cream}
        strokeWidth={3}
        strokeLinejoin="round"
        opacity={0.6}
      />
    </svg>
  );
}

const commentPositions = [0.08, 0.2, 0.31, 0.46, 0.58, 0.71, 0.86];

export function SoundCloudVisual() {
  return (
    <svg viewBox="0 0 560 190" className="h-auto w-full" aria-hidden="true">
      <Waveform playedUntil={0.46} />
      {/* Comment avatars along the bottom edge, like SoundCloud */}
      {commentPositions.map((position, index) => (
        <circle
          key={position}
          cx={position * 560}
          cy={150}
          r={9}
          fill={index === 3 ? "#ff5500" : cream}
          opacity={index === 3 ? 1 : 0.7}
          stroke="#1a1a18"
          strokeWidth={2}
        />
      ))}
      {/* The comment playing right now */}
      <g transform="translate(258 160)">
        <rect width={180} height={28} rx={14} fill={cream} />
        <circle cx={14} cy={14} r={7} fill="#ff5500" />
        <rect
          x={28}
          y={10}
          width={64}
          height={8}
          rx={4}
          fill="#1a1a18"
          opacity={0.8}
        />
        <rect
          x={100}
          y={10}
          width={66}
          height={8}
          rx={4}
          fill="#1a1a18"
          opacity={0.35}
        />
      </g>
    </svg>
  );
}
