import { style, keyframes } from '@vanilla-extract/css';

const bzzzt = keyframes({
	to: { backgroundPosition: '-100% 0' }
});

export const loading = style({
	backgroundImage: `linear-gradient(
		90deg,
		var(--gray-2) 0px,
		rgb(229 229 229 / 90%) 40px,
		var(--gray-2) 80px
	)`,
  backgroundSize: '300%',
  backgroundPosition: '100% 0',
  borderRadius: 'inherit',
  animation: `${ bzzzt } 1.5s infinite`,
});