---
name: 'component'
root: './src/'
output: './**/'
questions:
  name: 'Please enter a component name:'
---

# Variables

- component_name : `{{ inputs.name | pascal }}`
- instance_name : `{{ inputs.name | camel }}`
- folder_name : `{{ inputs.name | kebab }}`

# `{{ folder_name }}/index.ts`

```typescript
export * from './{{ component_name }}';

```

# `{{ folder_name }}/{{ component_name }}.css.ts`

```typescript
import { style } from '@vanilla-extract/css';

export const container = style({
	display: 'inline-block',
});

```

# `{{ folder_name }}/{{ component_name }}.tsx`

```typescript
import { container } from './{{ component_name }}.css';

export interface Props {}

export function {{ component_name }}({}: Props) {

	return <div className={ container }></div>;

}

```

# `{{ folder_name }}/README.mdx`

```markdown
import { Meta } from '@storybook/blocks';

<Meta title="{{ component_name }}" />

# {{ component_name }} Component Specification

### Properties <a href="#properties-attributes" id="properties-attributes"></a>

| Property Name | Type     | Default Value  | Description                      |
| -------------- | -------- | -------------- | -------------------------------- |
|	|	|	|	|
```

# `{{ folder_name }}/{{ component_name }}.stories.tsx`

```typescript
import type { Meta, StoryObj } from '@storybook/react';

import { {{ component_name }} } from './{{ component_name }}';

const meta = {
	title: '{{ component_name }}',
	component: {{ component_name }},
	argTypes: {},
} satisfies Meta<typeof {{ component_name }}>;

export default meta;

type Story = StoryObj<typeof meta>;

export const {{ component_name }}Story: Story = {
	args: {},
};

```

# `{{ folder_name }}/{{ component_name }}.test.tsx`

```typescript
import { render } from '@testing-library/react';

import { {{ component_name }} } from './{{ component_name }}';

describe('{{ component_name }} Test Suite', () => {

	it('renders without crashing.', () => {

		render(<{{ component_name }} />);

	});

});

```