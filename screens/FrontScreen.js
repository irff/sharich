import React from 'react';
import {
    Text,
    View
} from 'react-native';
import { Subscribe, Provider } from 'unstated';
import SharichContainer from '../containers/SharichContainer';

function Profile() {
    return (
        <Subscribe to={[SharichContainer]}> 
            {sharich => (
            <View>
                <Text>{sharich.state.user.name}</Text>
                <Text>{sharich.state.user.address}</Text>
            </View>
            )}
        </Subscribe>
    )
}

export default class FrontScreen extends React.Component {
    render() {
        return (<Provider>
                    <Profile />
                </Provider>);
    }
}
