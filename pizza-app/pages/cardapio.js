import React, { Component } from 'react';
import { Body, View, ListItem, Text } from 'native-base';
import { FlatList, Platform } from 'react-native';

class Cardapio extends Component {

    render() {
        
        return (
            <View style={{ flex: 1, marginTop: Platform.OS === 'ios' ? 34 : 0 }}>
                <View>
                    <Text>Pizzas</Text>
                </View>
                <FlatList
                    data={listPizzas}
                    keyExtractor={(item, index) => String(index)}
                    renderItem={({ item }) => {
                        return (<ListItem>
                            <Body>
                                <Text style={{ color: '#b3b3b3' }}>{item.name}</Text>
                                <Text note>{item.price}</Text>
                            </Body>
                        </ListItem>)
                    }
                    }
                />
            </View>
        )
        
    }
}

export default Cardapio;

export const listPizzas = [
    { id: 1, name: '01 - Mussarela:', description: 'Molho, mussarela, azeitona,  tomate e oregano.' },
    { id: 2, name: '02 - Tradicional:', description: 'Molho, mussarela, presunto,  azeitona,  tomate e oregano.' },
    { id: 3, name: '03 - Grega:', description: 'Molho, mussarela, calabresa, bacon, tomate, azeitona e orégano.' },
    { id: 4, name: '04 - Romana:', description: 'Molho, mussarela, presunto, palmito, bacon, tomate, azeitona e orégano.' },
    { id: 5, name: '05 - Italiana:', description: 'Molho, mussarela, salaminho, bacon, tomate, azeitona e orégano.' },
    { id: 6, name: '06 - Calabresa:', description: 'Molho, mussarela, calabresa,  azeitona,  tomate e oregano.' },
    { id: 7, name: '07 - Alho:', description: 'Molho, mussarela, presunto,  alho tostado, tomate, azeitona e orégano.' },
    { id: 8, name: '08 - Atum:', description: 'Molho, mussarela, atum ,  azeitona,  tomate e oregano.' },
    { id: 9, name: '09 - Atum Especial:', description: 'Molho, mussarela, atum , ervilha, milho, azeitona,  tomate e oregano.' },
    { id: 10, name: '10 - Napolitana:', description: 'Molho, mussarela, parmesão, azeitona,  tomate e oregano.' },
    { id: 11, name: '11 - Vegetariana:', description: 'Molho, mussarela, ervilha, milho, champignon, azeitona,  tomate e oregano.' },
    { id: 12, name: '12 - Palmito:', description: 'Molho, mussarela, palmito,  azeitona,  tomate e oregano.' },
    { id: 13, name: '13 - Milho:', description: 'Molho, mussarela,  milho, azeitona,  tomate e oregano.' },
    { id: 14, name: '14 - Três Queijos:', description: 'Molho, mussarela, provolone, requeijão, tomate, azeitona e orégano.' },
    { id: 15, name: '15 - Quatro Queijo:', description: 'Molho, mussarela, provolone, parmessão, requeijão, tomate, azeitona e orégano.' },
    { id: 16, name: '16 - Bacon:', description: 'Molho, mussarela, bacon, azeitona,  tomate e oregano.' },
    { id: 17, name: '17 - Bacon Egg:', description: 'Molho, mussarela, bacon, ovo, azeitona,  tomate e oregano.' },
    { id: 18, name: '18 - Frango Catupiry:', description: 'Molho, mussarela, frango, requeijão, azeitona,  tomate e oregano.' },
    { id: 19, name: '19 - Frango com Palmito:', description: 'Molho, mussarela, frango, palmito, azeitona,  tomate e oregano.' },
    { id: 20, name: '20 - Frango com Milho:', description: 'Molho, mussarela, frango, milho, azeitona,  tomate e oregano.' },
    { id: 21, name: '21 - Frango com Batata Palha:', description: 'Molho, mussarela, frango, batata palha, azeitona,  tomate e oregano.' },
    { id: 22, name: '22 - Frango com Bacon:', description: 'Molho, mussarela, frango, bacon, azeitona,  tomate e oregano.' },
    { id: 23, name: '23 - Frango com Presunto:', description: 'Molho, mussarela, frango, presunto,  azeitona,  tomate e oregano.' },
    { id: 24, name: '24 - Frango com Calabresa:', description: 'Molho, mussarela, frango, calabresa,  azeitona,  tomate e oregano.' },
    { id: 25, name: '25 - Lombo Canadense:', description: 'Molho, mussarela, lombo canadense, azeitona,  tomate e oregano.' },
    { id: 26, name: '26 - Lombo Canadense com Batata Palha:', description: 'Molho, mussarela, lombo canadense, batata palha, azeitona,  tomate e oregano.' },
    { id: 27, name: '27 - Lombo Canadense com Provolone:', description: 'Molho, mussarela, lombo canadense, provolone, azeitona,  tomate e oregano.' },
    { id: 28, name: '28 - Lombo Canadense com Palmito:', description: 'Molho, mussarela, lombo canadense, palmito, azeitona,  tomate e oregano.' },
    { id: 29, name: '29 - Cabral:', description: 'Molho, mussarela, frango, champignon, palmito, azeitona,  tomate e oregano.' },
    { id: 30, name: '30 - Paulista:', description: 'Molho, mussarela, presunto, bacon, azeitona, tomate e orégano.' },
    { id: 31, name: '31 - Portuguesa:', description: 'Molho, mussarela, presunto, ervilha, palmito, ovo, azeitona,  tomate e oregano.' },
    { id: 32, name: '32 - Portuguesa Especial:', description: 'Molho, mussarela, presunto, calabresa, lombo, ervilha, palmito, ovo, azeitona,  tomate e oregano.' },
    { id: 33, name: '33 - Mexicana:', description: 'Molho, mussarela, calabresa,  pimenta, alho tostado, azeitona,  tomate e oregano.' },
    { id: 34, name: '34 - Salaminho Italiano:', description: 'Molho, mussarela, salaminho, tomate, azeitona e orégano.' },
    { id: 35, name: '35 - Marguerita:', description: 'Molho, mussarela, parmessão, mangericão, tomate, azeitona e orégano.' },
    { id: 36, name: '36 - Brasileira:', description: 'Molho, mussarela, frango, provolone, palmito, azeitona,  tomate e oregano.' },
    { id: 37, name: '37 - Alcapone:', description: 'Molho, mussarela, calabresa, alho tostado, palmito, ervilha, ovos, tomate, azeitona e orégano.' },
    { id: 38, name: '38 - Baiana:', description: 'Molho, mussarela, calabresa, bacon, pimenta, azeitona,  tomate e oregano.' },
    { id: 39, name: '39 - Siciliana:', description: 'Molho, mussarela, calabresa, provolone ralado, lombo, tomate, azeitona e orégano.' },
    { id: 40, name: '40 - Americana:', description: 'Molho,  mussarela, presunto, milho, azeitona,  tomate e oregano.' },
    { id: 41, name: '41 - Francesa:', description: 'Molho, mussarela, lombo, milho, Palmito, azeitona,  tomate e oregano.' },
    { id: 42, name: '42 - Espanhola:', description: 'Molho, mussarela, salaminho, palmito, tomate, azeitona e orégano.' },
    { id: 43, name: '43 - Champignon:', description: 'Molho, mussarela, champignon, tomate, azeitona e orégano.' },
    { id: 44, name: '44 -  Veneza:', description: 'Molho, mussarela, frango, champignon, tomate, azeitona e orégano.' },
    { id: 45, name: '45 - Caipira:', description: 'Molho de tomate, mussarela, frango, bacon, milho, tomate, azeitona e orégano.' },
    { id: 46, name: '46 - Moda da Casa:', description: 'Molho, mussarela, rolinhos de presunto rechedos c/requeijão, milho, palmito, azeitona,  tomate e oregano.' },
    { id: 47, name: '49 - Do Chefe:', description: 'Molho, mussarela, provolone, milho, bacon, tomate, azeitona e orégano.' },
    { id: 48, name: '48 - Nordestina:', description: 'Molho, mussarela, presunto, ervilha, milho, alho, ovo, azeitona,  tomate e oregano.' },
    { id: 49, name: '49 - California:', description: 'Molho, mussarela, bacon, milho, azeitona,  tomate e oregano.' },
    { id: 50, name: '50 - Carioca:', description: 'Molho, mussarela, salaminho, milho, azeitona,  tomate e oregano.' },
    { id: 51, name: '51 - Canadense Especial:', description: 'Molho, mussarela, lombo canadense, champignon, palmito, azeitona,  tomate e oregano.' },
    { id: 52, name: '52 - Sensação:', description: 'Molho, mussarela, milho, palmito, bacon, azeitona,  tomate e oregano.' },
    { id: 53, name: '53 - Da Mamma:', description: 'Molho, mussarela, lombo canadense, milho,  palmito, provolone, azeitona,  tomate e oregano.' },
    { id: 54, name: '54 - Mineira:', description: 'Molho, mussarela, lombo canadense, bacon, pimenta, azeitona,  tomate e oregano.' },
    { id: 55, name: '55 - Moda Dítalia:', description: ' Molho, mussarela, presunto, bacon, ervilha, palmito, ovo, azeitona,  tomate e oregano.' },
    { id: 56, name: '56 - Barcelona:', description: 'Molho, mussarela, calabresa, palmito, azeitona, tomate e orégano.' },
    { id: 57, name: '57 - Cubana:', description: 'Molho, mussarela, frango, palmito, bacon, azeitona, tomate e orégano.' },
    { id: 58, name: '58 - Valencia:', description: 'Molho, mussarela, presunto, palmito, milho, azeitona, tomate e orégano.' },
    { id: 59, name: '59 - Inglesa:', description: 'Molho, rolinho de presunto recheado com catupiry, bacon, palmito, azeitona, tomate e orégano.' },
    { id: 60, name: '60 - Frango Barbecue:', description: 'Molho, mussarela, frango, molho barbecue, azeitona, tomate e orégano.' },
    { id: 61, name: '61 - Frango Cheddar:', description: 'Molho, mussarela, frango, queijo cheddar, azeitona, tomate e orégano.' },
    { id: 62, name: '62 - Lombo Cheddar:', description: 'Molho, mussarela, lombo canadense, queijo cheddar, azeitona, tomate e orégano.' },
    { id: 63, name: '63 - Tomate seco:', description: 'Molho, mussarela, tomate seco, palmito, azeitona e orégano.' },
    { id: 64, name: '64 - Livorno:', description: 'Molho, mussarela, calabresa, tomate seco, palmito, azeitona e orégano.' },
    { id: 65, name: '65 - Estrogonofe de Frango:', description: 'Molho, mussarela, estrogonofe, batata palha, azeitona, tomate e orégano.' },
    { id: 66, name: '66 - Estrogonofe de Frango com champignon:', description: 'Molho, mussarela, estrogonofe, batata palha, champignon, azeitona, tomate e orégano.' },
    { id: 67, name: '67 - Mama Mia:', description: 'Molho, mussarela, presunto, bacon, milho, azeitona, tomate e orégano.' },
    { id: 68, name: '68 - Quatro carnes:', description: 'Molho, mussarela, presunto, calabresa, bacon, lombo canadense, azeitona, tomate e orégano.' },
    { id: 69, name: '69 - 5 Queijos:', description: 'Molho, mussarela, parmesão, provolone, queijo cheddar, requeijão cremoso, azeitona, tomate e orégano.' },
    { id: 70, name: '70 - Ibiza:', description: 'Molho, mussarela, milho, provolone, parmesão, azeitona, tomate e orégano.' },
];