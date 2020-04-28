const { override, fixBabelImports, addLessLoader } = require('customize-cra')

module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
    }),
    addLessLoader({
        javascriptEnabled: true,
        // See all variables here:
        // https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less
        modifyVars: {
            '@layout-header-background': '#0D223D',
            '@layout-sider-background': '#0D223D',
        },
    })
)
