"use client"

import React , {FC} from "react"
import { useThemeContext } from "@/contexts/theme-context";

const Services:FC = () => {
    const { isDarkThemeOn , setIsDarkThemeOn } = useThemeContext();
  return (
    <div>
        Hello Services
      
    </div>
  )
};

export default Services;
