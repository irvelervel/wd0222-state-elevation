import { Alert } from 'react-bootstrap'
import React from 'react'

// props
// {
//  selected: string
// }

const Detail = ({ selected }) => (
  <Alert variant="success">{selected || 'No value selected'}</Alert>
)

export default Detail
