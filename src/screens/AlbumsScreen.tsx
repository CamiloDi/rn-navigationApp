import {Button, Text, View} from 'react-native';
import React, {useContext} from 'react';
import {AuthContext} from '../context/AuthContext';
import {styles} from '../theme/AppTheme';
export const AlbumsScreen = () => {
    const {authState, signOut} = useContext(AuthContext);

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>Album</Text>
            {authState.isLoggedIn && <Button title="SignOut" onPress={signOut} />}
        </View>
    );
};

