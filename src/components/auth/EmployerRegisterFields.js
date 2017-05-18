import React from 'react'
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap'

const EmployerRegisterFields = props => (
  <div>
    <FormGroup controlId='email'>
      <ControlLabel>Email</ControlLabel>
      <FormControl
        type='text'
        value={props.state.email}
        onChange={props.handleChange('email')}
      />
    </FormGroup>
    <FormGroup controlId='password'>
      <ControlLabel>Password</ControlLabel>
      <FormControl
        type='text'
        value={props.state.password}
        onChange={props.handleChange('password')}
      />
    </FormGroup>
    <FormGroup controlId='passwordConfirm'>
      <ControlLabel>Confirm Password</ControlLabel>
      <FormControl
        type='text'
        value={props.state.passwordConfirm}
        onChange={props.handleChange('passwordConfirm')}
      />
    </FormGroup>
    <FormGroup controlId='company_name'>
      <ControlLabel>Company Name</ControlLabel>
      <FormControl
        type='text'
        value={props.state.company_name}
        onChange={props.handleChange('company_name')}
      />
    </FormGroup>
  </div>
)

export default EmployerRegisterFields
