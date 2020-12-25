module.exports = {
    css: {
        loaderOptions: {
            sass: {
                additionalData:
                    `
                    @import "~@/global-styles/variables.scss";
                    @import "~@/global-styles/typography.scss";
                    `
            },
        }
    }
}
