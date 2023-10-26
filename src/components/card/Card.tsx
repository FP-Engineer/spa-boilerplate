import {
	Avatar,
	Box,
	Card as RxCard,
	Flex,
	Inset,
} from '@radix-ui/themes';
import { ReactNode } from 'react';

import { avatarContainer, fullHeight } from './Card.css';

export interface Props {
	children?: ReactNode;
	className?: string;
	avatarUrl?: string;
	acronym?: string;
}

export function Card({
	children, className = '', avatarUrl = '', acronym = '',
}: Props) {

	return (
		<RxCard className={ className } size='3'>
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
							src={ avatarUrl }
							fallback={ acronym }
						/>
					</Flex>
				</Inset>
				<Box>
					{ children }
				</Box>
			</Flex>
		</RxCard>
	);

}
