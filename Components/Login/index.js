import React, { Component } from 'react';
import { 
  Button,
  Container, 
  Header, 
  Content, 
  Form, 
  Item, 
  Input, 
  Label,
  Text 
} from 'native-base';
class Login extends Component {

  componentDidMount() {
    console.log('Login DID MOUNT');
  }

  componentWillUnmount() {
    console.log('Login WILL UNMOUNT');
  }

  handleLoginPress = () => {
    const { navigation: { navigate }} = this.props
    navigate('Search')
  }

  render() {
    return (
      <Container>
        <Content padder>
          <Text style={{ marginTop: "25%", marginBottom: "25%", textAlign: "center", fontSize: 60 }}>WoundSee</Text>
          <Form>
            <Item fixedLabel>
              <Label>Username</Label>
              <Input />
            </Item>
            <Item fixedLabel last>
              <Label>Password</Label>
              <Input />
            </Item>

            <Button primary block rounded style={{ marginTop: "5%" }} onPress={ this.handleLoginPress }>
              <Text>Login</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}

export default Login