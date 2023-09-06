import { PencilIcon, PlusIcon } from 'UI';
import { Formik } from 'formik';
import {
  ActionButton,
  AddForm,
  CancelButton,
  Error,
  FormLabel,
  High,
  Input,
  Low,
  Medium,
  RadioContainer,
  RadioLabel,
  Wrapper,
} from './AddOrEditTaskForm.styled';
import { useDispatch } from 'react-redux';
import { addTask, updateTask } from 'redux/tasks/operations';
// import { useTranslation } from 'react-i18next';

export const AddOrEditTaskForm = ({
  defaulValues = {
    title: '',
    start: '00:00',
    end: '01:00',
    priority: 'low',
  },
  option = 'add',
  date,
  id,
  status,
  onActive,
}) => {
  // const { t } = useTranslation();
  const dispatch = useDispatch();

  const validateText = value => {
    let error;
    if (value === '') {
      error = 'Field is required';
    }
    return error;
  };

  const hours = [
    '00:00',
    '01:00',
    '02:00',
    '03:00',
    '04:00',
    '05:00',
    '06:00',
    '07:00',
    '08:00',
    '09:00',
    '10:00',
    '11:00',
    '12:00',
    '13:00',
    '14:00',
    '15:00',
    '16:00',
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00',
    '23:00',
  ];

  const handleSubmit = values => {
    console.log(values);
    if (option === 'add') {
      const newTask = {
        ...values,
        date,
        status: 'to-do',
      };
      dispatch(addTask(newTask));
    }

    if (option === 'edit') {
      const updatedTask = {
        ...values,
        date,
        status,
      };
      console.log(updatedTask);
      dispatch(updateTask({ id, updatedTask }));
    }

    onActive();
  };

  return (
    <Formik
      initialValues={defaulValues}
      onSubmit={(values, { resetForm }) => {
        setTimeout(() => {
          handleSubmit(values);
          resetForm();
        }, 400);
      }}
    >
      {({ errors, values, setFieldValue, validateOnChange }) => (
        <AddForm>
          <FormLabel>
            Title
            <Input
              name="title"
              className={errors.title && 'invalid'}
              type="text"
              placeholder="Enter text"
              validate={validateText}
            />
            {errors.title && <Error>{errors.title}</Error>}
          </FormLabel>
          <Wrapper>
            <FormLabel>
              Start
              <Input
                as="select"
                name="start"
                value={values.start}
                validateOnChange={false}
                onChange={e => {
                  e.persist();
                  setFieldValue('start', e.target.value);
                }}
              >
                {hours.map(hour => (
                  <option value={hour} key={hour}>
                    {hour}
                  </option>
                ))}
              </Input>
            </FormLabel>

            <FormLabel>
              End
              <Input
                as="select"
                name="end"
                value={values.end}
                validateOnChange={false}
                onChange={e => {
                  e.persist();
                  setFieldValue('end', e.target.value);
                }}
              >
                {hours
                  .filter(
                    hour =>
                      Number(hour.slice(0, 2)) >
                      Number(values.start.slice(0, 2))
                  )
                  .map(hour => (
                    <option value={hour} key={hour}>
                      {hour}
                    </option>
                  ))}
              </Input>
            </FormLabel>
          </Wrapper>

          <RadioContainer role="group" aria-labelledby="choose priority">
            <RadioLabel>
              <Low type="radio" name="priority" value="low" />
              Low
            </RadioLabel>
            <RadioLabel>
              <Medium type="radio" name="priority" value="medium" />
              Medium
            </RadioLabel>
            <RadioLabel>
              <High type="radio" name="priority" value="high" />
              High
            </RadioLabel>
          </RadioContainer>
          <Wrapper>
            {option === 'add' ? (
              <ActionButton type="submit">
                <PlusIcon size={18} />
                Add
              </ActionButton>
            ) : (
              <ActionButton type="submit">
                <PencilIcon size={18} stroke="#fff" />
                Edit
              </ActionButton>
            )}

            <CancelButton type="button">Cancel</CancelButton>
          </Wrapper>
        </AddForm>
      )}
    </Formik>
  );
};
