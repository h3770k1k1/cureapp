const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

const config = {
  transformer: {
    babelTransformerPath: require.resolve('react-native-svg-transformer'),
  },
  resolver: {
    assetExts: ['bin', 'txt', 'jpg', 'png', 'db'],
    sourceExts: ['js', 'json', 'ts', 'tsx', 'jsx', 'svg', 'cjs'],
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
