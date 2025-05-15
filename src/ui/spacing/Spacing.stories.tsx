import type { Meta, StoryObj } from '@storybook/react';
import { Spacing } from './Spacing';

const meta: Meta<typeof Spacing> = {
	component: Spacing,
};

export default meta;
type Story = StoryObj<typeof Spacing>;

export const SpacingStory: Story = {
	argTypes: {
		size: {
			options: [4, 50, 24, 196, 90],
			control: { type: 'select' },
		},
	},
	render: (args) => {
		return (
			<div
				style={{ display: 'flex', flexDirection: 'column', width: 100 + '%' }}>
				<div
					style={{
						backgroundColor: 'black',
						height: 32 + 'px',
						width: 100 + '%',
					}}
				/>
				<Spacing {...args} />
				<div
					style={{
						backgroundColor: 'black',
						height: 32 + 'px',
						width: 100 + '%',
					}}
				/>
			</div>
		);
	},
};
