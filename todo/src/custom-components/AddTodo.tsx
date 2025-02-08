import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ChangeEvent, FormEvent, useState } from "react";

type addTodoProps = {
    onAddTodo: (title: string) => void;
}

const AddTodo:React.FC<addTodoProps> = (props) => {
    const [text , setText] = useState<string>("");

    const changeEventHandler = (event:ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value);
    }

    const submitHandler = (event:FormEvent<HTMLFormElement>) => {
        event.preventDefault();
       props.onAddTodo(text);
       setText("")
    }

   

  return (
    <>
    <form onSubmit={submitHandler}  className="flex  items-center gap-5">

       <Input  onChange={changeEventHandler} value={text} name="title" type="text" placeholder="Write a new  todo..." className="w-fit"/>
       <Button type="submit">Add Todo</Button>
    </form>
    
    </>
  )
}

export default AddTodo