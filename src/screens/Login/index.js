import React, {useState} from 'react';
import {StatusBar, Platform} from 'react-native';
import { Container, Header, HeaderTitle, Menu, MenuItem, MenuItemText, Input, ActionButton, ActionButtonText} from './styles';
const Page = () => {
    const [activeMenu, setActiveMenu] = useState('signin')


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
            <Input placeholder="Nome" />
            }
            <Input placeholder="E-mail"/>
            <Input placeholder="Senha"/>

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