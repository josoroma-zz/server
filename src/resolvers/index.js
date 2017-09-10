import {menus} from '../resolvers/menus';

export const resolvers = {
  Query: {
    menus: () => {
      return menus;
    },
  },
};
