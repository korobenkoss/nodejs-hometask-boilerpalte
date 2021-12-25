const responseMiddleware = (req, res, next) => {
   // TODO: Implement middleware that returns result of the query
    const { data } = res;
    res.status(200).json(data);
    next();
}

exports.responseMiddleware = responseMiddleware;