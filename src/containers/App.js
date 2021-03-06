import React, { Component } from 'react'
import './App.css'
import {connect} from "react-redux";
import { User } from '../components/User'
import { Page } from '../components/Page'

import { getPhotos } from '../actions/PageActions'

class App extends Component {
    render() {
        const {user, page, getPhotosAction} = this.props;
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Мой топ фото</h1>
                </header>
                <User name={user.name} />
                <Page photos={page.photos} year={page.year}
                      isFetching={page.isFetching}  getPhotos={getPhotosAction}/>
            </div>
        )
    }
}

const mapStateToProps = store => {
    console.log(store) // посмотрим, что же у нас в store?
    return {
        user: store.user,
        page: store.page
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getPhotosAction: year => dispatch(getPhotos(year)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)