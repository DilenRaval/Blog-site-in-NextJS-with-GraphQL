import { flattenObj } from '../../../lib/object-parser';
import { Meta, StoryObj } from '@storybook/react';
import Copyright from './Copyright';
import copyrightData from './Copyright.mock-data';

const meta: Meta<typeof Copyright> = {
  title: 'component/Copyright',
  component: Copyright,
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Copyright>;

export const Default: Story = {
  render: (args) => {
    return <Copyright {...args} />;
  },
  args: {
    ...flattenObj(copyrightData),
  },
};
