import globalContext from './globals';
import { root, doc, body } from './internal';

export const agendaPluginLoad = async (agendaPlugin?: HTMLElement) => {
    if (!agendaPlugin) {
        agendaPlugin = doc.getElementById('logseq-plugin-agenda_lsp_main') as HTMLElement;
        if (agendaPlugin) {
            console.log('AwesomeUI: agenda plugin found on init!');
        }
    }
    if (!agendaPlugin) {
        console.log('AwesomeUI: agenda plugin not found!');
        return;
    }
    const agendaButton = doc.getElementById('injected-ui-item-logseq-plugin-agenda-logseq-plugin-agenda');
    if (!agendaButton) {
        console.log('AwesomeUI: agenda button not found, plz pin it on toolbar and restart Logseq!');
        return;
    }
    const journalsButton = doc.querySelector('.nav-header .journals-nav');
    const agendaLink = agendaButton.getElementsByTagName('a')[0];
    const calendarButtonHTML = `<div class="calendar-nav" id="awUI-calendar-menu"></div>`;
    journalsButton?.insertAdjacentHTML('afterend', calendarButtonHTML);
    const calendarButton = doc.getElementById('awUI-calendar-menu');
    calendarButton!.insertAdjacentElement('afterbegin', agendaButton);
    agendaLink.classList.remove('button');
    agendaLink.classList.add('item', 'group', 'flex', 'items-center', 'text-sm', 'font-medium', 'rounded-md');
    agendaLink.insertAdjacentText('beforeend', 'Calendar / Agenda');
    body.classList.add(globalContext.isAgendaReorderedClass);

    const navLinkList = doc.querySelectorAll('.nav-header a');
    if (navLinkList) {
        const navClickHandler = (event: Event) => {
            const target = event.target as HTMLAnchorElement;
            doc.querySelector('.nav-header .active')?.classList.remove('active');
            target.classList.add('active');
        }
        for (let i = 0; i < navLinkList.length; i++) {
            const navLinkItem = navLinkList[i];
            navLinkItem.addEventListener('click', navClickHandler, false);
        }
    }

    const setSidebarWidthVar = () => {
        const rightSidebarWidth = doc.getElementById('right-sidebar')?.getBoundingClientRect()?.width;
        root.style.setProperty('--awUI-calc-right-sidebar-width', `${rightSidebarWidth}px`);
    }

    const calendarClickHandler = () => {
        setSidebarWidthVar();
    }

    agendaLink.addEventListener('click', calendarClickHandler, false);

    logseq.App.onRouteChanged( () => {
        agendaPlugin!.classList.remove('visible');
        agendaLink.classList.remove('active');
    });

    logseq.App.onSidebarVisibleChanged(() => {
        setSidebarWidthVar();
    });
}