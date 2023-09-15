import { faBug } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Callout } from '@radix-ui/themes';

export interface Props {
	children: string;
}

export function ErrorMessage({ children }: Props) {

	return (
		<Callout.Root
			variant='surface'
			color='red'
		>
			<Callout.Icon>
				<FontAwesomeIcon icon={ faBug } />
			</Callout.Icon>
			<Callout.Text>
				{ children }
			</Callout.Text>
		</Callout.Root>
	);

}
