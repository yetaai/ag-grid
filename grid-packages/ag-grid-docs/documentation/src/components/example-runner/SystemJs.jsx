import React from 'react';
import { localPrefix, agGridVersion } from './consts';
import { isDevelopment } from './helpers';

const devConfiguration = {
    gridPackagesMap: {
        /* START OF GRID CSS DEV - DO NOT DELETE */
        "@ag-grid-community/all-modules/dist/styles/ag-grid.css": `${localPrefix}/@ag-grid-community/all-modules/dist/styles/ag-grid.css`,
        "@ag-grid-community/core/dist/styles/ag-grid.css": `${localPrefix}/@ag-grid-community/core/dist/styles/ag-grid.css`,
        "@ag-grid-community/all-modules/dist/styles/ag-theme-alpine-dark.css": `${localPrefix}/@ag-grid-community/all-modules/dist/styles/ag-theme-alpine-dark.css`,
        "@ag-grid-community/core/dist/styles/ag-theme-alpine-dark.css": `${localPrefix}/@ag-grid-community/core/dist/styles/ag-theme-alpine-dark.css`,
        "@ag-grid-community/all-modules/dist/styles/ag-theme-alpine.css": `${localPrefix}/@ag-grid-community/all-modules/dist/styles/ag-theme-alpine.css`,
        "@ag-grid-community/core/dist/styles/ag-theme-alpine.css": `${localPrefix}/@ag-grid-community/core/dist/styles/ag-theme-alpine.css`,
        "@ag-grid-community/all-modules/dist/styles/ag-theme-balham-dark.css": `${localPrefix}/@ag-grid-community/all-modules/dist/styles/ag-theme-balham-dark.css`,
        "@ag-grid-community/core/dist/styles/ag-theme-balham-dark.css": `${localPrefix}/@ag-grid-community/core/dist/styles/ag-theme-balham-dark.css`,
        "@ag-grid-community/all-modules/dist/styles/ag-theme-balham.css": `${localPrefix}/@ag-grid-community/all-modules/dist/styles/ag-theme-balham.css`,
        "@ag-grid-community/core/dist/styles/ag-theme-balham.css": `${localPrefix}/@ag-grid-community/core/dist/styles/ag-theme-balham.css`,
        "@ag-grid-community/all-modules/dist/styles/ag-theme-blue.css": `${localPrefix}/@ag-grid-community/all-modules/dist/styles/ag-theme-blue.css`,
        "@ag-grid-community/core/dist/styles/ag-theme-blue.css": `${localPrefix}/@ag-grid-community/core/dist/styles/ag-theme-blue.css`,
        "@ag-grid-community/all-modules/dist/styles/ag-theme-bootstrap.css": `${localPrefix}/@ag-grid-community/all-modules/dist/styles/ag-theme-bootstrap.css`,
        "@ag-grid-community/core/dist/styles/ag-theme-bootstrap.css": `${localPrefix}/@ag-grid-community/core/dist/styles/ag-theme-bootstrap.css`,
        "@ag-grid-community/all-modules/dist/styles/ag-theme-dark.css": `${localPrefix}/@ag-grid-community/all-modules/dist/styles/ag-theme-dark.css`,
        "@ag-grid-community/core/dist/styles/ag-theme-dark.css": `${localPrefix}/@ag-grid-community/core/dist/styles/ag-theme-dark.css`,
        "@ag-grid-community/all-modules/dist/styles/ag-theme-fresh.css": `${localPrefix}/@ag-grid-community/all-modules/dist/styles/ag-theme-fresh.css`,
        "@ag-grid-community/core/dist/styles/ag-theme-fresh.css": `${localPrefix}/@ag-grid-community/core/dist/styles/ag-theme-fresh.css`,
        "@ag-grid-community/all-modules/dist/styles/ag-theme-material.css": `${localPrefix}/@ag-grid-community/all-modules/dist/styles/ag-theme-material.css`,
        "@ag-grid-community/core/dist/styles/ag-theme-material.css": `${localPrefix}/@ag-grid-community/core/dist/styles/ag-theme-material.css`,
        /* END OF GRID CSS DEV - DO NOT DELETE */
        /* START OF GRID MODULES DEV - DO NOT DELETE */
        "@ag-grid-community/all-modules": `${localPrefix}/@ag-grid-community/all-modules`,
        "@ag-grid-community/client-side-row-model": `${localPrefix}/@ag-grid-community/client-side-row-model`,
        "@ag-grid-community/core": `${localPrefix}/@ag-grid-community/core`,
        "@ag-grid-community/csv-export": `${localPrefix}/@ag-grid-community/csv-export`,
        "@ag-grid-community/infinite-row-model": `${localPrefix}/@ag-grid-community/infinite-row-model`,
        "ag-charts-community": `${localPrefix}/ag-charts-community`,
        "@ag-grid-enterprise/all-modules": `${localPrefix}/@ag-grid-enterprise/all-modules`,
        "@ag-grid-enterprise/charts": `${localPrefix}/@ag-grid-enterprise/charts`,
        "@ag-grid-enterprise/clipboard": `${localPrefix}/@ag-grid-enterprise/clipboard`,
        "@ag-grid-enterprise/column-tool-panel": `${localPrefix}/@ag-grid-enterprise/column-tool-panel`,
        "@ag-grid-enterprise/core": `${localPrefix}/@ag-grid-enterprise/core`,
        "@ag-grid-enterprise/date-time-cell-editor": `${localPrefix}/@ag-grid-enterprise/date-time-cell-editor`,
        "@ag-grid-enterprise/excel-export": `${localPrefix}/@ag-grid-enterprise/excel-export`,
        "@ag-grid-enterprise/filter-tool-panel": `${localPrefix}/@ag-grid-enterprise/filter-tool-panel`,
        "@ag-grid-enterprise/master-detail": `${localPrefix}/@ag-grid-enterprise/master-detail`,
        "@ag-grid-enterprise/menu": `${localPrefix}/@ag-grid-enterprise/menu`,
        "@ag-grid-enterprise/multi-filter": `${localPrefix}/@ag-grid-enterprise/multi-filter`,
        "@ag-grid-enterprise/range-selection": `${localPrefix}/@ag-grid-enterprise/range-selection`,
        "@ag-grid-enterprise/rich-select": `${localPrefix}/@ag-grid-enterprise/rich-select`,
        "@ag-grid-enterprise/row-grouping": `${localPrefix}/@ag-grid-enterprise/row-grouping`,
        "@ag-grid-enterprise/server-side-row-model": `${localPrefix}/@ag-grid-enterprise/server-side-row-model`,
        "@ag-grid-enterprise/set-filter": `${localPrefix}/@ag-grid-enterprise/set-filter`,
        "@ag-grid-enterprise/side-bar": `${localPrefix}/@ag-grid-enterprise/side-bar`,
        "@ag-grid-enterprise/status-bar": `${localPrefix}/@ag-grid-enterprise/status-bar`,
        "@ag-grid-enterprise/viewport-row-model": `${localPrefix}/@ag-grid-enterprise/viewport-row-model`,
        /* END OF GRID MODULES DEV - DO NOT DELETE */
        "@ag-grid-community/react": `${localPrefix}/@ag-grid-community/react`,
        "@ag-grid-community/angular": `${localPrefix}/@ag-grid-community/angular`,
        "@ag-grid-community/vue": `${localPrefix}/@ag-grid-community/vue`,
        "ag-charts-react": `${localPrefix}/ag-charts-react`,
        "ag-charts-angular": `${localPrefix}/ag-charts-angular`,
        "ag-charts-vue": `${localPrefix}/ag-charts-vue`,
        "ag-grid-community": `${localPrefix}/ag-grid-community`,
        "ag-grid-enterprise": `${localPrefix}/ag-grid-enterprise`,
        "ag-grid-angular": `${localPrefix}/ag-grid-angular`,
        "ag-grid-react": `${localPrefix}/ag-grid-react`,
        "ag-grid-vue": `${localPrefix}/ag-grid-vue`
    },
    gridCommunityModulesMap: {
        /* START OF GRID COMMUNITY MODULES PATHS DEV - DO NOT DELETE */
        "@ag-grid-community/all-modules": `${localPrefix}/@ag-grid-community/all-modules/dist/ag-grid-community.cjs.js`,
        "@ag-grid-community/client-side-row-model": `${localPrefix}/@ag-grid-community/all-modules/dist/ag-grid-community.cjs.js`,
        "@ag-grid-community/core": `${localPrefix}/@ag-grid-community/all-modules/dist/ag-grid-community.cjs.js`,
        "@ag-grid-community/csv-export": `${localPrefix}/@ag-grid-community/all-modules/dist/ag-grid-community.cjs.js`,
        "@ag-grid-community/infinite-row-model": `${localPrefix}/@ag-grid-community/all-modules/dist/ag-grid-community.cjs.js`,
        /* END OF GRID COMMUNITY MODULES PATHS DEV - DO NOT DELETE */
        "ag-charts-community": `${localPrefix}/ag-charts-community/dist/ag-charts-community.cjs.js`,
    },
    gridEnterpriseModulesMap: {
        /* START OF GRID ENTERPRISE MODULES PATHS DEV - DO NOT DELETE */
        "@ag-grid-community/all-modules": `${localPrefix}/@ag-grid-enterprise/all-modules/dist/ag-grid-enterprise.cjs.js`,
        "@ag-grid-community/client-side-row-model": `${localPrefix}/@ag-grid-enterprise/all-modules/dist/ag-grid-enterprise.cjs.js`,
        "@ag-grid-community/core": `${localPrefix}/@ag-grid-enterprise/all-modules/dist/ag-grid-enterprise.cjs.js`,
        "@ag-grid-community/csv-export": `${localPrefix}/@ag-grid-enterprise/all-modules/dist/ag-grid-enterprise.cjs.js`,
        "@ag-grid-community/infinite-row-model": `${localPrefix}/@ag-grid-enterprise/all-modules/dist/ag-grid-enterprise.cjs.js`,
        "@ag-grid-enterprise/all-modules": `${localPrefix}/@ag-grid-enterprise/all-modules/dist/ag-grid-enterprise.cjs.js`,
        "@ag-grid-enterprise/charts": `${localPrefix}/@ag-grid-enterprise/all-modules/dist/ag-grid-enterprise.cjs.js`,
        "@ag-grid-enterprise/clipboard": `${localPrefix}/@ag-grid-enterprise/all-modules/dist/ag-grid-enterprise.cjs.js`,
        "@ag-grid-enterprise/column-tool-panel": `${localPrefix}/@ag-grid-enterprise/all-modules/dist/ag-grid-enterprise.cjs.js`,
        "@ag-grid-enterprise/core": `${localPrefix}/@ag-grid-enterprise/all-modules/dist/ag-grid-enterprise.cjs.js`,
        "@ag-grid-enterprise/date-time-cell-editor": `${localPrefix}/@ag-grid-enterprise/all-modules/dist/ag-grid-enterprise.cjs.js`,
        "@ag-grid-enterprise/excel-export": `${localPrefix}/@ag-grid-enterprise/all-modules/dist/ag-grid-enterprise.cjs.js`,
        "@ag-grid-enterprise/filter-tool-panel": `${localPrefix}/@ag-grid-enterprise/all-modules/dist/ag-grid-enterprise.cjs.js`,
        "@ag-grid-enterprise/master-detail": `${localPrefix}/@ag-grid-enterprise/all-modules/dist/ag-grid-enterprise.cjs.js`,
        "@ag-grid-enterprise/menu": `${localPrefix}/@ag-grid-enterprise/all-modules/dist/ag-grid-enterprise.cjs.js`,
        "@ag-grid-enterprise/multi-filter": `${localPrefix}/@ag-grid-enterprise/all-modules/dist/ag-grid-enterprise.cjs.js`,
        "@ag-grid-enterprise/range-selection": `${localPrefix}/@ag-grid-enterprise/all-modules/dist/ag-grid-enterprise.cjs.js`,
        "@ag-grid-enterprise/rich-select": `${localPrefix}/@ag-grid-enterprise/all-modules/dist/ag-grid-enterprise.cjs.js`,
        "@ag-grid-enterprise/row-grouping": `${localPrefix}/@ag-grid-enterprise/all-modules/dist/ag-grid-enterprise.cjs.js`,
        "@ag-grid-enterprise/server-side-row-model": `${localPrefix}/@ag-grid-enterprise/all-modules/dist/ag-grid-enterprise.cjs.js`,
        "@ag-grid-enterprise/set-filter": `${localPrefix}/@ag-grid-enterprise/all-modules/dist/ag-grid-enterprise.cjs.js`,
        "@ag-grid-enterprise/side-bar": `${localPrefix}/@ag-grid-enterprise/all-modules/dist/ag-grid-enterprise.cjs.js`,
        "@ag-grid-enterprise/status-bar": `${localPrefix}/@ag-grid-enterprise/all-modules/dist/ag-grid-enterprise.cjs.js`,
        "@ag-grid-enterprise/viewport-row-model": `${localPrefix}/@ag-grid-enterprise/all-modules/dist/ag-grid-enterprise.cjs.js`,
        /* END OF GRID ENTERPRISE MODULES PATHS DEV - DO NOT DELETE */
        "ag-charts-community": `${localPrefix}/ag-charts-community/dist/ag-charts-community.cjs.js`
    }
};

