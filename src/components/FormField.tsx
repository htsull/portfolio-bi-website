import { Control } from 'react-hook-form'
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage
} from '@/components/ui/form'
import { Input } from './ui/input'
import { Textarea } from '@/components/ui/textarea'

interface FormFieldProps {
  control: Control<any>
  name: string
  label?: string
  placeholder?: string
  description?: string
  textarea: boolean
}

const CustomFormField: React.FC<FormFieldProps> = ({
  control,
  name,
  label,
  placeholder,
  description,
  textarea
}) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {label && (
            <FormLabel className='text-sm sm:text-lg'>{label}</FormLabel>
          )}
          <FormControl>
            {textarea ? (
              <Textarea
                placeholder='Your message here...'
                className='text-xs sm:text-base'
                {...field}
              />
            ) : (
              <Input className='text-xs' placeholder={placeholder} {...field} />
            )}
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

export default CustomFormField
