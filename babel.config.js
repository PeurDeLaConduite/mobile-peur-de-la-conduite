// babel.config.js
module.exports = {
    presets: [
        [
            "next/babel",
            {
                // **PAS** de polyfills automatiques
                useBuiltIns: false,
                // ne pas charger core-js
                corejs: false,
                // cibler uniquement les navigateurs modulaires
                targets: { esmodules: true },
                // (optionnel) conserver les shipped proposals si besoin
                shippedProposals: true,
            },
        ],
    ],
};
