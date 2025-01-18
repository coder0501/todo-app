import 'react';
import { StackProps } from '@chakra-ui/react';

declare module '@chakra-ui/react' {
  export interface VStackProps extends StackProps {
    spacing?: number | string;
  }
}
