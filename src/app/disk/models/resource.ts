import {ResourceList} from './resource-list';

export interface Resource {
  name: string;
  type: 'dir' | 'file';
  path: string;
  size?: number;
  _embedded?: ResourceList;
}
