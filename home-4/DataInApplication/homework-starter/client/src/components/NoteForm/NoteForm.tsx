import { FormField } from "../FormField";
import { Button } from "../Button";
import "./NoteForm.css";
import { FC} from "react";
import { useMutation } from "@tanstack/react-query";
import { createNote } from "../../api/Note";
import { queryClient } from "../../api/queryClient";
import {z} from 'zod';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export interface INoteFormProps {}

const CreateNoteSchema = z.object({
  text: z.string().min(10, 'Min symbols - 10'),
  title: z.string().min(1, 'Min symbols - 1'),
})

type CreateNoteForm = z.infer<typeof CreateNoteSchema>;

export const NoteForm: FC<INoteFormProps> = () => {

  const {register, handleSubmit, formState: {errors}} = useForm<CreateNoteForm>({
    resolver: zodResolver(CreateNoteSchema)
  })

  const createNoteMutation = useMutation({
    mutationFn: ({ text, title }: { text: string; title: string }) => 
      createNote(text, title),
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["notes"]})
    }
  }, queryClient)

  
  return (
    <form className="note-form" onSubmit={handleSubmit(({text, title}) => {
      createNoteMutation.mutate({text, title})
    })}>
      <FormField label="Заголовок" errorMessage={errors.title?.message}>
        <input type="text" {...register("title")} />
      </FormField>
      <FormField label="Текст" errorMessage={errors.text?.message}>
        <textarea {...register("text")} />
      </FormField>
      <Button isLoading={createNoteMutation.isPending}>Save</Button>
    </form>
  );
};
