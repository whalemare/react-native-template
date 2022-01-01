/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */
 const { getDefaultConfig } = require("metro-config");

 module.exports = (async () => {
   const {
     resolver: { sourceExts, assetExts }
   } = await getDefaultConfig(__dirname);
 
   const exts = process.env.RN_SRC_EXT
     ? process.env.RN_SRC_EXT.split(',')
       .concat(sourceExts)
     : sourceExts
 
   return {
     transformer: {
       babelTransformerPath: require.resolve("react-native-svg-transformer"),
       getTransformOptions: async () => ({
         transform: {
           experimentalImportSupport: false,
           inlineRequires: true,
         },
       }),
     },
     resolver: {
       assetExts: assetExts.filter(ext => ext !== "svg"),
       sourceExts: [...exts, "svg"],
     },
   }
 })();
 