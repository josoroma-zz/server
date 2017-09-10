import {menus} from '../resolvers/menus';
import {users} from '../resolvers/users';
import {posts} from '../resolvers/posts';

export const resolvers = {
  Query: {
    menus: () => {
      return menus;
    },
    users: () => {
      return users;
    },
    user: (root, {id}) => {
      return users.find(user => user.id === id);
    },
    posts: () => {
      return posts;
    },
    post: (root, {id}) => {
      return posts.find(post => post.id === id);
    }
  }
};
