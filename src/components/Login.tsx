import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import { StyleProvider } from "native-base";
import getTheme from "../../native-base-theme/components/index";
import platform from "../../native-base-theme/variables/platform";
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
  Icon,
  Button,
  H1,
  H3
} from "native-base";

interface Props {}

export default class FormExample extends Component {
  render() {
    return (
      <StyleProvider style={getTheme(platform)}>
        <Container>
          <Content style={styles.content}>
            <Icon style={styles.bookIcon} name="book" />
            <H1 style={{ fontWeight: "bold" }}>Littlest Library</H1>
            <Text style={styles.shareText}>Share the love!</Text>
            <Form>
              <Item floatingLabel style={styles.item}>
                <Label>Email</Label>
                <Input />
              </Item>
              <Item floatingLabel style={styles.item}>
                <Label>Password</Label>
                <Input />
              </Item>
            </Form>
            <View style={styles.helpContainer}>
              <View style={styles.buttonContainer}>
                <Button style={styles.signupButton} block transparent info>
                  <Text>Sign up</Text>
                </Button>
              </View>
              <View style={styles.buttonContainer}>
                <Button style={styles.forgotButton} block transparent info>
                  <Text>Forgot Password?</Text>
                </Button>
              </View>
            </View>
            <Button style={styles.button} dark block>
              <Text style={styles.textContent}>Login</Text>
            </Button>
          </Content>
        </Container>
      </StyleProvider>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    paddingLeft: 24,
    marginRight: 24,
    marginTop: 48
  },
  bookIcon: {
    marginBottom: 64
  },
  shareText: { marginBottom: 40, marginTop: 0, paddingTop: 8 },
  item: { marginRight: 16, marginLeft: 0, paddingTop: 16 },
  signupButton: {
    justifyContent: "flex-start"
  },
  forgotButton: {
    justifyContent: "flex-end"
  },
  button: {
    borderRadius: 2,
    height: 64,
    margin: 16,
    marginTop: 48
  },
  textContent: {
    fontSize: 20,
    color: "white"
  },
  helpContainer: {
    flex: 1,
    marginTop: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  buttonContainer: {
    flex: 1
  }
});
