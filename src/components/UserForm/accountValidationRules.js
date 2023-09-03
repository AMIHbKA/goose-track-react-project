import * as Yup from 'yup';

const SUPPORTED_FORMATS = [
  'image/apng',
  'image/bmp',
  'image/gif',
  'image/jpeg',
  'image/pjpeg',
  'image/png',
  'image/svg+xml',
  'image/tiff',
  'image/webp',
  'image/x-icon'
];

const redexName = /^[a-zA-Z0-9_]*$/;
const redexPhone = /^\+380\d{9}$/;
const redexSkype = /^\S[\S\s]{0,28}\S$/;


export const userValidation = Yup.object().shape({
  avatar: Yup.mixed().test(
    'fileType',
    'formats',
    (value) => !value || (value && SUPPORTED_FORMATS.includes(value?.type))
  ),
  name: Yup.string('Enter your name')
    .min(4, 'Name4')
    .max(16, 'TooLong16')
    .matches(redexName
    , 'Only letters')
    .required('NameRequired'),
  phone: Yup.string().matches(redexPhone, 'InvalidPhone'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  birthday: Yup.date('YYYY-MM-DD'),
  skype: Yup.string().matches(redexSkype, 'Skype must be between 3 and 16 characters')
      .min(3, 'At least 3 digits required')
      .max(13, 'At most 13 digits is required')
      .notRequired(),
});