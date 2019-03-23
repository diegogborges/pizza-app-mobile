import React, { Component } from 'react';
import {
    Container, Header, Button, Icon, Text, Content, Footer, FooterTab, StyleProvider
} from 'native-base';

import Cardapio from './cardapio';
import Home from './home';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = { footerTab: 1 }
    }

    renderTab = (number) => {
        switch (number) {
            case 1:
                return (
                    <Home />
                )
                break;
            case 2:
                return (
                    <Cardapio />
                )
                break;
            default:
                return (
                    <Home />
                )
        }
    }

    changeTab = (number) => {
        if (this.state.footerTab !== number) {
            this.setState({ footerTab: number });
        }
    }

    render() {
        return (
            <Container>
                <Header>
                </Header>
                <Content>
                    {this.renderTab(this.state.footerTab)}
                </Content>
                <Footer>
                    <FooterTab>
                        <Button active={this.state.footerTab === 1} onPress={() => { this.changeTab(1) }}>
                            <Text>Início</Text>
                            <Icon name="restaurant" />
                        </Button>
                        <Button active={this.state.footerTab === 2} onPress={() => { this.changeTab(2) }}>
                            <Text>Cardápio</Text>
                            <Icon name="pizza" />
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}

export default Main;