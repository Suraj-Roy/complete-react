import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { Delete, Icon, Moon, Sun } from "lucide-react";
import React from "react"

type TodoListProps = {
    items :{id:number,title:string}[];
    onRemoveTodo : (todoId : number) => void;
}


const TodoList : React.FC<TodoListProps> = (props) => {
  return (
    <div className="max-w-6xl my-5 grid grid-cols-5">

      {
        props.items.map(item => (
            <Card key = {item.id} className="bg-slate-600 ">
                <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle className="text-gray-50">
                        {item.title}
                    </CardTitle>
                    <Button onClick={()=>props.onRemoveTodo(item.id)} className="h-6 w-6" size={"icon"} variant={"destructive"}><Delete/></Button>
                </CardHeader>
                
            </Card>
        ))
      }
    </div>
  )
}

export default TodoList
