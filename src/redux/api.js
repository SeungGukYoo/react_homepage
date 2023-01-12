import axios from 'axios';

export const getYoutube = async (Info) => {
  let playId = '';
  if (Info.type === 'interest') {
    playId = `${process.env.REACT_APP_YOUTUBE_URL_INTEREST}`;
  }
  if (Info.type === 'attraction') {
    playId = `${process.env.REACT_APP_YOUTUBE_URL_ATTRACTION}`;
  }
  if (Info.type === 'food') {
    playId = `${process.env.REACT_APP_YOUTUBE_URL_FOOD}`;
  }

  const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playId}&maxResults=${Info.count}&key=${process.env.REACT_APP_YOUTUBE_KEY}`;
  return await axios.get(url);
};

export const getFlickr = async () => {
  const baseUrl = 'https://www.flickr.com/services/rest/?';
  const trand = 'flickr.interestingness.getList';
  const key = process.env.REACT_APP_FLICKR_KEY;
  const url = `${baseUrl}method=${trand}&api_key=${key}&per_page=20&extras=date_taken&format=json&nojsoncallback=1`;
  return await axios.get(url);
};
