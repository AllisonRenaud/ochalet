const formidable = require("formidable");
const path = require("path");

module.exports = (request, response, next) => {
  try {
    const form = formidable({ multiples: true });

    form.parse(request, async (err, fields, files) => {
      if (err) {
        next(err);
        return;
      }

      request.files = files;
      request.body = fields;
      next();
    });
  } catch (error) {
    response.status(500).send({ error: error.message });
  }
};
