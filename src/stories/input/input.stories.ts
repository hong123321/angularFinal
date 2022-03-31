import { HttpClientModule } from '@angular/common/http';
import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import InputComponent from './input.component';
import { ProductService } from 'src/app/layout/service/product.service';
export default {
  title: 'Example/input',
  component: InputComponent,
  decorators: [
    moduleMetadata({
      imports: [HttpClientModule],
      providers:[ProductService]
    }),
  ],
  // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
    color: { control: 'color' },
  },
} as Meta;

const Template: Story<InputComponent> = (args: InputComponent) => ({
  props: args,
});


export const Label = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
Label.args = {
  label: 'input',
};
