export const COLORS = {
  // Deep space dark background
  bg: '#0A0A0F',
  bgCard: '#12121A',
  bgGlow: '#1A1A2E',

  // Matiks brand accent - electric violet + gold
  accent: '#7C3AFF',
  accentGlow: '#9D5FFF',
  gold: '#FFD166',
  goldDim: '#C9962A',

  // Score counter
  scoreText: '#FFFFFF',
  scoreShadow: '#7C3AFF',

  // Combo fire
  fireOrange: '#FF6B35',
  fireYellow: '#FFD166',

  // Rank
  rankText: '#E0E0FF',
  rankSub: '#7070A0',

  // Share button
  shareBase: '#7C3AFF',
  shareShimmer: '#BFA0FF',

  // Confetti palette
  confetti: ['#FF6B35', '#FFD166', '#7C3AFF', '#00D4AA', '#FF3D9A', '#4ECDC4'],

  white: '#FFFFFF',
  black: '#000000',
};

export const FONT = {
  // Use system fonts — we pick SF Pro / Roboto family
  display: undefined, // system bold
  body: undefined,
};

export const TIMING = {
  scoreCount: 2200,       // ms to count up
  comboDelay: 200,        // ms after score counter triggers combo
  rankDelay: 400,         // ms after score counter triggers rank
  shareDelay: 600,        // ms after score counter triggers share button
  shimmerDuration: 1800,  // share button shimmer loop
  flamePulse: 900,        // flame emoji pulse loop
};

export const GAME_DATA = {
  playerName: 'You',
  finalScore: 2840,
  comboStreak: 7,
  rank: 3,
  totalPlayers: 1200,
};