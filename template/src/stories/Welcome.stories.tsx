import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { View, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    padding: 28,
    justifyContent: 'center',
  },
  header: {
    fontSize: 24,
    marginBottom: 18,
  },
  content: {
    fontSize: 16,
    marginBottom: 12,
    lineHeight: 20,
  },
  bold: {
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
})

const Welcome = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.header}>Welcome to React Native Storybook</Text>
      <Text style={styles.content}>
        This is a UI Component development environment for your React Native app. Here you can
        display and interact with your UI components as stories. A story is a single state of one or
        more UI components. You can have as many stories as you want. In other words a story is like
        a visual test case.
      </Text>
      <Text style={styles.content}>
        We have added some stories inside the "src/stories" directory for examples. Try editing the
        "src/stories/Welcome.js" file to edit this message.
      </Text>
      <Text style={[styles.content, styles.bold]}>
        After you create new stories files, you will need to run `yarn storybook:setup`.
      </Text>
    </View>
  )
}

storiesOf('Welcome', module).add('to Storybook', () => <Welcome />)
