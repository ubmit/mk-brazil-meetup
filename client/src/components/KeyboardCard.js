import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';

const KeyboardCard = props => {
  const { image, name, description, owner } = props;
  return (
    <Card>
      <Image src={image} />
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Description>{description}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name="user" />
          {owner}
        </a>
      </Card.Content>
    </Card>
  );
};

export default KeyboardCard;
