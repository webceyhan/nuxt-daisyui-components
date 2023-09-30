export type ClassMap<T extends string> = Record<T, string | undefined>;

export type Size = 'xs' | 'sm' | 'md' | 'lg';

export type Position = 'top' | 'bottom' | 'left' | 'right';

export type BrandColor =
    | 'default'
    | 'neutral'
    | 'primary'
    | 'secondary'
    | 'accent'
    | 'ghost';

export type StateColor = 'default' | 'info' | 'success' | 'warning' | 'error';

export type Color = BrandColor | StateColor;
