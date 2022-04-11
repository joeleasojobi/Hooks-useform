import { Button, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core'
import axios from 'axios'
import React, { useState } from 'react'

const Posts = () => {
    const [posts, setPost] = useState([])

    const dataFetching=()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts").then(
            (response)=>{
                setPost(response.data)
        })
    }
  return (
        <div style={{padding:55}}>
          <Grid container>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <h1>Posts</h1>
                  <Button variant='contained' onClick={dataFetching} color='secondary'>Fetch posts</Button>
                  <TableContainer>
                      <Table>
                          <TableHead>
                              <TableRow>
                                  <TableCell>Title</TableCell>
                                  <TableCell>Body</TableCell>
                              </TableRow>
                          </TableHead>
                          <TableBody>
                              {posts.map(
                                  (value,index)=>{
                                      return <TableRow>
                                          <TableCell>{value.title}</TableCell>
                                          <TableCell>{value.body}</TableCell>
                                      </TableRow>
                                  }
                              )}
                          </TableBody>
                      </Table>
                  </TableContainer>
              </Grid>
          </Grid>

      </div>
  )
}

export default Posts