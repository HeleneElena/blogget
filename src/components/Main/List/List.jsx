import Post from './Post';
import style from './List.module.css';

export const List = () => { 
  const postsData = [
    {
      thumbnail: '',
      title: 'Title',
      author: 'Nickname',
      ups: 78,
      date: '2022-02-24T00:45:00.000Z',
      id: '1'
    },
    {
      thumbnail: '',
      title: 'Title1',
      author: 'Nickname1',
      ups: 24,
      date: '2022-03-25T03:25:00.000Z',
      id: '2'
    },
    {
      thumbnail: '',
      title: 'Title2',
      author: 'Nickname2',
      ups: 56,
      date: '2022-03-29T01:15:00.000Z',
      id: '3'
    },
    {
      thumbnail: '',
      title: 'Title3',
      author: 'Nickname3',
      ups: 14,
      date: '2022-04-04T08:41:00.000Z',
      id: '4'
    },
  ];

  return (
    <ul className={style.list}>
      {
        postsData.map((postData) => <Post key={postData.id} postData={postData} />)
      }
    </ul>
  );
};


