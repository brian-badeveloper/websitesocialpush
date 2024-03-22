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
    'name' : 'code_number',
    'placeholder' : 'Código del País'
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

const KYC_FORM_PARAMS:ValidateForm[] = [
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
    'name' : 'id_type',
    'placeholder' : 'Tipo de Identificación'
  },
  {
    'required' : true,
    'name' : 'id_number',
    'placeholder' : 'Número de Identificación'
  },
  {
    'required' : true,
    'name' : 'id_document',
    'file' : true,
    'file_type' : '.png,.jpg,.doc,.docx,.pdf',
    'placeholder' : 'Adjuntar Documento de Identidad'
  },
  {
    'required' : true,
    'name' : 'country',
    'placeholder' : 'País'
  },
  {
    'required' : true,
    'numeric' : true,
    'name' : 'code_number',
    'placeholder' : 'Código del País'
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
    'name' : 'province',
    'placeholder' : 'Provincia o Región'
  },
  {
    'required' : true,
    'name' : 'city',
    'placeholder' : 'Pueblo / Ciudad'
  },
  {
    'required' : true,
    'name' : 'address',
    'placeholder' : 'Dirección'
  },
  {
    'required' : true,
    'name' : 'proof_address',
    'file' : true,
    'file_type' : '.png,.jpg,.doc,.docx,.pdf',
    'placeholder' : 'Adjuntar Comprobante de Domicilio'
  },
  {
    'required' : true,
    'check' : true,
    'name' : 'policies',
    'placeholder' : 'términos y condiciones'
  }
];

export {
  CONTACT_FORM_PARAMS,
  KYC_FORM_PARAMS
}