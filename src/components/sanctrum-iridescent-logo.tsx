"use client"

import React from "react"

export interface SanctrumIridescentLogoProps {
  className?: string
}

export const SanctrumIridescentLogo: React.FC<SanctrumIridescentLogoProps> = ({
  className = "",
}) => {
  return (
    <div
      className={`relative inline-flex flex-col items-center select-none ${className}`}
    >
      <svg
        viewBox="0 0 600 240"
        className="h-32 w-auto overflow-visible sm:h-44 md:h-52 lg:h-60"
      >
        <defs>
          {/* Individual Letter Pastel Gradients */}
          <linearGradient id="elysia-blue" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#93c5fd" />
            <stop offset="100%" stopColor="#60a5fa" />
          </linearGradient>

          <linearGradient id="elysia-sky" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#a5b4fc" />
            <stop offset="100%" stopColor="#818cf8" />
          </linearGradient>

          <linearGradient
            id="elysia-periwinkle"
            x1="0%"
            y1="0%"
            x2="0%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#c4b5fd" />
            <stop offset="100%" stopColor="#a78bfa" />
          </linearGradient>

          <linearGradient id="elysia-purple" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#d8b4fe" />
            <stop offset="100%" stopColor="#c084fc" />
          </linearGradient>

          <linearGradient id="elysia-pink" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#fbcfe8" />
            <stop offset="100%" stopColor="#f472b6" />
          </linearGradient>

          <linearGradient
            id="elysia-star-pink"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#fbcfe8" />
            <stop offset="100%" stopColor="#f472b6" />
          </linearGradient>
        </defs>

        {/* ============================================================ */}
        {/* 1. TOP-LEFT KATAKANA ARCH                                    */}
        {/* ============================================================ */}
        <g
          fontFamily="var(--font-mochiy), sans-serif"
          fontSize="28"
          fontWeight="900"
        >
          {/* サ (Tetap di posisi atas kiri kurva 'S') */}
          <g className="hero-kana-group">
            <text
              x="36"
              y="68"
              transform="rotate(-9 36 68)"
              fill="none"
              stroke="#d8b4fe"
              strokeWidth="20"
              strokeLinejoin="round"
              strokeLinecap="round"
            >
              サ
            </text>
            <text
              x="36"
              y="58"
              transform="rotate(-9 36 58)"
              fill="none"
              stroke="#ffffff"
              strokeWidth="20"
              strokeLinejoin="round"
              strokeLinecap="round"
            >
              サ
            </text>
            <text x="36" y="58" transform="rotate(-9 36 58)" fill="#c4b5fd">
              サ
            </text>
          </g>

          {/* ン (Tetap di puncak 'S') */}
          <g className="hero-kana-group">
            <text
              x="70"
              y="60"
              transform="rotate(-5 70 60)"
              fill="none"
              stroke="#d8b4fe"
              strokeWidth="20"
              strokeLinejoin="round"
              strokeLinecap="round"
            >
              ン
            </text>
            <text
              x="70"
              y="50"
              transform="rotate(-5 70 50)"
              fill="none"
              stroke="#ffffff"
              strokeWidth="20"
              strokeLinejoin="round"
              strokeLinecap="round"
            >
              ン
            </text>
            <text x="70" y="50" transform="rotate(-5 70 50)" fill="#fbcfe8">
              ン
            </text>
          </g>

          {/* ク (1. DITURUNKAN KE BAWAH) */}
          <g className="hero-kana-group">
            <text
              x="106"
              y="90"
              transform="rotate(-2 106 90)"
              fill="none"
              stroke="#d8b4fe"
              strokeWidth="20"
              strokeLinejoin="round"
              strokeLinecap="round"
            >
              ク
            </text>
            <text
              x="106"
              y="80"
              transform="rotate(-2 106 80)"
              fill="none"
              stroke="#ffffff"
              strokeWidth="20"
              strokeLinejoin="round"
              strokeLinecap="round"
            >
              ク
            </text>
            <text x="106" y="80" transform="rotate(-2 106 80)" fill="#93c5fd">
              ク
            </text>
          </g>

          {/* ト (2. DITURUNKAN KE BAWAH) */}
          <g className="hero-kana-group">
            <text
              x="142"
              y="84"
              transform="rotate(3 142 84)"
              fill="none"
              stroke="#d8b4fe"
              strokeWidth="20"
              strokeLinejoin="round"
              strokeLinecap="round"
            >
              ト
            </text>
            <text
              x="142"
              y="74"
              transform="rotate(3 142 74)"
              fill="none"
              stroke="#ffffff"
              strokeWidth="20"
              strokeLinejoin="round"
              strokeLinecap="round"
            >
              ト
            </text>
            <text x="142" y="74" transform="rotate(3 142 74)" fill="#60a5fa">
              ト
            </text>
          </g>

          {/* ラ (3. DITURUNKAN KE BAWAH) */}
          <g className="hero-kana-group">
            <text
              x="178"
              y="84"
              transform="rotate(8 178 84)"
              fill="none"
              stroke="#d8b4fe"
              strokeWidth="20"
              strokeLinejoin="round"
              strokeLinecap="round"
            >
              ラ
            </text>
            <text
              x="178"
              y="74"
              transform="rotate(8 178 74)"
              fill="none"
              stroke="#ffffff"
              strokeWidth="20"
              strokeLinejoin="round"
              strokeLinecap="round"
            >
              ラ
            </text>
            <text x="178" y="74" transform="rotate(8 178 74)" fill="#c084fc">
              ラ
            </text>
          </g>

          {/* ム */}
          <g className="hero-kana-group">
            <text
              x="214"
              y="86"
              transform="rotate(12 214 86)"
              fill="none"
              stroke="#d8b4fe"
              strokeWidth="20"
              strokeLinejoin="round"
              strokeLinecap="round"
            >
              ム
            </text>
            <text
              x="214"
              y="76"
              transform="rotate(12 214 76)"
              fill="none"
              stroke="#ffffff"
              strokeWidth="20"
              strokeLinejoin="round"
              strokeLinecap="round"
            >
              ム
            </text>
            <text x="214" y="76" transform="rotate(12 214 76)" fill="#f472b6">
              ム
            </text>
          </g>
        </g>

        {/* Heart */}
        <g className="hero-kana-group">
          <path
            d="M 256 88 C 256 82, 247 77, 242 83 C 237 77, 228 82, 228 88 C 228 95, 242 102, 242 102 C 242 102, 256 95, 256 88 Z"
            fill="none"
            stroke="#d8b4fe"
            strokeWidth="20"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
          <path
            d="M 256 78 C 256 72, 247 67, 242 73 C 237 67, 228 72, 228 78 C 228 85, 242 92, 242 92 C 242 92, 256 85, 256 78 Z"
            fill="none"
            stroke="#ffffff"
            strokeWidth="20"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
          <path
            d="M 256 78 C 256 72, 247 67, 242 73 C 237 67, 228 72, 228 78 C 228 85, 242 92, 242 92 C 242 92, 256 85, 256 78 Z"
            fill="#f472b6"
          />
        </g>

        {/* ============================================================ */}
        {/* 2. TOP-RIGHT DECORATIONS: SPARKLE STAR, CROSSES, TS BADGE    */}
        {/* ============================================================ */}

        {/* Big Puffy 4-Point Pink Sparkle Star */}
        <g className="hero-decor-group">
          <path
            d="M 415 28 Q 415 58 445 58 Q 415 58 415 88 Q 415 58 385 58 Q 415 58 415 28 Z"
            fill="none"
            stroke="#d8b4fe"
            strokeWidth="22"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
          <path
            d="M 415 18 Q 415 48 445 48 Q 415 48 415 78 Q 415 48 385 48 Q 415 48 415 18 Z"
            fill="none"
            stroke="#ffffff"
            strokeWidth="22"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
          <path
            d="M 415 18 Q 415 48 445 48 Q 415 48 415 78 Q 415 48 385 48 Q 415 48 415 18 Z"
            fill="url(#elysia-star-pink)"
          />
        </g>

        {/* Cross Sparkles */}
        <g className="hero-decor-group">
          <g
            transform="translate(465, 32)"
            stroke="#c084fc"
            strokeWidth="4.5"
            strokeLinecap="round"
          >
            <line x1="-7" y1="-7" x2="7" y2="7" />
            <line x1="7" y1="-7" x2="-7" y2="7" />
          </g>
          <g
            transform="translate(488, 50)"
            stroke="#93c5fd"
            strokeWidth="4"
            strokeLinecap="round"
          >
            <line x1="-5" y1="-5" x2="5" y2="5" />
            <line x1="5" y1="-5" x2="-5" y2="5" />
          </g>
        </g>

        {/* Pastel TypeScript TS Badge (Tilted slightly into typography) */}
        <g
          className="hero-decor-group"
          transform="translate(518, 40) rotate(10 19 16)"
        >
          <rect
            x="0"
            y="8"
            width="38"
            height="32"
            rx="10"
            fill="#d8b4fe"
            stroke="#d8b4fe"
            strokeWidth="6"
            strokeLinejoin="round"
          />
          <rect
            x="0"
            y="0"
            width="38"
            height="32"
            rx="10"
            fill="#93c5fd"
            stroke="#ffffff"
            strokeWidth="3"
          />
          <text
            x="19"
            y="22"
            fill="#1e3a8a"
            fontFamily="var(--font-mochiy), var(--font-dynapuff), sans-serif"
            fontSize="16"
            fontWeight="900"
            textAnchor="middle"
          >
            TS
          </text>
        </g>

        {/* ============================================================ */}
        {/* 3. MAIN LATIN WORD: "Sanctrum" (Individual Char Groups)      */}
        {/* ============================================================ */}
        <g
          fontFamily="var(--font-mochiy), var(--font-dynapuff), sans-serif"
          fontSize="104"
          fontWeight="900"
        >
          {/* S */}
          <g className="hero-char-group">
            <text
              transform="translate(26, 176) rotate(-7)"
              fill="none"
              stroke="#d8b4fe"
              strokeWidth="24"
              strokeLinejoin="round"
              strokeLinecap="round"
            >
              S
            </text>
            <text
              transform="translate(26, 166) rotate(-7)"
              fill="none"
              stroke="#ffffff"
              strokeWidth="24"
              strokeLinejoin="round"
              strokeLinecap="round"
            >
              S
            </text>
            <text
              transform="translate(26, 166) rotate(-7)"
              fill="url(#elysia-blue)"
            >
              S
            </text>
          </g>

          {/* a (Adjusted position and upright rotation for distinct 'a' stem) */}
          <g className="hero-char-group">
            <text
              transform="translate(90, 182) rotate(2)"
              fill="none"
              stroke="#d8b4fe"
              strokeWidth="24"
              strokeLinejoin="round"
              strokeLinecap="round"
            >
              a
            </text>
            <text
              transform="translate(90, 172) rotate(2)"
              fill="none"
              stroke="#ffffff"
              strokeWidth="24"
              strokeLinejoin="round"
              strokeLinecap="round"
            >
              a
            </text>
            <text
              transform="translate(90, 172) rotate(2)"
              fill="url(#elysia-sky)"
            >
              a
            </text>
          </g>

          {/* n (Moved right to x=168 to give 'a' breathing room) */}
          <g className="hero-char-group">
            <text
              transform="translate(168, 176) rotate(-3)"
              fill="none"
              stroke="#d8b4fe"
              strokeWidth="24"
              strokeLinejoin="round"
              strokeLinecap="round"
            >
              n
            </text>
            <text
              transform="translate(168, 166) rotate(-3)"
              fill="none"
              stroke="#ffffff"
              strokeWidth="24"
              strokeLinejoin="round"
              strokeLinecap="round"
            >
              n
            </text>
            <text
              transform="translate(168, 166) rotate(-3)"
              fill="url(#elysia-sky)"
            >
              n
            </text>
          </g>

          {/* c */}
          <g className="hero-char-group">
            <text
              transform="translate(228, 183) rotate(5)"
              fill="none"
              stroke="#d8b4fe"
              strokeWidth="24"
              strokeLinejoin="round"
              strokeLinecap="round"
            >
              c
            </text>
            <text
              transform="translate(228, 173) rotate(5)"
              fill="none"
              stroke="#ffffff"
              strokeWidth="24"
              strokeLinejoin="round"
              strokeLinecap="round"
            >
              c
            </text>
            <text
              transform="translate(228, 173) rotate(5)"
              fill="url(#elysia-periwinkle)"
            >
              c
            </text>
          </g>

          {/* t */}
          <g className="hero-char-group">
            <text
              transform="translate(286, 176) rotate(-4)"
              fill="none"
              stroke="#d8b4fe"
              strokeWidth="24"
              strokeLinejoin="round"
              strokeLinecap="round"
            >
              t
            </text>
            <text
              transform="translate(286, 166) rotate(-4)"
              fill="none"
              stroke="#ffffff"
              strokeWidth="24"
              strokeLinejoin="round"
              strokeLinecap="round"
            >
              t
            </text>
            <text
              transform="translate(286, 166) rotate(-4)"
              fill="url(#elysia-periwinkle)"
            >
              t
            </text>
          </g>

          {/* r */}
          <g className="hero-char-group">
            <text
              transform="translate(334, 182) rotate(5)"
              fill="none"
              stroke="#d8b4fe"
              strokeWidth="24"
              strokeLinejoin="round"
              strokeLinecap="round"
            >
              r
            </text>
            <text
              transform="translate(334, 172) rotate(5)"
              fill="none"
              stroke="#ffffff"
              strokeWidth="24"
              strokeLinejoin="round"
              strokeLinecap="round"
            >
              r
            </text>
            <text
              transform="translate(334, 172) rotate(5)"
              fill="url(#elysia-purple)"
            >
              r
            </text>
          </g>

          {/* u */}
          <g className="hero-char-group">
            <text
              transform="translate(388, 175) rotate(-6)"
              fill="none"
              stroke="#d8b4fe"
              strokeWidth="24"
              strokeLinejoin="round"
              strokeLinecap="round"
            >
              u
            </text>
            <text
              transform="translate(388, 165) rotate(-6)"
              fill="none"
              stroke="#ffffff"
              strokeWidth="24"
              strokeLinejoin="round"
              strokeLinecap="round"
            >
              u
            </text>
            <text
              transform="translate(388, 165) rotate(-6)"
              fill="url(#elysia-pink)"
            >
              u
            </text>
          </g>

          {/* m (with cat ears & tail) */}
          <g className="hero-char-group">
            {/* Cat Ears */}
            <g
              transform="translate(474, 180) rotate(4)"
              fill="none"
              stroke="#d8b4fe"
              strokeWidth="24"
              strokeLinejoin="round"
              strokeLinecap="round"
            >
              <path d="M 12 -58 Q 22 -82 36 -66 Z" />
              <path d="M 62 -66 Q 76 -82 86 -58 Z" />
            </g>
            <g
              transform="translate(474, 170) rotate(4)"
              fill="none"
              stroke="#ffffff"
              strokeWidth="24"
              strokeLinejoin="round"
              strokeLinecap="round"
            >
              <path d="M 12 -58 Q 22 -82 36 -66 Z" />
              <path d="M 62 -66 Q 76 -82 86 -58 Z" />
            </g>
            <g
              transform="translate(474, 170) rotate(4)"
              fill="#c084fc"
              stroke="#ffffff"
              strokeWidth="3.5"
              strokeLinejoin="round"
            >
              <path d="M 12 -58 Q 22 -82 36 -66 Z" />
              <path d="M 62 -66 Q 76 -82 86 -58 Z" />
            </g>

            {/* Cat Tail */}
            <g transform="translate(474, 180) rotate(4)">
              <path
                d="M 94 6 Q 120 14 114 30 Q 102 40 86 30"
                fill="none"
                stroke="#d8b4fe"
                strokeWidth="24"
                strokeLinejoin="round"
                strokeLinecap="round"
              />
            </g>
            <g transform="translate(474, 170) rotate(4)">
              <path
                d="M 94 6 Q 120 14 114 30 Q 102 40 86 30"
                fill="none"
                stroke="#ffffff"
                strokeWidth="24"
                strokeLinejoin="round"
                strokeLinecap="round"
              />
            </g>
            <g transform="translate(474, 170) rotate(4)">
              <path
                d="M 94 6 Q 120 14 114 30 Q 102 40 86 30"
                fill="none"
                stroke="#c084fc"
                strokeWidth="8"
                strokeLinecap="round"
              />
            </g>

            {/* Letter 'm' */}
            <text
              transform="translate(454, 180) rotate(4)"
              fill="none"
              stroke="#d8b4fe"
              strokeWidth="24"
              strokeLinejoin="round"
              strokeLinecap="round"
            >
              m
            </text>
            <text
              transform="translate(454, 170) rotate(4)"
              fill="none"
              stroke="#ffffff"
              strokeWidth="24"
              strokeLinejoin="round"
              strokeLinecap="round"
            >
              m
            </text>
            <text
              transform="translate(454, 170) rotate(4)"
              fill="url(#elysia-pink)"
            >
              m
            </text>
          </g>
        </g>
      </svg>
    </div>
  )
}
