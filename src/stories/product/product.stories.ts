import { Story, Meta } from '@storybook/angular';
import { ProductComponent } from 'src/app/layout/user/product/product.component';

export default {
  title: 'Example/input',
  component: ProductComponent,
  // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
    color: { control: 'color' },
  },
} as Meta;

const Template: Story<ProductComponent> = (args: ProductComponent) => ({
  props: args,
});


export const abc = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
abc.args = {
  label: 'input',
};