const prodConfiguration = {
    gridPackagesMap: {
        /* START OF GRID CSS PROD - DO NOT DELETE */
        "@ag-grid-community/all-modules/dist/styles/ag-grid.css": `https://unpkg.com/@ag-grid-community/all-modules@${agGridVersion}/dist/styles/ag-grid.css`,
        "@ag-grid-community/core/dist/styles/ag-grid.css": `https://unpkg.com/@ag-grid-community/core@${agGridVersion}/dist/styles/ag-grid.css`,
        "@ag-grid-community/all-modules/dist/styles/ag-theme-alpine-dark.css": `https://unpkg.com/@ag-grid-community/all-modules@${agGridVersion}/dist/styles/ag-theme-alpine-dark.css`,
        "@ag-grid-community/core/dist/styles/ag-theme-alpine-dark.css": `https://unpkg.com/@ag-grid-community/core@${agGridVersion}/dist/styles/ag-theme-alpine-dark.css`,
        "@ag-grid-community/all-modules/dist/styles/ag-theme-alpine.css": `https://unpkg.com/@ag-grid-community/all-modules@${agGridVersion}/dist/styles/ag-theme-alpine.css`,
        "@ag-grid-community/core/dist/styles/ag-theme-alpine.css": `https://unpkg.com/@ag-grid-community/core@${agGridVersion}/dist/styles/ag-theme-alpine.css`,
        "@ag-grid-community/all-modules/dist/styles/ag-theme-balham-dark.css": `https://unpkg.com/@ag-grid-community/all-modules@${agGridVersion}/dist/styles/ag-theme-balham-dark.css`,
        "@ag-grid-community/core/dist/styles/ag-theme-balham-dark.css": `https://unpkg.com/@ag-grid-community/core@${agGridVersion}/dist/styles/ag-theme-balham-dark.css`,
        "@ag-grid-community/all-modules/dist/styles/ag-theme-balham.css": `https://unpkg.com/@ag-grid-community/all-modules@${agGridVersion}/dist/styles/ag-theme-balham.css`,
        "@ag-grid-community/core/dist/styles/ag-theme-balham.css": `https://unpkg.com/@ag-grid-community/core@${agGridVersion}/dist/styles/ag-theme-balham.css`,
        "@ag-grid-community/all-modules/dist/styles/ag-theme-blue.css": `https://unpkg.com/@ag-grid-community/all-modules@${agGridVersion}/dist/styles/ag-theme-blue.css`,
        "@ag-grid-community/core/dist/styles/ag-theme-blue.css": `https://unpkg.com/@ag-grid-community/core@${agGridVersion}/dist/styles/ag-theme-blue.css`,
        "@ag-grid-community/all-modules/dist/styles/ag-theme-bootstrap.css": `https://unpkg.com/@ag-grid-community/all-modules@${agGridVersion}/dist/styles/ag-theme-bootstrap.css`,
        "@ag-grid-community/core/dist/styles/ag-theme-bootstrap.css": `https://unpkg.com/@ag-grid-community/core@${agGridVersion}/dist/styles/ag-theme-bootstrap.css`,
        "@ag-grid-community/all-modules/dist/styles/ag-theme-dark.css": `https://unpkg.com/@ag-grid-community/all-modules@${agGridVersion}/dist/styles/ag-theme-dark.css`,
        "@ag-grid-community/core/dist/styles/ag-theme-dark.css": `https://unpkg.com/@ag-grid-community/core@${agGridVersion}/dist/styles/ag-theme-dark.css`,
        "@ag-grid-community/all-modules/dist/styles/ag-theme-fresh.css": `https://unpkg.com/@ag-grid-community/all-modules@${agGridVersion}/dist/styles/ag-theme-fresh.css`,
        "@ag-grid-community/core/dist/styles/ag-theme-fresh.css": `https://unpkg.com/@ag-grid-community/core@${agGridVersion}/dist/styles/ag-theme-fresh.css`,
        "@ag-grid-community/all-modules/dist/styles/ag-theme-material.css": `https://unpkg.com/@ag-grid-community/all-modules@${agGridVersion}/dist/styles/ag-theme-material.css`,
        "@ag-grid-community/core/dist/styles/ag-theme-material.css": `https://unpkg.com/@ag-grid-community/core@${agGridVersion}/dist/styles/ag-theme-material.css`,
        /* END OF GRID CSS PROD - DO NOT DELETE */
        "@ag-grid-community/react": `https://unpkg.com/@ag-grid-community/react@${agGridVersion}/`,
        "@ag-grid-community/angular": `https://unpkg.com/@ag-grid-community/angular@${agGridVersion}/`,
        "@ag-grid-community/vue": `https://unpkg.com/@ag-grid-community/vue@${agGridVersion}/`,
        "ag-grid-community": `https://unpkg.com/ag-grid-community@${agGridVersion}/`,
        "ag-grid-enterprise": `https://unpkg.com/ag-grid-enterprise@${agGridVersion}/`,
        "ag-grid-angular": `https://unpkg.com/ag-grid-angular@${agGridVersion}/`,
        "ag-grid-react": `https://unpkg.com/ag-grid-react@${agGridVersion}/`,
        "ag-grid-vue": `https://unpkg.com/ag-grid-vue@${agGridVersion}/`
    },
    gridCommunityModulesMap: {
        /* START OF GRID COMMUNITY MODULES PATHS PROD - DO NOT DELETE */
        "@ag-grid-community/all-modules": `https://unpkg.com/@ag-grid-community/all-modules@${agGridVersion}/dist/ag-grid-community.cjs.js`,
        "@ag-grid-community/client-side-row-model": `https://unpkg.com/@ag-grid-community/all-modules@${agGridVersion}/dist/ag-grid-community.cjs.js`,
        "@ag-grid-community/core": `https://unpkg.com/@ag-grid-community/all-modules@${agGridVersion}/dist/ag-grid-community.cjs.js`,
        "@ag-grid-community/csv-export": `https://unpkg.com/@ag-grid-community/all-modules@${agGridVersion}/dist/ag-grid-community.cjs.js`,
        "@ag-grid-community/infinite-row-model": `https://unpkg.com/@ag-grid-community/all-modules@${agGridVersion}/dist/ag-grid-community.cjs.js`,
        /* END OF GRID COMMUNITY MODULES PATHS PROD - DO NOT DELETE */
    },
    gridEnterpriseModulesMap: {
        /* START OF GRID ENTERPRISE MODULES PATHS PROD - DO NOT DELETE */
        "@ag-grid-community/all-modules": `https://unpkg.com/@ag-grid-enterprise/all-modules@${agGridVersion}/dist/ag-grid-enterprise.cjs.js`,
        "@ag-grid-community/client-side-row-model": `https://unpkg.com/@ag-grid-enterprise/all-modules@${agGridVersion}/dist/ag-grid-enterprise.cjs.js`,
        "@ag-grid-community/core": `https://unpkg.com/@ag-grid-enterprise/all-modules@${agGridVersion}/dist/ag-grid-enterprise.cjs.js`,
        "@ag-grid-community/csv-export": `https://unpkg.com/@ag-grid-enterprise/all-modules@${agGridVersion}/dist/ag-grid-enterprise.cjs.js`,
        "@ag-grid-community/infinite-row-model": `https://unpkg.com/@ag-grid-enterprise/all-modules@${agGridVersion}/dist/ag-grid-enterprise.cjs.js`,
        "@ag-grid-enterprise/all-modules": `https://unpkg.com/@ag-grid-enterprise/all-modules@${agGridVersion}/dist/ag-grid-enterprise.cjs.js`,
        "@ag-grid-enterprise/charts": `https://unpkg.com/@ag-grid-enterprise/all-modules@${agGridVersion}/dist/ag-grid-enterprise.cjs.js`,
        "@ag-grid-enterprise/clipboard": `https://unpkg.com/@ag-grid-enterprise/all-modules@${agGridVersion}/dist/ag-grid-enterprise.cjs.js`,
        "@ag-grid-enterprise/column-tool-panel": `https://unpkg.com/@ag-grid-enterprise/all-modules@${agGridVersion}/dist/ag-grid-enterprise.cjs.js`,
        "@ag-grid-enterprise/core": `https://unpkg.com/@ag-grid-enterprise/all-modules@${agGridVersion}/dist/ag-grid-enterprise.cjs.js`,
        "@ag-grid-enterprise/date-time-cell-editor": `https://unpkg.com/@ag-grid-enterprise/all-modules@${agGridVersion}/dist/ag-grid-enterprise.cjs.js`,
        "@ag-grid-enterprise/excel-export": `https://unpkg.com/@ag-grid-enterprise/all-modules@${agGridVersion}/dist/ag-grid-enterprise.cjs.js`,
        "@ag-grid-enterprise/filter-tool-panel": `https://unpkg.com/@ag-grid-enterprise/all-modules@${agGridVersion}/dist/ag-grid-enterprise.cjs.js`,
        "@ag-grid-enterprise/master-detail": `https://unpkg.com/@ag-grid-enterprise/all-modules@${agGridVersion}/dist/ag-grid-enterprise.cjs.js`,
        "@ag-grid-enterprise/menu": `https://unpkg.com/@ag-grid-enterprise/all-modules@${agGridVersion}/dist/ag-grid-enterprise.cjs.js`,
        "@ag-grid-enterprise/multi-filter": `https://unpkg.com/@ag-grid-enterprise/all-modules@${agGridVersion}/dist/ag-grid-enterprise.cjs.js`,
        "@ag-grid-enterprise/range-selection": `https://unpkg.com/@ag-grid-enterprise/all-modules@${agGridVersion}/dist/ag-grid-enterprise.cjs.js`,
        "@ag-grid-enterprise/rich-select": `https://unpkg.com/@ag-grid-enterprise/all-modules@${agGridVersion}/dist/ag-grid-enterprise.cjs.js`,
        "@ag-grid-enterprise/row-grouping": `https://unpkg.com/@ag-grid-enterprise/all-modules@${agGridVersion}/dist/ag-grid-enterprise.cjs.js`,
        "@ag-grid-enterprise/server-side-row-model": `https://unpkg.com/@ag-grid-enterprise/all-modules@${agGridVersion}/dist/ag-grid-enterprise.cjs.js`,
        "@ag-grid-enterprise/set-filter": `https://unpkg.com/@ag-grid-enterprise/all-modules@${agGridVersion}/dist/ag-grid-enterprise.cjs.js`,
        "@ag-grid-enterprise/side-bar": `https://unpkg.com/@ag-grid-enterprise/all-modules@${agGridVersion}/dist/ag-grid-enterprise.cjs.js`,
        "@ag-grid-enterprise/status-bar": `https://unpkg.com/@ag-grid-enterprise/all-modules@${agGridVersion}/dist/ag-grid-enterprise.cjs.js`,
        "@ag-grid-enterprise/viewport-row-model": `https://unpkg.com/@ag-grid-enterprise/all-modules@${agGridVersion}/dist/ag-grid-enterprise.cjs.js`,
        /* END OF GRID ENTERPRISE MODULES PATHS PROD - DO NOT DELETE */
    }
};

const SystemJs = ({ boilerplatePath, appLocation, startFile, options }) => {
    const { enterprise: isEnterprise } = options;
    const systemJsPath = `${boilerplatePath}systemjs.config${isDevelopment() ? '.dev' : ''}.js`;
    const configuration = isDevelopment() ? devConfiguration : prodConfiguration;
    const { gridPackagesMap, gridCommunityModulesMap, gridEnterpriseModulesMap } = configuration;

    return <>
        <script dangerouslySetInnerHTML={{
            __html: `var appLocation = '${appLocation}';
        var boilerplatePath = '${boilerplatePath}';
        var systemJsMap = ${JSON.stringify(gridPackagesMap, null, 2)};
        var systemJsPaths = ${JSON.stringify(isEnterprise ? gridEnterpriseModulesMap : gridCommunityModulesMap, null, 2)};`
        }}></script>

        <script src="https://unpkg.com/systemjs@0.19.47/dist/system.js"></script>
        <script src={systemJsPath}></script>
        <script dangerouslySetInnerHTML={{ __html: `System.import('${startFile}').catch(function(err) { console.error(err); });` }}></script>
    </>;
};

export default SystemJs;