export type ClassMap<T extends string> = Record<T, string | undefined>;

export type Size = 'xs' | 'sm' | 'md' | 'lg';

export type Position = 'top' | 'bottom' | 'left' | 'right';

export type Alignment = 'start' | 'center' | 'end';
export type VerticalAlignment = 'top' | 'middle' | 'bottom';

export type BrandColor =
    | 'default'
    | 'neutral'
    | 'primary'
    | 'secondary'
    | 'accent'
    | 'ghost';

export type StateColor = 'default' | 'info' | 'success' | 'warning' | 'error';

export type Color = BrandColor | StateColor;

export type Mask =
    | 'squircle'
    | 'heart'
    | 'hexagon'
    | 'hexagon-2'
    | 'decagon'
    | 'pentagon'
    | 'diamond'
    | 'square'
    | 'circle'
    | 'parallelogram'
    | 'parallelogram-2'
    | 'parallelogram-3'
    | 'parallelogram-4'
    | 'star'
    | 'star-2'
    | 'triangle'
    | 'triangle-2'
    | 'triangle-3'
    | 'triangle-4';
