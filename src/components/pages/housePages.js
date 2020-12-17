import React, {Component} from 'react';
import gotService from '../../services/gotService';
import ItemList from '../itemList';
import ItemDetails,{Field} from '../itemDetails';
import RowDetails from '../rowDetails';
import ErrorMessage from '../error';

export default class HousePages extends Component {

    gotService = new gotService();

    state = {
        selectedHouse: null,
        error: false
    };

    onItemSelected = (id) => {
        this.setState({
            selectedHouse: id
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

        const itemList = (
            <ItemList
            onItemSelected={this.onItemSelected}
            getData = {this.gotService.getAllHouses}
            renderItem = {({name}) => name}
            />
        )
      const charDetails = (
        <ItemDetails
        itemId={this.state.selectedHouse}
        getData={this.gotService.getHouse} >
            <Field field='region' label='Region'/>
            <Field field='words' label='Words'/>
            <Field field='titles' label='Titles'/>
            <Field field='ancestralWeapons' label='Ancestral Weapons'/>
        </ItemDetails>
      );

        return (
          <RowDetails
          left={itemList}
          right={charDetails}
          />
        )
    }
}



        