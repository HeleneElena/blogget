const formatDate = date => {
  const timestamp = date * 1000;
  const options = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  };
  return new Intl.DateTimeFormat('ru', options).format(new Date(timestamp));
};

export default formatDate;
