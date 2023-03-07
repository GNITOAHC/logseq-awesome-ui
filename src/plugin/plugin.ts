import { doc, body, globals } from '../modules/globals/globals';
import { checkPluginUpdate  } from '../utils/utils';

import { menuCalendarLoad, menuCalendarUnload } from '../modules/extPlugins/calendar/calendar';
import { setFeaturesCSSVars } from '../modules/features/features';
import { rightSidebarLoad, rightSidebarUnload } from '../modules/sidebars/sidebars';
import { setTabsCSSVarsStyles, toggleTabs, tabsUnload } from '../modules/extPlugins/tabs/tabs';
import { modalObserverLoad, modalObserverUnload } from './modalObserver';
import { compactSidebarMenuLoad, compactSidebarMenuUnload } from '../modules/sidebars/compactSidebarMenu/compactSidebarMenu';
import { headerLoad, headerUnload } from '../modules/header/header';
import { headerFlashcardsButtonLoad, headerFlashcardsButtonUnload } from '../modules/header/flashcardsButton/flashcardButton';
import { hideRightSidebarToolbarLoad, hideRightSidebarToolbarUnload } from '../modules/sidebars/hideRightSidebarToolbar/hideRightSidebarToolbar';

export const pluginLoad = () => {
    body.classList.add(globals.isPluginEnabled);
    registerPlugin();

    runStuff();

    setTimeout(() => {
        // Listen plugin unload
        logseq.beforeunload(async () => {
            pluginUnload();
        });
    }, 2000)

    if (globals.pluginConfig.pluginUpdateNotify) {
        setTimeout(() => {
            checkPluginUpdate();
        }, 8000)
    }
}

const pluginUnload = () => {
    body.classList.remove(globals.isPluginEnabled);
    unregisterPlugin();
    stopStuff();
}

const registerPlugin = async () => {
    logseq.provideModel({
        onThemeChangedCallback: onThemeChangedCallback,
    });

    setTimeout(() => {
        if (doc.head) {
            const cssPath = document.styleSheets[0].href;
            const logseqCSS = doc.head.querySelector(`link[href="./css/style.css"]`);
            logseqCSS!.insertAdjacentHTML('afterend', `<link rel="stylesheet" id="css-awesomeUI" href="${cssPath}">`)
        }
    }, 100)

    setTimeout(() => {
        // Listen for theme activated
        logseq.App.onThemeChanged(() => {
            onThemeChangedCallback();
        });
        // Listen for theme mode changed
        logseq.App.onThemeModeChanged(() => {
            onThemeChangedCallback();
        });
    }, 2000)
}

const unregisterPlugin = () => {
    doc.getElementById('css-awesomeUI')?.remove();
}

// Main logic runners
const runStuff = () => {
    setTimeout(() => {
        setFeaturesCSSVars();
        compactSidebarMenuLoad();
        headerFlashcardsButtonLoad();
        hideRightSidebarToolbarLoad();
        modalObserverLoad();
        menuCalendarLoad();
        headerLoad();
        toggleTabs();
    }, 2000);
    setTimeout(() => {
        rightSidebarLoad();
    }, 3000)
}

const stopStuff = () => {
    compactSidebarMenuUnload();
    headerFlashcardsButtonUnload();
    hideRightSidebarToolbarUnload();
    rightSidebarUnload();
    modalObserverUnload();
    menuCalendarUnload();
    headerUnload();
    tabsUnload();
}

export const onThemeChangedCallback = () => {
    setTabsCSSVarsStyles();
}
