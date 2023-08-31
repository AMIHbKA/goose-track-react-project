const DEFAULT_ERROR = 'Oops! Something were wrong! Please try again later';
const DEFAULT_SUCCESS = 'Success!';

export const checkErrors = (type, status) => {
  switch (type) {
    case 'auth/register': {
      if (status === 400) {
        return 'User creation error';
      } else if (status === 500) {
        return 'Server error';
      }
      return DEFAULT_ERROR;
    }

    case 'auth/login': {
      if (status === 400) {
        return 'Login error';
      }
      return DEFAULT_ERROR;
    }
    case 'auth/logout': {
      if (status === 401) {
        return 'Missing header with authorization token';
      } else if (status === 500) {
        return 'Server error';
      }
      return DEFAULT_ERROR;
    }
    case 'user/current': {
      if (status === 401) {
        return 'Missing header with authorization token';
      }
      return DEFAULT_ERROR;
    }

    default:
      return DEFAULT_ERROR;
  }
};

export const checkSuccesfull = (type, status) => {
  switch (type) {
    case 'auth/register': {
      if (status === 201) {
        return 'User created';
      }
      return DEFAULT_SUCCESS;
    }

    case 'auth/login': {
      if (status === 200) {
        return 'User is logged in';
      }
      return DEFAULT_SUCCESS;
    }
    case 'auth/logout': {
      if (status === 200) {
        return 'User logout has been successfull';
      }
      return DEFAULT_SUCCESS;
    }
    case 'user/current': {
      if (status === 200) {
        return 'Information found';
      }
      return DEFAULT_SUCCESS;
    }

    default:
      return DEFAULT_SUCCESS;
  }
};
