import {
	Text,
	Heading,
} from '@radix-ui/themes';

import { Card } from '@/components/card';

import { CharacterModel } from '../../models';

export interface Props {
	className?: string;
	model: CharacterModel;
}

export function Character({ className = '', model }: Props) {

	const acronym = model.name.match(/\b(\w)/g)?.join('') ?? '';

	return (
		<Card className={ className } acronym={ acronym } avatarUrl={ model.avatarUrl }>
			<Heading>{ model.name }</Heading>
			<Text as='p' size='4' color='gray'>{ model.species }</Text>
			<Text as='p' size='4' color='gray'>{ model.gender }</Text>
			<Text as='p' size='4' color='gray'>{ model.status }</Text>
		</Card>
	);

}
