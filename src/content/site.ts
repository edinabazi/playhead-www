import {
  Activity,
  AudioLines,
  Captions,
  CodeXml,
  FilePen,
  Flag,
  FolderSearch,
  GlobeX,
  Keyboard,
  ListFilter,
  ListMusic,
  MonitorSmartphone,
  SlidersHorizontal,
  Timer,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const siteUrl = "https://playheadapp.com";

export const links = {
  downloadMacAppleSilicon:
    "https://github.com/edinabazi/playhead/releases/latest/download/Playhead-mac-arm64.dmg",
  downloadMacIntel:
    "https://github.com/edinabazi/playhead/releases/latest/download/Playhead-mac-x64.dmg",
  downloadWindows:
    "https://github.com/edinabazi/playhead/releases/latest/download/Playhead-win-x64.exe",
  downloadLinux: "https://github.com/edinabazi/playhead/releases/latest",
  github: "https://github.com/edinabazi/playhead",
} as const;

export const seo = {
  title: "Playhead: Free Waveform Music Player for Mac, Windows & Linux",
  description:
    "Playhead is a free, open-source music player for your own files. Waveform playback, loops and markers, BPM and key detection, smart playlists, lyrics and an EQ.",
  canonicalPath: "/",
  openGraph: {
    title: "Playhead: A local music player with waveforms",
    description:
      "A slick, open-source music player for people who still keep a real music library. Waveforms, loops, markers, BPM and key detection, smart playlists, no accounts.",
    image: "/assets/ogimage.png",
    imageAlt: "Playhead app interface",
    imageWidth: 1200,
    imageHeight: 630,
  },
  twitter: {
    title: "Playhead: A local music player with waveforms",
    description:
      "A free, waveform-based music player for local music libraries on Mac, Windows and Linux.",
    image: "/assets/ogimage.png",
  },
} as const;

export const app = {
  name: "Playhead",
  author: { name: "Edin Abazi", url: "https://edinabazi.com" },
  license: "https://github.com/edinabazi/playhead/blob/main/LICENSE",
  releases: "https://github.com/edinabazi/playhead/releases",
  operatingSystems: ["macOS", "Windows", "Linux"],
} as const;

export type Feature = {
  title: readonly [string, string];
  Icon?: LucideIcon;
  iconSrc?: string;
};

export const features: Feature[] = [
  {
    title: ["Waveform", "playback"],
    Icon: AudioLines,
  },
  {
    title: ["Loops &", "markers"],
    Icon: Flag,
  },
  {
    title: ["BPM & key", "detection"],
    Icon: Activity,
  },
  {
    title: ["Smart", "playlists"],
    Icon: ListFilter,
  },
  {
    title: ["Folder &", "library modes"],
    Icon: FolderSearch,
  },
  {
    title: ["Playlists", "& tags"],
    Icon: ListMusic,
  },
  {
    title: ["Metadata", "editing"],
    Icon: FilePen,
  },
  {
    title: ["Synced", "lyrics"],
    Icon: Captions,
  },
  {
    title: ["10-band", "equalizer"],
    Icon: SlidersHorizontal,
  },
  {
    title: ["Speed &", "sleep timer"],
    Icon: Timer,
  },
  {
    title: ["Local-first", "library"],
    Icon: GlobeX,
  },
  {
    title: ["Keyboard", "shortcuts"],
    Icon: Keyboard,
  },
  {
    title: ["Last.fm", "integration"],
    iconSrc: "/icons/lastdotfm.svg",
  },
  {
    title: ["SoundCloud", "integration"],
    iconSrc: "/icons/soundcloud.svg",
  },
  {
    title: ["Mac, Windows", "& Linux"],
    Icon: MonitorSmartphone,
  },
  {
    title: ["Free and", "open source"],
    Icon: CodeXml,
  },
];

export type Faq = {
  question: string;
  answer: string;
};

export const faqs: Faq[] = [
  {
    question: "What is Playhead?",
    answer:
      "Playhead is a free, open-source, waveform-based music player for your local music library. It’s built for people who still keep real music files, organize folders, edit metadata, and want a cleaner way to listen.",
  },
  {
    question: "Is Playhead a streaming app?",
    answer:
      "No. Playhead plays the music files on your computer. If you want, you can connect SoundCloud to play your SoundCloud likes, playlists and feed next to your library, but that’s optional.",
  },
  {
    question: "Do I need an account?",
    answer:
      "No. No signups, no accounts, no cloud profile. Open the app, import your music folders, and start listening.",
  },
  {
    question: "Does Playhead work offline?",
    answer:
      "Yes. Your library lives on your machine, not in the cloud. Only the optional Last.fm and SoundCloud integrations need an internet connection.",
  },
  {
    question: "What file formats does it support?",
    answer:
      "MP3, FLAC, WAV, AIFF, M4A, AAC, OGG and Opus. You can choose which formats Playhead imports in Settings.",
  },
  {
    question: "What platforms does it support?",
    answer:
      "macOS (Apple Silicon and Intel), Windows and Linux (AppImage and .deb). Mac builds are signed and notarized. Windows and Linux builds aren’t signed yet, so your system may ask you to confirm before opening them.",
  },
  {
    question: "Can I browse by folders?",
    answer:
      "Yes. Folder mode lets you browse and filter tracks by the folders you imported, including nested subfolders. Perfect if your collection is already organized your own way.",
  },
  {
    question: "Can I browse like a normal music library?",
    answer:
      "Yes. Library mode organizes your music into tracks, artists and albums, with playlists, tags and loved tracks alongside.",
  },
  {
    question: "Can I edit track metadata?",
    answer:
      "Yes. Edit titles, artists, albums, genres, years, track and disc numbers, composers, BPM, comments and artwork, written back to your files where the format supports it.",
  },
  {
    question: "Can Playhead detect BPM and musical key?",
    answer:
      "Yes. Playhead estimates BPM for tracks that don’t have it and can detect each track’s key, shown in Camelot notation (like 8A) for harmonic mixing. Both appear as sortable columns.",
  },
  {
    question: "What are smart playlists?",
    answer:
      "Playlists built from rules, like “genre contains house and BPM between 120 and 128”. They update on their own as your library changes.",
  },
  {
    question: "Does Playhead show lyrics?",
    answer:
      "Yes. It reads lyrics embedded in your files or from a matching .lrc file. Timed lyrics follow playback and you can click a line to jump to it. Lyrics stay local; Playhead doesn’t fetch them online.",
  },
  {
    question: "Why waveform-based?",
    answer:
      "Waveforms make music feel more visual and usable. You can see the structure of a track, jump around faster, loop a section, drop markers, and understand the energy of a song at a glance.",
  },
  {
    question: "Is this made for DJs?",
    answer:
      "Kind of. Playhead isn’t trying to replace DJ software with decks and mixing. It’s for DJs, collectors and producers who want a fast way to dig through, preview and prep local tracks: BPM and key, loops, markers, smart playlists, duplicate finding, and rekordbox, Traktor and Serato playlist import.",
  },
  {
    question: "Can I import playlists from other apps?",
    answer:
      "Yes. Import M3U and M3U8 playlists, rekordbox XML, Traktor NML collections and Serato crates. You can also export playlists as M3U, M3U8, rekordbox XML or Traktor NML.",
  },
  {
    question: "How does Playhead update?",
    answer:
      "Playhead checks for new releases and downloads them in the background. When an update is ready you’ll see an Update button, and the release notes show after it installs.",
  },
  {
    question: "Is Playhead open source?",
    answer:
      "Yes. Playhead is open source and MIT licensed. The code is on GitHub.",
  },
  {
    question: "Is Playhead free?",
    answer:
      "Yes. Playhead is free to download and use, with no ads and no paid tiers.",
  },
  {
    question: "Is Playhead finished?",
    answer:
      "Not yet. Playhead is in beta and under active development, with frequent releases. Expect rough edges and fast improvements.",
  },
  {
    question: "Does Playhead collect data?",
    answer:
      "Playhead has no accounts, no ads and no cloud library. It includes optional anonymous usage analytics that you can turn off in Settings. Last.fm and SoundCloud only receive data if you connect them.",
  },
  {
    question: "Can I contribute?",
    answer:
      "Yes. Contributions, issues, ideas, bug reports and design feedback are welcome on GitHub. Many recent features started as GitHub issues.",
  },
];

export type Spotlight = {
  eyebrow: string;
  title: string;
  body: string;
  points: string[];
  visual: "waveform" | "crate" | "equalizer";
};

export const spotlights: Spotlight[] = [
  {
    eyebrow: "Waveform tools",
    title: "Your waveform is a workspace.",
    body: "See the shape of every track, then work with it directly.",
    points: [
      "Shift+drag to loop any section",
      "Press M to drop named markers",
      "SoundCloud comments right on the waveform",
      "Playback speed with pitch lock",
    ],
    visual: "waveform",
  },
  {
    eyebrow: "Crate digging",
    title: "Prep sets without the heavy software.",
    body: "Sort, filter and organize a big collection fast.",
    points: [
      "BPM and key detection in Camelot notation",
      "Smart playlists by genre, BPM, year and tags",
      "rekordbox, Traktor and Serato playlist import",
      "Find duplicate tracks across folders",
    ],
    visual: "crate",
  },
  {
    eyebrow: "Your sound",
    title: "Tuned to the way you listen.",
    body: "Everything sounds right, from quiet evenings to loud rooms.",
    points: [
      "10-band equalizer with presets",
      "Volume normalization that reads ReplayGain tags",
      "Volume boost up to 200% with a limiter",
      "Sleep timer and synced lyrics",
    ],
    visual: "equalizer",
  },
];

export const formats = [
  "MP3",
  "FLAC",
  "WAV",
  "AIFF",
  "M4A",
  "AAC",
  "OGG",
  "Opus",
] as const;

export const integrations = [
  {
    name: "Last.fm",
    icon: "/icons/lastdotfm.svg",
    body: "Scrobble what you play and keep your loved tracks in sync.",
  },
] as const;

export const soundcloudFeatures = [
  {
    title: "Your collections in the sidebar",
    body: "Stream your likes, playlists, uploads, reposts and following feed next to your local library.",
  },
  {
    title: "Comments on the waveform",
    body: "Timed comments sit along the waveform and pop up as they play. Post your own at the current moment.",
  },
  {
    title: "Edit your playlists",
    body: "Drag tracks onto your SoundCloud playlists, reorder or remove them, and create, rename or delete playlists.",
  },
  {
    title: "Search SoundCloud",
    body: "Press Tab in Playhead’s search to switch from your library to all of SoundCloud.",
  },
  {
    title: "Keep it playing",
    body: "When the queue runs out, Playhead can continue with similar tracks from SoundCloud.",
  },
  {
    title: "Likes, synced",
    body: "Optionally mirror your hearts in Playhead to your SoundCloud likes, and back.",
  },
] as const;

export const privacyPoints = [
  {
    title: "No account",
    body: "Download it and start listening. There’s nothing to sign up for.",
  },
  {
    title: "Your files stay put",
    body: "Playhead reads your music where it lives. Nothing is uploaded.",
  },
  {
    title: "No ads, ever",
    body: "No recommendations engine, no sponsored tracks, no upsells.",
  },
  {
    title: "Analytics are optional",
    body: "Anonymous usage analytics can be turned off in Settings.",
  },
] as const;
