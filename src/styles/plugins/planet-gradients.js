import plugin from 'tailwindcss/plugin';

const planetColors = {
  core: '124, 58, 237',
  design: '249, 115, 22',
  framework: '168, 85, 247',
  markup: '6, 182, 212',
  tools: '236, 72, 153',
};
export default plugin(function ({ addUtilities }) {
  const utilities = Object.entries(planetColors).reduce((acc, [name, rgb]) => {
    acc[`.planet-${name}`] = {
      borderRadius: '9999px',
      background: `radial-gradient(97% 97% at 35% 28%, rgba(${rgb}, 0.93) 0%, rgba(${rgb}, 0.40) 45%, #0A0520 100%)`,
      boxShadow: `0 0 10px 0 rgba(${rgb}, 0.20)`,
    };
    acc[`.planet-${name}-desktop`] = {
      borderRadius: '9999px',
      background: `radial-gradient(97% 97% at 35% 28%, rgba(${rgb}, 0.93) 0%, rgba(${rgb}, 0.70) 45%, #0A0520 100%)`,
      boxShadow: `0 0 20px 4px rgba(${rgb}, 0.70)`,
    };
    acc[`.planet-${name}-desktop-hover`] = {
      boxShadow: `0 0 20px 0 var(--color-skill-${name}), 0 0 40px 0 var(--color-skill-${name}), inset -4px -3px 10px 0 rgba(0, 0, 0, 0.50);`,
      transition: 'all 0.3s',
    };
    return acc;
  }, {});

  addUtilities(utilities);
});
