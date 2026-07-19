// shape: 'square' (défaut), 'star', 'heart', 'lightning'
// color: couleur unie OU un gradient/motif CSS valide comme "background"
// glow: couleur unie utilisée pour la lueur (box-shadow ne supporte pas les dégradés)
const SKINS = [
  { id: 'mint',       name: 'Menthe',        color: '#7dfacb', glow: '#7dfacb', price: 0,   shape: 'square' },
  { id: 'violet',     name: 'Violet',        color: '#8b7dfa', glow: '#8b7dfa', price: 20,  shape: 'square' },
  { id: 'corail',     name: 'Corail',        color: '#fa7d7d', glow: '#fa7d7d', price: 30,  shape: 'square' },
  { id: 'or',         name: 'Or',            color: '#facc7d', glow: '#facc7d', price: 40,  shape: 'square' },
  { id: 'cyan',       name: 'Cyan',          color: '#7dd4fa', glow: '#7dd4fa', price: 50,  shape: 'square' },
  { id: 'rose',       name: 'Rose',          color: '#fa7dd4', glow: '#fa7dd4', price: 70,  shape: 'square' },
  { id: 'emeraude',   name: 'Émeraude',      color: '#2ecc71', glow: '#2ecc71', price: 60,  shape: 'square' },
  { id: 'lavande',    name: 'Lavande',       color: '#c8a2fa', glow: '#c8a2fa', price: 45,  shape: 'square' },
  { id: 'braise',     name: 'Braise',        color: '#e8590c', glow: '#e8590c', price: 80,  shape: 'square' },
  { id: 'glace',      name: 'Glace',         color: '#a8e8fa', glow: '#a8e8fa', price: 55,  shape: 'square' },
  { id: 'neon',       name: 'Néon vert',     color: '#39ff14', glow: '#39ff14', price: 65,  shape: 'square' },
  { id: 'saphir',     name: 'Saphir',        color: '#3d6bfa', glow: '#3d6bfa', price: 95,  shape: 'square' },
  { id: 'orbe',       name: 'Orbe',          color: '#c77dfa', glow: '#c77dfa', price: 40,  shape: 'square' },
  { id: 'prisme',     name: 'Prisme',        color: '#2dd4bf', glow: '#2dd4bf', price: 60,  shape: 'square' },
  { id: 'lune',       name: 'Lune',          color: '#2c3357', glow: '#7dd4fa', price: 70,  shape: 'square' },
  { id: 'sanctuaire', name: 'Sanctuaire',    color: '#fa9d3a', glow: '#fa9d3a', price: 110, shape: 'square' },
  { id: 'dore',       name: 'Doré brillant', color: 'repeating-linear-gradient(45deg, #facc7d, #facc7d 6px, #e8b95c 6px, #e8b95c 12px)', glow: '#facc7d', price: 100, shape: 'square' },
  { id: 'nuit',       name: 'Nuit étoilée',  color: 'radial-gradient(circle, #8b7dfa 1.5px, #12172a 1.5px) 0 0/10px 10px, #12172a', glow: '#8b7dfa', price: 90, shape: 'square' },
  { id: 'arcenciel',  name: 'Arc-en-ciel',   color: 'linear-gradient(135deg, #fa7d7d, #facc7d, #7dfacb, #7dd4fa, #8b7dfa)', glow: '#facc7d', price: 120, shape: 'square' },
  { id: 'etoile',     name: 'Étoile',        color: '#a78bfa', glow: '#a78bfa', price: 75,  shape: 'star' },
  { id: 'coeur',      name: 'Cœur',          color: '#f78fb3', glow: '#f78fb3', price: 55,  shape: 'heart' },
  { id: 'eclair',     name: 'Éclair',        color: '#fde047', glow: '#fde047', price: 85,  shape: 'lightning' }
];
window.SKINS = SKINS;
