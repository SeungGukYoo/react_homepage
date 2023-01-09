import axios from 'axios';

export const getYoutube = async (Info) => {
  let playId = '';
  if (Info.type === 'interest') {
    playId = 'PL8Yp2hhTedFZOl_wbDTw7Pmx9iAxk6A48';
  }
  if (Info.type === 'attraction') {
    playId = 'PL8Yp2hhTedFaB2O-x07LTTeScBKQkkKSb';
  }
  if (Info.type === 'food') {
    playId = 'PL8Yp2hhTedFYamvuIbGJjdF_YI_nZ2vf-';
  }

  const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playId}&maxResults=${Info.count}&key=AIzaSyCzFsvPUv4oQBwHeCsYH1FxMueWv-GAiY8`;
  return await axios.get(url);
};

export const getFlickr = async () => {
  const baseUrl = 'https://www.flickr.com/services/rest/?';
  const trand = 'flickr.interestingness.getList';
  const key = '45c970bc3ee3b60b35d021e520358df0';
  const url = `${baseUrl}method=${trand}&api_key=${key}&per_page=20&extras=date_taken&format=json&nojsoncallback=1`;
  return await axios.get(url);
};
