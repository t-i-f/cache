const path = require("path");
const tisf = require("../tisf/paths");

const root = path.join(tisf.root, 'mobile');
const android = path.join(root, 'android');
const androidSrc = path.join(android, 'app', 'src', 'main');

const src = path.join(root, 'src')
const assets = path.join(root, 'assets')
const fonts = path.join(assets, 'fonts')
const iconfig = path.join(assets, 'config')
const images = path.join(assets, 'images')
const svg = path.join(assets, 'svg')
const screens = path.join(src, 'screens')
const components = path.join(src, 'components')
const theme = path.join(src, 'theme')
const providers = path.join(src, 'providers')
const models = path.join(src, 'models')
const shared = path.join(src, 'shared')

module.exports = {
    root,
    src,
    assets,
    fonts,
    iconfig,
    images,
    svg,
    screens,
    components,
    theme,
    providers,
    models,
    shared,
    android,
    androidSrc
};