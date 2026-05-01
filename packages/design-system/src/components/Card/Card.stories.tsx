import Card from './Card';
import Button from '../Button/Button';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Card> = {
  component: Card,
  args: {
    children:
      'It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair...',
    className: 'ds-u-padding--2',
  },
};
export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {};

export const Actionable: Story = {
  args: {
    children: (
      <>
        <h2 className="ds-text-heading--xl ds-u-margin-top--0">Learn what Medicare costs</h2>
        <p>
          Learn about costs for Original Medicare, Medicare health or drug plans, and
          supplemental insurance.
        </p>
        <Button className="ds-c-card__cta" href="#!" variation="solid">
          Get Costs
        </Button>
      </>
    ),
    className: 'ds-u-padding--3 ds-u-text-align--center',
    variation: 'actionable',
  },
};
