import React, {useState} from 'react';
import {StatusBar, Platform} from 'react-native';
import useDevsUberApi from '../../useDevsUberApi';
import { Container, Header, HeaderTitle, Menu, MenuItem, MenuItemText, Input, ActionButton, ActionButtonText} from './styles';
const Page = () => {
    const api = useDevsUberApi();
    const [activeMenu, setActiveMenu] = useState('signin')
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    return (
        <Container behavior={Platform.OS === 'ios' ? 'padding' : null}>
            <StatusBar  barStyle="light-content"/>
            <Header> 
                <HeaderTitle>
                        DevsUber
                </HeaderTitle>
            </Header>
            <Menu>
                <MenuItem active={activeMenu == 'signin'} onPress={() => setActiveMenu('signin')} underlayColor="transparent">
                    <MenuItemText>Login</MenuItemText>
                </MenuItem>
                <MenuItem active={activeMenu == 'signup'} onPress={() => setActiveMenu('signup')}>
                    <MenuItemText>Cadastrar</MenuItemText>
                </MenuItem>
            </Menu>
            {activeMenu == 'signup' && 
            <Input value={name} onChangeText={t => setName(t)} placeholder="Nome" placeholderTextColor="#999" />
            }
            <Input value={email} onChangeText={t => setEmail(t)} autoCapitalize="none" keyboardType="email-address" placeholder="E-mail"  placeholderTextColor="#999"/>
            <Input value={password} onChangeText={t => setPassword(t)}  placeholder="Senha" placeholderTextColor="#999"/>

            {activeMenu == 'signin' &&
            <ActionButton>
                <ActionButtonText> Login </ActionButtonText>
            </ActionButton> 
            }   
            {activeMenu == 'signup' &&
            <ActionButton>
                <ActionButtonText> Cadastrar </ActionButtonText>
            </ActionButton> 
            }
            
            
            

            
        </Container>
    );
}

export default Page;