export const required = (value: any) => value ? undefined : 'File is required';

export const minLength = (value: any) => value ? undefined : 'File is required';
export const maxLength = (max: number = 15) => (value: any) => value.length > max ? `Max length is ${max} characters` : undefined;
