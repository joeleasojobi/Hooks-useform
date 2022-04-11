import React, { useState } from 'react'
import { Button, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core'
import axios from 'axios'

const Viewcourse = () => {
    const [courses, setCourse] = useState([])

    const fetchCourses=()=>{
        axios.get("https://mylinkurcodesapp.herokuapp.com/getcourses").then(
            (response)=>{
                setCourse(response.data)
        })
    }
  return (
         <div>
          <Grid container>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <h1>Courses</h1>
                  <Button variant='contained' color='secondary' onClick={fetchCourses}>Get Courses</Button>
                  <TableContainer>
                      <Table>
                          <TableHead>
                              <TableRow>
                                  <TableCell>Title</TableCell>
                                  <TableCell>Description</TableCell>
                                  <TableCell>Date</TableCell>
                                  <TableCell>Duration</TableCell>
                                  <TableCell>Venue</TableCell>
                              </TableRow>
                          </TableHead>
                          <TableBody>
                              {courses.map((value,index)=>{
                                  return <TableRow>
                                      <TableCell>{value.courseTitle}</TableCell>
                                      <TableCell>{value.courseDescription}</TableCell>
                                      <TableCell>{value.courseDate}</TableCell>
                                      <TableCell>{value.courseDuration}</TableCell>
                                      <TableCell>{value.courseVenue}</TableCell>
                                  </TableRow>
                              })}
                          </TableBody>
                      </Table>
                  </TableContainer>
              </Grid>
          </Grid>
      </div>
  )
}

export default Viewcourse