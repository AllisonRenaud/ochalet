module.exports = (roles) => {
  return async (request, response, next) => {
    try {
      const hasRole = roles.includes(request.user.role);
      if (hasRole) {
        return next();
      }
      return response.status(401).json({ error: "Access denied" });
    } catch (error) {
      return response.status(401).json({ error: error });
    }
  };
};
