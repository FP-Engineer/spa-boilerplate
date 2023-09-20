import { style } from '@vanilla-extract/css';

export const container = style({
	all: 'unset',
	listStyleType: 'none',
	display: 'grid',
	alignItems: 'stretch',
	gap: 'var(--size-fluid-3)',
	gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
	gridAutoRows: '1fr',
	marginInline: 'auto',
	maxInlineSize: '1400px',
});

export const character = style({
	blockSize: '100%',
});
