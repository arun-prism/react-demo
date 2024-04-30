import {useForm, SubmitHandler } from 'react-hook-form'
import React from 'react';
import { Form, Label, Input, Button} from './styles'


type FormValues = {

    firstName : string,
    lastName:string,
    dateOfBirth: string,
    addressLine1: string,
    addressLine2: string,
    city:string,
    country:string,
    postcode: string,
    phoneNumber: string
}

export const  UserForm = () => {

    const { register, handleSubmit } = useForm<FormValues>();

    const onSubmitHandler: SubmitHandler<FormValues> = (data) => {console.log(data)};

    return(
    <Form onSubmit = {handleSubmit(onSubmitHandler)}>
       <Label htmlFor='firstName'>First Name</Label>
       <Input {...register('firstName')}></Input>

       <Label htmlFor='lastName'>Last Name</Label>
       <Input {...register('lastName')}></Input>

       <Label htmlFor='dateOfBirth'>Date of Birth</Label>
       <Input {...register('dateOfBirth')}></Input>

       <Label htmlFor='addressLine1'>Address Line 1 </Label>
       <Input {...register('addressLine1')}></Input>

       <Label htmlFor='addressLine2'>Address Line 2</Label>
       <Input {...register('addressLine2')}></Input>

       <Label htmlFor='city'>City</Label>
       <Input {...register('city')}></Input>

       <Label htmlFor='country'>Country</Label>
       <Input {...register('country')}></Input>

       <Label htmlFor='postcode'>PostCode</Label>
       <Input {...register('postcode')}></Input>

       <Label htmlFor='phoneNumber'>Phone Number</Label>
       <Input {...register('phoneNumber')}></Input>

<Button type='submit'></Button>

    </Form>
    );

};