import {Button, Text, View} from 'react-native';
import React, {useContext} from 'react';
import {styles} from '../theme/AppTheme';
import {AuthContext} from '../context/AuthContext';
export const ContactsScreen = () => {
    const {signIn, authState} = useContext(AuthContext);

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>contacts</Text>
            {!authState.isLoggedIn && <Button title="SignIn" onPress={signIn} />}
        </View>
    );
};
