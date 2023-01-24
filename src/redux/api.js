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

export const getUser = async () => {
  const user = {
    members: [
      {
        name: 'Julia',
        position: 'President',
        pic: 'member1.jpg'
      },
      {
        name: 'David',
        position: 'Vice President',
        pic: 'member2.jpg'
      },
      {
        name: 'Emily',
        position: 'UI Designer',
        pic: 'member3.jpg'
      },
      {
        name: 'Paul',
        position: 'Front-end Engineer',
        pic: 'member4.jpg'
      },
      {
        name: 'Sara',
        position: 'Back-end Engineer',
        pic: 'member5.jpg'
      },
      {
        name: 'Michael',
        position: 'Project Manager',
        pic: 'member6.jpg'
      },
      {
        name: 'Alex',
        position: 'Project Manager',
        pic: 'member7.jpg'
      },
      {
        name: 'Jane',
        position: 'Project Manager',
        pic: 'member8.jpg'
      },
      {
        name: 'Son',
        position: 'Project Manager',
        pic: 'member9.jpg'
      },
      {
        name: 'Mike',
        position: 'Project Manager',
        pic: 'member10.jpg'
      }
    ]
  };
  return user.members;
};
