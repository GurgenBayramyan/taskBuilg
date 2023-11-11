import * as yup from'yup'
import { regexpPassword } from '../regexps'
import { requiedErrorMesege } from '../erorrMessege'
export const schemaCustomer = yup.object().shape({
    firstName: yup.string().required(requiedErrorMesege),
    lastName: yup.string().required(requiedErrorMesege),
    email:yup.string().required(requiedErrorMesege).email("invalid email"),
    company:yup.string().required(requiedErrorMesege),
    selectedButton:yup.string(),
    password:yup.string().required(requiedErrorMesege).matches(regexpPassword,"password must contain an uppercase character and a number")
})
export const scemaChange = yup.object().shape({
    firstName: yup.string().required(requiedErrorMesege),
    lastName: yup.string().required(requiedErrorMesege),
    email:yup.string().required(requiedErrorMesege).email("invalid email"),
    company:yup.string().required(requiedErrorMesege),
    selectedButton:yup.string(),
    password:yup.string()
})