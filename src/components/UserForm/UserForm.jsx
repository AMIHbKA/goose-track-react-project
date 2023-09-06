import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
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

const currentDate = dayjs(new Date()).format('DD/MM/YYYY');

export const UserForm = () => {
  const dispatch = useDispatch();

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

    try {
      dispatch(updateUser(formData));

      toast.success('Profile data changed successfully');
    } catch {
      toast.error('Something went wrong... Try again!');
    }
  };

  console.log(name, birthday, email, skype, avatarUrl, phone);

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
        console.log('values', values);
      }}
    >
      {({ values, setFieldValue }) => (
        <AccountForm>
          <AvatarUploader imageUrl={avatarUrl} setAvatar={setFieldValue} />
          <Title>{values.name}</Title>
          <RoleTitle>User</RoleTitle>
          <Wrap>
            <Wrapper>
              <UserInput
                title="User Name"
                type="text"
                name="name"
                placeholder="Add your name"
              />

              <Label>
                Birthday
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
                    format="DD/MM/YYYY"
                    closeOnSelect={true}
                    disableFuture={true}
                    onChange={date => {
                      if (!date) setFieldValue('birthday', '');
                      setFieldValue('birthday', date);
                      console.log(typeof date.$d);
                    }}
                  />
                </LocalizationProvider>
              </Label>

              <UserInput
                title="Email"
                type="email"
                name="email"
                placeholder="YourEmail@mail.com"
              />
            </Wrapper>

            <Wrapper>
              <UserInput
                title="Phone"
                type="tel"
                name="phone"
                placeholder="+380960000000"
              />
              <UserInput
                title="Skype"
                type="text"
                name="skype"
                placeholder="Add your skype number"
              />
            </Wrapper>
          </Wrap>
          <Button type="submit" onClick={() => console.log('click')}>
            Save changes
          </Button>
        </AccountForm>
      )}
    </Formik>
  );
};
