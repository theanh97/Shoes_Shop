"use strict";

import React, { Component } from "react";
import {
    StyleSheet,
    FlatList,
    View,
    Text,
    ActivityIndicator
} from "react-native";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as Actions from "../actions"; //Import your actions

class Home extends Component {
    componentDidMount() {
        this.props.fetchDataFromUrl(
            "https://jsonplaceholder.typicode.com/posts/1"
        ); //call our action
    }

    render() {
        return this.props.loading
            ? this._renderLoadingView()
            : this._renderDataView();
    }

    _renderLoadingView() {
        return (
            <View style={styles.activityIndicatorContainer}>
                <ActivityIndicator size="large" color="pink" animating={true} />
            </View>
        );
    }

    _renderDataView() {
        let { data } = this.props;
        let jsonData = JSON.parse(data);
        let title = jsonData.title;
        let userID = jsonData.id;
        let body = jsonData.body;
        return (
            <View
                style={{
                    flex: 1,
                    backgroundColor: "#F5F5F5",
                    paddingTop: 20
                }}
            >
                <Text>User ID : {userID}</Text>
                <Text>Title : {title}</Text>
                <Text>Body : {body}</Text>
            </View>
        );
    }
}

// The function takes data from the app current state,
// and insert/links it into the props of our component.
// This function makes Redux know that this component needs to be passed a piece of the state
function mapStateToProps(state, props) {
    return {
        loading: state.fetchDataReducer.loading,
        data: state.fetchDataReducer.data
    };
}

// Doing this merges our actions into the component’s props,
// while wrapping them in dispatch() so that they immediately dispatch an Action.
// Just by doing this, we will have access to the actions defined in out actions file (action/home.js)
function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions, dispatch);
}

//Connect everything
export default connect(mapStateToProps, mapDispatchToProps)(Home);

const styles = StyleSheet.create({
    activityIndicatorContainer: {
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        flex: 1
    },

    row: {
        borderBottomWidth: 1,
        borderColor: "#ccc",
        padding: 10
    },

    title: {
        fontSize: 15,
        fontWeight: "600"
    },

    description: {
        marginTop: 5,
        fontSize: 14
    }
});
