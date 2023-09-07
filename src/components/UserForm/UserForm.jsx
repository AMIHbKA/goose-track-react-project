import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';

import { selectUser } from 'redux/auth/selectors';
import {
  Wrapper,
  Button,
  Title,
  RoleTitle,
  AccountForm,
  Wrap,
  Label,
} from 'components/UserForm/UserForm.styled';
import { UserInput } from 'components/UserInput/UserInput';
import { AvatarUploader } from 'components/AvatarUploader/AvatarUploader';
import { updateUser } from 'redux/auth/operations';
import {
  DatePickerStyled,
  PopperDateStyles,
} from 'components/UserForm/DatePicker.styled';
// import { userValidation } from 'components/UserForm/accountValidationRules';
import { useTranslation } from 'react-i18next';

const currentDate = dayjs(new Date()).format('DD/MM/YYYY');

export const UserForm = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const { name, birthday, email, skype, avatarUrl, phone } =
    useSelector(selectUser);

  const handleSubmit = async values => {
    const formData = new FormData();
    formData.append('name', values.name);
    formData.append('email', values.email);
    if (values.phone) {
      formData.append('phone', values.phone);
    }
    if (values.skype) {
      formData.append('skype', values.skype);
    }
    formData.append('birthday', dayjs(values.birthday).format('DD/MM/YYYY'));

    if (values.avatar) {
      formData.append('avatar', values.avatar);
    }

    dispatch(updateUser(formData));
  };

  return (
    <Formik
      initialValues={{
        name: name || '',
        birthday: birthday || `${currentDate}`,
        email: email || '',
        phone: phone || '',
        skype: skype || '',
        avatar: null,
      }}
      // validationSchema={userValidation}
      onSubmit={async values => {
        handleSubmit(values);
      }}
    >
      {({ values, setFieldValue }) => (
        <AccountForm>
          <AvatarUploader imageUrl={avatarUrl} setAvatar={setFieldValue} />
          <Title>{values.name}</Title>
          <RoleTitle>{t('userForm.user')}</RoleTitle>
          <Wrap>
            <Wrapper>
              <UserInput
                title={t('userForm.userName')}
                type="text"
                name="name"
                placeholder={t('userForm.placeholderName')}
              />

              <Label>
                {t('userForm.birthday')}
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePickerStyled
                    name="birthday"
                    type="date"
                    slotProps={{
                      popper: {
                        sx: PopperDateStyles,
                      },
                      textField: {
                        placeholder: birthday || `${currentDate}`,
                      },
                    }}
                    views={['year', 'month', 'day']}
                    format={t('userForm.format')}
                    closeOnSelect={true}
                    disableFuture={true}
                    onChange={date => {
                      if (!date) setFieldValue('birthday', '');
                      setFieldValue('birthday', date);
                    }}
                  />
                </LocalizationProvider>
              </Label>

              <UserInput
                title={t('userForm.email')}
                type="email"
                name="email"
                placeholder={t('userForm.placeholderEmail')}
              />
            </Wrapper>

            <Wrapper>
              <UserInput
                title={t('userForm.phone')}
                type="tel"
                name="phone"
                placeholder={t('userForm.placeholderPhone')}
              />
              <UserInput
                title={t('userForm.skype')}
                type="text"
                name="skype"
                placeholder={t('userForm.placeholderSkype')}
              />
            </Wrapper>
          </Wrap>
          <Button type="submit">{t('userForm.saveButton')}</Button>
        </AccountForm>
      )}
    </Formik>
  );
};
