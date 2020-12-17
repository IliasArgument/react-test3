import React, {Component} from 'react';
import gotService from '../../services/gotService';
import ItemList from '../itemList';
import ErrorMessage from '../error';
import {withRouter} from 'react-router-dom';

class CharacterPage extends Component {

    gotService = new gotService();

    state = {
        selectedChar: null,
        error: false
    }

    onItemSelected = (id) => {
        this.setState({
            selectedChar: id
        })
    }

    componentDidCatch() {
        this.setState({
            error: true
        })
    }

    render() {

        if(this.state.error) {
            return <ErrorMessage/>
        }

    return(
            <ItemList onItemSelected={(itemId) => {
                this.props.history.push(itemId)
            }}
            getData = {this.gotService.getAllCharacters}
            renderItem = {({name}) => name}
            />
    );
    }
}
export default withRouter(CharacterPage);