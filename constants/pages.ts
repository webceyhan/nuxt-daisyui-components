interface Page {
    name: string;
    tags: string;
    href: string;
    badge?: string;
}

interface PageGroup {
    name: string;
    icon: string;
    items: Page[];
}

export const PAGES_BY_GROUP: PageGroup[] = [
    {
        name: 'Actions',
        icon: 'action',
        items: [
            {
                name: 'Button',
                tags: 'button btn 🍑',
                href: '/components/button/',
                badge: 'updated',
            },
            {
                name: 'Dropdown',
                tags: 'dropdown popover menu listbox',
                href: '/components/dropdown/',
            },
            {
                name: 'Modal',
                tags: 'dialog modal window popup',
                href: '/components/modal/',
            },
            {
                name: 'Swap',
                tags: 'swap transition toggle icon',
                href: '/components/swap/',
            },
            // {
            //     name: 'Theme Controller',
            //     tags: 'theme controller change dark mode',
            //     href: '/components/theme-controller/',
            //     badge: 'new',
            // },
        ],
    },
    {
        name: 'Data display',
        icon: 'data-display',
        items: [
            {
                name: 'Avatar',
                tags: 'avatar image profile picture',
                href: '/components/avatar/',
            },
            {
                name: 'Badge',
                tags: 'badge tag label',
                href: '/components/badge/',
            },
            {
                name: 'Card',
                tags: 'card',
                href: '/components/card/',
            },
            {
                name: 'Carousel',
                tags: 'carousel slider image',
                href: '/components/carousel/',
            },
            {
                name: 'Chat bubble',
                tags: 'chat bubble dialog message messenger',
                href: '/components/chat/',
            },
            {
                name: 'Collapse',
                tags: 'collapse disclosure accordion show hide',
                href: '/components/collapse/',
            },
            {
                name: 'Countdown',
                tags: 'countdown counter timer',
                href: '/components/countdown/',
            },
            // {
            //     name: 'Diff',
            //     tags: 'diff compare comparison image slider',
            //     href: '/components/diff/',
            //     badge: 'new',
            // },
            {
                name: 'Kbd',
                tags: 'kbd keyboard ⌨️',
                href: '/components/kbd/',
            },
            {
                name: 'Stat',
                tags: 'stats data',
                href: '/components/stat/',
            },
            {
                name: 'Table',
                tags: 'table',
                href: '/components/table/',
            },
            // {
            //     name: 'Timeline',
            //     tags: 'timeline',
            //     href: '/components/timeline/',
            //     badge: 'new',
            // },
        ],
    },
    {
        name: 'Navigation',
        icon: 'navigation',
        items: [
            {
                name: 'Breadcrumbs',
                tags: 'breadcrumbs links',
                href: '/components/breadcrumbs/',
            },
            {
                name: 'Bottom navigation',
                tags: 'bottom navigation app bar',
                href: '/components/bottom-navigation/',
            },
            {
                name: 'Link',
                tags: 'link href anchor 🔗',
                href: '/components/link/',
            },
            {
                name: 'Menu',
                tags: 'menu list',
                href: '/components/menu/',
            },
            {
                name: 'Navbar',
                tags: 'navbar navigation menu',
                href: '/components/navbar/',
            },
            {
                name: 'Pagination',
                tags: 'pagination links next previous',
                href: '/components/pagination/',
            },
            {
                name: 'Steps',
                tags: 'steps progress',
                href: '/components/steps/',
            },
            {
                name: 'Tab',
                tags: 'tabs',
                href: '/components/tab/',
                badge: 'updated',
            },
        ],
    },
    {
        name: 'Feedback',
        icon: 'feedback',
        items: [
            {
                name: 'Alert',
                tags: 'alert warning error message',
                href: '/components/alert/',
            },
            {
                name: 'Loading',
                tags: 'loading loader spinner progress',
                href: '/components/loading/',
            },
            {
                name: 'Progress',
                tags: 'progressbar progress loading percentage',
                href: '/components/progress/',
            },
            // {
            //     name: 'Skeleton',
            //     tags: 'skeleton loading placeholder',
            //     href: '/components/skeleton/',
            //     badge: 'new',
            // },
            {
                name: 'Toast',
                tags: 'toast notification snackbar',
                href: '/components/toast/',
            },
            {
                name: 'Tooltip',
                tags: 'tooltip',
                href: '/components/tooltip/',
            },
        ],
    },
    {
        name: 'Data input',
        icon: 'data-input',
        items: [
            {
                name: 'Checkbox',
                tags: 'checkbox ✅',
                href: '/components/checkbox/',
            },
            {
                name: 'File Input',
                tags: 'file upload',
                href: '/components/file-input/',
            },
            {
                name: 'Radio',
                tags: 'radio',
                href: '/components/radio/',
            },
            {
                name: 'Range',
                tags: 'range slider',
                href: '/components/range/',
            },
            {
                name: 'Rating',
                tags: 'star rating radio',
                href: '/components/rating/',
            },
            {
                name: 'Select',
                tags: 'select option menu',
                href: '/components/select/',
            },
            {
                name: 'Text input',
                tags: 'text input',
                href: '/components/input/',
            },
            {
                name: 'Textarea',
                tags: 'textarea',
                href: '/components/textarea/',
            },
            {
                name: 'Toggle',
                tags: 'toggle switch checkbox',
                href: '/components/toggle/',
            },
        ],
    },
    {
        name: 'Layout',
        icon: 'layout',
        items: [
            {
                name: 'Artboard',
                tags: 'artboard mobile',
                href: '/components/artboard/',
            },
            {
                name: 'Divider',
                tags: 'divider',
                href: '/components/divider/',
                badge: 'updated',
            },
            {
                name: 'Drawer',
                tags: 'drawer sidebar menu',
                href: '/components/drawer/',
            },
            {
                name: 'Footer',
                tags: 'footer 🦶',
                href: '/components/footer/',
            },
            {
                name: 'Hero',
                tags: 'hero title',
                href: '/components/hero/',
            },
            {
                name: 'Indicator',
                tags: 'indicator badge corner',
                href: '/components/indicator/',
            },
            {
                name: 'Join (group items)',
                tags: 'join group button group input group form group',
                href: '/components/join/',
            },
            {
                name: 'Form Control',
                tags: 'form control input group label help',
                href: '/components/form-control/',
            },
            {
                name: 'Mask',
                tags: 'mask crop 😷',
                href: '/components/mask/',
            },
            {
                name: 'Stack',
                tags: 'stack',
                href: '/components/stack/',
            },
        ],
    },
    {
        name: 'Mockup',
        icon: 'mockup',
        items: [
            {
                name: 'Browser',
                tags: 'mockup browser',
                href: '/components/mockup-browser/',
            },
            {
                name: 'Code',
                tags: 'mockup code',
                href: '/components/mockup-code/',
            },
            {
                name: 'Phone',
                tags: 'mockup iphone 📱',
                href: '/components/mockup-phone/',
            },
            {
                name: 'Window',
                tags: 'mockup window 🪟',
                href: '/components/mockup-window/',
            },
        ],
    },
];

export const PAGES = PAGES_BY_GROUP.reduce((acc, page) => {
    return [...acc, ...page.items];
}, [] as Page[]);
