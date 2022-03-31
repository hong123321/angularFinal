import { Story, Meta } from '@storybook/angular/types-6-0';
import { ProductComponent } from 'src/app/layout/user/product/product.component';

export default {
  title: 'Product UI',
  component: ProductComponent,
  // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<ProductComponent> = (args: ProductComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args


