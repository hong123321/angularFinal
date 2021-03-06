// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { componentWrapperDecorator } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import ButtonComponent from './button.component';

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: ButtonComponent,
  // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<ButtonComponent> = (args: ButtonComponent) => ({
  props: args,
});


export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
Primary.args = {
  primary: true,
  label: 'button',
};

Primary.decorators = [
  componentWrapperDecorator((story) => `<div style="margin: 3em">${story}</div>`),
];

export const Secondary = Template.bind({});
Secondary.args = {
    label: 'Button',
  };



export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};

export const Border = Template.bind({});
Border.args = {
  border: '50%',
  label: 'Button',
};



