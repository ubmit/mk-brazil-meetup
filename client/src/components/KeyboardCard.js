import React from 'react';
import { Card, Icon, Image, Modal } from 'semantic-ui-react';

const centerModal = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};

const KeyboardCard = props => {
  const { image, name, description, owner } = props;
  return (
    <Card>
      <Modal
        trigger={<Image src={image} />}
        basic
        size="small"
        style={centerModal}
      >
        <Modal.Content>
          <Image src={image} />
        </Modal.Content>
      </Modal>
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
