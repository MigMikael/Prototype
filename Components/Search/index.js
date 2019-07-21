import React, { Component } from 'react';
import { 
  Container, 
  Header, 
  Content, 
  Form, 
  Item, 
  Input,
  Left, 
  Right, 
  Body,
  Button,
  Icon,
  Title,
  Text
} from 'native-base';

class Search extends Component {

  componentDidMount() {
    console.log('Search DID MOUNT');
  }

  componentWillUnmount() {
    console.log('Search WILL UNMOUNT');
  }

  render() {
    const { openDrawer } = this.props.navigation
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => openDrawer()}>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Search</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
          <Form style={{ marginTop: "30%"}}>
            <Item>
              <Input placeholder="AN" />
            </Item>
            <Button primary block rounded style={{ marginTop: "5%" }}>
              <Text>Search</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}

export default Search