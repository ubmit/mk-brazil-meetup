import React from 'react';
import { Card, Icon, Image, Modal } from 'semantic-ui-react';
import styled from 'styled-components';

const StyledModal = styled(Modal)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const KeyboardCard = props => {
  const { image, name, description, owner } = props;
  return (
    <Card>
      <StyledModal trigger={<Image src={image} />} basic size="small">
        <StyledModal.Content>
          <Image src={image} />
        </StyledModal.Content>
      </StyledModal>
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
