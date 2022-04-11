import axios from 'axios'
import { Button, Grid, TextField } from '@material-ui/core'
import {useForm} from './formState'

const Addcourse = () => {
    
    const [value, onHandleChange] = useForm(
       [ {
            courseTitle:"",
            courseDescription:"",
            courseDate:"",
            courseDuration:"",
            courseVenue:""
        }
     ] )

    const changeValues=()=>{
        console.log(value);
        axios.post("https://mylinkurcodesapp.herokuapp.com/addcourse",value).then((response)=>{
            if(response.data.status==="success"){
                alert("Added Sucessfully")
            }
            else {
                alert("Something went wrong")
            }
        })
    }  

  return (
    <div>
          <Grid container style={{padding:55}}>
              <Grid style={{padding:5}} item xs={12} sm={6} md={6} lg={6} xl={6}>
                  <TextField
                   type='text'
                   label='Enter Name'
                   fullWidth
                   variant='outlined'
                   margin='normal'
                   value={value.courseTitle}
                   name='courseTitle'
                   onChange={onHandleChange}/>

              </Grid>
              <Grid style={{padding:5}} item xs={12} sm={6} md={6} lg={6} xl={6}>
                  <TextField
                   type='text'
                   label='Enter Description'
                   fullWidth
                   variant='outlined'
                   margin='normal'
                   value={value.courseDescription}
                   name='courseDescription'
                   onChange={onHandleChange}/>

              </Grid>
              <Grid style={{padding:5}} item xs={12} sm={6} md={6} lg={6} xl={6}>
                  <TextField
                   type='date'
                   label='Enter Daye'
                   fullWidth
                   variant='outlined'
                   margin='normal'
                   value={value.courseDate}
                   name='courseDate'
                   onChange={onHandleChange}/>

              </Grid>
              <Grid style={{padding:5}} item xs={12} sm={6} md={6} lg={6} xl={6}>
                  <TextField
                   type='text'
                   label='Enter Duration'
                   fullWidth
                   variant='outlined'
                   margin='normal'
                   value={value.courseDuration}
                   name='courseDuration'
                   onChange={onHandleChange}/>

              </Grid>
              <Grid style={{padding:5}} item xs={12} sm={6} md={6} lg={6} xl={6}>
                  <TextField
                   type='text'
                   label='Enter Venue'
                   fullWidth
                   variant='outlined'
                   margin='normal'
                   value={value.courseVenue}
                   name='courseVenue'
                   onChange={onHandleChange}/>

              </Grid>

              
              <Grid style={{padding:5}} item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <Button
                   onClick={changeValues}
                   type='submit'
                   variant='contained'
                   fullWidth
                   color='secondary'>Submit</Button>

              </Grid>
          </Grid>
      </div>
  )
}

export default Addcourse