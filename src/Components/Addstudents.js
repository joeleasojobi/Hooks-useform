import { Button, Grid, TextField, Typography } from '@material-ui/core'
import {useForm} from './formState'

const Addstudents = () => {
    const [value, onHandleChange] = useForm(
        {
            name:"",

        }
    )

    const changeValues=()=>{
    //   setName("Aravind")  
    console.log(value);
    }

  return (
    <div>
        <Grid container>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <Typography>Hello{value.name}</Typography>
                <TextField
                     type='text' 
                     variant='outlined' 
                     value={value.name} 
                     name='name' 
                     label='Name'
                    //  onChange={(event)=>{setName(event.target.value)} }
                    onChange={onHandleChange}
                />
                <Button fullWidth onClick={changeValues} variant='contained' color='primary'>Submit</Button>

            </Grid>
        </Grid>
    </div>
  )
}

export default Addstudents