import Footer from './Footer';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Footer> = {
  title: 'Medicare/Footer',
  component: Footer,
  parameters: { theme: 'medicare' },
};
export default meta;

type Story = StoryObj<typeof Footer>;

export const Default: Story = {};
