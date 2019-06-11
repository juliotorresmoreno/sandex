

import React from 'react';
import { Redirect } from 'react-router';

interface IHomeProps {

}

const Home = (props: IHomeProps): JSX.Element => <Redirect to='/chats' />;

export default Home;