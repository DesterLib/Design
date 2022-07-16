module.exports = {
  stories: ['../src/**/*.stories.@(ts|tsx|js|jsx|mdx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', 'themeprovider-storybook/register'],
  typescript: {
    check: true,
  }
};
