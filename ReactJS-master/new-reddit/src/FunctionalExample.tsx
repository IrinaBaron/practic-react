import React from "react";

export function MyHooks({title, id}: { title: string, id?: string}) {
  const [isMounted] = useIsMounted();

  return (
    <div>{title} {id}</div>
  )
}


export function useIsMounted() {
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true)
  }, [])

  return [isMounted]
}