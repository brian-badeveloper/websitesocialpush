import { ValidateForm } from "../interfaces/ValidateForm";

const CONTACT_FORM_PARAMS:ValidateForm[] = [
  {
    'required' : true,
    'name' : 'first_name',
    'placeholder' : 'Nombre'
  },
  {
    'required' : true,
    'name' : 'last_name',
    'placeholder' : 'Apellidos'
  },
  {
    'required' : true,
    'email' : true, 
    'name' : 'email',
    'placeholder' : 'Correo Electrónico'
  },
  {
    'required' : true,
    'numeric' : true,
    'min' : 6,
    'max' : 12,
    'name' : 'phone_number',
    'placeholder' : 'Número de Teléfono'
  },
  {
    'required' : true,
    'name' : 'country',
    'placeholder' : 'País'
  },
  {
    'required' : true,
    'numeric' : true,
    'min' : 1,
    'name' : 'code_country',
    'placeholder' : 'Código del País'
  },
  {
    'required' : true,
    'name' : 'ip',
    'placeholder' : 'IP'
  },
  {
    'required' : true,
    'name' : 'message',
    'placeholder' : 'Mensaje'
  },
  {
    'required' : true,
    'check' : true,
    'name' : 'policies',
    'placeholder' : 'términos y condiciones'
  }
];

const LOGIN_FORM_PARAMS:ValidateForm[] = [
  {
    'required' : true,
    'name' : 'username',
    'placeholder' : 'Correo Electrónico o TPID'
  },
  {
    'required' : true,
    'name' : 'password',
    'placeholder' : 'Contraseña'
  }
];

const FORGOT_FORM_PARAMS:ValidateForm[] = [
  {
    'required' : true,
    'email': true,
    'name' : 'email',
    'placeholder' : 'Correo Electrónico'
  }
];

const PASSWORD_FORM_PARAMS:ValidateForm[] = [
  {
    'required' : true,
    'name' : 'password',
    'placeholder' : 'Contraseña'
  },
  {
    'required' : true,
    'equal' : true,
    'field_equal' : 'password', 
    'name' : 'password2',
    'placeholder' : 'Confirmar Contraseña'
  },
];

const REGISTER_FORM_PARAMS:ValidateForm[] = [
  {
    'required' : true,
    'name' : 'first_name',
    'placeholder' : 'Nombre'
  },
  {
    'required' : true,
    'name' : 'last_name',
    'placeholder' : 'Apellidos'
  },
  {
    'required' : true,
    'email' : true, 
    'name' : 'email',
    'placeholder' : 'Correo Electrónico'
  },
  {
    'required' : true,
    'numeric' : true,
    'min' : 6,
    'max' : 12,
    'name' : 'phone_number',
    'placeholder' : 'Número de Teléfono'
  },
  {
    'required' : true,
    'name' : 'country',
    'placeholder' : 'País'
  },
  {
    'required' : true,
    'name' : 'password',
    'placeholder' : 'Contraseña'
  },
  {
    'required' : true,
    'equal' : true,
    'field_equal' : 'password', 
    'name' : 'password_confirm',
    'placeholder' : 'Confirmar Contraseña'
  },
  {
    'required' : true,
    'check' : true,
    'name' : 'policies',
    'placeholder' : 'términos y condiciones'
  }
];

const PLAN_CUSTOM_FORM_PARAMS:ValidateForm[] = [
  {
    'required' : true,
    'numeric': true,
    'name' : 'price',
    'placeholder' : 'Precio'
  },
];

export {
  CONTACT_FORM_PARAMS,
  LOGIN_FORM_PARAMS,
  FORGOT_FORM_PARAMS,
  PASSWORD_FORM_PARAMS,
  REGISTER_FORM_PARAMS,
  PLAN_CUSTOM_FORM_PARAMS
}