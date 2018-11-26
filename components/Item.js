import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Title from './styles/Title';
import ItemStyles from './styles/ItemStyles';
import PriceTag from './styles/PriceTag';
import formatMoney from '../lib/formatMoney';
import DeleteItem from './DeleteItem';
import AddToCart from './AddToCart';
import User from './User';

export default class Item extends Component {
  static propTypes = {
    item: PropTypes.object.isRequired,
  };

  render() {
    const { item } = this.props;
    return (
      <User>
      {({data:{ me } }) => (
        <ItemStyles>
        {item.image && <img src={item.image} alt={item.title} />}
        <Title>
          <Link href={{ pathname: '/item', query: { id: item.id }, }}>
            <a>{item.title}</a>
          </Link>
        </Title>
        <PriceTag>{ formatMoney(item.price) }</PriceTag>
        <p>{item.description}</p>
        <div className="buttonList">
        {me && me.id !== item.user.id && <AddToCart id={item.id}/> }
        {console.log(item)}
        {console.log(me)}
        
        {me && me.id === item.user.id && <Link href={{ pathname: 'update', query: { id: item.id }, }}>
                <a>Edit ✏️</a>
              </Link>}         
        {me && me.id === item.user.id && <DeleteItem id={item.id}>Delete this Item!</DeleteItem>}
        </div>
      </ItemStyles>
      )}
      </User>
      );
  }
}