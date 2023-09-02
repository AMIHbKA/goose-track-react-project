import { PlusIcon } from "UI";
import { Formik } from "formik";

export const AddTaskForm = () => {
    const hours =["00:00","01:00","02:00","03:00","04:00","05:00","06:00","07:00","08:00","09:00","10:00","11:00","12:00"]

    return (
        <Formik
          initialValues={{ title: '', start: '00:00', end: '00:00', importance: 'low' }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              handleSubmit(values);

              setSubmitting(false);
            }, 400);
          }}
        >
          {({ touched, errors }) => (
            <Form>
              <FormFields>
                <Field
                
                  name="title"
                  
                  label="Title"
                  type="text"
                  placeholder="Enter text"
                  
                  touched={touched.name}
                />

                <Select
                  as="select"
                  name="start"
                  label="Start"
                  
                  
                  touched={touched.email}
                >
                    {hours.map((hour) => <option value={hour}>{hour}</option>)}
                
                </Select>
                <div role="group" aria-labelledby="choose importance">
            <label>
              <Field type="radio" name="importance" value="low" />
              Low
            </label>
            <label>
              <Field type="radio" name="importance" value="medium" />
              Medium
            </label>
            <label>
              <Field type="radio" name="importance" value="high" />
              High
            </label>
            {/* <div>Picked: {values.picked}</div> */}
          </div>
                
              </FormFields>
              <AddButton type="submit" >
                <PlusIcon/>
                Add
              </AddButton>
              <CancelButton type="button">
                Cancel
              </CancelButton>
            </Form>
          )}
        </Formik>
    )
}