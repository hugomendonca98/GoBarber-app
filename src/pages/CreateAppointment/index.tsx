import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useCallback } from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { useAuth } from '../../hooks/auth';

import {
  Container,
  Header,
  BackButton,
  HeaderTitle,
  UserAvatar,
} from './styles';

interface RouteParamns {
  providerId: string;
}

const CreateAppointment: React.FC = () => {
  const { user } = useAuth();
  const route = useRoute();
  const { goBack } = useNavigation();

  const { providerId } = route.params as RouteParamns;

  const navigateBack = useCallback(() => {
    goBack();
  }, [goBack]);

  return (
    <Header>
      <BackButton onPress={navigateBack}>
        <Icon name="chevron-left" size={24} color="#999591" />
      </BackButton>
      <HeaderTitle>Cabeleireiros</HeaderTitle>

      <UserAvatar source={{ uri: user.avatar_url }} />
    </Header>
  );
};

export default CreateAppointment;
