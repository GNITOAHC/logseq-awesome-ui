import { SettingSchemaDesc } from '@logseq/libs/dist/LSPlugin.user';

export const settingsConfig: SettingSchemaDesc[] = [
    {
        key: 'headerHeading',
        title: 'Header',
        description: '',
        type: 'heading',
        default: null,
    },
    {
        key: 'tabsOnTop',
        title: '',
        description: 'Move Tabs panel on top?',
        type: 'boolean',
        default: true,
    },
    {
        key: 'headerVariant',
        title: '',
        description: 'Choose app header variant:',
        type: 'enum',
        enumPicker: 'radio',
        enumChoices: [
            'Browser-like (wide search)',
            'Standard',
            'Compact',
        ],
        default: 'Browser-like (wide search)',
    },
    {
        key: 'hideHomeButton',
        title: '',
        description: 'Hide "Home" button on header?',
        type: 'boolean',
        default: true,
    },
    {
        key: 'leftSidebarHeading',
        title: 'Left sidebar',
        description: '',
        type: 'heading',
        default: null,
    },
    {
        key: 'vaultButtonToBottom',
        title: '',
        description: 'Move vaults list to bottom of left sidebar?',
        type: 'boolean',
        default: false,
    },
    {
        key: 'compactSidebarMenu',
        title: '',
        description: 'Compact menu (horizontal, no labels) on left sidebar?',
        type: 'boolean',
        default: false,
    },
    {
        key: 'menuCalendar',
        title: '',
        description: 'Show "Calendar" page link on left menu? (can be integrated with "Agenda" plugin, see README!)',
        type: 'boolean',
        default: true,
    },
    {
        key: 'headerFlashcardsButton',
        title: '',
        description: 'Move "Flashcards" button to header plugins toolbar?',
        type: 'boolean',
        default: false,
    },
    {
        key: 'hideSidebarPageIcons',
        title: '',
        description: 'Hide default page icons on left sidebar favs/recent?',
        type: 'boolean',
        default: false,
    },
    {
        key: 'hideAddNewPage',
        title: '',
        description: 'Hide "New Page" button on bottom of left sidebar?',
        type: 'boolean',
        default: true,
    },
    {
        key: 'rightSidebarHeading',
        title: 'Right sidebar',
        description: '',
        type: 'heading',
        default: null,
    },
    {
        key: 'hideRightSidebarToolbar',
        title: '',
        description: 'Hide toolbar on right sidebar?',
        type: 'boolean',
        default: true,
    },
    {
        key: 'contentHeading',
        title: 'Content',
        description: '',
        type: 'heading',
        default: null,
    },
    {
        key: 'alwaysShowNewBlockBullet',
        title: '',
        description: 'Always (not just on hover) show add block bullet on page bottom?',
        type: 'boolean',
        default: false,
    },
    {
        key: 'otherHeading',
        title: 'Other',
        description: '',
        type: 'heading',
        default: null,
    },
    {
        key: 'pluginUpdateNotify',
        title: '',
        description: 'Enable new version notifier on app load?',
        type: 'boolean',
        default: true,
    },
];