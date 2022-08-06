import {TouchableOpacity} from 'react-native';
import React, {useContext} from 'react';
import {colors} from '../theme/AppTheme';
import Icon from 'react-native-vector-icons/Ionicons';
import {AuthContext} from '../context/AuthContext';

interface Props {
    iconName: string;
}

export const TouchableIcon = ({iconName}: Props) => {
    const {changeIcon} = useContext(AuthContext);

    return (
        <TouchableOpacity
            onPress={() => changeIcon(iconName)
            }
        // style={styles.globalMargin}
        >
            <Icon name={iconName} size={80} color={colors.primary} />
        </TouchableOpacity>
    );
};
