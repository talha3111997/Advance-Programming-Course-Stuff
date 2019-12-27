/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import {getNews} from './src/news'
import React, { Component } from 'react';
import Article from './src/components/Articles'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList
} from 'react-native';

import {
  Colors,
  

} from 'react-native/Libraries/NewAppScreen';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { articles: [], refreshing: true };
    this.fetchNews = this.fetchNews.bind(this);
  }
  componentDidMount() {
   this.fetchNews();
   }

   fetchNews(){
     getNews()
      .then(articles => this.setState({articles: articles, refreshing: false}))
      .catch(()=> this.setState({refreshing: false}));
   }
   handleRefresh(){
     this.setState({refreshing: true}, ()=>this.fetchNews());
   }

  render(){
  return (
    
      
      <FlatList data={this.state.articles}
                renderItem={({item}) => <Article article={item}/>}
                keyExtractor={item=>item.url}
                refreshing={this.state.refreshing}
                onRefresh={this.handleRefresh.bind(this)}
      
      />
    
  );
}};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});


