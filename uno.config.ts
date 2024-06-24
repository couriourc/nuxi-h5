import {defineConfig, presetAttributify, presetIcons, presetWind} from "unocss";

import presetRemToPx from '@unocss/preset-rem-to-px';

export default defineConfig({
    presets: [
        presetAttributify(),
        presetIcons(),
        presetWind(),
        presetRemToPx(),
    ]
});
