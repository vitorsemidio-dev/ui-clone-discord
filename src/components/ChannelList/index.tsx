import React from 'react';

import { Container, Category, AddCategoryIcon } from './styles';

const ChannelList: React.FC = () => {
  return (
    <Container>
      <Category>
        <span>Canais de Texto</span>
        <AddCategoryIcon />
      </Category>

      {/* <ChannelButton channelName="chat-livre" />
      <ChannelButton channelName="trabalho" />
      <ChannelButton channelName="bootcamp" />
      <ChannelButton channelName="free fire" />
      <ChannelButton channelName="rocketseat" /> */}
    </Container>
  );
};

export default ChannelList;
