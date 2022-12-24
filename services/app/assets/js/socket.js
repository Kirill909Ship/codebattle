import { Socket } from 'phoenix';
// import Gon from 'gon';

const socket = new Socket('/ws', {
  params: { token: window.Gon.getAsset('user_token') },
});

socket.connect();

export default socket;
