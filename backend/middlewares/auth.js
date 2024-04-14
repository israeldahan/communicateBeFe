
function auth(req, res, next) {
    let data = req.headers.authorization
    let token = data.replace('Bearer ', '');
  
    if (token === '1234') {
      next();
    } else {
      res.status(401).send({msg: 'Unauthorized', data: ''});
    }
  }

export default auth;