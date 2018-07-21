import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';

const KeyboardCard = () => (
  <Card>
    <Image src="https://instagram.frec5-1.fna.fbcdn.net/vp/c45be4ab84aade39f076143810dd3d3c/5BD6FA8E/t51.2885-15/e35/35574458_447766728980013_6753232587105239040_n.jpg" />
    <Card.Content>
      <Card.Header>Fourier</Card.Header>
      <Card.Description>
        A 40% split keyboard with Kailh BOX Dark Yellow switches and EnjoyPBT
        blanks.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name="user" />
        ubmit
      </a>
    </Card.Content>
  </Card>
);

export default KeyboardCard;
