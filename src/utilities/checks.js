const DEFAULT_ERROR = 'Oops! Something were wrong! Please try again later';
const DEFAULT_SUCCESS = 'Success!';

export const checkErrors = (type, status) => {
  switch (type) {
    case 'users/signup': {
      if (status === 400) {
        return 'User creation error';
      } else if (status === 500) {
        return 'Server error';
      }
      return DEFAULT_ERROR;
    }

    case 'users/login': {
      if (status === 400) {
        return 'Login error';
      }
      return DEFAULT_ERROR;
    }
    case 'users/logout': {
      if (status === 401) {
        return 'Missing header with authorization token';
      } else if (status === 500) {
        return 'Server error';
      }
      return DEFAULT_ERROR;
    }
    case 'users/current': {
      if (status === 401) {
        return 'Missing header with authorization token';
      }
      return DEFAULT_ERROR;
    }

    case 'contact/fetchContacts': {
      if (status === 401) {
        return 'Missing header with authorization token';
      } else if (status === 404) {
        return 'There is no such user collection';
      } else if (status === 500) {
        return 'Server error';
      }
      return DEFAULT_ERROR;
    }

    case 'contacts/addContactAsync': {
      if (status === 400) {
        return 'Error creating contact';
      } else if (status === 401) {
        return 'Missing header with authorization token';
      }
      return DEFAULT_ERROR;
    }

    case 'contacts/deleteContactAsync': {
      if (status === 401) {
        return 'Missing header with authorization token';
      } else if (status === 404) {
        return 'There is no such user collection';
      } else if (status === 500) {
        return 'Server error';
      }
      return DEFAULT_ERROR;
    }

    default:
      return DEFAULT_ERROR;
  }
};

export const checkSuccesfull = (type, status) => {
  switch (type) {
    case 'users/signup': {
      if (status === 201) {
        return 'User created';
      }
      return DEFAULT_SUCCESS;
    }

    case 'users/login': {
      if (status === 200) {
        return 'User is logged in';
      }
      return DEFAULT_SUCCESS;
    }
    case 'users/logout': {
      if (status === 200) {
        return 'User logout has been successfull';
      }
      return DEFAULT_SUCCESS;
    }
    case 'users/current': {
      if (status === 200) {
        return 'Information found';
      }
      return DEFAULT_SUCCESS;
    }

    case 'contact/fetchContacts': {
      if (status === 200) {
        return 'Contacts found';
      }
      return DEFAULT_ERROR;
    }

    case 'contacts/addContactAsync': {
      if (status === 201) {
        return 'The contact was successfully created';
      }
      return DEFAULT_ERROR;
    }

    case 'contacts/deleteContactAsync': {
      if (status === 200) {
        return 'The contact was successfully deleted';
      }
      return DEFAULT_ERROR;
    }

    default:
      return DEFAULT_SUCCESS;
  }
};
