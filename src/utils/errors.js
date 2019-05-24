const { createError } = require('apollo-errors');

const WrongCredentialsError = createError('WrongCredentialsError', {
  message: 'The provided credentials are invalid.'
});

module.exports = {
  WrongCredentialsError,
};

