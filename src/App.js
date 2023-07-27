import * as React from "react";
import PostIcon from "@material-ui/icons/Book";
import UserIcon from "@material-ui/icons/Group";
import { Admin, Resource, ListGuesser } from "react-admin";
import { Route } from "react-router";

import { PostList, PostEdit, PostCreate, PostShow } from "./posts";
import { UserList } from "./users";
import { ProfileEdit } from "./profile";
import dataProvider from "./dataProvider";
import authProvider from "./authProvider";
import MyLayout from "./MyLayout";

const App = () => (
  <Admin
    dataProvider={dataProvider}
    authProvider={authProvider}
    customRoutes={[
      <Route
        key="my-profile"
        path="/my-profile"
        render={() => <ProfileEdit />}
      />
    ]}
    layout={MyLayout}
  >
    <Resource
      name="posts"
      icon={PostIcon}
      list={PostList}
      edit={PostEdit}
      create={PostCreate}
      show={PostShow}
    />
    <Resource name="users" icon={UserIcon} list={UserList} />
    <Resource name="comments" list={ListGuesser} />
  </Admin>
);
export default App;
