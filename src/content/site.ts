import {
  Activity,
  AudioLines,
  CodeXml,
  FilePen,
  FolderSearch,
  GlobeX,
  Keyboard,
  ListMusic,
  MonitorSmartphone,
  Paintbrush,
  Tags,
  UserLock,
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
  title: "Playhead | Free Local-first Waveform Music Player",
  description:
    "Playhead is a minimal, local-first music player for your own music files. Browse by library or folders, view waveforms, and edit track metadata.",
  canonicalPath: "/",
  openGraph: {
    title: "Playhead: A local music player with waveforms",
    description:
      "A slick, open-source music player for people who still keep a real music library. Waveform playback, folder browsing, metadata editing, and no accounts.",
    image: "/assets/ogimage.png",
    imageAlt: "Playhead app interface",
    imageWidth: 1200,
    imageHeight: 630,
  },
  twitter: {
    title: "Playhead: A local music player with waveforms",
    description:
      "A minimal, waveform-based music player for local music libraries.",
    image: "/assets/ogimage.png",
  },
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
    title: ["Beautiful", "interface"],
    Icon: Paintbrush,
  },
  {
    title: ["Local-first", "library"],
    Icon: GlobeX,
  },
  {
    title: ["Folder-based", "browsing"],
    Icon: FolderSearch,
  },
  {
    title: ["Last.fm", "integration"],
    iconSrc: "/icons/lastdotfm.svg",
  },
  {
    title: ["Playlist & tag", "organization"],
    Icon: ListMusic,
  },
  {
    title: ["Metadata", "editing"],
    Icon: FilePen,
  },
  {
    title: ["BPM", "analysis"],
    Icon: Activity,
  },
  {
    title: ["Keyboard", "shortcuts"],
    Icon: Keyboard,
  },
  {
    title: ["Multi-platform", "support"],
    Icon: MonitorSmartphone,
  },
  {
    title: ["No accounts,", "no ads"],
    Icon: UserLock,
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
      "Playhead is a minimal, waveform-based music player for your local music library. It’s built for people who still keep real music files, organize folders, edit metadata, and want a cleaner way to listen.",
  },
  {
    question: "Is Playhead a streaming app?",
    answer:
      "No. Playhead is for local music files. It does not stream music, recommend music, or lock you into an online account.",
  },
  {
    question: "Do I need an account?",
    answer:
      "No. No signups, no accounts, no cloud profile. Open the app, import your music folders, and start listening.",
  },
  {
    question: "Does Playhead work offline?",
    answer:
      "Yes. Playhead is designed around local playback. Your library lives on your machine, not in the cloud.",
  },
  {
    question: "What file formats does it support?",
    answer:
      "Playhead is built for common local music formats. Format support may expand during beta, so the exact list can change as development continues.",
  },
  {
    question: "Can I browse by folders?",
    answer:
      "Yes. Playhead has a folder-based mode so you can browse and filter tracks by the folders you imported. Perfect if your music collection is already organized your own way.",
  },
  {
    question: "Can I browse like a normal music library?",
    answer:
      "Yes. Playhead also has a standard library mode that organizes your music into tracks, artists, and albums.",
  },
  {
    question: "Can I edit track metadata?",
    answer:
      "Yes. Playhead lets you view and modify track metadata, so you can clean up messy titles, artists, albums, and other track details.",
  },
  {
    question: "Why waveform-based?",
    answer:
      "Waveforms make music feel more visual and usable. You can see the structure of a track, jump around faster, and understand the energy of a song at a glance.",
  },
  {
    question: "Is this made for DJs?",
    answer:
      "Kind of. Playhead is not trying to replace pro DJ software. It’s for DJs, collectors, producers, and music enthusiasts who want a fast, beautiful way to browse, preview, and manage local tracks.",
  },
  {
    question: "Is Playhead open source?",
    answer: "Yes. Playhead is open source and MIT licensed.",
  },
  {
    question: "Is Playhead free?",
    answer:
      "Yes, the app is open source. Paid builds, donations, or supporter options may come later, but the project itself is MIT licensed.",
  },
  {
    question: "Is Playhead finished?",
    answer:
      "Not yet. Playhead is currently in beta and still under active development. Expect rough edges, missing features, and fast improvements.",
  },
  {
    question: "Does Playhead collect data?",
    answer:
      "Playhead is designed to be local-first. No accounts, no ads, and no cloud music library. If optional telemetry is included in beta builds, it should be clearly disclosed and easy to disable.",
  },
  {
    question: "What platforms does it support?",
    answer:
      "Playhead is currently focused on desktop. Platform support may change as the app develops.",
  },
  {
    question: "Can I contribute?",
    answer:
      "Yes. Contributions, issues, ideas, bug reports, and design feedback are welcome through GitHub.",
  },
];
