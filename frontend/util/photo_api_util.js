export const getPhoto = (id) => {
  return $.ajax({
    method: 'GET',
    url: '/api/photos/' + id
  });
};

export const createPhoto = (photo) => {
  return $.ajax({
    method: 'POST',
    url: '/api/photos/',
    data: photo,
    contentType: false,
    processData: false,
  });
};

