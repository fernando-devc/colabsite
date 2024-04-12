// app/components/ThemeSwitcher.tsx
"use client";

import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { Button } from "@nextui-org/react";
import {useTheme} from "next-themes";
import { useEffect, useState } from "react";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  const handlechangetheme = () => {
    setTheme(theme === "dark"? "light" : "dark")
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  if(!mounted) return null

  return (
    <>
      <Button onClick={handlechangetheme} isIconOnly variant="flat" color="success">
        {theme === "dark"?
        <SunIcon className="h-6 w-6"/>
        :
        <MoonIcon className="h-6 w-6"/>
    }
      </Button>
    </>
  )
};