import {
	Avatar,
	Box,
	Card,
	Flex,
	Text,
	Heading,
	Inset,
} from '@radix-ui/themes';

import { CharacterModel } from '../../models';

import { avatarContainer, fullHeight } from './Character.css';

export interface Props {
	className?: string;
	model: CharacterModel;
}

export function Character({ className = '', model }: Props) {

	const acronym = model.name.match(/\b(\w)/g)?.join('') ?? '';

	return (
		<Card className={ className } size='3'>
			<Flex className={ fullHeight }>
				<Inset side='left' mr='5'>
					<Flex
						className={ avatarContainer }
						align='center'
						justify='center'
						px='7'
					>
						<Avatar
							size='8'
							radius='full'
							src={ model.avatarUrl }
							fallback={ acronym }
						/>
					</Flex>
				</Inset>
				<Box>
					<Heading>{ model.name }</Heading>
					<Text as='p' size='4' color='gray'>{ model.species }</Text>
					<Text as='p' size='4' color='gray'>{ model.gender }</Text>
					<Text as='p' size='4' color='gray'>{ model.status }</Text>
				</Box>
			</Flex>
		</Card>
	);

}
