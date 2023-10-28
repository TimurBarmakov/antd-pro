exports.handler = async (event, context) => {
  const requestBody = JSON.parse(event.body);
  const { password, username, type } = requestBody;

  // Опционально, вы можете добавить логику ожидания
  // await waitTime(2000);

  let response = {
    statusCode: 200,
    body: JSON.stringify({
      status: 'error',
      type,
      currentAuthority: 'guest',
    }),
  };

  if (password === '' && username === '') {
    response = {
      statusCode: 200,
      body: JSON.stringify({
        status: 'ok',
        type,
        currentAuthority: 'admin',
      });
      // Если вы хотите сохранить значение access, вы можете сделать это здесь
    } else if (password === 'ant.design' && username === 'user') {
      response = {
        statusCode: 200,
        body: JSON.stringify({
          status: 'ok',
          type,
          currentAuthority: 'user',
        });
      // Аналогично, сохраните значение access
    } else if (type === 'mobile') {
      response = {
        statusCode: 200,
        body: JSON.stringify({
          status: 'ok',
          type,
          currentAuthority: 'admin',
        });
      // Сохраните access
    }

  return response;
};
