import plugin from 'tailwindcss/plugin';

const planetColors = {
  design: '249, 115, 22',
  framework: '168, 85, 247',
  markup: '6, 182, 212',
  tool: '236, 72, 153',
};
export default plugin(function ({ addUtilities }) {
  const utilities = Object.entries(planetColors).reduce((acc, [name, rgb]) => {
    acc[`.planet-${name}`] = {
      borderRadius: '9999px',
      background: `radial-gradient(97% 97% at 35% 28%, rgba(${rgb}, 0.93) 0%, rgba(${rgb}, 0.40) 45%, #0A0520 100%)`,
      boxShadow: `0 0 10px 0 rgba(${rgb}, 0.20)`,
    };
    return acc;
  }, {});

  addUtilities(utilities);
});
